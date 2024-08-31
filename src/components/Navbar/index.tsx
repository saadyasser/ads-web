"use client";
import {
  Button,
  Container,
  Logo,
  NavLink,
  SlideOver,
  ThemeSwitcher,
} from "../";
import { useTheme } from "next-themes";
import { BurgerMenu } from "@/lib/@iconsax";
import { useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const { theme } = useTheme();
  const { push } = useRouter();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-30 w-full py-4 border-b-[1px] border-black-light dark:border-black-darker bg-white text-black dark:bg-black-darker dark:text-white ">
      <Container className="flex items-center justify-between gap-6 max-md:px-4">
        <Logo width={196} height={47} withBadge />
        <NavLinks className="items-center justify-between hidden gap-2 xl:gap-6 xl:flex" />
        <div className="flex items-center gap-3 lg:gap-4">
          <Button
            variant="custom"
            onClick={() => push("/#contact_us")}
            className={clsx(
              "!hidden xl:!flex !text-sm 2xl:!text-base",
              theme === "dark"
                ? "bg-black text-white !border-white active:!shadow-black-active"
                : "bg-background-light active:shadow-background-light hover:bg-black-light border-black-light"
            )}
          >
            Contact Us
          </Button>

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

          <ThemeSwitcher />
        </div>
        <SlideOver
          footer={
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => push("/#contact_us")}
            >
              Contact Us
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
  { title: "Mobile Templates", path: "/mobile-templates" },
  { title: "Ready Flows", path: "/ready-flows" },
  { title: "Design systems", path: "/design-systems" },
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
