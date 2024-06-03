import { childrenType } from "@/types";
import { SwiperOptions } from "swiper/types";

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
}
