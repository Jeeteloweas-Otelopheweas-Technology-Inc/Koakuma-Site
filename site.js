const translations = {
  en: {
    navOverview: "Overview", navCapabilities: "Capabilities", navUpdates: "Updates",
    eyebrow: "The little devil in your data library", headline: "Every table in its place.\nA whisper away.",
    heroDescription: "Koakuma is a native SQLite client for macOS. Smart Edit Mode chooses an editor from the value type, length, and detected format.",
    download: "Download for macOS", explore: "Explore capabilities", requirements: "Requires macOS 15 or later · Apple silicon and Intel",
    databaseCapabilities: "Database capabilities", featureHeadline: "A familiar for serious database work.",
    featureIntro: "A focused native interface for browsing, querying, inspecting, and editing SQLite databases.",
    smartEditTitle: "One double-click. The right editor.",
    smartEditBody: "Koakuma routes a cell by its value type, length, detected format, and saved column preference. Short plain text stays inline; long or structured text opens in a focused editor; binary data opens in a viewer.",
    shortValue: "Short value", inlineEdit: "Inline edit", smartEditor: "Smart editor", binaryValue: "Image · BLOB", smartViewer: "Smart viewer",
    reviewKicker: "Safe changes", reviewTitle: "See the change before it lands",
    reviewBody: "Cell edits, inserts, and deletes remain pending. Review the affected rows and generated SQL, then commit or discard them together.",
    passwordKicker: "Password memory", passwordTitle: "Unlock once. Remember when you choose.",
    passwordBody: "Optionally remember an encrypted database password so the same file can reopen without asking again.",
    sqlIntelligenceTitle: "Schema-aware SQL", sqlIntelligenceBody: "Relevant table and column completion, statement-level execution, and visual query plans.",
    visualDocumentsTitle: "Visual documents", visualDocumentsBody: "Edit Markdown and preview Mermaid or PlantUML diagrams without leaving the database.",
    databaseToolsTitle: "Database tools", databaseToolsBody: "Back up, verify, restore, check integrity, analyze, and vacuum from one workspace.",
    libraryWhispers: "Whispers from the library", updatesTitle: "Signed updates, delivered quietly.",
    updatesBody: "Koakuma checks its official signed update feed, verifies each release, and lets you install without leaving the app.",
    comingSoon: "Signed download coming soon",
    fanNotice: "Touhou Project is created by Team Shanghai Alice. Koakuma is an independent product using original fan-inspired motifs and is not affiliated with or endorsed by Team Shanghai Alice."
  },
  zh: {
    navOverview: "概览", navCapabilities: "功能", navUpdates: "更新",
    eyebrow: "驻守在数据图书馆的小恶魔", headline: "每张表各归其位。\n轻声呼唤，即刻寻得。",
    heroDescription: "Koakuma 是为 macOS 打造的原生 SQLite 客户端。Smart Edit Mode 会根据值类型、长度与检测到的格式，自动选择编辑方式。",
    download: "下载 macOS 版", explore: "查看产品功能", requirements: "需要 macOS 15 或更高版本 · 支持 Apple 芯片与 Intel",
    databaseCapabilities: "数据库能力", featureHeadline: "认真处理数据库的可靠使魔。",
    featureIntro: "在一个专注的原生界面中浏览、查询、检查和编辑 SQLite 数据库。",
    smartEditTitle: "双击一次，打开合适的编辑器。",
    smartEditBody: "Koakuma 会根据值类型、长度、检测到的格式与已保存的列偏好分流。短纯文本留在表格内编辑；长文本或结构化文本进入专用编辑器；二进制内容进入查看器。",
    shortValue: "短值", inlineEdit: "行内编辑", smartEditor: "智能编辑器", binaryValue: "图片 · BLOB", smartViewer: "智能查看器",
    reviewKicker: "安全变更", reviewTitle: "落库之前，先看清变更",
    reviewBody: "单元格编辑、插入与删除都会保持待提交状态。检查受影响的行与生成的 SQL，再统一提交或放弃。",
    passwordKicker: "密码记忆", passwordTitle: "解锁一次，按你的选择记住。",
    passwordBody: "可选记住加密数据库的密码，再次打开同一个文件时无需重复输入。",
    sqlIntelligenceTitle: "理解 Schema 的 SQL", sqlIntelligenceBody: "补全相关的数据表与字段，按语句执行，并用图形查看查询计划。",
    visualDocumentsTitle: "可视化文档", visualDocumentsBody: "直接编辑 Markdown，并在数据库内预览 Mermaid 或 PlantUML 图表。",
    databaseToolsTitle: "数据库工具", databaseToolsBody: "在同一个工作区中完成备份、验证、恢复、完整性检查、分析与整理。",
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
