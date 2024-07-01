import { childrenType } from "@/types";

export type OptionType = {
  name: string | childrenType;
  value: string;
  isAvailable: boolean;
};
export interface RadioGroupType {
  options: OptionType[];
  label?: string;
  containerClasses?: string;
}
