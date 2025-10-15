import { Metadata } from "next";
import { getProductPosts } from "@/utils/api";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Nos Produits | MesBougies",
  description:
    "Découvrez notre collection de bougies artisanales en cire d'abeille 100% naturelle. Bougies décoratives et produits de qualité pour sublimer votre intérieur.",
  openGraph: {
    title: "Nos Produits | MesBougies",
    description:
      "Découvrez notre collection de bougies artisanales en cire d'abeille 100% naturelle.",
    type: "website",
  },
};

export default async function ProduitsPage() {
  const products = await getProductPosts();

  const breadcrumbItems = [{ label: "Produits", path: "/produits" }];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* En-tête de la page */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Produits
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre collection exclusive de bougies artisanales en cire
            d'abeille 100% naturelle. Chaque produit est fabriqué avec passion
            et savoir-faire pour sublimer votre intérieur.
          </p>
        </div>

        {/* Grille des produits */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              // Extract featured image
              const featuredImage = product._embedded?.["wp:featuredmedia"]?.[0]
                ? {
                    source_url:
                      product._embedded["wp:featuredmedia"][0].source_url,
                    alt_text:
                      product._embedded["wp:featuredmedia"][0].alt_text ||
                      product.title.rendered,
                  }
                : undefined;

              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  slug={product.slug}
                  excerpt={product.excerpt}
                  productInfo={product.productInfo}
                  featuredImage={featuredImage}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Aucun produit disponible
            </h3>
            <p className="text-gray-600">
              Nos produits seront bientôt disponibles. Revenez nous voir
              prochainement !
            </p>
          </div>
        )}

        {/* Section informative */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi choisir nos bougies artisanales ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  100% Naturel
                </h3>
                <p className="text-gray-600">
                  Cire d'abeille pure, sans additifs chimiques ni parfums
                  artificiels.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Artisanal
                </h3>
                <p className="text-gray-600">
                  Fabriquées à la main avec plus de 15 ans d'expertise dans
                  l'art de la bougie.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Longue Durée
                </h3>
                <p className="text-gray-600">
                  Combustion lente et régulière pour profiter plus longtemps de
                  vos bougies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
