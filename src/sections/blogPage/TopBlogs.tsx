import { Button } from "@/components/ui/";
import type { BlogPost } from "@/types/blog";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const TopBlogs = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className="w-full px-6 py-14">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8">Top Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Clock size={12} />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-semibold text-sm text-foreground line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 flex-1">
                  {post.excerpt}
                </p>
                <Button
                  asChild
                  size="sm"
                  className="w-fit bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white-90 text-xs h-8 px-3"
                >
                  <Link href={post.href}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
