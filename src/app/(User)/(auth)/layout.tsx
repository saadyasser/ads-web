import { Card, ErrorBoundary, Footer, Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="pt-[85px] md:pt-[89px]  lg:pt-[93px] xl:pt-[109px] bg-primary-light !overflow-y-auto min-h-screen flex items-center justify-center !overflow-auto">
      <Navbar className="bg-white" />
      <main className="flex items-center justify-center py-4">
        <ErrorBoundary>
          <section className="w-full max-w-[486px] px-6 md:px-0">
            <Card className="block p-4 border border-[#E7E9ED] rounded-xl md:rounded-2xl md:p-6 lg:p-4 2xl:p-8">
              {children}
            </Card>
          </section>
        </ErrorBoundary>
      </main>
    </body>
  );
}
