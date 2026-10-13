// =========================================================
// 项目案例页面文案（中 / 法）
// =========================================================
import type { Lang } from "../ui";

const IMG = "/images/projects";

export const projects = {
    fr: {
        meta: {
            title: "Réalisations",
            description:
                "Boutiques de marque, pop-up au Louvre, flagship sur les Champs-Élysées, restaurant en immeuble haussmannien : découvrez les défis relevés par ABC Travaux.",
        },
        intro: {
            eyebrow: "Challenges — and — Difficulty.",
            title: ["Our", "Projects."],
            lead: "Chaque projet a ses contraintes. Voici comment ABC les transforme en réussites.",
            difficulty: "Difficulté",
        },
        // 每个区块 = 若干案例 + 一组图片
        blocks: [
            {
                id: "boutiques-pop-up",
                images: [`${IMG}/brand-store-02.webp`, `${IMG}/brand-store-06.webp`, `${IMG}/brand-store-05.webp`, `${IMG}/brand-store-08.webp`, `${IMG}/brand-store-09.webp`, `${IMG}/brand-store-04.webp`],
                cases: [
                    {
                        title: "Boutique de marque",
                        stars: 5,
                        subtitle: "Règles strictes & travaux invisibles",
                        points: [
                            { title: "Cahier des charges & pénalités", text: "Enseignes, devantures, rideaux métalliques et rails au sol doivent respecter à la lettre les exigences du centre commercial. Bruit et propreté sont surveillés en permanence, sous peine de pénalités très lourdes." },
                            { title: "Raccordement aux réseaux du bâtiment", text: "Climatisation, ventilation, sprinklers et détection incendie doivent être raccordés aux réseaux de l'immeuble : la moindre erreur peut déclencher l'alarme générale. Il faut négocier avec les sous-traitants agréés du centre et les mobiliser sur des délais très serrés." },
                            { title: "Travaux de nuit & logistique minutée", text: "Les travaux bruyants et poussiéreux se font de nuit, et le site doit être impeccable à l'ouverture. Les livraisons se réservent à l'avance : un camion en retard est refusé et toute la nuit d'installation est perdue." },
                        ],
                    },
                    {
                        title: "Pop-up emblématique",
                        stars: 5,
                        subtitle: "Contraintes patrimoniales du Louvre & délais extrêmes",
                        points: [
                            { title: "Logistique & manutention verticale", text: "Aucun monte-charge moderne : décors, structures métalliques et éléments volumineux sont montés à la main par des escaliers étroits et sinueux. Le moindre choc expose à des réclamations du ministère de la Culture et des organismes du patrimoine." },
                            { title: "Fenêtre de travaux ultra-courte", text: "Aucun bruit ni poussière ne doit gêner les visiteurs : transport et montage se font uniquement de minuit à 6 h, après la fermeture du musée. L'installation doit surgir en une nuit." },
                        ],
                    },
                ],
            },
            {
                id: "champs-elysees",
                images: [`${IMG}/champs-elysees-03.webp`, `${IMG}/champs-elysees-01.webp`, `${IMG}/champs-elysees-02.webp`, `${IMG}/champs-elysees-04.webp`],
                cases: [
                    {
                        title: "Flagship de 1 000 m² — Champs-Élysées",
                        stars: 4,
                        subtitle: "Dépose de l'existant & précision au millimètre",
                        points: [
                            { title: "Faux plafond : l'inconnu à réorganiser", text: "Derrière 1 000 m² de faux plafond se cachent anciennes gaines, câbles hérités et systèmes CVC complexes. Points lumineux et bouches de ventilation doivent être recalés dès la dépose terminée." },
                            { title: "Mobilier importé : la règle des 5 mm", text: "Le mobilier sur mesure livré par bateau (LED encastrées, étagères, panneaux) doit s'ajuster du premier coup. En cas d'écart, aplombs et niveaux sont repris aussitôt sur site pour éviter un nouvel envoi et des modifications coûteuses." },
                            { title: "Règlement du centre & installations réservées", text: "Rideaux métalliques, éclairage et matériaux des enseignes, raccordement CVC : tout doit respecter le cahier des charges du centre. Seules les entreprises agréées peuvent intervenir sur les sprinklers." },
                        ],
                    },
                ],
            },
            {
                id: "haussmann",
                images: [`${IMG}/haussmann-02.webp`, `${IMG}/haussmann-08.webp`, `${IMG}/haussmann-03.webp`, `${IMG}/haussmann-10.webp`, `${IMG}/haussmann-04.webp`, `${IMG}/haussmann-14.webp`, `${IMG}/haussmann-06.webp`, `${IMG}/haussmann-12.webp`, `${IMG}/haussmann-13.webp`],
                cases: [
                    {
                        title: "Restaurant en pied d'immeuble haussmannien",
                        stars: 5,
                        subtitle: "Patrimoine protégé & conflits structure / technique",
                        points: [
                            { title: "Patrimoine & autorisations", text: "Toute modification de façade ou d'enseigne passe par l'avis de l'Architecte des Bâtiments de France. En copropriété, les travaux touchant conduits communs ou murs porteurs exigent un vote en assemblée générale, avec un risque de longs litiges liés aux nuisances." },
                            { title: "Équipements lourds vs bâti ancien", text: "Les anciens conduits ne supportent ni le débit ni la chaleur d'une extraction moderne : tubage spécifique ou filtration sont nécessaires. La puissance électrique requise impose souvent une demande d'augmentation auprès d'Enedis." },
                            { title: "Bois du XIXe siècle vs normes du XXIe", text: "Pour atteindre le degré coupe-feu exigé, la cuisine est entièrement encoffrée en plaques coupe-feu doubles ou triples. Le bac à graisse est installé avec prudence dans la cave voûtée, tout en respectant le rayon de giration PMR." },
                            { title: "Zéro erreur sur le chantier", text: "La dépose révèle souvent canalisations abandonnées, câblages sauvages ou poutres carbonisées. Rues étroites, livraisons en petits camions, évacuation des déchets selon les règles de tri : les coûts cachés doivent être anticipés en permanence." },
                        ],
                    },
                ],
            },
        ],
    },
    zh: {
        meta: {
            title: "项目案例",
            description:
                "品牌门店、卢浮宫快闪、香街旗舰店、奥斯曼建筑底商餐厅：了解 ABC Travaux 攻克的每一个项目难点。",
        },
        intro: {
            eyebrow: "Challenges — and — Difficulty.",
            title: ["Our", "Projects."],
            lead: "每一个项目都有它的难点，这是 ABC 把难点变成成果的方式。",
            difficulty: "难度系数",
        },
        blocks: [
            {
                id: "boutiques-pop-up",
                images: [`${IMG}/brand-store-02.webp`, `${IMG}/brand-store-06.webp`, `${IMG}/brand-store-05.webp`, `${IMG}/brand-store-08.webp`, `${IMG}/brand-store-09.webp`, `${IMG}/brand-store-04.webp`],
                cases: [
                    {
                        title: "品牌门店",
                        stars: 5,
                        subtitle: "规则地狱 & 隐匿生息",
                        points: [
                            { title: "建筑与技术规范白皮书与天价罚单", text: "灯牌、门头的统一性，卷帘门的一致性及地轨深度皆需极限符合商场要求，时刻注意噪音外泄及垃圾清理，否则将面临天价罚单。" },
                            { title: "重型大系统的接入封印", text: "商铺内部的空调、新风、消防喷淋与烟感系统必须并入大楼总网，过程极易触发全楼警报导致巨额赔偿，因此只能与商场指定特约分包商商议、总闸对接；统筹并催促法国分包商配合极限工期，通常是极大的管理痛点。" },
                            { title: "“昼伏夜出”的极限动线与物流限时", text: "为保障商场白天营业，所有带粉尘、噪音的重型施工只能在深夜进行，且须在次日清晨商场开门前做到“无事发生”般整洁；地下卸货通道必须提前在系统中精准预约，货车迟到将被拒之门外，当晚安装计划全部报废。" },
                        ],
                    },
                    {
                        title: "地标快闪",
                        stars: 5,
                        subtitle: "卢浮宫文保限制 & 极限工期",
                        points: [
                            { title: "物流与垂直运输地狱", text: "内部无现代化大型货梯，所有大型道具、特殊钢结构、组件等只能人工小心翼翼地通过狭窄且曲折的小楼梯搬运，不能磕碰，否则不仅面临工程危机，更将面临法国文化部及文保机构天价的索赔与法律诉讼。" },
                            { title: "极限真空施工期", text: "博物馆内绝对不允许因任何布展噪音、粉尘影响全球游客的正常参观，因此运输、施工只能压缩在闭馆后的深夜00:00至次日清晨06:00，团队必须做到楼宇顷刻平地起。" },
                        ],
                    },
                ],
            },
            {
                id: "champs-elysees",
                images: [`${IMG}/champs-elysees-03.webp`, `${IMG}/champs-elysees-01.webp`, `${IMG}/champs-elysees-02.webp`, `${IMG}/champs-elysees-04.webp`],
                cases: [
                    {
                        title: "香街1000㎡商场旗舰",
                        stars: 4,
                        subtitle: "旧系统拆除开盲盒 & 5MM尺寸生死线",
                        points: [
                            { title: "拆天花“开盲盒”，重建“秩序”", text: "1000㎡天花板内藏旧风管、历史遗留杂乱线缆、复杂的旧系统（HVAC），因此新店需要开多少个灯位、风口走向，需在拆除后立刻重新调校机电点位。" },
                            { title: "海运嵌入式道具“5MM生死线”", text: "采用国内定制道具海运，嵌入式的灯带、层板、背板等须一次到位；一旦出现误差——装不进去、缝不齐、接口对不上，需紧急现场复尺垂直度或找平误差，节省海运重发的时间成本及现场硬改的经济成本。" },
                            { title: "商场细则及专属技术设施苛刻限制", text: "商用卷帘门的联动下坠速度、招牌发光字的照度与材质、空调通风设施与大楼总系统的接入等，必须死守商场的《建筑与技术规范白皮书》。非商场指定的特殊资质工程队，根本没有触碰消防喷淋的资格。" },
                        ],
                    },
                ],
            },
            {
                id: "haussmann",
                images: [`${IMG}/haussmann-02.webp`, `${IMG}/haussmann-08.webp`, `${IMG}/haussmann-03.webp`, `${IMG}/haussmann-10.webp`, `${IMG}/haussmann-04.webp`, `${IMG}/haussmann-14.webp`, `${IMG}/haussmann-06.webp`, `${IMG}/haussmann-12.webp`, `${IMG}/haussmann-13.webp`],
                cases: [
                    {
                        title: "老奥斯曼底商",
                        stars: 5,
                        subtitle: "文化遗产限制与结构/机电地狱级冲突",
                        points: [
                            { title: "文保法案与“垂帘听政”的审批地狱", text: "为保护建筑外立面，改动门窗、品牌发光招牌必须通过国家建筑师的严苛复审，经验不足的方案可能被无限期驳回。若为商住两用建筑，涉及公共烟道、承重墙的施工必须获得大楼业主大会投票通过，否则极易因邻里排斥油烟噪音而陷入漫长的法律拉锯。" },
                            { title: "重型机电对百年老结构的“摧残”", text: "狭窄陈旧的老烟道无法承受现代餐饮大功率排烟的风速与高温，需安装复杂的特种内衬或无烟化过滤；且餐厅强电需求通常远高于老楼留给底商的容量，需向法国电网申请扩容审批。" },
                            { title: "19世纪木结构与21世纪需求的“生死对决”", text: "为满足消防法规对餐饮隔火时限的规定，针对奥斯曼脆弱的木质楼板，必须用特种双/三层防火石膏板将后厨完全闭环包裹。在拱顶石窖地面开凿预埋重型油脂阻集器时，既要谨慎以免破坏地基结构，又要兼顾无障碍通行的轮椅回转半径。" },
                            { title: "零容错的现场施工与物流限制", text: "百年反复改建，拆除时常发现废弃水管、私拉电线或炭化木梁，现场与图纸不符极其考验工程量预估与团队调度。市中心街道狭窄，大型后厨设备只能靠轻卡分批倒运；百年废料须严格按法国垃圾分类清运，隐形成本须时刻严格管控。" },
                        ],
                    },
                ],
            },
        ],
    },
} satisfies Record<Lang, unknown>;