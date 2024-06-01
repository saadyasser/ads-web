"use client";
import React, { useEffect, useState } from "react";
import { Button, Container, Logo, NavLink, ThemeSwitcher } from "../";
import { useTheme } from "next-themes";
import { HambergerMenu } from "@/lib/@iconsax";

export const Navbar = () => {
  const [logoPath, setLogoPath] = useState("/next.svg");
  const { theme } = useTheme();
  useEffect(() => {
    setLogoPath(theme === "dark" ? "/ads_logo_dark.svg" : "/ads_logo.svg");
  }, [theme]);
  return (
    <nav className="fixed top-0 z-50 w-full py-4 border-b-[1px] border-black-light dark:border-black-darker bg-white text-black dark:bg-black-darker dark:text-white ">
      <Container className="flex items-center justify-between gap-6 max-xl:px-8 max-xl:px-4">
        <div className="flex">
          <Logo src={logoPath} />
          {/* <Button variant="secondary">1.0 v</Button> */}
        </div>
        <NavLinks />
        <div className="flex items-center gap-2 ">
          {theme === "dark" ? (
            <Button
              variant="custom"
              className="!hidden xl:!flex bg-black text-white !border-black"
            >
              Register / Login
            </Button>
          ) : (
            <Button variant="secondary" className="!hidden xl:!flex">
              Register / Login
            </Button>
          )}
          <Button
            variant="custom"
            className="!flex xl:!hidden items-center justify-center !rounded-full !p-2 border-none"
          >
            <HambergerMenu
              size="24"
              className="leading-4 text-primary fill-primary dark:text-white dark:fill-white"
            />
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

const NavLinks = () => {
  return (
    <div className="items-center justify-between hidden gap-2 xl:gap-6 max-xl:!text-sm xl:flex font-medium">
      <NavLink href="/" exact>
        Home
      </NavLink>
      <NavLink href="/ui-components">Components</NavLink>
      <NavLink href="/templates">Web & Mobile Templates</NavLink>
      <NavLink href="/ready-flows">Ready Flows</NavLink>
      {/* <NavLink href="/color-themes">Color-Themes</NavLink> */}
      <NavLink href="/design-system">Design-system</NavLink>
    </div>
  );
};
