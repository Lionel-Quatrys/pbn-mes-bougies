"use client";

import Error from "next/error";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang="fr">
      <body>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-yale-800 mb-4">
            Une erreur est survenue
          </h1>
          <p className="text-yale-600">
            Nous nous excusons pour la gêne occasionnée.
          </p>
        </div>
      </body>
    </html>
  );
}
