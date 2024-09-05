import { childrenType } from "@/types";
import { LegacyRef } from "react";
import { SwiperRef } from "swiper/react";
import { Swiper, SwiperOptions } from "swiper/types";

export type slideType = {
  image: string;
  content: {
    badge: string;
    heading: string;
    paragraph: string;
  };
};
type breakpointsType = {
  [breakpoint: number]: {
    slidesPerView: number;
    spaceBetween?: number;
  };
};

export interface SliderProps extends SwiperOptions {
  slides: slideType[] | any[];
  slideShape: (slide: any, index: number) => childrenType;
  className?: string;
  id?: string;
  onSwiper?: (swiper: Swiper) => void;
}
