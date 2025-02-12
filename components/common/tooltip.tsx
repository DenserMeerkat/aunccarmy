import { ReactNode } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface RTooltipProps {
  className?: string;
  content: ReactNode;
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left" | undefined;
}

const RTooltip = ({ className, content, children, side }: RTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className={className} side={side}>
        {content}
      </TooltipContent>
    </Tooltip>
  );
};

export default RTooltip;
