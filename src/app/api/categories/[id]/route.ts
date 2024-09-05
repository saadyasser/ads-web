import categories from "@/data/db/categories";
import products from "@/data/db/products";
import { CategoryType } from "@/types";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const category = categories.find((cat) => cat.id === params.id);
  if (!category) {
    return new Response("Category not found", { status: 404 });
  }
  const categoryProducts = products.filter((product) =>
    category.products.includes(product.id)
  );
  const categoryWithProducts = {
    ...category,
    products: categoryProducts,
  } as CategoryType;
  return NextResponse.json(categoryWithProducts || {});
}
