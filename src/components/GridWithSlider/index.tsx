"use client";
import { Slider } from "@/components";
import { CardShape } from "./CardShape";
import { Swiper, SwiperOptions } from "swiper/types";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "@/lib/@iconsax";

type GridWithSliderProps = SwiperOptions & {
  gridData: any;
  heading: string;
  className?: string;
};
export const GridWithSlider = ({
  gridData,
  heading,
  className,
  ...rest
}: GridWithSliderProps) => {
  const swiperRef = useRef<Swiper>();

  return (
    <div>
      <div className="custom-container">
        <div className="flex items-center justify-between pr-8 md:pr-10 lg:pr-12 xl:pr-24">
          <h3 className="my-4 text-xl font-bold capitalize">{heading}</h3>
          <div className="flex items-center gap-2">
            <button
              className="font-semibold active:text-primary-active hover:text-primary-hover dark:active:text-white-active dark:hover:text-white-hover text-primary dark:text-white"
              onClick={() => swiperRef?.current?.slidePrev()}
            >
              <ChevronLeft size="24" />
            </button>
            <button
              className="font-semibold active:text-primary-active hover:text-primary-hover dark:active:text-white-active dark:hover:text-white-hover text-primary dark:text-white"
              onClick={() => swiperRef?.current?.slideNext()}
            >
              <ChevronRight size="24" />
            </button>
          </div>
        </div>
        <Slider
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={className}
          slides={gridData}
          slideShape={(slide) => <CardShape {...slide} />}
          {...rest}
        />
      </div>
    </div>
  );
};

export default GridWithSlider;
