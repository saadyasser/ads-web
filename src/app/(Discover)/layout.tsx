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
    <section>
      <Container className="flex items-center justify-between">
        <Breadcrumb homeElement="Home" capitalizeLinks={true} />
        <div className="flex gap-1">
          <CopyCurrentPathButton />
        </div>
      </Container>
      <Container className="py-4 md:py-8">{children}</Container>
    </section>
  );
}
