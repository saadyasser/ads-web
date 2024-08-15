"use server";

import { db } from "@/appwrite/database";
import { parseStringify } from "@/utils";

export const createCategory = async () => {
  return parseStringify({ status: 200, message: "Category created" });
  // await db.categories.create()
};

// export const updateCategory = async (id, payload) => {}
// export const deleteCategory = async (id) =>{}
export const listCategories = async (queries?: string[]) => {
  const categories = await db.categories.list(queries && queries);

  return parseStringify(categories);
};
