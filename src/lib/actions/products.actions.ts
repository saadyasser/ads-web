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
          console.log("success", uploadedFile);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  return parseStringify(imageIds);
};

export const createProduct = async ({ images, ...product }: ProductType) => {
  try {
    // upload images
    const files = await uploadProductImages(images);

    // create product
    if (files) {
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
    }
    return parseStringify({
      status: 500,
      message: "problem uploading images",
      data: null,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (id: string, product: any) => {
  try {
    if (!product) throw Error;

    const updatedProduct = await db.products.update(product, id);
    console.log("🚀 ~ updateProduct ~ updatedProduct:", updatedProduct);
    return parseStringify(updateProduct);
  } catch (err) {
    console.error(err);
  }
};

export const listProducts = async () => {
  try {
    const products = await db.products.list([Query.orderDesc("$createdAt")]);
    return parseStringify(products);
  } catch (err) {
    console.error(err);
  }
};

export const getProduct = async (id: string) => {
  try {
    const product = await db.products.get(id);
    return parseStringify(product);
  } catch (err) {
    console.error(err);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const product = await db.products.delete(id);
    return parseStringify(product);
  } catch (err) {
    console.error(err);
  }
};
