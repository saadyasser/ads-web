import { ChangeEvent, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  containerClassName?: string;
  inputClassName?: string;
  type?: "text" | "number" | "email" | "password";
  label?: string;
  value: string | number;
  name: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
