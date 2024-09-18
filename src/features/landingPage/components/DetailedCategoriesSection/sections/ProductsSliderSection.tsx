import { Divider, ErrorBoundary, GridWithSlider } from "@/components";
import { listProductsByCategory } from "@/lib/actions/products.actions";
import { CategoryDocument } from "@/types/app-write.types";

export const ProductsSliderSection = async ({
  category,
  sectionHeading,
}: {
  category: CategoryDocument;
  sectionHeading: string;
}) => {
  const datalist = category && (await listProductsByCategory(category.$id));
  if (datalist?.status !== 200) return;
  return (
    <ErrorBoundary>
      <GridWithSlider
        rewind
        navigation
        gridData={datalist.data}
        heading={{ label: sectionHeading, value: category.name }}
      />
      <Divider />
    </ErrorBoundary>
  );
};

export default ProductsSliderSection;
