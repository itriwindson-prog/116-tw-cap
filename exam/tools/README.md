# 段考卷電子化管線（可重複、擴充到其他切片）

來源真卷放在 `國中考題/`（3.8G，已 gitignore，不進版控）。一個「切片」＝一個 年級/學期/段考/科目/版本 的資料夾。

## 三步驟

**1. 渲染真卷 → 頁圖（保真、圖形完整保留）**
```bash
python exam/tools/render_slice.py "國中考題/九年級/數學-康軒-上學期-第一次段考" m9u1e1 "*康軒 試卷.pdf" > manifest.json
```
產生 `exam/img/<prefix>-NN/q*.jpg`（試卷）、`a*.jpg`（答案），並輸出 `manifest.json`（含中繼＋抽出的文字）。
之後把 manifest 內每份的中繼寫進 `js/data/papers.js`（真卷檢視器 exam.html 用）。

**2. 逐題結構化抽取（視覺 subagent）**
每份卷派一個 agent，讀 `exam/img/<id>/q*.jpg` 與 `a*.jpg`，逐題輸出 JSON 到 `q_<id>.json`：
- 欄位：`n, section(選擇/填充/計算), stem(數學正規化), options[], answer, needsFigure, figureRef`
- **答案務必對照答案頁核對**，可computable的題再獨立重算驗證。
- 散落的圖形標籤不要混進題幹；需看圖的題 `needsFigure=true`。

**3. 併成題庫**
```bash
python exam/tools/aggregate.py manifest.json <含 q_*.json 的資料夾>
```
輸出 `js/data/exambank.js`（附卷別中繼、跨校去重）。自組卷 compose.html 用。

## 已完成切片
- 數學 康軒 九上 第一次段考：6 份真卷 → 146 題（選106/填24/計16）

## 待辦（擴充時）
- 掃描型 PDF（國文/社會多為 0 文字）需先 OCR：`pip install`（本機尚無 tesseract）或直接用視覺 agent 讀頁圖（較準）。
- 英文聽力若無 mp3：依題目/答案用 TTS 生成音檔。
- needsFigure 題目前用「看原卷附圖」連到整頁；未來可逐題裁切圖形以縮小體積、獨立顯示。
