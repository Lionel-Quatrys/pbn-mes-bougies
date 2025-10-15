import PostDetails from "../../../components/PostDetails";
import ProductDetails from "../../../components/ProductDetails";
import {
  getPost,
  getProductPost,
  getCategories,
  getPosts,
} from "../../../utils/api";
import type { Metadata } from "next";

export const dynamicParams = false; // Ne pas générer de nouvelles pages à la demande

// Ajout du revalidate pour ISR
export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return (
      posts.map((post: any) => ({
        slug: post.slug,
      })) || []
    );
  } catch (error) {
    console.error("Erreur lors de la génération des paramètres:", error);
    // Retourner au moins une route statique par défaut
    return [{ slug: "accueil" }];
  }
}

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  // First try to get as product post (which includes product info)
  const productPost = await getProductPost(params.slug);
  const categories = await getCategories();

  // Check if this is a product by looking for productInfo
  if (productPost && productPost.productInfo) {
    return (
      <div className="w-full overflow-x-hidden">
        <ProductDetails post={productPost} categories={categories} />
      </div>
    );
  }

  // Otherwise, treat as regular post
  const post = await getPost(params.slug);

  return (
    <div className="w-full overflow-x-hidden">
      <PostDetails post={post} categories={categories} />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Try to get as product first
  const productPost = await getProductPost(params.slug);

  if (productPost && productPost.productInfo) {
    return {
      title: `${productPost.title.rendered} - ${
        productPost.productInfo.prix || ""
      } | MesBougies`,
      description:
        productPost.excerpt.rendered ||
        `Découvrez ${productPost.title.rendered} - ${
          productPost.productInfo.categorie || "Produit artisanal"
        } disponible chez MesBougies.`,
      openGraph: {
        title: productPost.title.rendered,
        description: productPost.excerpt.rendered || "",
        type: "website",
        images: productPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url
          ? [productPost._embedded["wp:featuredmedia"][0].source_url]
          : [],
      },
    };
  }

  // Otherwise treat as regular post
  const post = await getPost(params.slug);

  return {
    title: post?.title.rendered || "Article non trouvé",
    description: post?.excerpt.rendered || "",
  };
}
