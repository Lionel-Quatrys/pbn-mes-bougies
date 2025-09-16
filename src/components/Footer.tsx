"use client";

import React from "react";
import Link from "next/link";
import { WordPressCategory, WordPressPost } from "@/types";

interface FooterProps {
  categories?: WordPressCategory[];
  posts?: WordPressPost[];
}

const Footer: React.FC<FooterProps> = ({ categories = [], posts = [] }) => {
  return (
    <footer className="bg-charcoal-500 text-white py-12 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Liens principaux */}
          <div className="md:col-span-1 max-w-full">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Catégories et articles */}
          <div className="md:col-span-3 max-w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div key={category.id} className="min-w-0">
                  <Link
                    href={`/categorie/${category.slug}`}
                    className="font-bold text-white hover:text-gray-300 transition-colors block mb-4"
                  >
                    {category.name}
                  </Link>

                  <ul className="space-y-2 mt-4">
                    {posts
                      .filter((post) => post.categories.includes(category.id))
                      .slice(0, 3)
                      .map((post) => (
                        <li key={post.id} className="min-w-0">
                          <Link
                            href={`/article/${post.slug}`}
                            className="text-gray-400 hover:text-white text-sm transition-colors block py-1 truncate"
                          >
                            {post.title.rendered}
                          </Link>
                        </li>
                      ))}
                    <li>
                      <Link
                        href={`/categorie/${category.slug}`}
                        className="text-white hover:text-gray-300 text-sm transition-colors block py-1 mt-2"
                      >
                        Voir plus...
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 text-center text-gray-400">
          © {new Date().getFullYear()} Mes Bougies. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
