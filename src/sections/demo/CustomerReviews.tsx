"use client";

import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const reviews = [
  {
    name: "Cameron D.",
    role: "Owner Dentist",
    rating: 5,
    review:
      "Switching from paper charts to a fully digital system felt overwhelming at first, but Practice By Numbers made the transition incredibly smooth for our practice. We rely on them for patient forms, patient communication, and practice analytics — and they have been absolutely essential.",
  },
  {
    name: "Amber R.",
    role: "Treatment Coordinator",
    rating: 5,
    review:
      "The ability to visualize key performance metrics in real-time has made a huge impact on how we run our practice. From detailed production reports to patient engagement tracking, Practice by Numbers offers an intuitive dashboard that keeps our team focused and aligned.",
  },
  {
    name: "Kayla B.",
    role: "Director of Operations",
    rating: 5,
    review:
      "There are SO many things that we were doing manually before that are all done automatically now like sending and chasing new patient forms, confirmation texts at the right time we need them to go out, forms automatically adjusting patient records in our PMS as parents submit new forms, overdue routine care reminders, and so much more!",
  },
  {
    name: "Jordan M.",
    role: "Practice Manager",
    rating: 5,
    review:
      "PbN has transformed how we handle our daily operations. The automation alone has saved our front desk hours every week. Highly recommend to any dental practice looking to modernize.",
  },
  {
    name: "Sarah K.",
    role: "Office Manager",
    rating: 5,
    review:
      "We've tried other platforms but nothing comes close to the depth of reporting and ease of use that PbN offers. Our production numbers have improved significantly since switching.",
  },
];

export const CustomerReviews = () => {
  return (
    <section className="w-full  md:py-20">
      <div className="max-w-7xl mx-auto md:px-6 px-4 py-6">
        {/* Heading */}
        <h2 className="text-4xl font-light text-center text-foreground mb-6">
          What <span className="font-bold text-indigo-600">Our Customers</span>{" "}
          Say About Us
        </h2>

        {/* G2 ratings image */}
        <div className="flex justify-center mb-12">
          <Image
            src="https://practicenumbers.com/wp-content/uploads/2025/11/Group-1686560762-1.svg"
            alt="G2 5 out of 5 stars"
            width={800}
            height={100}
            className="h-16 object-contain"
          />
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full mx-auto max-lg:max-w-[90dvw]"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem
                key={review.name}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="flex flex-col gap-4 rounded-xl max-sm:w-full max-sm:max-w-sm mx-auto border border-border p-6 shadow-sm h-full">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={18} fill="indigo" stroke="indigo" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {review.review}
                  </p>

                  {/* Author */}
                  <div className="pt-2">
                    <p className="text-sm font-bold text-indigo-600">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.role}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
