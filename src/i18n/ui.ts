// =========================================================
// 全站公用文案 + 语言工具函数
// =========================================================

export const languages = {
    fr: "FR",
    zh: "中文",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "fr";

// 公司基本信息（两种语言共用）
export const site = {
    name: "ABC Travaux",
    slogan: "Bâtir avec le cœur",
    email: "abctravaux.ge@gmail.com",
    phone: "07 70 03 97 65",
    phoneHref: "tel:+33770039765",
    wechat: "Paristravaux",
    address: {
        street: "8 Rue Chapon",
        city: "93300 Aubervilliers",
        country: "France",
    },
} as const;

export const ui = {
    fr: {
        "meta.title": "ABC Travaux — Entreprise générale de travaux à Paris",
        "meta.description":
            "ABC Travaux accompagne les marques de la conception à la livraison : boutiques, flagships, pop-up stores, restaurants et bureaux, en conformité avec la réglementation française.",

        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.services": "Services",
        "nav.projects": "Réalisations",
        "nav.contact": "Contact",
        "nav.cta": "Demander un devis",
        "nav.menu": "Menu",

        "footer.tagline": "Bâtir avec le cœur",
        "footer.contact": "Contact",
        "footer.follow": "WeChat",
        "footer.rights": "Tous droits réservés.",
        "footer.legal": "Mentions légales",
        "footer.privacy": "Politique de confidentialité",
    },
    zh: {
        "meta.title": "ABC Travaux — 法国华人一体化建筑服务商",
        "meta.description":
            "ABC Travaux 扎根法国16年，为品牌提供从概念规划到完美交付的一站式空间解决方案：旗舰店、精品零售、快闪店、餐厅及办公空间。",

        "nav.home": "首页",
        "nav.about": "关于我们",
        "nav.services": "服务",
        "nav.projects": "项目案例",
        "nav.contact": "联系我们",
        "nav.cta": "获取报价",
        "nav.menu": "菜单",

        "footer.tagline": "用心筑造",
        "footer.contact": "联系方式",
        "footer.follow": "微信",
        "footer.rights": "版权所有。",
        "footer.legal": "法律声明",
        "footer.privacy": "隐私政策",
    },
} as const;

export type UiKey = keyof (typeof ui)["fr"];

/** 从网址里取出当前语言，例如 /zh/services → "zh" */
export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang as Lang;
    return defaultLang;
}

/** 返回翻译函数：t("nav.home") */
export function useTranslations(lang: Lang) {
    return function t(key: UiKey): string {
        return ui[lang][key] ?? ui[defaultLang][key];
    };
}

/** 生成某语言下的链接：localePath("zh", "services") → "/zh/services/"
 *  末尾统一带斜杠，和 sitemap、canonical 保持一致，避免多一次跳转 */
export function localePath(lang: Lang, path = ""): string {
    const clean = path.replace(/^\/+|\/+$/g, "");
    return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** 切换语言时，保留当前页面，只替换语言前缀 */
export function switchLangPath(url: URL, target: Lang): string {
    const parts = url.pathname.split("/");
    if (parts[1] in ui) {
        parts[1] = target;
        return parts.join("/");
    }
    return `/${target}/`;
}