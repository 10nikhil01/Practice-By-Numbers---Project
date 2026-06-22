import type { BlogPostMeta } from "@/types/blog";
import { ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BlogPostHero = ({ meta }: { meta: BlogPostMeta }) => {
  return (
    <section
      className="w-full py-12 bg-[#1a2151] px-6"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 70% 50%, rgba(107, 92, 231, 0.18) 0%, transparent 65%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-white/60 text-sm mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <ChevronRight size={14} />
          <span className="text-white/90 line-clamp-1">{meta.title}</span>
        </nav>

        <h1 className="text-4xl font-bold text-white leading-tight max-w-3xl mb-4">
          {meta.title}
        </h1>

        {/* Meta row */}
        <div className="flex max-sm:flex-col items-start md:items-center gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            {meta.authorAvatar && (
              <Image
                width={200}
                height={200}
                src={meta.authorAvatar}
                alt={meta.author}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <span className="text-white/80">{meta.author}</span>
          </div>
          <div className="flex items-start gap-1.5">
            <span>•</span>
            <Clock size={14} />
            <span>{meta.date}</span>
          </div>
          {meta.readTime && (
            <div className="flex items-center gap-1.5">
              <span>•</span>
              <span>{meta.readTime} min read</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
