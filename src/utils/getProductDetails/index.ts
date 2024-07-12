import { ProductType } from "@/types";

export const fetchProductData = async (
  productId: string | number
): Promise<ProductType | null> => {
  try {
    const response = await fetch(`/api/products/${productId}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
