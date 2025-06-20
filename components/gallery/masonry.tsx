"use client";

import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import { useMutation } from "@tanstack/react-query";
import { getGalleryImages } from "@/db/queries/select";
import CldImage from "../common/cld-image";
import Lightbox, {
  LightboxHandle,
  LightboxImage,
  LightboxRenderContext,
  LightboxRenderProps,
} from "@/components/common/lightbox/lightbox";
import { SelectGalleryImage } from "@/db/schema";
import ImageCard from "./cards";

const Masonry = () => {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [images, setImages] = useState<SelectGalleryImage[]>([]);

  const lightboxRef = useRef<LightboxHandle>(null);

  const { isPending, mutate: getImages } = useMutation({
    mutationKey: ["getGalleryImages"],
    mutationFn: getGalleryImages,
    onSuccess: (data) => setImages(data),
    onError: (error) => console.error("Failed to fetch slides:", error),
  });

  useEffect(() => {
    getImages();
    setIsDomLoaded(true);
  }, [getImages]);

  const handleImageClick = (index: number) => {
    lightboxRef.current?.openLightbox(index);
  };

  const renderCldImage = (
    props: RenderImageProps,
    context: RenderImageContext<{
      width: number;
      height: number;
      alt: string | undefined;
      date: Date;
      public_id: string;
      caption?: string | null | undefined;
      src: string;
      index: number;
      id: number;
      createdAt: Date;
      updatedAt: Date;
    }>,
  ) => {
    return (
      <ImageCard
        image={{
          ...context.photo,
          alt: context.photo.alt || null,
          caption: context.photo.caption || null,
        }}
        onClick={() => handleImageClick(context.index)}
      />
    );
  };

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

  if (!isDomLoaded || isPending) {
    return <MasonrySkeleton />;
  }

  const photos = images.map((image, index) => ({
    src: image.public_id,
    width: image.width,
    height: image.height,
    alt: image.alt ?? undefined,
    date: image.date,
    public_id: image.public_id,
    caption: image.caption,
    index,
    id: image.id,
    createdAt: image.createdAt,
    updatedAt: image.updatedAt,
  }));

  const lightboxImages: LightboxImage[] = images.map((image) => ({
    ...image,
    src: image.public_id,
    alt: image.alt ?? "",
    caption: image.caption || undefined,
    public_id: image.public_id,
  }));

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <RowsPhotoAlbum
          spacing={12}
          photos={photos}
          render={{ image: renderCldImage }}
          targetRowHeight={300}
        />
      </div>

      <Lightbox
        ref={lightboxRef}
        images={lightboxImages}
        loop
        render={{ image: renderLightboxImage }}
      />
    </>
  );
};

export default Masonry;

export const MasonrySkeleton = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-12 gap-3">
        <Skeleton className="col-span-3 h-[clamp(80px,32vw,300px)]" />
        <Skeleton className="col-span-9 h-[clamp(80px,32vw,300px)]" />
        <Skeleton className="col-span-4 h-[clamp(80px,32vw,300px)]" />
        <Skeleton className="col-span-8 h-[clamp(80px,32vw,300px)]" />
        <Skeleton className="col-span-5 h-[clamp(80px,32vw,300px)]" />
        <Skeleton className="col-span-7 h-[clamp(80px,32vw,300px)]" />
        <Skeleton className="col-span-12 h-[clamp(80px,32vw,300px)]" />
        <Skeleton className="col-span-2 h-[clamp(80px,32vw,300px)]" />
        <Skeleton className="col-span-5 h-[clamp(80px,32vw,300px)]" />
        <Skeleton className="col-span-5 h-[clamp(80px,32vw,300px)]" />
      </div>
    </div>
  );
};
