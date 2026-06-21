"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  solutionsNav,
  useCasesNav,
  companyNav,
  compareNav,
  resourcesNav,
  type NavLink,
} from "@/constants";
import Image from "next/image";

function SimpleColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="min-w-55">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      {/* Top utility bar */}
      <div className="hidden border-b bg-[#131548] text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2 text-xs">
          <a
            href="tel:+18662168416"
            className="flex items-center flex-1 gap-1.5 hover:text-white/80"
          >
            <Phone className="h-3.5 w-3.5" />
            +1 866-216-8416
          </a>
          <Link
            href="https://app.practicenumbers.com/forms"
            className="hover:text-white/80"
          >
            Kiosk
          </Link>
          <Link
            href="https://app.practicenumbers.com/accounts/login/"
            className="hover:text-white/80"
          >
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
        <NavigationMenu className="hidden lg:flex" delayDuration={100}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid min-w-205 grid-cols-4 gap-6 p-6">
                  {solutionsNav.map((group) => (
                    <SimpleColumn
                      key={group.href}
                      title={group.label}
                      links={group.links}
                    />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-150">
                <div className="grid w-full grid-cols-2 gap-1 p-4">
                  {useCasesNav.map((link) => (
                    <NavigationMenuLink asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="flex flex-col items-start rounded-md p-3 hover:bg-accent"
                      >
                        <p className="text-sm font-medium">{link.label}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {link.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/pricing"
                  className="inline-flex h-10 items-center px-4 py-2 text-sm font-medium"
                >
                  Pricing
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[320px] p-4">
                  <SimpleColumn title="Company" links={companyNav} />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Compare</NavigationMenuTrigger>
              <NavigationMenuContent dir="rtl" className="w-[320px]">
                <div className="w-70 p-4">
                  <SimpleColumn title="Compare PbN" links={compareNav} />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[320px] p-4">
                  <SimpleColumn title="Resources" links={resourcesNav} />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild>
            <Link href="/request-demo">Get a Demo</Link>
          </Button>
        </div>

        {/* Mobile trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
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
                      <div key={group.href}>
                        <p className="mb-1 text-xs font-semibold uppercase text-muted-foreground">
                          {group.label}
                        </p>
                        <ul className="space-y-1">
                          {group.links.map((link) => (
                            <li key={link.href}>
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
                      <li key={link.href}>
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
                      <li key={link.href}>
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
                      <li key={link.href}>
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
                      <li key={link.href}>
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
                href="/pricing"
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
      </div>
    </header>
  );
}
