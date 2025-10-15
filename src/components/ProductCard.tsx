import Image from "next/image";
import Link from "next/link";

interface ProductInfo {
  prix: string;
  frais_de_port: string;
  categorie: string;
  stock: string;
  description: string;
}

interface ProductCardProps {
  id: number;
  title: { rendered: string };
  slug: string;
  excerpt: { rendered: string };
  productInfo: ProductInfo;
  featuredImage?: {
    source_url: string;
    alt_text: string;
  };
}

export default function ProductCard({
  id,
  title,
  slug,
  excerpt,
  productInfo,
  featuredImage,
}: ProductCardProps) {
  const imageUrl = featuredImage?.source_url || "/images/default-product.jpg";
  const imageAlt = featuredImage?.alt_text || title.rendered;

  // Clean HTML from excerpt
  const cleanExcerpt = excerpt.rendered.replace(/<[^>]*>/g, "").trim();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image du produit */}
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge stock */}
        {productInfo.stock && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            Stock: {productInfo.stock}
          </div>
        )}
      </div>

      {/* Contenu de la fiche produit */}
      <div className="p-6">
        {/* Titre du produit */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title.rendered}
        </h3>

        {/* Catégorie */}
        {productInfo.categorie && (
          <div className="text-sm text-gray-600 mb-2">
            <span className="bg-gray-100 px-2 py-1 rounded">
              {productInfo.categorie}
            </span>
          </div>
        )}

        {/* Prix principal */}
        {productInfo.prix && (
          <div className="text-2xl font-bold text-green-600 mb-3">
            {productInfo.prix}
          </div>
        )}

        {/* Frais de port */}
        {productInfo.frais_de_port && (
          <div className="text-sm text-gray-600 mb-3">
            <span className="inline-flex items-center">
              <svg
                className="w-4 h-4 mr-1"
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
              Livraison: {productInfo.frais_de_port}
            </span>
          </div>
        )}

        {/* Extrait de description */}
        {cleanExcerpt && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {cleanExcerpt}
          </p>
        )}

        {/* Boutons d'action */}
        <div className="flex gap-2">
          <Link
            href={`/article/${slug}`}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Voir le produit
          </Link>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0L4 5M7 13h10m0 0v6a1 1 0 01-1 1H8a1 1 0 01-1-1v-6m8 0V9a1 1 0 00-1-1H9a1 1 0 00-1 1v4.01"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
