"use client";
import {
  Breadcrumb,
  ErrorBoundary,
  Footer,
  Navbar,
  SearchBar,
} from "@/components";
import { ProductList, ProductsFilter } from "@/features/Categories/components";
import { useCategories } from "@/features/Categories/providers";
import { useDebounce } from "@/hooks";
import { ProductType } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce by 500ms

  const [selectedSubCategory, setSelectedSubCategory] = useState(["all"]);
  const debouncedSelectedSubCategory = useDebounce(selectedSubCategory, 700); // Debounce by 500ms

  const [selectedType, setSelectedType] = useState<"free" | "paid" | "all">(
    "all"
  );
  const debouncedSelectedType = useDebounce(selectedType, 500); // Debounce by 500ms

  const [selectedFileFormat, setSelectedFileFormat] = useState(["all"]);
  const debouncedSelectedFileFormat = useDebounce(selectedFileFormat, 700); // Debounce by 500ms

  // Infinite scrolling setup
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Fetch products from the API with pagination
  const fetchProducts = async ({
    pageParam = 0,
  }): Promise<ProductsResponse> => {
    const response = await axios.get<ProductsResponse>(
      `https://api.azaiza.com/api/product/`,
      {
        params: {
          category: [currentCategory?._id],
          limit: 12,
          skip: pageParam,
          ...(debouncedSearchTerm && { search: debouncedSearchTerm }),
          ...(debouncedSelectedType !== "all" && {
            isFree: debouncedSelectedType,
          }),
          ...(!debouncedSelectedFileFormat.includes("all") && {
            fileFormat: debouncedSelectedFileFormat,
          }),
          ...(debouncedSelectedSubCategory &&
            !debouncedSelectedSubCategory.includes("all") &&
            debouncedSelectedSubCategory.length !== 0 && {
              subcategories: debouncedSelectedSubCategory,
            }),
        },
      }
    );
    return response.data;
  };

  // Use React Query to fetch products with infinite scroll
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<ProductsResponse>(
    [
      "products",
      currentCategory?._id,
      debouncedSearchTerm,
      debouncedSelectedSubCategory,
      debouncedSelectedType,
      debouncedSelectedFileFormat,
    ],
    ({ pageParam = 1 }) => fetchProducts({ pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length * 12 < lastPage.data.totalCount) {
          return pages.length + 1; // Next page number
        }
        return undefined; // No more pages
      },
      retry: 0,
    }
  );

  // Set up IntersectionObserver to load more products when near the bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null, // default is the viewport
        rootMargin: "200px", // load more when 200px from the bottom
        threshold: 0,
      }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasNextPage, fetchNextPage]);

  console.log(currentCategory, "product pages");

  return (
    <>
      <Navbar categories={categories} className="bg-white" />

      <main className="pt-[85px] md:pt-[89px] xl:pt-[109px] !overflow-y-auto min-h-screen">
        <div className="relative flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between  md:items-center px-4 pb-4 md:px-8 2xl:px-20">
          <Breadcrumb homeElement="Home" capitalizeLinks />
          <SearchBar
            searchKey={searchTerm}
            onSearchKeyChanged={setSearchTerm}
            className="w-full md:max-w-[461px] md:mb-0 mx-0 bg-background-light 2xl:p-2 2xl:pl-3"
            withFilter={true}
            withCategories={false}
            withSearchResults={false}
          >
            <div className="absolute right-0 top-[calc(100%+8px)] z-50 xl:hidden px-4 md:px-8 2xl:px-20">
              {currentCategory && (
                <ProductsFilter
                  selectedSubCategory={selectedSubCategory}
                  onSelectedSubCategoryChange={setSelectedSubCategory}
                  category={currentCategory}
                  selectedType={selectedType}
                  onSelectedTypeChange={setSelectedType}
                  selectedFileFormat={selectedFileFormat}
                  onSelectedFileFormatChange={setSelectedFileFormat}
                />
              )}
            </div>
          </SearchBar>
        </div>
        <div className="p-4 md:px-8 md:py-6 2xl:px-20 bg-background-light">
          <ErrorBoundary>
            <div className="grid gap-4 grid-cols-1 xl:grid-cols-4 overflow-y-hidden">
              <aside className="hidden xl:block xl:col-span-1">
                {currentCategory && (
                  <ProductsFilter
                    selectedSubCategory={selectedSubCategory}
                    onSelectedSubCategoryChange={setSelectedSubCategory}
                    category={currentCategory}
                    selectedType={selectedType}
                    onSelectedTypeChange={setSelectedType}
                    selectedFileFormat={selectedFileFormat}
                    onSelectedFileFormatChange={setSelectedFileFormat}
                  />
                )}
              </aside>
              <div className="col-span-1 xl:col-span-3 ">
                {isLoading && <ProductList isLoading={isLoading} />}
                {!isLoading &&
                  data?.pages.map((page, index) => (
                    <ProductList
                      key={index}
                      isLoading={isLoading}
                      products={page.data.products}
                    />
                  ))}
              </div>
              {/* Infinite Scroll Loader */}
            </div>

            <div ref={observerRef}></div>
          </ErrorBoundary>
          {isFetchingNextPage && (
            <div className="grid gap-4 grid-cols-1 xl:grid-cols-4">
              <div className="hidden xl:block xl:col-span-1"></div>
              <p className="text-primary font-semibold tracking-[-.2px]  col-span-1 xl:col-span-3 text-center">
                Loading more ...
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
