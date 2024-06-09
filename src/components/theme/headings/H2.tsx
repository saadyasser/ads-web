import { childrenType } from "@/types";
import clsx from "clsx";
import React from "react";

export const H2 = ({
  children,
  className,
}: {
  children: childrenType;
  className?: string;
}) => {
  const classes = clsx(
    "text-sm md:text-2xl font-bold lg:text-4xl font-georgia leading-tight lg:leading-[54px]",
    className
  );
  return <h2 className={classes}>{children}</h2>;
};

export default H2;
