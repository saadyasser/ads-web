import clsx from "clsx";
import { ContainerType } from "./Container.types";

export const Container = ({ children, className }: ContainerType) => {
  const containerClasses = clsx("container mx-auto max-md:px-4", className);
  return <div className={containerClasses}>{children}</div>;
};

export default Container;
