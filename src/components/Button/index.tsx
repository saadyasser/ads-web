import { forwardRef } from "react";
import clsx from "clsx";

import { ButtonProps, RefType } from "./Button.types";

import { getVariant } from "@/utils";

export const Button = forwardRef<RefType, ButtonProps>((props, ref) => {
  const {
    variant = "primary",
    type = "button",
    className,
    children,
    icon,
    iconPosition = "after",
    ...rest
  } = props;

  const mergedClasses = clsx("btn", getVariant(variant), className);
  return (
    <button ref={ref} className={mergedClasses} {...rest}>
      {icon && iconPosition === "before" && (
        <span className="flex items-center">{icon}</span>
      )}
      <span className="w-fit">{children}</span>
      {icon && iconPosition === "after" && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
