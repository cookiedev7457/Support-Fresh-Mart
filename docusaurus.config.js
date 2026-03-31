// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fresh-Mart Support",
  tagline: "Our Freshness, Your Smile.",
  favicon: "img/logo.png",

  url: "https://cookiedev7457.github.io",
  baseUrl: "/Support-Fresh-Mart/", // Matches your renamed repo
  organizationName: "cookiedev7457",
  projectName: "Support-Fresh-Mart",
  trailingSlash: false,

  // IMPORTANT: Move these OUT of the markdown block
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    format: 'detect',
    mdx1Compat: {
      comments: true,
      admonitions: true,
    },
  },
  
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
            routeBasePath: "/docs/introduction.md",
            sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Fresh-Mart Support",
        items: [
          {
          type: 'docSidebar',
          sidebarId: 'sidebar', 
          position: 'left',
          label: 'Staff Portal',
          }
      ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Support",
            items: [
              {
                label: "Home",
                to: "/",
              },
            ],
          },
          {
            title: "Community Links",
            items: [
              {
                label: "Roblox Group",
                href: "https://www.roblox.com/communities/34992659/Fresh-Mart#!/about",
              },
              {
                label: "Discord",
                href: "https://discord.gg/FvKHPPgVXu",
              },
            ],
          },
          {
            title: "GitHub Infomation",
            items: [
              {
                label: "Organization",
                href: "https://github.com/cookiedev7457?tab=repositories",
              },
              {
                label: "Support Repository",
                href: "https://github.com/cookiedev7457/Support.Fresh-Mart",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fresh-Mart. Built with Docusaurus.`,
      },
      // Note: prismThemes needs to be defined at the top of your file 
      // usually via: import {themes as prismThemes} from 'prism-react-renderer';
    }),
};

export default config;