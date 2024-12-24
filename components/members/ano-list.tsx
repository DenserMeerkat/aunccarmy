"use client";

import { useEffect, useState } from "react";
import { getAnos } from "@/db/queries/select";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { SelectAno } from "@/db/schema";
import { Skeleton } from "../ui/skeleton";
import { AnoCard } from "./cards";

const AnoList = () => {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [anos, setAnos] = useState<SelectAno[]>([]);

  const { isPending, mutate: fetchAnos } = useMutation({
    mutationFn: getAnos,
    onSuccess: (data) => {
      setAnos(data);
    },
    onError: (error) => {
      toast.error("Failed to add ANO", {
        description: error.message,
      });
    },
  });

  useEffect(() => {
    fetchAnos();
    setIsDomLoaded(true);
  }, [isDomLoaded, fetchAnos]);

  if (!isDomLoaded || isPending) {
    return <AnoListSkeleton />;
  }

  return (
    <div className="mx-auto my-8 flex max-w-7xl flex-wrap justify-center gap-6">
      {anos.map((ano) => {
        return (
          <AnoCard
            key={ano.id}
            name={ano.name}
            public_id={ano.public_id}
            alt={ano.alt}
            platoon={ano.platoon}
            desig={ano.desig}
            dept={ano.dept}
          />
        );
      })}
    </div>
  );
};

export default AnoList;

export const AnoListSkeleton = () => {
  const cardCount = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="mx-auto my-8 flex max-w-7xl flex-wrap justify-center gap-6">
      {cardCount.map((_, i) => (
        <Skeleton
          key={i}
          className="h-44 w-96 rounded-none sm:h-48 sm:w-96 xs:rounded-xl"
        />
      ))}
    </div>
  );
};
