"use server";

import { ENDPOINT, PRODUCT_BUCKET_ID, PROJECT_ID } from "@/appwrite/config";
import { db, store } from "@/appwrite/database";
import { ProductType } from "@/types/app-write.types";
import { parseStringify } from "@/utils";
import { Query } from "appwrite";
import { revalidatePath } from "next/cache";
import { InputFile } from "node-appwrite";

export const uploadProductImages = async (images: { file: FormData }[]) => {
  const imageIds: string[] = [];

  for (const image of images) {
    try {
      if (image.file) {
        const inputFile =
          image &&
          InputFile.fromBlob(
            image.file?.get("blobFile") as Blob,
            image.file?.get("fileName") as string
          );
        const uploadedFile = await store.productsImages.upload(inputFile);

        if (uploadedFile) {
          imageIds.push(uploadedFile.$id);
        }
      }
    } catch (err) {
      console.log(err);
      return parseStringify({
        status: 500,
        message: `problem uploading images ${err}`,
        data: null,
      });
    }
  }
  return parseStringify(imageIds);
};

export const createProduct = async ({ images, ...product }: ProductType) => {
  try {
    // upload images
    const files = await uploadProductImages(images);

    // create product
    if (!files) {
      return parseStringify({
        status: 500,
        message: "problem creating the product : image uploading problem",
        data: null,
      });
    }
    const productData = await db.products.create({
      imagesId: files.map((fileId: string) => fileId),
      imagesUrl: files.map(
        (fileId: string) =>
          `${ENDPOINT}/storage/buckets/${PRODUCT_BUCKET_ID}/files/${fileId}/view??project=${PROJECT_ID}`
      ),
      ...product,
    });

    revalidatePath("/admin/create/product");
    return parseStringify({
      status: 200,
      message: "product created",
      data: productData,
    });
  } catch (err) {
    console.log(err);
    return parseStringify({
      status: 500,
      message: `problem creating the product : ${err}`,
      data: null,
    });
  }
};

export const updateProduct = async (id: string, product: any) => {
  try {
    if (!id || !product) throw Error;

    const updatedProduct = await db.products.update(product, id);
    return parseStringify({
      status: 200,
      message: "product updated successfully",
      data: updatedProduct.documents,
    });
  } catch (err) {
    console.error(err);
    return parseStringify({
      status: 500,
      message: `problem updating the product : ${err}`,
      data: null,
    });
  }
};

export const listProducts = async (limit: number = 1000) => {
  try {
    const products = await db.products.list([
      Query.orderDesc("$createdAt"),
      Query.limit(limit),
    ]);
    return parseStringify({
      status: 200,
      message: "products list",
      data: products.documents,
    });
  } catch (err) {
    console.error(err);
    return parseStringify({
      status: 500,
      message: `problem listing products : ${err}`,
      data: null,
    });
  }
};

export const listProductsByCategory = async (categoryId: string) => {
  try {
    const products = await db.products.list([
      Query.limit(1000),
      Query.orderDesc("$createdAt"),
    ]);
    const categoryProducts = products.documents.filter(
      (product) => product?.category?.$id === categoryId
    );

    return parseStringify({
      status: 200,
      message: "products list",
      data: categoryProducts,
    });
  } catch (err) {
    console.error("Failed to list products:", err);
    return parseStringify({
      status: 500,
      message: `problem listing products : ${err}`,
      data: null,
    });
  }
};

export const getProduct = async (id: string) => {
  try {
    const product = await db.products.get(id);
    return parseStringify({
      status: 200,
      message: "got the product",
      data: product,
    });
  } catch (err) {
    console.error(err);
    return parseStringify({
      status: 500,
      message: `problem getting the product : ${err}`,
      data: null,
    });
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const product = await db.products.delete(id);
    return parseStringify({
      status: 200,
      message: "products deleted successfully",
    });
  } catch (err) {
    console.error(err);
    return parseStringify({
      status: 500,
      message: `Error deleting the product : ${err}`,
    });
  }
};
