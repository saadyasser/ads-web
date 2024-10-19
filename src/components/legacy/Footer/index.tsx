import { FOOTER_NAVIGATION } from "@/data";
import { Logo, Container, Link, Divider } from "../../";
import { createElement } from "react";

export const Footer = () => {
  return (
    <footer
      className="text-white bg-secondary dark:bg-black-darker"
      aria-labelledby="footer-heading"
    >
      <Container className="max-xl:px-4">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="pt-8 pb-8 md:pt-16">
          <div className="grid xl:grid-cols-5 xl:gap-8">
            <div className="col-span-2 space-y-4 max-xl:text-center">
              <Logo
                src="/images/logos/ads_logo_dark.svg"
                wrapperClassName="max-xl:justify-center"
              />
              <p className="text-sm leading-6 ">
                With our extensive library of pre-built components and
                resources, you can kickstart any project and save thousands of
                hours of design work.
              </p>
              <Divider className="border-b xl:!hidden !my-4 border-[#0F2448] dark:border-black-darker" />
            </div>
            <div className="grid items-start justify-between grid-cols-2 col-span-2 gap-4 mt-4 xl:gap-8 xl:grid-cols-3 xl:col-span-3 xl:mt-0">
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

              <div className="mt-4 xl:mt-0 max-xl:col-span-2">
                <Divider className="border-b xl:!hidden !my-4 border-[#0F2448] dark:border-black-darker" />
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
          <div className="pt-4 mt-4">
            <Divider className="border-b border-secondary-active dark:border-black-darker" />
            <p className="my-4 leading-5 text-center">
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
