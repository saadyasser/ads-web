import React, { FC } from "react";
import { Category1 } from "../svg";
import { cn } from "@/utils";

interface ImageCardType {
  title: string;
  description: string;
  image?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  children?: React.ReactNode;
  direction?: "row" | "column";
}

export const ImageCard: FC<ImageCardType> = ({
  title,
  description,
  image,
  children,
  className,
  wrapperClassName,
  direction = "row",
}) => {
  const containerClassName = cn(
    "flex items-center justify-between p-4 text-center transition-colors duration-150 ease-in rounded-lg bg-background-light hover:bg-secondary text-accent-dark md:rounded-2xl",
    className
  );
  const wrapperClass = cn(
    ` flex justify-start gap-3 ${
      direction == "column" ? "flex-col items-start" : "items-center"
    }`,
    wrapperClassName
  );
  return (
    <div className={containerClassName}>
      <div className={wrapperClass}>
        {image}
        <div>
          <h6 className="mb-2 text-sm font-bold leading-5 text-left md:text-base text-accent-dark">
            {title}
          </h6>
          <p className="text-xs text-left md:sm text-accent-dark">
            {description}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ImageCard;
