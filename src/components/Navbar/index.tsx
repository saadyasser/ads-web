"use client";
import React, { useEffect, useState } from "react";
import { Container, Logo, NavLink, ThemeSwitcher } from "../";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const [logoPath, setLogoPath] = useState("/next.svg");
  const { theme } = useTheme();
  useEffect(() => {
    setLogoPath(theme === "dark" ? "/next-dark.svg" : "/next.svg");
  }, [theme]);
  return (
    <nav className="fixed top-0 z-50 w-full py-4 border-b-[1px] border-black-light dark:border-black-dark bg-white text-black dark:bg-black dark:text-white">
      <Container className="flex items-center justify-between gap-6">
        <Logo src={logoPath} />
        <NavLinks />
        <div className="flex items-center gap-2 ">
          <button>Login/ Register</button>
          <button>
            <ThemeSwitcher />
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

const NavLinks = () => {
  return (
    <div className="items-center justify-between hidden gap-2 lg:gap-4 max-lg:!text-sm md:flex font-medium">
      <NavLink href="/" exact>
        Home
      </NavLink>
      <NavLink href="/components">Components</NavLink>
      <NavLink href="/templates">Web & Mobile Templates</NavLink>
      <NavLink href="/ready-flows">Ready Flows</NavLink>
      <NavLink href="/color-themes">Color-Themes</NavLink>
    </div>
  );
};
