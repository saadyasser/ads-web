import { forwardRef } from "react";

import { ButtonProps, RefType } from "./Button.types";
import { button } from "./ButtonStyles";

export const Button = forwardRef<RefType, ButtonProps>((props, ref) => {
  const {
    intent = "primary",
    type = "button",
    className,
    children,
    icon,
    iconPosition = "after",
    ...rest
  } = props;

  return (
    <button ref={ref} className={button({ intent, className })} {...rest}>
      {icon && iconPosition === "before" && (
        <span className="flex items-center">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "after" && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
