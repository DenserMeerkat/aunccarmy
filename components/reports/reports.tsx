import { Suspense } from "react";
import {
  SectionHeading,
  SectionHeadingTag,
} from "@/components/common/section-heading";
import { CalendarRangeIcon } from "lucide-react";
import ReportList from "./report-list";
import { RDiamond, TopCornerBoxes } from "@/components/common/decoration";

export default function Reports() {
  return (
    <section className="relative border-x py-8 pb-16">
      <TopCornerBoxes child={<RDiamond />} />
      <div className="mx-auto max-w-7xl">
        <SectionHeadingTag
          className="mb-2"
          Icon={CalendarRangeIcon}
          title={"Event Reports"}
        />
        <SectionHeading
          title={"Our Report Library"}
          subtitle={"Documenting our activities through detailed reports"}
        />
        <Suspense>
          <ReportList />
        </Suspense>
      </div>
    </section>
  );
}
