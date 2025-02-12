import React from "react";
import { TargetIcon } from "lucide-react";
import SectionHeading from "../common/section-heading";
import { cn } from "@/lib/utils";
import { objectives } from "@/constants";

const Objectives = () => {
  return (
    <section className="mx-auto max-w-7xl py-10">
      <SectionHeading
        className="mb-4"
        Icon={TargetIcon}
        title={"Objectives of NCC"}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className={cn(
              "rounded-3xl border-2 p-3",
              index % 2 === 0 && "bg-muted/60",
            )}
          >
            <div className="flex h-full flex-col gap-4 sm:flex-row">
              <div
                className={cn(
                  "grid h-full place-content-center rounded-2xl bg-muted/60 p-4",
                  index % 2 === 0 && "bg-background",
                )}
              >
                <objective.icon className="h-16 w-16 text-muted-foreground" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold tracking-wide">
                  {objective.title}
                </h3>
                <p className="text-base text-foreground/70">
                  {objective.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
