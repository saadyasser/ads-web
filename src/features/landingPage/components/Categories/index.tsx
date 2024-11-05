"use client";
import { H2 } from "@/components";
import { Category1, RightArrow } from "@/components/svg";
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

export const Categories = () => {
  const [hoverdCategoryId, setHoveredCategoryId] = useState<undefined | number>(
    undefined
  );
  return (
    <section className="bg-white py-6 px-4 md:py-10 md:px-8 2xl:py-[60px] 2xl:px-20">
      <H2 className="mb-3 text-accent-dark">Select a category</H2>
      <p className="text-xs md:text-sm md:font-semibold 2xl:text-base 2xl:font-semibold text-black mb-4 2xl:mb-6">
        With lots of unique blocks, you can easily build a page without coding.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 2xl:gap-4 ">
        {categoriesList.map((category: Category) => (
          <Link
            onMouseEnter={() => {
              setHoveredCategoryId(category.id);
            }}
            onMouseLeave={() => {
              setHoveredCategoryId(undefined);
            }}
            className="flex justify-between items-center bg-background-light hover:bg-secondary text-accent-dark  p-4 text-center rounded-lg md:rounded-2xl transition-colors duration-500"
            key={category.id}
            href={category.link}
          >
            <div className="flex gap-3 justify-start items-center">
              <Category1 className="w-6 h-6 md:w-[43px] md:h-[43px]" />
              <div>
                <h6 className="text-left text-sm md:text-base leading-5 text-accent-dark mb-2 font-bold">
                  {category.name}
                </h6>
                <p className="text-left text-xs md:sm text-accent-dark">
                  +1,1k Assets
                </p>
              </div>
            </div>
            <div
              className={`w-10 h-10 bg-white rounded-full self-end ${
                category.id === hoverdCategoryId
                  ? "hidden lg:visible"
                  : "hidden"
              }`}
            >
              <RightArrow />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
