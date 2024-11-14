import { Product } from "@/features/landingPage/components";
import { LoadingProduct } from "@/features/landingPage/components/Product";
import { ProductType } from "@/types";
import { cn } from "@/utils";
import React from "react";

export const ProductList = ({
  products,
  className = "",
  isLoading,
}: {
  className?: string;
  products?: ProductType[];
  isLoading: boolean;
}) => {
  const containerClassName = cn(
    "col-span-1 xl:col-span-3 grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3",
    className
  );
  return (
    <div className={containerClassName}>
      {isLoading &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((product) => (
          <LoadingProduct withRate={true} />
        ))}
      {!isLoading &&
        products &&
        products.length > 0 &&
        products.map((product) => (
          <React.Fragment key={product._id}>
            <Product product={product} withRate={true} />
          </React.Fragment>
        ))}
    </div>
  );
};

export default ProductList;
