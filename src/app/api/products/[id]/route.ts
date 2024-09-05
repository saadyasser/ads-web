import products from "@/data/db/products";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find((prod) => prod.id === parseInt(params.id));
  if (!product) {
    return new Response("Product not found", { status: 404 });
  }
  return new Response(JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  });
}
