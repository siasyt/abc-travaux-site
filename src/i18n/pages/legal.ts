// =========================================================
// 法律声明 + 隐私政策文案（中 / 法）
// 公司信息统一来自 src/data/company.ts
// =========================================================
import type { Lang } from "../ui";
import { company as co } from "../../data/company";

export interface LegalSection {
    title: string;
    html: string; // 段落内容，可包含 <p> <ul> <a> <strong>
}

export interface LegalPageText {
    meta: { title: string; description: string };
    eyebrow: string;
    title: string;
    updated: string;
    note?: string; // 中文版说明"以法文为准"
    sections: LegalSection[];
}

// ---------------------------------------------------------
// Mentions légales 法律声明
// ---------------------------------------------------------
export const mentions: Record<Lang, LegalPageText> = {
    fr: {
        meta: {
            title: "Mentions légales",
            description: "Mentions légales du site ABC Travaux : éditeur, directeur de la publication, hébergeur.",
        },
        eyebrow: "Legal",
        title: "Mentions légales",
        updated: `Dernière mise à jour : ${co.lastUpdate.fr}`,
        sections: [
            {
                title: "Éditeur du site",
                html: `
          <p>Le site <strong>www.abc-travaux.com</strong> est édité par :</p>
          <ul>
            <li><strong>${co.legalName}</strong> (nom commercial : ${co.tradeName})</li>
            <li>${co.legalForm.fr} au capital de ${co.capital}</li>
            <li>Siège social : ${co.headOffice}</li>
            <li>Immatriculée au ${co.rcs}</li>
            <li>EUID : ${co.euid}</li>
            <li>N° TVA intracommunautaire : ${co.vat}</li>
            <li>E-mail : <a href="mailto:${co.email}">${co.email}</a></li>
            <li>Téléphone : ${co.phone}</li>
          </ul>`,
            },
            {
                title: "Directeur de la publication",
                html: `<p>${co.president}, en qualité de Président.</p>`,
            },
            {
                title: "Hébergement",
                html: `
          <p>Le site est hébergé par :</p>
          <ul>
            <li><strong>${co.host.name}</strong></li>
            <li>${co.host.address}</li>
            <li><a href="${co.host.url}" target="_blank" rel="noopener">${co.host.url.replace("https://", "")}</a></li>
          </ul>`,
            },
            {
                title: "Propriété intellectuelle",
                html: `
          <p>L'ensemble des contenus du site (textes, photographies, logo, mise en page) est la propriété de ${co.legalName} ou fait l'objet d'une autorisation d'utilisation. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.</p>
          <p>Les marques et logos des partenaires et clients cités sur le site restent la propriété de leurs titulaires respectifs et sont présentés à titre de références.</p>`,
            },
            {
                title: "Responsabilité",
                html: `
          <p>Les informations publiées sur ce site sont fournies à titre indicatif. ${co.legalName} s'efforce d'en assurer l'exactitude mais ne saurait être tenue responsable d'erreurs ou d'omissions, ni de l'utilisation qui pourrait en être faite. Les devis et engagements contractuels ne sont valables qu'après échange écrit avec nos équipes.</p>`,
            },
            {
                title: "Données personnelles",
                html: `<p>Le traitement des données personnelles collectées via le formulaire de contact est décrit dans notre <a href="/fr/confidentialite/">politique de confidentialité</a>.</p>`,
            },
            {
                title: "Droit applicable",
                html: `<p>Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut d'accord amiable, les tribunaux français seront seuls compétents.</p>`,
            },
        ],
    },
    zh: {
        meta: {
            title: "法律声明",
            description: "ABC Travaux 网站法律声明：网站发布者、出版负责人、托管服务商。",
        },
        eyebrow: "Legal",
        title: "法律声明",
        updated: `最后更新：${co.lastUpdate.zh}`,
        note: "本页面为法文版《Mentions légales》的中文译本，如有差异，以法文版本为准。",
        sections: [
            {
                title: "网站发布者",
                html: `
          <p>本网站 <strong>www.abc-travaux.com</strong> 由以下公司发布：</p>
          <ul>
            <li><strong>${co.legalName}</strong>（商业名称：${co.tradeName}）</li>
            <li>${co.legalForm.zh}，注册资本 ${co.capital}</li>
            <li>注册地址：${co.headOffice}</li>
            <li>商业注册号：${co.rcs}</li>
            <li>欧盟企业识别码（EUID）：${co.euid}</li>
            <li>欧盟增值税号：${co.vat}</li>
            <li>邮箱：<a href="mailto:${co.email}">${co.email}</a></li>
            <li>电话：${co.phone}</li>
          </ul>`,
            },
            {
                title: "出版负责人",
                html: `<p>${co.president}，公司总裁（Président）。</p>`,
            },
            {
                title: "网站托管",
                html: `
          <p>本网站由以下服务商托管：</p>
          <ul>
            <li><strong>${co.host.name}</strong></li>
            <li>440 N Barranca Avenue #4133, Covina, CA 91723, 美国</li>
            <li><a href="${co.host.url}" target="_blank" rel="noopener">${co.host.url.replace("https://", "")}</a></li>
          </ul>`,
            },
            {
                title: "知识产权",
                html: `
          <p>本网站的全部内容（文字、照片、标志、版式设计）均归 ${co.legalName} 所有，或已获得使用授权。未经事先书面许可，禁止以任何形式全部或部分复制、展示或传播。</p>
          <p>网站中提及的合作伙伴及客户的商标和标志归其各自所有者所有，仅作为合作案例展示。</p>`,
            },
            {
                title: "责任声明",
                html: `
          <p>本网站发布的信息仅供参考。${co.legalName} 尽力确保信息准确，但不对可能存在的错误、遗漏或因使用这些信息而产生的后果承担责任。报价及合同承诺须经与我们团队的书面确认后方为有效。</p>`,
            },
            {
                title: "个人数据",
                html: `<p>通过联系表单收集的个人数据的处理方式，请参阅我们的<a href="/zh/confidentialite/">隐私政策</a>。</p>`,
            },
            {
                title: "适用法律",
                html: `<p>本法律声明受法国法律管辖。如发生争议且无法协商解决，由法国法院专属管辖。</p>`,
            },
        ],
    },
};

// ---------------------------------------------------------
// Politique de confidentialité 隐私政策
// ---------------------------------------------------------
export const privacy: Record<Lang, LegalPageText> = {
    fr: {
        meta: {
            title: "Politique de confidentialité",
            description: "Politique de confidentialité du site ABC Travaux : données collectées, finalités, durée de conservation et vos droits.",
        },
        eyebrow: "RGPD",
        title: "Politique de confidentialité",
        updated: `Dernière mise à jour : ${co.lastUpdate.fr}`,
        sections: [
            {
                title: "1. Responsable du traitement",
                html: `<p><strong>${co.legalName}</strong> (${co.tradeName}), ${co.legalForm.fr}, dont le siège social est situé ${co.headOffice}, immatriculée au ${co.rcs}. Contact : <a href="mailto:${co.email}">${co.email}</a>.</p>`,
            },
            {
                title: "2. Données collectées",
                html: `
          <p>Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de contact :</p>
          <ul>
            <li>nom et prénom, société ou marque ;</li>
            <li>adresse e-mail et numéro de téléphone ;</li>
            <li>type de projet, ville du projet et description de votre demande.</li>
          </ul>
          <p>Les champs marqués d'un astérisque sont obligatoires pour traiter votre demande.</p>`,
            },
            {
                title: "3. Finalités et base légale",
                html: `
          <p>Ces données sont utilisées exclusivement pour répondre à votre demande de contact ou de devis et, le cas échéant, assurer le suivi de votre projet.</p>
          <p>Le traitement repose sur votre consentement (case à cocher du formulaire) et sur l'exécution de mesures précontractuelles prises à votre demande (article 6.1.a et 6.1.b du RGPD).</p>
          <p>Vos données ne sont jamais vendues ni utilisées à des fins de prospection commerciale sans votre accord.</p>`,
            },
            {
                title: "4. Destinataires et sous-traitants",
                html: `
          <p>Vos données sont destinées uniquement aux équipes de ${co.tradeName}. Pour faire fonctionner le site, nous faisons appel aux prestataires suivants :</p>
          <ul>
            <li><strong>Vercel Inc.</strong> : hébergement du site ;</li>
            <li><strong>Web3Forms</strong> : transmission du formulaire par e-mail ;</li>
            <li><strong>Google</strong> : messagerie électronique de l'entreprise ;</li>
            <li><strong>hCaptcha (Intuition Machines, Inc.)</strong> : protection du formulaire contre les robots et le spam.</li>
          </ul>
          <p>Certains de ces prestataires sont situés aux États-Unis. Les transferts de données sont encadrés par les garanties prévues par le RGPD (EU-U.S. Data Privacy Framework ou clauses contractuelles types de la Commission européenne).</p>`,
            },
            {
                title: "5. Durée de conservation",
                html: `<p>Les données issues du formulaire sont conservées pendant <strong>3 ans</strong> à compter de notre dernier échange, puis supprimées. Si votre demande aboutit à un contrat, les données nécessaires sont conservées pendant la durée légale applicable aux documents commerciaux et comptables.</p>`,
            },
            {
                title: "6. Cookies et traceurs",
                html: `
          <p>Le site n'utilise <strong>aucun cookie publicitaire ni outil de mesure d'audience</strong>.</p>
          <ul>
            <li>Sur la page Contact, le service <strong>hCaptcha</strong> est chargé afin de sécuriser le formulaire ; il peut déposer des traceurs strictement nécessaires à cette fonction de sécurité.</li>
            <li>La <strong>carte Google Maps</strong> n'est chargée que si vous cliquez sur le bouton prévu à cet effet ; Google peut alors déposer ses propres cookies.</li>
            <li>Une information technique est enregistrée temporairement dans votre navigateur (sessionStorage) pour éviter les envois multiples du formulaire ; elle n'est jamais transmise et disparaît à la fermeture de l'onglet.</li>
          </ul>`,
            },
            {
                title: "7. Vos droits",
                html: `
          <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données, ainsi que du droit de retirer votre consentement à tout moment.</p>
          <p>Pour exercer ces droits, écrivez-nous à <a href="mailto:${co.email}">${co.email}</a>. Nous vous répondrons dans un délai d'un mois.</p>
          <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>.</p>`,
            },
            {
                title: "8. Sécurité",
                html: `<p>Le site est accessible exclusivement en HTTPS. Le formulaire est protégé par plusieurs mesures anti-spam et ne stocke aucune donnée sur le site lui-même : les demandes sont transmises directement par e-mail à nos équipes.</p>`,
            },
        ],
    },
    zh: {
        meta: {
            title: "隐私政策",
            description: "ABC Travaux 网站隐私政策：收集的数据、使用目的、保存期限及您的权利。",
        },
        eyebrow: "RGPD",
        title: "隐私政策",
        updated: `最后更新：${co.lastUpdate.zh}`,
        note: "本页面为法文版《Politique de confidentialité》的中文译本，如有差异，以法文版本为准。",
        sections: [
            {
                title: "1. 数据控制者",
                html: `<p><strong>${co.legalName}</strong>（${co.tradeName}），${co.legalForm.zh}，注册地址：${co.headOffice}，商业注册号：${co.rcs}。联系邮箱：<a href="mailto:${co.email}">${co.email}</a>。</p>`,
            },
            {
                title: "2. 收集的数据",
                html: `
          <p>我们只收集您通过联系表单主动提供的数据：</p>
          <ul>
            <li>姓名、公司或品牌；</li>
            <li>邮箱和电话号码；</li>
            <li>项目类型、项目所在城市及项目描述。</li>
          </ul>
          <p>标有星号的字段为处理您的咨询所必需的信息。</p>`,
            },
            {
                title: "3. 使用目的与法律依据",
                html: `
          <p>这些数据仅用于回复您的咨询或报价请求，并在需要时跟进您的项目。</p>
          <p>数据处理的法律依据为您的同意（表单中的勾选框），以及应您要求采取的合同前措施（RGPD 第 6.1.a 条和第 6.1.b 条）。</p>
          <p>未经您同意，我们绝不会出售您的数据，也不会将其用于商业推广。</p>`,
            },
            {
                title: "4. 数据接收方与服务商",
                html: `
          <p>您的数据仅供 ${co.tradeName} 团队使用。为保障网站正常运行，我们使用以下服务商：</p>
          <ul>
            <li><strong>Vercel Inc.</strong>：网站托管；</li>
            <li><strong>Web3Forms</strong>：将表单内容通过邮件发送给我们；</li>
            <li><strong>Google</strong>：公司邮箱服务；</li>
            <li><strong>hCaptcha（Intuition Machines, Inc.）</strong>：防止机器人和垃圾信息。</li>
          </ul>
          <p>部分服务商位于美国。相关数据传输受 RGPD 规定的保障措施约束（欧美数据隐私框架或欧盟委员会标准合同条款）。</p>`,
            },
            {
                title: "5. 保存期限",
                html: `<p>表单数据自我们最后一次联系起保存 <strong>3 年</strong>，之后删除。如您的咨询最终签订了合同，相关必要数据将按照法国商业及会计文件的法定期限保存。</p>`,
            },
            {
                title: "6. Cookie 与追踪技术",
                html: `
          <p>本网站<strong>不使用任何广告 Cookie 或访问统计工具</strong>。</p>
          <ul>
            <li>在联系页面，我们加载 <strong>hCaptcha</strong> 服务来保护表单，它可能会设置该安全功能所必需的追踪技术。</li>
            <li><strong>Google 地图</strong>只有在您点击相应按钮后才会加载，届时 Google 可能会设置其自身的 Cookie。</li>
            <li>为防止重复提交表单，浏览器会临时保存一条技术信息（sessionStorage），该信息不会被发送，关闭标签页后即自动清除。</li>
          </ul>`,
            },
            {
                title: "7. 您的权利",
                html: `
          <p>根据 RGPD 及法国《信息与自由法》，您有权访问、更正、删除、限制处理、反对处理以及转移您的数据，并可随时撤回您的同意。</p>
          <p>如需行使上述权利，请发送邮件至 <a href="mailto:${co.email}">${co.email}</a>，我们将在一个月内回复。</p>
          <p>如您认为自身权利未得到尊重，可向法国国家信息与自由委员会（CNIL）投诉：<a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>。</p>`,
            },
            {
                title: "8. 安全",
                html: `<p>本网站仅通过 HTTPS 加密访问。联系表单设有多重防垃圾信息保护，网站本身不存储任何数据：您的咨询会直接通过邮件发送给我们的团队。</p>`,
            },
        ],
    },
};