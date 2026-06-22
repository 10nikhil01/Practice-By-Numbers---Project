export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Practice by Numbers",

  url: "https://practice-by-numbers.vercel.app",

  logo: "https://practice-by-numbers.vercel.app/logo.png",

  description:
    "Dental practice growth platform for analytics, patient engagement, marketing, payments, and reporting.",

  sameAs: [
    "https://www.linkedin.com/company/practice-by-numbers",
    "https://www.facebook.com/practicebynumbers",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: "Practice by Numbers",

  url: "https://practice-by-numbers.vercel.app",

  potentialAction: {
    "@type": "SearchAction",

    target:
      "https://practice-by-numbers.vercel.app/blog?search={search_term_string}",

    "query-input": "required name=search_term_string",
  },
};

export const homeFaqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is Practice by Numbers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Practice by Numbers is a dental practice growth platform that helps practices improve analytics, communication, patient retention, and operational performance.",
      },
    },

    {
      "@type": "Question",
      name: "Which PMS systems are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Practice by Numbers integrates with Dentrix, Dentrix Ascend, Eaglesoft, Open Dental, and other leading dental practice management systems.",
      },
    },

    {
      "@type": "Question",
      name: "How does Practice by Numbers help dental practices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Practice by Numbers provides analytics, patient communication tools, reporting, marketing insights, and automation to help dental practices grow and improve efficiency.",
      },
    },
  ],
};
