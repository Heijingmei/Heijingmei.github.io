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

  // Enable it with pwa
  // shouldPrefetch: false,
});
