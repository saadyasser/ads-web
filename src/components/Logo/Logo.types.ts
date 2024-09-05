import { StaticImageData } from "@/types";

export type LogoType = {
  src?: StaticImageData | string;
  alt?: string;
  className?: string;
  wrapperClassName?: string;
  width?: number;
  height?: number;
  withBadge?: boolean;
};
