import { Phone } from "lucide-react";
import Link from "next/link";

export const TopHeader = () => {
  return (
    <div className="hidden border-b bg-[#131548] text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2 text-xs">
        <a
          href="tel:+18662168416"
          className="flex items-center flex-1 gap-1.5 hover:text-white/80"
        >
          <Phone className="h-3.5 w-3.5" />
          +1 866-216-8416
        </a>
        <Link href="/" className="hover:text-white/80">
          Kiosk
        </Link>
        <Link href="/" className="hover:text-white/80">
          Login
        </Link>
        <Link
          href="https://help.practicenumbers.com/en/"
          className="hover:text-white/80"
        >
          Help Center
        </Link>
      </div>
    </div>
  );
};
