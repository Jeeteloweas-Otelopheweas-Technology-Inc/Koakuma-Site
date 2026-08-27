const translations = {
  en: {
    navFeatures: "Features", navUpdates: "Updates", eyebrow: "A focused SQLite workspace for macOS", headline: "Your data, without the drag.",
    heroDescription: "Browse large tables, edit safely, inspect structured values, and write SQL in a native workspace designed to stay out of your way.", download: "Download for macOS", source: "View source", requirements: "Requires macOS 15 or later · Apple silicon and Intel",
    screenshotCaption: "Real Koakuma interface · Sanitized 250,000-row demo database", builtForWork: "BUILT FOR REAL DATABASE WORK", quietFast: "Quietly fast. Deliberately native.",
    largeTitle: "Large-table browsing", largeBody: "Paged loading and a virtualized grid keep the interface responsive without pulling an entire table into memory.", sqlTitle: "A practical SQL workspace", sqlBody: "Run queries, inspect results, and keep database navigation close at hand.", valueTitle: "Structured value viewers", valueBody: "Read and edit JSON, Markdown, BLOBs, and long text without losing context.", safeTitle: "Review before commit", safeBody: "Stage cell edits, inspect generated changes, and commit or discard them as a group.", cipherTitle: "SQLCipher support", cipherBody: "Open encrypted databases with credentials stored securely in the macOS Keychain.", languageTitle: "Six interface languages", languageBody: "English, Simplified Chinese, Japanese, French, Korean, and Arabic are built in.",
    stayCurrent: "STAY CURRENT", updatesTitle: "Secure updates, inside the app.", updatesBody: "Koakuma checks a signed public update feed. Downloads are delivered from GitHub Releases and verified before installation.", feed: "View update feed"
  },
  zh: {
    navFeatures: "功能", navUpdates: "更新", eyebrow: "专注于 macOS 的 SQLite 工作台", headline: "数据再大，也轻快自如。", heroDescription: "流畅浏览大型数据表，安全编辑字段，查看结构化内容，并在真正原生的工作区中编写 SQL。", download: "下载 macOS 版", source: "查看源码", requirements: "需要 macOS 15 或更高版本 · 支持 Apple 芯片与 Intel",
    screenshotCaption: "真实 Koakuma 界面 · 使用无敏感信息的 25 万行演示数据库", builtForWork: "为真实的数据库工作而生", quietFast: "安静、快速，真正原生。", largeTitle: "大型数据表浏览", largeBody: "分页加载与虚拟化表格只渲染眼前需要的内容，无需把整张表装入内存。", sqlTitle: "实用的 SQL 工作区", sqlBody: "执行查询、检查结果，同时让数据库导航始终触手可及。", valueTitle: "结构化内容查看器", valueBody: "在不丢失上下文的情况下阅读和编辑 JSON、Markdown、BLOB 与长文本。", safeTitle: "提交前统一审阅", safeBody: "暂存单元格编辑，检查即将执行的变更，再统一提交或放弃。", cipherTitle: "支持 SQLCipher", cipherBody: "打开加密数据库，并将凭据安全地保存在 macOS 钥匙串中。", languageTitle: "六种界面语言", languageBody: "内置英语、简体中文、日语、法语、韩语和阿拉伯语。", stayCurrent: "保持最新", updatesTitle: "在 App 内安全更新。", updatesBody: "Koakuma 通过签名的公开更新源检查新版本，从 GitHub Releases 下载并在安装前完成验证。", feed: "查看更新源"
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
