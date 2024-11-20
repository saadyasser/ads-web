"use client";
import { H2, ImageCard } from "@/components";
import { Category1, RightArrow } from "@/components/svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
];

export const HowEarningsWork = () => {
  const [hoveredCategoryId, setHoveredCategoryId] = useState<
    undefined | number
  >(undefined);
  return (
    <section className="bg-background-light py-6 px-4 md:py-10 md:px-8 2xl:py-[60px] 2xl:px-20">
      <div className="flex flex-col items-start gap-4 mb-4 2xl:mb-6 xl:block">
        <div className="xl:max-w-[784px] xl:mx-auto xl:text-center">
          <H2 className="mb-3 text-accent-dark">How do earnings work?</H2>
          <p className=" text-xs text-black md:text-sm md:font-semibold 2xl:text-base 2xl:font-semibold">
            As a publisher on Azaiza Design Studio, you’ll earn 95% of every
            paid product download. Set your prices, track your performance in
            real-time, and enjoy weekly payouts directly to your account. With
            just a 5% platform fee, we handle the rest while you focus on
            creating and sharing your best work!
          </p>
        </div>
        <Link
          href="/test"
          className="self-end flex gap-1 justify-between items-center text-center font-semibold text-white bg-primary  py-2 px-3 rounded-lg md:rounded-xl  md:py-[10px] md:px-16 xl:hidden"
        >
          <span>Lets Go</span>
          <RightArrow fill="white" color="white" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-4 md:gap-3 2xl:gap-4">
        {categoriesList.map((category: Category) => (
          <ImageCard
            key={category.id}
            className="bg-white"
            direction="column"
            title={category.name}
            description="Fill out the form and submit your application with details about your work and expertise."
            image={<Category1 className="w-6 h-6 md:w-[43px] md:h-[43px]" />}
          ></ImageCard>
        ))}
      </div>
      <div className="hidden xl:flex justify-center mt-4">
        <Link
          href="/test"
          className="flex gap-[10px] items-center font-semibold text-white bg-primary  py-2 px-3 rounded-lg xl:rounded-xl  xl:py-[10px] md:px-16"
        >
          <span>Explore Design Systems</span>
          <RightArrow fill="white" color="white" />
        </Link>
      </div>
    </section>
  );
};

export default HowEarningsWork;
