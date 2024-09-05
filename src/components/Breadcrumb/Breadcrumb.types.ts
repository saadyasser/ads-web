import { ReactNode } from "react";

export type BreadCrumbProps = {
  homeElement: ReactNode;
  separator?: ReactNode;
  containerClassName?: string;
  listClassName?: string;
  activeClassName?: string;
  capitalizeLinks?: boolean;
};
