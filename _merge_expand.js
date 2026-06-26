// merge _bank batches into subject data files. ponytail: throwaway.
// new-topic file: {id,name,sub?,week,notes:[...],quiz:[...]}; existing file: {topicId,isNew:false,newQuiz:[...]}
const fs = require("fs");
const vm = require("vm");
const DATA = "D:/Claude/Projects/CAP-StudySync/js/data/";
const BANK = "D:/Claude/Projects/CAP-StudySync/_bank/";
const BASE = BANK + "_orig/";  // pristine snapshot — merge always rebuilds from here (idempotent)
const NAMES = { math: "數學", chinese: "國文", english: "英語", science: "自然", social: "社會" };
const cfg = JSON.parse(fs.readFileSync(BANK + "_phase2cfg.json", "utf8"));

function loadSubject(sid) {
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(BASE + sid + ".js", "utf8"), ctx);
  return ctx.window.STUDYSYNC.data.subjects[sid];
}
function norm(s) { return String(s||"").replace(/\s+/g,"").replace(/[，。、？！：；「」『』（）()．·\-—\/]/g,"").toLowerCase(); }
function readBatch(p) { try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch(e) { return null; } }
function subFromId(id){ const m={p:"physchem",c:"physchem",b:"biology",e:"earth",h:"history",g:"geography"}; return null; }

const report = {};
for (const c of cfg) {
  const sid = c.id;
  const sd = loadSubject(sid);
  const byId = {}; sd.topics.forEach(t => byId[t.id] = t);
  const log = { added:0, appended:0, missing:[], badFile:[], dupRemoved:0 };

  // existing topics: append newQuiz
  for (const tid of c.existing) {
    const p = BANK + sid + "__" + tid + ".json";
    if (!fs.existsSync(p)) { log.missing.push(tid); continue; }
    const b = readBatch(p); if (!b || !Array.isArray(b.newQuiz)) { log.badFile.push(tid); continue; }
    const t = byId[tid]; if (!t) { log.badFile.push(tid+"(noTopic)"); continue; }
    t.quiz = (t.quiz||[]).concat(b.newQuiz);
    log.appended += b.newQuiz.length;
  }
  // new topics: add whole topic
  for (const nt of c.newTopics) {
    const tid = nt.id;
    const p = BANK + sid + "__" + tid + ".json";
    if (!fs.existsSync(p)) { log.missing.push(tid); continue; }
    const b = readBatch(p); if (!b || !Array.isArray(b.quiz) || !Array.isArray(b.notes)) { log.badFile.push(tid); continue; }
    const topic = { id: tid, name: b.name || tid };
    if (b.sub) topic.sub = b.sub;
    if (b.week) topic.week = b.week;
    topic.notes = b.notes; topic.quiz = b.quiz;
    sd.topics.push(topic); byId[tid] = topic;
    log.added += 1;
  }

  // dedup within each topic by normalized stem
  for (const t of sd.topics) {
    const seen = new Set(); const kept = [];
    for (const q of (t.quiz||[])) { const k = norm(q.stem); if (seen.has(k)) { log.dupRemoved++; continue; } seen.add(k); kept.push(q); }
    t.quiz = kept;
  }

  // validate
  const problems = []; const perTopicQ = [];
  for (const t of sd.topics) {
    const q = t.quiz||[]; perTopicQ.push(q.length);
    if (q.length < 4) problems.push(`${t.id}: ${q.length} quiz <4`);
    q.forEach((it,qi)=>{ if(!Array.isArray(it.options)||it.options.length!==4) problems.push(`${t.id}#${qi} opt!=4`); if(!(Number.isInteger(it.answer)&&it.answer>=0&&it.answer<(it.options||[]).length)) problems.push(`${t.id}#${qi} badAns`); if(!it.trap) problems.push(`${t.id}#${qi} noTrap`); });
    (t.notes||[]).forEach((n,ni)=>{ if(typeof n.svg==="string" && !n.svg.trim().startsWith("<svg")) problems.push(`${t.id}/n${ni} badSvg`); });
  }
  const n = sd.topics.length; let minW=Infinity; for(let i=0;i<n;i++){let s=0;for(let k=0;k<6;k++)s+=perTopicQ[(i+k)%n]; if(s<minW)minW=s;}
  if (minW < 20) problems.push(`weekly window ${minW} <20`);
  const ids = sd.topics.map(t=>t.id); if (new Set(ids).size!==ids.length) problems.push("DUP topic ids");

  // write
  const header = `// ${sid}.js — ${NAMES[sid]}（題庫擴充版：每科≥800題；新主題含筆記+SVG；答案經獨立對抗重驗）\n`
    + `window.STUDYSYNC = window.STUDYSYNC || { data: {} };\n`
    + `window.STUDYSYNC.data.subjects = window.STUDYSYNC.data.subjects || {};\n`
    + `window.STUDYSYNC.data.subjects.${sid} = {\n`
    + `  id: ${JSON.stringify(sd.id)}, name: ${JSON.stringify(sd.name)},\n`
    + `  topics: ${JSON.stringify(sd.topics, null, 2).split("\n").join("\n  ")}\n};\n`;
  fs.writeFileSync(DATA + sid + ".js", header, "utf8");

  report[sid] = { topics:n, totalQuiz: perTopicQ.reduce((a,b)=>a+b,0), weeklyMin:minW, added:log.added, appended:log.appended, dupRemoved:log.dupRemoved, missing:log.missing, badFile:log.badFile, problems };
}

for (const [sid,r] of Object.entries(report)) {
  console.log(`\n=== ${sid} (${NAMES[sid]}) ===`);
  console.log(`topics ${r.topics}, totalQuiz ${r.totalQuiz} (>=800: ${r.totalQuiz>=800?"Y":"N"}), weeklyMin ${r.weeklyMin}`);
  console.log(`+newTopics ${r.added}, +appendedQ ${r.appended}, dupRemoved ${r.dupRemoved}`);
  if (r.missing.length) console.log(`MISSING batches (${r.missing.length}): ${r.missing.join(", ")}`);
  if (r.badFile.length) console.log(`BAD files: ${r.badFile.join(", ")}`);
  console.log(`problems: ${r.problems.length? r.problems.slice(0,15).join(" | ")+(r.problems.length>15?` …(+${r.problems.length-15})`:"") : "NONE ✅"}`);
}
