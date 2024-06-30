"use client";

import { Link } from "@/components";
import React, { useEffect, useState } from "react";
import { CategoryType, ProductType } from "@/types"; // Ensure to import the type
import Image from "next/image";

const fetchCategory = async (
  categoryId: string
): Promise<CategoryType | null> => {
  try {
    const response = await fetch(`/api/categories/${categoryId}`);
    const data = await response.json();
    console.log("🚀 ~ data:", data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default function Page({ params }: { params: { category: string } }) {
  const categoryId = params.category;
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!category) {
    return <div>No category data available.</div>;
  }

  return (
    <div className="">
      <h1>Category: {category.name}</h1>
      <div className="grid w-full grid-cols-4 gap-4 mt-6">
        <div className="col-span-1 bg-red-400 divide-y divide-gray-200 rounded-lg shadow max-md:hidden">
          Filter
        </div>
        <ul
          role="list"
          className="grid grid-cols-2 col-span-3 gap-4 lg:grid-cols-3 max-md:col-span-4"
        >
          {category?.products?.map((product: ProductType) => (
            <li
              key={product.id}
              className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow"
            >
              <Image
                src={product.imagesUrl[0].imagePath}
                alt={product.name}
                width={200}
                height={200}
              />
              <Link href={`/design-system/${product.id}`}>{product.name}</Link>
              <p>{product?.description}</p>
              <p>{product?.price ? product?.price : "Free"}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------
// grid with filter structure

/**
 * 
 *  <div className="grid w-full grid-cols-4 gap-4 mt-6">
        <div className="col-span-1 bg-red-400 divide-y divide-gray-200 rounded-lg shadow max-md:hidden">
          filter
        </div>
        <ul
          role="list"
          className="grid grid-cols-2 col-span-3 gap-4 lg:grid-cols-3 max-md:col-span-4"
        >
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
        </ul>
      </div>
 */
