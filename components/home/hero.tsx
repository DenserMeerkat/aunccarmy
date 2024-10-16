import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import SectionHeading from "../common/section-heading";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { heroLogos } from "@/resources/hero";

const Hero = () => {
  return (
    <section className="relative h-fit overflow-clip bg-muted/40">
      <div className="relative mx-auto grid h-fit max-w-8xl grid-cols-12 px-4">
        <HeroContent />
        <HeroImage />
      </div>
      <HeroFooter />
    </section>
  );
};

const HeroContent = () => {
  const nccFlag = "/images/logos/NCC_F_1.png";

  return (
    <div className="col-span-12 flex flex-col items-center pt-12 lg:col-span-6 lg:items-start 2xl:col-span-6">
      <SectionHeading
        className="mb-2"
        CustomIcon={
          <div className="flex items-center">
            <Image
              width={20}
              height={15}
              src={nccFlag}
              blurDataURL={nccFlag.replace("images", "min_images")}
              alt="NCC Flag"
            />
          </div>
        }
        title={"National Cadet Corps"}
      />
      <div className="mt-3">
        <h1 className="max-w-[360px] text-center text-[1.70em] font-bold leading-tight text-gray-900 dark:text-slate-200 sm:text-[2em] md:max-w-[420px] md:text-[2.5em] lg:max-w-[580px] lg:text-start lg:text-[2.75em] xl:max-w-[620px] xl:text-[3.6em] 2xl:text-[3.75em]">
          Empowering{" "}
          <span className="font-extrabold text-rose-700 dark:text-rose-500">
            youth
          </span>
          , shaping new{" "}
          <span className="font-extrabold text-blue-700 dark:text-blue-500">
            leaders
          </span>
          , securing the{" "}
          <span className="font-extrabold text-sky-700 dark:text-sky-500">
            future
          </span>
          .
        </h1>
      </div>
      <br />
      <p className="max-w-md px-1 pr-2 text-center text-sm font-medium text-foreground/60 dark:font-normal md:max-w-xl lg:text-start lg:text-base">
        Prepare yourself for a lifetime of leadership and excellence. Unlock
        opportunities, embrace challenges, and create lasting memories. Join us
        on a journey of courage, character, and service.
      </p>
      <br />
      <div className="flex w-full max-w-sm flex-col gap-3 px-4 lg:flex-row lg:gap-4 lg:px-0">
        <Button
          size={"xl"}
          className="w-full border-2 border-foreground/10 dark:text-foreground"
        >
          Start Your Journey
        </Button>
        <Link
          href="/about"
          className={cn(
            buttonVariants({ variant: "secondary", size: "xl" }),
            "w-full border-2 border-foreground/10 ",
          )}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const HeroImage = () => {
  const nccShoulder = "/images/wallpapers/ncc_shoulder.png";
  return (
    <div className="col-span-0 hidden sm:col-span-5 lg:col-span-5 lg:block 2xl:col-span-6">
      <div className="relative overflow-clip rounded-bl-[2rem] border-b-4 border-l-4 border-r-2 border-muted drop-shadow-md md:h-[500px] md:w-[700px] xl:h-[530px] xl:w-[760px] 2xl:h-[560px] 2xl:w-[780px]">
        <Image
          src={nccShoulder}
          blurDataURL={nccShoulder.replace("images", "min_images")}
          placeholder="blur"
          layout="fill"
          alt="NCC shoulder badge on uniform with Anna University Red building in the background"
        />
      </div>
    </div>
  );
};

const HeroFooter = () => (
  <>
    <div className="mx-auto flex select-text flex-wrap justify-center gap-12 gap-y-4 px-8 pb-10 pt-20 md:gap-12 md:px-0 lg:gap-24">
      {heroLogos.map((image: any, index: number) => (
        <div
          key={index}
          className={`flex h-auto w-[20%] min-w-20 items-center justify-center drop-shadow-sm sm:w-fit p-${image.padding}`}
        >
          <Image
            height={image.height}
            width={image.width}
            blurDataURL={image.src.replace("images", "min_images")}
            placeholder="blur"
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
    <div className="mx-auto max-w-2xl px-4 pb-12 text-center text-sm font-medium text-foreground/60 dark:font-normal sm:text-base">
      <p>
        Creating organized, trained, and motivated youth, equipped to provide
        leadership in every sphere of life, and unwaveringly committed to
        serving our nation.
      </p>
    </div>
  </>
);

export default Hero;
