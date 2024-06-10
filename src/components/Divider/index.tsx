import clsx from "clsx";
import { DividerPropsType } from "./Divider.types";

export const Divider = ({ className }: DividerPropsType) => {
  const classes = clsx("border-b-[2px] container mx-auto my-2", className);
  return <div className={classes} />;
};

export default Divider;
