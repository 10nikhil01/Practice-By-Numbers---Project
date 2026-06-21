import { Button } from "@/components/ui";
import Link from "next/link";

export const SecondCTA = () => {
  return (
    <div className="border-b min-w-full bg-background border-white/10 p-5">
      <div className="flex w-full flex-col bg-[#191E4A] rounded-2xl items-center gap-4  max-sm:p-6 p-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-4xl">
            Get started from just $249/month.
          </h2>
          <p className="mt-3 text-[16px] max-sm:px-8 max-sm:font-thin font-light sm:text-xl text-white/90">
            No hidden charges, no unnecessary features.
          </p>
        </div>
        <Button
          asChild
          className="bg-[#5750E5] text-white sm:text-xl px-3 py-5 sm:p-7"
          size="lg"
        >
          <Link href="/request-demo">Book a Demo</Link>
        </Button>
      </div>
    </div>
  );
};
