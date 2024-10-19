// import {
//   getCategory,
//   getCategoryIdByName,
//   listCategories,
// } from "@/lib/actions";
// import { listProductsByCategory } from "@/lib/actions/products.actions";
// import CategoryDetails from "@/features/categoryDetails";
// import { Metadata } from "next";
// import { cleanPath } from "@/utils";
// import { cache } from "react";
// import { CategoryDocument } from "@/types/app-write.types";
// import { notFound } from "next/navigation";
import CategoryDetails from "@/features/categoryDetails";

// const getCategoryId = cache(
//   async (categoryName: string) => await getCategoryIdByName(categoryName)
// );

// export async function generateStaticParams() {
//   const datalist = await listCategories();
//   return datalist?.data.map((category: CategoryDocument) => category.name);
// }

// async function getCategoryData(category: string) {
//   const categoryId = await getCategoryId(category);
//   if (categoryId.status !== 200 || categoryId == undefined) return notFound();
//   const categoryData = await getCategory(categoryId.data);
//   const categoryName = cleanPath(categoryData?.data.name);
//   return {
//     name: categoryName,
//     description: `Explore our ${categoryData?.data.name} collection of handmade UI components and design elements.`,
//   };
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { category: string };
// }): Promise<Metadata> {
//   const category = await getCategoryData(params.category);

//   return {
//     title: `${category?.name} | Azaiza Design Studio `,
//     description: category?.description,
//     openGraph: {
//       title: `${category?.name} | Azaiza Design Studio`,
//       description: category?.description,
//     },
//     twitter: {
//       title: `${category?.name} | Azaiza Design Studio`,
//       description: category?.description,
//     },
//   };
// }
export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  // const categoryName = params.category;

  // const categoryId = await getCategoryId(categoryName);
  // if (categoryId.status !== 200 || categoryId == undefined) notFound();
  // const datalist = await listProductsByCategory(categoryId.data);
  const datalist = { data: [] };

  return <CategoryDetails categoryProducts={datalist.data} />;
}
