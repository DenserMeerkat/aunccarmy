import React from "react";
import { HeroVideoDialog } from "@/components/effects/hero-video-dialog";
import { FourCornerBoxes, RPlus } from "@/components/common/decoration";

const AboutVideo = () => {
  return (
    <section className="mx-auto max-w-8xl border-x border-b py-10">
      <div className="relative mx-auto max-w-5xl border bg-muted/40 p-4">
        <FourCornerBoxes className="border bg-background" child={<RPlus />} />
        <HeroVideoDialog
          className="rounded-xl"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/iF7vxaO3LlQ"
          thumbnailSrc="https://i.ytimg.com/vi/iF7vxaO3LlQ/maxresdefault.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>
    </section>
  );
};

export default AboutVideo;
