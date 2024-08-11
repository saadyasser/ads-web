import { Client, Databases } from "appwrite";
const client = new Client();

export const {
  APPWRITE_ENDPOINT: ENDPOINT,
  APPWRITE_PROJECT_ID: PROJECT_ID,
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_CATEGORIES_COLLECTION_ID: CATEGORIES_COLLECTION_ID,
  APPWRITE_PRODUCTS_COLLECTION_ID: PRODUCTS_COLLECTION_ID,
} = process.env!;

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!);

const databases = new Databases(client);

export { client, databases };
