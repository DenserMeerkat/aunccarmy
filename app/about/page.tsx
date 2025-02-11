"use client";
import React from "react";
import { HeroVideoDialog } from "@/components/effects/hero-video-dialog";

export default function About() {
  return (
    <div className="h-fit">
      <section className="mx-auto max-w-8xl px-4">
        <HeroScrollDemo />
      </section>
    </div>
  );
}

function HeroScrollDemo() {
  return (
    <div className="mx-auto max-w-7xl py-8">
      <HeroVideoDialog
        className="mx-auto max-w-4xl rounded-xl border-2 shadow-2xl shadow-muted"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/iF7vxaO3LlQ"
        thumbnailSrc="https://i.ytimg.com/vi/iF7vxaO3LlQ/maxresdefault.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
