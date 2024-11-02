import * as React from "react";
import { cn } from "@/utils";
import { Label } from "../ui/label";
import { EyeClosedIcon, EyeOpenIcon } from "@/lib/@react-icons";

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
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const inputClassName = cn(
      "block w-full rounded-xl border-[1px] border-primary-light-active px-4 py-3 text-accent-dark placeholder:text-accent-dark hover:border-accent-gray focus:border-accent-dark outline-none md:py-4 2xl:py-[18px] leading-[18px] pr-10 transition-all",
      className,
      { "border-success": success, "border-danger": error }
    );

    const inputId = id || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

    return (
      <div
        className={cn(
          "relative w-full pb-4 md:pb-4  lg:pb-4 2xl:pb-4 ",
          containerClassname
        )}
      >
        <Label
          htmlFor={inputId}
          className="block mb-2 text-sm font-semibold leading-none lg:mb-1 2xl:mb-2 text-accent-dark"
        >
          {label}
        </Label>
        <input
          id={inputId}
          type={showPassword ? "text" : type}
          className={inputClassName}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 flex items-center focus:outline-none right-3"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeClosedIcon className="w-5 h-5 text-[#292D32]" />
            ) : (
              <EyeOpenIcon className="w-5 h-5 text-[#292D32]" />
            )}
          </button>
        )}
        {errorMessage && (
          <p className="absolute bottom-0 left-0 pl-2 mt-1 text-xs text-danger">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
