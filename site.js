const translations = {
  en: {
    navOverview: "Overview", navCapabilities: "Capabilities", navUpdates: "Updates",
    eyebrow: "A little devil beside your SQLite database", headline: "Reveal what sleeps\ninside each cell.",
    heroDescription: "A native SQLite client for macOS, built for data that does not fit neatly inside a cell.",
    download: "Download for macOS", explore: "Explore capabilities", requirements: "Requires macOS 15 or later · Apple silicon and Intel",
    featureHeadline: "Data is more than plain text.",
    featureIntro: "Double-click once. What was sealed inside the cell reveals its true form.",
    smartEditTitle: "JSON as a tree. Markdown as a document. Images as images.",
    smartEditBody: "Double-click and work with it directly. Quick edits stay in the table; richer content gets the space and controls it needs.",
    demoCaption: "From a compact cell to a structured JSON editor—without leaving the table.",
    quietKicker: "A familiar's little tricks", quietTitle: "Leave the lesser rituals to your familiar.",
    reviewKicker: "Changes", reviewTitle: "Make changes without surprises",
    reviewBody: "Edit freely, review everything together, then commit when you are ready.",
    passwordKicker: "Password memory", passwordTitle: "Come back without the password prompt",
    passwordBody: "Choose to remember the password for an encrypted database and reopen it in one step.",
    sqlIntelligenceTitle: "Stay in flow with SQL", sqlIntelligenceBody: "Write with schema-aware completion, run the statement you mean, and see the query plan.",
    visualDocumentsTitle: "Markdown, diagrams, and more", visualDocumentsBody: "Edit documents and preview Mermaid or PlantUML without leaving the database.",
    databaseToolsTitle: "Maintenance, close at hand", databaseToolsBody: "Back up, verify, restore, check integrity, analyze, and vacuum in one place.",
    libraryWhispers: "Whispers after midnight", updatesTitle: "New magic, delivered quietly.",
    updatesBody: "Koakuma checks its official signed update feed, verifies each release, and lets you install without leaving the app.",
    downloadLatest: "Download Koakuma {version}",
    fanNotice: "Touhou Project is created by Team Shanghai Alice. Koakuma is an independent product using original fan-inspired motifs and is not affiliated with or endorsed by Team Shanghai Alice."
  },
  zh: {
    navOverview: "概览", navCapabilities: "功能", navUpdates: "更新",
    eyebrow: "驻守在 SQLite 数据库旁的小恶魔", headline: "唤醒沉睡在\n单元格里的真貌。",
    heroDescription: "一款原生 macOS SQLite 客户端，专门处理那些塞不进小小单元格的数据。",
    download: "下载 macOS 版", explore: "查看产品功能", requirements: "需要 macOS 15 或更高版本 · 支持 Apple 芯片与 Intel",
    featureHeadline: "数据，不只是纯文本。",
    featureIntro: "只需双击，封印在单元格里的内容便会显露真正的形态。",
    smartEditTitle: "JSON 是树，Markdown 是文档，图片就是图片。",
    smartEditBody: "双击即可直接处理。简单修改留在表格里；更丰富的内容，则拥有需要的空间与工具。",
    demoCaption: "从紧凑的单元格，进入结构清晰的 JSON 编辑器——不必离开数据表。",
    quietKicker: "使魔的小把戏", quietTitle: "琐碎的仪式，交给使魔。",
    reviewKicker: "变更", reviewTitle: "放心修改，落库前再确认",
    reviewBody: "先按你的想法编辑，把所有变更一起看清楚，再决定何时提交。",
    passwordKicker: "密码记忆", passwordTitle: "下次打开，不必再次输入",
    passwordBody: "选择记住加密数据库的密码，再次打开同一个文件时一步完成解锁。",
    sqlIntelligenceTitle: "写 SQL，不打断思路", sqlIntelligenceBody: "补全相关的数据表与字段，执行想运行的语句，并直观看到查询计划。",
    visualDocumentsTitle: "Markdown、图表，不必另开工具", visualDocumentsBody: "直接编辑文档，并在数据库内预览 Mermaid 或 PlantUML。",
    databaseToolsTitle: "日常维护，触手可及", databaseToolsBody: "在一个地方完成备份、验证、恢复、完整性检查、分析与整理。",
    libraryWhispers: "午夜后的低语", updatesTitle: "新的魔法，悄然送达。",
    updatesBody: "Koakuma 通过官方签名更新源检查新版本，验证每次发布，并让你无需离开 App 即可安装。",
    downloadLatest: "下载 Koakuma {version}",
    fanNotice: "Touhou Project 由上海爱丽丝幻乐团创作。Koakuma 是采用原创同人灵感元素的独立产品，与上海爱丽丝幻乐团不存在从属或授权关系。"
  }
};

const languageButton = document.querySelector("#language-button");
const preferredLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
let language = localStorage.getItem("koakuma-site-language") || preferredLanguage;
let latestVersion = "1.0.7";

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value.replace("{version}", latestVersion);
  });
  languageButton.textContent = language === "zh" ? "EN" : "中文";
  localStorage.setItem("koakuma-site-language", language);
}

languageButton.addEventListener("click", () => applyLanguage(language === "zh" ? "en" : "zh"));
document.querySelector("#year").textContent = new Date().getFullYear();
applyLanguage(language);

async function syncLatestDownload() {
  try {
    const response = await fetch("updates/appcast.xml", { cache: "no-cache" });
    if (!response.ok) return;

    const feedDocument = new DOMParser().parseFromString(await response.text(), "application/xml");
    if (feedDocument.querySelector("parsererror")) return;

    const item = feedDocument.querySelector("channel > item");
    const enclosure = item?.querySelector("enclosure");
    const versionElement = item
      ? Array.from(item.children).find((element) => element.localName === "shortVersionString")
      : null;
    const downloadURL = enclosure?.getAttribute("url");
    const version = versionElement?.textContent?.trim() || item?.querySelector("title")?.textContent?.trim();

    if (downloadURL) {
      document.querySelectorAll("[data-download-latest]").forEach((link) => {
        link.href = downloadURL;
      });
    }
    if (version) {
      latestVersion = version;
      applyLanguage(language);
    }
  } catch {
    // Keep the static, known-good release link when the feed is temporarily unavailable.
  }
}

syncLatestDownload();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });
  revealElements.forEach((element) => revealObserver.observe(element));
}
