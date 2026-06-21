export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
};

export interface Innovation {
  id: string;
  tabLabel: string;

  title: {
    line1: string;
    highlight: string;
    line2?: string;
  };

  description: string;

  bullets: string[];

  ctaText: string;
  ctaHref: string;

  image: string;
}
