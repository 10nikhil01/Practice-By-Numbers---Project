import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/types/blog";
import Link from "next/link";

export const BlogSidebar = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div className="flex flex-col gap-6 max-lg:px-5">
      {/* Related Posts */}
      <div>
        <h3 className="text-lg lg:text-base font-bold text-foreground lg:text-foreground/80 mb-3 uppercase tracking-wide">
          Other Blogs
        </h3>
        <div className="flex flex-col gap-2">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="flex gap-3 border hover:bg-background bg-card border-border py-2 px-3 rounded-lg"
            >
              <p className="text-sm font-medium text-foreground lg:text-foreground/80 line-clamp-3 transition-colors leading-snug">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
      {/* CTA Card */}
      <div
        className="rounded-xl flex items-center flex-col justify-center p-5 text-white"
        style={{
          background: "linear-gradient(160deg, #1a1756 0%, #4844BE 100%)",
        }}
      >
        <p className="text-base text-center font-semibold mb-2">
          Still managing your practice with disconnected tools?
        </p>
        <p className="text-sm text-white/70 mb-4">
          Book a 1:1 demo with Advisor.
        </p>
        <Button
          asChild
          variant="outline"
          className=" border-white w-fit text-white bg-transparent hover:bg-white text-sm"
        >
          <Link href="/request-demo">Get a Demo</Link>
        </Button>
      </div>
    </div>
  );
};
