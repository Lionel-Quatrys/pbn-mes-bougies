import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | MesBougies",
  description:
    "Mentions légales du site MesBougies - Informations légales, éditeur, hébergement et protection des données personnelles.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Mentions Légales
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Éditeur du Site
            </h2>
            <p className="text-gray-700">Le site MesBougies est édité par :</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700 mb-0">
                <strong>MesBougies SARL</strong>
                <br />
                Adresse : 15 Rue des Artisans, 69001 Lyon, France
                <br />
                Téléphone : 04 78 23 45 67
                <br />
                Email :{" "}
                <a
                  href="mailto:contact@mesbougies.fr"
                  className="text-blue-600 hover:text-blue-800"
                >
                  contact@mesbougies.fr
                </a>
                <br />
                SIRET : 123 456 789 00025
                <br />
                TVA Intracommunautaire : FR12345678901
                <br />
                Capital social : 10 000 €
              </p>
            </div>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              Directeur de la Publication
            </h2>
            <p className="text-gray-700">
              Maxim Dubois - Gérant de MesBougies SARL
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              Hébergement
            </h2>
            <p className="text-gray-700">
              Le site est hébergé par :<br />
              <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789, États-Unis
              <br />
              Site web :{" "}
              <a
                href="https://vercel.com"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com
              </a>
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              Activité
            </h2>
            <p className="text-gray-700">
              MesBougies est spécialisée dans la fabrication et la vente de
              bougies artisanales en cire d'abeille 100% naturelle. Nous
              proposons une gamme de bougies décoratives fabriquées à la main
              avec plus de 15 ans d'expertise dans l'art de la bougie.
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              Propriété Intellectuelle
            </h2>
            <p className="text-gray-700">
              L'ensemble des contenus présents sur ce site, incluant textes,
              images, graphismes, logos, vidéos, et icônes, est la propriété
              exclusive de MesBougies SARL ou fait l'objet d'une autorisation
              d'utilisation. Toute reproduction, distribution, modification, ou
              utilisation non autorisée de ces éléments est strictement
              interdite sans accord préalable écrit.
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              Protection des Données Personnelles (RGPD)
            </h2>
            <p className="text-gray-700">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi française "Informatique et Libertés", vous
              disposez des droits suivants :
            </p>
            <ul className="text-gray-700 ml-6 list-disc">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit à la portabilité des données</li>
            </ul>
            <p className="text-gray-700">
              Pour exercer ces droits, veuillez nous contacter à l'adresse email
              :
              <a
                href="mailto:contact@mesbougies.fr"
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                contact@mesbougies.fr
              </a>
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              Cookies
            </h2>
            <p className="text-gray-700">
              Ce site utilise des cookies techniques nécessaires au bon
              fonctionnement du site et à l'amélioration de votre expérience de
              navigation. Aucun cookie de tracking ou publicitaire n'est utilisé
              sans votre consentement.
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              Responsabilité
            </h2>
            <p className="text-gray-700">
              MesBougies s'efforce de fournir des informations exactes et à jour
              sur ce site. Toutefois, nous ne pourrons être tenus responsables
              des omissions, des inexactitudes et des carences dans la mise à
              jour, qu'elles soient de notre fait ou du fait des tiers
              partenaires qui nous fournissent ces informations.
            </p>
            <p className="text-gray-700">
              L'utilisateur reconnaît utiliser ces informations sous sa
              responsabilité exclusive.
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              Droit Applicable et Juridiction
            </h2>
            <p className="text-gray-700">
              Les présentes mentions légales sont soumises au droit français. En
              cas de litige, et après recherche d'une solution amiable, les
              tribunaux de Lyon seront seuls compétents.
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              Contact
            </h2>
            <p className="text-gray-700">
              Pour toute question concernant ces mentions légales, vous pouvez
              nous contacter :
            </p>
            <ul className="text-gray-700 ml-6 list-disc">
              <li>
                Par email :{" "}
                <a
                  href="mailto:contact@mesbougies.fr"
                  className="text-blue-600 hover:text-blue-800"
                >
                  contact@mesbougies.fr
                </a>
              </li>
              <li>
                Par courrier : MesBougies SARL, 15 Rue des Artisans, 69001 Lyon,
                France
              </li>
              <li>
                Via notre{" "}
                <Link
                  href="/#contact"
                  className="text-blue-600 hover:text-blue-800"
                >
                  formulaire de contact
                </Link>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : 15 octobre 2025
              </p>
            </div>
          </div>
        </div>

        {/* Bouton retour */}
        <div className="mt-8 text-center">
          <Link
            href="/"
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
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
