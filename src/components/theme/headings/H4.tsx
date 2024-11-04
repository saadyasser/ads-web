import { childrenType } from "@/types";
import clsx from "clsx";
import React from "react";

export const H4 = ({
  children,
  className,
}: {
  children: childrenType;
  className?: string;
}) => {
  const classes = clsx("text-base md:text-lg font-bold font-gilroy", className);
  return <h4 className={classes}>{children}</h4>;
};

export default H4;
