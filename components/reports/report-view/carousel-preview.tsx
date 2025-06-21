"use client";

import React, { Suspense, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import EmblaCarousel from "@/components/common/carousel/embla-carousel-view";
import { Slide } from "@/types";
import Lightbox, {
  LightboxHandle,
  LightboxImage,
  LightboxRenderContext,
  LightboxRenderProps,
} from "@/components/common/lightbox/lightbox";
import CldImage from "@/components/common/cld-image";

type ReportCarouselProps = {
  slides: Slide[];
};

const slideWidth = "100%";
const slideAspectRatio = "16/9";
const slideSpacing = "clamp(8px,2vw,1rem)";

const ReportCarousel = ({ slides }: ReportCarouselProps) => {
  const lightboxRef = useRef<LightboxHandle>(null);
  const validSlides = slides.filter((slide) => slide.public_id);

  if (validSlides.length === 0) return null;

  const handleImageClick = (index: number) => {
    lightboxRef.current?.openLightbox(index);
  };

  const _slides = validSlides.map((slide, index) => {
    return (
      <div
        key={index}
        className={`h-full cursor-pointer select-none overflow-clip rounded-2xl bg-primary/10`}
        onClick={() => handleImageClick(index)}
      >
        <CldImage
          src={slide.public_id}
          alt={slide.alt ?? ""}
          width={1200}
          height={670}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  });

  const lightboxImages: LightboxImage[] = validSlides.map((image) => ({
    ...image,
    src: image.public_id,
    alt: image.alt ?? "",
    caption: image.caption || undefined,
    public_id: image.public_id,
  }));

  const renderLightboxImage = (
    props: LightboxRenderProps,
    context: LightboxRenderContext,
  ) => {
    const { alt, public_id } = context.image;

    return (
      <div className="grid h-full place-content-center">
        <CldImage
          src={public_id}
          alt={alt}
          onLoad={props.onLoad}
          fill
          className="object-contain"
        />
      </div>
    );
  };

  return (
    <Suspense fallback={<ReportCarouselSkeleton />}>
      <div className="mx-auto max-w-2xl">
        <EmblaCarousel
          slides={_slides}
          slideWidth={slideWidth}
          slideAspectRatio={slideAspectRatio}
          slideSpacing={slideSpacing}
          loop={false}
          autoplay={false}
          showProgress={false}
        />
        <Lightbox
          ref={lightboxRef}
          images={lightboxImages}
          loop
          render={{ image: renderLightboxImage }}
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
