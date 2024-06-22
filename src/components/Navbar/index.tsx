"use client";
import { Button, Container, Logo, NavLink, SlideOver } from "../";
import { useTheme } from "next-themes";
import { BurgerMenu, Moon, Sun } from "@/lib/@iconsax";
import { useState } from "react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="fixed top-0 z-30 w-full py-4 border-b-[1px] border-black-light dark:border-black-darker bg-white text-black dark:bg-black-darker dark:text-white ">
      <Container className="flex items-center justify-between gap-6 max-xl:px-8 max-lg:px-4">
        <Logo width={196} height={47} withBadge />
        <NavLinks />
        <div className="flex items-center gap-3 lg:gap-4">
          {theme === "dark" ? (
            <Button
              variant="custom"
              className="!hidden xl:!flex bg-black text-white !border-white active:!shadow-black-active"
            >
              Register / Login
            </Button>
          ) : (
            <Button
              variant="custom"
              className="bg-background-light active:shadow-background-light hover:bg-black-light border-black-light !hidden xl:!flex"
            >
              Register / Login
            </Button>
          )}
          <Button
            variant="secondary"
            onClick={() => setBurgerMenuOpen((prev) => !prev)}
            className="!flex xl:!hidden items-center justify-center !rounded-full !p-2 !shadow-none border-none !h-fit dark:bg-black-active "
          >
            <BurgerMenu
              size="20"
              className="h-fit text-primary fill-primary dark:text-white dark:fill-white"
            />
          </Button>

          <Button
            variant="secondary"
            onClick={handleThemeChange}
            className="!flex items-center justify-center !rounded-full !p-2 !h-fit !shadow-none border-none dark:bg-black-active"
          >
            {theme === "dark" ? (
              <Moon
                size="20"
                className="h-fit text-primary fill-primary dark:text-white dark:fill-white"
              />
            ) : (
              <Sun
                size="20"
                className="h-fit text-primary fill-primary dark:text-white dark:fill-white"
              />
            )}
          </Button>
        </div>
        <SlideOver
          footer={<>ttttttttttttttttttt</>}
          open={burgerMenuOpen}
          setOpen={setBurgerMenuOpen}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis
          illo repudiandae harum inventore animi et! Adipisci qui commodi
          repellat tempore quibusdam! Expedita et, nobis tempore rerum voluptas
          cupiditate. Odit non, itaque autem dolorum ullam earum sint eveniet
          possimus molestias tempora, ea maxime esse assumenda eaque, distinctio
          rem voluptates! Dolor blanditiis sequi aperiam, iusto suscipit dolorem
          ipsum provident repellendus numquam maiores atque sit velit, nesciunt
          necessitatibus. Blanditiis sapiente voluptate nesciunt fuga. Sequi
          deleniti nobis nulla, laborum illum amet. Provident eius optio saepe
          soluta delectus autem dicta explicabo nesciunt ratione aliquid
          praesentium officia tenetur tempore fugiat, possimus quas unde enim?
          Ut eius commodi enim in ab cumque, repellat beatae distinctio rerum
          accusamus. Nesciunt adipisci aut sequi perferendis dolore, expedita
          omnis ducimus recusandae perspiciatis quidem nisi officiis! Aliquam
          quos, error adipisci rem sed qui aut quod hic laborum explicabo
          deleniti rerum vitae excepturi, totam quia impedit. Aspernatur
          necessitatibus ipsam dolore eligendi esse eum, voluptas itaque iste
          sit deserunt ratione perferendis. Hic, nemo! Fuga cum veritatis
          delectus enim odio pariatur, aliquam ut nam facilis eius, consequatur
          natus. Nobis, veniam ducimus! Sequi, vel? Perspiciatis rerum
          voluptatem nihil eius. Libero minus quas repellat culpa aspernatur,
          sunt assumenda magnam obcaecati ut impedit facilis nesciunt
          repellendus vero odit ipsum quo harum odio, sit similique excepturi
          doloremque distinctio. Sequi temporibus quibusdam tempora nihil
          dolorum, placeat quis aperiam molestiae error iusto, eligendi, aliquam
          nisi illo commodi. Voluptatum dignissimos sint asperiores? Ducimus
          beatae, assumenda ab sapiente, illo, soluta obcaecati nam cumque
          aperiam accusantium vero praesentium maxime in quo. Magnam, assumenda
          repellendus eos officia exercitationem dolorum iure dolores magni
          debitis possimus atque earum, ad odio asperiores ex reiciendis minus
          natus molestiae eius quisquam perspiciatis doloribus nostrum. Hic,
          vero velit libero magnam ipsum deserunt temporibus quas natus eaque,
          doloribus, eligendi repudiandae nesciunt facere aspernatur dicta!
          Doloremque labore omnis dicta facilis quia officiis molestias impedit
          atque quas. Eaque in sit laboriosam suscipit qui, error cupiditate
          omnis alias quae? Eos ipsum laudantium quaerat est vel doloremque,
          facere quas adipisci non reiciendis doloribus placeat unde consequatur
          temporibus hic quasi tempore ex nesciunt suscipit minus eligendi id
          aperiam! Porro ex temporibus tenetur molestias rem quo nisi ad,
          ducimus fuga? Tenetur ipsum sunt, consequatur culpa ad, neque
          accusamus libero doloribus inventore molestias delectus repellat odio
          provident obcaecati voluptatibus saepe quos ab magni numquam facere?
          Numquam, explicabo inventore! Delectus consectetur, adipisci
          dignissimos odio reprehenderit placeat officiis architecto! Ut, sed.
          Enim, recusandae nesciunt facilis minima maxime consectetur cum! Porro
          blanditiis pariatur explicabo odit nobis tenetur nesciunt in?
          Consectetur, perspiciatis eligendi explicabo ipsa doloribus culpa
          exercitationem distinctio earum laudantium magnam est eaque nam fugiat
          neque at nobis natus numquam aut provident esse ipsam cum quidem error
          dicta. Neque labore tenetur aliquid odit officia aspernatur vitae,
          adipisci, hic deserunt, modi voluptates. Sit, distinctio? Unde rerum
          aliquam, aperiam natus ab, voluptatem animi eaque, blanditiis magnam
          molestias dolore reiciendis provident? Deleniti repellendus dolorem
          accusantium voluptate quasi expedita nihil. Alias, voluptatum non est
          quisquam, aperiam libero voluptate recusandae laborum maxime tempore
          praesentium similique? Excepturi repellat, saepe sequi iure tempore
          voluptate? Earum, numquam sed error nisi accusantium necessitatibus.
          Accusamus odio, maxime dolorem excepturi rerum obcaecati, impedit
          nobis explicabo voluptatem harum reprehenderit repudiandae a.
          Obcaecati dignissimos dolores consequatur minima, voluptatem sed.
          Quidem, porro obcaecati? Ut nostrum consequatur cum modi libero
          incidunt dicta doloribus, sunt voluptatum, nesciunt temporibus quidem,
          mollitia possimus! Earum eos dolore modi veniam recusandae molestiae
          dolor, quasi enim non. Nulla neque culpa ipsum dicta reiciendis
          excepturi, quisquam illo sunt optio totam voluptas, quam quibusdam
          quod commodi numquam ut eaque libero quis accusantium? Voluptate
          architecto, temporibus qui similique odio, unde magnam minima facilis
          in placeat culpa fugit est quibusdam cum expedita dolores maiores
          maxime debitis dolor repellat corrupti hic? Consequuntur, distinctio
          culpa. Numquam quia, natus provident quae non iure in libero,
          recusandae quas inventore reprehenderit. Ad totam id quo vero
          eligendi, amet distinctio? Consequatur vero eum illo laborum. Impedit
          quibusdam totam natus labore repellendus, velit nisi cupiditate eos
          laudantium harum voluptates. Laborum debitis, corrupti porro dolorum
          tenetur illum. Error doloremque labore fuga eum, distinctio aut cum.
          Veniam ipsam, est eius in facilis non amet atque molestiae accusamus
          nulla debitis fugit eaque maxime nisi assumenda minima eos quidem,
          autem, nobis consequatur. Doloremque, tempore. Voluptatum harum saepe
          labore consequatur incidunt. Neque, exercitationem reprehenderit
          perspiciatis voluptatum soluta tenetur perferendis minus veniam
          dolore, ipsam, voluptas molestias necessitatibus! Enim dignissimos nam
          totam sequi facere quam aliquam ducimus beatae labore autem explicabo
          aperiam molestiae esse doloremque, saepe incidunt porro recusandae
          eveniet voluptates eos. Harum eos nam omnis quisquam vitae dolore
          deserunt ea nesciunt laboriosam vero sunt aspernatur ipsam cum ipsum
          odio nobis error porro vel quis repudiandae, at inventore velit qui
          nostrum? Laudantium, ipsam natus adipisci ab enim nobis repellat ea
          aliquid rerum reiciendis quo fuga quidem animi voluptate suscipit nam
          architecto numquam distinctio vel corporis reprehenderit! Cum ducimus
          quas sit magni doloribus odio minima explicabo mollitia enim veniam
          quisquam optio nobis cupiditate ea eveniet eum, dolorum non molestias
          dicta fugit laboriosam? Eaque commodi distinctio laborum officiis amet
          dolorem eum non delectus consequatur. A provident illo labore ullam
          optio illum molestias. Eaque aut adipisci iure quaerat eos. Architecto
          fugiat eius velit harum nostrum illum, quos quasi? Nihil magni
          suscipit voluptas placeat accusantium natus officiis temporibus
          expedita reiciendis, vel sunt exercitationem ullam? Expedita eaque
          repudiandae ad ut laborum. Repudiandae facere earum aperiam dicta
          perferendis itaque dolorum. Minus doloremque reprehenderit fuga
          corrupti dicta quisquam dolorem animi qui doloribus, ab a provident
          asperiores corporis distinctio est! Voluptates obcaecati magnam saepe
          eligendi corporis. Quisquam, perspiciatis.
        </SlideOver>
      </Container>
    </nav>
  );
};

export default Navbar;

const NavLinks = () => {
  return (
    <div className="items-center justify-between hidden gap-2 xl:gap-6 max-xl:!text-sm xl:flex font-medium">
      <NavLink href="/" exact className="w-max">
        Home
      </NavLink>
      <NavLink href="/ui-components" className="w-max">
        Components
      </NavLink>
      <NavLink href="/templates" className="w-max">
        Web & Mobile Templates
      </NavLink>
      <NavLink href="/ready-flows" className="w-max">
        Ready Flows
      </NavLink>
      {/* <NavLink href="/color-themes">Color-Themes</NavLink> */}
      <NavLink href="/design-system" className="w-max">
        Design-system
      </NavLink>
    </div>
  );
};
