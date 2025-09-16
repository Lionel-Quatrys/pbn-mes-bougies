export default function PolitiqueConfidentialite() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-eerie_black-800 mb-8">
        Politique de Confidentialité
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-sm text-orange-500 mb-8">
          Dernière mise à jour : Avril 2025
        </p>

        <p className="text-lg text-eerie_black-600 mb-8">
          Bienvenue sur le site Disco Mobile DJ Dany (ci-après "nous", "notre"
          ou "nos"). La protection de vos données personnelles est une priorité
          pour nous. Cette politique de confidentialité a pour objectif de vous
          informer sur la manière dont nous collectons, utilisons et protégeons
          vos informations personnelles.
        </p>

        <h2 className="text-2xl font-bold text-orange-500 mb-4">
          1. Collecte des Informations
        </h2>
        <p className="text-eerie_black-700">
          Nous collectons uniquement les informations que vous nous fournissez
          directement via notre formulaire de contact. Les données recueillies
          peuvent inclure :
        </p>
        <ul className="list-disc pl-6 text-eerie_black-700">
          <li>Nom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone</li>
          <li>Message ou demande spécifique</li>
        </ul>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          2. Utilisation des Données
        </h2>
        <p className="text-eerie_black-700">
          Les informations collectées sont utilisées dans les finalités
          suivantes :
        </p>
        <ul className="list-disc pl-6 text-eerie_black-700">
          <li>
            Répondre à vos demandes : Traitement et réponse à vos messages ou
            demandes de devis.
          </li>
          <li>
            Amélioration de nos services : Analyse des retours pour améliorer
            notre offre et notre site.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          3. Cookies
        </h2>
        <p className="text-eerie_black-700">
          Notre site n'utilise pas de cookies marketing ou publicitaires. Nous
          pouvons utiliser des cookies techniques nécessaires au bon
          fonctionnement du site.
        </p>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          4. Sécurité des Données
        </h2>
        <p className="text-eerie_black-700">
          Nous mettons en œuvre des mesures de sécurité appropriées pour
          protéger vos données personnelles contre tout accès non autorisé,
          modification, divulgation ou destruction.
        </p>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          5. Vos Droits
        </h2>
        <p className="text-eerie_black-700">
          Conformément à la réglementation en vigueur, vous disposez des droits
          suivants concernant vos données personnelles :
        </p>
        <ul className="list-disc pl-6 text-eerie_black-700">
          <li>
            Droit d'accès : Vous pouvez obtenir des informations sur les données
            que nous détenons à votre sujet.
          </li>
          <li>
            Droit de rectification : Vous pouvez demander la correction de
            données inexactes ou incomplètes.
          </li>
          <li>
            Droit à l'oubli : Vous pouvez demander la suppression de vos données
            personnelles.
          </li>
          <li>
            Droit à la limitation du traitement : Vous pouvez restreindre le
            traitement de vos données dans certaines situations.
          </li>
          <li>
            Droit à la portabilité : Vous pouvez recevoir vos données dans un
            format structuré et couramment utilisé.
          </li>
        </ul>

        <div className="bg-tangerine-50 p-6 rounded-lg my-8">
          <p className="text-eerie_black-700">
            Pour exercer ces droits, veuillez nous contacter à l'adresse
            suivante :
            <br />
            Email DPO :{" "}
            <a
              href="mailto:contact@disco-mobile-dj-dany.fr"
              className="text-orange-500 hover:text-orange-400"
            >
              contact@disco-mobile-dj-dany.fr
            </a>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          6. Modifications de la Politique de Confidentialité
        </h2>
        <p className="text-eerie_black-700">
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment. Toute modification sera publiée sur
          cette page et prendra effet immédiatement.
        </p>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          7. Contact
        </h2>
        <p className="text-eerie_black-700">
          Pour toute question ou demande concernant cette politique de
          confidentialité, veuillez nous contacter à :
          <br />
          <br />
          Disco Mobile DJ Dany
          <br />
          Email :{" "}
          <a
            href="mailto:contact@disco-mobile-dj-dany.fr"
            className="text-orange-500 hover:text-orange-400"
          >
            contact@disco-mobile-dj-dany.fr
          </a>
        </p>
      </div>
    </div>
  );
}
