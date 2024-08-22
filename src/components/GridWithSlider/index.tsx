"use client";
import { Container, Slider, Link } from "@/components";
import { CardShape } from "./CardShape";
import { Swiper, SwiperModule, SwiperOptions } from "swiper/types";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "@/lib/@iconsax";
import { GoLink } from "@/lib/@react-icons";
import { Navigation } from "swiper/modules";

type GridWithSliderProps = SwiperOptions & {
  gridData: any;
  heading?: { label: string; value: string };
  className?: string;
  withIndicators?: boolean;
  modules?: SwiperModule[];
};
export const GridWithSlider = ({
  gridData,
  heading,
  className,
  withIndicators = true,
  modules,
  ...rest
}: GridWithSliderProps) => {
  const swiperRef = useRef<Swiper>();

  return (
    <Container>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        {heading && (
          <h3 className="text-xl font-bold capitalize">
            <Link
              href={heading.value}
              className="flex items-center link-with-icon"
            >
              {heading.label}{" "}
              <span id="linkIcon">
                <GoLink />
              </span>
            </Link>
          </h3>
        )}
        {withIndicators && (
          <div className="flex items-center gap-2">
            <button
              className="p-2 font-semibold text-black transition-all rounded-lg bg-white-hover active:text-primary-active hover:bg-white hover:text-primary dark:active:text-white-active dark:bg-black dark:text-white dark:hover:bg-black-darker focus-visible:outline-primary-hover"
              onClick={() => swiperRef?.current?.slidePrev()}
            >
              <ChevronLeft size="18" />
            </button>
            <button
              className="p-2 font-semibold text-black transition-all rounded-lg bg-white-hover active:text-primary-active hover:bg-white hover:text-primary dark:active:text-white-active dark:bg-black dark:text-white dark:hover:bg-black-darker focus-visible:outline-primary-hover"
              onClick={() => swiperRef?.current?.slideNext()}
            >
              <ChevronRight size="18" />
            </button>
          </div>
        )}
      </div>
      {gridData && (
        <Slider
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={`${className || ""} lg:!mr-4`}
          slides={gridData}
          slideShape={(slide) => <CardShape {...slide} />}
          modules={[Navigation]}
          {...rest}
        />
      )}
    </Container>
  );
};

export default GridWithSlider;
