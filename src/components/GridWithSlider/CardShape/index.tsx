"use client";
import { useTheme } from "next-themes";
import { CardShapeType } from "./CardShape.types";
import Image from "next/image";
import { Card } from "@/components";
import { ProductDocument } from "@/types/app-write.types";

export const CardShape = (slide: ProductDocument) => {
  const {
    title,
    description,
    specifications,
    price,
    category,
    imagesUrl,
    $id,
  } = slide;
  return (
    <Card
      className="!items-start !justify-start gap-4 hover-zoom-effect"
      navigateTo={`${category?.name}/${$id}`}
      hoverEffect
    >
      {/* <div className="flex items-center justify-center max-lg:h-[150px] max-lg:[157px] lg:h-[200px] rounded-lg !w-full 2xl:h-[241px] relative overflow-hidden"> */}
      <div className="flex items-center justify-center rounded-lg !w-full relative overflow-hidden h-[157px] md:h-[241px]">
        <Image
          src={imagesUrl[0]}
          width={334}
          height={241}
          alt={title}
          className="object-cover w-auto h-auto transition-all rounded-lg peer"
        />
      </div>
      <div className="w-full text-black dark:text-white">
        <h3 className="mb-1 text-lg font-bold capitalize truncate ">{title}</h3>
        <p className="text-sm truncate">{description}</p>
      </div>
    </Card>
  );
};
export default CardShape;
