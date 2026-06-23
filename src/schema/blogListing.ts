export const blogListingSchema = {
  "@context": "https://schema.org",

  "@type": "Blog",

  name: "Practice by Numbers Blog",

  url: "https://practice-by-numbers.vercel.app/blog",

  description: "Dental practice growth resources and expert insights.",
  publisher: {
    "@type": "Organization",

    name: "Practice by Numbers",
  },
};

export const blogFaqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "What topics does the Practice by Numbers blog cover?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "The blog covers dental marketing, analytics, patient retention, communication, and practice growth.",
      },
    },

    {
      "@type": "Question",

      name: "How can dental practices improve patient retention?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Patient retention can be improved through communication, scheduling, follow-up systems, and patient engagement strategies.",
      },
    },
  ],
};
