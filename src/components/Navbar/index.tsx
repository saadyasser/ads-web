"use client";
import {
  Button,
  Container,
  Loading,
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
import { BagIcon, FavouriteIcon } from "../svg";
// import dynamic from "next/dynamic";

// const SlideOver = dynamic(() => import("../SlideOver"), {
//   loading: () => <Loading />,
// });
// const ThemeSwitcher = dynamic(() => import("../ThemeSwitcher"));
// const NavLink = dynamic(() => import("../NavLink"));
export const Navbar = ({ className = "" }: { className?: string }) => {
  const { theme } = useTheme();
  const { push } = useRouter();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 z-50 w-full  py-4 lg:py-6 ${className}`}>
      <div className="flex items-center justify-between gap-6 px-4 lg:px-20 md:px-8">
        <Logo width={196} height={47} />
        <NavLinks className="items-center justify-between hidden gap-2 xl:gap-6 xl:flex" />
        <div className="flex items-center gap-3 lg:gap-4">
          <Button
            intent="primaryLight"
            onClick={() => push("/login")}
            className={clsx("!hidden xl:!flex !text-sm 2xl:!text-base")}
          >
            Sign In / Register
          </Button>

          <Button
            intent="primaryLight"
            aria-label="burger menu button"
            onClick={() => setBurgerMenuOpen((prev) => !prev)}
            className="!flex xl:!hidden items-center justify-center !rounded-full !p-2 active:!shadow-none border-none !h-fit dark:bg-black-active "
          >
            <BurgerMenu
              size="20"
              className="h-fit text-primary fill-primary dark:text-white dark:fill-white"
              aria-label="burger menu icon"
            />
          </Button>
          <Button intent="primaryLight" aria-label="Bag button">
            <BagIcon aria-label="Bag Icon" />
          </Button>
          <Button
            intent="primaryLight"
            aria-label="burger menu button"
            name="Favourite Button"
          >
            <FavouriteIcon aria-label="Favourite Icon" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const navLinks = [
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
