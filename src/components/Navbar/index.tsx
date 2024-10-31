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
import { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { BagIcon, BurgerMenu, FavouriteIcon } from "../svg";
import { cn } from "@/utils";
import { useSCrollY } from "@/hooks";
import { SearchIcon } from "@/components/svg";
// import dynamic from "next/dynamic";

// const SlideOver = dynamic(() => import("../SlideOver"), {
//   loading: () => <Loading />,
// });
// const ThemeSwitcher = dynamic(() => import("../ThemeSwitcher"));
// const NavLink = dynamic(() => import("../NavLink"));
export const Navbar = ({
  className = "",
  searchIconhidden = false,
}: {
  className?: string;
  searchIconhidden?: boolean;
}) => {
  const { theme } = useTheme();
  const { push } = useRouter();
  const pathname = usePathname();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const { isScrollY } = useSCrollY();

  const navClassName = cn(
    "fixed top-0 z-50 w-full  py-4 2xl:py-6",
    className,
    pathname === "/" ? "bg-transparent" : "",
    isScrollY && pathname === "/" ? "bg-white" : "",
    burgerMenuOpen && !isScrollY && "bg-accent-dark"
  );

  const buttonsClassName = cn(
    pathname === "/" && !isScrollY && "!bg-accent-dark-hover",
    pathname === "/" && isScrollY && "bg-primary"
  );
  const iconColor = cn(
    pathname === "/" && !isScrollY && "white",
    pathname === "/" && isScrollY && "#0E2841"
  );
  return (
    <nav
      className={`${navClassName} transition-all duration-500`}
      onScroll={(e) => {
        console.log(e, scrollY);
      }}
    >
      <div className="flex items-center justify-between gap-6 px-4 lg:px-20 md:px-8">
        {pathname === "/" && !isScrollY && (
          <Logo
            withBadge={false}
            width={196}
            height={47}
            src="/images/logos/home_ads_logo.svg"
          />
        )}
        {pathname === "/" && isScrollY && (
          <Logo
            withBadge={false}
            width={196}
            height={47}
            src="/images/logos/home_scrollable_ads_logo.svg"
          />
        )}
        {pathname !== "/" && <Logo withBadge={false} width={196} height={47} />}

        <NavLinks
          className={`items-center justify-between hidden gap-2 xl:gap-6 xl:flex ${
            isScrollY ? "bg-white" : "bg-accent-dark-hover"
          }`}
        />
        <div className="flex items-center gap-3 lg:gap-4">
          {searchIconhidden && (
            <Button
              className={buttonsClassName}
              intent="primaryLight"
              name="Favourite Button"
            >
              <SearchIcon aria-label="Favourite Icon" color={iconColor} />
            </Button>
          )}
          <Button
            className={buttonsClassName}
            intent="primaryLight"
            aria-label="Bag button"
          >
            <BagIcon aria-label="Bag Icon" color={iconColor} />
          </Button>

          <Button
            intent="primaryLight"
            aria-label="burger menu button"
            name="Favourite Button"
            className={`hidden md:flex ${buttonsClassName}`}
          >
            <FavouriteIcon color={iconColor} aria-label="Favourite Icon" />
          </Button>

          <Button
            intent="primaryLight"
            onClick={() => push("/login")}
            className={clsx(
              "!hidden md:!flex !text-sm md:!text-base bg-secondary text-accent-dark"
            )}
          >
            Sign In / Register
          </Button>
          <Button
            intent="primaryLight"
            aria-label="burger menu button"
            onClick={() => setBurgerMenuOpen((prev) => !prev)}
            className={`!flex xl:!hidden items-center justify-center   active:!shadow-none border-none !h-fit  ${buttonsClassName}`}
          >
            <BurgerMenu color={iconColor} />
          </Button>
        </div>
        <SlideOver
          footer={
            <Button
              intent="primaryLight"
              onClick={() => push("/login")}
              className={clsx("w-full bg-secondary text-accent-dark")}
            >
              Sign In / Register
            </Button>
          }
          open={burgerMenuOpen}
          setOpen={setBurgerMenuOpen}
        >
          <div
            className={`p-3 rounded-lg ${
              !isScrollY ? "bg-accent-dark-hover" : "bg-white "
            }  `}
          >
            <NavLinks
              className={`flex flex-col w-full gap-3 ${
                !isScrollY ? "bg-accent-dark-hover " : "bg-white"
              }`}
              linkClassName={`!w-full items-center justify-center !text-base !font-extrabold ${
                !isScrollY
                  ? " !text-white hover:!text-secondary"
                  : " !text-accent-dark hover:!text-primary"
              } `}
              onLinkClick={() => setBurgerMenuOpen(false)}
            />
          </div>
        </SlideOver>
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
  const { isScrollY } = useSCrollY();
  const pathname = usePathname();
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
