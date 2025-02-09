// import {
//   CATEGORIES_COLLECTION_ID,
//   DATABASE_ID,
//   PRODUCTS_COLLECTION_ID,
//   PRODUCT_BUCKET_ID,
//   CATEGORIES_IMAGES_BUCKET,
//   databases,
//   storage,
//   PRODUCT_FILES_BUCKET_ID,
// } from "./config";
// import { ID, Models } from "node-appwrite";

// interface CollectionConfig {
//   databaseId: string;
//   id: string;
//   name: keyof typeof db;
// }

// interface BucketConfig {
//   bucketId: string;
//   name: keyof typeof store;
// }

// interface DocumentData {
//   [name: string]: any;
// }

// // Type-safe collection names
// type CollectionNames = "categories" | "products";

// const collections: CollectionConfig[] = [
//   {
//     databaseId: DATABASE_ID!,
//     id: CATEGORIES_COLLECTION_ID!,
//     name: "categories",
//   },
//   {
//     databaseId: DATABASE_ID!,
//     id: PRODUCTS_COLLECTION_ID!,
//     name: "products",
//   },
// ];

// const db: Record<
//   CollectionNames,
//   {
//     list: (queries?: string[]) => Promise<Models.DocumentList<any>>;
//     create: (
//       payload: DocumentData,
//       id?: string,
//       permissions?: string[]
//     ) => Promise<Models.Document>;
//     update: (payload: DocumentData, id: string) => Promise<Models.Document>;
//     get: (id: string) => Promise<Models.Document>;
//     delete: (id: string) => Promise<{}>;
//   }
// > = {} as any;

// collections.forEach((col) => {
//   db[col.name] = {
//     list: (queries = []) =>
//       databases.listDocuments(col.databaseId, col.id, queries),
//     create: (payload, id = ID.unique(), permissions) =>
//       databases.createDocument(
//         col.databaseId,
//         col.id,
//         id,
//         payload,
//         permissions
//       ),
//     update: (payload, id) =>
//       databases.updateDocument(col.databaseId, col.id, id, payload),
//     get: (id) => databases.getDocument(col.databaseId, col.id, id),
//     delete: (id) => databases.deleteDocument(col.databaseId, col.id, id),
//   };
// });

// //storage management
// const store = {} as any;

// const buckets: BucketConfig[] = [
//   {
//     bucketId: CATEGORIES_IMAGES_BUCKET!,
//     name: "categoriesImages",
//   },
//   {
//     bucketId: PRODUCT_BUCKET_ID!,
//     name: "productsImages",
//   },
//   {
//     bucketId: PRODUCT_FILES_BUCKET_ID!,
//     name: "productsFiles",
//   },
// ];

// buckets.forEach((bucket) => {
//   store[bucket.name] = {
//     upload: (file: File, id = ID.unique()) =>
//       storage.createFile(bucket.bucketId, id, file),
//   };
// });

// export { db, store };
