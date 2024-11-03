"use client";
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
    "font-bold text-3xl  md:text-4xl font-gilroy",
    className
  );
  return <h1 className={classes}>{children}</h1>;
};

export default H1;
