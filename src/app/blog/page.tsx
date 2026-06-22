import { BlogCTA, BlogHero } from "@/sections/blog";
import { BlogFeatured } from "@/sections/blog/BlogFeatured";
import { BlogListing } from "@/sections/blog/BlogListing";
import { allPosts, latestPost, topBlogs } from "@/constants/blog";

export default function BlogListingPage() {
  return (
    <main className="flex mb-12 min-h-screen w-full flex-col items-center align-middle justify-center">
      <BlogHero />
      <BlogFeatured latestPost={latestPost} topBlogs={topBlogs} />
      <BlogListing posts={allPosts} />
      <BlogCTA />
    </main>
  );
}
