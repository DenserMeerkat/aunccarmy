import React from "react";
import ThemeButtons from "./theme-switcher";
import GitHubLink from "./github-link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-8xl items-end justify-between px-4 pb-6 pt-4">
        <div className="flex flex-col gap-2 dark:opacity-60 md:gap-3">
          <span className="text-[0.65rem] font-medium tracking-wider dark:font-normal sm:text-xs">
            © 2023&nbsp;&nbsp;NCC Army Wing, AU
          </span>
          <GitHubLink />
        </div>
        <ThemeButtons />
      </div>
    </footer>
  );
};

export default Footer;
