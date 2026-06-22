import { Button } from "@/components/ui";
import type { BlogPost } from "@/types";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={200}
          height={200}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
          <Clock size={14} />
          <span>{post.date}</span>
        </div>
        <h3 className="font-semibold text-base text-foreground leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
          {post.excerpt}
        </p>
        <div className="pt-1">
          <Button
            asChild
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm px-4 py-2 h-auto"
          >
            <Link href={post.href}>Read More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
