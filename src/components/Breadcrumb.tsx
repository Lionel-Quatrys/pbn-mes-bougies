import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="mb-8 text-sm" aria-label="Fil d'Ariane">
      <ol className="flex flex-wrap items-center space-x-2">
        <li>
          <Link
            href="/"
            className="text-orange-600 hover:text-orange-800 transition-colors"
          >
            Accueil
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center space-x-2">
            <span className="text-gray-400">/</span>
            {index === items.length - 1 ? (
              <span className="text-eerie_black-800">{item.label}</span>
            ) : (
              <Link
                href={item.path}
                className="text-orange-600 hover:text-orange-800 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
