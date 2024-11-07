import { FOOTER_NAVIGATION } from "@/data";
import { Logo, Container, Link, Divider } from "../../";
import { createElement } from "react";
import { InstgramIcon, LinkedInIcon } from "@/components/svg";
import TwitterIcon from "@/components/svg/TwitterIcon";

export const Footer = () => {
  return (
    <footer
      className="text-white bg-accent-dark pt-6 px-4 md:pt-10 md:px-8 xl:px-[120px] xl:pt-[60px]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="pt-8 md:pt-16">
        <div className="md:grid	 md:grid-cols-6 md:grid-rows-1  xl:grid-cols-12 gap-8 md:gap-y-3 md:gap-x-8 xl:gap-8">
          <div className="md:col-span-2 xl:col-span-3  space-y-4 max-xl:text-center">
            <Logo
              withBadge={false}
              src="/images/logos/home_ads_logo.svg"
              wrapperClassName="max-xl:justify-center md:justify-start"
            />
            <p className="text-sm leading-6 mb-4 md:text-left">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <div className=" flex gap-4 mt-4 justify-center md:justify-start">
              <TwitterIcon />
              <LinkedInIcon />
              <InstgramIcon />
              <LinkedInIcon />
            </div>
            <Divider className="border-b md:!hidden border-[#ffffff1a] " />
          </div>
          <div className="grid items-start justify-between grid-cols-1 xl:col-span-4 col-span-1 md:col-span-4 gap-4  xl:gap-8 ">
            <div className="mt-4 md:mt-0">
              <h3 className="text-base font-bold leading-6 xl:text-xl text-center md:text-left">
                Explore
              </h3>
              <ul
                role="list"
                className="flex flex-col gap-4 mt-4 ml-0 space-y-4 mb-4 md:grid md:grid-cols-2 md:gap-y-4"
              >
                {FOOTER_NAVIGATION.quickLinks.map((item) => (
                  <li className="!mt-0" key={item.name}>
                    <Link
                      href={item.href}
                      className="justify-center md:justify-start md:items-end text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Divider className="border-b md:!hidden border-[#ffffff1a] " />
            </div>
          </div>
          <div className="md:grid md:grid-cols-6 gap-8 md:grid-rows-1 md:col-span-6 xl:col-span-5 xl:grid-cols-5">
            <div className="md:col-span-2 xl:hidden xl:col-span-0"></div>
            <div className="grid items-start justify-between grid-cols-1 col-span-1 md:col-span-4 gap-4  xl:gap-8 xl:grid-cols-5 xl:col-span-5">
              <div className="xl:col-span-5 xl:grid xl:grid-cols-5">
                <ul
                  role="list"
                  className="mt-4 md:ml-0 space-y-4 xl:space-y-0 mb-4 md:mb-0 md:grid md:grid-cols-2 xl:grid-cols-5 xl:col-span-5 md:gap-y-4 md:mt-0"
                >
                  <ul
                    role="list"
                    className="mt-4 md:ml-0 space-y-4 mb-4 md:mb-0 md:col-span-1 md:grid md:grid-cols-5 xl:block xl:col-span-2 xl:mt-0"
                  >
                    <div className="col-span-1 md:col-span-5">
                      <h3 className="text-base font-bold leading-6 xl:text-xl md:text-left text-center md:mb-4 mb-4">
                        ADS
                      </h3>
                      <div className="flex flex-col gap-4">
                        {FOOTER_NAVIGATION.test.map((item) => (
                          <li key={item.name}>
                            <Link
                              href="/"
                              className="justify-center md:justify-start text-sm md:ml-0"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </div>
                    <Divider className="border-b md:!hidden border-[#ffffff1a] " />
                  </ul>
                  <div className="hidden xl:block xl:col-span-1"></div>
                  <div className="mt-0 col-span-2 md:col-span-1 xl:col-span-2">
                    <h3 className="text-base font-bold leading-6 xl:text-xl md:text-left text-center xl:mb-4">
                      Have an issue?
                    </h3>
                    <ul
                      role="list"
                      className="ml-0 mt-4  md:ml-4 space-y-4 xl:ml-0 "
                    >
                      {FOOTER_NAVIGATION.help.map((item) => (
                        <li key={item.name}>
                          <Link
                            href="/"
                            className="justify-center md:justify-start text-sm"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ul>
                {/* <Divider className="border-b md:!hidden border-[#ffffff1a] " /> */}
              </div>
            </div>
            <div className="md:col-span-3 md:grid md:grid-cols-2">
              {/* <div className="">
                  <h3 className="text-base font-bold leading-6 xl:text-xl md:text-left text-center">
                    Quick Links
                  </h3>
                  <ul role="list" className="mt-6 ml-4 space-y-4 mb-4">
                    {[1, 2, 3, 4].map((item) => (
                      <li key={item}>
                        <Link
                          href="/"
                          className="justify-center md:justify-start text-sm"
                        >
                          test tea
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Divider className="border-b md:!hidden border-[#ffffff1a] " />
                </div>
                <div className="">
                  <h3 className="text-base font-bold leading-6 xl:text-xl md:text-left text-center">
                    Quick Links
                  </h3>
                  <ul role="list" className="mt-6 ml-4 space-y-4 mb-4">
                    {[1, 2, 3, 4].map((item) => (
                      <li key={item}>
                        <Link
                          href="/"
                          className="justify-center md:justify-start text-sm"
                        >
                          test tea
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Divider className="border-b md:!hidden border-[#ffffff1a] " />
                </div> */}
            </div>
          </div>
        </div>
        <div className="pt-0 ">
          <Divider className="border-b border-[#ffffff1a]" />
          <p className="py-4 leading-5 text-center">
            &copy; All rights reserved for | Azaiza Design Studio{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
