"use client";

import { useEffect, useState } from "react";
import { getReports, ReportMeta } from "@/db/queries/select";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ReportCard, ReportCardSkeleton } from "./cards";

const ReportList = () => {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [reports, setReports] = useState<ReportMeta[]>([]);

  const { isPending, mutate: fetchReports } = useMutation({
    mutationKey: ["getReports"],
    mutationFn: ({ page, pageSize }: { page?: number; pageSize?: number }) =>
      getReports({ page, pageSize }),
    onSuccess: (data) => {
      setReports(data);
    },
    onError: (error) => {
      toast.error("Failed to get reports", {
        description: error.message,
      });
    },
  });

  useEffect(() => {
    fetchReports({ page: undefined, pageSize: undefined });
    setIsDomLoaded(true);
  }, [isDomLoaded, fetchReports]);

  if (!isDomLoaded || isPending) {
    return <ReportListSkeleton />;
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">
      {reports.map((report) => {
        return <ReportCard key={report.id} report={report} />;
      })}
    </div>
  );
};

export default ReportList;

const ReportListSkeleton = () => {
  const cardCount = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">
      {cardCount.map((_, i) => (
        <ReportCardSkeleton key={i} />
      ))}
    </div>
  );
};
