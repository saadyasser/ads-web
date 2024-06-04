import { childrenType } from "@/types";

export type cardPropsType = {
  children: childrenType;
  className?: string;
  hoverEffect?: boolean;
  navigateTo?: string;
  handleClick?: Function;
};
