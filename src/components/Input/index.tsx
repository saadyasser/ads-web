import * as React from "react";
import { cn } from "@/utils";
import { Label } from "../ui/label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  success?: boolean;
  error?: boolean;
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
      "block w-full rounded-xl border-[1px] border-[#E7E9ED] placeholder:text-black/70 p-4 text-black/70 focus:border-black-light-active outline-none transition-all align-middle",
      className,
      { "border-success": success, "border-danger": error }
    );

    // Ensure the input has an id, or fallback to a generated one for accessibility
    const inputId = id || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

    console.log(errorMessage, "message");

    return (
      <div className={cn("relative w-full pb-5", containerClassname)}>
        <Label
          htmlFor={inputId}
          className="block mb-2 text-sm font-semibold leading-none text-accent-dark"
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
          <p className="absolute bottom-0 left-0 mt-1 text-xs text-danger">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
