import type { SvgType } from "@/types";

export const CopyIcon: SvgType = (props) => {
  return (
    <svg
      width="43"
      height="42"
      viewBox="0 0 43 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.5 22.575V29.925C28.5 36.05 26.05 38.5 19.925 38.5H12.575C6.45 38.5 4 36.05 4 29.925V22.575C4 16.45 6.45 14 12.575 14H19.925C26.05 14 28.5 16.45 28.5 22.575Z"
        fill="white"
      />
      <path
        opacity="0.5"
        d="M30.425 3.5H23.075C17.0375 3.5 14.5875 5.8975 14.5175 11.8125H19.925C27.275 11.8125 30.6875 15.225 30.6875 22.575V27.9825C36.6025 27.9125 39 25.4625 39 19.425V12.075C39 5.95 36.55 3.5 30.425 3.5Z"
        fill="white"
      />
    </svg>
  );
};

export default CopyIcon;
