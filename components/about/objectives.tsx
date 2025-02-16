import React from "react";
import { TargetIcon } from "lucide-react";
import {
  SectionHeading,
  SectionHeadingTag,
} from "@/components/common/section-heading";
import { objectives } from "@/constants";
import {
  FourCornerBoxes,
  RDiamond,
  RDot,
  RPlus,
} from "@/components/common/decoration";
import { motion } from "motion/react";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const Objectives = () => {
  return (
    <section className="mx-auto max-w-8xl border-collapse border py-10">
      <SectionHeadingTag
        className="mb-4"
        Icon={TargetIcon}
        title={"Objectives"}
      />
      <SectionHeading
        title={"What are its Objectives?"}
        subtitle={"Guiding Youth Towards Growth and Excellence"}
      />
      <div className="relative border-collapse border-b border-t">
        <FourCornerBoxes child={<RDiamond />} />
        <div className="mx-auto grid max-w-sm grid-cols-2 justify-center md:max-w-4xl md:grid-cols-4">
          {objectives.map((objective, index) => (
            <ObjectiveCard
              key={index}
              title={objective.title}
              description={objective.description}
              Icon={objective.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;

const ObjectiveCard = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: React.ElementType;
}) => {
  return (
    <div className="relative border-collapse border border-border/80 bg-background p-2.5">
      <FourCornerBoxes className="bg-background" child={<RPlus />} />
      <div className="h-44 overflow-clip rounded-2xl border bg-muted/20 p-2 drop-shadow-md md:p-3">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="relative grid h-20 w-20 place-content-center rounded-xl border-2 bg-muted/60 p-4 text-muted-foreground">
            <RDot className="absolute left-2 top-2 bg-muted-foreground/30" />
            <RDot className="absolute right-2 top-2 bg-muted-foreground/30" />
            <RDot className="absolute bottom-2 left-2 bg-muted-foreground/30" />
            <RDot className="absolute bottom-2 right-2 bg-muted-foreground/30" />
            <Icon className="h-10 w-10 " />
          </div>
          <div className="grid h-8 max-w-32 place-content-center">
            <h3 className="mb-1 text-center text-xs font-semibold tracking-wide xs:text-sm">
              {title}
            </h3>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 z-40"
          initial={{ opacity: 0, scale: 0.9 }}
          whileHover={{ opacity: 1, scale: 1 }}
          whileTap={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-muted p-2 md:p-4">
            <GridPattern
              width={20}
              height={20}
              strokeDasharray={"4 2"}
              className="opacity-30"
            />
            <RDot className="absolute left-2.5 top-2.5 h-1.5 w-1.5 bg-primary/60 md:left-4 md:top-4" />
            <RDot className="absolute right-2.5 top-2.5 h-1.5 w-1.5 bg-primary/60 md:right-4 md:top-4" />
            <RDot className="absolute bottom-2.5 left-2.5 h-1.5 w-1.5 bg-primary/60 md:bottom-4 md:left-4" />
            <RDot className="absolute bottom-2.5 right-2.5 h-1.5 w-1.5 bg-primary/60 md:bottom-4 md:right-4" />
            <p className="text-center text-sm font-semibold text-foreground md:text-base">
              {title}
            </p>
            <p className="text-center text-xs text-foreground/80 sm:text-sm">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
