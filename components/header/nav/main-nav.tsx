"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/config";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ClassNameProp } from "@/lib/types";

const MainNav = ({ className }: ClassNameProp) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex items-center overflow-hidden rounded-sm border border-border",
        className,
      )}
    >
      <ToggleGroup
        role="navigation"
        type="single"
        value={pathname}
        className="gap-0"
      >
        {navItems.map((item, index: number) => (
          <Link key={item.title} href={item.href}>
            <ToggleGroupItem
              size={"default"}
              value={item.href}
              className={cn(
                "rounded-none border-border px-4 font-medium tracking-wide hover:bg-muted hover:text-foreground data-[state=on]:bg-muted data-[state=on]:font-bold lg:px-5",
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
