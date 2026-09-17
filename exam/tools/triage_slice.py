# triage_slice.py — 段考卷省 token 分流工具(策略 1+3+5),v2 涵蓋雜命名/docx。
#
# 對一個切片資料夾裡「所有」試卷(正規 康軒/雜命名/舊raw、pdf 與 docx)做:
#   1) 渲染 PDF 每頁 JPEG(docx 無法渲染故無頁圖)→ exam/img/<id>/q*.jpg、a*.jpg。
#   2) 抽「試卷+答案」文字層寫 sidecar:exam/img/<id>/text.txt、answer.txt
#      → 文字卷抽題 agent 只讀這兩個純文字檔,不必反覆讀整頁 JPEG(視覺 token 大降)。
#   3) 分流 route:text / text+visionAns / vision / text-noans / skip-misfiled。
#   4) 輸出 manifest(相容 aggregate.py,額外帶 route/answerSource)。
#
# 檔案來源(此資料夾常混三種命名):
#   A. 正規:「<校> <年級> <學年> <學期> <領域> <科目> <段考> <期中末> 康軒 試卷.pdf/.docx」+ …答案…
#   B. 雜命名 pdf 對:如「…台北仁愛-…試題卷.pdf」+「…參考答案.pdf」、「…大灣…試題.pdf」+「…解答.pdf」
#   C. 單檔雜命名:如「111_1_3_3_高雄陽明-數學.pdf」(只有試卷、無答案)
# 略過:.doc(舊二進位,無 stdlib 解析器)、.mp3(英聽音檔,留待 TTS)。皆會在 stderr 警告。
#
# 切片中繼一律取自「資料夾名」(穩健):資料夾 = 國中考題/<年級>/<科目>-<版本>-<學期>-<段考>。
# 每檔僅補 校名+學年(regex,盡力),自然領域(理化/地科/生物)由檔名關鍵字判 domain。
#
# 用法:python exam/tools/triage_slice.py "<切片資料夾>" <prefix> [limit]
#       python exam/tools/triage_slice.py --selftest
# 抽題規格見 exam/tools/EXTRACT.md(所有 agent 共用,毋須在每個提示裡重述)。
import fitz, os, glob, json, sys, re, zipfile, html
try: sys.stdout.reconfigure(encoding="utf-8"); sys.stderr.reconfigure(encoding="utf-8")
except Exception: pass

MATH = re.compile(r"相似|三角形|△|方程式|函數|座標|多項式|因式|畢氏|根號|∠")
GUO  = re.compile(r"注音|國字|閱讀測驗|字形|字音|作文|默寫|語譯|修辭|選出")
ANS  = re.compile(r"答案|解答|詳解")                      # 判別「答案卷」的關鍵字
DOMS = [("理化", r"理化"), ("地球科學", r"地球科學|地科"), ("生物", r"生物")]
CJK  = lambda s: "".join(re.findall(r"[一-鿿]", s))

def docx_text(path):
    try:
        xml = zipfile.ZipFile(path).read("word/document.xml").decode("utf-8", "ignore")
        return html.unescape(re.sub(r"<[^>]+>", "", re.sub(r"</w:p>", "\n", xml)))
    except Exception:
        return ""

def text_of(path):
    e = path.lower()
    if e.endswith(".pdf"):
        d = fitz.open(path); t = "".join(p.get_text() for p in d); d.close(); return t
    if e.endswith(".docx"): return docx_text(path)
    return ""   # .doc 等無解析

def slice_meta(src):
    # src = ".../國中考題/<年級>/<科目>-<版本>-<學期>-<段考>"
    src = os.path.normpath(src)
    grade = os.path.basename(os.path.dirname(src))
    p = os.path.basename(src).split("-")
    subject, version, sem, exam = (p + ["", "", "", ""])[:4]
    return dict(grade=grade, subject=subject, version=version, sem=sem, exam=exam)

def year_of(name):
    m = re.search(r"1[0-2][0-9]", name); return m.group() if m else ""

def school_of(name):
    m = re.search(r"[一-鿿]{2,}?(?:國民中學|國中|高中附設國中|中學|高中|國小)", name)
    if m: return m.group()
    m = re.search(r"[一-鿿]{2,10}", re.sub(r"試卷|試題卷|試題|答案|解答|詳解|題目卷|題目", "", name))
    return m.group() if m else os.path.splitext(name)[0][:12]

def lcs(a, b):  # 最長共同子字串長度(中文過濾後)
    a, b = CJK(a), CJK(b)
    if not a or not b: return 0
    prev = [0] * (len(b) + 1); best = 0
    for i in range(1, len(a) + 1):
        cur = [0] * (len(b) + 1)
        for j in range(1, len(b) + 1):
            if a[i-1] == b[j-1]:
                cur[j] = prev[j-1] + 1; best = max(best, cur[j])
        prev = cur
    return best

def render(pdf, tag, folder, width=900, quality=80):
    d = fitz.open(pdf); out = []
    for i, p in enumerate(d):
        m = fitz.Matrix(width / p.rect.width, width / p.rect.width)
        p.get_pixmap(matrix=m).save(os.path.join(folder, f"{tag}{i+1}.jpg"), jpg_quality=quality)
        out.append(f"exam/img/{os.path.basename(folder)}/{tag}{i+1}.jpg")
    d.close(); return out

def gather(src):
    """回傳 (papers, warns):papers=[(paper_path, answer_path|None)];配對正規名優先、其餘年份+最長共同中文子字串。"""
    warns = []
    files = sorted(f for f in glob.glob(os.path.join(src, "*")) if os.path.isfile(f))
    papers, answers = [], []
    for f in files:
        b = os.path.basename(f); low = f.lower()
        if low.endswith((".mp3", ".doc", ".xlsx", ".xls")):
            if low.endswith(".mp3"): warns.append(f"[音檔略過→待TTS] {b}")
            elif low.endswith(".doc"): warns.append(f"[.doc舊格式無法解析,略過] {b}")
            continue
        if not low.endswith((".pdf", ".docx")): continue
        (answers if ANS.search(b) else papers).append(f)
    # 正規名優先(方便 01..N 前段=正規),再雜名
    papers.sort(key=lambda f: (0 if f.endswith(("康軒 試卷.pdf", "康軒 試卷.docx")) else 1, f))
    used, out = set(), []
    for pf in papers:
        b = os.path.basename(pf); ans = None
        # 1) 正規精確配對:試卷→答案,同副檔或 .pdf/.docx
        if "試卷" in b:
            for cand in (pf.replace("試卷.pdf", "答案.pdf"), pf.replace("試卷.docx", "答案.docx"),
                         pf.replace("試卷.docx", "答案.pdf"), pf.replace("試卷.pdf", "答案.docx")):
                if cand != pf and os.path.exists(cand) and cand not in used:
                    ans = cand; break
        # 2) 雜名:同學年 + 最長共同中文子字串 ≥3
        if not ans:
            y = year_of(b); best, score = None, 0
            for a in answers:
                if a in used or (y and year_of(os.path.basename(a)) != y): continue
                s = lcs(b, os.path.basename(a))
                if s > score: best, score = a, s
            if score >= 3: ans = best
        if ans: used.add(ans)
        out.append((pf, ans))
    lone = [a for a in answers if a not in used]
    if lone: warns.append(f"[未配對答案 {len(lone)} 檔] " + "; ".join(os.path.basename(x) for x in lone[:5]))
    return out, warns

def main(src, prefix, limit=None):
    proj = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    out_img = os.path.join(proj, "exam", "img")
    smeta = slice_meta(src)
    pairs, warns = gather(src)
    if limit: pairs = pairs[:limit]
    for w in warns: print("  ⚠", w, file=sys.stderr)
    manifest = []
    for idx, (pf, af) in enumerate(pairs, 1):
        pid = f"{prefix}-{idx:02d}"
        folder = os.path.join(out_img, pid); os.makedirs(folder, exist_ok=True)
        b = os.path.basename(pf)
        meta = dict(id=pid, school=school_of(b), year=year_of(b), **smeta)
        if meta["subject"] == "自然":
            meta["domain"] = next((d for d, rx in DOMS if re.search(rx, b)), "")
        ptext = text_of(pf)
        qi = render(pf, "q", folder) if pf.lower().endswith(".pdf") else []
        open(os.path.join(folder, "text.txt"), "w", encoding="utf-8").write(ptext)
        atext, asrc, ai = "", "none", []
        if af:
            atext = text_of(af)
            if af.lower().endswith(".pdf"):
                ai = render(af, "a", folder)
                asrc = "pdf-text" if len(atext) > 40 else "pdf-image"
            else:
                asrc = "docx" if len(atext) > 40 else "none"
        if atext: open(os.path.join(folder, "answer.txt"), "w", encoding="utf-8").write(atext)
        scanned = len(ptext) < 200
        misfiled = (meta["subject"] == "國文" and len(MATH.findall(ptext)) > len(GUO.findall(ptext))
                    and len(MATH.findall(ptext)) >= 3)
        route = ("skip-misfiled" if misfiled else "vision" if scanned else
                 "text" if asrc in ("pdf-text", "docx") else
                 "text+visionAns" if asrc == "pdf-image" else "text-noans")
        manifest.append(dict(**meta, paperImgs=qi, answerImgs=ai, route=route,
                             answerSource=asrc, paperTextLen=len(ptext), answerTextLen=len(atext)))
        print(f"{pid} {meta['school'][:10]} {meta['year']} route={route} q{len(ptext)} 答{asrc}({len(atext)})",
              file=sys.stderr)
    print(json.dumps(manifest, ensure_ascii=False, indent=1))
    from collections import Counter
    print("route 分佈:", dict(Counter(m["route"] for m in manifest)), file=sys.stderr)

def _selftest():
    assert year_of("112-1-3  台北仁愛-九年級數學科試題卷.pdf") == "112"
    assert year_of("市立中山國中 九年級 109 上學期 康軒 試卷.pdf") == "109"
    assert lcs("112-1-3  台北仁愛-九年級數學科試題卷", "112台北仁愛...參考答案") >= 3  # 台北仁愛
    assert lcs("112-高雄大灣國中-…數學三年級試題", "112-高雄大灣國中-…數學三年級解答") >= 3
    assert ANS.search("試題(解答).pdf") and not ANS.search("自然科試題.pdf")
    assert school_of("112-高雄大灣國中-…試題.pdf").endswith("國中")
    print("selftest OK")

if __name__ == "__main__":
    if "--selftest" in sys.argv: _selftest()
    else:
        a = sys.argv
        main(a[1], a[2], limit=int(a[3]) if len(a) > 3 else None)
