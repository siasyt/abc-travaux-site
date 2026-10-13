// =========================================================
// 图集文案（中 / 法）
// =========================================================
import type { Lang } from "../ui";

export const galleryText = {
    fr: {
        eyebrow: "Brick-and-Mortar · Resto · Bar-Café",
        title: ["Portfolio."],
        filters: {
            all: "Tout",
            retail: "Boutiques",
            resto: "Restaurants",
            bar: "Bars & Cafés",
        },
        close: "Fermer",
        prev: "Image précédente",
        next: "Image suivante",
    },
    zh: {
        eyebrow: "Brick-and-Mortar · Resto · Bar-Café",
        title: ["Portfolio."],
        filters: {
            all: "全部",
            retail: "品牌门店",
            resto: "餐厅",
            bar: "酒吧 & 咖啡",
        },
        close: "关闭",
        prev: "上一张",
        next: "下一张",
    },
} satisfies Record<Lang, unknown>;