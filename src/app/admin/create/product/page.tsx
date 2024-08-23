import React from "react";
import { CreateProductForm } from "@/components/admin";
import { listCategories } from "@/lib/actions";
import { listProductsByCategory } from "@/lib/actions/products.actions";

const CreateProductPage = async () => {
  const { data: categoriesList } = await listCategories();
  // console.log("🚀 ~ CreateProductPage ~ categoriesList:", categoriesList);
  const products = await listProductsByCategory("66c78df80022c19b6a74");
  console.log("🚀 ~ CreateProductPage ~ products:", products);

  return (
    <div>
      <CreateProductForm categoriesList={categoriesList} />
    </div>
  );
};

export default CreateProductPage;
