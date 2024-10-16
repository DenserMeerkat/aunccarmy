"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ClassNameProp } from "@/lib/types";
import { navItems } from "@/config";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import RTooltip from "@/components/common/tooltip";

const NavSheet = ({ className }: ClassNameProp) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOpen(false);
      }
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [setOpen]);

  return (
    <>
      <RTooltip content={<p>Toggle Menu</p>}>
        <Button
          variant={"outline"}
          size={"icon"}
          className={cn("z-[80] rounded-full border-2 md:hidden", className)}
          onClick={() => setOpen((prev) => !prev)}
        >
          <ChevronDown
            className={cn(
              "h-5 w-5 transform transition-transform duration-300",
              open ? "rotate-180" : "rotate-0",
            )}
          />
        </Button>
      </RTooltip>

      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: open ? 0 : "-100%", opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 top-0 h-screen bg-background pt-16"
        onClick={() => setOpen(false)}
      >
        <nav className="w-full">
          <ToggleGroup
            role="navigation"
            type="single"
            value={pathname}
            className="w-full flex-col gap-0 border-b-2 border-dashed border-muted "
          >
            {navItems.map((item, index: number) => (
              <Link
                key={item.title}
                href={item.href}
                className="w-full border-t-2 border-dashed border-muted "
              >
                <ToggleGroupItem
                  size={"default"}
                  value={item.href}
                  className={cn(
                    "w-full justify-start rounded-none px-5 py-6 pt-7 text-lg font-medium tracking-wide hover:bg-muted/40 hover:text-foreground data-[state=on]:bg-muted/60 data-[state=on]:font-bold",
                    pathname == item.href ? "pointer-events-none" : "",
                  )}
                  asChild
                >
                  <span>{item.title}</span>
                </ToggleGroupItem>
              </Link>
            ))}
          </ToggleGroup>
        </nav>
      </motion.div>
    </>
  );
};

export default NavSheet;
