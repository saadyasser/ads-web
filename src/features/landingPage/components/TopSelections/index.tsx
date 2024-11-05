"use client";
import { Card, H2, H3 } from "@/components";
import { productsList } from "@/components/SearchBar/data";
import {
  BagIcon,
  Category1,
  FavouriteIcon,
  FilledFavouriteIcon,
  RightArrow,
  StarIcon,
} from "@/components/svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { array } from "zod";

interface Product {
  name: string;
  imageUrl: string;
  category: string;
  price: number;
}

export const TopSelections = ({
  selectBy,
  withRate = false,
  className = "",
}: {
  selectBy: string;
  withRate?: boolean;
  className?: string;
}) => {
  return (
    <section className={className}>
      <H2 className="text-accent-dark mb-3 ">
        Select a category -{" "}
        <span className="font-normal italic">{selectBy}</span>
      </H2>
      <p className="text-xs md:text-sm md:font-semibold 2xl:text-base 2xl:font-semibold text-black mb-4 2xl:mb-6">
        With lots of unique blocks, you can easily build a page without coding.
      </p>
      <div className=" flex  gap-2 md:gap-3 2xl:gap-4 overflow-hidden">
        {productsList.map((product: Product, index) => (
          <Link
            key={index}
            className="shrink-0 grow basis-4/5 md:basis-auto   rounded-lg md:rounded-2xl transition-colors duration-500"
            href={product.name.toLowerCase().replaceAll(" ", "-")}
          >
            <Card className="block">
              <div className="relative">
                <Image
                  width={336}
                  height={248}
                  src={"/images/products/product-1-xl.png"}
                  className="w-full h-auto rounded-lg md:rounded-xl"
                  alt="Product Image"
                />
                {product.price !== 0 ? (
                  <span className="absolute text-xs text-white right-2 top-2 bg-primary px-4 py-2 rounded-[48px]">
                    ${product.price}
                  </span>
                ) : (
                  <span className="absolute text-xs text-white right-2 top-2  px-4 py-2 rounded-[48px] bg-[#01C38D]">
                    Free
                  </span>
                )}
              </div>
              <h6 className="text-sm md:text-base leading-5 text-accent-dark my-2 font-bold">
                {product.name}
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
                    Ahmed Al-Azaiza
                  </p>
                </div>
                <div className="flex items-center">
                  <FilledFavouriteIcon
                    className="pr-1"
                    color="#0E2841"
                    fill="#0E2841"
                  />
                  <span className="text-xs  text-accent-dark">200K</span>
                  {withRate && (
                    <>
                      <StarIcon
                        className="pl-2"
                        color="#0E2841"
                        fill="#0E2841"
                      />
                      <span className="text-xs  text-accent-dark">4.9/5</span>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopSelections;
