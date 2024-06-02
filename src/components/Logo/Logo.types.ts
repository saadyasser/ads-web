import { StaticImageData } from "@/types";

export type LogoType = {
  src?: StaticImageData | string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
};