import { MobileHeader, NavMenus, TopHeader } from "@/components/common";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      {/* Top utility bar */}
      <TopHeader />
      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="shrink-0">
          <span className="text-xl font-bold tracking-tight text-[#131548]">
            <Image
              src="https://practicenumbers.com/wp-content/uploads/2025/11/white-logo.svg"
              alt="Practice by Numbers"
              width={120}
              height={40}
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <NavMenus />

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild>
            <Link href="/request-demo">Get a Demo</Link>
          </Button>
        </div>

        {/* Mobile trigger */}
        <MobileHeader />
      </div>
    </header>
  );
}
