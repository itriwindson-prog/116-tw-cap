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

## 已完成切片 —— 九上第一次+第二次段考(康軒)四科全數位化 ✅
**第一次段考(prefix …u1e1)**:數學27/國文27/自然48/英文37 = 139份、5405題。
**第二次段考(prefix …u2e)**:自然37/英文30/國文20/數學21 = 108份、+約4200題。
- 各科變體都處理過:OMR答案卡、掃描卷(PIL旋轉)、答案頁=試卷副本(答案在末頁)、無答案卷(自然/數學自算,國文非選留待確認)、docx答案(zipfile讀)、內容過濾(程式化解析PDF文字層)、國文夾誤置文昌數學卷(paperText掃 math/guo 關鍵字揪出跳過)。
- 自然:理化/地科/生物三領域,subject 統一「自然」、原領域存 `domain`。英文:聽力題標 `needsAudio`(待TTS),出卷自動排除。國文注音以教育部辭典為準。
- 合計 exambank.js **9635 題**。四科皆可生成「會考模擬卷」。`aggregate.py` 可累積(按 paperId 刷新/累加、帶 domain/needsAudio)。社會科來源近乎空,略過。

## 大批擴充政策（2026-09-12 起，目標:九年級全科全段考→全部 2800 份）
- **整頁圖不進 GitHub Pages**：新切片頁圖 gitignore（`exam/img/`），只推純題庫文字（exambank.js）。2800 份整頁圖≈3.4GB 塞不進 Pages；純題庫≈27MB OK。頁圖留本地供 figureRef／未來 APK。
- 因此新切片**不加進 papers.js**（exam.html 真卷檢視只保留已上線的 m9/c9/n9 59 卷）；compose 對圖未上線的 needsFigure 題顯示「附圖僅離線版」。
- 進度:**九上第一次段考(康軒)四科完成**(數27/國27/自48/英37)。**待續**:九年級其他版本(南一/翰林)、其他段考(二/三次)、下學期,然後八年級、七年級。社會科來源幾乎空,略過。

## 大批切片心得（自然 48 份實戰）
- **併發上限**：一次派 ~24 個 Opus agent 會觸帳號用量上限而整批中斷。改用 **Sonnet + 每批 6 份**、完成即 commit，穩定不觸頂。
- **每批完成即 aggregate + commit**（bank progress），避免中斷損失。
- **答案頁陷阱**：部分卷 a*.jpg 與 q*.jpg 位元相同（來源「答案PDF」其實是試卷副本，答案在末頁答案表）；agent 已能自行辨識改讀末頁。可考慮在 render/aggregate 加 md5 查重。
- **官方答案偶有誤植**：agent 依規則以答案頁為準並在 stem 註記/留空待確認（少數依物理重算改判並說明）。

## 待辦（擴充時）
- ~~掃描型 PDF 需 OCR~~ → 已驗證：直接用視覺 agent 讀渲染頁圖即可，掃描/文字卷同一套管線,不需 tesseract。
- 英文聽力若無 mp3：依題目/答案用 TTS 生成音檔。
- needsFigure 題目前用「看原卷附圖」連到整頁；未來可逐題裁切圖形以縮小體積、獨立顯示。
- **體積**：`exam/img` 已達 ~70MB（自然頁圖 59MB）。若 APK 過大，可 render_slice 降解析度（如 900px/q72）或轉 WebP 重渲染一次（figureRef 路徑不變）。
