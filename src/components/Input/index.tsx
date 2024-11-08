import * as React from "react";
import { cn } from "@/utils";
import { Label } from "../ui/label";
import { EyeClosedIcon, EyeOpenIcon } from "@/lib/@react-icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  success?: boolean;
  error?: boolean;
  withErrorPlace?: boolean;
  inputClassName?: string;
  containerClassname?: string;
  floatLabel?: boolean;
  errorMessage?: string; // To show validation error messages
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label = "",
      type,
      success,
      error,
      containerClassname,
      id,
      errorMessage,
      floatLabel,
      ...props // Use spread to accept all props like onChange, value, name, etc.
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const inputClassName = cn(
      "block w-full rounded-xl border-[1px] bg-transparent border-primary-light-active px-4 py-3 text-accent-dark placeholder:text-accent-dark hover:border-accent-gray focus:border-accent-dark outline-none md:py-4 2xl:py-[18px] leading-[18px] pr-10 transition-all focus:outline-none focus:ring-0",
      className,
      floatLabel && `appearance-none peer mt-5`,
      { "border-success": success, "border-danger": error }
    );
    const labelClassName = cn(
      "text-accent-dark leading-none text-sm font-semibold duration-300",
      floatLabel
        ? `absolute transform -translate-y-10 top-3 lg:top-4 
      -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
       peer-focus:-translate-y-10 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto left-3 peer-focus:left-3
      `
        : "block mb-2 lg:mb-1 2xl:mb-2 "
    );
    const inputId = id || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

    return (
      <div
        className={cn(
          "w-full transition",
          floatLabel && "z-0 ",
          containerClassname
        )}
      >
        <div className={cn("relative w-full", containerClassname)}>
          <input
            id={inputId}
            type={showPassword ? "text" : type}
            className={inputClassName}
            ref={ref}
            {...props}
            placeholder={floatLabel ? " " : props.placeholder}
          />
          {label && (
            <Label htmlFor={inputId} className={labelClassName}>
              {label}
            </Label>
          )}
          {type === "password" && (
            <button
              type="button"
              tabIndex={-1}
              onClick={togglePasswordVisibility}
              className="absolute flex items-center top-4 focus:outline-none right-3 h-fit"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeClosedIcon className="w-5 h-5 text-[#292D32]" />
              ) : (
                <EyeOpenIcon className="w-5 h-5 text-[#292D32]" />
              )}
            </button>
          )}
        </div>
        {errorMessage && (
          <p className="h-4 pl-2 mt-1 text-xs font-medium text-danger">
            {errorMessage && errorMessage}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
