import { allPostsCombined } from "@/constants/blog";
import { BlogPostHero, BlogSidebar } from "@/sections/blogPage";
import { BlogPostContent } from "@/sections/blogPage/BlogPostContent";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPostsCombined.map((post) => ({ slug: post.slug }));
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = allPostsCombined.find((p) => p.slug === slug);
  if (!post) notFound();

  const sidebarPosts = allPostsCombined
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  // Slots
  const hero = (
    <BlogPostHero
      meta={{
        title: post.title,
        description: post.excerpt,
        author: "Practice by Numbers",
        authorAvatar:
          "https://practicenumbers.com/wp-content/uploads/2025/07/white-logo.png",
        date: post.date,
        readTime: 8,
        slug,
      }}
    />
  );

  const sidebar = <BlogSidebar posts={sidebarPosts} />;

  return (
    <BlogPostContent hero={hero} sidebar={sidebar}>
      {/* Main article content — replace with MDX or CMS renderer */}
      <p>{post.excerpt}</p>
    </BlogPostContent>
  );
}
