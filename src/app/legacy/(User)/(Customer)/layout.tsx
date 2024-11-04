import { ErrorBoundary, Footer, Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-6  bg-background-light dark:bg-background-dark">
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}
