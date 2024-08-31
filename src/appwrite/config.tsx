// import { Client, Databases, Storage } from "appwrite";
import * as sdk from "node-appwrite";

const client = new sdk.Client();

export const {
  APPWRITE_ENDPOINT: ENDPOINT,
  APPWRITE_PROJECT_ID: PROJECT_ID,
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_CATEGORIES_COLLECTION_ID: CATEGORIES_COLLECTION_ID,
  APPWRITE_PRODUCTS_COLLECTION_ID: PRODUCTS_COLLECTION_ID,
  APPWRITE_PRODUCT_IMAGES_BUCKET_ID: PRODUCT_BUCKET_ID,
  APPWRITE_CATEGORIES_IMAGES_BUCKET_ID: CATEGORIES_IMAGES_BUCKET,
  APPWRITE_API_KEY,
} = process.env!;

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(APPWRITE_API_KEY!);

const databases = new sdk.Databases(client);
const storage = new sdk.Storage(client);

export { client, databases, storage };
