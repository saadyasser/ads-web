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
        {withIndicators && gridData && gridData.length > 0 && (
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
      {gridData && gridData.length > 0 ? (
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
      ) : (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01"
            />
          </svg>
          <p className="mt-4 text-gray-500">
            No products available in this category.
          </p>
          <p className="text-gray-400">
            Please check back later or explore other categories.
          </p>
        </div>
      )}
    </Container>
  );
};

export default GridWithSlider;
