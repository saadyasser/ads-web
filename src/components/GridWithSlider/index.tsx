"use client";
import { Container, Slider } from "@/components";
import { CardShape } from "./CardShape";
import { Swiper, SwiperOptions } from "swiper/types";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "@/lib/@iconsax";

type GridWithSliderProps = SwiperOptions & {
  gridData: any;
  heading?: string;
  className?: string;
  withIndicators?: boolean;
};
export const GridWithSlider = ({
  gridData,
  heading,
  className,
  withIndicators = true,
  ...rest
}: GridWithSliderProps) => {
  const swiperRef = useRef<Swiper>();

  return (
    <Container>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        {heading && <h3 className="text-xl font-bold capitalize">{heading}</h3>}
        {withIndicators && (
          <div className="flex items-center gap-2">
            <button
              className="p-2 font-semibold text-black transition-all rounded-lg bg-white-hover active:text-primary-active hover:bg-white hover:text-primary dark:active:text-white-active dark:bg-black dark:text-white dark:hover:bg-black-darker"
              onClick={() => swiperRef?.current?.slidePrev()}
            >
              <ChevronLeft size="18" />
            </button>
            <button
              className="p-2 font-semibold text-black transition-all rounded-lg bg-white-hover active:text-primary-active hover:bg-white hover:text-primary dark:active:text-white-active dark:bg-black dark:text-white dark:hover:bg-black-darker"
              onClick={() => swiperRef?.current?.slideNext()}
            >
              <ChevronRight size="18" />
            </button>
          </div>
        )}
      </div>
      <Slider
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={`${className} !mr-4`}
        slides={gridData}
        slideShape={(slide) => <CardShape {...slide} />}
        {...rest}
      />
    </Container>
  );
};

export default GridWithSlider;
