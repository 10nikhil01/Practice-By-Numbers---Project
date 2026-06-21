"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-6xl font-bold">Oops!</h1>

        <h2 className="mt-4 text-2xl font-semibold">Something went wrong</h2>

        <p className="mt-4 text-muted-foreground">
          An unexpected error occurred while loading this page.
        </p>

        <Button className="mt-8" onClick={reset}>
          Try Again
        </Button>
      </div>
    </main>
  );
}
