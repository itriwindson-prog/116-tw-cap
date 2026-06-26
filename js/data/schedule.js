// schedule.js — 月 / 週 / 日進度 + 考前 60 天衝刺（日期可調）
window.STUDYSYNC = window.STUDYSYNC || { data: {} };
window.STUDYSYNC.data.schedule = {
  // 手動覆蓋某一天的任務（key = YYYY-MM-DD）。沒列到的日子由 SS.dayPlan 依週計畫自動產生。
  dayOverrides: {
    "2026-11-04": { note: "學校段考週", tasks: ["只做地科 岩石分類表，份量放輕", "整理段考數學錯題到錯題本", "早點睡，段考加油"] }
  },
  phases: [
    { id: "summer", name: "暑假先修", start: "2026-07-01", end: "2026-08-31", goal: "補基礎、建立每日讀書節奏",
      dailyTemplate: ["讀 1 個主題筆記（含語音朗讀）", "做該主題測驗", "訂正錯題並記下『粗心點』"] },
    { id: "fall", name: "上學期同步總複習", start: "2026-09-01", end: "2027-01-20", goal: "配合學校進度做跨版本複習",
      dailyTemplate: ["複習當日學校進度對應主題", "做 1 回主題測驗", "整理錯題本"] },
    { id: "winter", name: "寒假總整理", start: "2027-01-21", end: "2027-02-15", goal: "全科總整理、補弱點",
      dailyTemplate: ["上午弱科主題 ×2", "下午跨科綜合測驗", "回顧本週錯題"] },
    { id: "spring", name: "下學期 + 一般複習", start: "2027-02-16", end: "2027-03-15", goal: "全範圍第二輪",
      dailyTemplate: ["第二輪主題複習 ×2", "限時測驗 1 回", "錯題重做"] },
    { id: "sprint", name: "考前 60 天衝刺", start: "2027-03-16", end: "2027-05-14", goal: "模考、錯題回顧、高密度衝刺",
      dailyTemplate: ["模考／歷屆題 1 回（限時、訓練看清題目）", "詳解整份試卷", "重做近 3 天所有錯題"] },
    { id: "exam", name: "會考", start: "2027-05-15", end: "2027-05-16", goal: "沉著應試、檢查作答",
      dailyTemplate: ["早睡、帶齊證件文具", "考前看『粗心點』小抄", "每科作答後務必檢查一遍"] }
  ],
  // 月計畫：全期 11 個月（暑假兩月已填週次範本，其餘給月目標，照範本擴充）
  months: [
    { ym: "2026-07", phase: "summer", title: "暑假衝刺 1", focus: "數學：數與量、代數基礎；英語：時態",
      weeks: [
        { label: "W1 (7/1–7/5)", focus: "數學 數與量", quizTarget: "數與量 測驗 ≥ 80 分", links: [{ subject: "math", topic: "number" }] },
        { label: "W2 (7/6–7/12)", focus: "數學 數與量複習 + 英語 時態", quizTarget: "錯題清零", links: [{ subject: "math", topic: "number" }, { subject: "english", topic: "tense" }] },
        { label: "W3 (7/13–7/19)", focus: "數學 代數（方程式）", quizTarget: "代數 測驗 ≥ 80 分", links: [{ subject: "math", topic: "algebra" }] },
        { label: "W4 (7/20–7/26)", focus: "數學 代數（因式分解）", quizTarget: "綜合小考", links: [{ subject: "math", topic: "algebra" }] },
        { label: "W5 (7/27–7/31)", focus: "月複習 + 弱點補強", quizTarget: "本月錯題重做" }
      ] },
    { ym: "2026-08", phase: "summer", title: "暑假衝刺 2", focus: "數學：幾何入門；國文：字音字形；自然：力與運動",
      weeks: [
        { label: "W1", focus: "數學 幾何（三角形/畢氏）", quizTarget: "幾何 測驗 ≥ 75 分", links: [{ subject: "math", topic: "geometry" }] },
        { label: "W2", focus: "自然 力與運動 + 國文 字音字形", quizTarget: "跨科小考", links: [{ subject: "science", topic: "p-force" }, { subject: "chinese", topic: "word" }] },
        { label: "W3", focus: "數學 相似形 + 英語 字彙", quizTarget: "相似形 測驗", links: [{ subject: "math", topic: "geometry" }, { subject: "english" }] },
        { label: "W4", focus: "暑假總複習（全科第一輪）", quizTarget: "暑假成果測驗" }
      ] },
    { ym: "2026-09", phase: "fall", title: "上學期 同步複習 1", focus: "配合學校進度；社會 臺灣史/地圖",
      weeks: [
        { label: "W1", focus: "數學 一元二次方程式 + 社會 臺灣史(史前～清領)", quizTarget: "代數測驗 ≥ 80" },
        { label: "W2", focus: "自然 力與運動 + 社會 地圖與經緯度", quizTarget: "自然小考" },
        { label: "W3", focus: "英語 時態總複習 + 國文 字音字形", quizTarget: "英語測驗 ≥ 80" },
        { label: "W4", focus: "週考訂正 + 弱點補強", quizTarget: "本月錯題清零" }
      ] },
    { ym: "2026-10", phase: "fall", title: "上學期 同步複習 2", focus: "數學 函數；公民 權利義務；生物 細胞",
      weeks: [
        { label: "W1", focus: "數學 一次函數 + 公民 權利義務", quizTarget: "函數測驗 ≥ 80" },
        { label: "W2", focus: "生物 細胞與運輸 + 國文 詞語成語", quizTarget: "生物小考" },
        { label: "W3", focus: "英語 被動/比較級 + 社會 臺灣地理", quizTarget: "綜合小考" },
        { label: "W4", focus: "月考週 + 錯題回顧", quizTarget: "錯題本重做" }
      ] },
    { ym: "2026-11", phase: "fall", title: "上學期 同步複習 3", focus: "幾何進階；地科 岩石；英語 文法",
      weeks: [
        { label: "W1", focus: "數學 幾何 三角形/全等 + 地科 岩石礦物", quizTarget: "幾何測驗 ≥ 75" },
        { label: "W2", focus: "數學 畢氏定理/圓 + 理化 物質與反應", quizTarget: "理化小考" },
        { label: "W3", focus: "英語 關係子句 + 國文 文言文入門", quizTarget: "英語測驗" },
        { label: "W4", focus: "綜合測驗 + 訂正", quizTarget: "跨科綜合 ≥ 70" }
      ] },
    { ym: "2026-12", phase: "fall", title: "上學期 同步複習 4", focus: "統計與機率；歷史/地理整理",
      weeks: [
        { label: "W1", focus: "數學 統計圖表 + 歷史 中國史概覽", quizTarget: "統計測驗 ≥ 80" },
        { label: "W2", focus: "數學 機率 + 地理 世界區域", quizTarget: "機率小考" },
        { label: "W3", focus: "國文 閱讀理解 + 英語 克漏字", quizTarget: "閱讀測驗" },
        { label: "W4", focus: "學期末總複習 + 第一輪收尾", quizTarget: "第一輪成果測驗" }
      ] },
    { ym: "2027-01", phase: "winter", title: "寒假 總整理", focus: "全科弱點補強 + 第一次完整模考",
      weeks: [
        { label: "W1", focus: "數學 + 自然 全範圍弱點掃描", quizTarget: "弱點主題重測" },
        { label: "W2", focus: "社會 全範圍 + 國文/英語 綜合", quizTarget: "綜合測驗" },
        { label: "W3", focus: "第一次完整模考（五科）", quizTarget: "模考一 完成" },
        { label: "W4", focus: "模考錯題總整理", quizTarget: "錯題本重做" }
      ] },
    { ym: "2027-02", phase: "spring", title: "第二輪複習", focus: "全範圍快速第二輪 + 寫作練習",
      weeks: [
        { label: "W1", focus: "數學第二輪(代數+幾何) + 寫作 審題練習①", quizTarget: "代數+幾何 ≥ 85" },
        { label: "W2", focus: "自然第二輪 + 社會第二輪", quizTarget: "自然/社會 ≥ 80" },
        { label: "W3", focus: "國文+英語第二輪 + 寫作練習②", quizTarget: "國英 ≥ 80" },
        { label: "W4", focus: "第二次模考 + 訂正", quizTarget: "模考二 完成" }
      ] },
    { ym: "2027-03", phase: "sprint", title: "衝刺啟動", focus: "3/16 起進入考前 60 天：每週模考",
      weeks: [
        { label: "W1 (3/1–3/15)", focus: "全科考古題暖身", quizTarget: "歷屆題各科一回" },
        { label: "W2 (3/16–3/22)", focus: "🔥衝刺第1週：數學+自然 歷屆題", quizTarget: "限時演練" },
        { label: "W3 (3/23–3/29)", focus: "社會+國文 歷屆題", quizTarget: "限時演練" },
        { label: "W4 (3/30–)", focus: "英語(含聽力)歷屆 + 第三次模考", quizTarget: "模考三 完成" }
      ] },
    { ym: "2027-04", phase: "sprint", title: "衝刺高峰", focus: "歷屆試題密集演練 + 錯題本總複習",
      weeks: [
        { label: "W1", focus: "數學弱點 + 錯題本重做", quizTarget: "錯題清零" },
        { label: "W2", focus: "自然 + 社會 錯題本重做", quizTarget: "錯題清零" },
        { label: "W3", focus: "國文 + 英語 + 寫作 衝刺", quizTarget: "限時演練" },
        { label: "W4", focus: "第四次模考 + 全科詳解", quizTarget: "模考四 完成" }
      ] },
    { ym: "2027-05", phase: "sprint", title: "最後衝刺 → 會考", focus: "考古題、心態調整、看清題目訓練；5/15 會考",
      weeks: [
        { label: "W1 (5/1–5/7)", focus: "五科考古題最後一輪", quizTarget: "保持手感" },
        { label: "W2 (5/8–5/14)", focus: "看『粗心點』小抄 + 輕度複習、調整作息", quizTarget: "只訂正、不熬夜" },
        { label: "會考 (5/15–5/16)", focus: "沉著應試、每科作答後檢查一遍", quizTarget: "加油！" }
      ] }
  ]
};
