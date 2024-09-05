"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./Thumb";
import Image from "next/image";

type PropType = {
  slides?: string[];
  options?: EmblaOptionsType;
  loading?: boolean;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, loading } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="grid w-full grid-cols-1 gap-y-4 gap-x-0 md:gap-4 md:grid-cols-4 cursor-grab">
      <div
        className="w-full grid-cols-3 col-span-3 overflow-hidden"
        ref={emblaMainRef}
      >
        <div className="flex h-full rounded-lg backface-invisible touch-pan-y touch-pinch-zoom">
          {slides?.map((slide, index) => (
            <div className="rounded-lg embla__slide" key={index}>
              <Image
                src={slide}
                alt={`slide-${index}`}
                width={1920}
                height={700}
                className="w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-1">
        <div ref={emblaThumbsRef}>
          <div className="flex flex-row items-center justify-center w-full gap-4 md:flex-col ">
            {slides?.map((slide, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                image={slide}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
