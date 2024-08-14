import { Models } from "node-appwrite";

export interface Product extends Models.Document {}

export interface Category extends Models.Document {
  name: string;
  imageUrl: string;
  description?: string;
}
