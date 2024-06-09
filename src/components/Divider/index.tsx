import clsx from "clsx";
import { DividerPropsType } from "./Divider.types";

export const Divider = ({ color, className }: DividerPropsType) => {
  const classes = clsx(
    "border-b-[1px] container mx-auto",
    className,
    color ? `border-${color}` : "border-[#E0E0E0] dark:border-black-darker"
  );
  return <div className={classes} />;
};

export default Divider;
