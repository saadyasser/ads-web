import type { SvgType } from "@/types";

export const BagIcon: SvgType = ({ color = "black", ...props }) => {
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
        d="M17 9.12981C16.59 9.12981 16.25 8.78981 16.25 8.37981V6.99981C16.25 5.94981 15.8 4.92981 15.02 4.21981C14.23 3.49981 13.21 3.16981 12.13 3.26981C10.33 3.43981 8.75 5.27981 8.75 7.19981V8.16981C8.75 8.57981 8.41 8.91981 8 8.91981C7.59 8.91981 7.25 8.57981 7.25 8.16981V7.18981C7.25 4.49981 9.42 2.01981 11.99 1.76981C13.49 1.62981 14.93 2.09981 16.03 3.10981C17.12 4.09981 17.75 5.51981 17.75 6.99981V8.37981C17.75 8.78981 17.41 9.12981 17 9.12981Z"
        fill={color}
      />
      <path
        d="M15.4999 23.25H9.49994C4.87994 23.25 4.01994 21.1 3.79994 19.01L3.04994 13.02C2.93994 11.94 2.89994 10.39 3.94994 9.23C4.84994 8.23 6.33994 7.75 8.49994 7.75H16.4999C18.6699 7.75 20.1599 8.24 21.0499 9.23C22.0899 10.39 22.0599 11.94 21.9499 13L21.1999 19.01C20.9799 21.1 20.1199 23.25 15.4999 23.25ZM8.49994 9.25C6.80994 9.25 5.64994 9.58 5.05994 10.24C4.56994 10.78 4.40994 11.61 4.53994 12.85L5.28994 18.84C5.45994 20.44 5.89994 21.76 9.49994 21.76H15.4999C19.0999 21.76 19.5399 20.45 19.7099 18.86L20.4599 12.85C20.5899 11.63 20.4299 10.8 19.9399 10.25C19.3499 9.58 18.1899 9.25 16.4999 9.25H8.49994Z"
        fill={color}
      />
      <path
        d="M15.92 13.6499C15.36 13.6499 14.91 13.1999 14.91 12.6499C14.91 12.0999 15.36 11.6499 15.91 11.6499C16.46 11.6499 16.91 12.0999 16.91 12.6499C16.91 13.1999 16.47 13.6499 15.92 13.6499Z"
        fill={color}
      />
      <path
        d="M8.92003 13.6499C8.36003 13.6499 7.91003 13.1999 7.91003 12.6499C7.91003 12.0999 8.36003 11.6499 8.91003 11.6499C9.46003 11.6499 9.91003 12.0999 9.91003 12.6499C9.91003 13.1999 9.47003 13.6499 8.92003 13.6499Z"
        fill={color}
      />
    </svg>
  );
};

export default BagIcon;
