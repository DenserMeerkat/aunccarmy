"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useMutation } from "@tanstack/react-query";
import { getReports } from "@/db/queries/select";
import EmblaCarouselMultiView from "../common/carousel/embla-carousel-multi-view";
import { toast } from "sonner";
import { ReportCard, ReportCardSkeleton } from "../reports/cards";

const slideWidth = "290px";
const slideAspectRatio = "96/95";
const slideSpacing = "clamp(8px,2vw,1rem)";

const ReportCarousel = () => {
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [slides, setSlides] = useState<React.ReactElement[]>([]);

  const { isPending, mutate: fetchReports } = useMutation({
    mutationKey: ["getReports"],
    mutationFn: ({ page, pageSize }: { page?: number; pageSize?: number }) =>
      getReports({ page, pageSize }),
    onSuccess: (data) => {
      setSlides(
        data.map((report) => <ReportCard key={report.id} report={report} />),
      );
    },
    onError: (error) => {
      toast.error("Failed to get reports", {
        description: error.message,
      });
    },
  });

  const getResponsiveSlidesToScroll = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    if (width >= 968) return 3;
    if (width >= 620) return 2;
    return 1;
  };

  useEffect(() => {
    fetchReports({ page: 1, pageSize: 12 });
    setIsDomLoaded(true);
  }, [isDomLoaded, fetchReports]);

  useEffect(() => {
    const updateSlidesToScroll = () => {
      setSlidesToScroll(getResponsiveSlidesToScroll());
    };

    updateSlidesToScroll();
    window.addEventListener("resize", updateSlidesToScroll);
    return () => window.removeEventListener("resize", updateSlidesToScroll);
  }, []);

  if (!isDomLoaded || isPending) {
    return <ReportCarouselSkeleton />;
  }

  return (
    <div className="max-w-9xl relative bg-background px-4 pt-6">
      <div className="mx-auto max-w-7xl">
        <EmblaCarouselMultiView
          slides={slides}
          slideWidth={slideWidth}
          slideAspectRatio={slideAspectRatio}
          slideSpacing={slideSpacing}
          slidesToScroll={slidesToScroll}
          dragFree
        />
      </div>
    </div>
  );
};

export default ReportCarousel;

export const ReportCarouselSkeleton = () => {
  return (
    <div className="max-w-9xl relative overflow-x-clip bg-background px-2 pt-6">
      <div
        className="mx-auto flex max-w-7xl py-2"
        style={{
          gap: slideSpacing,
        }}
      >
        <ReportCardSkeleton />
        <ReportCardSkeleton />
        <ReportCardSkeleton />
        <ReportCardSkeleton />
        <ReportCardSkeleton />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-center pb-4 pt-3 sm:justify-between">
        <div className="flex gap-2">
          <Skeleton className="h-9 w-9 rounded-full" />
          <Skeleton className="h-9 w-9 rounded-full" />
        </div>
      </div>
    </div>
  );
};
