import { CheckCircle2 } from "lucide-react";

import { benefits } from "@/constants/home";

export const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-bold">
              Built To Help Practices Grow Faster
            </h2>

            <p className="mt-4 text-muted-foreground">
              Focus on patients while automation handles the
              repetitive work.
            </p>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4"
              >
                <CheckCircle2 className="size-5 text-primary" />

                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};