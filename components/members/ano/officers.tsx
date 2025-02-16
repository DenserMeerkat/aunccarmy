import {
  SectionHeading,
  SectionHeadingTag,
} from "@/components/common/section-heading";
import { StarIcon } from "lucide-react";
import AnoList from "./ano-list";

export default function Officers() {
  return (
    <section className="mx-auto max-w-8xl px-2">
      <div className="border-x py-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeadingTag className="mb-2" Icon={StarIcon} title={"ANOs"} />
          <SectionHeading
            title={"Guiding Lights of our Wing"}
            titleClassName="text-2xl md:text-4xl"
            subtitle="Inspiring, Mentoring, and Shaping Future Leaders"
          />
          <AnoList />
        </div>
      </div>
    </section>
  );
}
