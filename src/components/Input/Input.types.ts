import { childrenType } from "@/types";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  containerClassName?: string;
  inputClassName?: string;
  error?: boolean;
  errorMessage?: string;
  cta?: childrenType;
  withErrorPlace?: boolean;
}
