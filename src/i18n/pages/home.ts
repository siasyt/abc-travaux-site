// =========================================================
// 首页文案（中 / 法）
// =========================================================
import type { Lang } from "../ui";

export const home = {
    fr: {
        hero: {
            company: "A.B.C Ltd.",
            title: ["ABC", "Travaux"],
            slogan: "Bâtir avec le cœur",
            ctaPrimary: "Demander un devis",
            ctaSecondary: "Nos réalisations",
        },
        stats: [
            { to: 16, suffix: "", final: "16", label: "Ans d'expérience" },
            { to: 250, suffix: "+", final: "250+", label: "Projets réalisés" },
            { to: 50, suffix: "", final: "50", label: "Partenaires" },
            { to: 1000, suffix: "+", final: "1 000+", label: "Clients fidèles" },
        ],
        who: {
            title: ["Who", "We Are."],
            company: "ABC Travaux Ltd.",
            paragraphs: [
                "ABC est une entreprise générale de travaux fondée par une équipe chinoise, solidement implantée en France et reconnue dans le secteur. Intégrée verticalement, elle accompagne les marques du monde entier avec des solutions d'aménagement clés en main, de la conception (A) à la livraison (Z). Grâce à une gestion de chantier rigoureuse, nous offrons à nos clients <mark>un accompagnement entièrement délégué, en toute sérénité</mark>.",
                "Véritable pont entre les marques chinoises et le marché européen, ABC s'appuie sur 16 ans d'expérience pour comprendre les défis d'une implantation à l'international : les <mark>différences culturelles</mark>, des <mark>délais exigeants</mark> et une <mark>réglementation locale</mark> stricte <em>(normes de sécurité ERP, PLU, règles incendie des ERP de type M, accessibilité PMR, cahiers des charges techniques des centres commerciaux)</em>. Forts de notre ancrage local, nous levons les barrières linguistiques et administratives pour allier la vision internationale des marques chinoises au savoir-faire artisanal français.",
            ],
        },
        partners: {
            eyebrow: "Experience",
            title: ["Our", "Partners."],
            lead: "Notre rencontre ne repose pas seulement sur la confiance, <br />mais aussi sur une estime mutuelle.",
            paragraphs: [
                "ABC a accompagné de nombreuses <mark>marques internationales</mark>, des <mark>géants du retail haut de gamme</mark> et de <mark>jeunes marques en pleine expansion</mark>, en concevant pour elles des espaces de marque devenus des références du secteur.",
                "Qu'il s'agisse d'un <mark>emplacement premium en centre commercial</mark>, de la <mark>mise en conformité d'un bâtiment classé</mark> ou d'un <mark>espace retail interactif</mark>, ABC restitue fidèlement chaque détail du design, avec une parfaite maîtrise de l'espace et une qualité de livraison irréprochable.",
            ],
        },
        services: {
            eyebrow: "Service",
            lead: "Avec ABC, chaque collaboration va au-delà de la mission : <br />c'est l'engagement d'un artisan.",
            more: "En savoir plus",
            items: [
                {
                    id: "retail",
                    title: ["Retail", "Space."],
                    image: "/images/services/retail-space.webp",
                    tags: "Flagships · Boutiques · Sièges sociaux · Corners en grands magasins · Pop-up stores",
                    points: [
                        "Conformité & autorisations intégrées",
                        "Délais serrés | Fidélité au design",
                        "Parcours client | Rentabilité au m²",
                    ],
                },
                {
                    id: "hospitality",
                    title: ["Hospitality", "Space."],
                    image: "/images/services/hospitality-space.webp",
                    tags: "Restaurants · Cafés · Bars · Hôtellerie-restauration",
                    points: [
                        "Normes incendie & hygiène maîtrisées",
                        "Intégration des systèmes techniques lourds",
                        "Ambiances immersives",
                    ],
                },
            ],
        },
        confidence: {
            eyebrow: "Voice",
            lead: "ABC souhaite avancer à vos côtés et devenir <br />un partenaire durable et solidaire.",
            name: ["Kévin", "NI"],
            role: "Founder & Director",
            title: ["We Have", "Confidence."],
            lines: [
                "En tant que leader, nous avançons vers l'avenir avec confiance.",
                "J'ai confiance en notre équipe :",
                "chaque projet livré est une médaille pour ABC,",
                "chaque réalisation de qualité porte l'empreinte de notre expérience.",
                "Notre équipe relève les défis et assume ses responsabilités,",
                "car ABC ne construit pas seulement des bâtiments,",
                "mais un pont entre vos idées et la réalité.",
            ],
            signature: "ABC Travaux Ltd.",
            cta: "Nous contacter",
            image: "/images/gallery/bar-cafe-01.webp",
            imageAlt: "Boutique KOI Thé à Paris, réalisée par ABC Travaux",
        },
    },
    zh: {
        hero: {
            company: "A.B.C Ltd.",
            title: ["ABC", "Travaux"],
            slogan: "Bâtir avec le cœur",
            ctaPrimary: "获取报价",
            ctaSecondary: "项目案例",
        },
        stats: [
            { to: 16, suffix: "年", final: "16年", label: "业界经验" },
            { to: 250, suffix: "+", final: "250+", label: "成功案例" },
            { to: 50, suffix: "个", final: "50个", label: "合作伙伴" },
            { to: 1000, suffix: "+", final: "1千+", label: "忠实客户" },
        ],
        who: {
            title: ["Who", "We Are."],
            company: "ABC Travaux Ltd.",
            paragraphs: [
                "ABC是一家深耕法国、享誉业界的华人垂直整合建筑服务商，致力于为全球品牌提供从概念规划（A）到完美交付（Z）的一站式全案空间解决方案，以卓越的工程管理打造真正让客户<mark>全程“省心放手”的托管式服务体验</mark>。",
                "作为中国品牌成功出海欧洲的“空间筑梦者”与落地桥梁，ABC凭借16年的专业经验，深刻理解中国企业在跨国商业落地中，所面临的<mark>文化差异</mark>，所担忧的高标准<mark>工期要求</mark>，所为难的当地严苛<mark>建筑法规</mark><em>（如ERP公众接待场所安全规范、PLU地方城市规划法令、ERP-M类商业场所消防安全法案、PMR无障碍通行准则，及对接各商场物业的技术与建筑规范白皮书）</em>。我们凭借扎根法国本地市场多年的行业经验，打破语言与体制壁垒，将中国出海品牌的全球化视野与法国本土的精湛工匠精神（Savoir-faire）完美融合。",
            ],
        },
        partners: {
            eyebrow: "Experience",
            title: ["Our", "Partners."],
            lead: "ABC与您的相识不仅基于彼此的信任，<br />更是源于彼此的欣赏。",
            paragraphs: [
                "ABC已成功携手众多<mark>国际知名品牌</mark>、<mark>高端零售巨头</mark>及<mark>新锐出海企业</mark>，为其量身打造了多场轰动业界的标杆级品牌空间。",
                "无论是核心<mark>商圈黄金铺位</mark>、<mark>历史保护建筑合规改造</mark>，亦或<mark>前沿互动零售空间</mark>，ABC均会在保障视觉高精度还原的同时，展现出卓越的空间驾驭能力与顶级的项目交付质量。",
            ],
        },
        services: {
            eyebrow: "Service",
            lead: "ABC与您的合作不仅是任务的完成，<br />更是匠人的恪尽职守。",
            more: "了解更多",
            items: [
                {
                    id: "retail",
                    title: ["Retail", "Space."],
                    image: "/images/services/retail-space.webp",
                    tags: "全球旗舰店｜精品零售商铺｜现代化总部办公室｜高端百货专柜｜限时 POP-UP STORE",
                    points: ["一体化合规报批", "极限工期｜视觉还原", "科学动线｜坪效最大化"],
                },
                {
                    id: "hospitality",
                    title: ["Hospitality", "Space."],
                    image: "/images/services/hospitality-space.webp",
                    tags: "餐厅｜咖啡厅｜酒吧｜餐饮与款待业空间",
                    points: ["跨越消防卫生红线", "重型后勤技术系统集成", "沉浸式微醺与就餐氛围"],
                },
            ],
        },
        confidence: {
            eyebrow: "Voice",
            lead: "ABC愿与您携手同行，成为密不可分、<br />相互扶持的长期合作伙伴。",
            name: ["Kévin", "NI"],
            role: "Founder & Director",
            title: ["We Have", "Confidence."],
            lines: [
                "作为一个领导者，我们带着信心迈向未来。",
                "我信任我们的团队，",
                "每一次项目落地都是ABC成功的勋章，",
                "每一个高品质交付都是ABC历练的烙印，",
                "我们的团队勇于接受挑战也敢于承担重任，",
                "因为ABC构建的不只是建筑，",
                "而是您理想和现实之间的桥梁。",
            ],
            signature: "ABC Travaux Ltd.",
            cta: "联系我们",
            image: "/images/gallery/bar-cafe-01.webp",
            imageAlt: "ABC Travaux 承建的巴黎 KOI Thé 门店",
        },
    },
} satisfies Record<Lang, unknown>;