import axios from "axios";
import type { WordPressPage } from "@/types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
});

const transformImageUrl = (url: string): string => {
  if (!url) return "/images/default-image.jpg";

  const match = url.match(/wp-content\/uploads\/(.*)/);
  if (match) {
    return `https://wp.mesbougies.fr/wp-content/uploads/${match[1]}`;
  }

  return url;
};

const fetchWithTimeout = async (url: string, options: RequestInit = {}) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      next: {
        tags: ["wp-content"],
        revalidate: 0, // Mettre à 0 pour forcer la revalidation
      },
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        ...(options.headers || {}),
      },
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    console.error(`Erreur de fetch pour ${url}:`, error);
    return null;
  }
};

export const getPosts = async () => {
  try {
    const response = await fetchWithTimeout(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?_embed&per_page=100`
    );

    if (!response) return [];
    if (!response.ok) {
      console.error("Erreur API:", response.status);
      return [];
    }

    const posts = await response.json();
    // Correction des URLs des images si nécessaire
    return posts.map((post: any) => {
      if (post._embedded?.["wp:featuredmedia"]?.[0]) {
        const media = post._embedded["wp:featuredmedia"][0];
        // Utiliser l'URL corrigée
        media.source_url = transformImageUrl(media.source_url);

        // Corriger aussi les URLs dans le contenu
        if (post.content?.rendered) {
          // Remplacer toutes les variantes possibles de l'ancienne URL
          post.content.rendered = post.content.rendered
            .replace(
              /https?:\/\/(www\.)?(wp\.)?dj-mariage-toulouse\.fr/g,
              "https://wp.disco-mobile-dj-dany.fr"
            )
            .replace(
              /\/\/dj-mariage-toulouse\.fr/g,
              "//wp.disco-mobile-dj-dany.fr"
            );
        }
      }
      return post;
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des posts:", error);
    return [];
  }
};

export const getPost = async (slug: string) => {
  try {
    const response = await fetchWithTimeout(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?slug=${slug}&_embed`
    );

    if (!response || !response.ok) return null;
    const posts = await response.json();
    if (posts[0]) {
      posts[0].content.rendered = posts[0].content.rendered
        .replace(
          /https?:\/\/(www\.)?(wp\.)?dj-mariage-toulouse\.fr/g,
          "https://wp.disco-mobile-dj-dany.fr"
        )
        .replace(
          /\/\/dj-mariage-toulouse\.fr/g,
          "//wp.disco-mobile-dj-dany.fr"
        );
      if (posts[0]._embedded?.["wp:featuredmedia"]?.[0]) {
        posts[0]._embedded["wp:featuredmedia"][0].source_url =
          transformImageUrl(
            posts[0]._embedded["wp:featuredmedia"][0].source_url
          );
      }
    }
    return posts[0] || null;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'article:", error);
    return null;
  }
};

export const verifyToken = async () => {
  try {
    const response = await api.post("/jwt-auth/v1/token/validate");
    return response.data;
  } catch (error) {
    console.error("Erreur de validation du token:", error);
    throw error;
  }
};

export const getPages = async () => {
  try {
    const response = await fetchWithTimeout(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?_embed&per_page=100`
    );

    if (!response) return [];
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const totalPages = response.headers.get("X-WP-Total");
    console.log("Nombre total de pages:", totalPages);

    return response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des pages:", error);
    return [];
  }
};

export const getPage = async (slug: string) => {
  try {
    const response = await fetchWithTimeout(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?slug=${slug}&_embed`
    );
    if (!response || !response.ok) return null;
    const pages = await response.json();
    return pages[0] || null;
  } catch (error) {
    console.error("Erreur lors de la récupération de la page:", error);
    return null;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetchWithTimeout(
      `${
        process.env.NEXT_PUBLIC_WORDPRESS_API_URL
      }/categories?_embed&per_page=100&orderby=name&order=asc&timestamp=${Date.now()}`
    );
    if (!response) return [];
    if (!response.ok) return [];
    const categories = await response.json();
    return categories; // Retourner toutes les catégories, y compris celles sans articles
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
    return [];
  }
};

export const getPostsByCategory = async (categoryId: number) => {
  try {
    const response = await fetchWithTimeout(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?categories=${categoryId}&_embed&per_page=100`
    );
    if (!response || !response.ok) return [];
    return response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des articles:", error);
    return [];
  }
};

export const getAdjacentPosts = async (currentPostId: number) => {
  try {
    const [prevPost, nextPost] = await Promise.all([
      fetchWithTimeout(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?before=${currentPostId}&per_page=1&_embed`
      ),
      fetchWithTimeout(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?after=${currentPostId}&per_page=1&_embed`
      ),
    ]);

    return {
      prev: prevPost && prevPost.ok ? (await prevPost.json())[0] || null : null,
      next: nextPost && nextPost.ok ? (await nextPost.json())[0] || null : null,
    };
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des articles adjacents:",
      error
    );
    return { prev: null, next: null };
  }
};

export const getCategoriesWithPosts = async () => {
  try {
    const categories = await getCategories();
    const allPosts = await getPosts();

    const categoriesWithPosts = await Promise.all(
      categories.map(async (category) => {
        let posts;
        if (
          category.slug === "uncategorized" ||
          category.slug === "non-classe"
        ) {
          // Pour les articles non catégorisés, filtrer les articles qui n'ont pas de catégorie
          posts = allPosts.filter(
            (post) => !post.categories || post.categories.length === 0
          );
        } else {
          // Pour les autres catégories, récupérer normalement
          posts = await getPostsByCategory(category.id);
        }
        return {
          ...category,
          posts: posts.slice(0, 5), // Limite à 5 articles par catégorie
        };
      })
    );
    return categoriesWithPosts;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des catégories avec posts:",
      error
    );
    return [];
  }
};
