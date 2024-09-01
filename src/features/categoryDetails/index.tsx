"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

import { Button, Loading } from "@/components";
import ProductSkeletonLoader from "@/components/Product/ProductSkeleton";

import { FilterIcon } from "@/lib/@iconsax";

import { ProductDocument } from "@/types/app-write.types";

const Filter = dynamic(() => import("@/components/Filter"), {
  loading: () => <Loading />,
});
const Product = dynamic(() => import("@/components/Product"), {
  loading: () => <Loading />,
});
const SlideOver = dynamic(() => import("@/components/SlideOver"), {
  loading: () => <Loading />,
});
export const CategoryDetails = ({
  categoryProducts,
  loading,
}: {
  categoryProducts: ProductDocument[];
  loading: boolean;
}) => {
  const [responsiveFilterToggle, setResponsiveFilterToggle] =
    useState<boolean>(false);

  return (
    <section>
      <div className="grid w-full grid-cols-4 gap-4 mt-6">
        <div className="col-span-1 max-xl:hidden">
          <Filter />
        </div>
        <SlideOver
          open={responsiveFilterToggle}
          setOpen={setResponsiveFilterToggle}
          footer={<Button className="w-full">Apply Filters</Button>}
        >
          <Filter />
        </SlideOver>
        <Button
          className="fixed !hidden bottom-10 right-4 max-xl:!flex items-center justify-center z-20 !px-4"
          variant="secondary"
          onClick={() => setResponsiveFilterToggle((prev) => !prev)}
        >
          <FilterIcon size="24" />
        </Button>
        <ul
          role="list"
          className="grid grid-cols-2 col-span-3 gap-4 lg:grid-cols-3 max-xl:col-span-4"
        >
          {loading &&
            !categoryProducts &&
            [1, 2, 3].map((index) => (
              <li className="col-span-1" key={index}>
                <ProductSkeletonLoader />
              </li>
            ))}
          {categoryProducts &&
            categoryProducts.length > 0 &&
            !loading &&
            categoryProducts.map((product: ProductDocument) => (
              <li className="col-span-1" key={product.$id}>
                <Product product={product} />
              </li>
            ))}
          {!loading && (!categoryProducts || categoryProducts.length === 0) && (
            <div className="col-span-3 py-10 text-center">
              <p className="text-gray-500">
                No products found in this category.
              </p>
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default CategoryDetails;
