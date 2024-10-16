import { cn } from "@/lib/utils";
import React from "react";

type SectionHeadingProps = {
  className?: string;
  CustomIcon?: React.ReactNode;
  Icon?: React.ElementType;
  title: string;
};

const SectionHeading = ({
  className,
  CustomIcon,
  Icon,
  title,
}: SectionHeadingProps) => {
  const iconTail = `p-1.5 w-7 h-7 mr-1.5 rounded-md border border-sky-300 dark:border-slate-700  
  bg-sky-200 dark:bg-slate-800 dark:text-cyan-200`;
  return (
    <div
      className={cn(
        "ml-1.5 flex w-fit items-center border-b-2 border-dotted px-1 pb-2",
        className,
      )}
    >
      <div className=" mr-2 flex items-center ">
        {CustomIcon ? CustomIcon : Icon && <Icon className={iconTail} />}
      </div>
      <h2 className="text-sm font-bold tracking-wide">{title}</h2>
    </div>
  );
};

export default SectionHeading;
