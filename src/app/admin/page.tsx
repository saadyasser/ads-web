import React from "react";
import { CreateProductForm } from "@/components/admin";
import { listCategories } from "@/lib/actions";

const AdminPage = async () => {
  const categoriesList = await listCategories();
  // console.log("🚀 ~ AdminPage ~ categoriesList:", categoriesList);

  return (
    <div>
      <CreateProductForm categoriesList={categoriesList.documents} />
    </div>
  );
};

export default AdminPage;
