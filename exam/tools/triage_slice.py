# triage_slice.py — render_slice 的省 token 升級版(策略 1+3+5)。
# 除了把每頁渲染成 JPEG(保真、給 figureRef/掃描卷用),還做三件事:
#   1) 抽「試卷」與「答案」的 PDF/docx 文字層,寫成 sidecar:exam/img/<id>/text.txt、answer.txt
#      → 文字卷的抽題 agent 只讀這兩個純文字檔,不必反覆讀整頁 JPEG(視覺 token 大降)。
#   2) 分流每份卷 route:text(有題目文字層+答案文字)/ text+visionAns(有題目文字、答案是圖)/
#      vision(掃描卷,無文字層,需全視覺)/ text-noans(有題目無答案)/ skip-misfiled(國文夾誤置數學卷)。
#   3) 輸出 manifest_<prefix>.json(相容 aggregate.py,額外帶 route/answerSource 供派工分流)。
#
# 用法:python exam/tools/triage_slice.py "<來源資料夾>" <prefix> "*康軒 試卷.pdf" [limit]
# 之後只把 route=vision / text+visionAns 的卷派視覺 agent;route=text 的可用最輕量 agent(讀 sidecar)。
# 抽題規格見 exam/tools/EXTRACT.md(所有 agent 共用,毋須在每個提示裡重述)。
import fitz, os, glob, json, sys, re, zipfile, html
try: sys.stdout.reconfigure(encoding="utf-8"); sys.stderr.reconfigure(encoding="utf-8")
except Exception: pass

MATH = re.compile(r"相似|三角形|△|方程式|函數|座標|多項式|因式|畢氏|根號|∠")
GUO  = re.compile(r"注音|國字|閱讀測驗|字形|字音|作文|默寫|語譯|修辭|選出")
DOM  = {"理化", "地球科學", "生物"}

def docx_text(path):
    try:
        xml = zipfile.ZipFile(path).read("word/document.xml").decode("utf-8")
        return html.unescape(re.sub(r"<[^>]+>", "", re.sub(r"</w:p>", "\n", xml)))
    except Exception:
        return ""

def pdf_text(path):
    d = fitz.open(path); t = "".join(p.get_text() for p in d); d.close(); return t

def parse(fn):  # 學校 年級 學年 學期 領域 科目 段考 期中/末 版本 試卷
    t = os.path.basename(fn).replace(" 試卷.pdf", "").split()
    return dict(school=t[0], grade=t[1], year=t[2], sem=t[3], subject=t[5], exam=t[6], version=t[8])

def render(pdf, tag, folder, width=900, quality=80):
    d = fitz.open(pdf); out = []
    for i, p in enumerate(d):
        pix = p.get_pixmap(matrix=fitz.Matrix(width / p.rect.width, width / p.rect.width))
        pix.save(os.path.join(folder, f"{tag}{i+1}.jpg"), jpg_quality=quality)
        out.append(f"exam/img/{os.path.basename(folder)}/{tag}{i+1}.jpg")
    d.close(); return out

def main(src, prefix, paper_glob, limit=None):
    proj = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    out_img = os.path.join(proj, "exam", "img")
    papers = sorted(glob.glob(os.path.join(src, paper_glob)))
    if limit: papers = papers[:limit]
    manifest = []
    for idx, pf in enumerate(papers, 1):
        pid = f"{prefix}-{idx:02d}"
        folder = os.path.join(out_img, pid); os.makedirs(folder, exist_ok=True)
        meta = parse(pf)
        # 自然:subject 正規化為「自然」,原領域存 domain
        if meta["subject"] in DOM or meta["subject"] == "自然科學領域":
            meta["domain"] = meta["subject"] if meta["subject"] in DOM else ""
            meta["subject"] = "自然"
        elif meta["subject"] == "數學領域":
            meta["subject"] = "數學"
        # 試卷文字層 + 渲染
        ptext = pdf_text(pf)
        qi = render(pf, "q", folder)
        open(os.path.join(folder, "text.txt"), "w", encoding="utf-8").write(ptext)
        # 答案:先找 pdf 再找 docx
        af_pdf = pf.replace(" 試卷.pdf", " 答案.pdf")
        af_docx = pf.replace(" 試卷.pdf", " 答案.docx")
        atext, asrc, ai = "", "none", []
        if os.path.exists(af_pdf):
            atext = pdf_text(af_pdf); ai = render(af_pdf, "a", folder)
            asrc = "pdf-text" if len(atext) > 40 else "pdf-image"   # 答案PDF可能是掃描(無文字)
        elif os.path.exists(af_docx):
            atext = docx_text(af_docx); asrc = "docx"
        if atext:
            open(os.path.join(folder, "answer.txt"), "w", encoding="utf-8").write(atext)
        # 分流
        scanned = len(ptext) < 200
        misfiled = (meta["subject"] == "國文" and len(MATH.findall(ptext)) > len(GUO.findall(ptext))
                    and len(MATH.findall(ptext)) >= 3)
        if misfiled:                 route = "skip-misfiled"
        elif scanned:                route = "vision"
        elif asrc in ("pdf-text", "docx"): route = "text"
        elif asrc == "pdf-image":    route = "text+visionAns"
        else:                        route = "text-noans"
        manifest.append(dict(id=pid, **meta, paperImgs=qi, answerImgs=ai,
                             route=route, answerSource=asrc,
                             paperTextLen=len(ptext), answerTextLen=len(atext)))
        print(f"{pid} {meta['school'][:8]} {meta['year']} route={route} "
              f"q文字{len(ptext)} 答案{asrc}({len(atext)})", file=sys.stderr)
    print(json.dumps(manifest, ensure_ascii=False, indent=1))
    from collections import Counter
    print("route 分佈:", dict(Counter(m["route"] for m in manifest)), file=sys.stderr)

if __name__ == "__main__":
    a = sys.argv
    main(a[1], a[2], a[3], limit=int(a[4]) if len(a) > 4 else None)
