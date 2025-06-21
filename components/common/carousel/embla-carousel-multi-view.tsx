"use client";

import { useCallback, useEffect, useRef } from "react";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./carousel-buttons";

type CarouselPropType = {
  slides: React.ReactElement[];
  slideWidth: string;
  slideAspectRatio: string;
  slideSpacing: string;
  slidesToScroll?: number;
  loop?: boolean;
  dragFree?: boolean;
};

const TWEEN_FACTOR_BASE = 0.3;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const EmblaCarouselMultiView: React.FC<CarouselPropType> = ({
  slides,
  slideWidth,
  slideAspectRatio,
  slideSpacing,
  slidesToScroll = 3,
  loop = false,
  dragFree = false,
}) => {
  const tweenFactor = useRef(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: slidesToScroll,
    loop: loop,
    dragFree: dragFree,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
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
                marginLeft: slideSpacing,
                flex: `0 0 ${slideWidth}`,
                aspectRatio: slideAspectRatio,
              }}
              key={index}
            >
              <div className="mask pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_1px,var(--token-f32baa44-90b8-42a5-8bca-ffba9d95b23a,hsl(var(--background)))_1px)] bg-[length:4px_4px] backdrop-blur-sm" />
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
        </div>
      )}
    </>
  );
};

export default EmblaCarouselMultiView;
