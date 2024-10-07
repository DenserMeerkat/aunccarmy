import React from "react";
import LogoTitle from "./logo-title";
import MainNav from "./nav/main-nav";

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b backdrop-blur-md dark:bg-background/40">
      <div className="mx-auto flex max-w-8xl items-center justify-between gap-4 px-4 pb-3 pt-3">
        <LogoTitle />
        <div className="flex items-center gap-4 xl:gap-6">
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
