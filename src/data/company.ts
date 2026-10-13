// =========================================================
// 公司法定信息（来源：Kbis，2026 年 5 月 7 日）
// 法律声明、隐私政策页面会读取这里的信息
// =========================================================

export const company = {
    legalName: "A.B.C",
    tradeName: "ABC Travaux",
    legalForm: {
        fr: "Société par actions simplifiée à associé unique (SASU)",
        zh: "一人简化股份有限公司（SASU）",
    },
    capital: "800,00 €",
    rcs: "104 707 377 R.C.S. Melun",
    siren: "104 707 377",
    euid: "FR7702.104707377",
    vat: "FR59104707377", // TODO: 请向会计确认该增值税号已经启用
    headOffice: "2 Ter Rue René Cassin, 77000 Melun, France",
    president: "GAO Fengming",
    email: "abctravaux.ge@gmail.com",
    phone: "07 70 03 97 65",
    host: {
        name: "Vercel Inc.",
        address: "440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis",
        url: "https://vercel.com",
    },
    lastUpdate: { fr: "13 octobre 2026", zh: "2026年10月13日" },
} as const;