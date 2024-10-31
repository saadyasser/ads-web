import { Card, ErrorBoundary, Footer, Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="pt-[70px] xl:pt-[83px]">
      <Navbar className="bg-white" />
      <main className="flex justify-center items-center xl:min-h-[calc(100vh-83px)] min-h-[calc(100vh-70px)]   py-6 lg:py-12  dark:bg-background-dark">
        <ErrorBoundary>
          {" "}
          <section className="w-full max-w-[486px] px-6 md:px-0">
            <Card className="block rounded-xl  p-4 border-[1px] border-[#E7E9ED] md:rounded-2xl  md:p-6  lg:p-4 2xl:p-8 ">
              {children}
            </Card>
          </section>
        </ErrorBoundary>
      </main>
    </body>
  );
}
