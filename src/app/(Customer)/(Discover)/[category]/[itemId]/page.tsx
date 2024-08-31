import ProductDetails from "@/features/ProductDetails";
import { getProduct } from "@/lib/actions/products.actions";

export default async function Page({ params }: { params: { itemId: string } }) {
  const productId = params.itemId;
  const productData = await getProduct(productId);

  return <ProductDetails product={productData?.data} loading={true} />;
}
