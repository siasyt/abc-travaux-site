// =========================================================
// 交付流程文案（中 / 法）—— HOW WE DELIVER.
// =========================================================
import type { Lang } from "../ui";

export const delivery = {
    fr: {
        eyebrow: "Building Construction",
        title: ["How", "We Deliver."],
        image: "/images/process/how-we-deliver.webp",
        tagline: "À chaque étape, ABC vous accompagne ; sur chaque mètre carré, ABC garde le contrôle.",
        // 12 步，按 1 → 12 的顺序
        steps: [
            { title: "Lancement", items: ["Objectifs & visite du site", "Estimation des délais, du budget & des ressources"] },
            { title: "Conception", items: ["Validation : structure, agencement, façade, matériaux", "Planification & échanges"] },
            { title: "Autorisations", items: ["Dépôt des dossiers & levée des blocages", "Recherche d'aides & suivi des demandes"] },
            { title: "Préparation", items: ["Relation de confiance", "Relevés sur site, logistique & équipes"] },
            { title: "Gros œuvre", items: ["Fondations & réseaux essentiels", "Réunions & supervision de chantier"] },
            { title: "Structure", items: ["Construction de la structure", "Réunions & supervision de chantier"] },
            { title: "Équipements", items: ["Installation des équipements techniques", "Réunions & supervision de chantier"] },
            { title: "Finitions", items: ["Aménagement intérieur & façade", "Réunions & supervision de chantier"] },
            { title: "Autocontrôle", items: ["Contrôle & réception internes", "Réglages & contrôle qualité"] },
            { title: "Réception", items: ["Réception officielle avec les autorités & le client"] },
            { title: "Livraison", items: ["Mise en service pour le client", "Recueil des retours"] },
            { title: "Maintenance", items: ["SAV & réparations", "Visites de contrôle régulières"] },
        ],
    },
    zh: {
        eyebrow: "Building Construction",
        title: ["How", "We Deliver."],
        image: "/images/process/how-we-deliver.webp",
        tagline: "顾客每一步都有ABC的陪伴，项目每一寸都有ABC的把控。",
        steps: [
            { title: "项目确立", items: ["目标任务&现场勘查", "预估工期&预算&所需资源"] },
            { title: "设计规划", items: ["设计确认：结构、功能布局、外观、材料", "规划&沟通"] },
            { title: "审批许可", items: ["协助申报&问题解决", "补助争取&审批跟进"] },
            { title: "施工准备", items: ["构建信任关系", "实地测量&设施准备&团队安排"] },
            { title: "基础建设", items: ["基础施工&确立基本功能", "周期会议&施工督导"] },
            { title: "主体施工", items: ["主体搭建", "周期会议&施工督导"] },
            { title: "设施安装", items: ["功能设施安装", "周期会议&施工督导"] },
            { title: "内外装饰", items: ["内部装饰&外立面装饰", "周期会议&施工督导"] },
            { title: "自检调试", items: ["团队实地自检、验收", "必要调试、品质检验"] },
            { title: "竣工验收", items: ["相关部门&客户正式验收"] },
            { title: "交付使用", items: ["客户正式交付使用", "反馈收集"] },
            { title: "后期维护", items: ["售后服务&维修", "定期勘检&回访"] },
        ],
    },
} satisfies Record<Lang, unknown>;