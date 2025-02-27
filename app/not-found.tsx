import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="relative mx-auto max-w-8xl px-2">
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
      <section className="grid min-h-[85vh] w-full place-content-center border-x px-4">
        <div className="flex rounded-sm border">
          <div className="bg-mutedfont-medium border-r px-3 py-2">404</div>
          <div className="px-3 py-2">Page Not Found</div>
        </div>
      </section>
    </div>
  );
}
