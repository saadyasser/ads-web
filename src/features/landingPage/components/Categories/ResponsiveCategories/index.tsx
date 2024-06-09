"use client";
import { Slider } from "@/components";
import { categoriesData } from "@/features/data";
import React from "react";
import CategoriesCard from "../CategoriesCard";

export const ResponsiveCategories = () => {
  return (
    <div className="block cursor-grab lg:hidden">
      <Slider
        slides={categoriesData}
        slideShape={(slide) => <CategoriesCard {...slide} />}
        loop
        id="categories-slider"
        // breakpoints={{
        //   320: {
        //     slidesPerView: "auto",
        //     spaceBetween: 20,
        //   },
        // }}
      />
    </div>
  );
};

export default ResponsiveCategories;
