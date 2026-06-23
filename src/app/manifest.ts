import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Practice by Numbers",
    short_name: "PbN",
    description:
      "A comprehensive dental practice management platform that reduces no-shows, streamlines patient communication, automates workflows, and provides real-time analytics.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4844BE",
    orientation: "portrait",
    scope: "/",
    lang: "en-US",
    categories: ["business", "medical", "productivity"],
    shortcuts: [
      {
        name: "Request a Demo",
        short_name: "Demo",
        description: "Book a personalized 1:1 demo with a Practice Advisor",
        url: "/request-demo",
        icons: [
          {
            src: "/logo.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
      {
        name: "Contact Us",
        short_name: "Contact",
        description: "Get in touch with the Practice by Numbers team",
        url: "/-uscontact",
        icons: [
          {
            src: "/logo.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
      {
        name: "PbN Blogs",
        short_name: "Blogs",
        description:
          "The best tips, tricks, and insights about dental practice management",
        url: "/blog",
        icons: [
          {
            src: "/logo.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
    ],

    icons: [
      {
        src: "/logo.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/opengraph-image.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Practice by Numbers Dashboard",
      },
    ],
  };
}
