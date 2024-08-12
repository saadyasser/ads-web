"use server";

import { db, store } from "@/appwrite/database";
import { parseStringify } from "@/utils";
import { ID } from "node-appwrite";
import { InputFile } from "node-appwrite";
import { Readable } from "stream";

export const uploadProductImages = async ({ images }: { images: FormData }) => {
  const imageIds: string[] = [];
  try {
    let file;
    if (images) {
      const inputFile =
        images &&
        InputFile.fromBlob(
          images?.get("blobFile") as Blob,
          images?.get("fileName") as string
        );
      console.log("🚀 ~ uploadProductImages ~ inputFile:", inputFile);

      file = await store.productsImages.upload(inputFile);
    }

    return parseStringify({
      status: 200,
      message: "Category created",
      images: imageIds,
    });
  } catch (err) {
    console.log(err);
  }
};
