import { Button } from "@/components/ui/button";
import { TopBlogRow } from "@/sections/blog";
import type { BlogPost } from "@/types";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BlogFeatured = ({
  latestPost,
  topBlogs,
}: {
  latestPost: BlogPost;
  topBlogs: BlogPost[];
}) => {
  return (
    <section className="w-full px-6 py-12 max-w-7xl mx-auto grid items-stretch grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Latest Post */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-5">Latest Post</h2>
        <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={latestPost.thumbnail}
              alt={latestPost.title}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Clock size={14} />
              <span>{latestPost.date}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground leading-snug">
              {latestPost.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {latestPost.excerpt}
            </p>
            <Button
              asChild
              className="w-fit bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <Link href={latestPost.href}>Read More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Top Blogs */}
      <div className="size-full">
        <h2 className="text-xl font-bold text-foreground mb-5">Top Blogs</h2>
        <div className="flex flex-col justify-between items-stretch gap-4">
          {topBlogs.map((post) => (
            <TopBlogRow key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
