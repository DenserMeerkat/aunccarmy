"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/config";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const MainNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center overflow-hidden rounded-sm border border-muted">
      <ToggleGroup
        role="navigation"
        type="single"
        value={pathname}
        className="gap-0"
      >
        {navItems.map((item, index: number) => (
          <Link key={item.title} href={item.href}>
            <ToggleGroupItem
              value={item.href}
              className={cn(
                "rounded-none border-muted px-5 font-medium tracking-wide hover:bg-muted hover:text-foreground data-[state=on]:bg-muted data-[state=on]:font-bold",
                pathname == item.href ? "pointer-events-none" : "",
                index == navItems.length - 1 ? "" : "border-r",
              )}
              asChild
            >
              <span>{item.title}</span>
            </ToggleGroupItem>
          </Link>
        ))}
      </ToggleGroup>
    </nav>
  );
};

export default MainNav;
