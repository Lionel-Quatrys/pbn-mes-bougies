import Link from "next/link";
import Image from "next/image";
import type { WordPressPost, WordPressCategory } from "../types";
import Breadcrumb from "./Breadcrumb";
import { decodeHtmlEntities } from "../utils/helpers";

interface ProductInfo {
  prix: string;
  frais_de_port: string;
  categorie: string;
  stock: string;
  description: string;
}

interface ProductDetailsProps {
  post: WordPressPost & { productInfo?: ProductInfo };
  categories: WordPressCategory[];
}

export default function ProductDetails({
  post,
  categories,
}: ProductDetailsProps) {
  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          Produit non trouvé
        </h1>
        <Link
          href="/produits"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Retour aux produits
        </Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Produits", path: "/produits" },
    { label: post.title.rendered, path: `/article/${post.slug}` },
  ];

  const productInfo = post.productInfo;
  const stockNumber = productInfo?.stock ? parseInt(productInfo.stock) : 0;
  const isInStock = stockNumber > 0;

  // Clean excerpt to remove product info (price, stock, etc.) and keep only description
  const getCleanDescription = () => {
    if (!post.excerpt?.rendered) return "";

    let cleanExcerpt = post.excerpt.rendered;

    // Remove common product info patterns
    cleanExcerpt = cleanExcerpt
      .replace(/<p>.*?Prix\s*:.*?<\/p>/gi, "") // Remove price paragraphs
      .replace(/Prix\s*:\s*[\d,]+€?[^<\n]*/gi, "") // Remove price lines
      .replace(/frais\s*de\s*port\s*:[^<\n]*/gi, "") // Remove shipping info
      .replace(/Catégorie\s*:[^<\n]*/gi, "") // Remove category info
      .replace(/stock\s*:\s*\d+[^<\n]*/gi, "") // Remove stock info
      .replace(/frais_de_port\s*:[^<\n]*/gi, "") // Remove frais_de_port info
      .replace(/Description\s*:\s*/gi, "") // Remove "Description:" label
      .replace(/<br\s*\/?>/gi, " ") // Replace br tags with spaces
      .replace(/\s+/g, " ") // Normalize spaces
      .trim();

    return cleanExcerpt;
  };

  const cleanDescription = getCleanDescription();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Section Image */}
          <div className="relative">
            {post._embedded?.["wp:featuredmedia"]?.[0] ? (
              <div className="relative h-96 lg:h-full min-h-[500px]">
                <Image
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={
                    post._embedded["wp:featuredmedia"][0].alt_text ||
                    post.title.rendered
                  }
                  fill
                  className="object-cover"
                  priority
                />
                {/* Badge stock sur l'image */}
                {productInfo?.stock && (
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                      isInStock
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {isInStock ? `Stock: ${stockNumber}` : "Rupture de stock"}
                  </div>
                )}
              </div>
            ) : (
              <div className="h-96 lg:h-full min-h-[500px] bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>Image non disponible</p>
                </div>
              </div>
            )}
          </div>

          {/* Section Informations Produit */}
          <div className="p-8 lg:p-12">
            {/* Titre du produit */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {decodeHtmlEntities(post.title.rendered)}
            </h1>

            {/* Catégorie */}
            {productInfo?.categorie && (
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {productInfo.categorie}
                </span>
              </div>
            )}

            {/* Prix */}
            {productInfo?.prix && (
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">
                  {productInfo.prix}
                </span>
              </div>
            )}

            {/* Informations de livraison */}
            {productInfo?.frais_de_port && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center text-blue-800">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  <span className="font-medium">
                    Livraison: {productInfo.frais_de_port}
                  </span>
                </div>
              </div>
            )}

            {/* Stock */}
            {productInfo?.stock && (
              <div className="mb-6">
                <div
                  className={`inline-flex items-center px-3 py-2 rounded-lg ${
                    isInStock
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full mr-2 ${
                      isInStock ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <span className="font-medium">
                    {isInStock ? `${stockNumber} en stock` : "Rupture de stock"}
                  </span>
                </div>
              </div>
            )}

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  isInStock
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isInStock}
              >
                <div className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  {isInStock ? "Ajouter au panier" : "Rupture de stock"}
                </div>
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  Favoris
                </div>
              </button>
            </div>

            {/* Description courte */}
            {cleanDescription && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Résumé</h3>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: decodeHtmlEntities(cleanDescription),
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Description détaillée */}
        {productInfo?.description && (
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Description détaillée
            </h2>
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl prose-img:mx-auto prose-img:my-8 prose-img:max-w-full"
              dangerouslySetInnerHTML={{
                __html: decodeHtmlEntities(productInfo.description),
              }}
            />
          </div>
        )}

        {/* Section contact/commande */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Intéressé par ce produit ?
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Contactez-nous pour plus d'informations ou pour passer commande
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Bouton retour */}
        <div className="mt-8 text-center">
          <Link
            href="/produits"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux produits
          </Link>
        </div>
      </div>
    </div>
  );
}
