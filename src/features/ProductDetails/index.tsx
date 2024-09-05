"use client";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import PageSkeleton from "./PageSkeleton";
import { H2, Loading } from "@/components";

import { ProductDocument } from "@/types/app-write.types";

const CustomMarkdown = dynamic(() => import("@/components/CustomMarkdown"), {
  loading: () => <Loading />,
});
const LightboxWrapper = dynamic(
  () => import("./ImagesLightbox/LightboxWrapper"),
  {
    loading: () => <Loading />,
  }
);
export const ProductDetails = ({
  product,
  loading,
}: {
  product: ProductDocument;
  loading?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  return (
    <>
      {!product && loading ? (
        <PageSkeleton />
      ) : (
        <>
          <section className="">
            <ul className="flex-wrap gap-2 lg:flex lg:gap-4">
              {product?.imagesUrl.map((image: string, index: number) => {
                return (
                  <li
                    key={index}
                    className="flex-[0_0_calc(50%-24px)] max-lg:my-3 cursor-pointer"
                    onClick={() => setCurrentIndex(index)}
                  >
                    <Image
                      src={image}
                      alt="product_image"
                      width={1920}
                      height={1080}
                      className="rounded-lg aspect-[4/3]"
                    />
                  </li>
                );
              })}
            </ul>

            <LightboxWrapper
              currentIndex={currentIndex}
              images={product?.imagesUrl}
              setCurrentIndex={setCurrentIndex}
            />
          </section>
          <section className="py-6">
            <H2 className="py-2">Product Specifications :</H2>
            <CustomMarkdown content={product?.specifications} />
          </section>
          {/* <section className="py-2">
            <H2>Recent Components</H2>
            <EmblaCarouselSlides slides={product?.imagesUrl} />
          </section> */}
          {/* <section className="relative w-full">
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
          </section> */}
        </>
      )}
    </>
  );
};

export default ProductDetails;
