import clsx from "clsx";
import { cardPropsType } from "./Card.types";

export const Card = ({ children, className, hoverEffect }: cardPropsType) => {
  const cardClasses = clsx(
    "flex flex-col items-center justify-center px-4 py-6 bg-white border-white rounded-lg dark:bg-black dark:border-black border-b-[6px] transition-all",
    className,
    hoverEffect &&
      "hover:shadow-xl hover:border-b-primary hover:dark:border-b-white"
  );
  return <div className={cardClasses}>{children}</div>;
};

export default Card;
