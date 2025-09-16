import Link from "next/link";
import Image from "next/image";
import type { WordPressPost, WordPressCategory } from "../types";
import Breadcrumb from "./Breadcrumb";
import { decodeHtmlEntities } from "../utils/helpers";

type PostDetailsProps = {
  post: WordPressPost | null;
  categories: WordPressCategory[];
};

export default function PostDetails({ post, categories }: PostDetailsProps) {
  if (!post) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          Article non trouvé
        </h1>
        <Link
          href="/"
          className="text-eerie_black-600 hover:text-eerie_black-800 transition-colors"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: post.title.rendered, path: `/${post.slug}` },
  ];

  return (
    <article className="container mx-auto px-8 md:px-16 pt-20 max-w-full overflow-x-hidden">
      {/* Image à la une */}
      {post._embedded?.["wp:featuredmedia"]?.[0] && (
        <div className="relative h-[500px] mb-8 rounded-xl overflow-hidden">
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
        </div>
      )}

      {/* Titre */}
      <h1
        className="text-4xl font-bold text-eerie_black-800 mb-6"
        dangerouslySetInnerHTML={{
          __html: decodeHtmlEntities(post.title.rendered),
        }}
      />

      {/* Fil d'ariane */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Contenu de l'article */}
      <div
        className="prose prose-lg max-w-none prose-headings:text-berkeley_blue-800 prose-a:text-madder-600 hover:prose-a:text-madder-800 prose-img:rounded-xl prose-img:mx-auto prose-img:my-8 prose-img:max-w-full"
        dangerouslySetInnerHTML={{
          __html: decodeHtmlEntities(post.content.rendered),
        }}
      />

      {/* Formulaire de Contact */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            Contactez-nous
          </h2>
          <p className="text-eerie_black-500 text-lg">
            Une question ? Un projet ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="bg-white shadow-lg rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-eerie_black-500 mb-2"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="w-full bg-white border border-tangerine-300 rounded-lg px-4 py-3 text-eerie_black-800 placeholder-eerie_black-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Votre prénom"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-eerie_black-500 mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="w-full bg-white border border-tangerine-300 rounded-lg px-4 py-3 text-eerie_black-800 placeholder-eerie_black-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Votre nom"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-eerie_black-500 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white border border-tangerine-300 rounded-lg px-4 py-3 text-eerie_black-800 placeholder-eerie_black-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-eerie_black-500 mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-white border border-tangerine-300 rounded-lg px-4 py-3 text-eerie_black-800 placeholder-eerie_black-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Votre numéro"
                />
              </div>
            </div>

            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-eerie_black-500 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-white border border-tangerine-300 rounded-lg px-4 py-3 text-eerie_black-800 placeholder-eerie_black-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Comment pouvons-nous vous aider ?"
                required
              />
            </div>

            <div className="flex items-start mb-8">
              <input
                type="checkbox"
                id="acceptPolicy"
                className="w-4 h-4 border border-tangerine-300 rounded bg-white text-orange-500 focus:ring-orange-500 cursor-pointer"
                required
              />
              <label
                htmlFor="acceptPolicy"
                className="ml-3 text-sm text-eerie_black-500"
              >
                J'ai lu et j'accepte la{" "}
                <Link
                  href="/politique-confidentialite"
                  className="text-orange-500 hover:text-orange-400 underline"
                  target="_blank"
                >
                  politique de confidentialité
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium py-4 rounded-lg transform hover:scale-[1.02] transition-all duration-200"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </section>

      {/* Navigation retour */}
      <div className="mt-12 pt-8 pb-12 border-t border-gray-200">
        <Link
          href="/"
          className="inline-flex items-center text-cambridge_blue-600 hover:text-cambridge_blue-800 transition-colors"
        >
          <span className="mr-2">←</span>
          Retour à l'accueil
        </Link>
      </div>
    </article>
  );
}
