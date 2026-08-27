const translations = {
  en: {
    navLibrary: "The Library", navCapabilities: "Capabilities", navUpdates: "Updates",
    eyebrow: "The little devil in your data library", headline: "Every table in its place.\nA whisper away.",
    heroDescription: "Koakuma is a native SQLite workspace for macOS—a quiet library assistant for large tables, precise edits, structured values, and carefully cast SQL.",
    download: "Download for macOS", explore: "Explore the library", requirements: "Requires macOS 15 or later · Apple silicon and Intel",
    libraryServices: "Library services", featureHeadline: "A familiar for serious database work.",
    featureIntro: "The playful name stays at the door when your data needs attention. Inside, every tool is native, deliberate, and close at hand.",
    largeTitle: "Turn large tables page by page", largeBody: "Paged loading and a virtualized grid keep hundreds of thousands of rows responsive without filling memory.",
    findTitle: "Find the right volume instantly", findBody: "Search database objects quickly and keep tables, views, indexes, and triggers organized in one catalog.",
    valueTitle: "Read every hidden script", valueBody: "Inspect JSON, Markdown, BLOBs, and long text in dedicated viewers that preserve their real structure.",
    sqlTitle: "Cast SQL deliberately", sqlBody: "Write queries, inspect results, and move between SQL and the surrounding schema without losing context.",
    safeTitle: "Review before binding", safeBody: "Stage cell edits, inspect the resulting changes, then commit or discard them together.",
    cipherTitle: "Guard encrypted grimoires", cipherBody: "Open SQLCipher databases while macOS Keychain keeps credentials out of ordinary configuration files.",
    libraryWhispers: "Whispers from the library", updatesTitle: "Signed updates, delivered quietly.",
    updatesBody: "Koakuma checks its official signed update feed, verifies each release, and lets you install without leaving the app.",
    comingSoon: "Signed download coming soon",
    fanNotice: "Touhou Project is created by Team Shanghai Alice. Koakuma is an independent product using original fan-inspired motifs and is not affiliated with or endorsed by Team Shanghai Alice."
  },
  zh: {
    navLibrary: "数据图书馆", navCapabilities: "能力", navUpdates: "更新",
    eyebrow: "驻守在数据图书馆的小恶魔", headline: "每张表各归其位。\n轻声呼唤，即刻寻得。",
    heroDescription: "Koakuma 是为 macOS 打造的原生 SQLite 工作台，也是安静可靠的图书馆助手：从大型数据表、精确编辑到结构化内容与 SQL，一切井然有序。",
    download: "下载 macOS 版", explore: "走进数据图书馆", requirements: "需要 macOS 15 或更高版本 · 支持 Apple 芯片与 Intel",
    libraryServices: "图书馆服务", featureHeadline: "认真处理数据库的可靠使魔。",
    featureIntro: "名字可以俏皮，处理数据必须严谨。进入工作区后，每个工具都原生、克制，并且触手可及。",
    largeTitle: "像翻书一样浏览大型数据表", largeBody: "分页加载与虚拟化表格让数十万行数据保持流畅，同时避免填满内存。",
    findTitle: "即刻找到正确的那一卷", findBody: "快速搜索数据库对象，并把数据表、视图、索引与触发器整理在同一份目录中。",
    valueTitle: "读懂藏在字段里的文字", valueBody: "使用专用查看器检查 JSON、Markdown、BLOB 与长文本，完整保留它们的真实结构。",
    sqlTitle: "审慎地施展 SQL", sqlBody: "编写查询、检查结果，并在 SQL 与周边 schema 之间移动而不丢失上下文。",
    safeTitle: "落笔前再审阅一遍", safeBody: "暂存单元格编辑，检查即将发生的变更，再统一提交或放弃。",
    cipherTitle: "守护加密的魔导书", cipherBody: "打开 SQLCipher 数据库，并由 macOS 钥匙串妥善保管凭据。",
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
