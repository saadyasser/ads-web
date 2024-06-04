"use client";
import { Slider } from "@/components";
import { categoriesData } from "@/features/data";
import React from "react";
import CategoriesCard from "../CategoriesCard";

export const ResponsiveCategories = () => {
  return (
    <div className="flex items-center gap-8 cursor-grab lg:hidden">
      <Slider
        slides={categoriesData}
        slideShape={(slide) => <CategoriesCard {...slide} />}
        spaceBetween={60}
        slidesPerView={2}
        loop
        id="categories-slider"
      />
    </div>
  );
};

export default ResponsiveCategories;
