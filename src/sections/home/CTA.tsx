import { Button } from "@/components/ui";

export const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border bg-card p-10 text-center">
          <h2 className="text-4xl font-bold">Ready To Grow Your Practice?</h2>

          <p className="mt-4 text-muted-foreground">
            Join hundreds of dental practices already using our platform.
          </p>

          <Button size="lg" className="mt-8">
            Book A Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
