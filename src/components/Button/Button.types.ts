import { VariantProps } from "class-variance-authority";
import { button } from "./ButtonStyles";

export type RefType = HTMLButtonElement;

export type ButtonVariantsOptions = Omit<
  VariantProps<typeof button>,
  "intent"
> & {
  intent?: NonNullable<VariantProps<typeof button>["intent"]>;
  type?: "button" | "submit" | "reset";
};
export interface ButtonProps
  extends ButtonVariantsOptions,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "before" | "after";
}
