import clsx from "clsx";
import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  image: string;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, image, onClick } = props;
  const classes = clsx(
    "md:w-fit md:p-2 cursor-pointer rounded-lg max-md:embla__slide-prev",
    selected && "border-2 border-primary "
  );
  return (
    <div className={classes} onClick={onClick}>
      {/* <div className="rounded-lg md:w-fit"> */}
      <Image
        src={image}
        alt={`image-${index}`}
        width={360}
        height={240}
        className="w-full h-full rounded-lg "
      />
      {/* </div> */}
    </div>
  );
};
