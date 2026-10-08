// build-www.mjs — 把 App 靜態資源複製到 www/（Capacitor webDir），排除來源段考卷/開發檔
// 用法：node build-www.mjs   （會清空並重建 www/；含 exam/img 全部真卷頁圖 → 獨立完整包）
import { rmSync, mkdirSync, cpSync, existsSync } from "node:fs";

const WWW = "www";
const FILES = [
  "index.html", "schedule.html", "subject.html", "quiz.html", "mistakes.html",
  "exam.html", "compose.html", "manifest.webmanifest", "sw.js", "version.json",
];
const DIRS = ["css", "js", "icons", "exam", "img"];
// 頁圖夾內的 text.txt/answer.txt 與 exam/tools 只供抽題用，App 用不到
const skip = p => /[\\/]exam[\\/]tools([\\/]|$)/.test(p) || /[\\/]exam[\\/]img[\\/].+\.txt$/.test(p);

rmSync(WWW, { recursive: true, force: true });
mkdirSync(WWW, { recursive: true });

let n = 0;
for (const f of FILES) if (existsSync(f)) { cpSync(f, `${WWW}/${f}`); n++; }
for (const d of DIRS) if (existsSync(d)) { cpSync(d, `${WWW}/${d}`, { recursive: true, filter: s => !skip("/" + s) }); n++; }

console.log(`www/ 重建完成，複製 ${n} 個項目（未含 國中考題/、node_modules、_bank、exam/tools、頁圖 txt）`);
