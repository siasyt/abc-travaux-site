// =========================================================
// 合作品牌 Logo 列表（顺序与 PDF 第 3 页一致）
// 新增品牌：把 Logo 放到 public/images/partners/，再在这里加一行
// =========================================================

export interface Partner {
    name: string;
    logo: string;
}

export const partners: Partner[] = [
    { name: "POP MART", logo: "/images/partners/pop-mart.png" },
    { name: "JD.com", logo: "/images/partners/jd.png" },
    { name: "Westfield", logo: "/images/partners/westfield.png" },
    { name: "Joybuy", logo: "/images/partners/joybuy.png" },
    { name: "MINISO", logo: "/images/partners/miniso.png" },
    { name: "Gong cha", logo: "/images/partners/gong-cha.png" },
    { name: "CNIT", logo: "/images/partners/cnit.png" },
    { name: "Galeries Lafayette", logo: "/images/partners/galeries-lafayette.png" },
    { name: "Honobono", logo: "/images/partners/honobono.png" },
    { name: "Roastland", logo: "/images/partners/roastland.png" },
    { name: "KOI Thé", logo: "/images/partners/koi-the.png" },
    { name: "PANGO", logo: "/images/partners/pango.png" },
    { name: "VIVAIA", logo: "/images/partners/vivaia.png" },
    { name: "Meilleur Moment", logo: "/images/partners/meilleur-moment.png" },
    { name: "Machi Machi", logo: "/images/partners/machi-machi.png" },
    { name: "Partner", logo: "/images/partners/partner-blue-m.png" }, // TODO: 确认品牌名称
    { name: "Na-Young", logo: "/images/partners/na-young.png" },
    { name: "Café Petibon", logo: "/images/partners/cafe-petibon.png" },
    { name: "KUPBAP", logo: "/images/partners/kupbap.png" },
];