import React from "react";
import ThemeButtons from "./theme-switcher";
import GitHubLink from "./github-link";
import { TopCornerBoxes, RDiamond } from "@/components/common/decoration";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background/40 backdrop-blur-lg">
      <div className="mx-auto max-w-8xl px-2">
        <div className="relative border-x">
          <TopCornerBoxes child={<RDiamond />} />
          <div className="mx-auto flex w-full max-w-7xl items-end justify-between px-4 pb-6 pt-4">
            <div className="flex flex-col gap-2 dark:opacity-60 md:gap-3">
              <span className="text-[0.65rem] font-medium tracking-wider dark:font-normal sm:text-xs">
                © {year}&nbsp;&nbsp;NCC Army Wing, AU
              </span>
              <GitHubLink />
            </div>
            <ThemeButtons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
