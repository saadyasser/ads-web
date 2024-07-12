"use client";
import { CustomMarkdown, H1 } from "@/components";
import EmblaCarousel from "@/components/ThumbnailSwiper/EmblaSlider";
import { ProductType } from "@/types";
import { fetchProductData } from "@/utils/getProductDetails";
import React, { useEffect, useState } from "react";
import PageSkeleton from "./PageSkeleton";

export const ProductDetails = ({
  productId,
}: {
  productId: string | number;
}) => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const productData = await fetchProductData(productId);
      setProduct(productData);
      setLoading(false);
    };

    fetchData();
  }, [productId]);

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
            <EmblaCarousel
              slides={product?.imagesUrl?.map((img) => img.imagePath)}
              loading={loading}
            />
          </section>
          <section className="py-2">
            <CustomMarkdown content={product?.specifications} />
          </section>
        </>
      )}
    </>
  );
};

export default ProductDetails;
