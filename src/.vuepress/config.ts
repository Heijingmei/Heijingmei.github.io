import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "BH_English_Version",
      description: "Welcome to my home page!",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "欢迎来到首页",
    },
    "/de/": {
      lang: "ger-De",
      title: "BH_Deutsch_Auflage",
      description: "Welcome to my home page!",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
