import { InputHTMLAttributes } from "react";

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  containerClassName?: string;
  inputClassName?: string;
  error?: boolean;
  errorMessage?: string;
}
