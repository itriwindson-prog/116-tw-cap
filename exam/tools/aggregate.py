# aggregate.py — 把各卷逐題抽取的 JSON(q_<id>.json) 併成 js/data/exambank.js
# 每題附上卷別中繼(科目/年級/學期/段考/版本 + paperId,可回溯原卷附圖),並跨校去重相同題幹。
#
# 用法:
#   python exam/tools/aggregate.py <manifest.json> <含 q_*.json 的資料夾>
#
# q_<id>.json 由視覺 subagent 產生(讀 exam/img/<id>/q*.jpg + a*.jpg，逐題抽 stem/options/answer/
# section/needsFigure/figureRef;答案務必對照答案頁核對)。詳見 README.md。
import json, os, glob, sys, re
from collections import Counter

def norm(s): return re.sub(r"\s+", "", re.sub(r"[，,。.、；;：:（）()？?！!\"'「」]", "", s or ""))

def main(manifest_path, qdir):
    proj = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    meta = {m["id"]: m for m in json.load(open(manifest_path, encoding="utf-8"))}
    bank, seen = [], set()
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
                         "n": q.get("n", ""), "section": q.get("section", ""), "stem": q.get("stem", ""),
                         "options": q.get("options", []), "answer": q.get("answer", ""),
                         "needsFigure": bool(q.get("needsFigure")), "figureRef": q.get("figureRef", "")})
    hdr = ("// exambank.js — 由段考真卷逐題抽取的結構化題庫(供自組測驗卷/會考卷)。每題可回溯 paperId 看原卷附圖。\n"
           "window.STUDYSYNC = window.STUDYSYNC || { data: {} };\nwindow.STUDYSYNC.data.exambank = [\n")
    open(os.path.join(proj, "js/data/exambank.js"), "w", encoding="utf-8").write(
        hdr + ",\n".join("  " + json.dumps(b, ensure_ascii=False) for b in bank) + "\n];\n")
    print(f"共 {len(bank)} 題 | {dict(Counter(b['section'] for b in bank))} | 需圖 {sum(b['needsFigure'] for b in bank)}", file=sys.stderr)

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
