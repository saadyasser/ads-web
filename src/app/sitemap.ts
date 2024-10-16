import { listCategories } from "@/lib/actions";
import { listProducts } from "@/lib/actions/products.actions";
import { CategoryDocument, ProductDocument } from "@/types/app-write.types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseRoute = process.env.NEXT_PUBLIC_BASE_URL;
  const categories = await listCategories();
  const categoriesEntries: MetadataRoute.Sitemap = categories?.data.map(
    (category: CategoryDocument) => ({
      url: `${baseRoute}/${category.name}`,
      lastModified: new Date(category.$updatedAt),
    })
  );
  const products = await listProducts(100);
  const productsEntries: MetadataRoute.Sitemap = products?.data.map(
    (product: ProductDocument) => ({
      url: `${baseRoute}/${product?.category?.name}/${product?.$id}`,
      lastModified: new Date(product.$updatedAt),
    })
  );
  return [
    {
      url: `${baseRoute}/`,
    },
    ...categoriesEntries,
    ...productsEntries,
  ];
}
