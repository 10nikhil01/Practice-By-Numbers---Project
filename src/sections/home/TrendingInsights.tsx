import {
  Button,
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/";
import { posts } from "@/constants";
import type { BlogPost } from "@/types/home";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const TrendingInsights = () => {
  return (
    <section className="py-20 max-w-300 sm:mx-auto">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Trending{" "}
            <span className="bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground text-lg max-sm:px-4">
            Expert proven tips to grow your practice and run it better.
          </p>
        </div>
        <div className="mx-auto max-w-dvw w-full sm:w-full sm:max-w-300 sm:px-5">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent className="pb-4">
              {posts.map((post: BlogPost) => (
                <CarouselItem
                  key={post.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden mx-auto max-sm:w-full border max-sm:max-w-sm py-0 hover:shadow-violet-800 shadow-sm h-full">
                    {/* Image */}
                    <div className="relative xs:h-50 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={384}
                        height={230}
                        className="object-cover"
                      />
                    </div>

                    <CardContent className="sm:p-6 sm:pr-0 p-2 flex flex-col sm:max-h-56">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        {post.date}
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 text-sm sm:text-xl font-semibold leading-snug">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-6">
                        <Button asChild variant="default">
                          <Link href={post.href}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-4 max-sm:hidden" />
            <CarouselNext className="-right-4 max-sm:hidden" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
