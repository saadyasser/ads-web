import { Categories, TopSelections } from "@/features/landingPage/components";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Categories />
      <div className="flex flex-col gap-16 bg-background-light py-6 pl-4 pr-0 md:py-10 md:pl-8 2xl:py-[60px] 2xl:pl-20">
        <TopSelections
          className="hidden lg:block"
          selectBy="September 2024!"
          withRate={true}
        />
        <TopSelections selectBy="Design System" />
        <TopSelections className="hidden lg:block" selectBy="UI Components" />
        <TopSelections
          className="hidden lg:block"
          selectBy="Mobile Templates"
        />
        <TopSelections className="hidden lg:block" selectBy="Web Templates" />
        <TopSelections className="hidden lg:block" selectBy="Wireframes" />
      </div>
    </>
  );
}
