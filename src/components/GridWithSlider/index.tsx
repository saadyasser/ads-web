"use client";
import { Container } from "@/components";
import React from "react";
import { Slider } from "@/components";
import CardShape from "./CardShape";

export const GridWithSlider = ({
  gridData,
  heading,
}: {
  gridData: any;
  heading: string;
}) => {
  return (
    <section className="">
      <Container>
        <h3 className="my-4 capitalize">{heading}</h3>
        <div className="-mr-24">
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
