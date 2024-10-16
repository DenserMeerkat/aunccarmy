import React from "react";
import LogoTitle from "./logo-title";
import MainNav from "./nav/main-nav";
import NavSheet from "./nav/nav-sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-[100] w-full border-b backdrop-blur-md dark:bg-background/40">
      <div className="relative z-[100] mx-auto flex max-w-8xl items-center justify-between gap-4 px-4 pb-3 pt-3">
        <LogoTitle />
        <div className="flex items-center gap-4 xl:gap-6">
          <MainNav className="hidden md:block" />
        </div>
        <NavSheet />
      </div>
    </header>
  );
};

export default Header;
