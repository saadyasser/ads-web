import { Product } from "@/features/landingPage/components";
import { ProductType } from "@/types";
import { cn } from "@/utils";
import React from "react";

export const ProductList = ({
  products,
  className = "",
}: {
  className?: string;
  products: ProductType[];
}) => {
  const containerClassName = cn(
    "col-span-1 xl:col-span-3 grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3",
    className
  );
  return (
    <div className={containerClassName}>
      {products.map((product) => (
        <React.Fragment key={product._id}>
          <Product product={product} withRate={true} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductList;
