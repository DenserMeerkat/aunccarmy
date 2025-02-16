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
        "absolute grid h-6 w-6 place-content-center rounded-full p-1 text-border",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const FourCornerBoxes = ({
  child,
  className,
}: {
  child?: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <CornerBox className={cn("left-top-corner", className)}>
        {child}
      </CornerBox>
      <CornerBox className={cn("right-top-corner", className)}>
        {child}
      </CornerBox>
      <CornerBox className={cn("left-bottom-corner", className)}>
        {child}
      </CornerBox>
      <CornerBox className={cn("right-bottom-corner", className)}>
        {child}
      </CornerBox>
    </>
  );
};

export const TopCornerBoxes = ({
  child,
  className,
}: {
  child?: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <CornerBox className={cn("left-top-corner", className)}>
        {child}
      </CornerBox>
      <CornerBox className={cn("right-top-corner", className)}>
        {child}
      </CornerBox>
    </>
  );
};

export const BottomCornerBoxes = ({
  child,
  className,
}: {
  child?: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <CornerBox className={cn("left-bottom-corner", className)}>
        {child}
      </CornerBox>
      <CornerBox className={cn("right-bottom-corner", className)}>
        {child}
      </CornerBox>
    </>
  );
};

export const RDot = ({ className }: { className?: string }) => {
  return (
    <div className={cn("bg-subtleAccent h-1 w-1 rounded-full", className)} />
  );
};

export const RPlus = ({
  className,
  size = 18,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) => {
  return (
    <Plus
      className={cn("text-subtleAccent", className)}
      size={size}
      {...props}
    />
  );
};

export const RDiamond = ({
  className,
  size = 14,
  isFilled = true,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number; isFilled?: boolean }) => {
  return (
    <Diamond
      className={cn("text-subtleAccent", className)}
      size={size}
      fill={isFilled ? `hsl(var(--background))` : props.fill}
      {...props}
    />
  );
};
