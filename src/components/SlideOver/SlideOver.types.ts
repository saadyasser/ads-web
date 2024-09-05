import { childrenType } from "@/types";

type Position = "right" | "left" | "bottom" | "top";

export interface SlideOverProps {
  children: childrenType;
  open: boolean;
  setOpen: (value: boolean) => void;
  panelTitle?: string;
  position?: Position;
  footer?: childrenType;
}
