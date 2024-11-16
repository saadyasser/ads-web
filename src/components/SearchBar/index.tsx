"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { SearchFilterIcon, SearchIcon } from "../svg";
import Card from "../Card";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils";
import { ProductsFilter } from "@/features/Categories/components";
import { isValid } from "zod";
import { useCategories } from "@/features/Categories/providers";
// import { XIcon } from "../svg"; // Assuming you have an X icon component for closing

interface TargetComponentProps {
  searchKey: string;
  onSearchKeyChanged: (searchKey: string) => void;
  onVisibilityChange?: (visible: boolean) => void;
  withSearchResults?: boolean;
  withFilter?: boolean;
  withCategories?: boolean;
  className?: string;
  inputClassName?: string;
  children?: ReactNode;
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
  searchKey,
  onSearchKeyChanged,
  onVisibilityChange = () => {},
  withSearchResults = true,
  withFilter = false,
  withCategories = true,
  className = "",
  inputClassName = "",
  children,
}) => {
  const pathname = usePathname();
  const { categories } = useCategories();
  const currentCategoryPath = pathname.split("/");
  const currentCategory =
    pathname.startsWith("/categories") &&
    categories?.find(
      (c) => c.name === currentCategoryPath[2].replace("-", " ")
    );
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
        console.log(entry.isIntersecting, "isIntersecting");
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
    // const results = productsList.filter((product) => {
    //   const matchesSearchTerm = searchTerm
    //     ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     : true;

    //   const matchesCategory = selectedCategory
    //     ? product.category === selectedCategory
    //     : true;

    //   return matchesSearchTerm && matchesCategory;
    // });

    // setFilteredProducts(results);
    setIsCardVisible(searchTerm?.length > 0); // Show card if there's a search term
  }, [searchTerm, selectedCategory]);

  const router = useRouter();

  const { ref: registerRef, ...rest } = register("searchTerm", {
    required: "Please enter a search term.",
    onChange: (e) => {
      setValue("searchTerm", e.target.value);
      onSearchKeyChanged(e.target.value);
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
    " mb-4 md:mb-6 mx-auto bg-white rounded-xl 2xl:p-4 pl-3 py-1 pr-1 border-[1px] border-primary-light-active hover:border-accent-gray focus:border-accent-dark",
    className
  );

  const inputClass = cn(
    "pl-0 pr-[10px] grow-1 border-0 md:text-lg mt-0 md:!py-2 2xl:!py-2",
    inputClassName
  );

  return (
    <>
      <div className={` ${containerClass}`} ref={targetRef}>
        <div className="flex flex-col items-center">
          <div className="flex items-center w-full">
            <Input
              value={searchKey}
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
              {!withFilter && children}
            </div>
          </div>
        </div>
      </div>

      {withFilter && filterVisibility && children}

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
