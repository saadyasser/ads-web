import { getCategoryIdByName } from "@/lib/actions";
import { listProductsByCategory } from "@/lib/actions/products.actions";
import CategoryDetails from "@/features/categoryDetails";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const categoryName = params.category;
  let isLoading;
  isLoading = true;
  const categoryId = await getCategoryIdByName(categoryName);
  const datalist =
    categoryId &&
    (await listProductsByCategory(categoryId).finally(() => {
      isLoading = false;
    }));

  return (
    <CategoryDetails categoryProducts={datalist.data} loading={isLoading} />
  );
}
