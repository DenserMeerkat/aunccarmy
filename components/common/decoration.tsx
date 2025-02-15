import { cn } from "@/lib/utils";
import { Plus, Diamond } from "lucide-react";

export const CornerBox = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "absolute grid h-6 w-6 place-content-center bg-background p-1 text-border",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const FourCornerBoxes = ({ child }: { child?: React.ReactNode }) => {
  return (
    <>
      <CornerBox className="left-top-corner">{child}</CornerBox>
      <CornerBox className="right-top-corner">{child}</CornerBox>
      <CornerBox className="left-bottom-corner">{child}</CornerBox>
      <CornerBox className="right-bottom-corner">{child}</CornerBox>
    </>
  );
};

export const RDot = ({ className }: { className?: string }) => {
  return <div className={cn("h-1 w-1 rounded-full bg-border", className)} />;
};

export const RPlus = ({
  className,
  size = 18,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => {
  return <Plus className={className} size={size} {...props} />;
};

export const RDiamond = ({
  className,
  size = 16,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => {
  return <Diamond className={className} size={size} {...props} />;
};
