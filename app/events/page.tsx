import StandoutEvents from "@/components/events/standout";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Events() {
  return (
    <main className="mx-auto max-w-8xl px-2">
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
      <StandoutEvents />
    </main>
  );
}
