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
    isActive &&
    "!border-primary !text-primary dark:!text-white dark:!border-white hover:!text-primary-hover !font-bold";

  const linkClasses = clsx(
    "border-b-2 border-transparent w-max font-light hover:!text-primary-hover !pb-1 active:text-primary-active text-black dark:text-black-light hover:dark:text-white transition-all 2xl:p-2 p-0",
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
