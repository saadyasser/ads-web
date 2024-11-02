"use client";
import { ErrorBoundary, Footer, Navbar, SearchBar } from "@/components";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchIconhidden, setSearchIconhidden] = useState(false);

  console.log(searchIconhidden, "earchHidden");

  return (
    <body className="pt-[85px] md:pt-[89px]  lg:pt-[93px] xl:pt-[109px]  !overflow-y-auto   bg-black">
      <Navbar searchIconhidden={searchIconhidden} />
      <main className=" py-6 lg:py-12 bg-black dark:bg-background-dark">
        <ErrorBoundary>
          {children}
          <SearchBar
            onVisibilityChange={(visible) => setSearchIconhidden(!visible)}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            dolores repellat minima vitae blanditiis aperiam sapiente nesciunt,
            assumenda perspiciatis perferendis, voluptate, eos voluptatibus
            laborum voluptas consequatur totam facilis. Natus, dolore, sequi
            doloremque unde ea quasi eaque ut dicta ducimus rerum temporibus.
            Impedit eos veritatis nisi explicabo accusamus architecto
            asperiores, minima, harum dolores voluptatum hic ratione enim labore
            porro incidunt quia doloribus rerum repudiandae, sequi ex quae.
            Dolores nihil quidem nostrum autem veniam ab unde, ullam debitis
            consequuntur laborum quam ea illo esse fugiat cupiditate nam
            perferendis obcaecati, accusantium sunt illum laudantium nisi et!
            Modi illum laboriosam cupiditate quia? Maxime optio totam iusto
            debitis eveniet non harum vero, blanditiis ex atque, a laudantium
            praesentium officia modi veritatis magni cum maiores perspiciatis?
            Quae quam asperiores harum earum tenetur voluptatum delectus?
            Voluptatem doloremque voluptate facilis ea enim, optio fuga error
            accusantium, mollitia magnam provident laudantium sapiente sed. Odio
            quo tempora animi aperiam doloribus id dignissimos tempore iure
            dolorem quod velit nam ipsum temporibus quas nostrum hic architecto
            culpa perferendis, odit fugiat minus sint ad magnam. Natus tenetur
            autem cum a dolor quas, nemo illo! Dolorem consectetur labore ipsum
            adipisci praesentium beatae consequatur reiciendis quos. Tempora
            repellendus veritatis eum totam commodi odio voluptas non?
          </p>
        </ErrorBoundary>
      </main>
      <Footer />
    </body>
  );
}
