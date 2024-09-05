import { Divider, ErrorBoundary, GridWithSlider } from "@/components";
import { listProductsByCategory } from "@/lib/actions/products.actions";

export const ProductsSliderSection = async ({
  category,
  sectionHeading,
}: {
  category: string;
  sectionHeading: string;
}) => {
  const datalist = category && (await listProductsByCategory(category));
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
