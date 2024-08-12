"use server";

import { db } from "@/appwrite/database";
import { parseStringify } from "@/utils";

export const createCategory = async () => {
  return parseStringify({ status: 200, message: "Category created" });
  // await db.categories.create()
};
