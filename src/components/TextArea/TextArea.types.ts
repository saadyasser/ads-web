import { ChangeEvent, TextareaHTMLAttributes } from "react";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  description?: string;
  containerClassName?: string;
  inputClassName?: string;
  label?: string;
  value: string | number;
  name: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  resize?: "none" | "both" | "horizontal" | "vertical";
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
