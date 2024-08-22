"use client";
import { CustomMarkdown, H1, H2 } from "@/components";
import EmblaCarousel from "@/components/ThumbnailSwiper/EmblaSlider";
import { ProductType } from "@/types";
import { fetchProductData } from "@/utils/getProductDetails";
import React, { useEffect, useState } from "react";
import PageSkeleton from "./PageSkeleton";
import EmblaCarouselSlides from "@/components/Slider/EmblaSlider";
import { ProductDocument } from "@/types/app-write.types";

export const ProductDetails = ({
  product,
  loading,
}: {
  product: ProductDocument;
  loading: boolean;
}) => {
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
          <section className="py-2">{product?.description}</section>
          <section className="py-2">
            <EmblaCarousel slides={product?.imagesUrl} loading={loading} />
          </section>
          <section className="py-4">
            <H2 className="py-2">Product Specifications :</H2>
            <CustomMarkdown content={product?.specifications} />
          </section>
          <section className="py-2">
            <H2>Recent Components</H2>
            <EmblaCarouselSlides slides={product?.imagesUrl} />
          </section>
        </>
      )}
    </>
  );
};

export default ProductDetails;
