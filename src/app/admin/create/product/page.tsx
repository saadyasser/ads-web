import React from "react";
import { CreateProductForm } from "@/components/admin";
import { listCategories } from "@/lib/actions";

const CreateProductPage = async () => {
  const { documents } = await listCategories();

  return (
    <div>
      <CreateProductForm categoriesList={documents} />
    </div>
  );
};

export default CreateProductPage;
