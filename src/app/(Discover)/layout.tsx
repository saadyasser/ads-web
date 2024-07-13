import { Breadcrumb, Container, CopyCurrentPathButton } from "@/components";

export default function DiscoverLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    category: string;
    item: string;
  };
}) {
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  return (
    <>
      <Container className="flex items-center justify-between max-md:px-4">
        <Breadcrumb homeElement="Home" capitalizeLinks={true} />
        <div className="flex gap-1">
          <CopyCurrentPathButton />
        </div>
      </Container>
      <Container className="relative py-4 md:py-8 max-md:px-4">
        {children}
      </Container>
    </>
  );
}
