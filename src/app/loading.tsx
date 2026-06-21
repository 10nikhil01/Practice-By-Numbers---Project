import { Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-6xl space-y-8">
        <Skeleton className="h-12 w-2/3" />

        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />

        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-72 rounded-2xl" />
          ))}
        </div>
      </div>
    </main>
  );
}
