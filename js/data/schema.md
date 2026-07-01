# 資料格式說明（填寫指南）

所有資料都是 JS 內嵌物件（雙擊離線可用，避免 `file://` 的 fetch 限制）。
要新增內容＝編輯對應的 `js/data/*.js` 檔，內容就是 JSON 物件，只是包一層 `window.STUDYSYNC...= {...}`。
**完整可直接照抄的範例 → `math.js`。**

---

## 1. 科目資料（chinese.js / english.js / math.js / social.js / science.js / writing.js）

```js
window.STUDYSYNC.data.subjects.<科目id> = {
  id: "<科目id>",            // 要和 config.js 的 subjects[].id 一致
  name: "中文名",
  topics: [ <主題物件>, ... ]
};
```

### 主題物件 topic
| 欄位 | 必填 | 說明 |
|------|------|------|
| `id` | ✔ | 主題代號（英文小寫，網址會用到）|
| `name` | ✔ | 主題名稱 |
| `sub` |  | 子科 id（僅社會/自然需要：history/geography/civics、physchem/biology/earth）。國/英/數不用填 |
| `week` |  | 對應週次文字，會顯示在筆記頂端 |
| `notes` | ✔ | 筆記段落陣列 |
| `quiz` |  | 測驗題陣列（無則不顯示測驗按鈕）|

### 筆記段落 note
```js
{ h: "段落標題",
  points: ["重點一", "重點二"],       // 條列
  formula: "c² = a² + b²",            // 選填，會以公式樣式呈現
  trap: "容易看錯的地方…",            // 選填，顯示為橘色粗心提醒
  svg: "<svg viewBox=\"0 0 320 180\" …>…</svg>", // 選填，內嵌向量圖解（見下方注意事項）
  img: "img/xxx.png",                 // 選填，改用圖片檔當圖解（svg 與 img 擇一）
  caption: "圖說一句",                // 選填，顯示在圖下方
  audioSrc: "audio/xxx.mp3"           // 選填，填了就改播 MP3 取代瀏覽器語音
}
```

> **圖解（svg）注意**：圖會放進淺色圖框（淺/深色模式皆淺底），所以線條與文字請用**深色固定 hex**（如墨 `#3a342e`、珊瑚 `#c9755c`、綠 `#5aa874`、警示 `#f0a52e`），**不要用 `currentColor` 或白色**，否則深色模式會看不見。**白字 `#fff` 只能寫在實心彩色塊上（不可裸在圖框底上）；區塊淡底可用 `#f3e7df`/`#eef4f2`；不要畫全畫布背景矩形（靠 figbox 底即可）。** 少數資訊密度高、需第 5 色的圖（如天氣鋒面冷/暖、海洋深層、透鏡光路）可用深藍 `#4a7fb5`（夠深、淺底上可讀）表冷/水/深語意——僅此一色、非必要不用。根元素只寫 `viewBox`、不要 `width/height`（由 CSS 縮放）；禁止 `<image>`／`<script>`／外部 URL（維持離線可用）。`subject.html` 已支援 `svg`/`img`/`caption` 渲染（`.figure`/`.figbox`）。

### 測驗題 quiz item
```js
{ stem: "題目文字",
  options: ["選項A", "選項B", "選項C", "選項D"],
  answer: 0,                 // 正確選項的索引（0=A, 1=B, 2=C, 3=D）
  explanation: "詳解…",
  trap: "為何容易看錯…"      // 選填；填了該題會在送出前跳『再讀一次題目』確認
}
```

> 新增一整科內容：複製 `math.js`，把 `math` 換成科目 id、填 topics 即可。

---

## 2. 進度計畫（schedule.js）

- `phases[]`：六個階段，含 `start`/`end`/`goal`/`dailyTemplate`（每日任務範本）。
- `months[]`：每個月一筆，`ym` 為 `YYYY-MM`；可選 `weeks[]`（每週 focus 與 quizTarget）。
- 儀表板與進度頁會依「今天日期」自動對應目前階段、本月、是否進入考前衝刺。

### 每日計畫（自動展開 + 手動覆蓋）
`SS.dayPlan(date)` 依「該週 focus + 星期」自動算出每天任務：平日＝該階段 `dailyTemplate`、週六＝綜合測驗、週日＝休息／補進度。**不需手寫幾百天。**

要客製某一天，在 `schedule.js` 的 `dayOverrides` 加一筆（key = `YYYY-MM-DD`）即可覆蓋：
```js
dayOverrides: {
  "2026-11-04": { note: "學校段考週", tasks: ["只做地科 岩石分類表", "早點睡"] }
}
```
進度頁的「每日計畫」可用 `<input type=date>` 查看任一天；被覆蓋的日子會標「自訂」。

### 任務快速連結（📖 筆記 / ✏ 測驗）
每日卡片會自動在 focus 文字裡偵測到的**科目名**下方放連結（科目層級）。
要精準連到**某個主題**，在該週（或 `dayOverrides` 的某天）加 `links`：
```js
{ label: "W1", focus: "數學 數與量", quizTarget: "...",
  links: [
    { subject: "math", topic: "number" },   // topic 省略 → 連到整科筆記，測驗用綜合測驗
    { subject: "english" }
  ] }
```
`subject`/`topic` 對應科目資料的 id。有 `quiz` 的主題才會出現「✏ 測驗」鈕（無 topic 時測驗連到該科綜合測驗）。

---

## 3. 全站設定（config.js）

改 `examDate` 一個值即可調整所有倒數；`subjects[]` 控制導覽與子科分組。

## 4. 進度儲存

存在瀏覽器 `localStorage`（key 前綴 `ss.`），清除瀏覽器資料或按「重設進度」會歸零。換電腦不會同步（單機離線設計）。

---

## 5. 主題 id 一覽

> **改題庫鐵律：只新增、不改名。** 改 id 會讓 `schedule.js` 的連結與使用者 `localStorage` 進度失效。下表反映目前各科 topic id，新增主題請延用命名風格、勿與既有重複。

### 國文（chinese，32 主題）
`word`、`polyphone`、`idiom`、`rhetoric`、`syntax`、`punctuation`、`practical`、`genre`、`poetry`、`classical`、`literature`、`couplet`、`reading`、`inference`、`noncontinuous`、`context`、`six-scripts`、`classifier`、`appellation`、`wenyan-shici`、`wenyan-xuci`、`judou`、`wenyan-yiyi`、`lit-history`、`culture-common`、`yinyong`、`modern-prose`、`modern-fiction`、`modern-poetry`、`bingju`、`sentence-order`、`cross-text`

### 英語（english，34 主題）
`vocab`、`wordformation`、`tense`、`noun`、`pronoun`、`adjadv`、`preposition`、`modal`、`passive`、`gerundinf`、`relative`、`conjunction`、`subjunctive`、`sentence`、`cloze`、`reading`、`listening`、`dailyenglish`、`phrasalverbs`、`confusingwords`、`collocation`、`quantifiers`、`causative`、`tagquestion`、`imperative`、`reportedspeech`、`agreement`、`vocab2`、`transition`、`paraphrase`、`readinggenre`、`readinginference`、`readingchart`、`writingorder`

### 數學（math，32 主題）
`number`、`fraction`、`exponent`、`gcdlcm`、`sqrt`、`algebra`、`linear2`、`inequality`、`polynomial`、`factor`、`quadeq`、`ratio`、`linfunc`、`function`、`geometry`、`congruent`、`pythagoras`、`circle`、`statistics`、`probability`、`polygon-angle`、`triangle-centers`、`similar-app`、`circle-angle`、`solid-geometry`、`coordinate-geom`、`sequence-series`、`linfunc-app`、`quadfunc-app`、`ruler-compass`、`counting-tree`、`data-graph`

### 社會（social，43 主題）
- **歷史 history**：`h-taiwan`、`h-taiwan-japan`、`h-taiwan-postwar`、`h-china-ancient`、`h-china-medieval`、`h-china-ming-qing`、`h-china-modern`、`h-world-ancient`、`h-world-early-modern`、`h-world-modern`、`h-china-tang-prosperity`、`h-world-greece-rome`、`h-world-imperialism`、`h-taiwan-economy-history`
- **地理 geography**：`g-map`、`taiwan-landform`、`taiwan-climate`、`taiwan-population`、`taiwan-economy`、`china-geography`、`world-regions`、`world-climate`、`world-population-global`、`environment-sustain`、`g-asia-regions`、`g-europe-africa`、`g-americas-oceania`、`g-physical-process`
- **公民 civics**：`socialization`、`family-groups`、`gender-multiculture`、`norms-media`、`central-government`、`democracy-elections`、`c-rights`、`law-in-life`、`economic-life`、`government-economy`、`global-sustainability`、`c-constitution-rights`、`c-market-price`、`c-elections-parties`、`c-trade-globalization`

### 自然（science，54 主題）
- **理化 physchem**：`p-force`、`p-work-energy`、`p-waves`、`p-heat`、`p-electricity`、`p-magnetism`、`c-matter-classification`、`c-reaction-mass`、`c-acid-base`、`c-redox-energy`、`p-pressure-buoyancy`、`p-states-kinetic`、`p-optics-imaging`、`p-circular-projectile`、`p-momentum-collision`、`p-static-electricity`、`p-nuclear-radiation`、`c-periodic-table`、`c-bonding-formula`、`c-mole-stoichiometry`、`c-electrolysis-plating`、`c-organic-materials`、`c-gas-properties`
- **生物 biology**：`b-cell`、`b-organization`、`b-nutrition`、`b-transport-circulation`、`b-respiration-excretion`、`b-homeostasis-coordination`、`b-reproduction`、`b-genetics`、`b-evolution-diversity`、`b-ecosystem`、`b-human-environment`、`b-enzyme-energy`、`b-plant-structure`、`b-classification-hierarchy`、`b-biotechnology`、`b-animal-behavior`、`b-immunity-disease`
- **地科 earth**：`e-rock`、`e-plate-tectonics`、`e-surface-taiwan`、`e-atmosphere-weather`、`e-water-ocean`、`e-earth-motion`、`e-moon-eclipse`、`e-solar-system`、`e-universe-observation`、`e-climate-change`、`e-weather-map`、`e-rock-cycle-fossil`、`e-tides`、`e-carbon-climate`

### 寫作測驗（writing，8 主題）
`read-prompt`、`narrative`、`lyric`、`argument`、`guided`、`openclose`、`material`、`rubric`

小計：六科共 203 個主題 id。
