import clsx from "clsx";
import React from "react";

export const Skeleton = ({
  className,
  width,
  height,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => {
  const classes = clsx(
    "w-full h-4 bg-gray-300 rounded-lg animate-pulse",
    className,
    height || (width && `w-[${width}px] h-[${height}px]`)
  );
  return <div className={classes}></div>;
};

export default Skeleton;
