import React from "react";
import Masonry from "./masonry";

const GalleryGrid = () => {
  return (
    <section className="mx-auto h-fit max-w-8xl px-2">
      <div className="border-x p-2 pb-8">
        <Masonry />
      </div>
    </section>
  );
};

export default GalleryGrid;
