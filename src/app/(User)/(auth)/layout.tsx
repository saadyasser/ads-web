import { Card, ErrorBoundary, Footer, Navbar } from "@/components";
import { CategoryType } from "@/types";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const response = await fetch("https://api.azaiza.com/api/product/category/", {
    cache: "force-cache", // Cache at build time
  });

  const data = await response.json();
  const categories: CategoryType[] = data.data.categories;
  return (
    <div className="pt-[85px] md:pt-[89px]   xl:pt-[109px] bg-primary-light !overflow-y-auto min-h-screen flex items-center justify-center !overflow-auto">
      <Navbar categories={categories} className="bg-white" />
      <main className="flex items-center justify-center py-4">
        <ErrorBoundary>
          <section className="w-full max-w-[486px] px-6 md:px-0">
            <Card className="block p-4 border border-[#E7E9ED] rounded-xl md:rounded-2xl md:p-6  2xl:p-8">
              {children}
            </Card>
          </section>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default RootLayout;
