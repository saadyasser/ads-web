import * as React from "react";
import { cn } from "@/utils";
import { Label } from "../ui/label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  success?: boolean;
  error?: boolean;
  withErrorPlace?: boolean;
  inputClassName?: string;
  containerClassname?: string;
  errorMessage?: string; // To show validation error messages
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      type,
      success,
      error,
      containerClassname,
      id,
      errorMessage,
      ...props // Use spread to accept all props like onChange, value, name, etc.
    },
    ref
  ) => {
    const inputClassName = cn(
      "block w-full rounded-xl border-[1px] border-primary-light-active px-4 py-3 text-accent-dark placeholder:text-accent-dark hover:border-accent-gray focus:border-accent-dark outline-none md:py-4  2xl:py-[18px] leading-[18px]",
      className,
      { "border-success": success, "border-danger": error }
    );

    // Ensure the input has an id, or fallback to a generated one for accessibility
    const inputId = id || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

    console.log(errorMessage, "message");

    return (
      <div
        className={cn(
          "relative w-full pb-4 md:pb-4 md:mb-2 lg:pb-4 2xl:pb-4 2xl:mb-2",
          containerClassname
        )}
      >
        <Label
          htmlFor={inputId}
          className="block text-sm mb-2 lg:mb-1 2xl:mb-2 font-semibold text-accent-dark leading-none"
        >
          {label}
        </Label>
        <input
          id={inputId}
          type={type}
          className={inputClassName}
          ref={ref}
          {...props} // Apply all props here including onChange, value, etc.
        />
        {errorMessage && (
          <p className="absolute bottom-0 left-0 pl-2 text-xs text-danger mt-1">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
