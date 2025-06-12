"use client";

import { useEffect, useState } from "react";
import { getPosters } from "@/db/queries/select";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { SelectPoster } from "@/db/schema";
import PosterCard, { PosterCardSkeleton } from "./cards";

const PosterList = () => {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [posters, setPosters] = useState<SelectPoster[]>([]);

  const { isPending, mutate: fetchPosters } = useMutation({
    mutationKey: ["getPosters"],
    mutationFn: getPosters,
    onSuccess: (data) => {
      setPosters(data);
    },
    onError: (error) => {
      toast.error("Failed to get posters", {
        description: error.message,
      });
    },
  });

  useEffect(() => {
    fetchPosters();
    setIsDomLoaded(true);
  }, [isDomLoaded, fetchPosters]);

  return isPending || !isDomLoaded ? (
    <PosterListSkeleton />
  ) : (
    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 md:gap-4">
      {posters.map((poster) => (
        <PosterCard key={poster.id} {...poster} />
      ))}
    </div>
  );
};

export default PosterList;

const PosterListSkeleton = () => {
  const cardCount = Array.from({ length: 12 });
  return (
    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4">
      {cardCount.map((_, i) => (
        <PosterCardSkeleton key={i} />
      ))}
    </div>
  );
};
