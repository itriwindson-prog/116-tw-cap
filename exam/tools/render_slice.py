# render_slice.py — 把一個「切片」資料夾內的段考真卷(試卷+答案)每頁渲染成 JPEG，並輸出 manifest。
# 這是段考卷電子化第 1 步(保真、圖形完整保留)。第 2 步用視覺 subagent 逐題抽成結構化 JSON，
# 第 3 步用 aggregate.py 併成 js/data/exambank.js。詳見 exam/tools/README.md。
#
# 用法:
#   python exam/tools/render_slice.py "<來源資料夾>" <prefix> "<試卷檔名glob>" > manifest.json
# 例:
#   python exam/tools/render_slice.py \
#     "國中考題/九年級/數學-康軒-上學期-第一次段考" m9u1e1 "*康軒 試卷.pdf"
#
# 需要: pip install pymupdf
import fitz, os, glob, json, sys
try: sys.stdout.reconfigure(encoding="utf-8"); sys.stderr.reconfigure(encoding="utf-8")
except Exception: pass

def main(src, prefix, paper_glob, width=1200, quality=82, limit=None):
    proj = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    out_img = os.path.join(proj, "exam", "img")
    papers = sorted(glob.glob(os.path.join(src, paper_glob)))
    if limit: papers = papers[:limit]
    manifest = []
    def parse(fn):  # 標準命名: 學校 年級 學年 學期 領域 科目 段考 期中/末 版本 試卷
        t = os.path.basename(fn).replace(" 試卷.pdf", "").split()
        return dict(school=t[0], grade=t[1], year=t[2], sem=t[3], subject=t[5], exam=t[6], version=t[8])
    def render(pdf, tag, folder):
        d = fitz.open(pdf); out = []; txt = ""
        for i, p in enumerate(d):
            txt += f"\n[p{i+1}]\n" + p.get_text()
            pix = p.get_pixmap(matrix=fitz.Matrix(width / p.rect.width, width / p.rect.width))
            pix.save(os.path.join(folder, f"{tag}{i+1}.jpg"), jpg_quality=quality)
            out.append(f"exam/img/{os.path.basename(folder)}/{tag}{i+1}.jpg")
        d.close(); return out, txt
    for idx, pf in enumerate(papers, 1):
        pid = f"{prefix}-{idx:02d}"
        folder = os.path.join(out_img, pid); os.makedirs(folder, exist_ok=True)
        meta = parse(pf)
        qi, qt = render(pf, "q", folder)
        af = pf.replace(" 試卷.pdf", " 答案.pdf")
        ai, at = (render(af, "a", folder) if os.path.exists(af) else ([], ""))
        manifest.append(dict(id=pid, **meta, paperImgs=qi, answerImgs=ai, paperText=qt, answerText=at))
        print(f"{pid}: {meta['school']} {meta['year']} 試卷{len(qi)} 答案{len(ai)}", file=sys.stderr)
    print(json.dumps(manifest, ensure_ascii=False, indent=1))

if __name__ == "__main__":
    a = sys.argv
    main(a[1], a[2], a[3], limit=int(a[4]) if len(a) > 4 else None)
