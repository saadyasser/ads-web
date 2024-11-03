import { Card, ErrorBoundary, Footer, Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar className="bg-white" />
      <main className="flex justify-center items-center xl:min-h-[calc(100vh-83px)] min-h-[calc(100vh-70px)]   py-6   dark:bg-background-dark">
        <ErrorBoundary>
          {" "}
          <section className=" px-6 md:px-0">
            <Card className="rounded-xl  p-4 border-[1px] border-[#E7E9ED] md:rounded-2xl  md:p-6   ">
              {children}
            </Card>
          </section>
        </ErrorBoundary>
      </main>
    </>
  );
}
