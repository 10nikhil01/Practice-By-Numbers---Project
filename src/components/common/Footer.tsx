import {
  companyColumns,
  socialLinks,
  solutionsColumns,
  type FooterColumn,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

function FooterColumnBlock({ column }: { column: FooterColumn }) {
  return (
    <div>
      <h3 className="mb-3 text-[16px] font-bold text-blue-500">
        {column.title}
      </h3>
      <ul className="space-y-2">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[16px] text-white transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#191E4A] w-full text-white">
      {/* Pre-footer CTA strip */}

      <div className="mx-auto max-w-300 px-6 py-12">
        <h2 className="mb-6 text-xl font-bold uppercase tracking-wider text-[#9B4CDB]">
          Our Company
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-7">
          {companyColumns.map((column) => (
            <FooterColumnBlock key={column.title} column={column} />
          ))}
        </div>

        <h2 className="mb-6 text-xl pt-6 font-bold uppercase tracking-wider text-[#9B4CDB]">
          Our Solutions
        </h2>
        <div className="flex flex-wrap gap-8">
          {solutionsColumns.map((column) => (
            <FooterColumnBlock key={column.title} column={column} />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10">
        {/* Gradient divider + social icons */}
        <div className="flex w-full max-w-md min-w-full items-center gap-5">
          <span
            aria-hidden
            className="h-0 flex-1 border-b-[3px] [border-image-slice:1] [border-image-source:linear-gradient(154deg,#1B2A55_0%,#9B4CDB_100%,#1B2A55_100%)]"
          />
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <Image
                  src={social.iconSrc}
                  alt={social.label}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>
          <span
            aria-hidden
            className="h-0 flex-1 border-b-[3px] [border-image-slice:1] [border-image-source:linear-gradient(335deg,#1B2A55_0%,#9B4CDB_100%,#1B2A55_100%)]"
          />
        </div>

        {/* Logo */}
        <Image
          src="https://practicenumbers.com/wp-content/uploads/2025/11/Group-13.svg"
          alt="Practice by Numbers"
          width={112}
          height={40}
          className="max-sm:w-28 max-sm:h-10 w-54 h-19.5"
        />

        {/* Copyright */}
        <div className="flex w-full max-md:flex-col items-center justify-between">
          <p className="text-center text-xs sm:text-base leading-relaxed text-white flex-1">
            Copyright © {new Date().getFullYear()}. PracticebyNumbers. All
            rights reserved.
          </p>
          <Link href="/sitemap.xml" className="font-light max-md:text-xs mt-3">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
