import { childrenType } from "@/types";

export type FilterOptionsType = {
  name: string | childrenType;
  value: string;
  isAvailable: boolean;
};
