"use client";

import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import EmblaCarousel from "@/components/common/carousel/embla-carousel-view";
import { Slide } from "@/types";

type ReportCarouselProps = {
  slides: Slide[];
};

const slideWidth = "100%";
const slideAspectRatio = "16/9";
const slideSpacing = "clamp(8px,2vw,1rem)";

const ReportCarousel = ({ slides }: ReportCarouselProps) => {
  const validSlides = slides.filter((slide) => slide.public_id);

  if (validSlides.length === 0) return null;

  return (
    <Suspense fallback={<ReportCarouselSkeleton />}>
      <div className="mx-auto max-w-2xl">
        <EmblaCarousel
          slides={validSlides}
          width={1200}
          height={670}
          slideWidth={slideWidth}
          slideAspectRatio={slideAspectRatio}
          slideSpacing={slideSpacing}
          loop={false}
          showAutoplay={false}
        />
      </div>
    </Suspense>
  );
};

export default ReportCarousel;

export const ReportCarouselSkeleton = () => {
  return (
    <div
      className="mx-auto my-8 flex max-w-xl"
      style={{
        gap: slideSpacing,
      }}
    >
      <Skeleton className="h-auto w-[7.5%]" />
      <Skeleton
        className="w-[85%]"
        style={{
          aspectRatio: slideAspectRatio,
        }}
      />
      <Skeleton className="h-auto w-[7.5%]" />
    </div>
  );
};
