import { SvgType } from "@/types";
import React from "react";

export const BurgerMenu: SvgType = ({ color = "#0E2841", ...props }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 8.25H3.5C3.09 8.25 2.75 7.91 2.75 7.5C2.75 7.09 3.09 6.75 3.5 6.75H21.5C21.91 6.75 22.25 7.09 22.25 7.5C22.25 7.91 21.91 8.25 21.5 8.25Z"
        fill={color}
      />
      <path
        d="M21.5 13.25H3.5C3.09 13.25 2.75 12.91 2.75 12.5C2.75 12.09 3.09 11.75 3.5 11.75H21.5C21.91 11.75 22.25 12.09 22.25 12.5C22.25 12.91 21.91 13.25 21.5 13.25Z"
        fill={color}
      />
      <path
        d="M21.5 18.25H3.5C3.09 18.25 2.75 17.91 2.75 17.5C2.75 17.09 3.09 16.75 3.5 16.75H21.5C21.91 16.75 22.25 17.09 22.25 17.5C22.25 17.91 21.91 18.25 21.5 18.25Z"
        fill={color}
      />
    </svg>
  );
};

export default BurgerMenu;
