"use client";
import { Button, Container, Logo, NavLink, SlideOver } from "../";
import { useTheme } from "next-themes";
import { BurgerMenu, Moon, Sun } from "@/lib/@iconsax";
import { useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="fixed top-0 z-30 w-full py-4 border-b-[1px] border-black-light dark:border-black-darker bg-white text-black dark:bg-black-darker dark:text-white ">
      <Container className="flex items-center justify-between gap-6 max-xl:px-8 max-lg:px-4">
        <Logo width={196} height={47} withBadge />
        <NavLinks className="items-center justify-between hidden gap-2 xl:gap-6 xl:flex" />
        <div className="flex items-center gap-3 lg:gap-4">
          {theme === "dark" ? (
            <Button
              variant="custom"
              className="!hidden xl:!flex bg-black !text-sm 2xl:!text-base text-white !border-white active:!shadow-black-active"
            >
              Register / Login
            </Button>
          ) : (
            <Button
              variant="custom"
              className="bg-background-light !text-sm 2xl:!text-base active:shadow-background-light hover:bg-black-light border-black-light !hidden xl:!flex"
            >
              Register / Login
            </Button>
          )}
          <Button
            variant="secondary"
            onClick={() => setBurgerMenuOpen((prev) => !prev)}
            className="!flex xl:!hidden items-center justify-center !rounded-full !p-2 active:!shadow-none border-none !h-fit dark:bg-black-active "
          >
            <BurgerMenu
              size="20"
              className="h-fit text-primary fill-primary dark:text-white dark:fill-white"
            />
          </Button>

          <Button
            variant="secondary"
            onClick={handleThemeChange}
            className="!flex items-center justify-center !rounded-full !p-2 !h-fit !shadow-none border-none dark:bg-black-active"
          >
            {theme === "dark" ? (
              <Moon
                size="20"
                className="h-fit text-primary fill-primary dark:text-white dark:fill-white"
              />
            ) : (
              <Sun
                size="20"
                className="h-fit text-primary fill-primary dark:text-white dark:fill-white"
              />
            )}
          </Button>
        </div>
        <SlideOver
          footer={
            <Button variant="secondary" className="w-full">
              Register / Login
            </Button>
          }
          open={burgerMenuOpen}
          setOpen={setBurgerMenuOpen}
        >
          <div className="p-3 rounded-lg bg-background-light dark:bg-black">
            <NavLinks
              className="flex flex-col w-full gap-3"
              linkClassName="!w-full items-center justify-center !text-base !font-medium"
              onLinkClick={() => setBurgerMenuOpen(false)}
            />
          </div>
        </SlideOver>
      </Container>
    </nav>
  );
};

export default Navbar;

export const navLinks = [
  { title: "Home", path: "/", exact: true },
  { title: "Components", path: "/ui-components" },
  { title: "Web & Mobile Templates", path: "/web-mobile" },
  { title: "Ready Flows", path: "/ready-flows" },
  { title: "Design system", path: "/design-system" },
  { title: "Color-Themes", path: "/color-themes" },
];
const NavLinks = ({
  className,
  linkClassName,
  onLinkClick,
}: {
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
}) => {
  const classes = clsx("max-xl:!text-sm  font-medium", className);
  const linkClasses = clsx("w-max", linkClassName);
  return (
    <div className={classes}>
      {navLinks.map((item) => (
        <NavLink
          href={item.path}
          exact={item?.exact}
          key={item.path}
          className={linkClasses}
          onClick={onLinkClick}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};
