"use client";

import { useState, useEffect } from "react";
import { CaptionsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface CaptionButtonProps {
  caption: string;
  isCaptionOpen: boolean;
  setIsCaptionOpen: (open: boolean) => void;
}

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isDesktop;
};

const CaptionButton: React.FC<CaptionButtonProps> = ({
  caption,
  isCaptionOpen,
  setIsCaptionOpen,
}) => {
  const isDesktop = useIsDesktop();

  return (
    <div className="absolute bottom-2 right-2 z-[160] md:bottom-4 md:right-4">
      {isDesktop && (
        <div className="mx-auto mb-2 w-8 rounded-xl border-2 border-b-4 bg-background px-2 py-1 text-center text-xs">
          i
        </div>
      )}

      {isDesktop ? (
        <Popover open={isCaptionOpen} onOpenChange={setIsCaptionOpen}>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              className="size-10 border shadow-md sm:size-12"
              aria-label="Show caption"
            >
              <CaptionsIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="z-[170] max-h-[60vh] w-80 max-w-[calc(100vw-2rem)] p-0"
            side="top"
            align="end"
            sideOffset={8}
          >
            <div className="max-h-[60vh] overflow-y-auto p-4">
              <p className="whitespace-pre-wrap text-sm leading-relaxed">
                {caption}
              </p>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <Drawer open={isCaptionOpen} onOpenChange={setIsCaptionOpen}>
          <DrawerTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              className="size-10 rounded-full border shadow-md"
              aria-label="Show caption"
            >
              <CaptionsIcon className="h-5 w-5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="z-[170]">
            <DrawerHeader className="pb-2">
              <DrawerTitle className="text-left text-base">
                Image Caption
              </DrawerTitle>
            </DrawerHeader>
            <div className="max-h-[50vh] overflow-y-auto px-4 pb-6">
              <div className="text-sm leading-relaxed text-muted-foreground">
                {caption}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default CaptionButton;
