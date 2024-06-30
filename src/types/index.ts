/*
    To export all general types from one single source of truth
    example :
    export { customType } from "./customType";
*/

import { FC } from "react";

export type childrenType =
  | string
  | React.JSX.Element
  | React.JSX.Element[]
  | React.ReactNode;

export type ChildrenProp = {
  children: childrenType;
};
export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}
export interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export type SvgType = FC<SvgProps>;

export type Categories =
  | "ui-components"
  | "web_mobile-templates"
  | "ready-flows"
  | "design-systems"
  | "color-themes";

export type ProductImageType = {
  imagePath: string;
  isThumbnail?: boolean;
};
export type ProductType = {
  id: number;
  name: string;
  category: Categories;
  description: string;
  price?: number;
  imagesUrl: ProductImageType[];
  specifications?: string;
};

export interface CategoryType {
  id: Categories;
  name: string;
  products: ProductType[];
}
