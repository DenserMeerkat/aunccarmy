import React from "react";
import { HeroVideoDialog } from "../effects/hero-video-dialog";

const AboutVideo = () => {
  return (
    <div className="mx-auto max-w-7xl py-10">
      <HeroVideoDialog
        className="mx-auto max-w-4xl rounded-xl border-2 shadow-2xl shadow-muted"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/iF7vxaO3LlQ"
        thumbnailSrc="https://i.ytimg.com/vi/iF7vxaO3LlQ/maxresdefault.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
};

export default AboutVideo;
