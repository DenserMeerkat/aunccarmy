import {
  SectionHeading,
  SectionHeadingTag,
} from "@/components/common/section-heading";
import { BadgeAlertIcon } from "lucide-react";
import ReportCarousel from "./latest-reports";
import { RDiamond, TopCornerBoxes } from "../common/decoration";
import PosterCarousel from "./latest-posters";

export default function Latest() {
  return (
    <section className="mx-auto max-w-8xl px-2">
      <div className="relative border-x py-8">
        <TopCornerBoxes child={<RDiamond />} />
        <div className="mx-auto max-w-7xl">
          <SectionHeadingTag
            className="mb-2"
            Icon={BadgeAlertIcon}
            title={"Latest"}
          />
          <SectionHeading
            title={"Discover Our Recent Works"}
            titleClassName="text-2xl md:text-4xl"
            subtitle="Browse our recently added content."
          />
        </div>
        <div className="overflow-clip">
          <ReportCarousel />
          <PosterCarousel />
        </div>
      </div>
    </section>
  );
}
