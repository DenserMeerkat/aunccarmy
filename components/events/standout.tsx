"use client";

import React from "react";
import events from "@/resources/events";
import StandoutEventCard from "./standout-event-card";
import {
  SectionHeading,
  SectionHeadingTag,
} from "@/components/common/section-heading";
import { SparklesIcon } from "lucide-react";

const StandoutEvents = () => {
  return (
    <section className="relative mx-auto max-w-8xl border-collapse border-x border-b py-10">
      <SectionHeadingTag
        className="mb-2"
        Icon={SparklesIcon}
        title={"Standout Events"}
      />
      <SectionHeading
        title={"Our Spotlight Events"}
        subtitle={
          "Impacting communities through events that drive positive change"
        }
      />
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center pb-6">
        {events.slice(0, 3).map((event) => (
          <StandoutEventCard
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
