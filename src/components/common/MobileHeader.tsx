"use client";
import { Button } from "@/components/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  companyNav,
  compareNav,
  resourcesNav,
  solutionsNav,
  useCasesNav,
} from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export const MobileHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="size-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="w-full px-4 overflow-y-auto sm:max-w-sm"
      >
        <SheetHeader>
          <SheetTitle>
            <span className="text-lg font-bold text-[#131548]">
              <Image
                src="https://practicenumbers.com/wp-content/uploads/2024/08/pbn_corp_logo_icon.svg"
                alt="Practice by Numbers"
                width={34}
                height={43}
              />
            </span>
          </SheetTitle>
        </SheetHeader>

        <Accordion type="single" collapsible className="mt-4 w-full">
          <AccordionItem value="solutions">
            <AccordionTrigger className="text-sm font-semibold">
              Solutions
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {solutionsNav.map((group) => (
                  <div key={group.label}>
                    <p className="mb-1 text-xs font-semibold uppercase text-muted-foreground">
                      {group.label}
                    </p>
                    <ul className="space-y-1">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-sm text-foreground"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="use-cases">
            <AccordionTrigger className="text-sm font-semibold">
              Use Cases
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1">
                {useCasesNav.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-sm text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="company">
            <AccordionTrigger className="text-sm font-semibold">
              Company
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1">
                {companyNav.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-sm text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="compare">
            <AccordionTrigger className="text-sm font-semibold">
              Compare
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1">
                {compareNav.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-sm text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="resources">
            <AccordionTrigger className="text-sm font-semibold">
              Resources
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1">
                {resourcesNav.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-sm text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-0 space-y-3 border-t pt-4">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium"
          >
            Pricing
          </Link>
          <Link
            href="https://app.practicenumbers.com/accounts/login/"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium"
          >
            Login
          </Link>
          <Button asChild className="w-full">
            <Link href="/request-demo" onClick={() => setMobileOpen(false)}>
              Get a Demo
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
