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
import { cn } from "@/lib/utils";

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
        <div
          className={cn(
            "flex flex-col bg-background",
            "group shadow-md transition-all hover:z-20 hover:shadow-xl hover:shadow-primary/10",
          )}
        >
          <div className="relative from-muted/50 p-4 transition-all group-hover:bg-gradient-to-t">
            <MorphingDialogImage
              src={image}
              alt={title}
              className="mx-auto h-auto w-40 object-cover"
            />
          </div>
          <div className="border-t px-4 py-3">
            <MorphingDialogTitle className="text-lg font-semibold">
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-sm text-muted-foreground">
              {subtitle}
            </MorphingDialogSubtitle>
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
