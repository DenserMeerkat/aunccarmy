import { GalleryCarousel } from "@/components/gallery/gallery-carousel";
import GalleryGrid from "@/components/gallery/gallery-grid";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import "react-photo-album/rows.css";

export default function Gallery() {
  return (
    <div className="min-h-[85lvh]">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "fixed -z-10 stroke-foreground/10 [mask-image:radial-gradient(300px_circle_at_center,transparent,white,transparent)] lg:[mask-image:radial-gradient(600px_circle_at_center,transparent,transparent,white,white,transparent)]",
        )}
      />
      <GalleryCarousel />
      <GalleryGrid />
    </div>
  );
}
