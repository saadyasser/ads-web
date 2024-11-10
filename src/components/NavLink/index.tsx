"use client";
import { usePathname } from "next/navigation";
import { Link } from "../";
import { NavLinkProps } from "./NavLink.types";
import clsx from "clsx";
import { useSCrollY } from "@/hooks";

export const NavLink = ({
  href,
  exact = false,
  children,
  className,
  onClick,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const { isScrollY } = useSCrollY();

  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const activeClasses = isActive && " !font-bold";

  // const classForHomePage =
  //   pathname === "/" && "text-white active:text-secondary hover:text-secondary";
  // const classForHomeScrollable =
  //   pathname === "/" &&
  //   isScrollY &&
  //   "text-white active:text-secondary hover:text-secondary text-accent-dark active:text-primary hover:text-primary";

  const linkClasses = clsx(
    "relative w-max font-medium text-black hover:text-black hover:font-bold !py-4 transition-all duration-300 ",
    className,
    activeClasses,
    pathname === "/" &&
      !isScrollY &&
      `text-white ${isActive && "!text-secondary"} hover:!text-secondary`,
    pathname === "/" &&
      isScrollY &&
      `text-accent-dark ${isActive && "text-primary"} hover:text-primary`
  );

  return (
    <Link
      href={href}
      {...props}
      className={linkClasses}
      onClick={onClick && onClick}
    >
      {children}
      {isActive && (
        <span className="absolute text-lg md:text-xl   left-[50%] bottom-0 ">
          .
        </span>
      )}
    </Link>
  );
};

export default NavLink;
