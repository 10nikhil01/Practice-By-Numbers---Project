import { Button } from "@/components/ui";
import Link from "next/link";

export const BlogCTA = () => {
  return (
    <div className="border-b min-w-full bg-background border-white/10 px-5 py-2">
      <div className="mx-auto flex max-w-300 flex-col bg-[#191E4A] justify-between gap-8 rounded-xl md:rounded-2xl items-center  max-sm:p-6 py-6 px-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Still managing your practice with disconnected tools?
        </h2>
        <p className="sm:mt-3 sm:w-3/5 text-lg max-sm:px-8 max-sm:font-thin font-light sm:text-xl text-white/90">
          Book a 1:1 demo with a Practice Advisor to see how you can streamline
          operations, improve patient experience, and drive growth.
        </p>
        <Button
          asChild
          className="bg-[#5750E5] text-white sm:text-base px-3 py-5 sm:p-6"
          size="lg"
        >
          <Link href="/request-demo">Book a Demo</Link>
        </Button>
      </div>
    </div>
  );
};
