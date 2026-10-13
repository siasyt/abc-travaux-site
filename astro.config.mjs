// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
    // 正式域名，部署前改成老板买的域名
    site: "https://www.abc-travaux.com",

    i18n: {
        locales: ["fr", "zh"],
        defaultLocale: "fr",
        routing: {
            prefixDefaultLocale: true, // 法文也带 /fr/ 前缀
        },
    },
});