"use client";

import { Button, Filter, Product, SlideOver } from "@/components";
import React, { useEffect, useState } from "react";
import { CategoryType, ProductType } from "@/types"; // Ensure to import the type
import ProductSkeletonLoader from "@/components/Product/ProductSkeleton";
import { FilterIcon } from "@/lib/@iconsax";

const fetchCategory = async (
  categoryId: string
): Promise<CategoryType | null> => {
  try {
    const response = await fetch(`/api/categories/${categoryId}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default function Page({ params }: { params: { category: string } }) {
  const categoryId = params.category;
  const [responsiveFilterToggle, setResponsiveFilterToggle] =
    useState<boolean>(false);
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const categoryData = await fetchCategory(categoryId);
      setCategory(categoryData);
      setLoading(false);
    };

    fetchData();
  }, [categoryId]);

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
          className="fixed hidden bottom-10 right-4 max-xl:block"
          variant="secondary"
          onClick={() => setResponsiveFilterToggle((prev) => !prev)}
        >
          <FilterIcon size="24" />
        </Button>
        <ul
          role="list"
          className="grid grid-cols-2 col-span-3 gap-4 lg:grid-cols-3 max-xl:col-span-4"
        >
          {!category?.products &&
            loading &&
            [1, 2, 3].map((index) => (
              <li className="col-span-1" key={index}>
                <ProductSkeletonLoader />
              </li>
            ))}
          {category?.products &&
            !loading &&
            category?.products.map((product: ProductType) => (
              <li className="col-span-1" key={product.id}>
                <Product product={product} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
