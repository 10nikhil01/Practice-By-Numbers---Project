import { Metadata } from "next";
import { notFound } from "next/navigation";

import { allPostsCombined } from "@/constants/blog";

import {
  getArticleSchema,
  getAuthorSchema,
  getBreadcrumbSchema,
} from "@/schema/blog";

import { BlogPostHero, BlogSidebar } from "@/sections/blogPage";
import { BlogPostContent } from "@/sections/blogPage/BlogPostContent";

async function getBlogBySlug(slug: string) {
  return allPostsCombined.find((post) => post.slug === slug);
}

export async function generateStaticParams() {
  return allPostsCombined.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {};
  }

  const url = `https://practice-by-numbers.vercel.app/blog/${slug}`;

  return {
    title: blog.title,

    description: blog.excerpt,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: blog.title,

      description: blog.excerpt,

      url,

      type: "article",

      images: [
        {
          url: blog.thumbnail,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: blog.title,

      description: blog.excerpt,

      images: [blog.thumbnail],
    },
  };
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const sidebarPosts = allPostsCombined
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  const articleSchema = getArticleSchema({
    blog: post,
  });

  const breadcrumbSchema = getBreadcrumbSchema(post.title, post.slug);

  const authorSchema = getAuthorSchema("Practice by Numbers");

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
    <>
      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Author Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(authorSchema),
        }}
      />

      <BlogPostContent hero={hero} sidebar={sidebar}>
        <p>{post.excerpt}</p>
      </BlogPostContent>
    </>
  );
}
