import { FigmaIcon, SketchIcon, XdIcon } from "../svg";
import { FilterOptionsType } from "./Filter.types";
export const paymentOptions = [
  { name: "All", value: "all", isAvailable: true },
  { name: "Free", value: "free", isAvailable: true },
  { name: "Paid", value: "paid", isAvailable: true },
];
export const formatOptions = [
  { name: "All", value: "all", isAvailable: true },
  {
    name: (
      <span className="flex items-center justify-center gap-2">
        <FigmaIcon />
        Figma
      </span>
    ),
    value: "figma",
    isAvailable: true,
  },
  {
    name: (
      <span className="flex items-center justify-center gap-2">
        <SketchIcon />
        Sketch
      </span>
    ),
    value: "sketch",
    isAvailable: false,
  },
  {
    name: (
      <span className="flex items-center justify-center gap-2 truncate">
        <XdIcon />
        Adobe Xd
      </span>
    ),
    value: "xd",
    isAvailable: false,
  },
] as FilterOptionsType[];
