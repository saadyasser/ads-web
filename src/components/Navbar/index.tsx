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
        <div className="flex">
          <Logo />
          {/* <Button variant="secondary">1.0 v</Button> */}
        </div>
        <NavLinks />
        <div className="flex items-center gap-2 ">
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
            variant="custom"
            className="!flex xl:!hidden items-center justify-center !rounded-full !py-2 !px-4 !shadow-none border-none "
          >
            <BurgerMenu
              size="24"
              className="leading-4 text-primary fill-primary dark:text-white dark:fill-white"
            />
          </Button>

          <Button
            variant="custom"
            onClick={handleThemeChange}
            className="!flex items-center justify-center !rounded-full !py-2 !px-4 !shadow-none border-none "
          >
            {theme === "dark" ? (
              <Moon
                size="24"
                className="leading-4 text-primary fill-primary dark:text-white dark:fill-white"
              />
            ) : (
              <Sun
                size="24"
                className="leading-4 text-primary fill-primary dark:text-white dark:fill-white"
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
