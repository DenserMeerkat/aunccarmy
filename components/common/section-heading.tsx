import { cn } from "@/lib/utils";
import React from "react";

export const SectionHeadingTag = ({
  className,
  CustomIcon,
  Icon,
  title,
}: {
  className?: string;
  CustomIcon?: React.ReactNode;
  Icon?: React.ElementType;
  title: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-fit items-center rounded-full border bg-muted/50 px-4 py-1.5 text-primary shadow-xl",
        className,
      )}
    >
      <div className="mr-2 flex items-center ">
        {CustomIcon ? CustomIcon : Icon && <Icon className="h-3.5 w-3.5" />}
      </div>
      <h2 className="text-sm font-semibold tracking-wide">{title}</h2>
    </div>
  );
};

export const SectionHeading = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col items-center pb-8 md:pb-10", className)}>
      <h2 className="max-w-xl pb-3 text-center text-3xl font-bold md:pb-4 md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-center text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};
