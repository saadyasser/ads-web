import { GridWithSlider } from "@/components";
import { recentComponentsData } from "@/features/data";
import { getCategoryIdByName } from "@/lib/actions";
import { listProductsByCategory } from "@/lib/actions/products.actions";

export const RecentComponentsSection = async () => {
  const categoryId = await getCategoryIdByName("recent_components");
  const recentProductsList = await listProductsByCategory(categoryId);
  return (
    <>
      <GridWithSlider
        rewind
        navigation
        gridData={recentProductsList.data && recentProductsList.data}
        heading={{ label: "Recent Components", value: "recent_components" }}
      />
    </>
  );
};

export default RecentComponentsSection;
