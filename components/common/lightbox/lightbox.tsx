"use client";

import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CaptionButton from "./caption";

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
  [key: string]: any;
}

export interface LightboxRenderContext {
  image: LightboxImage;
  index: number;
}

export interface LightboxRenderProps {
  className?: string;
  onClick?: () => void;
  onLoad?: () => void;
  ref?: React.Ref<any>;
}

export type LightboxRenderFunction = (
  props: LightboxRenderProps,
  context: LightboxRenderContext,
) => React.ReactElement;

interface LightboxProps {
  images: LightboxImage[];
  loop?: boolean;
  lightboxImageClassName?: string;
  render?: {
    image?: LightboxRenderFunction;
  };
  onClose?: () => void;
}

export interface LightboxHandle {
  openLightbox: (index: number) => void;
}

const defaultImageRender: LightboxRenderFunction = (props, context) => (
  <img
    src={context.image.src || "/placeholder.svg"}
    alt={context.image.alt}
    className={props.className}
    onLoad={props.onLoad}
  />
);

const Lightbox = forwardRef<LightboxHandle, LightboxProps>(
  (
    { images, loop = false, lightboxImageClassName = "", render = {}, onClose },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCaptionOpen, setIsCaptionOpen] = useState(false);
    const imageRender = render.image || defaultImageRender;
    const lightboxRef = useRef<HTMLDivElement>(null);

    const openLightbox = (index: number) => {
      setCurrentIndex(index);
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };

    const closeLightbox = useCallback(() => {
      setIsOpen(false);
      setIsCaptionOpen(false);
      document.body.style.overflow = "";
      onClose?.();
    }, [onClose]);

    useImperativeHandle(ref, () => ({ openLightbox }));

    const prev = useCallback(() => {
      setCurrentIndex((prev) =>
        prev > 0 ? prev - 1 : loop ? images.length - 1 : prev,
      );
      setIsCaptionOpen(false);
    }, [images.length, loop]);

    const next = useCallback(() => {
      setCurrentIndex((prev) =>
        prev < images.length - 1 ? prev + 1 : loop ? 0 : prev,
      );
      setIsCaptionOpen(false);
    }, [images.length, loop]);

    const toggleCaption = useCallback(() => {
      setIsCaptionOpen((prev) => !prev);
    }, []);

    useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
        if (!isOpen) return;
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
        if (e.key === "Escape") {
          if (isCaptionOpen) {
            setIsCaptionOpen(false);
          } else {
            closeLightbox();
          }
        }
        if (e.key === "i" || e.key === "I") {
          if (images[currentIndex]?.caption) {
            toggleCaption();
          }
        }
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, [
      isOpen,
      next,
      prev,
      isCaptionOpen,
      toggleCaption,
      currentIndex,
      images,
      closeLightbox,
    ]);

    const currentImage = images[currentIndex];
    const hasCaption =
      currentImage?.caption && currentImage?.caption.length > 0;

    return isOpen ? (
      <>
        <div
          className={
            "fixed inset-0 z-[120] h-full w-full bg-[radial-gradient(transparent_1px,var(--token-f32baa44-90b8-42a5-8bca-ffba9d95b23a,hsl(var(--background))))] bg-[length:4px_4px] backdrop-blur-lg"
          }
        />
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[150]"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          <div className="absolute right-4 top-4 z-[160]">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full border shadow-md sm:size-12"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="mt-2 hidden rounded-xl border-2 border-b-4 bg-background px-2 py-1 text-center text-xs md:block">
              Esc
            </div>
          </div>

          {(currentIndex > 0 || loop) && (
            <div className="absolute left-4 top-1/2 z-[160] flex -translate-y-1/2 flex-col items-center">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full border shadow-md sm:size-12"
                onClick={prev}
                aria-label="Previous"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <div className="mt-2 hidden w-fit rounded-xl border-2 border-b-4 bg-background px-2 py-1 md:block">
                <ArrowLeft className="size-4" />
              </div>
            </div>
          )}

          {(currentIndex < images.length - 1 || loop) && (
            <div className="absolute right-4 top-1/2 z-[160] flex -translate-y-1/2 flex-col items-center">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full border shadow-md sm:size-12"
                onClick={next}
                aria-label="Next"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
              <div className="mt-2 hidden w-fit rounded-xl border-2 border-b-4 bg-background px-2 py-1 md:block">
                <ArrowRight className="size-4" />
              </div>
            </div>
          )}

          <div className="flex h-full w-full flex-col items-center justify-center p-4">
            <div className="relative flex h-full max-h-[90vh] w-full max-w-[90vw] flex-col items-center overflow-hidden rounded-lg border-2 border-dashed bg-background/60">
              {imageRender(
                {
                  className: cn(
                    "max-w-full max-h-[80vh] object-contain transition-opacity duration-300 opacity-100",
                    lightboxImageClassName,
                  ),
                },
                { image: images[currentIndex], index: currentIndex },
              )}

              <div className="absolute left-2 top-2 z-[160] md:left-4 md:top-4">
                <div className="flex items-center gap-3 rounded-xl border-2 bg-background px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-medium">
                      {currentIndex + 1}
                    </div>
                    <div className="text-xs">of</div>
                    <div className="text-sm font-medium">{images.length}</div>
                  </div>
                </div>
              </div>

              {hasCaption && (
                <CaptionButton
                  caption={currentImage.caption!}
                  isCaptionOpen={isCaptionOpen}
                  setIsCaptionOpen={setIsCaptionOpen}
                />
              )}
            </div>
          </div>
        </div>
      </>
    ) : null;
  },
);

Lightbox.displayName = "Lightbox";
export default Lightbox;
