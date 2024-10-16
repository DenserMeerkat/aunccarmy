import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { githubLinks } from "@/config";

const GitHubLink = () => {
  return (
    <div className="flex items-center text-[0.65rem] font-medium tracking-wide dark:font-normal sm:text-xs">
      <a href={githubLinks.repo} className="opacity-70 hover:opacity-100">
        <GitHubLogoIcon className="md:h-4 md:w-4" />
      </a>
      <span className="mx-2.5 h-4 w-[1px] bg-foreground opacity-40 sm:h-5" />
      <span>Built by</span>
      <a
        href={githubLinks.dev}
        className={
          "ml-1.5 font-bold underline-offset-4 opacity-90 hover:underline dark:font-normal"
        }
      >
        DenserMeerkat
      </a>
    </div>
  );
};

export default GitHubLink;
