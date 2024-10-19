import React from "react";
import NextLink from "next/link";
import { LinkPropsType } from "./Link.types";
import clsx from "clsx";

export const Link = ({
  children,
  href,
  className,
  noStyle,
  onClick,
}: LinkPropsType) => {
  const linkClasses = clsx(
    noStyle
      ? "truncate transition-all"
      : "flex items-center gap-2 leading-6 truncate transition-all  active:text-primary-active focus-visible:outline-primary-hover",
    className
  );
  return (
    <NextLink href={href} className={linkClasses} onClick={onClick}>
      {children}
    </NextLink>
  );
};

export default Link;
