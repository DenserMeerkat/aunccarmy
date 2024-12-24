import SectionHeading from "@/components/common/section-heading";
import { SparkleIcon } from "lucide-react";
import AnoList from "./ano-list";

export default function Officers() {
  return (
    <section className="mx-auto max-w-7xl py-10">
      <SectionHeading
        className="mb-2"
        Icon={SparkleIcon}
        title={"Guiding Lights of our Wing"}
      />
      <AnoList />
    </section>
  );
}
