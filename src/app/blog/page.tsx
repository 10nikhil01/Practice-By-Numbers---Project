import { BlogCTA, BlogHero } from "@/sections/blog";
import { BlogFeatured } from "@/sections/blog/BlogFeatured";
import { BlogListing } from "@/sections/blog/BlogListing";
import { allPosts, latestPost, topBlogs } from "@/constants/blog";
import { Metadata } from "next";
import { blogFaqSchema, blogListingSchema } from "@/schema/blogListing";

export const metadata: Metadata = {
  title: "Dental Practice Blog",

  description:
    "Explore dental marketing, analytics, patient retention, practice management, and growth resources from Practice by Numbers.",

  alternates: {
    canonical: "https://practice-by-numbers.vercel.app/blog",
  },

  openGraph: {
    title: "Dental Practice Blog",

    description:
      "Expert insights on dental practice growth, patient retention, analytics, and marketing.",

    url: "https://practice-by-numbers.vercel.app/blog",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Dental Practice Blog",

    description: "Expert insights on dental practice growth and performance.",
  },
};

export default function BlogListingPage() {
  return (
    <>
      <section className="sr-only">
        <h2>Dental Practice Growth Resources</h2>

        <p>
          Practice by Numbers publishes resources on dental marketing, patient
          retention, analytics, communication, scheduling, operational
          efficiency, and practice growth.
        </p>
      </section>
      <main className="flex mb-12 min-h-screen w-full flex-col items-center align-middle justify-center">
        <BlogHero />
        <BlogFeatured latestPost={latestPost} topBlogs={topBlogs} />
        <BlogListing posts={allPosts} />
        <BlogCTA />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListingSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogFaqSchema),
        }}
      />
    </>
  );
}
