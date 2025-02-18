import {
  SectionHeading,
  SectionHeadingTag,
} from "@/components/common/section-heading";
import { CrosshairIcon } from "lucide-react";
import Image from "next/image";
import { FourCornerBoxes, RDiamond } from "@/components/common/decoration";

export default function AboutNCC() {
  const nccLogo = "/images/logos/NCC_F_1.png";
  return (
    <section className="relative mx-auto max-w-8xl border-collapse border py-10">
      <FourCornerBoxes child={<RDiamond />} />
      <SectionHeadingTag
        className="mb-2"
        Icon={CrosshairIcon}
        title={"About"}
      />
      <SectionHeading
        title={"What is NCC?"}
        subtitle={
          "A voluntary program for school and college students that provides basic military training"
        }
        className="pb-4 md:pb-6"
      />
      <div className="mx-auto max-w-5xl px-2">
        <Image
          src={nccLogo}
          alt="NCC logo"
          height={105}
          width={140}
          className="mx-auto mb-4"
        />
        <p className="text-center [word-spacing:0.16rem] dark:text-muted-foreground md:text-lg">
          The{" "}
          <span className="font-bold tracking-wider text-foreground">
            National Cadet Corps
          </span>{" "}
          (NCC) is a{" "}
          <span className="italic text-foreground">
            premier youth development program
          </span>{" "}
          in India that fosters{" "}
          <span className="font-medium tracking-wider text-primary">
            discipline
          </span>
          ,{" "}
          <span className="font-medium tracking-wider text-primary">
            leadership
          </span>
          , and{" "}
          <span className="font-medium tracking-wider text-primary">
            service
          </span>
          . Through structured training, cadets develop integrity, selflessness,
          and responsibility while engaging in military training, community
          service, adventure sports, and cultural events. The NCC promotes
          patriotism, unity, and social integration, contributing to
          nation-building. The program also opens doors to numerous career
          opportunities, scholarships.
        </p>
      </div>
    </section>
  );
}
