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
    "text-lg md:text-xl font-bold font-gilroy leading-tight lg:leading-[24px]",
    className
  );
  return <h3 className={classes}>{children}</h3>;
};

export default H3;
