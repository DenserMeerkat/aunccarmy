"use client";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import React from "react";
import { AppStateContext } from "@/components/context-provider";
import { cn } from "@/lib/utils";
import { navItems } from "@/config";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const MainNav = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  const state = useContext(AppStateContext);
  if (!state) {
    throw new Error("AppStateContext must be used within an AppStateProvider");
  }
  const { activePage, setActivePage } = state;

  if (!mounted) {
    return (
      <nav className="flex items-center overflow-hidden rounded-lg border border-rose-300 dark:border-muted">
        <ToggleGroup role="navigation" type="single" className="gap-0">
          {navItems.map((item, index: number) => (
            <ToggleGroupItem
              key={item.title}
              value={item.name}
              className={cn(
                "rounded-none px-5 tracking-wide",
                index == navItems.length - 1 ? "" : "border-r",
              )}
            >
              <Link href={item.href}>
                <span className="hidden sm:block">{item.title}</span>
              </Link>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </nav>
    );
  }
  return (
    <nav className="flex items-center overflow-hidden rounded-md border border-rose-200 dark:border-muted">
      <ToggleGroup
        role="navigation"
        type="single"
        value={activePage}
        onValueChange={(value) => {
          if (value) setActivePage(value);
        }}
        className="gap-0"
      >
        {navItems.map((item, index: number) => (
          <ToggleGroupItem
            key={item.title}
            value={item.name}
            onClick={() => {
              setActivePage(item.name);
            }}
            className={cn(
              "rounded-none border-rose-200 px-5 font-medium tracking-wide hover:bg-rose-50 hover:text-foreground data-[state=on]:bg-rose-200 data-[state=on]:font-bold dark:border-border dark:hover:bg-muted dark:data-[state=on]:bg-accent",
              activePage == item.name ? "pointer-events-none" : "",
              index == navItems.length - 1 ? "" : "border-r",
            )}
            asChild
          >
            <Link href={item.href}>
              <span className="hidden sm:block">{item.title}</span>
            </Link>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </nav>
  );
};

export default MainNav;
