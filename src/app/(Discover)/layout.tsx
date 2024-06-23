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
      <p>testtt</p>
      {children}
    </section>
  );
};

export default DiscoverLayout;
