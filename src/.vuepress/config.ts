import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "BH_English Version",
      description: "Welcome to my home page!",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "BH工作室",
      description: "欢迎来到首页",
    },
    "/de/": {
      lang: "ger-De",
      title: "BH_Deutsch-Auflage",
      description: "Welcome to my home page!",
    },
  },

  theme,
  
  head: [
    [
      "link", {
        rel: "shortcut icon",
        href: "/img/logo.png",
        // href: "shortcut icon",
      }
    ]
  ],

  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    }
  }
  // Enable it with pwa
  // shouldPrefetch: false,
});
