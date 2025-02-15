import { Suspense } from "react";
import { SectionHeadingTag } from "@/components/common/section-heading";
import { MedalIcon } from "lucide-react";
import CadetList from "./cadet-list";

export default function Cadets() {
  return (
    <section className="mx-auto max-w-7xl pt-10">
      <SectionHeadingTag
        className="mb-2"
        Icon={MedalIcon}
        title={"Meet our Cadet Leaders"}
      />
      <Suspense>
        <CadetList />
      </Suspense>
    </section>
  );
}
