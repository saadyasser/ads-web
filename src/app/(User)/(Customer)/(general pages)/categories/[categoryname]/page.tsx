"use client";
import { Breadcrumb, ErrorBoundary, SearchBar } from "@/components";
import { ProductList, ProductsFilter } from "@/features/Categories/components";
import { useCategories } from "@/features/Categories/providers";
import { ProductType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CategoryPage = () => {
  const pathname = usePathname();
  const { categories } = useCategories();
  const currentCategoryPath = pathname.split("/");
  const currentCategory = categories?.find(
    (c) => c.name === currentCategoryPath[2].replace("-", " ")
  );

  // Define the ProductsResponse interface
  interface ProductsResponse {
    data: { totalCount: number; products: ProductType[] };
    message: string;
    status: string;
    statusCode: number;
  }

  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products from the API with optional searchTerm
  const fetchProducts = async (): Promise<ProductsResponse> => {
    const response = await axios.get<ProductsResponse>(
      `https://api.azaiza.com/api/product/`,
      {
        params: {
          category: [currentCategory?._id],
          limit: 12,
          ...(searchTerm && { search: searchTerm }), // Conditionally adding search term if it exists
        },
      }
    );
    return response.data; // The response data is of type ProductsResponse
  };

  // Use React Query to fetch the products
  const { data, error, isLoading } = useQuery<ProductsResponse>(
    ["products", currentCategory?._id, searchTerm], // Include searchTerm in the query key to refetch on search change
    fetchProducts,
    {
      enabled: !!currentCategory, // Only run the query if currentCategory is defined
    }
  );

  return (
    <main className="pt-[85px] md:pt-[89px] xl:pt-[109px] !overflow-y-auto min-h-screen">
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between  md:items-center p-4 md:px-8 2xl:px-20">
        <Breadcrumb homeElement="Home" capitalizeLinks />
        <SearchBar
          searchKey={searchTerm}
          onSearchKeyChanged={setSearchTerm}
          className="w-full md:max-w-[461px] md:mb-0 mx-0 bg-background-light"
          withFilter={true}
          withCategories={false}
          withSearchResults={false}
        />
      </div>
      <div className="p-4 md:px-8 md:py-6 2xl:px-20 bg-background-light">
        <ErrorBoundary>
          <div className="grid gap-4 grid-cols-1 xl:grid-cols-4 overflow-y-hidden">
            <aside className="hidden xl:block xl:col-span-1">
              {currentCategory && <ProductsFilter category={currentCategory} />}
            </aside>
            {data?.data.products && (
              <ProductList products={data?.data.products} />
            )}
          </div>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default CategoryPage;
