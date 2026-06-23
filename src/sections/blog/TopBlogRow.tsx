import { Button } from "@/components/ui";
import type { BlogPost } from "@/types/blog";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const TopBlogRow = ({ post }: { post: BlogPost }) => {
  return (
    <div className="flex gap-4 max-sm:flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      <div className="sm:w-44 sm:shrink-0 overflow-hidden">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 max-sm:p-4  py-4 pr-4">
        <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
          <Clock size={12} />
          <span>{post.date}</span>
        </div>
        <h3 className="font-semibold text-sm text-foreground leading-snug line-clamp-3">
          {post.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {post.excerpt}
        </p>
        <Button
          asChild
          size="sm"
          className="w-fit bg-indigo-600 hover:bg-indigo-700 text-white text-xs h-8 px-3"
        >
          <Link href={post.href}>Read More</Link>
        </Button>
      </div>
    </div>
  );
};
