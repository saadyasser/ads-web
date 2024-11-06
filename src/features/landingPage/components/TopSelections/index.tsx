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
        Top 8 Selection - <span className="font-normal italic">{selectBy}</span>
      </H2>
      <div className="flex justify-between items-center mb-4 2xl:mb-6">
        <p className="text-xs md:text-sm md:font-semibold 2xl:text-base 2xl:font-semibold text-black ">
          With lots of unique blocks, you can easily build a page without
          coding.
        </p>
        <Link
          href="/test"
          className="md:flex justify-between items-center text-center font-semibold hidden  text-[#01C38D] pr-4 md:pr-8 2xl:pr-20"
        >
          <span>Explore Design Systems</span>
          <RightArrow fill="#01C38D" color="#01C38D" />
        </Link>
      </div>
      <div className=" flex  gap-2 md:gap-3 2xl:gap-4 overflow-x-auto scrollbar-hide">
        {productsList.map((product: Product, index) => (
          <Link
            key={index}
            className="shrink-0 grow basis-4/5 md:basis-[45%]  xl:md:basis-[22%] rounded-lg md:rounded-2xl transition-colors duration-500"
            href={product.name.toLowerCase().replaceAll(" ", "-")}
          >
            <Card className="block">
              <div className="relative group">
                {/* Overlay Div */}
                <div className=" flex flex-col gap-3 absolute px-2 pb-2 pt-10 inset-0 bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in rounded-lg md:rounded-xl z-10">
                  <div className="basis-4/5  flex items-center gap-2 justify-center">
                    <span className="p-2 bg-white rounded-full">
                      <FavouriteIcon color="#0e2841" />
                    </span>
                    <span className="p-2 bg-white rounded-full">
                      <BagIcon color="#0e2841" />
                    </span>
                  </div>
                  <Link
                    className=" text-white font-semibold flex justify-center items-center"
                    href={product.name.toLowerCase().replaceAll(" ", "-")}
                  >
                    <span>Show Detail</span>
                    <RightArrow fill="white" />
                  </Link>
                </div>

                {/* Product Image */}
                <Image
                  width={336}
                  height={248}
                  src={"/images/products/product-1-xl.png"}
                  className="w-full h-auto rounded-lg md:rounded-xl"
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
                  <FavouriteIcon width={16} height={16} fill="#0E2841" />
                  <span
                    className={`text-xs text-accent-dark pl-[2px] ${
                      withRate && "pr-2"
                    }`}
                  >
                    200K
                  </span>
                  {withRate && (
                    <>
                      <StarIcon color="#0E2841" fill="#0E2841" />
                      <span className="text-xs text-accent-dark pl-[2px]">
                        4.9/5
                      </span>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <Link
        href="/test"
        className="flex  items-center  font-semibold visible md:invisible text-[#01C38D] mt-3"
      >
        <span>Explore Design Systems</span>
        <RightArrow fill="#01C38D" color="#01C38D" />
      </Link>
    </section>
  );
};

export default TopSelections;
