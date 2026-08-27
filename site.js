const translations = {
  en: {
    navOverview: "Overview", navCapabilities: "Capabilities", navUpdates: "Updates",
    eyebrow: "The little devil in your data library", headline: "Every table in its place.\nA whisper away.",
    heroDescription: "A native SQLite client for macOS, built for data that does not fit neatly inside a cell.",
    download: "Download for macOS", explore: "Explore capabilities", requirements: "Requires macOS 15 or later · Apple silicon and Intel",
    featureHeadline: "Data is more than plain text.",
    featureIntro: "Smart Edit Mode lets every value open in a form that feels natural.",
    smartEditTitle: "JSON as a tree. Markdown as a document. Images as images.",
    smartEditBody: "Double-click and work with it directly. Quick edits stay in the table; richer content gets the space and controls it needs.",
    reviewKicker: "Changes", reviewTitle: "Make changes without surprises",
    reviewBody: "Edit freely, review everything together, then commit when you are ready.",
    passwordKicker: "Password memory", passwordTitle: "Come back without the password prompt",
    passwordBody: "Choose to remember the password for an encrypted database and reopen it in one step.",
    sqlIntelligenceTitle: "Stay in flow with SQL", sqlIntelligenceBody: "Write with schema-aware completion, run the statement you mean, and see the query plan.",
    visualDocumentsTitle: "Markdown, diagrams, and more", visualDocumentsBody: "Edit documents and preview Mermaid or PlantUML without leaving the database.",
    databaseToolsTitle: "Maintenance, close at hand", databaseToolsBody: "Back up, verify, restore, check integrity, analyze, and vacuum in one place.",
    libraryWhispers: "Whispers from the library", updatesTitle: "Signed updates, delivered quietly.",
    updatesBody: "Koakuma checks its official signed update feed, verifies each release, and lets you install without leaving the app.",
    comingSoon: "Signed download coming soon",
    fanNotice: "Touhou Project is created by Team Shanghai Alice. Koakuma is an independent product using original fan-inspired motifs and is not affiliated with or endorsed by Team Shanghai Alice."
  },
  zh: {
    navOverview: "概览", navCapabilities: "功能", navUpdates: "更新",
    eyebrow: "驻守在数据图书馆的小恶魔", headline: "每张表各归其位。\n轻声呼唤，即刻寻得。",
    heroDescription: "一款原生 macOS SQLite 客户端，专门处理那些塞不进小小单元格的数据。",
    download: "下载 macOS 版", explore: "查看产品功能", requirements: "需要 macOS 15 或更高版本 · 支持 Apple 芯片与 Intel",
    featureHeadline: "数据，不只是纯文本。",
    featureIntro: "Smart Edit Mode 让不同内容，以自然的形态打开。",
    smartEditTitle: "JSON 是树，Markdown 是文档，图片就是图片。",
    smartEditBody: "双击即可直接处理。简单修改留在表格里；更丰富的内容，则拥有需要的空间与工具。",
    reviewKicker: "变更", reviewTitle: "放心修改，落库前再确认",
    reviewBody: "先按你的想法编辑，把所有变更一起看清楚，再决定何时提交。",
    passwordKicker: "密码记忆", passwordTitle: "下次打开，不必再次输入",
    passwordBody: "选择记住加密数据库的密码，再次打开同一个文件时一步完成解锁。",
    sqlIntelligenceTitle: "写 SQL，不打断思路", sqlIntelligenceBody: "补全相关的数据表与字段，执行想运行的语句，并直观看到查询计划。",
    visualDocumentsTitle: "Markdown、图表，不必另开工具", visualDocumentsBody: "直接编辑文档，并在数据库内预览 Mermaid 或 PlantUML。",
    databaseToolsTitle: "日常维护，触手可及", databaseToolsBody: "在一个地方完成备份、验证、恢复、完整性检查、分析与整理。",
    libraryWhispers: "来自图书馆的低语", updatesTitle: "签名更新，安静送达。",
    updatesBody: "Koakuma 通过官方签名更新源检查新版本，验证每次发布，并让你无需离开 App 即可安装。",
    comingSoon: "签名下载即将开放",
    fanNotice: "Touhou Project 由上海爱丽丝幻乐团创作。Koakuma 是采用原创同人灵感元素的独立产品，与上海爱丽丝幻乐团不存在从属或授权关系。"
  }
};

const languageButton = document.querySelector("#language-button");
const preferredLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
let language = localStorage.getItem("koakuma-site-language") || preferredLanguage;

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  languageButton.textContent = language === "zh" ? "EN" : "中文";
  localStorage.setItem("koakuma-site-language", language);
}

languageButton.addEventListener("click", () => applyLanguage(language === "zh" ? "en" : "zh"));
document.querySelector("#year").textContent = new Date().getFullYear();
applyLanguage(language);
