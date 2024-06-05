"use client";
import React, { useRef } from "react";
import { SliderProps } from "./Slider.types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";

export const Slider = ({
  slides,
  className = "text-black",
  slideShape,
  onSwiper,
  id,
  ...rest
}: SliderProps) => {
  return (
    <Swiper
      id={id}
      speed={400}
      onSwiper={onSwiper}
      breakpoints={{
        320: {
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
      }}
      {...rest}
    >
      <div className="relative">
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
