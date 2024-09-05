import ProductDetails from "@/features/ProductDetails";
import { getProduct, listProducts } from "@/lib/actions/products.actions";
import { ProductDocument } from "@/types/app-write.types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

const fetchProductData = cache(
  async (productId: string) => await getProduct(productId)
);
export async function generateStaticParams() {
  const datalist = await listProducts();
  return datalist?.data.map((product: ProductDocument) => product.$id);
}
async function getProductData(productId: string) {
  const product = await fetchProductData(productId);
  if (product.status !== 200) notFound();

  return {
    name: product?.data.title,
    description: `A beautiful ${product?.data.title} designed to enhance your UI and user experience.`,
    images: product?.data.imagesUrl,
  };
}

export async function generateMetadata({
  params,
}: {
  params: { itemId: string };
}): Promise<Metadata> {
  const product = await getProductData(params.itemId);

  return {
    title: `${product.name} | Azaiza Design Studio`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Azaiza Design Studio`,
      description: product.description,
      images: product.images,
    },
    twitter: {
      title: `${product.name} | Azaiza Design Studio`,
      description: product.description,
      images: product.images,
    },
  };
}

export default async function Page({ params }: { params: { itemId: string } }) {
  const productId = params.itemId;
  const productData = await fetchProductData(productId);
  if (productData.status !== 200) notFound();
  return <ProductDetails product={productData?.data} />;
}
