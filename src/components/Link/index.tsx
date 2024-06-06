import React from "react";
import NextLink from "next/link";
import { LinkPropsType } from "./Link.types";
import clsx from "clsx";

export const Link = ({ children, href, className, noStyle }: LinkPropsType) => {
  const linkClasses = clsx(
    noStyle
      ? "truncate transition-all"
      : "flex items-center gap-2 leading-6 truncate transition-all hover:text-primary-hover dark:hover:text-black-light-hover active:text-primary-active dark:active:text-black-light-active",
    className
  );
  return (
    <NextLink href={href} className={linkClasses}>
      {children}
    </NextLink>
  );
};

export default Link;
