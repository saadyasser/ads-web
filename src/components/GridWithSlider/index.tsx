import { Container } from "@/components";
import React from "react";
// import ResponsiveCategories from "./ResponsiveCategories";
// import CategoriesCard from "./CategoriesCard";
import { categoriesData } from "@/data";
import { Slider } from "@/components";
import CardShape from "./CardShape";

export const GridWithSlider = ({
  gridData,
  heading,
}: {
  gridData: [];
  heading: string;
}) => {
  return (
    <section className="bg-[#F8F9FA] dark:bg-background-dark">
      <Container className="py-6 md:py-16">
        <h3 className="my-4">{heading}</h3>
        <div className="">
          <Slider
            slides={gridData}
            slideShape={(slide) => <CardShape {...slide} />}
            spaceBetween={60}
            slidesPerView={2}
            loop
          />
        </div>
      </Container>
    </section>
  );
};

export default GridWithSlider;
