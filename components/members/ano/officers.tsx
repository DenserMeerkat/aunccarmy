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
          <SectionHeadingTag
            className="mb-2"
            Icon={StarIcon}
            title={"Officers"}
          />
          <SectionHeading
            title={"Meet our Dedicated Officers"}
            titleClassName="text-2xl md:text-4xl"
            subtitle="Guiding Lights of our Wing"
          />
          <AnoList />
        </div>
      </div>
    </section>
  );
}
