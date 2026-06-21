"use client";

import Image from "next/image";
import Link from "next/link";

import { Check } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { innovations } from "@/constants";

export const LatestInnovations = () => {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-300 px-4">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-[40px] leading-none font-light text-[#1E2254] md:text-[60px]">
            Latest Innovations from
          </h2>

          <h3 className="mt-2 text-[40px] font-bold text-[#5A54F9] md:text-[60px]">
            Practice by Numbers
          </h3>
        </div>

        <Tabs defaultValue="voice" className="mt-12">
          {/* Tabs */}

          <TabsList className="mx-auto flex h-auto w-fit gap-4 bg-transparent p-0">
            {innovations.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className=" h-10 rounded-sm border-2  bg-card hover:border-border hover:text-white hover:bg-card px-5 text-lg font-semibold text-[#1E2254] "
              >
                {item.tabLabel}
              </TabsTrigger>
            ))}
          </TabsList>

          {innovations.map((item) => (
            <TabsContent key={item.id} value={item.id} className="mt-16">
              <div className="flex max-lg:flex-col items-center lg:justify-between gap-16">
                {/* LEFT */}

                <div className="mr-7">
                  <h3 className="text-3xl font-bold text-wrap max-lg:text-center leading-tight text-[#1E2254] md:text-[40px]">
                    {item.title.line1}{" "}
                    <span className="text-[#5A54F9]">
                      {item.title.highlight}
                    </span>
                    {item.title.line2 && (
                      <>
                        <br />
                        {item.title.line2}
                      </>
                    )}
                  </h3>

                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75 md:text-[16px]">
                    {item.description}
                  </p>

                  <ul className="my-8 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 items-center justify-center rounded border border-[#5A54F9]">
                          <Check className="h-3 w-3 text-[#5A54F9]" />
                        </div>

                        <span className="text-[16px] text-foreground/75">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={item.ctaHref}
                    className="text-2xl font-semibold text-[#5A54F9]"
                  >
                    {item.ctaText}
                  </Link>
                </div>

                {/* RIGHT */}

                <div className="flex justify-center lg:justify-end">
                  <Image
                    src={item.image}
                    alt={item.tabLabel}
                    width={464}
                    height={427}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
