import React from "react";
import { ErrorBoundary } from "@/components";
import ProductsSliderSection from "./sections/ProductsSliderSection";
import { listCategories } from "@/lib/actions";
import { CategoryDocument } from "@/types/app-write.types";
import { cleanPath } from "@/utils";
import { Query } from "node-appwrite";

export const DetailedCategoriesSection = async () => {
  const categoriesList = await listCategories([Query.orderDesc("$createdAt")]);

  return (
    <ErrorBoundary>
      <section className="flex flex-col gap-8 py-6 md:py-16 max-xl:px-4">
        {categoriesList.status == 200 &&
          categoriesList.data?.map((category: CategoryDocument) => (
            <ProductsSliderSection
              key={category.$id}
              category={category}
              sectionHeading={cleanPath(category.name)}
            />
          ))}
      </section>
    </ErrorBoundary>
  );
};

export default DetailedCategoriesSection;
