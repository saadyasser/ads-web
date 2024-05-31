/*
    To export all general types from one single source of truth
    example :
    export { customType } from "./customType";
*/

export type childrenType =
  | string
  | React.JSX.Element
  | React.JSX.Element[]
  | React.ReactNode;

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}
