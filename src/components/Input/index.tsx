import { forwardRef } from "react";
import { Description, Field, Label } from "@headlessui/react";
import { Input as HeadlessInput } from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      description,
      containerClassName,
      inputClassName,
      error,
      errorMessage,
      ...props
    },
    ref
  ) => {
    const containerClasses = clsx("w-full mt-3", containerClassName);
    const inputClasses = clsx(
      "mt-2 block w-full rounded-lg border-[1px] border-[#303030] dark:border-black p-4 px-3 dark:text-white placeholder:text-[#9F9CB4] placeholder:dark:text-[#595959] font-medium",
      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary",
      inputClassName
    );

    return (
      <div className={containerClasses}>
        <Field>
          {label && (
            <Label className="text-black dark:text-white text-sm/6">
              {label}
              {"  "}
              {props?.required && (
                <span className="text-primary dark:text-danger">*</span>
              )}
            </Label>
          )}
          {description && (
            <Description className="text-sm/6 text-white/50">
              {description}
            </Description>
          )}
          <HeadlessInput ref={ref} {...props} className={inputClasses} />
          <p className="mt-2 text-danger text-sm h-[18px]">
            {error && errorMessage ? errorMessage : ""}
          </p>
        </Field>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
