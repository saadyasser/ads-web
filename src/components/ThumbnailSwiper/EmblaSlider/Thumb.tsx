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
    "w-fit p-2 cursor-pointer",
    selected && "border-2 border-primary rounded-lg"
  );
  return (
    <div className={classes}>
      <div onClick={onClick} className="rounded-lg w-fit">
        <Image
          src={image}
          alt={`image-${index}`}
          width={360}
          height={228}
          className="rounded-lg h-fit w-fit "
        />
      </div>
    </div>
  );
};
