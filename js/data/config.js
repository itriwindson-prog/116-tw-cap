// config.js — 全站設定（資料以 JS 內嵌，雙擊離線可用）
window.STUDYSYNC = window.STUDYSYNC || { data: {} };
window.STUDYSYNC.data.config = {
  examName: "民國116年國中教育會考",
  examDate: "2027-05-15",     // 正式公告後改這一個值即可
  startDate: "2026-07-01",
  sprintDays: 60,             // 考前衝刺天數
  resetPassword: "0000",      // 重置進度/測驗的密碼（家長可自行修改）
  // 學生回報「題目有問題／答案有爭議」→ 開預填 Google 表單，按「提交」即可；回報進表單試算表
  reportFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfThYIIgv5SOmqZr4CqMDFzEljtlrxs0DKxkZera31Wm4HiIw/viewform?usp=pp_url",
  reportFormEntry: "entry.1138754158",  // 「題目回報」欄位 ID（換表單就改這兩行）
  versions: ["康軒", "南一", "翰林"],
  // 5 考科為頂層；社會/自然含子科；寫作測驗為獨立區
  subjects: [
    { id: "chinese", name: "國文" },
    { id: "english", name: "英語", hasListening: true },
    { id: "math",    name: "數學" },
    { id: "social",  name: "社會", subs: [
        { id: "history",   name: "歷史" },
        { id: "geography", name: "地理" },
        { id: "civics",    name: "公民" } ] },
    { id: "science", name: "自然", subs: [
        { id: "physchem", name: "理化" },
        { id: "biology",  name: "生物" },
        { id: "earth",    name: "地科" } ] },
    { id: "writing", name: "寫作測驗" }
  ]
};
