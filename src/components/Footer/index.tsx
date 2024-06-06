import { FOOTER_NAVIGATION } from "@/data";
import { Logo, Container, Link } from "../";
import { createElement } from "react";

export const Footer = () => {
  return (
    <footer
      className="text-white bg-secondary dark:bg-black-darker"
      aria-labelledby="footer-heading"
    >
      <Container>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="pt-16 pb-8">
          <div className="grid xl:grid-cols-5 xl:gap-8">
            <div className="col-span-2 space-y-8">
              <Logo src="/images/logos/ads_logo_white.svg" />
              <p className="text-sm leading-6 ">
                With our extensive library of pre-built components and
                resources, you can kickstart any project and save thousands of
                hours of design work.
              </p>
            </div>
            <div className="grid items-start justify-between grid-cols-2 col-span-2 gap-8 mt-16 xl:grid-cols-3 xl:col-span-3 xl:mt-0">
              <div>
                <h3 className="text-base font-bold leading-6 xl:text-xl">
                  <span className="mr-2 text-primary font-bolder">-</span>
                  Quick Links
                </h3>
                <ul role="list" className="mt-6 ml-4 space-y-4">
                  {FOOTER_NAVIGATION.quickLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold leading-6 xl:text-xl">
                  <span className="mr-2 text-primary font-bolder">-</span>
                  Help{" "}
                </h3>
                <ul role="list" className="mt-6 ml-4 space-y-4">
                  {FOOTER_NAVIGATION.help.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 xl:mt-0">
                <h3 className="text-base font-bold leading-6 xl:text-xl">
                  <span className="mr-2 text-primary font-bolder">-</span>
                  Social Media{" "}
                </h3>
                <ul role="list" className="mt-6 ml-4 space-y-5">
                  {FOOTER_NAVIGATION.socialMedia.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm">
                        {createElement(item.icon, { className: "w-6 h-6" })}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-black-active">
            <p className="leading-5 text-center">
              &copy; All rights reserved for | Azaiza Design Studio{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
