"use client";

import { motion } from "motion/react";
import { ImagesSlider } from "../ui/images-slider";
import CldImage from "../common/cld-image";
import { useEffect, useState } from "react";
import { Slide } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { getCarousel } from "@/db/queries/select";
import { SectionHeading, SectionHeadingTag } from "../common/section-heading";
import { FocusIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export function GalleryCarousel() {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [slides, setSlides] = useState<Slide[]>([]);

  const { isPending, mutate: getSlides } = useMutation({
    mutationKey: ["getCarousel"],
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
    return <GalleryCarouselSkeleton />;
  }

  return (
    <section className="mx-auto h-fit max-w-8xl px-2">
      <div className="border-x sm:p-4 xs:p-2">
        <ImagesSlider
          className="h-[24rem] w-full sm:h-[32rem] sm:rounded-lg md:h-[40rem]"
          images={
            isDomLoaded && !isPending
              ? slides.map((slide) => slide.public_id)
              : []
          }
          ImageComponent={CldImage}
          imageProps={{
            alt: "",
            width: 1920,
            height: 1080,
            quality: "auto",
            format: "auto",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col items-center justify-center border-2 bg-background/80 p-4 shadow-xl backdrop-blur-[2px] sm:rounded-lg"
          >
            <SectionHeadingTag
              className="mb-2 drop-shadow-sm"
              Icon={FocusIcon}
              title={"Media Gallery"}
            />
            <SectionHeading
              subtitleClassName="dark:text-foreground/80"
              title={"Through the Lens"}
              subtitle={
                "Our journey, captured, celebrated, and shared, with pride"
              }
            />
          </motion.div>
        </ImagesSlider>
      </div>
    </section>
  );
}

const GalleryCarouselSkeleton = () => {
  return (
    <section className="mx-auto h-fit max-w-8xl px-2">
      <div className="border-x sm:p-4 xs:p-2">
        <Skeleton className="h-[40rem] w-full rounded-lg" />
      </div>
    </section>
  );
};
