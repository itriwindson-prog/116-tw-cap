// app.js — 共用工具：路由 / 日期 / 語音(TTS) / 進度(localStorage) / 自我檢查
window.STUDYSYNC = window.STUDYSYNC || { data: {} };
(function (SS) {
  const D = SS.data;

  // ---------- 路由 / 參數 ----------
  SS.param = function (name, def) {
    const v = new URLSearchParams(location.search).get(name);
    return v === null ? (def === undefined ? null : def) : v;
  };

  // ---------- 日期 ----------
  function parseDate(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); }
  function fmt(dt) {
    return dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
  }
  SS.parseDate = parseDate;
  SS.fmt = fmt;
  SS.todayStr = function () { return fmt(new Date()); };
  SS.daysBetween = function (a, b) { return Math.round((parseDate(b) - parseDate(a)) / 86400000); };
  SS.daysUntilExam = function () { return SS.daysBetween(SS.todayStr(), D.config.examDate); };
  SS.currentPhase = function () {
    const today = SS.todayStr();
    const phases = (D.schedule && D.schedule.phases) || [];
    for (const p of phases) if (today >= p.start && today <= p.end) return p;
    // 未開始 → 回第一階段；已結束 → 回最後階段
    if (phases.length && today < phases[0].start) return phases[0];
    return phases.length ? phases[phases.length - 1] : null;
  };
  SS.inSprint = function () { const d = SS.daysUntilExam(); return d >= 0 && d <= (D.config.sprintDays || 60); };
  // 本月月計畫；計畫尚未開始 → 回最近一個「即將開始」的月（months 依 ym 升冪）
  SS.currentMonth = function () {
    const ym = SS.todayStr().slice(0, 7), ms = (D.schedule && D.schedule.months) || [];
    const m = ms.find(x => x.ym === ym);
    return m ? { month: m, upcoming: false } : { month: ms.find(x => x.ym > ym) || null, upcoming: true };
  };

  // 每日計畫：由「週 focus + 星期」自動展開；dayOverrides 可手動覆蓋某天
  SS.dayPlan = function (dateStr) {
    const S = D.schedule, dt = SS.parseDate(dateStr), ym = dateStr.slice(0, 7);
    const strict = (S.phases || []).find(p => dateStr >= p.start && dateStr <= p.end);
    const phase = strict || SS.currentPhase();
    const month = (S.months || []).find(m => m.ym === ym);
    let week = null, weekLabel = "", weekFocus = "", quizTarget = "";
    if (month && month.weeks && month.weeks.length) {
      week = month.weeks[Math.min(month.weeks.length - 1, Math.floor((dt.getDate() - 1) / 7))];
      weekLabel = week.label; weekFocus = week.focus; quizTarget = week.quizTarget || "";
    } else if (month) { weekFocus = month.focus; }
    else if (phase) { weekFocus = phase.goal; }

    const ov = (S.dayOverrides || {})[dateStr];
    const dow = dt.getDay();  // 0=日 … 6=六
    let tasks;
    if (ov && ov.tasks) tasks = ov.tasks;
    else if (dow === 0) tasks = ["休息 / 補做落後進度", "翻一翻錯題本的『粗心點』"];
    else if (dow === 6) tasks = week ? ["本週綜合測驗 + 訂正", "整理本週錯題"] : ((phase && phase.dailyTemplate) || []);
    else tasks = (phase && phase.dailyTemplate) || [];

    // 快速連結：優先用手寫 links（精準到主題）；否則自動掃 focus 內的科目/子科名（科目層級）
    const raw = (ov && ov.links) || (week && week.links) || null;
    const links = [];
    if (raw) {
      raw.forEach(l => {
        const sm = SS.findSubject(l.subject); if (!sm) return;
        const sd = SS.subjectData(l.subject);
        const t = l.topic && sd && sd.topics.find(x => x.id === l.topic);
        links.push({ subject: l.subject, topic: t ? l.topic : null, label: sm.name + (t ? "·" + t.name : ""),
                     hasQuiz: t ? !!(t.quiz && t.quiz.length) : !!(sd && SS.aggregateQuiz(sd).length) });
      });
    } else if (weekFocus) {
      (D.config.subjects || []).forEach(sm => {
        const hit = weekFocus.includes(sm.name) || (sm.subs && sm.subs.some(su => weekFocus.includes(su.name)));
        if (!hit) return;
        const sd = SS.subjectData(sm.id);
        links.push({ subject: sm.id, topic: null, label: sm.name, hasQuiz: !!(sd && SS.aggregateQuiz(sd).length) });
      });
      if (!links.length) {  // B：複習週等 focus 沒寫科目名 → 以核心三科保底
        ["math", "chinese", "english"].forEach(sid => {
          const sd = SS.subjectData(sid), sm = SS.findSubject(sid);
          if (sd && sm) links.push({ subject: sid, topic: null, label: sm.name, hasQuiz: !!SS.aggregateQuiz(sd).length });
        });
      }
    }

    // 每日核心：讀書日(週日休息除外)從 五科各挑當日筆記主題 + 對應測驗份量
    // 平日=每日10題(社/自15)；週六=週測20題；每月 15、28 號=本科綜合月考30題(逢週日順延隔天週一)
    const coreDaily = [];
    let dayType = "daily";
    if (dow !== 0) {
      const dayNum = dt.getDate();
      // 月考 15/28 號;若逢週日(休息)則順延到隔天(週一)。用「昨天」判斷可正確跨月(如 2/28 週日→3/1)
      const prev = new Date(dt.getFullYear(), dt.getMonth(), dayNum - 1);
      const postponedMonthly = prev.getDay() === 0 && (prev.getDate() === 15 || prev.getDate() === 28);
      if (dayNum === 15 || dayNum === 28 || postponedMonthly) dayType = "monthly";
      else if (dow === 6) dayType = "weekly";
      const seq = SS.daysBetween(D.config.startDate, dateStr);
      const setName = { daily: "每日測驗", weekly: "週測", monthly: "月考·本科綜合" }[dayType];
      const sizeOf = cid => dayType === "weekly" ? 20 : dayType === "monthly" ? 30
                          : (cid === "social" || cid === "science") ? 15 : 10;  // 每日:社/自15、數國英10
      ["math", "chinese", "english", "social", "science"].forEach(cid => {
        const sd = SS.subjectData(cid), sm = SS.findSubject(cid);
        if (sd && sd.topics.length && sm) {
          const n = sd.topics.length, t = sd.topics[((seq % n) + n) % n];
          coreDaily.push({ subject: cid, subjectName: sm.name, noteTopic: t.id, noteLabel: sm.name + "·" + t.name, quizSet: dayType, setLabel: setName + " " + sizeOf(cid) + " 題" });
        }
      });
    }

    return { date: dateStr, phaseName: phase ? phase.name : "", inSprint: !!(phase && phase.id === "sprint"),
             weekLabel, weekFocus, quizTarget, note: ov ? (ov.note || "") : "", isOverride: !!ov, tasks, links, coreDaily, dayType };
  };

  // 把連結陣列畫成「📖 筆記 / ✏ 測驗」按鈕列（週重點連結用）
  SS.renderLinks = function (arr) {
    const wrap = SS.el("div", { style: "margin-top:8px;display:flex;flex-wrap:wrap;gap:8px" });
    (arr || []).forEach(l => {
      wrap.appendChild(SS.el("a", { class: "btn small ghost", href: "subject.html?subject=" + l.subject + (l.topic ? "&topic=" + l.topic : ""), text: "📖 " + l.label + " 筆記" }));
      if (l.hasQuiz) wrap.appendChild(SS.el("a", { class: "btn small", href: "quiz.html?subject=" + l.subject + "&set=weekly", text: "✏ 測驗（20 題）" }));
    });
    return wrap;
  };
  SS.renderDayLinks = function (plan) { return SS.renderLinks(plan.links); };
  // 每日核心：每科一列（科目 + 📖當日筆記 + ✏對應份量測驗）
  SS.renderCoreDaily = function (plan) {
    const wrap = SS.el("div", { style: "margin-top:8px;display:flex;flex-direction:column;gap:6px" });
    (plan.coreDaily || []).forEach(c => {
      wrap.appendChild(SS.el("div", { style: "display:flex;flex-wrap:wrap;gap:6px;align-items:center" }, [
        SS.el("span", { class: "pill", text: c.subjectName }),
        SS.el("a", { class: "btn small ghost", href: "subject.html?subject=" + c.subject + "&topic=" + c.noteTopic, text: "📖 " + c.noteLabel + " 筆記" }),
        SS.el("a", { class: "btn small", href: "quiz.html?subject=" + c.subject + "&set=" + c.quizSet, text: "✏ " + c.setLabel })
      ]));
    });
    return wrap;
  };

  // ---------- 語音（Web Speech，可選 MP3 覆蓋）----------
  const TTS = SS.tts = {
    rate: parseFloat(localStorage.getItem("ss.tts.rate") || "0.95"),
    voice: null, audio: null,
    pickVoice() {
      if (!("speechSynthesis" in window)) return null;
      const vs = speechSynthesis.getVoices();
      const prefer = ["HsiaoChen", "曉臻", "Yating", "雅婷", "Hanhan", "Female", "女"];
      const v = vs.find(x => /zh-TW/i.test(x.lang) && prefer.some(p => x.name.includes(p)))
             || vs.find(x => /zh-TW/i.test(x.lang))
             || vs.find(x => /zh/i.test(x.lang));
      this.voice = v || null; return v;
    },
    setRate(r) { this.rate = parseFloat(r); localStorage.setItem("ss.tts.rate", this.rate); if (this.audio) this.audio.playbackRate = this.rate; },
    speak(text, audioSrc) {
      this.stop();
      if (audioSrc) { this.audio = new Audio(audioSrc); this.audio.playbackRate = this.rate; this.audio.play(); return; }
      if (!("speechSynthesis" in window)) { alert("此瀏覽器不支援語音朗讀，請改用 Edge / Chrome"); return; }
      if (!this.voice) this.pickVoice();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "zh-TW"; u.rate = this.rate; u.pitch = 1.15;  // pitch 略高 → 偏溫柔
      if (this.voice) u.voice = this.voice;
      speechSynthesis.speak(u);
    },
    stop() { if (window.speechSynthesis) speechSynthesis.cancel(); if (this.audio) { this.audio.pause(); this.audio = null; } }
  };
  if ("speechSynthesis" in window) { speechSynthesis.onvoiceschanged = () => TTS.pickVoice(); TTS.pickVoice(); }

  // ---------- 進度（localStorage，file:// 可用）----------
  const P = SS.progress = {
    get(k, def) { try { const v = JSON.parse(localStorage.getItem("ss." + k)); return v === null || v === undefined ? def : v; } catch (e) { return def; } },
    set(k, v) { localStorage.setItem("ss." + k, JSON.stringify(v)); },
    markDaily(date, done) { const m = this.get("daily", {}); m[date] = done; this.set("daily", m); this.updateStreak(); },
    isDailyDone(date) { return !!this.get("daily", {})[date]; },
    updateStreak() {
      const m = this.get("daily", {}); let s = 0; const d = new Date();
      while (m[SS.fmt(d)]) { s++; d.setDate(d.getDate() - 1); }
      this.set("streak", s); return s;
    },
    saveQuiz(subject, topic, score, total, answers, refs) {
      this.set("quiz." + subject + "." + topic, { score, total, answers, refs: refs || null, date: SS.todayStr() });
    },
    // 整體作答統計：總作答、答對、答錯題數
    stats() {
      let answered = 0, correct = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("ss.quiz.")) {
          try { const o = JSON.parse(localStorage.getItem(key)); if (o && typeof o.total === "number") { answered += o.total; correct += (o.score || 0); } } catch (e) {}
        }
      }
      return { answered, correct, wrong: answered - correct };
    },
    getQuiz(subject, topic) { return this.get("quiz." + subject + "." + topic, null); },
    quizAverage() {
      let sum = 0, n = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("ss.quiz.")) {
          try { const o = JSON.parse(localStorage.getItem(key)); if (o && o.total) { sum += o.score / o.total; n++; } } catch (e) {}
        }
      }
      return n ? Math.round((sum / n) * 100) : 0;
    },
    // 各科已完成測驗的主題數
    subjectDone(subjectId) {
      let n = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("ss.quiz." + subjectId + ".")) n++;
      }
      return n;
    },
    reset() { for (let i = localStorage.length - 1; i >= 0; i--) { const k = localStorage.key(i); if (k && k.startsWith("ss.")) localStorage.removeItem(k); } }
  };

  // ---------- 小工具 ----------
  SS.el = function (tag, attrs, children) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k === "text") e.textContent = attrs[k];
      else if (k.startsWith("on") && typeof attrs[k] === "function") e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    (children || []).forEach(c => e.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
    return e;
  };
  SS.findSubject = function (id) { return D.config.subjects.find(s => s.id === id); };
  SS.subjectData = function (id) { return (D.subjects || {})[id] || null; };
  // 綜合測驗：彙整一科所有主題的題目（順序固定，供測驗與錯題本對齊）
  SS.aggregateQuiz = function (sd) { const a = []; (sd.topics || []).forEach(t => (t.quiz || []).forEach(q => a.push(q))); return a; };

  // ---------- 測驗抽題引擎（每日10 / 每週20 / 每月綜合30；份量固定、每次隨機抽）----------
  // 主題連動保留：每日以「當天輪播主題」為主、週測限本週輪播主題、月考為本科綜合
  function pickIdx(seq, n) { return ((seq % n) + n) % n; }
  function shuffle(arr) { const c = arr.slice(); for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[c[i], c[j]] = [c[j], c[i]]; } return c; }
  // 從 pool 隨機抽 count 題；不足時用 fallback（整科）補滿且不重複
  function sample(pool, count, fallback) {
    let s = shuffle(pool);
    if (s.length < count && fallback) { const seen = new Set(s.map(x => x.topicId + ":" + x.qi)); s = s.concat(shuffle(fallback).filter(x => !seen.has(x.topicId + ":" + x.qi))); }
    return s.slice(0, count);
  }
  // 回傳 [{topicId, qi, q}]；opts: {set:'daily'|'weekly'|'monthly'|'all', topic, dateStr}
  SS.buildQuizSet = function (subjectId, opts) {
    opts = opts || {};
    const sd = SS.subjectData(subjectId); if (!sd || !sd.topics.length) return [];
    const all = []; sd.topics.forEach(t => (t.quiz || []).forEach((q, qi) => all.push({ topicId: t.id, qi, q })));
    if (opts.topic && opts.topic !== "all") { const tp = sd.topics.find(t => t.id === opts.topic); return tp ? sample((tp.quiz || []).map((q, qi) => ({ topicId: tp.id, qi, q })), 10) : []; }  // 單一主題：隨機 10 題
    if (!opts.set || opts.set === "all") return all;
    const ds = opts.dateStr || SS.todayStr(), seq = SS.daysBetween(D.config.startDate, ds), n = sd.topics.length;
    // 社會/自然：題數按子科目平均（每日15=5/5/5、週測20、月考30），該子科不足以整子科補滿
    if ((subjectId === "social" || subjectId === "science") && (opts.set === "daily" || opts.set === "weekly" || opts.set === "monthly")) {
      const subOf = {}; sd.topics.forEach(t => (subOf[t.id] = t.sub));
      const subs = [...new Set(sd.topics.map(t => t.sub).filter(Boolean))];
      const target = { daily: 15, weekly: 20, monthly: 30 }[opts.set];
      const base = Math.floor(target / subs.length), extra = target - base * subs.length;
      let out = [];
      subs.forEach((s, i) => {
        const need = base + (i < extra ? 1 : 0);
        const subPool = all.filter(x => subOf[x.topicId] === s);
        let pool = subPool;
        if (opts.set === "daily") { const st = sd.topics.filter(t => t.sub === s); const t = st[pickIdx(seq + i, st.length)]; pool = all.filter(x => x.topicId === t.id); }
        out = out.concat(sample(pool, need, subPool));
      });
      return out;
    }
    if (opts.set === "daily") {            // 當日輪播主題優先，隨機補滿共 10 題
      const t = sd.topics[pickIdx(seq, n)];
      return sample(all.filter(x => x.topicId === t.id), 10, all);
    }
    if (opts.set === "weekly") {           // 本週(週一起 6 個輪播主題)範圍，隨機 20 題
      const dow = SS.parseDate(ds).getDay(), monSeq = seq - (dow === 0 ? 6 : dow - 1);
      const ids = new Set(); for (let k = 0; k < 6; k++) ids.add(sd.topics[pickIdx(monSeq + k, n)].id);
      return sample(all.filter(x => ids.has(x.topicId)), 20, all);
    }
    if (opts.set === "monthly") return sample(all, 30);  // 本科綜合 隨機 30 題
    return all;
  };

  // ---------- 深色模式 ----------
  SS.theme = {
    get() { return localStorage.getItem("ss.theme") || "light"; },
    apply() { document.documentElement.setAttribute("data-theme", this.get()); },
    toggle() { localStorage.setItem("ss.theme", this.get() === "dark" ? "light" : "dark"); this.apply(); return this.get(); }
  };
  SS.theme.apply();

  // ---------- 錯題本：掃描所有測驗紀錄，組出答錯清單 ----------
  SS.allMistakes = function () {
    const out = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith("ss.quiz.")) continue;
      const rest = key.slice("ss.quiz.".length);          // <subject>.<topic>
      const dot = rest.indexOf(".");
      const subjId = rest.slice(0, dot), topicId = rest.slice(dot + 1);
      let rec; try { rec = JSON.parse(localStorage.getItem(key)); } catch (e) { continue; }
      const sd = SS.subjectData(subjId); if (!sd || !rec || !rec.answers) continue;
      if (rec.refs) {  // 新版：依 refs 還原每題的來源主題（適用每日/週/月抽題與綜合測驗）
        rec.refs.forEach((r, qi) => {
          const tp = sd.topics.find(t => t.id === r.topicId); const q = tp && tp.quiz && tp.quiz[r.qi]; const ans = rec.answers[qi];
          if (q && ans !== null && ans !== q.answer) out.push({ subject: sd.name, subjectId: subjId, topic: tp.name, topicId: r.topicId, q, your: ans, date: rec.date });
        });
        continue;
      }
      let quizArr, topicName;
      if (topicId === "all") { quizArr = SS.aggregateQuiz(sd); topicName = "綜合測驗"; }
      else { const tp = sd.topics.find(t => t.id === topicId); if (!tp || !tp.quiz) continue; quizArr = tp.quiz; topicName = tp.name; }
      rec.answers.forEach((ans, qi) => {
        const q = quizArr[qi];
        if (q && ans !== q.answer && ans !== null) {
          out.push({ subject: sd.name, subjectId: subjId, topic: topicName, topicId, q, your: ans, date: rec.date });
        }
      });
    }
    return out;
  };

  // ---------- 進度 匯出 / 匯入（防 localStorage 資料遺失）----------
  SS.exportProgress = function () {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith("ss.")) data[k] = localStorage.getItem(k); }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "studysync-進度-" + SS.todayStr() + ".json"; a.click();
    URL.revokeObjectURL(a.href);
  };
  SS.importProgress = function (file, onDone) {
    const r = new FileReader();
    r.onload = () => { try { const o = JSON.parse(r.result); Object.keys(o).forEach(k => { if (k.startsWith("ss.")) localStorage.setItem(k, o[k]); }); onDone && onDone(true); } catch (e) { onDone && onDone(false); } };
    r.readAsText(file);
  };

  // ---------- PWA：註冊 service worker（僅 http/https；file:// 不支援，照常離線運作）----------
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
      checkUpdate();
    });
  }

  // 比對 version.json 是否有新版；有就顯示底部橫幅，按下去逐檔重抓並顯示進度後 reload
  async function checkUpdate() {
    const setVer = v => { const el = document.getElementById("appVersion"); if (el && v) el.textContent = "版本 " + v; };
    let latest;
    try { latest = (await (await fetch("version.json", { cache: "no-store" })).json()).v; }
    catch (e) { setVer(localStorage.getItem("appVersion")); return; }   // 離線:顯示上次已知版本
    setVer(latest);
    const seen = localStorage.getItem("appVersion");
    if (!seen) { localStorage.setItem("appVersion", latest); return; }  // 首次:記住即可
    if (seen !== latest) showUpdateBar(latest);                         // 有新版 → 顯示橫幅
  }

  function showUpdateBar(latest) {
    const bar = document.createElement("div");
    bar.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#1565c0;color:#fff;padding:12px;text-align:center;cursor:pointer";
    bar.textContent = "🔄 有新內容，點此更新";
    bar.onclick = () => {
      const sw = navigator.serviceWorker.controller;
      if (!sw) { location.reload(); return; }
      navigator.serviceWorker.addEventListener("message", ev => {
        if (ev.data.type === "progress") bar.textContent = "更新中… " + ev.data.done + "/" + ev.data.total;
        if (ev.data.type === "done") { localStorage.setItem("appVersion", latest); location.reload(); }
      });
      sw.postMessage("update");
    };
    document.body.appendChild(bar);
  }

  // ---------- 自我檢查：開 ?selftest=1 看 console ----------
  if (SS.param("selftest") === "1") {
    console.group("STUDYSYNC selftest");
    console.assert(SS.daysBetween("2026-07-01", "2026-07-08") === 7, "daysBetween 應為 7");
    console.assert(SS.daysBetween("2027-05-14", "2027-05-15") === 1, "daysBetween 應為 1");
    P.reset();
    P.markDaily(SS.todayStr(), true);
    console.assert(P.get("streak", 0) >= 1, "streak 應 >= 1");
    P.saveQuiz("math", "number", 3, 4, []);
    console.assert(P.getQuiz("math", "number").score === 3, "quiz 應已儲存");
    console.assert(P.quizAverage() === 75, "平均應為 75");
    P.reset();
    console.log("selftest 完成 ✅");
    console.groupEnd();
  }
})(window.STUDYSYNC);
