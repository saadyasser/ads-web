import { Footer } from "@/components";
import {
  Categories,
  TestimonialsSection,
  TopSelections,
} from "@/features/landingPage/components";
import StatisticsSection from "@/features/landingPage/components/StatisticsSection";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      <Categories />
      <div className="flex flex-col gap-5 md:gap-0  bg-background-light py-6 px-4  md:py-10 md:px-8 2xl:py-[60px] 2xl:px-20">
        <TopSelections selectBy="September 2024!" withRate={true} />
        <TopSelections selectBy="Design System" />
        <TopSelections selectBy="UI Components" />
        <TopSelections selectBy="Mobile Templates" />
        <TopSelections selectBy="Web Templates" />
        <TopSelections selectBy="Wireframes" />
      </div>
      <StatisticsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
