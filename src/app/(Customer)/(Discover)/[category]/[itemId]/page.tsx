import ProductDetails from "@/features/ProductDetails";

export default function Page({ params }: { params: { itemId: string } }) {
  const productId = params.itemId;

  return <ProductDetails productId={productId} />;
}
