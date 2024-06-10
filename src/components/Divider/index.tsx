import clsx from "clsx";
import { DividerPropsType } from "./Divider.types";
import Container from "../Container";

export const Divider = ({ className }: DividerPropsType) => {
  const classes = clsx(
    "border-b-[1px] container mx-auto my-2 border-[#E0E0E0] dark:border-black-darker",
    className
  );
  return (
    <Container>
      <div className={classes} />
    </Container>
  );
};

export default Divider;
