import { childrenType } from "@/types";
import { Swiper, SwiperOptions } from "swiper/types";

export type slideType = {
  image: string;
  content: {
    badge: string;
    heading: string;
    paragraph: string;
  };
};
export interface SliderProps extends SwiperOptions {
  slides: slideType[] | any[];
  slideShape: (slide: any, index: number) => childrenType;
  className?: string;
  id?: string;
  onSwiper?: (swiper: Swiper) => void;
}
