"use client";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { SearchFilterIcon, SearchIcon } from "../svg";
import Card from "../Card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils";
import { productsList } from "@/data/products_list";
import { ProductsFilter } from "@/features/Categories/components";
import { isValid } from "zod";
import { useCategories } from "@/features/Categories/providers";
// import { XIcon } from "../svg"; // Assuming you have an X icon component for closing

interface TargetComponentProps {
  onVisibilityChange?: (visible: boolean) => void;
  withSearchResults?: boolean;
  withFilter?: boolean;
  withCategories?: boolean;
  className?: string;
  inputClassName?: string;
}

interface Product {
  name: string;
  imageUrl: string;
  category: string;
}

interface FormValues {
  searchTerm: string;
}

export const SearchBar: React.FC<TargetComponentProps> = ({
  onVisibilityChange = () => {},
  withSearchResults = true,
  withFilter = false,
  withCategories = true,
  className = "",
  inputClassName = "",
}) => {
  const [filterVisibility, setFilterVisibility] = useState(false);
  const {
    register,
    setValue,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const { categories: data } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isCardVisible, setIsCardVisible] = useState(false); // State for card visibility
  const targetRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null); // Ref for the card
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchTerm = watch("searchTerm");

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

  useEffect(() => {
    const results = productsList.filter((product) => {
      const matchesSearchTerm = searchTerm
        ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;

      return matchesSearchTerm && matchesCategory;
    });

    setFilteredProducts(results);
    setIsCardVisible(searchTerm?.length > 0); // Show card if there's a search term
  }, [searchTerm, selectedCategory]);

  const router = useRouter();

  const { ref: registerRef, ...rest } = register("searchTerm", {
    required: "Please enter a search term.",
    onChange: (e) => {
      setValue("searchTerm", e.target.value);
      clearErrors("searchTerm");
    },
  });

  const handleDismiss = () => {
    setIsCardVisible(false);
  };

  // Handle click outside to dismiss the card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setIsCardVisible(false);
      }
    };

    if (isCardVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCardVisible]);

  const containerClass = cn(
    "relative mb-4 md:mb-6 mx-auto bg-white rounded-xl 2xl:p-4 pl-3 py-1 pr-1 border-[1px] border-primary-light-active hover:border-accent-gray focus:border-accent-dark",
    className
  );

  const inputClass = cn(
    "pl-0 pr-[10px] grow-1 border-0 md:text-lg mt-0 md:!py-2 2xl:!py-2",
    inputClassName
  );

  return (
    <>
      <div className={`relative ${containerClass}`} ref={targetRef}>
        <div className="flex flex-col items-center">
          <div className="flex items-center w-full">
            <Input
              containerClassname="!pb-0"
              className={inputClass}
              id="search-term"
              placeholder="Component, figma, ui, graphic, etc."
              {...rest}
              ref={(e) => {
                registerRef(e);
                inputRef.current = e;
              }}
            />
            <div className="flex items-center gap-2 md:gap-4">
              <Button
                onClick={() => {
                  if (!searchTerm || filteredProducts?.length === 0) {
                    inputRef.current?.focus();
                  } else {
                    router.push("/products?searchTerm=" + searchTerm);
                  }
                }}
              >
                <SearchIcon color="white" />
                <span className="max-lg:hidden">Search</span>
              </Button>
              {withFilter && (
                <SearchFilterIcon
                  onClick={() => {
                    setFilterVisibility((isVisible) => !isVisible);
                  }}
                  className="xl:hidden"
                />
              )}
            </div>
          </div>

          {filterVisibility && (
            <div className="absolute right-0 top-[calc(100%+8px)] z-50 xl:hidden">
              <ProductsFilter />
            </div>
          )}
        </div>

        {/* Display filtered products */}
        {withSearchResults && isCardVisible && searchTerm && (
          <Card
            className={`w-full flex flex-col gap-2 ${
              filteredProducts?.length === 0
                ? "justify-center h-32"
                : "justify-start max-h-[372px] p-3 !pb-0"
            } absolute top-[calc(100%+12px)] left-0 border-[1px] border-accent-dark overflow-y-auto`}
            ref={cardRef} // Attach ref to the card
          >
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-accent-dark"
              aria-label="Close"
            >
              {/* <XIcon className="w-4 h-4" /> */}
            </button>
            {filteredProducts?.length > 0 ? (
              filteredProducts?.map((product, index) => (
                <Link
                  href={`/products/${product.name
                    .toLocaleLowerCase()
                    .replaceAll(" ", "-")}`}
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
                </Link>
              ))
            ) : (
              <p>No products found</p>
            )}
          </Card>
        )}
      </div>

      {withCategories && (
        <div className="flex flex-wrap justify-center gap-1 mx-auto mt-2 shrink lg:shrink-0 md:gap-2">
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
              className={`!bg-accent-dark-hover hover:!bg-accent-dark shrink-0 grow-0 flex-wrap px-2`}
              onClick={() => handleCategoryClick(categoryName)}
            >
              {categoryName}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
