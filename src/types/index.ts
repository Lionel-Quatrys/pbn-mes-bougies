// src/types/index.ts

export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  categories: number[];
  featured_media: number;
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
  productInfo?: {
    prix: string;
    frais_de_port: string;
    categorie: string;
    stock: string;
    description: string;
  };
}

export interface WordPressMedia {
  source_url: string;
  alt_text: string;
  media_details: {
    sizes: {
      full: { source_url: string };
      medium: { source_url: string };
      thumbnail: { source_url: string };
    };
  };
}

export interface WordPressPage {
  id: number;
  title: {
    rendered: string;
    raw?: string;
  };
  content: {
    rendered: string;
    raw?: string;
  };
  slug: string;
  excerpt: {
    rendered: string;
    raw?: string;
  };
  status: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: WordPressMedia[];
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count: number;
}
