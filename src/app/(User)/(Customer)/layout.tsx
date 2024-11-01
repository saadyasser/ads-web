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
    <body className="pt-[70px] xl:pt-[83px] bg-black">
      <Navbar searchIconhidden={searchIconhidden} />
      <main className="min-h-screen py-6 lg:py-12 bg-black dark:bg-background-dark">
        <ErrorBoundary>
          {children}
          <SearchBar
            onVisibilityChange={(visible) => setSearchIconhidden(!visible)}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            nobis, ex recusandae numquam magni rerum maxime. Ipsum minima modi
            aperiam architecto inventore adipisci dolores, laboriosam natus ad,
            voluptatum explicabo libero veniam alias nesciunt omnis repellat
            dolore iusto assumenda recusandae nulla soluta placeat asperiores.
            Dolore laboriosam est nostrum, voluptas incidunt harum voluptatum
            repellat eum. Quo magni aspernatur, pariatur deleniti nihil iure?
            Dignissimos facere debitis ratione odio est, minus dicta sunt itaque
            aspernatur ut vel reiciendis harum eius eaque molestiae similique
            maiores iure natus modi eum perspiciatis. Iusto nostrum repellendus
            voluptas perspiciatis tempora incidunt nihil quaerat accusamus quos
            hic error voluptatem magnam voluptatibus nesciunt aspernatur iure,
            assumenda explicabo officiis quasi voluptates asperiores dolorem
            velit nisi. Accusantium temporibus, veritatis cupiditate numquam
            facilis molestiae mollitia tenetur, quia atque repudiandae odit.
            Animi sed molestiae ipsa eaque asperiores voluptates, vitae soluta
            culpa consequatur repellendus tempore a non, saepe fuga ullam
            voluptatum distinctio necessitatibus explicabo ratione. Culpa
            assumenda adipisci reiciendis, minus quod rerum debitis odio.
            Consectetur fugiat laborum similique, atque voluptatem officia
            magnam illo esse. Sequi obcaecati quo in reprehenderit cumque
            assumenda deleniti ipsa, ipsam molestiae deserunt harum explicabo
            quia amet nostrum vel numquam. Deleniti ipsa quasi deserunt atque
            dolore, totam nesciunt fuga alias quod voluptas eum! Error dolore
            sapiente nemo? Debitis fuga quam ullam facilis, enim cumque
            accusamus deserunt deleniti nihil accusantium dolores repellendus
            quos laborum, porro atque! Vero alias temporibus expedita
            necessitatibus laudantium incidunt quibusdam? Sequi non impedit,
            necessitatibus laboriosam quod veniam nihil enim itaque quia, at
            corporis in eligendi fuga, illo nulla aut quisquam deleniti sit vel
            dolorem? Saepe illo consectetur quis vitae est ipsa veniam nihil
            soluta provident eos, fugit distinctio veritatis suscipit esse
            maxime minima? Maiores, maxime iste nemo alias impedit provident
            corporis. Sequi soluta, non sit, ut fugit voluptatum tempora quo
            officiis nihil sint magni nostrum nesciunt quam provident, atque
            saepe veniam tenetur laborum at cum accusantium eligendi. Unde, in
            quod dolores, numquam facilis officiis magni repellendus illum iusto
            porro, sunt dignissimos quis voluptatibus necessitatibus omnis
            fugiat tempora aliquam aut ex suscipit deserunt voluptates
            aspernatur quas. Perspiciatis maxime ut sunt, temporibus alias
            consectetur nemo eius tempora iste cupiditate ipsam, aspernatur
            deleniti nobis numquam enim illum et nihil animi soluta tempore
            dicta odit! Alias minus debitis libero voluptas voluptatem sed id
            magni distinctio repellendus, nesciunt dolorem, at iste tempora.
            Modi in adipisci blanditiis quaerat. Nam ipsam natus nisi, iure cum
            optio sed id numquam! Quas id voluptatum quibusdam dolore quos nam
            rerum saepe, odit sint quis, debitis tenetur placeat neque rem cum
            ipsam consequuntur magnam voluptas error suscipit non! Dolorum ut
            aut animi aliquam mollitia illum minus commodi quo, minima nulla
            iste sequi esse. Sunt hic temporibus voluptates eligendi corporis
            dicta culpa rem magni ipsa nostrum veniam itaque enim autem sint,
            fugiat voluptatem alias doloribus quibusdam minima at suscipit!
            Adipisci dicta maiores, sit sequi impedit, explicabo neque ab
            possimus dignissimos at minus perspiciatis dolores labore facilis
            nihil laboriosam veritatis tenetur quam. Harum dolorum ratione
            voluptatem, id quod ex voluptate? Incidunt ea necessitatibus
            impedit, repellat cum quaerat id culpa facere vitae corrupti! Et
            nobis similique sint, eos ipsam rerum nesciunt deserunt quas impedit
            magnam, animi architecto aliquam unde molestiae dolorem ullam
            doloribus excepturi repudiandae minima accusamus qui debitis
            dolorum. Enim velit suscipit delectus. Culpa omnis labore qui ipsum
            earum iusto sint exercitationem sed! Totam, voluptatibus illo, quam
            voluptas vitae commodi provident neque, velit officia ad
            repellendus. Consequuntur, cupiditate, impedit doloremque
            accusantium voluptatem eligendi quo assumenda exercitationem id
            officia ullam voluptas ducimus odio nisi dignissimos voluptatibus.
            Dicta, assumenda totam. Laudantium voluptatibus reiciendis cumque,
            magni dolor asperiores, doloremque modi aut expedita quos, saepe
            provident eaque. Ullam laudantium blanditiis pariatur, veniam labore
            sit. Nihil alias cupiditate laudantium incidunt repellat ullam
            molestias voluptatibus fugit nostrum quaerat in qui soluta,
            repudiandae dolores at sed quisquam reiciendis doloremque, ipsam,
            consequatur pariatur? Illo rem similique veniam rerum expedita eos
            ipsum harum ducimus velit odit. Reiciendis soluta nihil sint saepe
            esse autem at est doloribus deleniti corrupti, illum consectetur
            facilis excepturi assumenda ad laborum quidem provident quia!
            Perferendis eligendi beatae fugit unde aperiam aliquam aspernatur
            sunt soluta saepe ipsum, ex fuga eius, voluptatibus vel repellendus?
            Eum reiciendis itaque ratione sit illum atque ad dignissimos soluta
            architecto, tempore mollitia cum minima dolorem nam doloribus culpa
            quisquam illo laboriosam accusamus molestias harum? Magni iste,
            suscipit illo laudantium libero quam nihil fugit quo corrupti, ut
            alias! Maxime voluptatum vero expedita reiciendis sit, optio iusto
            ut nemo iure libero iste dolorum exercitationem accusantium sapiente
            et deserunt enim? At quia voluptatem, inventore consectetur alias
            autem ipsam enim voluptatum, temporibus natus, eius assumenda
            accusamus eveniet quisquam iste fugiat nobis iure excepturi error
            adipisci. Non nisi dignissimos possimus aspernatur facilis
            reprehenderit quam blanditiis atque eius quis enim laboriosam natus
            facere voluptatum, necessitatibus eligendi? Fugiat corrupti neque
            voluptates sequi non quidem consectetur ad libero aut? Sed accusamus
            nostrum, voluptate pariatur laborum repellat optio aliquid vitae
            minima consectetur quia tempore neque delectus reprehenderit
            deserunt quam magnam recusandae ducimus cum accusantium aspernatur
            temporibus quos. Placeat corporis illo ratione commodi laboriosam
            veniam facere. Dolorem optio laudantium ullam ab dignissimos
            inventore corrupti aliquid velit quam rem, cumque vero possimus.
            Corporis minus accusamus accusantium asperiores labore alias?
            Voluptatum quam earum harum eveniet impedit. Excepturi quae
            reiciendis qui tenetur eum, libero facere aperiam earum accusantium
            quidem error consequatur culpa ducimus. Quasi fugiat est suscipit
            voluptatibus magnam, ratione voluptatum ut quod velit aspernatur
            libero dolorem, delectus ducimus iure officia natus accusantium in
            exercitationem repudiandae tempore? Nobis hic vero, vitae numquam
            sint deserunt in, reiciendis ratione qui dolorum nam assumenda
            exercitationem fuga doloribus illum placeat tenetur praesentium.
            Autem non voluptate vero iusto corrupti eos, distinctio cumque, ut
            vitae quibusdam voluptatum fugit nisi voluptates doloremque animi
            eligendi ex laudantium cum nostrum alias soluta? Sequi, libero odit
            neque dolor pariatur accusantium quia fuga, atque consectetur ut
            quis? Voluptates numquam impedit ea corporis quasi iure repellendus
            qui quidem cumque sint! Illum odit aut consequatur facere eum fugit
            repellendus distinctio, ducimus optio. Eaque, corporis molestias.
            Laudantium voluptates, beatae corporis dicta ut aut esse alias ea,
            explicabo, recusandae quia. Impedit culpa dicta nemo voluptatem?
            Deserunt facere minima possimus voluptates quisquam id totam.
          </p>
        </ErrorBoundary>
      </main>
      <Footer />
    </body>
  );
}
