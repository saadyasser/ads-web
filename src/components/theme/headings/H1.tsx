import { childrenType } from "@/types";
import clsx from "clsx";
import React from "react";

export const H1 = ({
  children,
  className,
}: {
  children: childrenType;
  className?: string;
}) => {
  const classes = clsx(
    "text-[22px] font-bold lg:text-5xl font-georgia leading-tight lg:leading-[54px]",
    className
  );
  return <h1 className={classes}>{children}</h1>;
};

export default H1;
