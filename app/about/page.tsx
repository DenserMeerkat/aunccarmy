"use client";
import React from "react";
import AboutVideo from "@/components/about/video";
import AboutNCC from "@/components/about/about";
import Objectives from "@/components/about/objectives";

export default function About() {
  return (
    <div className="h-fit">
      <section className="mx-auto max-w-8xl px-4">
        <AboutVideo />
        <AboutNCC />
        <Objectives />
      </section>
    </div>
  );
}
