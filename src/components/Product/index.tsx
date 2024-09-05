import React from "react";
import Image from "next/image";

import { Card } from "../";
import clsx from "clsx";

import { ProductDocument } from "@/types/app-write.types";

export const Product = ({ product }: { product: ProductDocument }) => {
  const { description, imagesUrl, title: name, price } = product;
  const thumbnail = imagesUrl[0];
  const priceClasses = clsx(
    "absolute top-4 md:top-6 right-4 z-20 rounded-full py-1 px-2 font-medium md:py-2 md:px-3 md:font-semibold text-xs text-center text-white",
    price ? "bg-primary" : "bg-success"
  );
  return (
    <Card
      className="relative !items-start !justify-start gap-4 hover-zoom-effect"
      navigateTo={`/${product?.category?.name}/${product?.$id}`}
      hoverEffect
    >
      <span className={priceClasses}>{price ? `${price} $` : "Free"}</span>
      <div className="flex items-center justify-center rounded-lg !w-full relative overflow-hidden h-[157px] md:h-[241px]">
        <Image
          src={thumbnail}
          alt={name}
          width={330}
          height={146}
          className="!w-full !h-full rounded-lg transition-all peer "
        />
      </div>
      <div className="w-full text-center text-black dark:text-white">
        <h3 className="mb-1 text-lg font-bold capitalize truncate">{name}</h3>
        <p className="text-sm truncate">{description}</p>
      </div>
    </Card>
  );
};

export default Product;
