"use server";

import {
  CATEGORIES_IMAGES_BUCKET,
  ENDPOINT,
  PROJECT_ID,
} from "@/appwrite/config";
import { db, store } from "@/appwrite/database";
import { CategoryType } from "@/types/app-write.types";
import { parseStringify } from "@/utils";
import { revalidatePath } from "next/cache";
import { InputFile } from "node-appwrite";

export const uploadCategoryImages = async (image: FormData) => {
  const imageIds: string[] = [];

  try {
    if (image) {
      const inputFile =
        image &&
        InputFile.fromBlob(
          image?.get("blobFile") as Blob,
          image?.get("fileName") as string
        );
      const uploadedFile = await store.productsImages.upload(inputFile);

      if (uploadedFile) {
        imageIds.push(uploadedFile.$id);

        console.log("success", uploadedFile);
      }
    }
  } catch (err) {
    console.log(err);
  }

  return parseStringify(imageIds[0]);
};

export const createCategory = async (category: CategoryType) => {
  try {
    const uploadedImageId = await uploadCategoryImages(category.image);
    if (uploadedImageId) {
      const categoryData = await db.categories.create({
        imageId: uploadedImageId,
        imageUrl: `${ENDPOINT}/storage/buckets/${CATEGORIES_IMAGES_BUCKET}/files/${uploadedImageId}/view??project=${PROJECT_ID}`,
        name: category.name,
        description: category.description,
      });

      revalidatePath("/admin/create/category");
      return parseStringify({
        status: 200,
        message: "Category created",
        data: categoryData,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// export const updateCategory = async (id, payload) => {}
// export const deleteCategory = async (id) =>{}
export const listCategories = async (queries?: string[]) => {
  const categories = await db.categories.list(queries && queries);

  return parseStringify(categories);
};
