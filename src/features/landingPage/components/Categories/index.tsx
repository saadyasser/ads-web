"use client";
import { H2, ImageCard } from "@/components";
import { Category1, RightArrow } from "@/components/svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { array } from "zod";

interface Category {
  id: number;
  name: string;
  link: string;
  image: React.ReactNode;
  isHover: boolean;
}
const categoriesList: Category[] = [
  {
    id: 1,
    name: "UI Components",
    link: "/ui-components",
    image: <Category1 className="w-6 h-6 md:w-[43px] md:h-[43px]" />,
    isHover: false,
  },
  {
    id: 2,
    name: "Icon Sets",
    link: "/icon-sets",
    image: <Category1 className="w-6 h-6 md:w-[43px] md:h-[43px]" />,
    isHover: false,
  },
  {
    id: 3,
    name: "Web Templates",
    link: "/web-templates",
    image: <Category1 className="w-6 h-6 md:w-[43px] md:h-[43px]" />,
    isHover: false,
  },
  {
    id: 4,
    name: "UI Components",
    link: "/ui-components",
    image: <Category1 className="w-6 h-6 md:w-[43px] md:h-[43px]" />,
    isHover: false,
  },
  {
    id: 5,
    name: "Icon Sets",
    link: "/icon-sets",
    image: <Category1 className="w-6 h-6 md:w-[43px] md:h-[43px]" />,
    isHover: false,
  },
  {
    id: 6,
    name: "Web Templates",
    link: "/web-templates",
    image: <Category1 className="w-6 h-6 md:w-[43px] md:h-[43px]" />,
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
            key={category.id}
            href={category.link}
          >
            <ImageCard
              title={category.name}
              description="+1,1k Assets"
              image={<Category1 className="w-6 h-6 md:w-[43px] md:h-[43px]" />}
            >
              <div
                className={`w-10 h-10 rounded-full self-end bg-secondary-hover ${
                  category.id === hoverdCategoryId
                    ? "invisible lg:visible"
                    : "invisible"
                }`}
              >
                <RightArrow />
              </div>
            </ImageCard>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
