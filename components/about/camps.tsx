"use client";

import React, { useState } from "react";
import { TransitionPanel } from "@/components/effects/transition-panel";
import camps from "@/resources/camps";
import { SectionHeadingTag } from "@/components/common/section-heading";
import { ClockIcon, TentIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FourCornerBoxes,
  FourDots,
  RDiamond,
  RPlus,
  TopCornerBoxes,
} from "@/components/common/decoration";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Camps = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="relative border-x">
      <TopCornerBoxes child={<RDiamond />} />
      <div className="mx-auto max-w-5xl py-16">
        <SectionHeadingTag
          Icon={TentIcon}
          title="Camps in NCC"
          className="mb-6"
        />

        <div className="mx-auto grid max-w-md grid-cols-12 gap-0 bg-background md:max-w-5xl">
          <div className="relative col-span-12 border border-b-0 p-4 md:col-span-5 md:border-b md:border-r-0">
            <FourCornerBoxes child={<RPlus />} />
            <div className="flex h-full flex-col justify-between gap-4 md:pb-2 lg:gap-4">
              <div className="text-center md:text-start">
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-2xl lg:text-4xl lg:tracking-tight">
                  Unlocking{" "}
                  <span className="font-extrabold text-primary">
                    Extraordiary
                  </span>{" "}
                  Experiences
                </h2>
                <p className="dark:text-muted-foreground">
                  In the NCC, there are several camps that cadets can attend to
                  enhance their skills, knowledge, and overall development.
                </p>
              </div>
              <p className="mt-2 hidden text-lg font-medium md:block">
                Discover details about some commonly organized camps:
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {camps.map((camp, index) => (
                  <li key={camp.id} className="flex justify-center">
                    <CampButton
                      index={index}
                      camp={camp}
                      active={active}
                      onClick={() => setActive(index)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative col-span-12 border p-4 md:col-span-7">
            <FourCornerBoxes child={<RPlus />} />
            <TransitionPanel
              activeIndex={active}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              variants={{
                enter: { opacity: 0, y: -50, filter: "blur(4px)" },
                center: { opacity: 1, y: 0, filter: "blur(0px)" },
                exit: { opacity: 0, y: 50, filter: "blur(4px)" },
              }}
              className={
                "h-full overflow-clip rounded-xl border bg-gradient-to-b from-muted/30 via-muted/80 to-muted/40 shadow-md backdrop-blur-sm"
              }
            >
              {camps.map((camp, index) => (
                <CampCard key={index} {...camp} />
              ))}
            </TransitionPanel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Camps;

const CampButton = ({
  index,
  camp,
  active,
  onClick,
}: {
  index: number;
  camp: any;
  active: number;
  onClick: () => void;
}) => {
  return (
    <Button
      variant={active === index ? "default" : "secondary"}
      onClick={onClick}
      className={cn(
        "relative h-12 w-full rounded-sm font-semibold tracking-wide shadow-md",
        active === index ? "font-bold" : "text-muted-foreground",
      )}
      aria-label={camp.shortTitle}
    >
      <FourDots
        className={
          active === index ? "bg-primary-foreground" : "bg-muted-foreground/20"
        }
      />
      <div className="flex items-center justify-center gap-2">
        <TentIcon className="h-6 w-6" />
        <span>{camp.shortTitle}</span>
      </div>
    </Button>
  );
};

const CampCard = (camp: any) => {
  return (
    <Card className="h-full border-none bg-transparent shadow-none">
      <CardHeader className="relative">
        <div className="absolute right-2 top-2 flex items-center rounded-sm bg-muted px-2 py-1 text-xs font-bold tracking-wide text-primary">
          <TentIcon className="mr-1 h-3 w-3" />
          <span>{camp.shortTitle}</span>
        </div>
        <h3 className="font-bold sm:text-xl md:text-2xl">{camp.title}</h3>
        <div className="flex w-fit items-center justify-center rounded-sm border px-2 py-1 text-xs font-bold tracking-wide text-primary">
          <ClockIcon className="mr-1.5 h-3 w-3" />
          <span>{camp.duration}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm dark:text-muted-foreground sm:text-base">
          {camp.desc}
        </p>
        <h4 className="mt-4 font-semibold">Activities</h4>
        <ul className="mt-2 list-inside list-decimal dark:text-muted-foreground">
          {camp.activities.map((activity: any, index: number) => (
            <li key={index} className="text-sm">
              {activity}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
