"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { NextButton, PrevButton, usePrevNextButtons } from "./carousel-buttons";
import {
  AutoplayProgress,
  DotButton,
  useAutoplayProgress,
  useDotButton,
} from "./carousel-indicators";

type CarouselPropType = {
  slides: React.ReactElement[];
  slideWidth: string;
  slideAspectRatio: string;
  slideSpacing: string;
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  showProgress?: boolean;
};

export type CarouselRef = {
  stopAutoplay: () => void;
  startAutoplay: () => void;
  resetAutoplay: () => void;
};

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = forwardRef<CarouselRef, CarouselPropType>(
  (
    {
      slides,
      slideWidth,
      slideAspectRatio,
      slideSpacing,
      loop = true,
      autoplay = false,
      autoplayInterval = 3000,
      showProgress = false,
    },
    ref,
  ) => {
    const tweenFactor = useRef(0);
    const progressNode = useRef<HTMLDivElement>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        loop: loop,
      },
      [
        Autoplay({
          playOnInit: autoplay,
          delay: autoplayInterval,
          stopOnInteraction: false,
        }),
      ],
    );

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
    }, []);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
      emblaApi,
      onNavButtonClick,
    );

    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick,
    } = usePrevNextButtons(emblaApi, onNavButtonClick);

    const { showAutoplayProgress } = useAutoplayProgress(
      emblaApi,
      progressNode,
    );

    useImperativeHandle(
      ref,
      () => ({
        stopAutoplay: () => {
          const autoplayPlugin = emblaApi?.plugins()?.autoplay;
          if (autoplayPlugin) {
            autoplayPlugin.stop();
          }
        },
        startAutoplay: () => {
          const autoplayPlugin = emblaApi?.plugins()?.autoplay;
          if (autoplayPlugin) {
            autoplayPlugin.play();
          }
        },
        resetAutoplay: () => {
          const autoplayPlugin = emblaApi?.plugins()?.autoplay;
          if (autoplayPlugin) {
            autoplayPlugin.reset();
          }
        },
      }),
      [emblaApi],
    );

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
      tweenFactor.current =
        TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenOpacity = useCallback(
      (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        const isScrollEvent = eventName === "scroll";

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
          let diffToTarget = scrollSnap - scrollProgress;
          const slidesInSnap = engine.slideRegistry[snapIndex];

          slidesInSnap.forEach((slideIndex) => {
            if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

            if (engine.options.loop) {
              engine.slideLooper.loopPoints.forEach((loopItem) => {
                const target = loopItem.target();

                if (slideIndex === loopItem.index && target !== 0) {
                  const sign = Math.sign(target);

                  if (sign === -1) {
                    diffToTarget = scrollSnap - (1 + scrollProgress);
                  }
                  if (sign === 1) {
                    diffToTarget = scrollSnap + (1 - scrollProgress);
                  }
                }
              });
            }

            const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
            const opacity = numberWithinRange(tweenValue, 0.3, 1).toString();
            const parentOpacity = parseFloat(opacity);
            const childOpacity = 1 - parentOpacity;
            emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
            const childDiv = emblaApi
              .slideNodes()
              [slideIndex].querySelector(".mask") as HTMLElement;
            if (childDiv) {
              childDiv.style.opacity = childOpacity.toString();
            }
          });
        });
      },
      [],
    );

    useEffect(() => {
      if (!emblaApi) return;

      setTweenFactor(emblaApi);
      tweenOpacity(emblaApi);
      emblaApi
        .on("reInit", setTweenFactor)
        .on("reInit", tweenOpacity)
        .on("scroll", tweenOpacity)
        .on("slideFocus", tweenOpacity);
    }, [emblaApi, tweenOpacity, setTweenFactor]);

    return (
      <>
        <div ref={emblaRef}>
          <div
            className={`flex touch-pan-y touch-pinch-zoom`}
            style={{
              marginLeft: `calc(${slideSpacing}*-1)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                className={`translate-z-0 relative h-auto min-w-0 translate-x-0 translate-y-0 transform`}
                style={{
                  paddingLeft: slideSpacing,
                  flex: `0 0 ${slideWidth}`,
                  aspectRatio: slideAspectRatio,
                  width: slideWidth,
                }}
                key={index}
              >
                <div className="mask pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(transparent_1px,var(--token-f32baa44-90b8-42a5-8bca-ffba9d95b23a,hsl(var(--background)))_1px)] bg-[length:4px_4px] backdrop-blur-sm" />
                {slide}
              </div>
            ))}
          </div>
        </div>
        {slides.length > 1 && (
          <div className="relative flex justify-center py-4 sm:justify-between">
            <div className="flex gap-2">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
            <div className="absolute inset-y-0 left-[50%] hidden -translate-x-[50%] place-content-center sm:grid">
              {showProgress && (
                <AutoplayProgress
                  showAutoplayProgress={showAutoplayProgress}
                  progressNode={progressNode}
                />
              )}
            </div>

            <div className="hidden flex-wrap items-center justify-end gap-2 sm:flex">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={
                    "m-0 flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full border-0 bg-background p-0" +
                    (index === selectedIndex
                      ? " ring-2 ring-inset ring-foreground/80"
                      : " ring-2 ring-inset ring-foreground/25")
                  }
                />
              ))}
            </div>
          </div>
        )}
      </>
    );
  },
);

EmblaCarousel.displayName = "EmblaCarousel";

export default EmblaCarousel;
