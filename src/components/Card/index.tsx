"use client";
import clsx from "clsx";
import { cardPropsType } from "./Card.types";
import { useRouter } from "next/navigation";
import { cn } from "@/utils";

export const Card = ({
  children,
  className,
  hoverEffect,
  navigateTo,
  handleClick,
}: cardPropsType) => {
  const { push } = useRouter();
  const clickHandler = () => {
    navigateTo && push(navigateTo);
    handleClick && handleClick();
  };
  const cardClasses = cn(
    "flex flex-col items-center justify-center p-3 bg-white rounded-lg dark:bg-black border-transparent  transition-all",
    className,
    hoverEffect &&
      "hover:shadow-xl hover:border-b-primary hover:dark:border-b-white ",
    navigateTo && "cursor-pointer"
  );
  return (
    <div className={cardClasses} onClick={clickHandler}>
      {children}
    </div>
  );
};

export default Card;