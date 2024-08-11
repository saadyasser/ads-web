import {
  CATEGORIES_COLLECTION_ID,
  DATABASE_ID,
  PRODUCTS_COLLECTION_ID,
  databases,
} from "./config";
import { ID, Models } from "appwrite";

interface CollectionConfig {
  databaseId: string;
  id: string;
  name: keyof typeof db;
}

interface DocumentData {
  [name: string]: any;
}

// Type-safe collection names
type CollectionNames = "categories" | "products";

const collections: CollectionConfig[] = [
  {
    databaseId: DATABASE_ID!,
    id: CATEGORIES_COLLECTION_ID!,
    name: "categories",
  },
  {
    databaseId: DATABASE_ID!,
    id: PRODUCTS_COLLECTION_ID!,
    name: "products",
  },
];

const db: Record<
  CollectionNames,
  {
    list: (queries?: string[]) => Promise<Models.DocumentList<any>>;
    create: (
      payload: DocumentData,
      id?: string,
      permissions?: string[]
    ) => Promise<Models.Document>;
    update: (payload: DocumentData, id: string) => Promise<Models.Document>;
    get: (id: string) => Promise<Models.Document>;
    delete: (id: string) => Promise<{}>;
  }
> = {} as any;

collections.forEach((col) => {
  db[col.name] = {
    list: (queries) => databases.listDocuments(col.databaseId, col.id, queries),
    create: (payload, id = ID.unique(), permissions) =>
      databases.createDocument(
        col.databaseId,
        col.id,
        id,
        payload,
        permissions
      ),
    update: (payload, id) =>
      databases.updateDocument(col.databaseId, col.id, id, payload),
    get: (id) => databases.getDocument(col.databaseId, col.id, id),
    delete: (id) => databases.deleteDocument(col.databaseId, col.id, id),
  };
});

export { db };
