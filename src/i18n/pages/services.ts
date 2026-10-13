// =========================================================
// 服务页面文案（中 / 法）
// =========================================================
import type { Lang } from "../ui";

export const services = {
    fr: {
        meta: {
            title: "Services",
            description:
                "Aménagement de boutiques, flagships, pop-up stores, restaurants, cafés et bars : ABC Travaux gère votre projet clé en main, de la conformité à la livraison.",
        },
        eyebrow: "Service",
        lead: "Avec ABC, chaque collaboration va au-delà de la mission : <br />c'est l'engagement d'un artisan.",
        items: [
            {
                id: "retail",
                title: ["Retail", "Space."],
                image: "/images/services/retail-space.webp",
                intro: [
                    "Choisir ABC, ce n'est pas seulement choisir une entreprise de travaux <mark>expérimentée</mark> : c'est choisir un partenaire stratégique qui <mark>comprend l'ambition des marques chinoises</mark> et <mark>maîtrise les règles françaises</mark>.",
                    "Qu'il s'agisse d'un pop-up éphémère au Louvre ou d'un flagship emblématique au cœur d'un immeuble haussmannien, ABC met son efficacité et son savoir-faire au service de votre réussite en France.",
                ],
                tags: "Flagships · Boutiques · Sièges sociaux · Corners en grands magasins · Pop-up stores",
                tagline: "Standards esthétiques internationaux | L'ADN de votre marque mis en scène",
                points: [
                    {
                        title: "Conformité & autorisations intégrées",
                        text: "Parfaite connaissance des cahiers des charges des centres commerciaux et des règles d'urbanisme locales : la conformité est intégrée dès la conception pour obtenir rapidement les autorisations.",
                    },
                    {
                        title: "Délais serrés | Fidélité au design",
                        text: "Pour les projets à forte contrainte de temps, notre réseau de fournisseurs locaux et une organisation de chantier flexible permettent de restituer le design à 100 %, même dans des fenêtres d'installation très courtes.",
                    },
                    {
                        title: "Parcours client | Rentabilité au m²",
                        text: "Étude des flux, éclairage et mobilier modulable : nous relions l'identité de la marque à l'émotion du client, pour une meilleure expérience en boutique et une rentabilité au m² durablement accrue.",
                    },
                ],
            },
            {
                id: "hospitality",
                title: ["Hospitality", "Space."],
                image: "/images/services/hospitality-space.webp",
                intro: [
                    "Avec ABC, vous bénéficiez de bien plus que des travaux d'aménagement : un <mark>accompagnement clé en main</mark>.",
                    "Autorisations, adaptation du design au contexte local, approvisionnement à l'échelle européenne, suivi de chantier et maintenance. Une gestion de projet entièrement digitalisée et un engagement clair : <mark>budget transparent</mark>, <mark>délais maîtrisés</mark>, <mark>qualité avant tout</mark>.",
                ],
                tags: "Restaurants · Cafés · Bars · Hôtellerie-restauration",
                tagline: "Fonctionnalité & art de vivre à la française | Une expérience sensorielle immersive",
                points: [
                    {
                        title: "Normes incendie & hygiène maîtrisées",
                        text: "Maîtrise des règles de sécurité incendie ERP, d'hygiène alimentaire, d'extraction et d'acoustique. Du classement au feu des matériaux en cuisine à l'accessibilité PMR, votre établissement est prêt pour la commission de sécurité dès le premier passage.",
                    },
                    {
                        title: "Intégration des systèmes techniques lourds",
                        text: "Une expertise complète des lots techniques : extraction commerciale haute puissance, bac à graisse, ventilation et climatisation (CVC), séparation courants forts / faibles, étanchéité et antidérapant en cuisine.",
                    },
                    {
                        title: "Ambiances immersives",
                        text: "Acoustique, lumière, mobilier et décoration au service de l'identité de la marque, pour que chaque client vive une expérience où culture, espace et émotion se rencontrent.",
                    },
                ],
            },
        ],
        painPoints: {
            title: "You May Encounter.",
            subtitle: "Pain-points",
            groups: [
                {
                    label: "Choisir une équipe chinoise",
                    cards: [
                        {
                            title: "Crédibilité",
                            badge: "Douteuse",
                            image: "/images/pain-points/pain-point-05.webp",
                            items: [
                                "Pas de Kbis ni de qualifications professionnelles",
                                "Pas d'assurance décennale ni de RC professionnelle",
                                "Refus de signer un contrat en bonne et due forme",
                                "Aucune facture officielle",
                            ],
                        },
                        {
                            title: "Expérience",
                            badge: "Faible",
                            image: "/images/pain-points/pain-point-04.webp",
                            items: [
                                "Aucune référence de projets",
                                "Équipe floue & ouvriers peu expérimentés",
                                "Matériaux au rabais, non conformes au devis",
                                "Erreurs de métré & de fabrication sur mesure",
                                "Design daté & sans originalité",
                                "Finitions et qualité médiocres",
                                "Travaux non conformes aux normes de réception",
                                "Projet jamais abouti",
                            ],
                        },
                        {
                            title: "Processus",
                            badge: "Chaotique",
                            image: "/images/pain-points/pain-point-03.webp",
                            items: [
                                "Budget opaque & suppléments abusifs",
                                "Retards sans engagement de délai",
                                "Litiges sur l'acompte, voire disparition après paiement",
                                "Interlocuteurs flous & changeants",
                                "Aucun suivi des jalons ni reporting transparent",
                            ],
                        },
                        {
                            title: "Après-vente",
                            badge: "Absent",
                            image: "/images/pain-points/pain-point-02.webp",
                            items: [
                                "Aucune garantie après travaux",
                                "SAV difficile, sans réponse",
                                "Ni suivi, ni recueil d'avis",
                                "Refus de responsabilité",
                                "Aucune coopération avec l'assurance",
                            ],
                        },
                    ],
                },
                {
                    label: "Choisir une équipe française",
                    cards: [
                        {
                            title: "Exécution",
                            badge: "Freinée",
                            image: "/images/pain-points/pain-point-06.webp",
                            items: [
                                "Pénurie de main-d'œuvre & changements d'équipe",
                                "Faible productivité, sans date de fin garantie",
                                "Congés qui retardent fortement le chantier",
                                "Pas d'entreprise générale : chaque lot travaille seul, les retards s'accumulent",
                                "Main-d'œuvre chère & prix des matériaux instables",
                                "Plans déconnectés de la réalité du chantier",
                            ],
                        },
                        {
                            title: "Communication",
                            badge: "Difficile",
                            image: "/images/pain-points/pain-point-01.webp",
                            items: [
                                "Échanges écrits lents & engagements peu fiables",
                                "Contraintes syndicales et congés : délais serrés (pop-up) difficiles à tenir",
                                "Interlocuteurs multiples & pertes d'information",
                                "Contrats rigides, responsabilités floues, peu adaptés aux marques étrangères",
                                "Barrière de la langue & malentendus",
                            ],
                        },
                    ],
                },
            ],
        },
    },
    zh: {
        meta: {
            title: "服务",
            description:
                "旗舰店、精品零售、快闪店、餐厅、咖啡厅与酒吧空间：ABC Travaux 提供从合规报批到交付维保的一站式托管服务。",
        },
        eyebrow: "Service",
        lead: "ABC与您的合作不仅是任务的完成，<br />更是匠人的恪尽职守。",
        items: [
            {
                id: "retail",
                title: ["Retail", "Space."],
                image: "/images/services/retail-space.webp",
                intro: [
                    "选择ABC，不仅是选择一家<mark>经验十足</mark>的装修公司，更是选择了一个<mark>懂中国品牌雄心</mark>、又<mark>精通法国本土规则</mark>的战略合作伙伴。",
                    "无论贵品牌期待着一场旨在引爆巴黎卢浮宫的限时快闪，还是一座屹立在奥斯曼建筑群中的地标旗舰店，ABC都将以极致的效率与匠心，助您在法兰西的土地上华丽绽放，让出海之路行稳致远，势在必得。",
                ],
                tags: "全球旗舰店｜精品零售商铺｜现代化总部办公室｜高端百货专柜｜限时 POP-UP STORE",
                tagline: "国际级审美标准｜品牌DNA的顶流氛围空间",
                points: [
                    {
                        title: "一体化合规报批",
                        text: "深谙法国主流商场建筑与技术规范白皮书及街区地方城市规划法令，在设计之初即融入合规逻辑，确保高效率通过行政审批。",
                    },
                    {
                        title: "极限工期｜视觉还原",
                        text: "针对时间敏感型项目，凭借强大的本土供应链与柔性施工调度，在多方限制的极限布展时间内实现设计图纸的100%全景还原。",
                    },
                    {
                        title: "科学动线｜坪效最大化",
                        text: "精密的人流热力动线规划、照明系统布局与模块化陈列道具设计，将品牌文化与消费者情感深度链接，在优化客户进店体验的同时，大幅提升坪效转换，为品牌创造持久的商业增值。",
                    },
                ],
            },
            {
                id: "hospitality",
                title: ["Hospitality", "Space."],
                image: "/images/services/hospitality-space.webp",
                intro: [
                    "选择ABC，得到的不只是基础的硬装施工，更是<mark>一站式托管服务</mark>。",
                    "前期规章报批、空间设计本土化转化、供应链全欧统筹、全场施工监理及后期维保。全流程数字化项目管理，ABC承诺：<mark>预算透明</mark>、<mark>工期严控</mark>、<mark>品质至上</mark>。",
                ],
                tags: "餐厅｜咖啡厅｜酒吧｜餐饮与款待业空间",
                tagline: "功能主义与法式实用美学｜感官共鸣的沉浸式美学磁场",
                points: [
                    {
                        title: "跨越消防卫生红线",
                        text: "精通法国公众接待场所消防安全规范以及食品卫生与排烟隔音标准。从后厨材料防火等级到残疾人无障碍通行动线，确保开业前100%一次性通过安全委员会联合验收。",
                    },
                    {
                        title: "重型后勤技术系统集成",
                        text: "拥有极强的专业后勤全项施工能力，精确计算并完美落地：大功率商用排烟系统、油脂阻集器、通风与空调HVAC、强弱电分区以及后厨深度防水防滑工程。",
                    },
                    {
                        title: "沉浸式微醺与就餐氛围",
                        text: "紧扣品牌文化核心，将声学隔音、环境光影、软装陈设与实用功能完美交织，让消费者在享受服务的同时，沉浸于文化、空间、情感多重融合的完美空间。",
                    },
                ],
            },
        ],
        painPoints: {
            title: "You May Encounter.",
            subtitle: "Pain-points",
            groups: [
                {
                    label: "选择华人团队",
                    cards: [
                        {
                            title: "企业信誉",
                            badge: "不明",
                            image: "/images/pain-points/pain-point-05.webp",
                            items: [
                                "缺乏法国正规执照（KBIS）与行业准入资质",
                                "缺失法国十年期建筑保险及民事责任险",
                                "拒绝提供有效合同",
                                "无法提供正式发票",
                            ],
                        },
                        {
                            title: "团队经验",
                            badge: "匮乏",
                            image: "/images/pain-points/pain-point-04.webp",
                            items: [
                                "无成功案例展示",
                                "团队配置不明 & 作业工人经验欠丰",
                                "选材偷工减料 & 与约定不符",
                                "测量、定制失准",
                                "设计老套 & 千篇一律",
                                "工艺、质量粗糙",
                                "工艺标准粗糙，无法达到规定的验收标准",
                                "方案落空",
                            ],
                        },
                        {
                            title: "合作程序",
                            badge: "混乱",
                            image: "/images/pain-points/pain-point-03.webp",
                            items: [
                                "预算不透明，后期恶意追加款项",
                                "工期拖延 & 无明确承诺",
                                "预付款纠纷 & 支付后跑路",
                                "团队不明 & 更换",
                                "缺乏项目里程碑节点管理与透明化汇报机制",
                            ],
                        },
                        {
                            title: "售后保障",
                            badge: "欠缺",
                            image: "/images/pain-points/pain-point-02.webp",
                            items: [
                                "不提供售后保障承诺",
                                "维修售后困难 & 无回应",
                                "无定期回访 & 意见收集",
                                "拒绝负责 & 推卸责任",
                                "不配合保险理赔",
                            ],
                        },
                    ],
                },
                {
                    label: "选择法国团队",
                    cards: [
                        {
                            title: "项目落地",
                            badge: "掣肘",
                            image: "/images/pain-points/pain-point-06.webp",
                            items: [
                                "工人短缺 & 中途换人",
                                "工作效率低 & 无明确完工承诺",
                                "假期制度严重影响进度",
                                "缺乏总承包商统筹能力，各技术分项各自为战，严重拖延进度",
                                "人工价格高昂 & 材料价格浮动大",
                                "图纸与现场脱节",
                            ],
                        },
                        {
                            title: "沟通协商",
                            badge: "障碍",
                            image: "/images/pain-points/pain-point-01.webp",
                            items: [
                                "文书沟通效率低下 & 承诺信誉低",
                                "受限于当地工会与假期制度，极限工期（如快闪店）交付能力极低",
                                "对接角色混乱 & 信息丢失",
                                "合同责任界定模糊，条款古板，缺乏对出海品牌特殊需求的灵活性响应",
                                "语言沟通障碍 & 陷阱",
                            ],
                        },
                    ],
                },
            ],
        },
    },
} satisfies Record<Lang, unknown>;