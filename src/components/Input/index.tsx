import * as React from "react";

import { cn } from "@/utils";
import { Label } from "../ui/label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  success?: boolean;
  error?: boolean;
  containerClassname?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, label, type, success, error, containerClassname, ...props },
    ref
  ) => {
    const inputClassName = cn(
      "block w-full rounded-xl border-[1px] border-primary-light-active p-4 text-accent-dark placeholder:text-accent-dark hover:border-accent-gray focus:border-accent-dark outline-none",
      className,
      `${success && "border-success"} ${error && "border-danger"}`
    );
    return (
      <div className={`w-full ${containerClassname}`}>
        <Label
          htmlFor={props.name}
          className="block text-sm mb-2 text-accent-dark leading-none"
        >
          {label}
        </Label>
        <input type={type} className={inputClassName} ref={ref} {...props} />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

// import { forwardRef } from "react";
// import { Description, Field, Label } from "@headlessui/react";
// import { Input as HeadlessInput } from "@headlessui/react";
// import clsx from "clsx";
// import React from "react";
// import { InputProps } from "./Input.types";

// export const Input = forwardRef<HTMLInputElement, InputProps>(
//   (
//     {
//       label,
//       description,
//       containerClassName,
//       inputClassName,
//       error,
//       errorMessage,
//       cta,
//       withErrorPlace = true,
//       ...props
//     },
//     ref
//   ) => {
//     const containerClasses = clsx("w-full mt-3", containerClassName);
//     const inputClasses = clsx(
//       "mt-2 block w-full rounded-lg border-[1px] border-[#303030] dark:border-black p-4 px-3 dark:text-white placeholder:text-[#9F9CB4] placeholder:dark:text-[#595959] font-medium",
//       "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary",
//       inputClassName
//     );

//     return (
//       <div className={containerClasses}>
//         <Field>
//           {label && (
//             <Label className="text-black dark:text-white text-sm/6">
//               {label}
//               {"  "}
//               {props?.required && (
//                 <span className="text-primary dark:text-danger">*</span>
//               )}
//             </Label>
//           )}
//           {description && (
//             <Description className="text-sm/6 text-white/50">
//               {description}
//             </Description>
//           )}
//           <div className="relative">
//             <HeadlessInput ref={ref} {...props} className={inputClasses} />
//             <span className="absolute inset-y-2 right-2">{cta}</span>
//           </div>
//           {withErrorPlace && (
//             <p className="mt-2 text-danger text-sm h-[18px]">
//               {error && errorMessage ? errorMessage : ""}
//             </p>
//           )}
//         </Field>
//       </div>
//     );
//   }
// );

// Input.displayName = "Input";

// export default Input;
