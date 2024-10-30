import { cva } from "class-variance-authority";

export const button = cva(
  "flex items-center justify-center gap-2 rounded-xl font-gilroy leading-5 text-sm xl:text-base text-center disabled:opacity-40 disabled:bg-opacity-40focus-visible:outline-primary-hover py-[14px] px-4 md:py-4 xl:py-[18px] transition-all duration-150",
  {
    variants: {
      intent: {
        primary: [
          "bg-primary",
          "text-white",
          "border-transparent",
          "hover:bg-primary-hover",
          "active:bg-primary-active",
        ],
        primaryLight: [
          "bg-primary-light",
          "text-accent-dark",
          "border-transparent",
          "hover:bg-primary-light-hover",
          "active:bg-primary-light-active",
        ],
        secondary: [
          "bg-secondary",
          "text-accent-dark",
          "border-transparent",
          "hover:bg-secondary-hover",
          "active:bg-secondary-active",
        ],
        secondaryLight: [
          "bg-secondary-light",
          "text-secondary-darker",
          "border-transparent",
          "hover:bg-secondary-light-hover",
          "active:bg-secondary-light-active",
        ],
        danger: [
          "bg-danger",
          "text-accent-dark",
          "border-transparent",
          "hover:bg-danger-hover",
          "active:bg-danger-active",
        ],
        dangerLight: [
          "bg-danger-light",
          "text-danger-darker",
          "border-transparent",
          "hover:bg-danger-light-hover",
          "active:bg-danger-light-active",
        ],
        alert: [
          "bg-alert",
          "text-accent-dark",
          "border-transparent",
          "hover:bg-alert-hover",
          "active:bg-alert-active",
        ],
        alertLight: [
          "bg-alert-light",
          "text-alert-darker",
          "border-transparent",
          "hover:bg-alert-light-hover",
          "active:bg-alert-light-active",
        ],
        success: [
          "bg-success",
          "text-accent-dark",
          "border-transparent",
          "hover:bg-success-hover",
          "active:bg-success-active",
        ],
        successLight: [
          "bg-success-light",
          "text-success-darker",
          "border-transparent",
          "hover:bg-success-light-hover",
          "active:bg-success-light-active",
        ],
        custom: ["text-accent-dark"],
      },
    },
    compoundVariants: [
      {
        intent: ["primary", "secondary", "danger", "alert", "success"],
        className: "font-bold",
      },
      {
        intent: [
          "primaryLight",
          "secondaryLight",
          "dangerLight",
          "alertLight",
          "successLight",
        ],
        className: "font-semibold",
      },
    ],
    defaultVariants: {
      intent: "primary",
    },
  }
);
