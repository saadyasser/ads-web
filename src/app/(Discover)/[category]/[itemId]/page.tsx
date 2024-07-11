"use client";
import ThumbnailSlider from "@/components/ThumbnailSwiper";
import EmblaCarousel from "@/components/ThumbnailSwiper/EmblaSlider";
import { ProductType } from "@/types";
import React, { useEffect, useState } from "react";

const fetchProductData = async (
  productId: string
): Promise<ProductType | null> => {
  try {
    const response = await fetch(`/api/products/${productId}`);
    const data = await response.json();
    console.log("🚀 ~ data:", data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default function Page({ params }: { params: { itemId: string } }) {
  const productId = params.itemId;
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product data available.</div>;
  }
  return (
    <div>
      item : {params.itemId}
      {/* {product && (
        <ThumbnailSlider
          images={product?.imagesUrl?.map((img) => img.imagePath)}
          defaultImageIndex={0}
        />
      )} */}
      {product && (
        <EmblaCarousel
          slides={product?.imagesUrl?.map((img) => img.imagePath)}
        />
      )}
    </div>
  );
}
