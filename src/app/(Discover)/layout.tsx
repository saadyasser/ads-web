import { Breadcrumb } from "@/components";

export const DiscoverLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    category: string;
    item: string;
  };
}) => {
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params);
  return (
    <section>
      <div className="flex items-center justify-between">
        <Breadcrumb homeElement="Home" capitalizeLinks={true} />
      </div>
      {children}
    </section>
  );
};

export default DiscoverLayout;
