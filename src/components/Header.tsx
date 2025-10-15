"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  const navigation = [{ name: "Produits", href: "/produits" }];

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
