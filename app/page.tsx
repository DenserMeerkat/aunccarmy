import HomeCarousel from "@/components/home/carousel";
import Hero from "@/components/home/hero";
import Latest from "@/components/home/latest";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "fixed -z-10 stroke-foreground/10 [mask-image:linear-gradient(to_bottom,white,transparent,transparent,white)]",
        )}
      />
      <Hero />
      <HomeCarousel />
      <Latest />
    </main>
  );
}
