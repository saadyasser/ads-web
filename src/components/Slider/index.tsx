"use client";
import React from "react";
import { SliderProps } from "./Slider.types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
const defaultBreakpoints = {
  400: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};
export const Slider = ({
  slides,
  className = "text-black",
  slideShape,
  onSwiper,
  id,
  breakpoints,
  ...rest
}: SliderProps) => {
  return (
    <Swiper
      id={id}
      speed={400}
      onSwiper={onSwiper}
      breakpoints={{ ...defaultBreakpoints, ...breakpoints }}
      {...rest}
    >
      <div className="relative flex">
        {slides?.map((slide, index) => (
          <SwiperSlide
            key={slide?.id || index}
            className={`${className ?? ""}`}
          >
            {slideShape(slide, index)}
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
export default Slider;
