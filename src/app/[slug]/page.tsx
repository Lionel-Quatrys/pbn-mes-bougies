import { getPost, getCategories, getPosts } from "../../utils/api";
import PostDetails from "../../components/PostDetails";
import type { Metadata } from "next";

export const dynamicParams = false; // Ne pas générer de nouvelles pages à la demande

// Ajout du revalidate pour ISR
export const revalidate = 3600; // Revalidation toutes les heures (3600 secondes)

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
  const post = await getPost(params.slug);
  const categories = await getCategories();

  return (
    <div className="w-full overflow-x-hidden">
      <PostDetails post={post} categories={categories} />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Pas besoin d'attendre params, il est déjà résolu
  const post = await getPost(params.slug);

  return {
    title: post?.title.rendered || "Article non trouvé",
    description: post?.excerpt.rendered || "",
  };
}
