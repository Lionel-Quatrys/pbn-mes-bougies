import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategoriesWithPosts } from "@/utils/api";

export const metadata = {
  title: "Mes Bougies - Bougies artisanales et naturelles",
  description:
    "Découvrez notre collection de bougies artisanales, naturelles et parfumées. Fabriquées avec amour pour créer une ambiance chaleureuse et apaisante dans votre intérieur.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoriesWithPosts = await getCategoriesWithPosts();

  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer categoriesWithPosts={categoriesWithPosts} />
      </body>
    </html>
  );
}
