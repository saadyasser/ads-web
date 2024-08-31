"use server";

import {
  CATEGORIES_IMAGES_BUCKET,
  ENDPOINT,
  PROJECT_ID,
} from "@/appwrite/config";
import { db, store } from "@/appwrite/database";
import { CategoryType } from "@/types/app-write.types";
import { parseStringify } from "@/utils";
import { Query } from "appwrite";
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
      }
    }
  } catch (err) {
    console.error(err);
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
    return parseStringify({
      status: 500,
      message: `Error creating category ${err}`,
    });
  }
};

export const listCategories = async (queries?: string[]) => {
  const categories = await db.categories.list(queries && queries);

  return parseStringify({
    status: 200,
    message: "Category list",
    data: categories.documents,
  });
};
export const getCategory = async (id: string) => {
  try {
    const category = await db.categories.get(id);
    return parseStringify({
      status: 200,
      message: "got the category",
      data: category,
    });
  } catch (err) {
    console.error(err);
    return parseStringify({
      status: 500,
      message: `problem getting the category : ${err}`,
      data: null,
    });
  }
};
export const getCategoryIdByName = async (categoryName: string) => {
  try {
    const response = await db.categories.list([
      Query.equal("name", categoryName),
    ]);

    if (response.documents.length === 0) {
      return parseStringify({
        status: 404,
        message: "Category Not found",
      });
    }

    const category = response.documents[0];
    return parseStringify(category.$id);
  } catch (error) {
    console.error("Failed to get category ID:", error);
    return parseStringify({
      status: 404,
      message: "Failed to get category ID",
    });
  }
};
export const updateCategory = async (id: string, payload: any) => {
  try {
    if (!id || !payload) throw Error;

    const updatedCategory = await db.categories.update(payload, id);
    return parseStringify({
      status: 200,
      message: "Category updated successfully",
      data: updatedCategory.documents,
    });
  } catch (err) {
    console.error(err);
    return parseStringify({
      status: 500,
      message: `problem updating the category : ${err}`,
      data: null,
    });
  }
};
export const deleteCategory = async (id: string) => {
  try {
    const category = await db.categories.delete(id);
    return parseStringify({
      status: 200,
      message: "category deleted successfully",
    });
  } catch (err) {
    console.error(err);
    return parseStringify({
      status: 500,
      message: `Error deleting the category : ${err}`,
    });
  }
};
