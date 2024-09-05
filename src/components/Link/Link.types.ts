import { ChildrenProp } from "@/types";
import { LinkProps } from "next/link";
import { RefAttributes } from "react";

export interface LinkPropsType
  extends LinkProps,
    RefAttributes<HTMLAnchorElement>,
    ChildrenProp {
  href: string;
  className?: string;
  noStyle?: boolean;
}
