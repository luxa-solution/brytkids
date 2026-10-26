"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "../content";
import { ArrowIcon } from "./icons";

export function isPathActive(pathname: string, href: string) {
  const current = pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;
  const target = href !== "/" ? href.replace(/\/+$/, "") : href;

  return current === target || current.startsWith(`${target}/`);
}

export function DesktopNavigation({
  items,
  label,
}: {
  items: readonly NavigationItem[];
  label: string;
}) {
  const pathname = usePathname();

  return (
    <nav className="desktop-navigation" aria-label={label}>
      {items.map((item) => {
        const active = isPathActive(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function HeaderCta({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const active = isPathActive(pathname, href);

  return (
    <Link
      className="button button--small button--primary header-cta"
      href={href}
      aria-current={active ? "page" : undefined}
    >
      {label}
      <ArrowIcon />
    </Link>
  );
}
