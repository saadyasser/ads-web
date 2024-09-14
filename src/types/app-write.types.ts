import { Models } from "node-appwrite";

export interface ProductDocument extends Models.Document {
  title: string;
  description: string;
  specifications?: string;
  price: string;
  imagesId: string[];
  imagesUrl: string[];
  category: CategoryDocument;
  productFiles: string[];
  figmaPreview: string;
}
export type ProductType = {
  title: string;
  description: string;
  specifications?: string;
  productId?: string;
  price: string;
  images: { file: FormData }[];
  files: { file: FormData }[];
};

export interface CategoryDocument extends Models.Document {
  name: string;
  imageUrl: string;
  description?: string;
}
export type CategoryType = {
  name: string;
  image: FormData;
  description?: string;
};
