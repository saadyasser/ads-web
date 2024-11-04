"use client";
import { H2 } from "@/components";
import { Category1, FavouriteIcon, RightArrow } from "@/components/svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { array } from "zod";

interface Category {
  id: number;
  name: string;
  link: string;
  imageUrl: string;
  isHover: boolean;
}
const categoriesList = [
  {
    id: 1,
    name: "UI Components",
    link: "/ui-components",
    imageUrl: "/images/products/product-1.png",
    isHover: false,
  },
  {
    id: 2,
    name: "Icon Sets",
    link: "/icon-sets",
    imageUrl: "/images/categories/category-1.png",
    isHover: false,
  },
  {
    id: 3,
    name: "Web Templates",
    link: "/web-templates",
    imageUrl: "/images/categories/category-1.png",
    isHover: false,
  },
  {
    id: 4,
    name: "UI Components",
    link: "/ui-components",
    imageUrl: "/images/categories/category-1.png",
    isHover: false,
  },
  {
    id: 5,
    name: "Icon Sets",
    link: "/icon-sets",
    imageUrl: "/images/categories/category-1.png",
    isHover: false,
  },
  {
    id: 6,
    name: "Web Templates",
    link: "/web-templates",
    imageUrl: "/images/categories/category-1.png",
    isHover: false,
  },
];

export const TopSelections = () => {
  return (
    <section className="bg-white py-6 pl-4 pr-0 md:py-10 md:pl-8 2xl:py-[60px] 2xl:pl-20">
      <H2 className="mb-3 text-accent-dark">Select a category</H2>
      <p className="text-xs md:text-sm md:font-semibold 2xl:text-base 2xl:font-semibold text-black mb-4 2xl:mb-6">
        With lots of unique blocks, you can easily build a page without coding.
      </p>
      <div className=" flex  gap-2 md:gap-3 2xl:gap-4 overflow-hidden">
        {categoriesList.map((category: Category) => (
          <Link
            key={category.id}
            className=" bg-acc shrink-0 grow p-4  rounded-lg md:rounded-2xl transition-colors duration-500"
            href={category.link}
          >
            <Image
              width={336}
              height={248}
              src={"/images/products/product-1-xl.png"}
              className="w-full h-auto"
              alt="Product Image"
            />
            <h6 className="text-sm md:text-base leading-5 text-accent-dark mb-2 font-bold">
              {category.name}
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
              <div className="flex">
                <FavouriteIcon color="red" />
              </div>
            </div>
            <span>$20</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopSelections;
