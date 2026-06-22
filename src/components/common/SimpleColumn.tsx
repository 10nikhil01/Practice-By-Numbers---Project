import Link from "next/link";
import { NavigationMenuLink } from "../ui";
import type { NavLink } from "@/constants";

export const SimpleColumn = ({
  title,
  links,
}: {
  title: string;
  links: NavLink[];
}) => {
  return (
    <div className="min-w-55">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href} className="w-4/5">
            <NavigationMenuLink
              href={link.href}
              className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
