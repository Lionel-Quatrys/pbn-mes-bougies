import React from "react";
import { getPosts, getCategories } from "../utils/api";
import type { WordPressPost, WordPressCategory } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { decodeHtmlEntities } from "../utils/helpers";

export default async function Home() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);

  const recentPosts = posts.slice(0, 3);
  const chunkSize = 5;
  const postColumns = [];

  for (let i = 0; i < posts.length; i += chunkSize) {
    postColumns.push(posts.slice(i, i + chunkSize));
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        id="accueil"
        className="py-20 bg-charcoal-500 text-white scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Bougies artisanales – Une touche de magie dans votre intérieur
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Bienvenue dans notre univers parfumé ! Découvrez notre collection
              de bougies artisanales créées avec passion. Chaque bougie est
              fabriquée avec des
              <strong> matériaux naturels </strong> et des{" "}
              <strong>fragrances soigneusement sélectionnées</strong>. Que vous
              cherchiez une <strong>ambiance cosy</strong> ou un
              <strong> cadeau unique</strong>, vous trouverez ici votre bonheur
              pour illuminer vos moments précieux.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section id="collection" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/section-1.jpg"
                alt="Découvrez nos bougies artisanales naturelles"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-yinmn-500 mb-4">
                🌟 Bougies Naturelles et Artisanales
              </h2>
              <p className="text-charcoal-500 leading-relaxed">
                Chaque bougie est unique et fabriquée avec soin dans notre
                atelier. Nous sélectionnons les meilleures cires végétales et
                des parfums naturels pour créer des bougies qui subliment votre
                intérieur tout en respectant l'environnement et votre bien-être.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="parfums" className="py-16 bg-lavender-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <Image
                src="/images/section-2.jpg"
                alt="Notre collection de parfums et de bougies"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-yinmn-500 mb-4">
                🌺 Collections et Parfums
              </h2>
              <p className="text-charcoal-700 leading-relaxed">
                Découvrez notre gamme variée de fragrances soigneusement
                sélectionnées. Des senteurs florales aux notes boisées, en
                passant par les parfums gourmands, chaque bougie raconte une
                histoire et crée une ambiance unique dans votre espace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="savoir-faire" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/section-3.jpg"
                alt="Notre processus de fabrication artisanale"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-yinmn-500 mb-4">
                🕯️ Notre Savoir-Faire Artisanal
              </h2>
              <p className="text-charcoal-500 leading-relaxed">
                La fabrication de bougies est un art qui demande passion et
                précision. Nous vous partageons ici notre processus de création,
                le choix minutieux des matières premières et nos conseils
                d'experts pour profiter au mieux de vos bougies artisanales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-16 bg-lavender-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <Image
                src="/images/section-4.jpg"
                alt="Contactez-nous pour personnaliser vos bougies"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-yinmn-500 mb-4">
                Contactez-Nous
              </h2>
              <p className="text-charcoal-500 leading-relaxed mb-6">
                Une question sur nos bougies ? Envie de connaître nos nouveautés
                ou de passer une commande personnalisée ? Contactez-nous via le
                formulaire ci-dessous. Nous serons ravis de vous accompagner
                dans le choix de vos bougies artisanales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire de Contact */}
      <section id="contact-form" className="py-24 bg-white scroll-mt-20 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-yinmn-500 mb-4">
              Contactez-nous
            </h2>
            <p className="text-charcoal-500 text-lg">
              Envie d'en savoir plus sur nos bougies ou de passer commande ?
              Écrivez-nous !
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="bg-white shadow-lg rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-charcoal-500 mb-2"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="w-full bg-white border border-charcoal-300 rounded-lg px-4 py-3 text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-yinmn-500 focus:border-transparent transition-all"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-charcoal-500 mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="w-full bg-white border border-charcoal-300 rounded-lg px-4 py-3 text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-yinmn-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-charcoal-500 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-white border border-charcoal-300 rounded-lg px-4 py-3 text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-yinmn-500 focus:border-transparent transition-all"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yinmn-600 hover:bg-yinmn-500 text-white font-medium py-4 rounded-lg transform hover:scale-[1.02] transition-all duration-200"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Section Articles Récents */}
      <section className="py-24 bg-lavender-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-yinmn-500 text-center mb-4">
            Nos derniers articles
          </h2>
          <p className="text-charcoal-500 text-center mb-12 text-lg">
            Découvrez nos conseils et astuces pour profiter au mieux de vos
            bougies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <div className="relative h-48">
                    <Image
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      alt={post.title.rendered}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold text-charcoal-800 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: decodeHtmlEntities(post.title.rendered),
                    }}
                  />
                  <div
                    className="text-charcoal-600 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: decodeHtmlEntities(post.excerpt.rendered),
                    }}
                  />
                  <Link
                    href={`/article/${post.slug}`}
                    className="inline-block bg-yinmn-500 text-white px-6 py-3 rounded-lg hover:bg-yinmn-400 transition-colors duration-300"
                  >
                    Lire la suite
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
