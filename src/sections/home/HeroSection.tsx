"use client";

import Image from "next/image";
import Link from "next/link";

import { heroStats } from "@/constants";

export const HeroSection = () => {
  return (
    <section className="pb-20 pt-8 max-w-300">
      <div className="mx-auto  px-4">
        {/* Hero Content */}

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}

          <div>
            <h1 className="max-w-155 text-[42px] font-light leading-none text-[#1D2154] md:text-[60px]">
              Built to Unify and
              <br />
              Simplify All Your
              <br />
              <span className="font-bold text-[#5A54F9] text-[60px]">
                Dental Practice
              </span>
              <br />
              Operations
            </h1>

            <p className="mt-8 max-w-140 text-xl leading-relaxed text-foreground">
              From scheduling to payments to insights, PbN replaces scattered
              tools with one seamless, innovative platform that grows with you.
            </p>

            <Link
              href="/demo"
              className="
                mt-8
                inline-flex
                h-10
                items-center
                justify-center
                rounded-sm
                bg-[#5A54F9]
                px-3
                text-base
                font-semibold
                text-white
                transition-all
                hover:opacity-90
              "
            >
              Book a Demo
            </Link>
          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://practicenumbers.com/wp-content/uploads/2026/04/Group-1686561232-2-768x613.png"
              alt="Practice By Numbers"
              width={700}
              height={700}
              priority
              className="h-auto w-full max-w-155 object-contain"
            />
          </div>
        </div>

        {/* Stats Card */}

        <div className="mt-10 overflow-hidden rounded-[32px] bg-[#191E4A] p-4 md:p-8">
          <h2 className="text-center text-2xl font-light text-white md:text-4xl">
            Trusted by 5,000+ Dental Providers
          </h2>

          <div className="mt-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.value}
                className="text-center flex items-center flex-col"
              >
                <h3 className="text-5xl font-bold text-[#9B4CDB] md:text-[70px]">
                  {stat.value}
                </h3>

                <p className="w-3/5 mx-auto align-middle text-white text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-white/90">
              See how practices achieve measurable results with PbN.{" "}
              <Link
                href="/success-stories"
                className="font-semibold text-white"
              >
                Read Success Stories &gt;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
