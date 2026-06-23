import {
  faqSchema,
  serviceSchema,
  softwareSchema,
  webPageSchema,
} from "@/schema/demoSchema";
import { CustomerReviews, DemoForm, DemoHero } from "@/sections/demo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Demo | Practice by Numbers",
  description:
    "Book a personalized 1:1 demo with a Practice Advisor. See how Practice by Numbers simplifies dental practice management, reduces no-shows, and drives growth — starting from $249/mo.",
  keywords: [
    "dental practice management demo",
    "Practice by Numbers demo",
    "PbN demo",
    "dental software demo",
    "dental practice software",
    "dental management platform",
  ],
  openGraph: {
    title: "Request a Demo | Practice by Numbers",
    description:
      "Book a personalized 1:1 demo with a Practice Advisor. See how Practice by Numbers simplifies dental practice management starting from $249/mo.",
    url: "https://practicebynumbers.com/request-demo",
    siteName: "Practice by Numbers",
    images: [
      {
        url: "https://practicebynumbers.com/request-demo/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Practice by Numbers - Request a Demo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Demo | Practice by Numbers",
    description:
      "Book a personalized 1:1 demo with a Practice Advisor. See how Practice by Numbers simplifies dental practice management.",
    images: ["https://practicebynumbers.com/request-demo/opengraph-image.png"],
    site: "@practicebynumbers",
  },
  alternates: {
    canonical: "https://practicebynumbers.com/request-demo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function DemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <main className="flex max-w-300 min-h-screen mt-4 flex-col items-center align-middle justify-center">
        <div className="w-full grid grid-cols-1 mb-8 p-5 lg:p-0 lg:grid-cols-2 gap-16 items-start">
          <DemoHero />
          <DemoForm />
        </div>
        <CustomerReviews />
      </main>
    </>
  );
}
