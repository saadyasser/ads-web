"use client";
import { Footer } from "@/components";
import { useCategories } from "@/features/Categories/providers";
import {
  Categories,
  TestimonialsSection,
  TopSelections,
} from "@/features/landingPage/components";
import StatisticsSection from "@/features/landingPage/components/StatisticsSection";
import React from "react";

export default function LandingPage() {
  const { categories } = useCategories();
  return (
    <div>
      <Categories />
      <div className="flex flex-col gap-5 md:gap-0  bg-background-light py-6 px-4  md:py-10 md:px-8 2xl:py-[60px] 2xl:px-20">
        <TopSelections withRate={true} />
        <TopSelections category={categories[0]} />
        <TopSelections category={categories[1]} />
        <TopSelections category={categories[2]} />
        <TopSelections category={categories[3]} />
        <TopSelections category={categories[4]} />
      </div>
      <StatisticsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
