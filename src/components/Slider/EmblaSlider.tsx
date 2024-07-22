import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides?: string[];
  options?: EmblaOptionsType;
};

export const EmblaCarouselSlides: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="mt-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 touch-pan-y touch-pinch-zoom">
          {slides?.map((inde, index) => (
            <div className="flex-[0_0_25%] min-w-0 pl-4" key={index}>
              <div className="flex items-center justify-center rounded-lg">
                <Image
                  src={inde}
                  alt={`image ${index}`}
                  width={360}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
        <div className="grid items-center grid-cols-2 gap-2">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="tap-highlight-none appearance-none bg-transparent touch-manipulation inline-flex text-none cursor-pointer border-0 p-0 m-0 shadow-inner w-[3.6rem] h-[3.6rem] z-1 rounded-full flex items-center justify-center disabled:text-gray-400"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="tap-highlight-none appearance-none bg-transparent touch-manipulation inline-flex text-none cursor-pointer border-0 p-0 m-0 shadow-inner w-[3.6rem] h-[3.6rem] z-1 rounded-full flex items-center justify-center disabled:text-gray-400"
          />
        </div>

        <div className="flex flex-wrap items-center justify-end -mr-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`tap-highlight-none appearance-none bg-transparent touch-manipulation inline-flex text-none cursor-pointer border-0 p-0 m-0 w-[2.6rem] h-[2.6rem] flex items-center justify-center rounded-full ${
                index === selectedIndex
                  ? "shadow-inner w-[1.4rem] h-[1.4rem]"
                  : "shadow-inner"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselSlides;
