"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import SwiperCore from "swiper";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import clsx from "clsx";

// Initialize Swiper modules
SwiperCore.use([Navigation, Thumbs]);

interface ThumbnailSliderProps {
  images: string[];
  defaultImageIndex?: number;
}

const ThumbnailSlider: React.FC<ThumbnailSliderProps> = ({
  images,
  defaultImageIndex = 0,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className="flex">
      <div className="w-3/4">
        <Swiper
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          initialSlide={defaultImageIndex}
          className="main-slider"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Slide ${index}`}
                layout="responsive"
                width={600}
                height={400}
                className="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-1/4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          direction="vertical"
          watchSlidesProgress
          className="thumb-slider h-fit"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="!h-fit">
              <div
                className={clsx("thumbnail", {
                  "border-2 border-primary":
                    thumbsSwiper?.activeIndex === index,
                })}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index}`}
                  layout="responsive"
                  width={100}
                  height={75}
                  className="cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ThumbnailSlider;
