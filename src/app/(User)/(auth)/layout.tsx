import { ErrorBoundary, Footer, Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar className="bg-white" />
      <main className="flex justify-center items-center xl:min-h-[calc(100vh-83px)] min-h-[calc(100vh-70px)]   py-6 lg:py-12  dark:bg-background-dark">
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
    </>
  );
}
