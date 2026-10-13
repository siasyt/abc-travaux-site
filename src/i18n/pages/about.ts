// =========================================================
// 关于我们页面文案（中 / 法）
// =========================================================
import type { Lang } from "../ui";

export const about = {
    fr: {
        meta: {
            title: "À propos",
            description:
                "Découvrez ABC Travaux : notre identité, notre équipe et notre écosystème de partenaires pour réussir l'implantation des marques en France.",
        },
        why: {
            title: "Why Us.",
            subtitle: "ABC Travaux Identity Matrix",
            image: "/images/why-us/why-us-welcome.webp",
            imageAlt: "Bienvenue chez ABC, une équipe dédiée à votre projet",
            tagline: "ABC ne construit pas seulement des bâtiments, mais un pont entre vos rêves et la réalité.",
            // 顺序：从左到右、从上到下，共 9 格
            matrix: [
                {
                    title: "Proposition de valeur",
                    text: "Une réalisation de A à Z qui oppose la certitude aux risques d'une ouverture à l'étranger. Étapes, responsabilités et standards clairement définis.",
                },
                {
                    title: "Relation client",
                    text: "La sérénité d'une implantation internationale. Ni changement d'équipe, ni sous-traitance opaque : un partenaire stable, ancré localement.",
                },
                {
                    title: "Positionnement",
                    text: "Une entreprise de référence pour l'implantation des marques chinoises en France, alliant communication fluide et exigence des standards français.",
                },
                {
                    title: "Communication",
                    text: "Un style moderne et épuré, une équipe jeune et agile, guidée par l'efficacité, l'ordre et le sens du concret.",
                },
                {
                    title: "Cœur de marque",
                    text: "Planning maîtrisé à rebours et gestion clé en main, pour une implantation conforme en Europe.",
                },
                {
                    title: "Personnalité",
                    text: "Multiculturelle et ouverte. Chaque besoin compte : notre équipe peaufine le savoir-faire, nos clients affinent leur marque.",
                },
                {
                    title: "Mission & vision",
                    text: "Devenir la référence du secteur en anticipant les risques et en sécurisant la date d'ouverture, pour une croissance durable en Europe.",
                },
                {
                    title: "Culture",
                    text: "Responsabilité & rigueur<br />Respect & ouverture<br />Efficacité & qualité<br />Innovation & fiabilité",
                },
                {
                    title: "Nos atouts",
                    text: "Architectes diplômés, chefs de chantier expérimentés et plus de 30 salariés permanents. Un bureau en France, une exécution tous corps d'état.",
                },
            ],
        },
        team: {
            eyebrow: "Internal.",
            title: ["Our", "Team."],
            image: "/images/team/team-cover.webp",
            signature: "ABC Ltd.",
            tagline: "Ce qui fait la force d'ABC, ce n'est pas seulement une équipe experte, <br />c'est aussi la confiance de nos clients.",
            members: [
                {
                    role: ["Founder &", "Director"],
                    name: "Kévin NI",
                    keywords: "Management | Communication | Supervision | Innovation",
                    text: "10 ans d'expérience. Garant des valeurs d'ABC, il définit la vision à long terme de la marque et de l'équipe, développe les projets en France et a accompagné l'implantation de nombreuses marques chinoises renommées.",
                },
                {
                    role: ["Site Supervisor &", "Manager"],
                    name: "Fangting GUO",
                    keywords: "Coordination | Communication | Supervision | Exécution",
                    text: "10 ans d'expérience. Pilier de l'exécution des projets, en charge de la gestion des ressources, du contrôle et du suivi de chantier, pour garantir la bonne réalisation de chaque étape.",
                },
                {
                    role: ["Designer &", "Architect"],
                    name: "Derek WANG",
                    keywords: "Innovation | Supervision | Conception | Coordination",
                    text: "15 ans d'expérience. Il allie esthétique et fonctionnalité, conçoit des projets en France et accompagne les marques chinoises dans la création d'espaces ancrés localement et ouverts sur le monde.",
                },
                {
                    role: ["Project", "Execution Team"],
                    name: "Christophe SU",
                    keywords: "Management | Pilotage | Exécution | Livraison",
                    text: "15 ans d'expérience en gestion de projets de construction. Il coordonne ressources et plannings, a mis en place des process standardisés adaptés au contexte local et assure le lien entre équipes françaises et chinoises, du design au budget jusqu'au chantier.",
                },
            ],
        },
        stakeholders: {
            eyebrow: "External",
            title: ["Our", "External", "Stake-", "holders."],
            tagline: "Chaque personne croisée sur notre chemin fait avancer ABC.",
            groups: [
                {
                    label: "Customers",
                    image: "/images/stakeholders/stakeholder-03.webp",
                    items: [
                        { name: "CNIT" },
                        { name: "Westfield" },
                        { name: "POP MART" },
                        { name: "Joybuy" },
                        { name: "MINISO" },
                    ],
                },
                {
                    label: "Government",
                    image: "/images/stakeholders/stakeholder-02.webp",
                    items: [
                        { name: "Collectivités locales", text: "Permis de construire & urbanisme" },
                        { name: "Commissions d'aménagement", text: "Planification territoriale & revue de conception" },
                        { name: "Organismes environnementaux", text: "Développement durable & études d'impact" },
                        { name: "Partenaires financiers", text: "Financements & aides publiques" },
                    ],
                },
                {
                    label: "Suppliers",
                    image: "/images/stakeholders/stakeholder-01.webp",
                    items: [
                        { name: "Matériaux", text: "La plateforme du bâtiment" },
                        { name: "Architecture", text: "Lina Ghotmeh — Architecture" },
                        { name: "Ingénierie", text: "VINCI Construction" },
                        { name: "Assurance", text: "SMA BTP" },
                    ],
                },
            ],
        },
    },
    zh: {
        meta: {
            title: "关于我们",
            description:
                "了解 ABC Travaux：我们的品牌理念、核心团队以及合作伙伴生态，助力品牌在法国顺利落地。",
        },
        why: {
            title: "Why Us.",
            subtitle: "ABC Travaux Identity Matrix",
            image: "/images/why-us/why-us-welcome.webp",
            imageAlt: "Bienvenue chez ABC, une équipe dédiée à votre projet",
            tagline: "ABC搭建的不仅是建筑，更是美好和现实的桥梁。",
            matrix: [
                {
                    title: "价值主张",
                    text: "从A到Z全链路落地，以“确定性”对抗海外开店风险。不谈空泛效果，首要拆清节点、责任与商业标准。",
                },
                {
                    title: "客户关系",
                    text: "提供跨国落地的终极安全感。拒绝中途换人与外包乱象，以长期稳定的本地根基，做值得托付的战略伙伴。",
                },
                {
                    title: "品牌定位",
                    text: "法国出海落地第一梯队建筑商。打通中法壁垒，兼具华人团队的高效无缝沟通，与法国本土的严苛商业标准。",
                },
                {
                    title: "沟通方式",
                    text: "极简现代风格，拥有灵活&年轻血液的同时，追求效率与秩序。更致力于理想和实际的结合。",
                },
                {
                    title: "品牌内核",
                    text: "反向控时，全案托管，助中国品牌合规破局欧洲。",
                },
                {
                    title: "品牌调性",
                    text: "多文化&开放性。尊重&重视每一个需求，我们的团队打磨工艺，我们的顾客细琢品牌。",
                },
                {
                    title: "使命愿景",
                    text: "树立出海建筑行业标杆。通过把风险前置、严控开业窗口期，助力中国品牌在欧洲土地上华丽绽放、行稳致远。",
                },
                {
                    title: "品牌文化",
                    text: "责任&严谨<br />尊重&开放<br />效率&品质<br />创新&可靠",
                },
                {
                    title: "品牌竞争力",
                    text: "正规军协同作战：持证建筑师+经验工长+长期在职员工30+。拥有法国专属办公室，具备强大的全法全项交付力。",
                },
            ],
        },
        team: {
            eyebrow: "Internal.",
            title: ["Our", "Team."],
            image: "/images/team/team-cover.webp",
            signature: "ABC Ltd.",
            tagline: "成就ABC的不只是我们专业的团队，<br />更是客户的信任和肯定。",
            members: [
                {
                    role: ["Founder &", "Director"],
                    name: "Kévin NI",
                    keywords: "管理｜沟通｜监管｜创新",
                    text: "10年从业经验，ABC品牌核心价值的奠定者，确立品牌及团队长期发展目标；在推进法国本土项目发展的同时，促成多项知名中国品牌在法项目落地。",
                },
                {
                    role: ["Site Supervisor &", "Manager"],
                    name: "Fangting GUO",
                    keywords: "协调｜沟通｜监管｜执行",
                    text: "10年从业经验，项目实施核心人物，负责资源把控、项目审核与实施监管，把控项目具体落实并推动实际进展。",
                },
                {
                    role: ["Designer &", "Architect"],
                    name: "Derek WANG",
                    keywords: "创新｜监管｜规划｜协调",
                    text: "15年从业经验，善于在美学与功能之间取得平衡；在推动法国本土项目设计实践的同时，协助多个中国品牌在法项目实现空间落地，打造兼具在地性与国际视野的设计成果。",
                },
                {
                    role: ["Project", "Execution Team"],
                    name: "Christophe SU",
                    keywords: "管理｜统筹｜执行｜交付",
                    text: "15年建筑及工程项目管理经验，擅长统筹多方资源与工期节奏，确保项目高效落地。以多个跨国项目为范例，确立标准化流程与本地化适配的执行体系；在推进本土项目实施的同时，有效衔接中法团队协作，保障设计、预算与施工各环节精准对接。",
                },
            ],
        },
        stakeholders: {
            eyebrow: "External",
            title: ["Our", "External", "Stake-", "holders."],
            tagline: "陪伴ABC前行的是每一个与我们打过招呼的人。",
            groups: [
                {
                    label: "Customers",
                    image: "/images/stakeholders/stakeholder-03.webp",
                    items: [
                        { name: "CNIT" },
                        { name: "Westfield" },
                        { name: "POP MART" },
                        { name: "Joybuy" },
                        { name: "MINISO" },
                    ],
                },
                {
                    label: "Government",
                    image: "/images/stakeholders/stakeholder-02.webp",
                    items: [
                        { name: "地方政府", text: "建筑许可证审批&规划管理" },
                        { name: "区域规划委员会", text: "区域规划&设计评审" },
                        { name: "环境监督管理机构", text: "审查建筑可持续发展&环境影响评估" },
                        { name: "相关金融机构", text: "提供资金支持、相关补贴" },
                    ],
                },
                {
                    label: "Suppliers",
                    image: "/images/stakeholders/stakeholder-01.webp",
                    items: [
                        { name: "材料供应商", text: "La plateforme du bâtiment" },
                        { name: "建筑师事务所", text: "Lina Ghotmeh — Architecture" },
                        { name: "工程公司", text: "VINCI Construction" },
                        { name: "保险公司", text: "SMA BTP" },
                    ],
                },
            ],
        },
    },
} satisfies Record<Lang, unknown>;