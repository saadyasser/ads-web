"use client";
import { Button, Container, Logo, NavLink } from "../";
import { useTheme } from "next-themes";
import { BurgerMenu, Moon, Sun } from "@/lib/@iconsax";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="fixed top-0 z-50 w-full py-4 border-b-[1px] border-black-light dark:border-black-darker bg-white text-black dark:bg-black-darker dark:text-white ">
      <Container className="flex items-center justify-between gap-6 max-xl:px-8 max-lg:px-4">
        <div className="flex items-center">
          <Logo width={196} height={47} />
          <span className="flex items-center justify-center px-3 py-1 mx-2 text-xs font-medium rounded-full lg:px-4 bg-primary-light-hover text-primary h-max dark:bg-[#0F0F0E] dark:text-white">
            1.0 v
          </span>
        </div>
        <NavLinks />
        <div className="flex items-center gap-3 lg:gap-4">
          {theme === "dark" ? (
            <Button
              variant="custom"
              className="!hidden xl:!flex bg-black text-white !border-white active:!shadow-black-active"
            >
              Register / Login
            </Button>
          ) : (
            <Button
              variant="custom"
              className="bg-background-light active:shadow-background-light hover:bg-black-light border-black-light !hidden xl:!flex"
            >
              Register / Login
            </Button>
          )}
          <Button
            variant="secondary"
            className="!flex xl:!hidden items-center justify-center !rounded-full !p-2 !shadow-none border-none !h-fit dark:bg-black-active "
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
      </Container>
    </nav>
  );
};

export default Navbar;

const NavLinks = () => {
  return (
    <div className="items-center justify-between hidden gap-2 xl:gap-6 max-xl:!text-sm xl:flex font-medium">
      <NavLink href="/" exact className="w-max">
        Home
      </NavLink>
      <NavLink href="/ui-components" className="w-max">
        Components
      </NavLink>
      <NavLink href="/templates" className="w-max">
        Web & Mobile Templates
      </NavLink>
      <NavLink href="/ready-flows" className="w-max">
        Ready Flows
      </NavLink>
      {/* <NavLink href="/color-themes">Color-Themes</NavLink> */}
      <NavLink href="/design-system" className="w-max">
        Design-system
      </NavLink>
    </div>
  );
};
