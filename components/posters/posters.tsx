import { SectionHeading, SectionHeadingTag } from "../common/section-heading";
import { ImageIcon } from "lucide-react";
import { FourCornerBoxes, RDiamond } from "../common/decoration";
import PosterList from "./poster-list";

const Posters = () => (
  <section className="mx-auto h-fit max-w-8xl">
    <div className="relative border py-8 pb-12">
      <FourCornerBoxes className="z-30" child={<RDiamond />} />
      <SectionHeadingTag
        className="mb-2 drop-shadow-sm"
        Icon={ImageIcon}
        title="Event Posters"
      />
      <SectionHeading
        title="Moments in Design"
        subtitle="Designs that commemorate, celebrate, and inspire."
        subtitleClassName="dark:text-foreground/80"
      />
      <PosterList />
    </div>
  </section>
);

export default Posters;
