import React from "react";
import { CreateProductForm } from "@/components/admin";
// import { listCategories } from "@/lib/actions";

const CreateProductPage = async () => {
  // const { data: categoriesList } = await listCategories();
  const { data: categoriesList } = { data: [] };
  return (
    <div>
      <CreateProductForm categoriesList={categoriesList} />
    </div>
  );
};

export default CreateProductPage;
