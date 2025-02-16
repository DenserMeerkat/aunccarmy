"use client";

import { useEffect, useState } from "react";
import { getAnos } from "@/db/queries/select";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { SelectAno } from "@/db/schema";
import { AnoCard, MemberCardSkeleton } from "../cards";
import { getOrganizedAnos } from "@/lib/transforms";

const AnoList = () => {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [anos, setAnos] = useState<SelectAno[]>([]);

  const { isPending, mutate: fetchAnos } = useMutation({
    mutationFn: getAnos,
    onSuccess: (data) => {
      setAnos(data);
    },
    onError: (error) => {
      toast.error("Failed to get ANOs", {
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

  const { active: activeAnos, alumni: alumniAnos } = getOrganizedAnos(anos);

  return (
    <div className="space-y-12">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">
        {activeAnos.map((ano) => {
          return <AnoCard key={ano.id} ano={ano} />;
        })}
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">
        {alumniAnos.map((ano) => {
          return <AnoCard key={ano.id} ano={ano} />;
        })}
      </div>
    </div>
  );
};

export default AnoList;

const AnoListSkeleton = () => {
  const cardCount = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-6 gap-y-12">
      {cardCount.map((_, i) => (
        <MemberCardSkeleton key={i} />
      ))}
    </div>
  );
};
