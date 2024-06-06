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
    "text-xl font-bold font-georgia leading-tight lg:leading-[24px]",
    className
  );
  return <h3 className={classes || "text-xl"}>{children}</h3>;
};

export default H3;
