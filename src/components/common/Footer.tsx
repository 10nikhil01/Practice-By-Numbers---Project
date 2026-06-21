import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h3 className="text-xl font-bold">PracticeFlow</h3>

          <div className="flex gap-6">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          © 2026 PracticeFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
