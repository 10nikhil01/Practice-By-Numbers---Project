import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/10 via-background to-background" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <span className="rounded-full border px-4 py-2 text-sm">
            AI Powered Dental Growth Platform
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight lg:text-7xl">
            Grow Your Practice With Smarter Patient Engagement
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Automate patient communication, improve retention, and grow your
            practice with one platform.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg">Book Demo</Button>

            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          <div className="mt-20 rounded-3xl border bg-card p-4 shadow-sm">
            <div className="aspect-video rounded-2xl bg-muted" />
          </div>
        </div>
      </div>
    </section>
  );
};
