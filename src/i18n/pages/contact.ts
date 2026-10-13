// =========================================================
// 联系页面文案（中 / 法）
// =========================================================
import type { Lang } from "../ui";

export const contact = {
    fr: {
        meta: {
            title: "Contact",
            description:
                "Un projet de boutique, de restaurant ou de pop-up en France ? Contactez ABC Travaux pour un devis gratuit et un accompagnement clé en main.",
        },
        eyebrow: "Contact",
        title: ["Let's Build", "Together."],
        lead: "Parlez-nous de votre projet : nous revenons vers vous sous 48\u00a0h avec une première estimation.",
        info: {
            address: "Adresse",
            phone: "Téléphone",
            email: "E-mail",
            wechat: "WeChat",
        },
        form: {
            title: "Demande de devis",
            name: "Nom & prénom",
            company: "Société / Marque",
            email: "E-mail",
            phone: "Téléphone",
            type: "Type de projet",
            typeOptions: [
                "Boutique / Flagship",
                "Pop-up store",
                "Restaurant / Café / Bar",
                "Bureaux",
                "Autre",
            ],
            typePlaceholder: "Choisir…",
            location: "Ville du projet",
            message: "Votre projet",
            messagePlaceholder: "Surface, adresse, délais souhaités, budget…",
            consent:
                "J'accepte que mes données soient utilisées pour être recontacté(e) au sujet de ma demande.",
            submit: "Envoyer la demande",
            sending: "Envoi en cours…",
            success: "Merci ! Votre demande a bien été envoyée. Nous vous répondons sous 48\u00a0h.",
            error: "Une erreur est survenue. Merci de réessayer ou de nous écrire directement par e-mail.",
            mailtoNotice: "Votre logiciel de messagerie va s'ouvrir avec votre demande pré-remplie.",
            required: "Champs obligatoires",
            subject: "Nouvelle demande de devis — site ABC Travaux",
        },
    },
    zh: {
        meta: {
            title: "联系我们",
            description:
                "计划在法国开设门店、餐厅或快闪店？联系 ABC Travaux，获取免费报价与一站式托管服务。",
        },
        eyebrow: "Contact",
        title: ["Let's Build", "Together."],
        lead: "告诉我们您的项目，我们将在 48 小时内回复并提供初步评估。",
        info: {
            address: "地址",
            phone: "电话",
            email: "邮箱",
            wechat: "微信",
        },
        form: {
            title: "获取报价",
            name: "姓名",
            company: "公司 / 品牌",
            email: "邮箱",
            phone: "电话",
            type: "项目类型",
            typeOptions: ["品牌门店 / 旗舰店", "快闪店", "餐厅 / 咖啡厅 / 酒吧", "办公室", "其他"],
            typePlaceholder: "请选择…",
            location: "项目所在城市",
            message: "项目描述",
            messagePlaceholder: "面积、地址、期望工期、预算等…",
            consent: "我同意 ABC Travaux 使用我填写的信息，以便就本次咨询与我联系。",
            submit: "提交咨询",
            sending: "正在发送…",
            success: "感谢您的咨询！我们已收到您的信息，将在 48 小时内与您联系。",
            error: "发送失败，请稍后再试，或直接通过邮箱联系我们。",
            mailtoNotice: "即将打开您的邮件软件，咨询内容已自动填写。",
            required: "为必填项",
            subject: "网站新咨询 — ABC Travaux",
        },
    },
} satisfies Record<Lang, unknown>;