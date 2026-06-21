import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold tracking-tight">404</h1>

        <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>

        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Button asChild className="mt-8">
          <Link href="/">Back To Homepage</Link>
        </Button>
      </div>
    </main>
  );
}
