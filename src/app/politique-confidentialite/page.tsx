import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | MesBougies",
  description:
    "Politique de confidentialité de MesBougies - Protection des données personnelles, cookies et droits des utilisateurs selon le RGPD.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Politique de Confidentialité
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <p className="text-sm text-blue-600 mb-2 font-semibold">
                Dernière mise à jour : 15 octobre 2025
              </p>
              <p className="text-sm text-gray-600 mb-0">
                Cette politique est conforme au RGPD et à la loi française
                "Informatique et Libertés"
              </p>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Chez MesBougies, nous nous engageons à protéger et respecter votre
              vie privée. Cette politique de confidentialité explique comment
              nous collectons, utilisons, stockons et protégeons vos données
              personnelles lorsque vous visitez notre site web ou utilisez nos
              services.
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              1. Responsable du Traitement
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700 mb-0">
                <strong>MesBougies SARL</strong>
                <br />
                15 Rue des Artisans, 69001 Lyon, France
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
              </p>
            </div>

            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              2. Données Collectées
            </h2>
            <p className="text-gray-700">
              Nous collectons uniquement les données nécessaires au bon
              fonctionnement de nos services. Les informations que nous pouvons
              collecter incluent :
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.1 Données fournies directement par vous
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Formulaire de contact :</strong> nom, prénom, email,
                téléphone, message
              </li>
              <li>
                <strong>Commandes :</strong> informations de facturation et
                livraison
              </li>
              <li>
                <strong>Newsletter :</strong> adresse email (avec consentement
                explicite)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.2 Données collectées automatiquement
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Données techniques :</strong> adresse IP, type de
                navigateur, pages visitées
              </li>
              <li>
                <strong>Cookies techniques :</strong> nécessaires au
                fonctionnement du site
              </li>
              <li>
                <strong>Statistiques anonymes :</strong> pour améliorer nos
                services
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              3. Finalités du Traitement
            </h2>
            <p className="text-gray-700 mb-4">
              Vos données personnelles sont traitées pour les finalités
              suivantes :
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">
                  Gestion des commandes
                </h4>
                <p className="text-sm text-green-700">
                  Traitement et suivi de vos achats de bougies artisanales
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Service client
                </h4>
                <p className="text-sm text-blue-700">
                  Réponse à vos questions et support technique
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">
                  Communication
                </h4>
                <p className="text-sm text-purple-700">
                  Newsletter et informations sur nos nouveaux produits
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">
                  Amélioration
                </h4>
                <p className="text-sm text-orange-700">
                  Analyse pour améliorer notre site et nos services
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              4. Base Légale des Traitements
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                <strong>Exécution d'un contrat :</strong> traitement de vos
                commandes
              </li>
              <li>
                <strong>Consentement :</strong> newsletter, cookies
                non-essentiels
              </li>
              <li>
                <strong>Intérêt légitime :</strong> amélioration de nos
                services, sécurité
              </li>
              <li>
                <strong>Obligation légale :</strong> facturation, comptabilité
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              5. Conservation des Données
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <ul className="list-disc pl-6 text-gray-700 mb-0">
                <li>
                  <strong>Données de contact :</strong> 3 ans après le dernier
                  contact
                </li>
                <li>
                  <strong>Données de commande :</strong> 10 ans (obligations
                  comptables)
                </li>
                <li>
                  <strong>Newsletter :</strong> jusqu'à désinscription
                </li>
                <li>
                  <strong>Cookies techniques :</strong> 13 mois maximum
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              6. Partage des Données
            </h2>
            <p className="text-gray-700 mb-4">
              Nous ne vendons jamais vos données personnelles. Nous pouvons les
              partager uniquement avec :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                <strong>Transporteurs :</strong> pour la livraison de vos
                commandes
              </li>
              <li>
                <strong>Prestataires techniques :</strong> hébergement,
                maintenance (sous contrat de confidentialité)
              </li>
              <li>
                <strong>Autorités légales :</strong> si requis par la loi
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              7. Cookies et Technologies Similaires
            </h2>
            <p className="text-gray-700 mb-4">
              Notre site utilise différents types de cookies :
            </p>

            <div className="space-y-3 mb-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Cookies essentiels
                </h4>
                <p className="text-sm text-gray-600">
                  Nécessaires au fonctionnement du site (panier, session)
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Cookies de performance
                </h4>
                <p className="text-sm text-gray-600">
                  Statistiques anonymes pour améliorer notre site
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-800">
                  Cookies de personnalisation
                </h4>
                <p className="text-sm text-gray-600">
                  Préférences utilisateur (avec votre consentement)
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              8. Vos Droits (RGPD)
            </h2>
            <p className="text-gray-700 mb-4">
              Vous disposez des droits suivants concernant vos données
              personnelles :
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  ✓ Droit d'accès
                </h4>
                <p className="text-sm text-blue-700">
                  Connaître les données que nous détenons
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">
                  ✓ Droit de rectification
                </h4>
                <p className="text-sm text-green-700">
                  Corriger les données inexactes
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">
                  ✓ Droit à l'effacement
                </h4>
                <p className="text-sm text-red-700">
                  Supprimer vos données (droit à l'oubli)
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  ✓ Droit de portabilité
                </h4>
                <p className="text-sm text-yellow-700">Récupérer vos données</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">
                  ✓ Droit de limitation
                </h4>
                <p className="text-sm text-purple-700">
                  Restreindre le traitement
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">
                  ✓ Droit d'opposition
                </h4>
                <p className="text-sm text-orange-700">
                  Vous opposer au traitement
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-8">
              <h4 className="font-semibold text-blue-800 mb-3">
                💡 Comment exercer vos droits ?
              </h4>
              <p className="text-blue-700 mb-3">
                Pour exercer vos droits, contactez-nous :
              </p>
              <ul className="text-blue-700 space-y-1">
                <li>
                  • <strong>Email :</strong>{" "}
                  <a
                    href="mailto:contact@mesbougies.fr"
                    className="text-blue-800 hover:text-blue-900"
                  >
                    contact@mesbougies.fr
                  </a>
                </li>
                <li>
                  • <strong>Courrier :</strong> MesBougies SARL, 15 Rue des
                  Artisans, 69001 Lyon
                </li>
                <li>
                  • <strong>Délai de réponse :</strong> 1 mois maximum
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              9. Sécurité des Données
            </h2>
            <p className="text-gray-700 mb-4">
              Nous mettons en place des mesures techniques et organisationnelles
              appropriées :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Chiffrement des données sensibles (SSL/TLS)</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Sauvegardes régulières et sécurisées</li>
              <li>Formation du personnel à la protection des données</li>
              <li>Audits de sécurité réguliers</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              10. Transferts Internationaux
            </h2>
            <p className="text-gray-700 mb-6">
              Vos données sont principalement traitées en France/UE. En cas de
              transfert hors UE, nous nous assurons d'un niveau de protection
              équivalent au RGPD (clauses contractuelles types, décisions
              d'adéquation).
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              11. Réclamations
            </h2>
            <p className="text-gray-700 mb-6">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez
              introduire une réclamation auprès de la CNIL :
              <br />
              <a
                href="https://www.cnil.fr"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.cnil.fr
              </a>
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              12. Modifications
            </h2>
            <p className="text-gray-700 mb-6">
              Cette politique peut être modifiée pour refléter les évolutions
              légales ou de nos services. Les modifications importantes vous
              seront notifiées par email ou via notre site.
            </p>

            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">
              13. Contact - Délégué à la Protection des Données
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-3">
                Pour toute question relative à cette politique ou à vos données
                personnelles :
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>MesBougies SARL</strong>
                </p>
                <p>15 Rue des Artisans, 69001 Lyon, France</p>
                <p>
                  Email :{" "}
                  <a
                    href="mailto:contact@mesbougies.fr"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    contact@mesbougies.fr
                  </a>
                </p>
                <p>
                  Formulaire :{" "}
                  <Link
                    href="/#contact"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    page contact
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Cette politique de confidentialité est conforme au RGPD
                (Règlement UE 2016/679) et à la loi française n°78-17 du 6
                janvier 1978 modifiée.
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
