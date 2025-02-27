import { Suspense } from "react";
import {
  SectionHeading,
  SectionHeadingTag,
} from "@/components/common/section-heading";
import { MedalIcon } from "lucide-react";
import CadetList from "./cadet-list";
import { RDiamond, TopCornerBoxes } from "@/components/common/decoration";

export default function Cadets() {
  return (
    <section className="mx-auto max-w-8xl px-2">
      <div className="relative border py-8">
        <TopCornerBoxes child={<RDiamond />} />
        <div className="mx-auto max-w-7xl">
          <SectionHeadingTag
            className="mb-2"
            Icon={MedalIcon}
            title={"Cadets"}
          />
          <SectionHeading
            title={"Meet our Cadet Leaders"}
            titleClassName="text-2xl md:text-4xl"
            subtitle={"The Unity and Spirit of our Wing"}
          />
          <Suspense>
            <CadetList />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
