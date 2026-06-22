import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  companyNav,
  compareNav,
  resourcesNav,
  solutionsNav,
  useCasesNav,
} from "@/constants";
import { SimpleColumn } from "@/components/common";
import Link from "next/link";

export const NavMenus = () => {
  return (
    <NavigationMenu
      className="hidden lg:flex"
      viewport={false}
      delayDuration={100}
    >
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
            <div className="w-fit p-4">
              <SimpleColumn title="Company" links={companyNav} />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Compare</NavigationMenuTrigger>
          <NavigationMenuContent className="w-fit">
            <div className="w-70 p-4">
              <SimpleColumn title="Compare PbN" links={compareNav} />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-fit p-4">
              <SimpleColumn title="Resources" links={resourcesNav} />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
