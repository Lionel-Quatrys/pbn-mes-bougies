"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { WordPressCategory, WordPressPost } from "@/types";

interface HeaderProps {
  categories?: WordPressCategory[];
  posts?: WordPressPost[];
}

const Header: React.FC<HeaderProps> = ({ categories = [], posts = [] }) => {
  const pathname = usePathname();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Nos Bougies", href: "/#collection" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-[90px] relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-yinmn-500 hover:text-yinmn-400 transition-colors">
              Mes Bougies
            </h1>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Liens principaux */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal-600 hover:text-charcoal-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Menu déroulant des catégories */}
            <div className="relative group flex items-center space-x-8">
              {categories.map((category) => (
                <div key={category.id} className="relative dropdown-trigger">
                  <Link
                    href={`/categorie/${category.slug}`}
                    className="text-charcoal-600 hover:text-charcoal-400 transition-colors"
                  >
                    {category.name}
                  </Link>

                  {/* Sous-menu des posts */}
                  <div className="dropdown-menu absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                    {posts
                      .filter((post) => post.categories.includes(category.id))
                      .slice(0, 5)
                      .map((post) => (
                        <Link
                          key={post.id}
                          href={`/article/${post.slug}`}
                          className="block px-4 py-2 text-sm text-charcoal-600 hover:bg-lavender-50 hover:text-charcoal-400"
                        >
                          {post.title.rendered}
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bouton Contact */}
          <Link
            href="/#contact"
            className="px-6 py-2 bg-yinmn-500 hover:bg-yinmn-400 text-white rounded-lg transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
