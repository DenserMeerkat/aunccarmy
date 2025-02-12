"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import EmblaCarousel from "../common/carousel/embla-carousel-view";
import { useMutation } from "@tanstack/react-query";
import { getCarousel } from "@/db/queries/select";
import { Slide } from "@/types";

const slideWidth = "90%";
const slideAspectRatio = "30/13";
const slideSpacing = "clamp(8px,2vw,2rem)";

const HomeCarousel = () => {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [slides, setSlides] = useState<Slide[]>([]);

  const { isPending, mutate: getSlides } = useMutation({
    mutationFn: getCarousel,
    onSuccess: (data) => {
      const _slides: Slide[] = data.map((slide, index) => {
        return {
          public_id: slide.public_id,
          alt: slide.alt ?? undefined,
          caption: slide.caption ?? undefined,
        };
      });
      setSlides(_slides);
    },
    onError: (error) => {
      console.error("Failed to fetch slides:", error);
    },
  });

  useEffect(() => {
    getSlides();
    setIsDomLoaded(true);
  }, [isDomLoaded, getSlides]);

  if (!isDomLoaded || isPending) {
    return <HomeCarouselSkeleton />;
  }

  return (
    <div className="max-w-9xl relative overflow-x-clip bg-background px-4 pt-2">
      <div className="absolute left-0 z-20 h-full bg-gradient-to-r from-background xl:w-32" />
      <div className="absolute right-0 z-20 h-full bg-gradient-to-l from-background xl:w-32" />
      <div className="mx-auto max-w-6xl">
        <EmblaCarousel
          slides={slides}
          width={1900}
          height={800}
          slideWidth={slideWidth}
          slideAspectRatio={slideAspectRatio}
          slideSpacing={slideSpacing}
          showAutoplay={true}
          showProgress={true}
        />
      </div>
    </div>
  );
};

export default HomeCarousel;

export const HomeCarouselSkeleton = () => {
  return (
    <div
      className="mx-auto my-8 flex max-w-7xl"
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
