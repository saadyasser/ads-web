import React from "react";
import Link from "next/link";
import { H1, Button } from "@/components";
import {
  deleteProduct,
  getProduct,
  listProducts,
  updateProduct,
} from "@/lib/actions/products.actions";

const AdminPage = async () => {
  return (
    <div>
      <H1 className="w-full my-4 text-center">Hi Admin 👋</H1>
      <div className="flex items-center justify-center gap-4 my-5">
        <Link role="button" href="/admin/create/product">
          <Button>Create new Product</Button>
        </Link>
        <Link href="/admin/create/category">
          <Button>Create new Category</Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
