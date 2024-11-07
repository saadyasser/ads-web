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
      <p className="mb-4 text-xs text-black md:text-sm md:font-semibold 2xl:text-base 2xl:font-semibold 2xl:mb-6">
        With lots of unique blocks, you can easily build a page without coding.
      </p>
      <div className="grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:gap-3 2xl:gap-4">
        {categoriesList.map((category: Category) => (
          <Link
            onMouseEnter={() => {
              setHoveredCategoryId(category.id);
            }}
            onMouseLeave={() => {
              setHoveredCategoryId(undefined);
            }}
            className="flex items-center justify-between p-4 text-center transition-colors duration-150 ease-in rounded-lg bg-background-light hover:bg-secondary text-accent-dark md:rounded-2xl"
            key={category.id}
            href={category.link}
          >
            <div className="flex items-center justify-start gap-3">
              <Category1 className="w-6 h-6 md:w-[43px] md:h-[43px]" />
              <div>
                <h6 className="mb-2 text-sm font-bold leading-5 text-left md:text-base text-accent-dark">
                  {category.name}
                </h6>
                <p className="text-xs text-left md:sm text-accent-dark">
                  +1,1k Assets
                </p>
              </div>
            </div>
            <div
              className={`w-10 h-10 rounded-full self-end bg-secondary-hover ${
                category.id === hoverdCategoryId
                  ? "invisible lg:visible"
                  : "invisible"
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
