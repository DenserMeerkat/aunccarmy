"use client";
import React from "react";
import AboutVideo from "@/components/about/video";
import AboutNCC from "@/components/about/about";
import Objectives from "@/components/about/objectives";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <div className="h-fit">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "fixed -z-10 stroke-foreground/10 [mask-image:linear-gradient(to_bottom,white,transparent,transparent)]",
        )}
      />
      <section className="mx-auto max-w-7xl px-2">
        <AboutVideo />
        <AboutNCC />
        <Objectives />
      </section>
    </div>
  );
}
