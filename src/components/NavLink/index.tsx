"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLinkProps } from "./NavLink.types";
import clsx from "clsx";

export const NavLink = ({
  href,
  exact = false,
  children,
  className,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const activeClasses = isActive
    ? "border-b-2 border-primary !text-primary dark:!text-white dark:border-white font-bold"
    : "";
  const linkClasses = clsx(
    "w-max hover:text-primary-hover pb-1 active:text-primary-active text-black dark:text-white p-2",
    className,
    activeClasses
  );

  return (
    <Link href={href} {...props} className={linkClasses}>
      {children}
    </Link>
  );
};

export default NavLink;