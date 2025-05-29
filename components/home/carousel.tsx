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
    <div className="max-w-9xl relative overflow-x-clip border-y bg-background px-4 pt-6">
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
    <div className="max-w-9xl relative overflow-x-clip border-y bg-background px-2 pt-6">
      <div
        className="mx-auto flex max-w-7xl py-2"
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
      <div className="mx-auto flex max-w-6xl items-center justify-center pb-4 pt-3 sm:justify-between">
        <div className="flex gap-2">
          <Skeleton className="h-9 w-9 rounded-full" />
          <Skeleton className="h-9 w-9 rounded-full" />
          <Skeleton className="h-9 w-9 rounded-full" />
        </div>
        <div className="hidden gap-1.5 sm:flex">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>
      </div>
    </div>
  );
};
