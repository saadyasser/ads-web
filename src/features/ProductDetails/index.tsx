"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import PageSkeleton from "./PageSkeleton";
import { H2, Loading } from "@/components";

import { ProductDocument } from "@/types/app-write.types";
import { useProductData } from "../CategoryLayout/ProductProvider";

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
  const { setProduct } = useProductData();
  useEffect(() => {
    setProduct(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);
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
          </section>
        </>
      )}
    </>
  );
};

export default ProductDetails;
