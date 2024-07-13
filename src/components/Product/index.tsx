import React from "react";
import { Card } from "../";
import { ProductImageType, ProductType } from "@/types";
import Image from "next/image";
import clsx from "clsx";

export const findThumbnailImage = (items: ProductImageType[]) => {
  return items.filter((item: ProductImageType) => item.isThumbnail);
};
export const Product = ({ product }: { product: ProductType }) => {
  const { description, imagesUrl, name, price } = product;
  const thumbnail = findThumbnailImage(imagesUrl);
  const priceClasses = clsx(
    "absolute top-4 md:top-6 right-4 z-20 rounded-full py-1 px-2 font-medium md:py-2 md:px-3 md:font-semibold text-xs text-center text-white",
    price ? "bg-primary" : "bg-success"
  );
  return (
    <Card
      className="relative !items-start !justify-start gap-4 hover-zoom-effect"
      navigateTo={`/${product?.category}/${product?.id}`}
      hoverEffect
    >
      <span className={priceClasses}>{price ? `${price} $` : "Free"}</span>
      <div className="flex items-center justify-center rounded-lg !w-full relative overflow-hidden">
        <Image
          src={thumbnail[0].imagePath}
          alt={name}
          width={330}
          height={146}
          className="!w-full !h-full rounded-lg transition-all peer"
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
