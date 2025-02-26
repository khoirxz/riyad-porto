export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Riyard Portofolio",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "Experience",
      href: "/experience",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "Experience",
      href: "/experience",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
