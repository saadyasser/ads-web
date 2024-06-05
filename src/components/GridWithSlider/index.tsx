"use client";
import { Container } from "@/components";
import React from "react";
import { Slider } from "@/components";
import CardShape from "./CardShape";

export const GridWithSlider = ({
  gridData,
  heading,
  loop = false,
}: {
  gridData: any;
  heading: string;
  loop?: boolean;
}) => {
  return (
    <div className="">
      <div className="custom-container">
        <h3 className="my-4 capitalize">{heading}</h3>
        <Slider
          className=""
          slides={gridData}
          slideShape={(slide) => <CardShape {...slide} />}
          loop={loop}
        />
      </div>
    </div>
  );
};

export default GridWithSlider;
