"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants";
import { AnimatedBackground } from "@/components/effects/animated-background";

export default function MainNav({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <nav>
      <ul
        className={cn(
          "flex items-center overflow-hidden rounded-2xl border border-border bg-background p-1",
          className,
        )}
      >
        <AnimatedBackground
          defaultValue={pathname}
          transition={{
            ease: "easeInOut",
            bounce: 0.2,
            duration: 0.2,
          }}
          className="rounded-xl bg-muted"
          enableHover
        >
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li
                key={index}
                data-id={item.title}
                className={cn(
                  "rounded-xl font-semibold tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground",
                  isActive ? "bg-muted/60 text-primary" : "",
                )}
              >
                <Link href={item.href} className="px-4 py-1 lg:px-5">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </AnimatedBackground>
      </ul>
    </nav>
  );
}
