"use client";
import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { SearchIcon } from "../svg";
import Card from "../Card";
import Image from "next/image";

interface TargetComponentProps {
  onVisibilityChange: (visible: boolean) => void;
}

interface Product {
  name: string;
  imageUrl: string;
  category: string;
}

interface FormValues {
  searchTerm: string;
}

const productsList: Product[] = [
  {
    name: "Design System Ui Kit",
    category: "UI Components",
    imageUrl: "/images/products/product-1.png",
  },
  {
    name: "Figma Icon Set",
    category: "Icon Sets",
    imageUrl: "/images/products/product-2.png",
  },
  {
    name: "Mobile App UI",
    category: "Mobile Templates",
    imageUrl: "/images/products/product-3.png",
  },
  {
    name: "Web Template",
    category: "Web Templates",
    imageUrl: "/images/products/product-1.png",
  },
];

export const SearchBar: React.FC<TargetComponentProps> = ({
  onVisibilityChange,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    trigger,
    watch,
  } = useForm<FormValues>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [lastSearchTerm, setLastSearchTerm] = useState<string | null>(null); // Track last valid search term

  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [onVisibilityChange]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const results = productsList.filter((product) => {
      const matchesSearchTerm = data.searchTerm
        ? product.name.toLowerCase().includes(data.searchTerm.toLowerCase())
        : true; // If no search term, consider it a match.

      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true; // If no category selected, consider it a match.

      return matchesSearchTerm && matchesCategory; // Both conditions must be true.
    });

    setFilteredProducts(results);
    setLastSearchTerm(data.searchTerm); // Save the last valid search term
    setSearchSubmitted(true);
  };
  const handleSearchClick = async () => {
    const isValid = await trigger("searchTerm");
    if (isValid) {
      handleSubmit(onSubmit)(); // Call handleSubmit without parameters
    }
  };

  // Re-run the search when user fixes input after validation error
  const searchTerm = watch("searchTerm");

  useEffect(() => {
    if (searchSubmitted && !errors.searchTerm && searchTerm) {
      onSubmit({ searchTerm }); // Call onSubmit directly with searchTerm
    }
  }, [searchTerm, errors.searchTerm, searchSubmitted]);

  return (
    <>
      <div
        className="relative mb-4 md:mb-6 mx-auto bg-white rounded-xl xl:p-4 p-3 border-[1px] border-primary-light-active hover:border-accent-gray focus:border-accent-dark"
        ref={targetRef}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <div className="flex w-full items-center">
            <Input
              containerClassname="!pb-0"
              className="grow-1 border-0"
              id="search-term"
              placeholder="Component, figma, ui, graphic, etc."
              {...register("searchTerm", {
                required: "Please enter a search term.",
                onChange: (e) => {
                  setValue("searchTerm", e.target.value);
                  clearErrors("searchTerm");
                },
              })}
            />
            <Button type="button" onClick={handleSearchClick}>
              <SearchIcon color="white" />
              <span>Search</span>
            </Button>
          </div>
        </form>

        {/* Show results when search is submitted and there are no validation errors */}
        {searchSubmitted && !errors.searchTerm && (
          <Card
            className={`w-full flex flex-col  gap-2 ${
              filteredProducts.length === 0
                ? "justify-center h-32 "
                : "justify-start max-h-[372px] p-3 !pb-0"
            } absolute top-[calc(100%+12px)] left-0 border-[1px] border-accent-dark  overflow-hidden`}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <article
                  className="w-full flex gap-3 pb-[6px] border-b-[1px] border-accent-gray-light"
                  key={index}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={67}
                    height={51}
                  />
                  <div>
                    <h5 className="text-[14px] font-bold leading-4 md:text-base md:leading-5 mb-1 text-accent-dark">
                      {product.name}
                    </h5>
                    <div className="flex items-center gap-1">
                      <Image
                        className="w-6 h-6"
                        src="/images/profile-img.png"
                        alt={product.name}
                        width={24}
                        height={24}
                      />
                      <p className="text-[12px] font-medium leading-[14px] text-accent-dark">
                        Ahmed Al-Azaiza
                      </p>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p>No products found</p>
            )}
          </Card>
        )}
      </div>

      {/* Category buttons */}
      <div className="mx-auto mt-2 flex justify-center shrink lg:shrink-0 md:gap-2 gap-1 flex-wrap">
        {[
          "Icon Sets",
          "UI Components",
          "Web Templates",
          "Design Resources",
          "Design Systems",
          "Mobile Templates",
        ].map((categoryName, key) => (
          <Button
            key={key}
            onClick={() => handleCategoryClick(categoryName)}
            className={`${
              selectedCategory === categoryName
                ? "!bg-accent-dark"
                : "!bg-accent-dark-hover"
            } shrink-0 grow-0 flex-wrap px-2`}
          >
            {categoryName}
          </Button>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
