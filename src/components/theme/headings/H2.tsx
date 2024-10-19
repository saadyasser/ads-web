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
    "text-2xl lg:text-4xl md:text-3xl font-bold lg:text-4xl font-gilroy ",
    className
  );
  return <h2 className={classes}>{children}</h2>;
};

export default H2;