"use client";
import { CustomMarkdown, H1, H2 } from "@/components";
import EmblaCarousel from "@/components/ThumbnailSwiper/EmblaSlider";
import PageSkeleton from "./PageSkeleton";
import EmblaCarouselSlides from "@/components/Slider/EmblaSlider";
import { ProductDocument } from "@/types/app-write.types";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export const ProductDetails = ({
  product,
  loading,
}: {
  product: ProductDocument;
  loading: boolean;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!product && !loading) {
    return (
      <div className="m-auto text-center">
        <H1>No product data available.</H1>
      </div>
    );
  }

  return (
    <>
      {!product && loading ? (
        <PageSkeleton />
      ) : (
        <>
          {/* <section className="py-2">{product?.description}</section> */}
          <section className="">
            <EmblaCarousel slides={product?.imagesUrl} loading={loading} />
          </section>
          <section className="py-6">
            <H2 className="py-2">Product Specifications :</H2>
            <CustomMarkdown content={product?.specifications} />
          </section>
          {/* <section className="py-2">
            <H2>Recent Components</H2>
            <EmblaCarouselSlides slides={product?.imagesUrl} />
          </section> */}
          <section className="relative w-full">
            <Swiper
              spaceBetween={10}
              navigation={true}
              rewind={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {product?.imagesUrl.map((image) => (
                <SwiperSlide key={image}>
                  <img src={image} />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              rewind
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mt-5 product-details__swiper"
            >
              {product?.imagesUrl.map((image) => (
                <SwiperSlide key={image}>
                  <img src={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </>
      )}
    </>
  );
};

export default ProductDetails;
