import type { ReactNode } from "react";
import { topBlogs } from "@/constants/blog";
import { TopBlogs } from "@/sections/blogPage";

export default function BlogSlugLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <TopBlogs posts={topBlogs} />
    </>
  );
}
