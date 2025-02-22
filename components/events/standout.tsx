"use client";

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
import events from "@/resources/events";
import { motion } from "motion/react";

const StandoutEvents = () => {
  return (
    <section className="relative mx-auto max-w-8xl border-collapse border py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4">
        {events.slice(0, 3).map((event) => (
          <MorphEventCard
            key={event.id}
            title={event.title}
            subtitle={event.subtitle}
            image={event.logo}
            content={event.description}
          />
        ))}
      </div>
    </section>
  );
};

export default StandoutEvents;

const MorphEventCard = ({
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
      <MorphingDialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex w-full max-w-[18rem] flex-col overflow-hidden border bg-background"
      >
        <div className="bg-muted p-4">
          <MorphingDialogImage
            src={image}
            alt={title}
            className="mx-auto h-auto w-40 object-cover"
          />
        </div>
        <div className="px-4 py-3">
          <MorphingDialogTitle className="text-lg font-semibold">
            {title}
          </MorphingDialogTitle>
          <MorphingDialogSubtitle className="text-sm text-muted-foreground">
            {subtitle}
          </MorphingDialogSubtitle>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "16px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border bg-background sm:w-[500px]"
        >
          <div className="border-b px-4 pb-4 pt-3">
            <MorphingDialogTitle className="text-3xl font-semibold">
              {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="mt-2 text-sm text-muted-foreground">
              {subtitle}
            </MorphingDialogSubtitle>
          </div>
          <div className="w-full border-b">
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
