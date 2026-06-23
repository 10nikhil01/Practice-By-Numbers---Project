export const contactPageSchema = {
  "@context": "https://schema.org",

  "@type": "ContactPage",

  name: "Contact Practice by Numbers",

  url: "https://practice-by-numbers.vercel.app/contact-us",
};

export const contactOrganizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  name: "Practice by Numbers",

  url: "https://practice-by-numbers.vercel.app/contact-us",

  contactPoint: {
    "@type": "ContactPoint",

    contactType: "customer service",

    email: "support@example.com",

    availableLanguage: ["English"],
  },
};

export const contactFaqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "How can I contact Practice by Numbers?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "You can contact Practice by Numbers through our contact form or by requesting a demo.",
      },
    },

    {
      "@type": "Question",

      name: "Can I schedule a product demo?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes, our team can schedule a personalized demo for your dental practice.",
      },
    },

    {
      "@type": "Question",

      name: "Does Practice by Numbers support multi-location practices?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes, Practice by Numbers supports single-location and multi-location dental organizations.",
      },
    },
  ],
};
