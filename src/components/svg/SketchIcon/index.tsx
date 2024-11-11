import type { SvgType } from "@/types";

export const SketchIcon: SvgType = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M-0.000488281 5.70538L7.99954 16L3.2399 5.70538H-0.000488281ZM12.7591 5.70538L7.99954 16L15.9995 5.70538H12.7591Z"
        fill="#EB6C00"
      />
      <path
        d="M3.24011 5.70538L7.99976 16L12.7594 5.70538H3.24011Z"
        fill="#FDAD00"
      />
      <path
        d="M3.49068 0.526838L3.24011 5.70537L7.99976 0L3.49068 0.526838ZM12.7593 5.70543L12.5088 0.526838L7.99976 6.90664e-05L12.7593 5.70543Z"
        fill="#FDD231"
      />
      <path
        d="M12.7592 5.70557H15.9995L12.5086 0.526978L12.7592 5.70557ZM-0.000488281 5.70557H3.2399L3.49046 0.526978L-0.000488281 5.70557Z"
        fill="#FDAD00"
      />
      <path d="M7.99976 0L3.24011 5.70537H12.7594L7.99976 0Z" fill="#FEEEB7" />
    </svg>
  );
};

export default SketchIcon;
