import { childrenType } from "@/types";
import clsx from "clsx";
import React from "react";

export const H3 = ({
  children,
  className,
}: {
  children: childrenType;
  className?: string;
}) => {
  const classes = clsx(
    "text-2xl lg:text-3xl md:text-xl font-bold font-gilroy",
    className
  );
  return <h3 className={classes}>{children}</h3>;
};

export default H3;
