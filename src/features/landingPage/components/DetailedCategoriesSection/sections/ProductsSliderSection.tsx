import { Divider, ErrorBoundary, GridWithSlider } from "@/components";
import { getCategoryIdByName } from "@/lib/actions";
import { listProductsByCategory } from "@/lib/actions/products.actions";

export const ProductsSliderSection = async ({
  category,
  sectionHeading,
}: {
  category: string;
  sectionHeading: string;
}) => {
  const categoryId = await getCategoryIdByName(category);
  const datalist = categoryId && (await listProductsByCategory(categoryId));
  if (datalist?.data?.length == 0) return;
  return (
    <ErrorBoundary>
      <GridWithSlider
        rewind
        navigation
        gridData={datalist.data}
        heading={{ label: sectionHeading, value: category }}
      />
      <Divider />
    </ErrorBoundary>
  );
};

export default ProductsSliderSection;
