export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  thumbnail: string;
  href: string;
};

export type BlogPostMeta = {
  title: string;
  description: string;
  author: string;
  authorAvatar?: string;
  date: string;
  readTime?: number;
  slug: string;
};
