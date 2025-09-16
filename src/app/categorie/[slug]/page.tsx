import { getPostsByCategory, getCategories } from "../../../utils/api";
import PostDetails from "../../../components/PostDetails";
import type { WordPressCategory } from "../../../types";
import type { Metadata } from "next";

// Ajout du revalidate pour ISR
export const revalidate = 3600;

// La fonction generateStaticParams doit être une export nommé au niveau racine
export async function generateStaticParams() {
  try {
    const categories = await getCategories();
    const filteredCategories = categories.filter((cat) => cat.id !== 1);
    return filteredCategories.map((category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error("Erreur lors de la génération des paramètres:", error);
    return [{ slug: "services" }];
  }
}

// Page principale
type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const categories = await getCategories();
  const category = categories.find((cat) => cat.slug === params.slug);
  const posts = category ? await getPostsByCategory(category.id) : [];

  return (
    <div className="w-full overflow-x-hidden">
      {posts.length > 0 && (
        <PostDetails post={posts[0]} categories={categories} />
      )}
    </div>
  );
}

// Métadonnées
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const categories = await getCategories();
  const category = categories.find(
    (cat: WordPressCategory) => cat.slug === params.slug
  );

  return {
    title: category?.name || "Catégorie",
    description: category?.description || "",
  };
}
