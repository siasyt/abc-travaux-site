// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    // 正式域名
    site: "https://www.abc-travaux.com",

    i18n: {
        locales: ["fr", "zh"],
        defaultLocale: "fr",
        routing: {
            prefixDefaultLocale: true, // 法文也带 /fr/ 前缀
        },
    },

    integrations: [
        sitemap({
            // 根目录 / 只是跳转页，不放进 sitemap
            filter: (page) => page !== "https://www.abc-travaux.com/",
            // 告诉 Google 每个页面的中法两个版本互为对应
            i18n: {
                defaultLocale: "fr",
                locales: {
                    fr: "fr-FR",
                    zh: "zh-CN",
                },
            },
        }),
    ],
});