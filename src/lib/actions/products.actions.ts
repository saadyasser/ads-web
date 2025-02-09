// "use server";
// @ts-ignore
import { ProductType } from "@/types/app-write.types";

// import {
//   ENDPOINT,
//   PRODUCT_BUCKET_ID,
//   PRODUCT_FILES_BUCKET_ID,
//   PROJECT_ID,
// } from "@/appwrite/config";
// import { db, store } from "@/appwrite/database";
// import { ProductType } from "@/types/app-write.types";
// import { parseStringify } from "@/utils";
// import { revalidatePath } from "next/cache";
// import { Query, InputFile } from "node-appwrite";

export const uploadProductImages = async (images: { file: FormData }[]) => null;
// export const uploadProductImages = async (images: { file: FormData }[]) => {
//   const imageIds: string[] = [];

//   for (const image of images) {
//     try {
//       if (image.file) {
//         const inputFile =
//           image &&
//           InputFile.fromBlob(
//             image.file?.get("blobFile") as Blob,
//             image.file?.get("fileName") as string
//           );
//         const uploadedFile = await store.productsImages.upload(inputFile);

//         if (uploadedFile) {
//           imageIds.push(uploadedFile.$id);
//         }
//       }
//     } catch (err) {
//       console.error(err);
//       return parseStringify({
//         status: 500,
//         message: `problem uploading images ${err}`,
//         data: null,
//       });
//     }
//   }
//   return parseStringify(imageIds);
// };

export const uploadProductsFiles = async (files: { file: FormData }[]) => null;
// export const uploadProductsFiles = async (files: { file: FormData }[]) => {
//   const filesId: string[] = [];

//   for (const file of files) {
//     try {
//       if (file.file) {
//         const inputFile =
//           file &&
//           InputFile.fromBlob(
//             file.file?.get("blobFile") as Blob,
//             file.file?.get("fileName") as string
//           );
//         const uploadedFile = await store.productsFiles.upload(inputFile);

//         if (uploadedFile) {
//           filesId.push(uploadedFile.$id);
//         }
//       }
//     } catch (err) {
//       console.error(err);
//       return parseStringify({
//         status: 500,
//         message: `problem uploading files ${err}`,
//         data: null,
//       });
//     }
//   }
//   return parseStringify(filesId);
// };

export const createProduct = async ({
  images,
  files,
  ...product
}: ProductType) => null;
// export const createProduct = async ({
//   images,
//   files,
//   ...product
// }: ProductType) => {
//   try {
//     // upload images
//     const imagesUploadResponse = await uploadProductImages(images);
//     const filesUploadResponse = await uploadProductsFiles(files);
//     // create product
//     if (!imagesUploadResponse || !filesUploadResponse) {
//       return parseStringify({
//         status: 500,
//         message: "problem creating the product : image uploading problem",
//         data: null,
//       });
//     }
//     const { productId, ...restOfProduct } = product;
//     const productData = await db.products.create(
//       {
//         imagesId: imagesUploadResponse.map((fileId: string) => fileId),
//         imagesUrl: imagesUploadResponse.map(
//           (fileId: string) =>
//             `${ENDPOINT}/storage/buckets/${PRODUCT_BUCKET_ID}/files/${fileId}/view??project=${PROJECT_ID}`
//         ),
//         productFiles: filesUploadResponse.map(
//           (fileId: string) =>
//             `${ENDPOINT}/storage/buckets/${PRODUCT_FILES_BUCKET_ID}/files/${fileId}/view??project=${PROJECT_ID}`
//         ),
//         ...restOfProduct,
//       },
//       product?.productId
//     );

//     revalidatePath("/admin/create/product");
//     return parseStringify({
//       status: 200,
//       message: "product created",
//       data: productData,
//     });
//   } catch (err) {
//     console.error(err);
//     return parseStringify({
//       status: 500,
//       message: `problem creating the product : ${err}`,
//       data: null,
//     });
//   }
// };

export const updateProduct = async (id: string, product: any) => null;
// export const updateProduct = async (id: string, product: any) => {
//   try {
//     if (!id || !product) throw Error;

//     const updatedProduct = await db.products.update(product, id);
//     return parseStringify({
//       status: 200,
//       message: "product updated successfully",
//       data: updatedProduct,
//     });
//   } catch (err) {
//     console.error(err);
//     return parseStringify({
//       status: 500,
//       message: `problem updating the product : ${err}`,
//       data: null,
//     });
//   }
// };

export const listProducts = async (limit: number = 1000) => null;
// export const listProducts = async (limit: number = 1000) => {
//   try {
//     const products = await db.products.list([
//       Query.orderDesc("$createdAt"),
//       Query.limit(limit),
//     ]);
//     if (products?.documents.length > 0) {
//       return parseStringify({
//         status: 200,
//         message: "products list",
//         data: products.documents,
//       });
//     } else {
//       return parseStringify({
//         status: 404,
//         message: "No products found ",
//         data: null,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     return parseStringify({
//       status: 500,
//       message: `problem listing products : ${err}`,
//       data: null,
//     });
//   }
// };

export const listProductsByCategory = async (categoryId: string) => null;
// export const listProductsByCategory = async (categoryId: string) => {
//   try {
//     const products = await db.products.list([
//       Query.limit(1000),
//       Query.orderDesc("$createdAt"),
//     ]);
//     let categoryProducts;
//     if (products.documents.length > 0) {
//       categoryProducts = products.documents.filter(
//         (product) => product?.category?.$id === categoryId
//       );
//       if (categoryProducts.length > 0) {
//         return parseStringify({
//           status: 200,
//           message: "products list",
//           data: categoryProducts,
//         });
//       } else {
//         return parseStringify({
//           status: 404,
//           message: "no products found inside this category",
//           data: null,
//         });
//       }
//     } else {
//       return parseStringify({
//         status: 404,
//         message: "no products found",
//         data: null,
//       });
//     }
//   } catch (err) {
//     console.error("Failed to list products:", err);
//     return parseStringify({
//       status: 500,
//       message: `problem listing products : ${err}`,
//       data: null,
//     });
//   }
// };

export const getProduct = async (id: string) => null;
// export const getProduct = async (id: string) => {
//   try {
//     const product = await db.products.get(id);
//     return parseStringify({
//       status: 200,
//       message: "got the product",
//       data: product,
//     });
//   } catch (err) {
//     console.error(err);
//     return parseStringify({
//       status: 500,
//       message: `problem getting the product : ${err}`,
//       data: null,
//     });
//   }
// };

export const deleteProduct = async (id: string) => null;
// export const deleteProduct = async (id: string) => {
//   try {
//     const product = await db.products.delete(id);
//     return parseStringify({
//       status: 200,
//       message: "products deleted successfully",
//     });
//   } catch (err) {
//     console.error(err);
//     return parseStringify({
//       status: 500,
//       message: `Error deleting the product : ${err}`,
//     });
//   }
// };
