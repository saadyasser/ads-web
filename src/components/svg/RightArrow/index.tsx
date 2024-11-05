import type { SvgType } from "@/types";

export const RightArrow: SvgType = (props) => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5001 20.4852C11.5083 19.933 11.9626 19.4919 12.5148 19.5001L27.5148 19.7223C28.067 19.7305 28.5081 20.1848 28.4999 20.737C28.4917 21.2893 28.0374 21.7303 27.4852 21.7221L12.4852 21.4999C11.933 21.4917 11.4919 21.0374 11.5001 20.4852Z"
        fill={props.fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.7929 12.7929C20.1834 12.4024 20.8166 12.4024 21.2071 12.7929L28.2071 19.7929C28.5976 20.1834 28.5976 20.8166 28.2071 21.2071L21.2071 28.2071C20.8166 28.5976 20.1834 28.5976 19.7929 28.2071C19.4024 27.8166 19.4024 27.1834 19.7929 26.7929L26.0858 20.5L19.7929 14.2071C19.4024 13.8166 19.4024 13.1834 19.7929 12.7929Z"
        fill={props.fill}
      />
    </svg>
  );
};

export default RightArrow;
