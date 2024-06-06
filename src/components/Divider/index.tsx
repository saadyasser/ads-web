import clsx from "clsx";
import { DividerPropsType } from "./Divider.types";

export const Divider = ({ color, className }: DividerPropsType) => {
  const classes = clsx(
    "border-[1px] container mx-auto",
    className,
    color ? `border-${color}` : "border-[#E0E0E0]"
  );
  return <div className={classes} />;
};

export default Divider;
