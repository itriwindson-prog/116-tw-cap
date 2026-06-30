# _bank — 題庫擴充工具鏈（非執行時依賴）

`app` 執行時**不載入** `_bank`;這裡只是「重建/擴充題庫」的離線工具。

## 目前狀態（2026-06-30 基準重設）

`_orig/*.js` 已是**現行完整基準**(含五科全部筆記與題庫,952 段筆記)。
`_phase2cfg.json` 的 deltas 已清空(`existing`/`newTopics` 皆為 `[]`)。
舊的逐主題批次檔(`<科目>__<主題>.json`)已併入基準後刪除(內容仍在 `js/data` 與 git 歷史)。

> 為何重設:`_merge_expand.js` 會**從 `_orig` 重建** `js/data/*.js`。若 `_orig` 落後,重跑會把後來新增的筆記打回原形。把現行版升為基準即可避免。

## 下一輪要擴充題庫時

1. 為**每個要加題的主題**放一個批次檔 `_bank/<科目>__<主題>.json`:
   - 既有主題只加題:`{ "topicId": "...", "isNew": false, "newQuiz": [ <題目>... ] }`
   - 全新主題:`{ "id","name","sub?","week","notes":[...],"quiz":[...] }`
2. 在 `_phase2cfg.json` 對應科目填回 `existing`(要加題的既有主題 id)與 `newTopics`(新主題的 `{id,name,week,sub}`)。
3. `node _merge_expand.js` → 從 `_orig` + 批次重建、去重、驗證、覆寫 `js/data/*.js`。
4. 驗證無誤後,**把現行版再升為新基準**(`js/data/*.js` → `_orig/*.js`)、清空 deltas、刪該輪批次,維持冪等。

## 檔案

- `_orig/*.js` — 五科基準快照(重建來源)。
- `_merge_expand.js` — 合併器(冪等:每次從 `_orig` 重建)。
- `_phase2cfg.json` — 每科的 delta 設定(目前空)。
- `_blueprints.json` — 命題藍圖。
- `_qb.py` / `_build_mp.py` / `_nb.py` — 早期產生批次檔的腳本(內含特定主題資料,屬一次性產出,保留備參)。

> 題庫鐵律:**topic id 只新增、不改名**(改名會破壞 `schedule.js` 連結與使用者 `localStorage` 進度)。現有 id 一覽見 `js/data/schema.md` 第 5 節。
