import React from "react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/effects/morphing-dialog";
import { motion } from "motion/react";
import { FourCornerBoxes, RPlus } from "@/components/common/decoration";
import { ArrowRightIcon } from "lucide-react";

const StandoutEventCard = ({
  title,
  subtitle,
  image,
  content,
}: {
  title: string;
  subtitle: string;
  image: string;
  content: string;
}) => {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger className="relative w-full max-w-[18rem] border">
        <FourCornerBoxes className="bg-background" child={<RPlus />} />
        <div className="w-[90%]] group mx-auto flex h-[320px] flex-col overflow-hidden bg-background p-2">
          <figure className="relative min-h-52 w-full overflow-hidden rounded-md border-2 border-muted/40 bg-muted/40 p-2 transition-all duration-300 group-hover:min-h-44">
            <div
              style={{
                background:
                  "linear-gradient(123.9deg, hsl(var(--muted)) 1.52%, rgba(0, 0, 0, 0) 68.91%)",
              }}
              className="absolute left-0 top-0 h-full w-full opacity-0 transition-all group-hover:opacity-100"
            ></div>
            <MorphingDialogImage
              src={image}
              alt={title}
              className="absolute -bottom-1 right-0 h-auto w-56 rounded-lg border-4 border-border/60 bg-background object-cover px-8 py-2 duration-300 group-hover:-bottom-5 group-hover:border-primary/60"
            />
          </figure>
          <div className="grow-1 relative flex h-full flex-col justify-between px-4 py-3">
            <div className="space-y-1">
              <MorphingDialogTitle className="text-lg font-semibold">
                {title}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-sm text-muted-foreground">
                {subtitle}
              </MorphingDialogSubtitle>
            </div>
            <button
              className="ml-auto flex translate-y-2 scale-50 items-center gap-1 rounded-full border-2 p-2 text-base font-semibold opacity-0 duration-300 group-hover:translate-y-0 group-hover:scale-105 group-hover:text-primary group-hover:opacity-100"
              aria-label="Expand card"
            >
              <ArrowRightIcon className="rotate-45 transition-transform duration-700 group-hover:rotate-0" />
            </button>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="pointer-events-auto relative flex h-auto max-h-screen w-full flex-col overflow-y-auto border bg-background sm:w-[500px]">
          <div className="border-b px-4 pb-4 pt-3">
            <MorphingDialogTitle className="text-3xl font-semibold">
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="mt-2 text-sm text-muted-foreground">
              {subtitle}
            </MorphingDialogSubtitle>
          </div>
          <div
            style={{
              position: "relative",
            }}
            className="w-full border-b bg-gradient-to-r from-background via-muted/60 to-background"
          >
            <MorphingDialogImage
              src={image}
              alt={title}
              className="mx-auto h-auto w-52 object-cover"
            />
          </div>
          <div className="p-4">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="text-pretty"
            >
              {content}
            </motion.p>
          </div>
          <MorphingDialogClose />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};

export default StandoutEventCard;
