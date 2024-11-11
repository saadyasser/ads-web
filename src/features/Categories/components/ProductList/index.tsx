import { productsList } from "@/data/products_list";
import { Product } from "@/features/landingPage/components";
import { cn } from "@/utils";
import React from "react";

export const ProductList = ({ className = "" }: { className?: string }) => {
  const containerClassName = cn(
    "col-span-1 xl:col-span-3 grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3",
    className
  );
  return (
    <div className={containerClassName}>
      {productsList.map((product) => (
        <Product product={product} withRate={true} />
      ))}
    </div>
  );
};

export default ProductList;
