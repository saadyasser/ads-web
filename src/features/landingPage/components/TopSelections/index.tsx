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
      <H2 className="mb-1 text-accent-dark ">
        Top 8 Selection - <span className="italic font-normal">{selectBy}</span>
      </H2>
      <div className="flex items-center justify-between mb-4 2xl:mb-6">
        <p className="text-xs font-light text-black md:text-sm 2xl:text-base">
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
      <div className="flex gap-2 overflow-x-auto md:gap-3 2xl:gap-4 scrollbar-hide">
        {productsList.map((product: Product, index) => (
          <Link
            key={index}
            className="shrink-0 grow basis-4/5 md:basis-[45%]  xl:md:basis-[22%] md:rounded-2xl transition-colors duration-150 rounded-2xl"
            href={product.name.toLowerCase().replaceAll(" ", "-")}
          >
            <Card className="block">
              <div className="relative group">
                {/* Overlay Div */}
                <div className=" flex flex-col gap-3 absolute px-2 pb-2 pt-10 inset-0 bg-[rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in rounded-xl md:rounded-xl z-10">
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
              <h6 className="my-2 text-sm font-bold leading-5 md:text-base text-accent-dark">
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
