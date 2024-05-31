import { ReactNode } from "react";

export type RefType = HTMLButtonElement;

export interface ButtonOptions {
  /**
   * Button display variants
   * @default ""
   * @type ButtonVariant
   */
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: "before" | "after";
}

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "alert"
  | "custom"
  | "";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;
