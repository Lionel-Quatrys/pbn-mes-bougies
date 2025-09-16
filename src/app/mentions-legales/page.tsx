import Link from "next/link";

export default function MentionsLegales() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-eerie_black-800 mb-8">
        Mentions Légales
      </h1>
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">
          Éditeur du Site
        </h2>
        <p className="text-eerie_black-700">
          Le site https://www.disco-mobile-dj-dany.fr/ est édité par :
        </p>
        <p className="text-eerie_black-700">
          Disco Mobile DJ Dany
          <br />
          Adresse : 12 Rue de la Musique, 31000 Toulouse, France
          <br />
          Email :{" "}
          <a
            href="mailto:contact@disco-mobile-dj-dany.fr"
            className="text-orange-500 hover:text-orange-400"
          >
            contact@disco-mobile-dj-dany.fr
          </a>
          <br />
          SIRET : 123 456 789 00010
        </p>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          Directeur de la Publication
        </h2>
        <p className="text-eerie_black-700">Dany Martin</p>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          Hébergement
        </h2>
        <p className="text-eerie_black-700">
          Le site est hébergé par :<br />
          Cloudflare, Inc.
          <br />
          185 Berry Street, Suite 550
          <br />
          San Francisco, CA 94107, États-Unis
        </p>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          Propriété Intellectuelle
        </h2>
        <p className="text-eerie_black-700">
          L'ensemble des contenus présents sur ce site, incluant textes, images,
          graphismes, logos, vidéos, et icônes, est la propriété exclusive de
          Disco Mobile DJ Dany. Toute reproduction, distribution, modification,
          ou utilisation non autorisée de ces éléments est strictement
          interdite.
        </p>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          Protection des Données Personnelles
        </h2>
        <p className="text-eerie_black-700">
          Conformément à la réglementation en vigueur (RGPD), vous disposez d'un
          droit d'accès, de rectification, de suppression et d'opposition aux
          données personnelles vous concernant. Pour exercer ce droit, veuillez
          nous contacter à l'adresse email mentionnée ci-dessus.
        </p>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          Responsabilité
        </h2>
        <p className="text-eerie_black-700">
          Disco Mobile DJ Dany s'efforce de fournir des informations fiables sur
          ce site. Toutefois, il ne pourra être tenu responsable des omissions,
          des inexactitudes et des carences dans la mise à jour, qu'elles soient
          de son fait ou du fait des tiers partenaires qui lui fournissent ces
          informations.
        </p>

        <h2 className="text-2xl font-bold text-orange-500 mt-8 mb-4">
          Crédits
        </h2>
        <p className="text-eerie_black-700">
          Les mentions légales ont été réalisées par l'équipe de Disco Mobile DJ
          Dany.
        </p>
      </div>
    </div>
  );
}
