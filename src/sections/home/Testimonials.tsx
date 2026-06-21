import { testimonials } from "@/constants/home";

import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">Loved By Dental Teams</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="space-y-4 p-6">
                <p>&quot;{testimonial.review}&quot;</p>

                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>

                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
