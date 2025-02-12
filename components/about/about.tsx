import SectionHeading from "@/components/common/section-heading";
import { InfoIcon } from "lucide-react";
import Image from "next/image";

export default function AboutNCC() {
  const nccLogo = "/images/logos/NCC_1.png";
  return (
    <section className="mx-auto max-w-7xl py-10">
      <SectionHeading className="mb-2" Icon={InfoIcon} title={"About NCC"} />
      <div className="px-2">
        <Image
          src={nccLogo}
          alt="NCC logo"
          height={120}
          width={120}
          className="mx-auto xs:float-left"
        />
        <p className="text-justify text-foreground/70 [word-spacing:0.16rem] md:text-lg xs:text-start">
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
