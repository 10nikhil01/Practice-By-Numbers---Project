import type { SlugPageProps } from "@/types";

export default async function BlogDetailPage({ params }: SlugPageProps) {
  const { slug } = await params;
  return (
    <h1 className="flex items-center justify-center gap-4 min-h-screen py-2">
      Blog Detail - {slug}
    </h1>
  );
}
