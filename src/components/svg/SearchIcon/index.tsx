import { SvgType } from "@/types";
import React from "react";

export const SearchIcon: SvgType = ({ color = "black", ...props }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22.25C6.35 22.25 1.75 17.65 1.75 12C1.75 6.35 6.35 1.75 12 1.75C17.65 1.75 22.25 6.35 22.25 12C22.25 17.65 17.65 22.25 12 22.25ZM12 3.25C7.17 3.25 3.25 7.18 3.25 12C3.25 16.82 7.17 20.75 12 20.75C16.83 20.75 20.75 16.82 20.75 12C20.75 7.18 16.83 3.25 12 3.25Z"
        fill={color}
      />
      <path
        d="M22.4999 23.2499C22.3099 23.2499 22.1199 23.1799 21.9699 23.0299L19.9699 21.0299C19.6799 20.7399 19.6799 20.2599 19.9699 19.9699C20.2599 19.6799 20.7399 19.6799 21.0299 19.9699L23.0299 21.9699C23.3199 22.2599 23.3199 22.7399 23.0299 23.0299C22.8799 23.1799 22.6899 23.2499 22.4999 23.2499Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchIcon;
