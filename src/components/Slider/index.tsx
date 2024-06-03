import React from "react";
import { SliderProps } from "./Slider.types";
// import {
//   Navigation,
//   Pagination,
//   Mousewheel,
//   Keyboard,
//   FreeMode,
//   Autoplay,
//   EffectFade,
// } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";

export const Slider = ({
  slides,
  className = "text-black",
  slideShape,
  ...rest
}: SliderProps) => {
  return (
    <Swiper
      speed={400}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      {...rest}
    >
      <div className="relative">
        {slides?.map((slide, index) => (
          <SwiperSlide key={index} className={`${className ?? ""}`}>
            {slideShape(slide, index)}
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
export default Slider;
