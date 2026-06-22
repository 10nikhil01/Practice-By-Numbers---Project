interface ArticleSchemaProps {
  blog: {
    title: string;
    slug: string;
    excerpt: string;
    thumbnail: string;
    date: string;
    author?: string;
    featuredImage?: string;
    metaDescription?: string;
    publishedAt?: string;
    updatedAt?: string;
  };
}

export function getArticleSchema({ blog }: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline: blog.title,

    description: blog.metaDescription ?? blog.excerpt,

    image: [blog.featuredImage ?? blog.thumbnail],

    datePublished: blog.publishedAt ?? blog.date,

    dateModified: blog.updatedAt ?? blog.date,

    author: {
      "@type": "Organization",
      name: blog.author ?? "Practice by Numbers",
    },

    publisher: {
      "@type": "Organization",

      name: "Practice by Numbers",

      logo: {
        "@type": "ImageObject",

        url: "https://practice-by-numbers.vercel.app/logo.png",
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": `https://practice-by-numbers.vercel.app/blog/${blog.slug}`,
    },
  };
}

export function getBreadcrumbSchema(title: string, slug: string) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://practice-by-numbers.vercel.app",
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Blog",

        item: "https://practice-by-numbers.vercel.app/blog",
      },

      {
        "@type": "ListItem",

        position: 3,

        name: title,

        item: `https://practice-by-numbers.vercel.app/blog/${slug}`,
      },
    ],
  };
}

export function getAuthorSchema(author: string) {
  return {
    "@context": "https://schema.org",

    "@type": "Person",

    name: author,

    worksFor: {
      "@type": "Organization",

      name: "Practice by Numbers",
    },
  };
}

export function getBlogFaqSchema(
  faqs: {
    question: string;
    answer: string;
  }[],
) {
  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };
}
