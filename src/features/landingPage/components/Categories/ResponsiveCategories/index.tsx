"use client";
import { Loading } from "@/components";
import { categoriesData } from "@/features/data";
import React from "react";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("@/components/Slider"), {
  loading: () => <Loading />,
});
const CategoriesCard = dynamic(() => import("../CategoriesCard"), {
  loading: () => <Loading />,
});
export const ResponsiveCategories = () => {
  return (
    <div className="block cursor-grab lg:hidden">
      <Slider
        slides={categoriesData}
        slideShape={(slide) => <CategoriesCard {...slide} />}
        loop={categoriesData?.length > 3}
        id="categories-slider"
      />
    </div>
  );
};

export default ResponsiveCategories;
