import React from "react";
import { Card } from "../";

export const ProductSkeletonLoader = () => {
  return (
    <Card className="relative !items-start !justify-start gap-4">
      <div className="absolute z-20 w-12 h-6 px-3 py-2 bg-gray-300 rounded-full top-8 right-4 animate-pulse sm:h-8 sm:w-16 lg:h-10 lg:w-20" />

      <div className="flex items-center justify-center rounded-lg !w-full relative overflow-hidden">
        <div className="w-full h-40 bg-gray-300 rounded-lg sm:h-48 lg:h-56 animate-pulse" />
      </div>

      <div className="w-full mt-2 space-y-2 text-center text-black dark:text-white">
        <div className="h-6 bg-gray-300 rounded-md animate-pulse" />
        <div className="h-4 bg-gray-300 rounded-md animate-pulse" />
      </div>
    </Card>
  );
};

export default ProductSkeletonLoader;
