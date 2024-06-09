import { forwardRef } from "react";
import { Description, Field, Label } from "@headlessui/react";
import { Textarea as HeadlessTextArea } from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import { TextAreaProps } from "./TextArea.types";

export const TextArea = forwardRef<HTMLInputElement, TextAreaProps>(
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
    const containerClasses = clsx("w-full mt-6", containerClassName);
    const inputClasses = clsx(
      "mt-2 block w-full rounded-lg border-[1px] border-[#303030] dark:border-black p-4 px-3 dark:text-white placeholder:text-[#595959] font-medium",
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
                <span className="text-primary dark:text-red-500">*</span>
              )}
            </Label>
          )}
          {description && (
            <Description className="text-sm/6 text-white/50">
              {description}
            </Description>
          )}
          <HeadlessTextArea ref={ref} {...props} className={inputClasses} />
          {error && <p className="mt-2 text-red-500">{errorMessage}</p>}
        </Field>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
