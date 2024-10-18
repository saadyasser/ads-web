import { cva } from "class-variance-authority";

export const button = cva(
  "flex items-center justify-center gap-2 px-4 py-[18px] font-bold text-base font-gilroy leading-5 rounded-lg text-center transition-all duration-150 disabled:opacity-40 disabled:bg-opacity-40 focus-visible:outline-primary-hover",
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

    defaultVariants: {
      intent: "primary",
    },
  }
);
