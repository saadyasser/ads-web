import { Card } from "@/components";
import { BagIcon, FavouriteIcon, RightArrow, StarIcon } from "@/components/svg";
import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProps {
  product: ProductType;
  withRate?: boolean;
}

export const Product: React.FC<ProductProps> = ({
  product,
  withRate = false,
}) => {
  return (
    <Link
      key={product._id}
      className="shrink-0 grow basis-4/5 md:basis-[45%]  xl:basis-[22%] md:rounded-2xl transition-colors duration-150 rounded-2xl"
      href={product.title.toLowerCase().replaceAll(" ", "-")}
    >
      <Card className="block rounded-2xl">
        <div className="relative group">
          {/* Overlay Div */}
          <div className=" flex flex-col gap-3 absolute px-2 pb-2 pt-10 inset-0 bg-[rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in rounded-xl z-10">
            <div className="flex items-center justify-center gap-2 basis-4/5">
              <span className="p-2 bg-white rounded-full">
                <FavouriteIcon color="#0e2841" />
              </span>
              <span className="p-2 bg-white rounded-full">
                <BagIcon color="#0e2841" />
              </span>
            </div>
            <Link
              className="flex items-center justify-center font-semibold text-white "
              href={product.title.toLowerCase().replaceAll(" ", "-")}
            >
              <span>Show Detail</span>
              <RightArrow fill="white" />
            </Link>
          </div>

          {/* Product Image */}
          <Image
            width={336}
            height={248}
            src={product.thumbnail}
            className="w-full h-auto rounded-xl md:rounded-xl"
            alt="Product Image"
          />
          {product.price !== 0 ? (
            <span className="absolute text-xs text-white right-2 top-2 bg-primary px-4 py-2 rounded-[48px] z-20">
              ${product.price}
            </span>
          ) : (
            <span className="absolute text-xs text-white right-2 top-2 px-4 py-2 rounded-[48px] bg-[#01C38D] z-20">
              Free
            </span>
          )}
        </div>
        <h6 className="my-2 text-sm font-bold leading-5 md:text-base text-accent-dark">
          {product.title}
        </h6>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <Image
              className="w-6 h-6"
              src="/images/profile-img.png"
              alt={"User Profile"}
              width={24}
              height={24}
            />
            <p className="text-[12px] font-medium leading-[14px] text-accent-dark">
              {product.publisher.displayName}
            </p>
          </div>
          <div className="flex items-center">
            <FavouriteIcon width={16} height={16} fill="#0E2841" />
            <span
              className={`text-xs text-accent-dark pl-[2px] ${
                withRate && "pr-2"
              }`}
            >
              {product.likes}
            </span>
            {withRate && (
              <>
                <StarIcon color="#0E2841" fill="#0E2841" />
                <span className="text-xs text-accent-dark pl-[2px]">
                  {Math.floor(product.rate)}/5
                </span>
              </>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default Product;
