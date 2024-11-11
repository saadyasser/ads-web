import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterXIcon,
} from "@/lib/@react-icons";
export const FOOTER_NAVIGATION = {
  test: [
    { name: "About us", href: "/about-us" },
    { name: "Web & Mobile", href: "/web-mobile" },
    { name: "Web Templates", href: "/web-templates" },
    { name: "About us", href: "/about-us" }],
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "UI Components", href: "/ui-components" },
    { name: "Web & Mobile", href: "/web-mobile" },
    { name: "Web Templates", href: "/web-templates" },
    { name: "About us", href: "/about-us" },
    { name: "Web & Mobile", href: "/web-mobile" },
  ],
  help: [
    { name: "Contact us", href: "#" },
    { name: "Our Policies", href: "#" },
    { name: "Register", href: "#" },
  ],
  socialMedia: [
    { name: "LinkedIn", href: "#", icon: LinkedinIcon },
    { name: "Instagram", href: "#", icon: InstagramIcon },
    { name: "Twitter", href: "#", icon: TwitterXIcon },
    { name: "Facebook", href: "#", icon: FacebookIcon },
  ],
} as const;
