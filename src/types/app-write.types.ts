import { Models } from "node-appwrite";

export interface ProductDocument extends Models.Document {
  title: string;
  description: string;
  specifications?: string;
  price: string;
  imagesId: string[];
  imagesUrl: string[];
}

export interface Category extends Models.Document {
  name: string;
  imageUrl: string;
  description?: string;
}

export type ProductType = {
  title: string;
  description: string;
  specifications?: string;
  price: string;
  images: { file: FormData }[];
};
