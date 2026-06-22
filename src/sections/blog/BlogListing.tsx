"use client";

import {
  Input,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui";
import type { BlogPost } from "@/types";
import { Search } from "lucide-react";
import { SetStateAction, useState } from "react";
import { BlogCard } from "@/sections/blog";

const POSTS_PER_PAGE = 7;

export const BlogListing = ({ posts }: { posts: BlogPost[] }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <section className="w-full px-6 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex max-sm:flex-col gap-4 items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">All Blogs</h2>
        <div className="relative w-64">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={16}
          />
          <Input
            placeholder="Search"
            className="pl-9"
            value={search}
            onChange={(e: { target: { value: SetStateAction<string> } }) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map((post) => (
          <BlogCard key={post.href} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationContent>
              {Array.from(
                { length: Math.min(3, totalPages) },
                (_, i) => i + 1,
              ).map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink
                    isActive={page === p}
                    onClick={() => setPage(p)}
                    className={
                      page === p
                        ? "bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700"
                        : ""
                    }
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {totalPages > 4 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              {totalPages > 3 && (
                <PaginationItem>
                  <PaginationLink
                    isActive={page === totalPages}
                    onClick={() => setPage(totalPages)}
                    className={
                      page === totalPages
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : ""
                    }
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  className={
                    page === totalPages ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </section>
  );
};
