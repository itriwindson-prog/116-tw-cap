# aggregate.py — 把各卷逐題抽取的 JSON(q_<id>.json) 併進 js/data/exambank.js
# 每題附上卷別中繼(科目/年級/學期/段考/版本 + paperId,可回溯原卷附圖),並跨校去重相同題幹。
#
# 用法:
#   python exam/tools/aggregate.py <manifest.json> <含 q_*.json 的資料夾>
#
# 為「可累積」設計:預設會讀入現有 exambank.js,先移除本次 manifest 涵蓋 paperId 的舊題
# (重跑同切片=刷新),再把新題併入;不同切片多次執行會逐步累加,不會覆蓋既有題庫。
# 加 --fresh 則不讀舊題、從零重建。
#
# q_<id>.json 由視覺 subagent 產生(讀 exam/img/<id>/q*.jpg + a*.jpg,逐題抽 stem/options/answer/
# section/needsFigure/figureRef;答案務必對照答案頁核對)。詳見 README.md。
import json, os, glob, sys, re
from collections import Counter

def norm(s): return re.sub(r"\s+", "", re.sub(r"[，,。.、；;：:（）()？?！!\"'「」]", "", s or ""))

# section 正規化:去掉多餘「題」等變體,對齊 compose.html 認得的 7 類(選擇只此一種才會計分)
SECN = {"選擇題": "選擇", "填充題": "填充", "計算題": "計算", "是非題": "是非",
        "非選擇題": "非選擇", "非選題": "非選擇", "閱讀測驗題": "閱讀測驗", "聽力題": "聽力", "閱讀": "閱讀測驗"}
def secnorm(s): return SECN.get(s, s)

def load_existing(path):
    if not os.path.exists(path): return []
    txt = open(path, encoding="utf-8").read()
    i, j = txt.find("["), txt.rfind("]")
    if i < 0 or j < 0: return []
    return json.loads(txt[i:j+1])  # 陣列本體是 json.dumps 輸出,可直接 parse

def main(manifest_path, qdir, fresh=False):
    proj = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    out = os.path.join(proj, "js/data/exambank.js")
    meta = {m["id"]: m for m in json.load(open(manifest_path, encoding="utf-8"))}
    new_pids = set(meta)
    # 既有題庫:去掉本次 manifest 涵蓋的 paperId(重跑=刷新),其餘保留
    bank = [] if fresh else [b for b in load_existing(out) if b.get("paperId") not in new_pids]
    seen = {norm(b.get("stem", "")) for b in bank if len(norm(b.get("stem", ""))) > 12}
    added = 0
    for f in sorted(glob.glob(os.path.join(qdir, "q_*.json"))):
        pid = os.path.basename(f)[2:-5]
        m = meta.get(pid)
        if not m: print("跳過(無中繼):", pid, file=sys.stderr); continue
        for q in json.load(open(f, encoding="utf-8")):
            k = norm(q.get("stem", ""))
            if len(k) > 12 and k in seen: continue
            seen.add(k)
            bank.append({"paperId": pid, "school": m["school"], "year": m["year"], "grade": m["grade"],
                         "sem": m["sem"], "exam": m["exam"], "subject": m["subject"], "version": m["version"],
                         **({"domain": m["domain"]} if m.get("domain") else {}),
                         **({"needsAudio": True} if q.get("needsAudio") else {}),
                         "n": q.get("n", ""), "section": secnorm(q.get("section", "")), "stem": q.get("stem", ""),
                         "options": q.get("options", []), "answer": q.get("answer", ""),
                         "needsFigure": bool(q.get("needsFigure")), "figureRef": q.get("figureRef", "")})
            added += 1
    hdr = ("// exambank.js — 由段考真卷逐題抽取的結構化題庫(供自組測驗卷/會考卷)。每題可回溯 paperId 看原卷附圖。\n"
           "window.STUDYSYNC = window.STUDYSYNC || { data: {} };\nwindow.STUDYSYNC.data.exambank = [\n")
    open(out, "w", encoding="utf-8").write(
        hdr + ",\n".join("  " + json.dumps(b, ensure_ascii=False) for b in bank) + "\n];\n")
    print(f"本次新增 {added} 題;題庫共 {len(bank)} 題 | {dict(Counter(b['subject'] for b in bank))} | "
          f"section {dict(Counter(b['section'] for b in bank))} | 需圖 {sum(b['needsFigure'] for b in bank)}", file=sys.stderr)

if __name__ == "__main__":
    a = [x for x in sys.argv[1:] if x != "--fresh"]
    main(a[0], a[1], fresh="--fresh" in sys.argv)
