"use client";
import { usePathname } from "next/navigation";
import { Link } from "../";
import { NavLinkProps } from "./NavLink.types";
import clsx from "clsx";

export const NavLink = ({
  href,
  exact = false,
  children,
  className,
  onClick,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const activeClasses =
    isActive && "!border-secondary dark:!border-white  !font-bold";

  const linkClasses = clsx(
    "border-b-2 border-transparent w-max font-medium text-black hover:text-black hover:font-bold !py-4 hover:border-secondary transition-all duration-300 ",
    className,
    activeClasses
  );

  return (
    <Link
      href={href}
      {...props}
      className={linkClasses}
      onClick={onClick && onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
