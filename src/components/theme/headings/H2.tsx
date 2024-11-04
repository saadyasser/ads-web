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
    "text-2xl  md:text-3xl font-bold  font-gilroy ",
    className
  );
  return <h2 className={classes}>{children}</h2>;
};

export default H2;
