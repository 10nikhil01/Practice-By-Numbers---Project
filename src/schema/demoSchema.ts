export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Request a Demo | Practice by Numbers",
  description:
    "Book a personalized 1:1 demo with a Practice Advisor to see how Practice by Numbers can streamline your dental practice operations.",
  url: "https://practicebynumbers.com/request-demo",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "Practice by Numbers",
    url: "https://practicebynumbers.com",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://practicebynumbers.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Request a Demo",
        item: "https://practicebynumbers.com/request-demo",
      },
    ],
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Practice by Numbers - Dental Practice Management Platform",
  description:
    "A comprehensive dental practice management platform that reduces no-shows, streamlines patient communication, automates workflows, and provides real-time analytics.",
  provider: {
    "@type": "Organization",
    name: "Practice by Numbers",
    url: "https://practicebynumbers.com",
  },
  serviceType: "Dental Practice Management Software",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Practice by Numbers Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        price: "249",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "249",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
    ],
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What will I see in a Practice by Numbers demo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll get a personalized walkthrough of the PbN platform including real use cases for reducing no-shows, improving case acceptance, streamlining payments, PMS integration, and a live Q&A with a product expert.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Practice by Numbers cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Practice by Numbers plans start from $249/mo. Book a demo to learn more about pricing tailored to your practice size.",
      },
    },
    {
      "@type": "Question",
      name: "I am already a Practice by Numbers customer. Can I still request a demo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Check the 'I am a current PbN Customer' box in the form for a faster, more focused demo. We'll skip the basics and get straight to what matters for your practice.",
      },
    },
    {
      "@type": "Question",
      name: "Does Practice by Numbers integrate with my current PMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Practice by Numbers integrates with major practice management systems including Dentrix, Eaglesoft, Open Dental, Dentrix Ascend, and Curve Dental.",
      },
    },
  ],
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Practice by Numbers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://practicebynumbers.com",
  description:
    "Dental practice management software that helps practices reduce no-shows, automate patient communication, and grow revenue.",
  offers: {
    "@type": "Offer",
    price: "249",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "249",
      priceCurrency: "USD",
      unitText: "MONTH",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "150",
  },
};
