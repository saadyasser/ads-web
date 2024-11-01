import { Card, ErrorBoundary, Footer, Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="py-[70px] xl:py-[83px] bg-primary-light !overflow-y-auto">
      <Navbar className="bg-white" />
      <main className="flex items-center justify-center pt-[89px] 2xl:pt-[109px]  dark:bg-background-dark">
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
