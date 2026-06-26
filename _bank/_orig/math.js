// math.js — 數學（完整 108 課綱；補題到 4/topic + 每段筆記 SVG 圖解 + 答案經獨立重驗）
window.STUDYSYNC = window.STUDYSYNC || { data: {} };
window.STUDYSYNC.data.subjects = window.STUDYSYNC.data.subjects || {};
window.STUDYSYNC.data.subjects.math = {
  id: "math", name: "數學",
  topics: [
    {
      "id": "number",
      "name": "數與量（正負數與絕對值）",
      "week": "七上 9月",
      "notes": [
        {
          "h": "正負數四則與絕對值",
          "points": [
            "數線上一點到原點的距離叫絕對值，恆 ≥ 0。",
            "負負得正：(−)×(−)=(+)；異號相乘為負。",
            "運算順序：括號→次方→乘除→加減。"
          ],
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><line x1=\"20\" y1=\"100\" x2=\"300\" y2=\"100\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><polygon points=\"300,100 292,96 292,104\" fill=\"#2b2b2b\"/><polygon points=\"20,100 28,96 28,104\" fill=\"#2b2b2b\"/><line x1=\"160\" y1=\"92\" x2=\"160\" y2=\"108\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><line x1=\"90\" y1=\"92\" x2=\"90\" y2=\"108\" stroke=\"#c9755c\" stroke-width=\"2\"/><line x1=\"230\" y1=\"92\" x2=\"230\" y2=\"108\" stroke=\"#7fae9e\" stroke-width=\"2\"/><text x=\"156\" y=\"124\" fill=\"#333\" font-size=\"12\">0</text><text x=\"82\" y=\"124\" fill=\"#333\" font-size=\"12\">−3</text><text x=\"226\" y=\"124\" fill=\"#333\" font-size=\"12\">3</text><path d=\"M90 70 Q125 50 160 70\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><path d=\"M160 70 Q195 50 230 70\" fill=\"none\" stroke=\"#7fae9e\" stroke-width=\"2\"/><text x=\"100\" y=\"46\" fill=\"#333\" font-size=\"12\">距離 3</text><text x=\"184\" y=\"46\" fill=\"#333\" font-size=\"12\">距離 3</text><text x=\"92\" y=\"156\" fill=\"#333\" font-size=\"12\">絕對值 = 到 0 的距離</text></svg>",
          "caption": "數線與絕對值距離",
          "trap": "−3² 與 (−3)² 不同！−3² = −9（只有 3 平方再取負），(−3)² = 9。"
        },
        {
          "h": "絕對值的幾何意義",
          "points": [
            "|a−b| 表示數線上 a 與 b 兩點的距離。",
            "|x| = 5 表示 x = 5 或 x = −5（兩解）。"
          ],
          "trap": "|x|=5 有兩個解，別只寫 5 漏掉 −5。",
          "svg": "<svg viewBox=\"0 0 360 170\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"360\" height=\"170\" fill=\"#f3e7df\"/><line x1=\"20\" y1=\"95\" x2=\"340\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"2\"/><polygon points=\"340,95 332,91 332,99\" fill=\"#3a342e\"/><line x1=\"90\" y1=\"87\" x2=\"90\" y2=\"103\" stroke=\"#c9755c\" stroke-width=\"2\"/><line x1=\"270\" y1=\"87\" x2=\"270\" y2=\"103\" stroke=\"#5aa874\" stroke-width=\"2\"/><circle cx=\"90\" cy=\"95\" r=\"4\" fill=\"#c9755c\"/><circle cx=\"270\" cy=\"95\" r=\"4\" fill=\"#5aa874\"/><text x=\"78\" y=\"120\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">a=−2</text><text x=\"258\" y=\"120\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">b=7</text><path d=\"M90 70 Q180 44 270 70\" fill=\"none\" stroke=\"#f0a52e\" stroke-width=\"2\"/><text x=\"120\" y=\"38\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">|a−b| = 兩點距離 = 9</text><text x=\"34\" y=\"150\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">|a−b| 就是數線上 a 到 b 的距離</text></svg>",
          "caption": "|a−b| 表示數線上兩點間的距離"
        }
      ],
      "quiz": [
        {
          "stem": "計算 |−5 + 3| − |−2| × (−3)² 的值。",
          "options": [
            "−16",
            "16",
            "−20",
            "0"
          ],
          "answer": 0,
          "explanation": "|−5+3|=|−2|=2，|−2|=2，(−3)²=9。依序：2 − 2×9 = 2 − 18 = −16。",
          "trap": "要先算絕對值與乘方，再做乘法，最後才加減；2−2×9 不是 (2−2)×9。"
        },
        {
          "stem": "數線上 A、B 兩點坐標分別為 −7 與 5，C 為 AB 中點，則 C 到 A 的距離為？",
          "options": [
            "6",
            "−1",
            "1",
            "12"
          ],
          "answer": 0,
          "explanation": "A、B 距離 = |5−(−7)| = 12，中點 C 坐標 = (−7+5)/2 = −1。C 到 A 距離 = |−1−(−7)| = 6。",
          "trap": "問的是「C 到 A 的距離」(=6)，不是 C 的坐標(−1)，也不是 AB 全長(12)。"
        },
        {
          "stem": "計算 (−2)³ − 3 × |−4| + (−1)⁵⁰ 的值。",
          "options": [
            "−19",
            "−21",
            "19",
            "−3"
          ],
          "answer": 0,
          "explanation": "(−2)³=−8；3×|−4|=12；(−1)⁵⁰=1（偶次方為正）。−8 − 12 + 1 = −19。",
          "trap": "(−1)的偶次方=1（非 −1）；且 −8−12 要先算，別把 (−1)⁵⁰ 看成 −1。"
        },
        {
          "stem": "若 |2x − 1| = 7，則所有滿足條件的 x 值之和為？",
          "options": [
            "1",
            "4",
            "−3",
            "7"
          ],
          "answer": 0,
          "explanation": "|2x−1|=7 ⟹ 2x−1=7 或 2x−1=−7。前者 x=4，後者 x=−3。兩解之和 = 4+(−3) = 1。",
          "trap": "⚠ 絕對值方程有「兩解」，別只取 2x−1=7 算出的 x=4；要把 −3 也加進來，和為 1。"
        }
      ]
    },
    {
      "id": "fraction",
      "name": "分數與小數運算",
      "week": "七上 9月",
      "notes": [
        {
          "h": "分數四則",
          "points": [
            "加減先通分；乘法分子乘分子、分母乘分母。",
            "除以一個分數 = 乘以它的倒數。"
          ],
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><rect x=\"40\" y=\"50\" width=\"80\" height=\"80\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><line x1=\"80\" y1=\"50\" x2=\"80\" y2=\"130\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><rect x=\"40\" y=\"50\" width=\"40\" height=\"80\" fill=\"#c9755c\" opacity=\"0.55\"/><text x=\"58\" y=\"150\" fill=\"#333\" font-size=\"12\">1/2</text><rect x=\"200\" y=\"50\" width=\"80\" height=\"80\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><line x1=\"200\" y1=\"77\" x2=\"280\" y2=\"77\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"200\" y1=\"103\" x2=\"280\" y2=\"103\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><rect x=\"200\" y=\"50\" width=\"80\" height=\"27\" fill=\"#7fae9e\" opacity=\"0.55\"/><text x=\"222\" y=\"150\" fill=\"#333\" font-size=\"12\">1/3</text><text x=\"150\" y=\"95\" fill=\"#333\" font-size=\"16\">通分</text><text x=\"142\" y=\"172\" fill=\"#333\" font-size=\"12\">化為同分母再相加</text></svg>",
          "caption": "分數通分的面積圖解",
          "trap": "帶分數運算先化成假分數，否則整數部分容易漏算。"
        },
        {
          "h": "循環小數化分數",
          "points": [
            "純循環：循環節除以同位數的 9。",
            "0.3̇ = 3/9 = 1/3。"
          ],
          "formula": "0.ȧḃ = ab/99",
          "trap": "化分數後記得約分到最簡。",
          "svg": "<svg viewBox=\"0 0 360 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"360\" height=\"180\" fill=\"#eef4f2\"/><text x=\"24\" y=\"42\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">設 x = 0.4̇5̇ = 0.454545…</text><text x=\"24\" y=\"74\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">100x = 45.4545…</text><text x=\"40\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">− x =  0.4545…</text><line x1=\"24\" y1=\"108\" x2=\"210\" y2=\"108\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"24\" y=\"130\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">99x = 45</text><text x=\"230\" y=\"100\" font-family=\"sans-serif\" font-size=\"15\" fill=\"#3a342e\">x = 45/99</text><text x=\"230\" y=\"126\" font-family=\"sans-serif\" font-size=\"15\" fill=\"#c9755c\">= 5/11</text><text x=\"24\" y=\"162\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">兩位循環節 ÷ 99，再約分至最簡</text></svg>",
          "caption": "乘 10ⁿ 後相減消去循環，再約分"
        }
      ],
      "quiz": [
        {
          "stem": "計算 (3/4 − 5/6) ÷ (−1/12) 的值。",
          "options": [
            "1",
            "−1",
            "−1/12",
            "12"
          ],
          "answer": 0,
          "explanation": "3/4 − 5/6 = 9/12 − 10/12 = −1/12。(−1/12) ÷ (−1/12) = 1。",
          "trap": "除以分數要乘倒數；負除以負為正，結果是 1 不是 −1。"
        },
        {
          "stem": "一桶水第一天用去 1/3，第二天用去剩下的 1/4，還剩全桶的幾分之幾？",
          "options": [
            "1/2",
            "5/12",
            "1/4",
            "7/12"
          ],
          "answer": 0,
          "explanation": "第一天後剩 2/3；第二天用 2/3 的 1/4 = 1/6，故第二天後剩 2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2。",
          "trap": "第二天用的是「剩下的」1/4，不是全桶的 1/4，要先算剩 2/3 再乘。"
        },
        {
          "stem": "將循環小數 0.4̇5̇ 化成最簡分數。",
          "options": [
            "5/11",
            "45/100",
            "9/20",
            "1/2"
          ],
          "answer": 0,
          "explanation": "0.4̇5̇ = 45/99 = 5/11（同除 9）。",
          "trap": "兩位循環節除以 99（非 100）；再約分 45/99=5/11，別停在未約分。"
        },
        {
          "stem": "將循環小數 0.16̇（即 0.1666…，只有 6 循環）化成最簡分數。",
          "options": [
            "1/6",
            "16/99",
            "16/90",
            "1/60"
          ],
          "answer": 0,
          "explanation": "設 x=0.1666…，10x=1.666…、100x=16.666…，相減 90x=15，x=15/90=1/6。",
          "trap": "⚠ 只有「6」循環、「1」不循環，分母是 90 不是 99；化簡後 15/90=1/6，別停在 16/90。"
        }
      ]
    },
    {
      "id": "exponent",
      "name": "指數律與科學記號",
      "week": "七上 10月",
      "notes": [
        {
          "h": "指數律",
          "points": [
            "aᵐ × aⁿ = aᵐ⁺ⁿ；aᵐ ÷ aⁿ = aᵐ⁻ⁿ。",
            "(aᵐ)ⁿ = aᵐⁿ；a⁰ = 1（a≠0）。",
            "a⁻ⁿ = 1/aⁿ。"
          ],
          "formula": "aᵐ × aⁿ = aᵐ⁺ⁿ",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><text x=\"40\" y=\"70\" fill=\"#c9755c\" font-size=\"22\">a²</text><text x=\"78\" y=\"70\" fill=\"#333\" font-size=\"22\">×</text><text x=\"100\" y=\"70\" fill=\"#7fae9e\" font-size=\"22\">a³</text><text x=\"138\" y=\"70\" fill=\"#333\" font-size=\"22\">=</text><text x=\"162\" y=\"70\" fill=\"#2b2b2b\" font-size=\"22\">a</text><text x=\"178\" y=\"58\" fill=\"#2b2b2b\" font-size=\"14\">2+3</text><text x=\"178\" y=\"80\" fill=\"#333\" font-size=\"12\"> </text><text x=\"222\" y=\"70\" fill=\"#333\" font-size=\"22\">=</text><text x=\"244\" y=\"70\" fill=\"#2b2b2b\" font-size=\"22\">a⁵</text><line x1=\"40\" y1=\"92\" x2=\"280\" y2=\"92\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><text x=\"40\" y=\"120\" fill=\"#333\" font-size=\"13\">a·a × a·a·a = a·a·a·a·a</text><text x=\"40\" y=\"145\" fill=\"#c9755c\" font-size=\"13\">2 個</text><text x=\"120\" y=\"145\" fill=\"#7fae9e\" font-size=\"13\">3 個</text><text x=\"200\" y=\"145\" fill=\"#2b2b2b\" font-size=\"13\">共 5 個</text><text x=\"40\" y=\"170\" fill=\"#333\" font-size=\"12\">同底相乘：指數相加</text></svg>",
          "caption": "同底相乘指數相加",
          "trap": "同底相乘是「指數相加」，不是相乘；(a²)³=a⁶ 才是相乘。"
        },
        {
          "h": "科學記號",
          "points": [
            "寫成 a × 10ⁿ，其中 1 ≤ a < 10。",
            "很小的數用負指數，很大的數用正指數。"
          ],
          "trap": "0.003 = 3×10⁻³，小數點右移幾位，指數就是負幾。",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"360\" height=\"175\" fill=\"#f3e7df\"/><text x=\"30\" y=\"50\" font-family=\"sans-serif\" font-size=\"15\" fill=\"#3a342e\">a × 10</text><text x=\"86\" y=\"42\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">n</text><text x=\"118\" y=\"50\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">（1 ≤ a &lt; 10）</text><text x=\"30\" y=\"92\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">3000 = 3 × 10³</text><text x=\"240\" y=\"92\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">大數：正指數</text><text x=\"30\" y=\"122\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">0.003 = 3 × 10⁻³</text><text x=\"240\" y=\"122\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">小數：負指數</text><line x1=\"30\" y1=\"135\" x2=\"330\" y2=\"135\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"30\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">小數點移幾位，指數的絕對值就是幾</text></svg>",
          "caption": "科學記號：係數介於 1~10，指數記錄位移"
        }
      ],
      "quiz": [
        {
          "stem": "計算 (2×10⁵) × (4×10⁻²) 並以科學記號表示。",
          "options": [
            "8×10³",
            "8×10⁻¹⁰",
            "8×10⁷",
            "0.8×10⁴"
          ],
          "answer": 0,
          "explanation": "係數 2×4 = 8；指數 10⁵×10⁻² = 10³。結果 8×10³。",
          "trap": "指數是相加(5+(−2)=3)不是相乘；8 已符合 1≤a<10，不必再調整。"
        },
        {
          "stem": "已知 2⁴ = 16，則 2¹⁰ 的值為？",
          "options": [
            "1024",
            "160",
            "256",
            "2048"
          ],
          "answer": 0,
          "explanation": "2¹⁰ = 2⁴ × 2⁴ × 2² = 16×16×4 = 1024。",
          "trap": "2¹⁰ 不是 2⁴×2.5 之類；指數相加 4+4+2=10 才對。"
        },
        {
          "stem": "光速約 3×10⁸ 公尺/秒，光走 5×10⁻³ 秒前進的距離約為？",
          "options": [
            "1.5×10⁶ 公尺",
            "1.5×10⁵ 公尺",
            "1.5×10⁻¹¹ 公尺",
            "15×10⁵ 公尺"
          ],
          "answer": 0,
          "explanation": "距離 = 速率×時間 = (3×10⁸)×(5×10⁻³) = 15×10⁵ = 1.5×10⁶ 公尺。",
          "trap": "15 不符 1≤a<10，需進位成 1.5×10¹，指數由 10⁵ 變 10⁶。"
        },
        {
          "stem": "計算 (3×10⁻⁴) ÷ (6×10²) 並以科學記號表示。",
          "options": [
            "5×10⁻⁷",
            "0.5×10⁻⁶",
            "2×10⁻⁶",
            "5×10⁻⁵"
          ],
          "answer": 0,
          "explanation": "係數 3÷6 = 0.5；指數 10⁻⁴÷10² = 10⁻⁶。得 0.5×10⁻⁶，調為 5×10⁻⁷。",
          "trap": "⚠ 除法指數相減 −4−2=−6；0.5 不符 1≤a<10，要寫成 5×10⁻⁷（指數再減 1）。"
        }
      ]
    },
    {
      "id": "gcdlcm",
      "name": "最大公因數與最小公倍數",
      "week": "七上 10月",
      "notes": [
        {
          "h": "GCD 與 LCM",
          "points": [
            "先做質因數分解。",
            "GCD：共同質因數、次方取小。",
            "LCM：所有質因數、次方取大。"
          ],
          "formula": "GCD(a,b) × LCM(a,b) = a × b",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><ellipse cx=\"120\" cy=\"95\" rx=\"80\" ry=\"55\" fill=\"#c9755c\" opacity=\"0.30\" stroke=\"#c9755c\" stroke-width=\"2\"/><ellipse cx=\"200\" cy=\"95\" rx=\"80\" ry=\"55\" fill=\"#7fae9e\" opacity=\"0.30\" stroke=\"#7fae9e\" stroke-width=\"2\"/><text x=\"70\" y=\"40\" fill=\"#333\" font-size=\"12\">12 的因數</text><text x=\"220\" y=\"40\" fill=\"#333\" font-size=\"12\">18 的因數</text><text x=\"78\" y=\"100\" fill=\"#333\" font-size=\"12\">4</text><text x=\"240\" y=\"100\" fill=\"#333\" font-size=\"12\">9</text><text x=\"152\" y=\"90\" fill=\"#2b2b2b\" font-size=\"13\">公因數</text><text x=\"150\" y=\"110\" fill=\"#2b2b2b\" font-size=\"13\">1,2,3,6</text><text x=\"150\" y=\"135\" fill=\"#2b2b2b\" font-size=\"13\">GCD=6</text><text x=\"60\" y=\"172\" fill=\"#333\" font-size=\"12\">交集中最大者即最大公因數</text></svg>",
          "caption": "公因數交集示意圖",
          "trap": "別把最大公因數（較小）和最小公倍數（較大）搞反。"
        }
      ],
      "quiz": [
        {
          "stem": "設 a = 2³×3²×5、b = 2²×3×5²，則 a 與 b 的最大公因數為？",
          "options": [
            "60",
            "1800",
            "360",
            "300"
          ],
          "answer": 0,
          "explanation": "GCD 取各質因數次方較小者：2²、3¹、5¹ → 4×3×5 = 60。",
          "trap": "次方取小是 GCD；取大(1800)是 LCM，別看反。"
        },
        {
          "stem": "兩數的最大公因數為 12、最小公倍數為 144，其中一數為 36，另一數為？",
          "options": [
            "48",
            "12",
            "60",
            "108"
          ],
          "answer": 0,
          "explanation": "GCD×LCM = 兩數乘積：12×144 = 1728；另一數 = 1728÷36 = 48。",
          "trap": "用 GCD×LCM=a×b；別誤用 LCM÷GCD 之類的公式。"
        },
        {
          "stem": "甲燈每 6 秒、乙燈每 8 秒各閃一次，兩燈同時閃後，下一次同時閃在幾秒後？",
          "options": [
            "24",
            "48",
            "14",
            "12"
          ],
          "answer": 0,
          "explanation": "同時閃需同為兩週期的倍數，取 LCM(6,8)=24 秒。",
          "trap": "兩燈「同時」要用最小公倍數(24)，不是兩數相加(14)或最大公因數(2)。"
        },
        {
          "stem": "一長方體木箱長 60、寬 48、高 36 公分，欲用相同的正方體積木恰好填滿且積木最大，則需積木幾塊？",
          "options": [
            "80",
            "60",
            "1000",
            "12"
          ],
          "answer": 1,
          "explanation": "積木邊長 = GCD(60,48,36) = 12。沿三邊各放 60/12=5、48/12=4、36/12=3 塊，共 5×4×3 = 60。",
          "trap": "⚠ 邊長用最大公因數 12，但「塊數」要把三邊段數相乘 5×4×3=60，不是邊長 12 也不是 80。"
        }
      ]
    },
    {
      "id": "sqrt",
      "name": "平方根與根式運算",
      "week": "八上 9月",
      "notes": [
        {
          "h": "平方根",
          "points": [
            "√a 表示非負的平方根；a 的平方根有 ±√a 兩個。",
            "√(a²) = |a|。"
          ],
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><rect x=\"110\" y=\"35\" width=\"100\" height=\"100\" fill=\"#7fae9e\" opacity=\"0.40\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><text x=\"148\" y=\"92\" fill=\"#2b2b2b\" font-size=\"16\">面積 16</text><line x1=\"110\" y1=\"148\" x2=\"210\" y2=\"148\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"142\" y=\"166\" fill=\"#333\" font-size=\"12\">邊長 4</text><line x1=\"222\" y1=\"35\" x2=\"222\" y2=\"135\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"232\" y=\"90\" fill=\"#333\" font-size=\"12\">邊長 4</text><text x=\"70\" y=\"24\" fill=\"#333\" font-size=\"12\">正方形面積 = 邊長² → 邊長 = √面積</text></svg>",
          "caption": "正方形面積開方求邊長",
          "trap": "√16 = 4（只取正），但「16 的平方根」是 ±4，問法不同答案不同。"
        },
        {
          "h": "根式化簡與運算",
          "points": [
            "√(ab) = √a×√b（a,b≥0）。",
            "同類方根才能相加減：a√c + b√c = (a+b)√c。"
          ],
          "formula": "√(a²b) = a√b",
          "trap": "√2 + √3 ≠ √5；不同類方根不能直接相加。",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"360\" height=\"175\" fill=\"#eef4f2\"/><text x=\"24\" y=\"44\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\">√(a²b) = a√b（提出完全平方）</text><text x=\"24\" y=\"82\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#c9755c\">√12 = √(4·3) = 2√3</text><text x=\"24\" y=\"110\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#c9755c\">√27 = √(9·3) = 3√3</text><line x1=\"200\" y1=\"60\" x2=\"200\" y2=\"120\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"218\" y=\"82\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#5aa874\">同類方根</text><text x=\"218\" y=\"108\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#5aa874\">才可加減</text><text x=\"24\" y=\"142\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\">2√3 + 3√3 = 5√3　（係數相加）</text><text x=\"24\" y=\"166\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#f0a52e\">⚠ √2 + √3 ≠ √5，不同類不可合併</text></svg>",
          "caption": "先化最簡，再合併同類方根"
        }
      ],
      "quiz": [
        {
          "stem": "化簡 √12 + √27 − √48。",
          "options": [
            "√3",
            "3√3",
            "−√3",
            "0"
          ],
          "answer": 0,
          "explanation": "√12=2√3、√27=3√3、√48=4√3。2√3+3√3−4√3 = √3。",
          "trap": "先各自化成 √3 的倍數再加減；2+3−4=1，係數 1 不寫，結果是 √3。"
        },
        {
          "stem": "已知 √50 = a√2，則 a 的值為？",
          "options": [
            "5",
            "25",
            "10",
            "√2"
          ],
          "answer": 0,
          "explanation": "√50 = √(25×2) = 5√2，故 a = 5。",
          "trap": "提出的是 √25=5（取根號），不是 25 本身。"
        },
        {
          "stem": "估計 √70 落在哪兩個連續整數之間？",
          "options": [
            "8 與 9",
            "7 與 8",
            "9 與 10",
            "35 與 36"
          ],
          "answer": 0,
          "explanation": "8²=64、9²=81，64 < 70 < 81，故 8 < √70 < 9。",
          "trap": "比較的是「平方」而非把 70 折半；70 在 64 與 81 之間故為 8~9。"
        },
        {
          "stem": "化簡 3√8 − √50 + √2。",
          "options": [
            "2√2",
            "6√2",
            "√2",
            "0"
          ],
          "answer": 0,
          "explanation": "3√8=3×2√2=6√2；√50=5√2。6√2 − 5√2 + √2 = (6−5+1)√2 = 2√2。",
          "trap": "⚠ 先各自化成 √2 的倍數再合併；係數 6−5+1=2，別漏掉最後的 +√2。"
        }
      ]
    },
    {
      "id": "algebra",
      "name": "代數（式與一元一次方程式）",
      "week": "七上 11月",
      "notes": [
        {
          "h": "代數式與化簡",
          "points": [
            "同類項才能合併。",
            "分配律：a(b+c) = ab+ac，去括號注意符號。"
          ],
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><rect x=\"40\" y=\"50\" width=\"60\" height=\"80\" fill=\"#c9755c\" opacity=\"0.45\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><rect x=\"100\" y=\"50\" width=\"100\" height=\"80\" fill=\"#7fae9e\" opacity=\"0.45\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><text x=\"58\" y=\"95\" fill=\"#2b2b2b\" font-size=\"14\">a·b</text><text x=\"132\" y=\"95\" fill=\"#2b2b2b\" font-size=\"14\">a·c</text><line x1=\"40\" y1=\"142\" x2=\"100\" y2=\"142\" stroke=\"#333\" stroke-width=\"1\"/><line x1=\"100\" y1=\"142\" x2=\"200\" y2=\"142\" stroke=\"#333\" stroke-width=\"1\"/><text x=\"62\" y=\"158\" fill=\"#333\" font-size=\"12\">b</text><text x=\"142\" y=\"158\" fill=\"#333\" font-size=\"12\">c</text><line x1=\"28\" y1=\"50\" x2=\"28\" y2=\"130\" stroke=\"#333\" stroke-width=\"1\"/><text x=\"14\" y=\"95\" fill=\"#333\" font-size=\"12\">a</text><text x=\"40\" y=\"32\" fill=\"#333\" font-size=\"13\">a(b+c) = a·b + a·c</text></svg>",
          "caption": "分配律的面積模型",
          "trap": "−(x−3) = −x+3，括號前是負號時每一項都要變號。"
        },
        {
          "h": "一元一次方程式",
          "points": [
            "移項要變號；含括號先展開。",
            "讓未知數係數變 1。"
          ],
          "trap": "2x+3=11 要先「兩邊減 3」再「除以 2」，不可先除。",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"360\" height=\"175\" fill=\"#f3e7df\"/><text x=\"30\" y=\"46\" font-family=\"sans-serif\" font-size=\"15\" fill=\"#3a342e\">2x + 3 = 11</text><path d=\"M70 56 q40 22 80 0\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><polygon points=\"150,56 142,52 146,62\" fill=\"#c9755c\"/><text x=\"30\" y=\"92\" font-family=\"sans-serif\" font-size=\"15\" fill=\"#3a342e\">2x = 11 − 3 = 8</text><text x=\"210\" y=\"92\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">① 移項 +3 變 −3</text><text x=\"30\" y=\"130\" font-family=\"sans-serif\" font-size=\"15\" fill=\"#3a342e\">x = 8 ÷ 2 = 4</text><text x=\"210\" y=\"130\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">② 兩邊同除 2</text><line x1=\"30\" y1=\"142\" x2=\"330\" y2=\"142\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"30\" y=\"165\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#f0a52e\">⚠ 先減常數再除係數，不可先除</text></svg>",
          "caption": "一元一次方程式:先移項再讓係數變 1"
        }
      ],
      "quiz": [
        {
          "stem": "解方程式 2(x − 1) − 3(2x − 5) = 5，x = ?",
          "options": [
            "2",
            "−2",
            "3",
            "13/4"
          ],
          "answer": 0,
          "explanation": "展開：2x−2 −6x+15 = 5 → −4x+13 = 5 → −4x = −8 → x = 2。",
          "trap": "−3×(2x−5) 每項都要乘且變號 = −6x+15，最常漏乘 −5 或符號弄錯。"
        },
        {
          "stem": "連續三個整數的和為 72，則最大的數為？",
          "options": [
            "25",
            "24",
            "23",
            "26"
          ],
          "answer": 0,
          "explanation": "設中間數 x，三數為 x−1、x、x+1，和 = 3x = 72 → x=24。最大的是 x+1 = 25。",
          "trap": "問的是「最大」的數(25)，不是中間數(24)；別把 24 直接當答案。"
        },
        {
          "stem": "某數的一半再加 6 等於該數減 3，求此數。",
          "options": [
            "18",
            "6",
            "9",
            "−18"
          ],
          "answer": 0,
          "explanation": "設此數 x：x/2 + 6 = x − 3 → 兩邊乘 2：x + 12 = 2x − 6 → x = 18。",
          "trap": "去分母時 −3 也要乘 2 變 −6，整式每一項都要乘，別只乘 x/2。"
        },
        {
          "stem": "解方程式 (x − 2)/3 − (x − 1)/2 = 1，x = ?",
          "options": [
            "−7",
            "7",
            "−1",
            "5"
          ],
          "answer": 0,
          "explanation": "兩邊乘 6：2(x−2) − 3(x−1) = 6 → 2x−4 −3x+3 = 6 → −x−1 = 6 → x = −7。",
          "trap": "⚠ 去分母時右邊的 1 也要乘 6 變 6；且 −3(x−1) 每項變號為 −3x+3，別漏乘。"
        }
      ]
    },
    {
      "id": "linear2",
      "name": "二元一次方程式與聯立",
      "week": "八上 9月",
      "notes": [
        {
          "h": "聯立解法",
          "points": [
            "代入消去法 或 加減消去法。",
            "兩式相加（減）消去一個未知數。"
          ],
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><line x1=\"30\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"160\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"40\" x2=\"280\" y2=\"150\" stroke=\"#c9755c\" stroke-width=\"2\"/><line x1=\"40\" y1=\"150\" x2=\"260\" y2=\"30\" stroke=\"#7fae9e\" stroke-width=\"2\"/><circle cx=\"158\" cy=\"98\" r=\"5\" fill=\"#2b2b2b\"/><text x=\"166\" y=\"94\" fill=\"#333\" font-size=\"12\">交點 (解)</text><text x=\"248\" y=\"146\" fill=\"#c9755c\" font-size=\"12\">式①</text><text x=\"244\" y=\"40\" fill=\"#7fae9e\" font-size=\"12\">式②</text><text x=\"60\" y=\"178\" fill=\"#333\" font-size=\"12\">兩直線交點即聯立的唯一解</text></svg>",
          "caption": "兩直線交點即為解",
          "trap": "消去後先算出一個未知數，記得回代求另一個，別只寫一半。"
        }
      ],
      "quiz": [
        {
          "stem": "聯立 x + 2y = 11、3x − y = 12，求 xy 之值。",
          "options": [
            "15",
            "8",
            "2",
            "35"
          ],
          "answer": 0,
          "explanation": "由第二式 y = 3x−12 代入第一式：x + 2(3x−12) = 11 → 7x = 35 → x=5，y=3。xy = 15。",
          "trap": "題目問 xy(=15)，不是 x+y(=8) 或 x−y(=2)，先看清楚問什麼。"
        },
        {
          "stem": "甲、乙兩數和為 50，甲的 2 倍比乙多 10，求甲。",
          "options": [
            "20",
            "30",
            "25",
            "15"
          ],
          "answer": 0,
          "explanation": "甲+乙=50、2甲−乙=10。兩式相加：3甲=60 → 甲=20，乙=30。",
          "trap": "「甲的2倍比乙多10」是 2甲=乙+10，別寫成 2甲=乙−10。"
        },
        {
          "stem": "票價：成人 100 元、兒童 60 元。共 8 人付 600 元，問成人幾位？",
          "options": [
            "3 位",
            "5 位",
            "4 位",
            "2 位"
          ],
          "answer": 0,
          "explanation": "設成人 a 人：100a + 60(8−a) = 600 → 40a + 480 = 600 → 40a=120 → a=3。",
          "trap": "兒童人數是 (8−a)，列式時別漏掉總人數限制；解得成人 3 位。"
        },
        {
          "stem": "聯立 2x + 3y = 12、3x − 2y = 5，求 x² + y² 之值。",
          "options": [
            "13",
            "25",
            "5",
            "1"
          ],
          "answer": 0,
          "explanation": "解得 x=3、y=2（如：上式×2、下式×3 相加得 13x=39）。x²+y² = 9+4 = 13。",
          "trap": "⚠ 題目問 x²+y²(=13)，不是 x+y(=5) 或 (x+y)²；先求出 x、y 再各自平方。"
        }
      ]
    },
    {
      "id": "inequality",
      "name": "一元一次不等式",
      "week": "八上 10月",
      "notes": [
        {
          "h": "不等式性質",
          "points": [
            "兩邊同加減同數，不等號方向不變。",
            "兩邊同乘除「負數」時，不等號要反向！"
          ],
          "formula": "a > b，c < 0 ⟹ ac < bc",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><line x1=\"20\" y1=\"100\" x2=\"300\" y2=\"100\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><polygon points=\"300,100 292,96 292,104\" fill=\"#2b2b2b\"/><circle cx=\"120\" cy=\"100\" r=\"6\" fill=\"#fff\" stroke=\"#c9755c\" stroke-width=\"2\"/><line x1=\"20\" y1=\"100\" x2=\"120\" y2=\"100\" stroke=\"#7fae9e\" stroke-width=\"5\"/><text x=\"106\" y=\"124\" fill=\"#333\" font-size=\"12\">−4</text><text x=\"40\" y=\"80\" fill=\"#7fae9e\" font-size=\"13\">x ≤ −4 (塗色區)</text><text x=\"170\" y=\"124\" fill=\"#333\" font-size=\"12\">0</text><line x1=\"178\" y1=\"92\" x2=\"178\" y2=\"108\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><text x=\"40\" y=\"156\" fill=\"#333\" font-size=\"12\">空心圈表不含端點，實心表含</text></svg>",
          "caption": "不等式解集合數線",
          "trap": "除以負數忘了變號是最常見錯誤，例如 −2x>6 → x<−3（非 x>−3）。"
        }
      ],
      "quiz": [
        {
          "stem": "解不等式 3 − 2x ≥ 11，求 x 的範圍。",
          "options": [
            "x ≤ −4",
            "x ≥ −4",
            "x ≤ 4",
            "x ≥ −7"
          ],
          "answer": 0,
          "explanation": "3−2x≥11 → −2x≥8 → 兩邊除以 −2 並變號 → x ≤ −4。",
          "trap": "除以負數 −2 時不等號要由 ≥ 變成 ≤。"
        },
        {
          "stem": "某數的 4 倍加 5 不超過 25，此數最大為多少（整數）？",
          "options": [
            "5",
            "6",
            "4",
            "7"
          ],
          "answer": 0,
          "explanation": "4x+5 ≤ 25 → 4x ≤ 20 → x ≤ 5，最大整數為 5。",
          "trap": "「不超過」是 ≤（含等於），故 x=5 可取；不是 <25 算成 4。"
        },
        {
          "stem": "蘋果一個 15 元，帶 100 元最多可買幾個並要找零至少 10 元？",
          "options": [
            "6 個",
            "7 個",
            "5 個",
            "8 個"
          ],
          "answer": 0,
          "explanation": "15n ≤ 90（要留 ≥10 元）→ n ≤ 6。最多 6 個（花 90，找 10）。",
          "trap": "找零至少 10 元代表花費 ≤90，不是 ≤100；6 個剛好找 10 元。"
        },
        {
          "stem": "解不等式 (2x − 1)/3 < (x + 2)/2，求 x 的範圍。",
          "options": [
            "x < 8",
            "x > 8",
            "x < −8",
            "x > −8"
          ],
          "answer": 0,
          "explanation": "兩邊乘 6：2(2x−1) < 3(x+2) → 4x−2 < 3x+6 → x < 8。",
          "trap": "⚠ 同乘正數 6 不等號方向不變；移項後 4x−3x、−2 移右邊得 x<8，別把方向反過來。"
        }
      ]
    },
    {
      "id": "polynomial",
      "name": "乘法公式與多項式",
      "week": "八上 11月",
      "notes": [
        {
          "h": "乘法公式",
          "points": [
            "(a+b)² = a²+2ab+b²；(a−b)² = a²−2ab+b²。",
            "平方差：(a+b)(a−b) = a²−b²。"
          ],
          "formula": "(a+b)(a−b) = a²−b²",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><rect x=\"60\" y=\"30\" width=\"90\" height=\"90\" fill=\"#c9755c\" opacity=\"0.45\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"30\" width=\"40\" height=\"90\" fill=\"#7fae9e\" opacity=\"0.45\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><rect x=\"60\" y=\"120\" width=\"90\" height=\"40\" fill=\"#7fae9e\" opacity=\"0.45\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><rect x=\"150\" y=\"120\" width=\"40\" height=\"40\" fill=\"#2b2b2b\" opacity=\"0.30\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><text x=\"92\" y=\"80\" fill=\"#2b2b2b\" font-size=\"14\">a²</text><text x=\"160\" y=\"80\" fill=\"#2b2b2b\" font-size=\"14\">ab</text><text x=\"92\" y=\"145\" fill=\"#2b2b2b\" font-size=\"14\">ab</text><text x=\"160\" y=\"145\" fill=\"#2b2b2b\" font-size=\"14\">b²</text><text x=\"95\" y=\"22\" fill=\"#333\" font-size=\"12\">a</text><text x=\"165\" y=\"22\" fill=\"#333\" font-size=\"12\">b</text><text x=\"200\" y=\"95\" fill=\"#333\" font-size=\"13\">(a+b)²=a²+2ab+b²</text></svg>",
          "caption": "完全平方面積拼圖",
          "trap": "(a+b)² ≠ a²+b²，中間的 2ab 不能漏。"
        }
      ],
      "quiz": [
        {
          "stem": "利用乘法公式計算 102 × 98。",
          "options": [
            "9996",
            "9999",
            "10000",
            "9986"
          ],
          "answer": 0,
          "explanation": "102×98 = (100+2)(100−2) = 100²−2² = 10000−4 = 9996。",
          "trap": "套平方差，不是 100²=10000 直接當答案；要減 2²=4。"
        },
        {
          "stem": "已知 a+b = 7、ab = 10，求 a²+b² 之值。",
          "options": [
            "29",
            "49",
            "39",
            "19"
          ],
          "answer": 0,
          "explanation": "a²+b² = (a+b)² − 2ab = 49 − 20 = 29。",
          "trap": "(a+b)²=49 已含 2ab，要再「減」2ab=20，不是加。"
        },
        {
          "stem": "展開並化簡 (2x − 3)² − (2x + 3)(2x − 3)。",
          "options": [
            "−12x + 18",
            "−12x",
            "18",
            "−24x"
          ],
          "answer": 0,
          "explanation": "(2x−3)² = 4x²−12x+9；(2x+3)(2x−3)=4x²−9。相減：(4x²−12x+9)−(4x²−9) = −12x+18。",
          "trap": "減去整個括號，4x²−9 的 −9 變 +9，別只變 4x² 的符號。"
        },
        {
          "stem": "已知 a − b = 3、ab = 4，求 a² + b² 之值。",
          "options": [
            "17",
            "13",
            "1",
            "9"
          ],
          "answer": 0,
          "explanation": "a²+b² = (a−b)² + 2ab = 3² + 2×4 = 9 + 8 = 17。",
          "trap": "⚠ 用的是 (a−b)²=a²−2ab+b²，所以 a²+b²=(a−b)²+2ab（加 2ab）；別與 (a+b)² 的減號搞混。"
        }
      ]
    },
    {
      "id": "factor",
      "name": "因式分解",
      "week": "八上 12月",
      "notes": [
        {
          "h": "因式分解方法",
          "points": [
            "先提公因數。",
            "平方差 a²−b²=(a+b)(a−b)；完全平方 a²±2ab+b²=(a±b)²。",
            "十字交乘：x²+(p+q)x+pq = (x+p)(x+q)。"
          ],
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><rect x=\"50\" y=\"40\" width=\"80\" height=\"80\" fill=\"#c9755c\" opacity=\"0.45\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><rect x=\"130\" y=\"40\" width=\"40\" height=\"80\" fill=\"#7fae9e\" opacity=\"0.45\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"120\" width=\"80\" height=\"40\" fill=\"#7fae9e\" opacity=\"0.45\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><text x=\"78\" y=\"86\" fill=\"#2b2b2b\" font-size=\"14\">x²</text><text x=\"140\" y=\"86\" fill=\"#2b2b2b\" font-size=\"14\">2x</text><text x=\"78\" y=\"145\" fill=\"#2b2b2b\" font-size=\"14\">3x</text><text x=\"80\" y=\"32\" fill=\"#333\" font-size=\"12\">x</text><text x=\"145\" y=\"32\" fill=\"#333\" font-size=\"12\">2</text><text x=\"190\" y=\"80\" fill=\"#333\" font-size=\"13\">x²+5x+6</text><text x=\"190\" y=\"105\" fill=\"#2b2b2b\" font-size=\"13\">=(x+2)(x+3)</text><text x=\"50\" y=\"176\" fill=\"#333\" font-size=\"12\">把多項式拼成矩形面積</text></svg>",
          "caption": "因式分解面積模型",
          "trap": "x²−9 是平方差 (x+3)(x−3)，不是完全平方。"
        }
      ],
      "quiz": [
        {
          "stem": "將 2x² − 8x − 24 完全因式分解。",
          "options": [
            "2(x−6)(x+2)",
            "2(x−4)(x+3)",
            "(x−6)(x+4)",
            "2(x+6)(x−2)"
          ],
          "answer": 0,
          "explanation": "先提公因數 2：2(x²−4x−12) = 2(x−6)(x+2)。",
          "trap": "要先提出公因數 2；(x−6)(x+4) 漏了 2，係數整個差一倍。"
        },
        {
          "stem": "因式分解 x² − 5x − 14。",
          "options": [
            "(x−7)(x+2)",
            "(x+7)(x−2)",
            "(x−7)(x−2)",
            "(x−14)(x+1)"
          ],
          "answer": 0,
          "explanation": "找兩數乘積 −14、和 −5：−7 與 +2。故 (x−7)(x+2)。",
          "trap": "和為 −5、積為 −14，是 −7 與 +2；(x+7)(x−2) 的和會是 +5。"
        },
        {
          "stem": "因式分解 4x² − 12x + 9。",
          "options": [
            "(2x−3)²",
            "(2x+3)²",
            "(4x−3)(x−3)",
            "(2x−3)(2x+3)"
          ],
          "answer": 0,
          "explanation": "4x²=(2x)²、9=3²、中間 −12x = −2·(2x)·3，符合完全平方 (2x−3)²。",
          "trap": "是完全平方非平方差；(2x−3)(2x+3) 展開無一次項，不對。"
        },
        {
          "stem": "因式分解 x² − y² − 2y − 1。",
          "options": [
            "(x+y+1)(x−y−1)",
            "(x+y−1)(x−y+1)",
            "(x−y−1)²",
            "(x+y+1)(x+y−1)"
          ],
          "answer": 0,
          "explanation": "後三項 y²+2y+1=(y+1)²，原式 = x² − (y+1)² = (x+(y+1))(x−(y+1)) = (x+y+1)(x−y−1)。",
          "trap": "⚠ 先把 −y²−2y−1 整組視為 −(y+1)²，再套平方差；注意 x−(y+1) 展開為 x−y−1，符號別漏。"
        }
      ]
    },
    {
      "id": "quadeq",
      "name": "一元二次方程式",
      "week": "九上 9月",
      "notes": [
        {
          "h": "解法",
          "points": [
            "因式分解法：化成 (x−p)(x−q)=0。",
            "公式解：x = [−b ± √(b²−4ac)] / (2a)。",
            "判別式 b²−4ac > 0 兩相異根、=0 重根、<0 無實根。"
          ],
          "formula": "x = (−b ± √(b²−4ac)) / 2a",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><line x1=\"20\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"160\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><path d=\"M70 40 Q160 200 250 40\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><circle cx=\"110\" cy=\"120\" r=\"5\" fill=\"#7fae9e\"/><circle cx=\"210\" cy=\"120\" r=\"5\" fill=\"#7fae9e\"/><text x=\"96\" y=\"142\" fill=\"#333\" font-size=\"12\">根 p</text><text x=\"196\" y=\"142\" fill=\"#333\" font-size=\"12\">根 q</text><text x=\"60\" y=\"172\" fill=\"#333\" font-size=\"12\">拋物線與 x 軸交點即方程式的根</text></svg>",
          "caption": "拋物線與 x 軸交點",
          "trap": "用公式解前要先整理成 ax²+bx+c=0；b、c 含負號要連同符號代入。"
        }
      ],
      "quiz": [
        {
          "stem": "解方程式 x² − 5x + 6 = 0。",
          "options": [
            "x = 2 或 3",
            "x = −2 或 −3",
            "x = 1 或 6",
            "x = −1 或 −6"
          ],
          "answer": 0,
          "explanation": "(x−2)(x−3)=0 → x=2 或 x=3。",
          "trap": "積為 +6、和為 +5 是 2 與 3（皆正）；別寫成 −2、−3。"
        },
        {
          "stem": "用公式解 2x² + 3x − 2 = 0，較大的根為？",
          "options": [
            "1/2",
            "2",
            "−2",
            "−1/2"
          ],
          "answer": 0,
          "explanation": "a=2,b=3,c=−2。判別式 = 9+16 = 25，√25=5。x = (−3±5)/4 → x=1/2 或 x=−2。較大為 1/2。",
          "trap": "c=−2 代入時 −4ac = −4·2·(−2) = +16，符號別弄錯；問「較大」根是 1/2。"
        },
        {
          "stem": "一矩形長比寬多 3，面積為 40，求寬。",
          "options": [
            "5",
            "8",
            "4",
            "10"
          ],
          "answer": 0,
          "explanation": "設寬 x，長 x+3：x(x+3)=40 → x²+3x−40=0 → (x+8)(x−5)=0 → x=5（取正）。",
          "trap": "x=−8 不合（長度為正），要捨去負根，答案取寬=5。"
        },
        {
          "stem": "用公式解 x² − 2x − 4 = 0，兩根為？",
          "options": [
            "1 ± √5",
            "2 ± √5",
            "−1 ± √5",
            "1 ± 2√5"
          ],
          "answer": 0,
          "explanation": "a=1,b=−2,c=−4。判別式 = 4+16 = 20，√20=2√5。x = (2 ± 2√5)/2 = 1 ± √5。",
          "trap": "⚠ 分子分母同除 2 要把 2√5 也約成 √5；別寫成 2±√5（忘了約分子的 2）。"
        }
      ]
    },
    {
      "id": "ratio",
      "name": "比與比例",
      "week": "七下 3月",
      "notes": [
        {
          "h": "比例式",
          "points": [
            "a:b = c:d ⟺ ad = bc（外項積=內項積）。",
            "連比與比例分配。"
          ],
          "formula": "a:b = c:d ⟹ ad = bc",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><text x=\"70\" y=\"80\" fill=\"#2b2b2b\" font-size=\"22\">a</text><line x1=\"60\" y1=\"92\" x2=\"100\" y2=\"92\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><text x=\"70\" y=\"120\" fill=\"#2b2b2b\" font-size=\"22\">b</text><text x=\"120\" y=\"100\" fill=\"#333\" font-size=\"22\">=</text><text x=\"160\" y=\"80\" fill=\"#2b2b2b\" font-size=\"22\">c</text><line x1=\"150\" y1=\"92\" x2=\"190\" y2=\"92\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><text x=\"160\" y=\"120\" fill=\"#2b2b2b\" font-size=\"22\">d</text><line x1=\"80\" y1=\"78\" x2=\"172\" y2=\"118\" stroke=\"#c9755c\" stroke-width=\"2\"/><line x1=\"80\" y1=\"118\" x2=\"172\" y2=\"78\" stroke=\"#7fae9e\" stroke-width=\"2\"/><text x=\"210\" y=\"85\" fill=\"#c9755c\" font-size=\"13\">a×d</text><text x=\"210\" y=\"118\" fill=\"#7fae9e\" font-size=\"13\">b×c</text><text x=\"50\" y=\"160\" fill=\"#333\" font-size=\"12\">交叉相乘：a×d = b×c</text></svg>",
          "caption": "比例式的交叉相乘",
          "trap": "交叉相乘是「外項×外項 = 內項×內項」，別把同一邊相乘。"
        }
      ],
      "quiz": [
        {
          "stem": "已知 3:5 = x:20，求 x。",
          "options": [
            "12",
            "33.3",
            "100/3",
            "4"
          ],
          "answer": 0,
          "explanation": "交叉相乘：5x = 3×20 = 60 → x = 12。",
          "trap": "5x=60 不是 3x=100；對應位置要擺對。"
        },
        {
          "stem": "甲乙兩人錢數比為 5:3，共 320 元，甲比乙多幾元？",
          "options": [
            "80",
            "120",
            "200",
            "40"
          ],
          "answer": 0,
          "explanation": "每份 = 320÷(5+3) = 40。甲=200、乙=120，差 = 200−120 = 80（即 2 份）。",
          "trap": "問「多幾元」是差(80)，不是甲(200)；差正好是 (5−3)=2 份。"
        },
        {
          "stem": "地圖比例尺 1:50000，圖上 4 公分代表實際多少公里？",
          "options": [
            "2 公里",
            "200 公里",
            "20 公里",
            "0.2 公里"
          ],
          "answer": 0,
          "explanation": "實際 = 4×50000 = 200000 公分 = 2000 公尺 = 2 公里。",
          "trap": "公分換公里要除以 100000；200000 公分=2 公里，不是 200 或 20。"
        },
        {
          "stem": "已知 a:b = 2:3、b:c = 4:5，求連比 a:b:c。",
          "options": [
            "8:12:15",
            "2:3:5",
            "2:12:5",
            "8:12:20"
          ],
          "answer": 0,
          "explanation": "使 b 一致：b 由 3 與 4 取最小公倍數 12。a:b = 2:3 = 8:12；b:c = 4:5 = 12:15。故 a:b:c = 8:12:15。",
          "trap": "⚠ 要先讓兩式的 b 相等（湊成 12）才能串連；不能直接寫 2:3:5 或 2:4:5。"
        }
      ]
    },
    {
      "id": "linfunc",
      "name": "一次函數與圖形",
      "week": "八下 3月",
      "notes": [
        {
          "h": "一次函數 y = ax + b",
          "points": [
            "a 是斜率（每 x 增 1，y 變化 a）。",
            "b 是 y 截距（x=0 時的 y 值）。"
          ],
          "formula": "斜率 a = (y₂−y₁)/(x₂−x₁)",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><line x1=\"30\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><polygon points=\"300,150 292,146 292,154\" fill=\"#2b2b2b\"/><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"165\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><polygon points=\"60,20 56,28 64,28\" fill=\"#2b2b2b\"/><line x1=\"60\" y1=\"120\" x2=\"260\" y2=\"40\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><circle cx=\"60\" cy=\"120\" r=\"4\" fill=\"#7fae9e\"/><text x=\"20\" y=\"124\" fill=\"#333\" font-size=\"12\">b</text><line x1=\"140\" y1=\"88\" x2=\"200\" y2=\"88\" stroke=\"#7fae9e\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><line x1=\"200\" y1=\"88\" x2=\"200\" y2=\"64\" stroke=\"#7fae9e\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><text x=\"160\" y=\"104\" fill=\"#333\" font-size=\"11\">Δx</text><text x=\"206\" y=\"80\" fill=\"#333\" font-size=\"11\">Δy</text><text x=\"150\" y=\"172\" fill=\"#333\" font-size=\"12\">斜率 a = Δy/Δx</text></svg>",
          "caption": "直線斜率與 y 截距",
          "trap": "斜率是 x 的係數 a，不是常數 b。"
        }
      ],
      "quiz": [
        {
          "stem": "一次函數圖形通過 (1, 5) 與 (3, 11)，若其式為 y = ax + b，求 a + b。",
          "options": [
            "5",
            "3",
            "8",
            "2"
          ],
          "answer": 0,
          "explanation": "a = (11−5)/(3−1) = 3；代 (1,5)：5 = 3+b → b = 2。a+b = 5。",
          "trap": "題目問 a+b(=5)，不是只求斜率 a(3) 或截距 b(2)。"
        },
        {
          "stem": "直線 y = −2x + 6 與兩坐標軸圍成的三角形面積為？",
          "options": [
            "9",
            "18",
            "6",
            "12"
          ],
          "answer": 0,
          "explanation": "x 截距：0=−2x+6 → x=3；y 截距 = 6。面積 = ½×3×6 = 9。",
          "trap": "底高分別是兩截距(3 與 6)，再乘 ½；別漏 ½ 算成 18。"
        },
        {
          "stem": "某計程車起跳 85 元（含 1.5 公里），之後每 0.3 公里加 5 元。坐 3 公里車資為？",
          "options": [
            "110 元",
            "105 元",
            "100 元",
            "115 元"
          ],
          "answer": 0,
          "explanation": "超出 3−1.5 = 1.5 公里，含 1.5÷0.3 = 5 段，加 5×5 = 25 元。85+25 = 110。",
          "trap": "起跳已含 1.5 公里，只算超出部分；超出 1.5 公里是 5 段不是 5 公里。"
        },
        {
          "stem": "一直線與 y = 2x − 1 平行且通過點 (3, 1)，則此直線的 x 截距為？",
          "options": [
            "5/2",
            "−5",
            "5",
            "1/2"
          ],
          "answer": 0,
          "explanation": "平行故斜率同為 2，設 y=2x+b，代 (3,1)：1=6+b → b=−5，即 y=2x−5。令 y=0：x=5/2。",
          "trap": "⚠ 平行只代表斜率相同（=2），截距仍要重算；x 截距是令 y=0 解得 5/2，不是 b=−5。"
        }
      ]
    },
    {
      "id": "function",
      "name": "二次函數與圖形",
      "week": "九上 11月",
      "notes": [
        {
          "h": "二次函數 y = ax²+bx+c",
          "points": [
            "a > 0 開口向上、有最小值；a < 0 開口向下、有最大值。",
            "頂點 x = −b/(2a)，代回得最大／最小值。"
          ],
          "formula": "頂點 x = −b/(2a)",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><line x1=\"30\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"165\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><path d=\"M70 40 Q160 200 250 40\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"160\" stroke=\"#7fae9e\" stroke-width=\"1.5\" stroke-dasharray=\"5\"/><circle cx=\"160\" cy=\"138\" r=\"5\" fill=\"#2b2b2b\"/><text x=\"168\" y=\"138\" fill=\"#333\" font-size=\"12\">頂點 (最小值)</text><text x=\"120\" y=\"40\" fill=\"#7fae9e\" font-size=\"12\">對稱軸</text><text x=\"60\" y=\"174\" fill=\"#333\" font-size=\"12\">a&gt;0 開口向上，頂點為最低點</text></svg>",
          "caption": "拋物線頂點對稱軸",
          "trap": "開口方向看 a 的正負，不是看 b 或 c。"
        }
      ],
      "quiz": [
        {
          "stem": "二次函數 y = x² − 4x + 1 的最小值為？",
          "options": [
            "−3",
            "1",
            "−1",
            "3"
          ],
          "answer": 0,
          "explanation": "頂點 x = −(−4)/(2×1) = 2，代回：y = 4−8+1 = −3。",
          "trap": "最小值要把頂點 x=2 代回求 y，不是直接看常數項 1。"
        },
        {
          "stem": "二次函數 y = −2(x−1)² + 8，其最大值與對稱軸分別為？",
          "options": [
            "最大值 8，對稱軸 x=1",
            "最大值 1，對稱軸 x=8",
            "最小值 8，對稱軸 x=1",
            "最大值 −2，對稱軸 x=1"
          ],
          "answer": 0,
          "explanation": "頂點式 y=a(x−h)²+k，頂點 (1,8)；a=−2<0 開口向下，故最大值 8，對稱軸 x=1。",
          "trap": "頂點式中 h=1（x−1，非 −1）；a<0 是最大值不是最小值。"
        },
        {
          "stem": "拋物線 y = x² − 6x + 8 與 x 軸的兩交點距離為？",
          "options": [
            "2",
            "8",
            "4",
            "6"
          ],
          "answer": 0,
          "explanation": "令 y=0：x²−6x+8=0 → (x−2)(x−4)=0 → x=2,4。兩交點距離 = 4−2 = 2。",
          "trap": "問的是兩根「距離」(=2)，不是兩根和(6)或積(8)。"
        },
        {
          "stem": "二次函數 y = x² + 2x − 3 的最小值為？",
          "options": [
            "−4",
            "−3",
            "1",
            "−1"
          ],
          "answer": 0,
          "explanation": "頂點 x = −2/(2×1) = −1，代回 y = 1 − 2 − 3 = −4。a=1>0 開口向上故為最小值。",
          "trap": "⚠ 最小值要把頂點 x=−1 代回求 y(=−4)，不是看常數項 −3，也不是頂點的 x 坐標。"
        }
      ]
    },
    {
      "id": "geometry",
      "name": "幾何（線、角與三角形）",
      "week": "七下 4月",
      "notes": [
        {
          "h": "角與平行線",
          "points": [
            "兩平行線被截，同位角相等、內錯角相等、同側內角互補。",
            "三角形內角和 = 180°。"
          ],
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><line x1=\"30\" y1=\"60\" x2=\"290\" y2=\"60\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><line x1=\"30\" y1=\"120\" x2=\"290\" y2=\"120\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><line x1=\"80\" y1=\"30\" x2=\"240\" y2=\"160\" stroke=\"#c9755c\" stroke-width=\"2\"/><path d=\"M120 60 A18 18 0 0 1 138 73\" fill=\"none\" stroke=\"#7fae9e\" stroke-width=\"2\"/><path d=\"M150 120 A18 18 0 0 1 168 133\" fill=\"none\" stroke=\"#7fae9e\" stroke-width=\"2\"/><text x=\"140\" y=\"58\" fill=\"#333\" font-size=\"12\">a</text><text x=\"170\" y=\"118\" fill=\"#333\" font-size=\"12\">a</text><text x=\"40\" y=\"52\" fill=\"#333\" font-size=\"12\">L1</text><text x=\"40\" y=\"138\" fill=\"#333\" font-size=\"12\">L2 ∥ L1</text><text x=\"60\" y=\"176\" fill=\"#333\" font-size=\"12\">同位角相等 (兩 a 角)</text></svg>",
          "caption": "平行線同位角相等",
          "trap": "同側內角是「互補(和180°)」不是相等，別與內錯角混淆。"
        },
        {
          "h": "三角形性質",
          "points": [
            "任兩邊和 > 第三邊。",
            "外角 = 不相鄰兩內角和。"
          ],
          "trap": "外角 = 不相鄰兩內角和，不是 180° 減一個角亂套。",
          "svg": "<svg viewBox=\"0 0 360 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"360\" height=\"180\" fill=\"#eef4f2\"/><polygon points=\"60,140 240,140 110,50\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"240\" y1=\"140\" x2=\"320\" y2=\"140\" stroke=\"#c9755c\" stroke-width=\"2\" stroke-dasharray=\"5\"/><text x=\"96\" y=\"72\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">A</text><text x=\"62\" y=\"136\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">B</text><text x=\"224\" y=\"136\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">C</text><path d=\"M240 124 a16 16 0 0 1 14 12\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"256\" y=\"130\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">外角</text><text x=\"40\" y=\"24\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">外角 = 不相鄰兩內角和（∠A+∠B）</text><text x=\"40\" y=\"170\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">三內角和 = 180°；任兩邊和 &gt; 第三邊</text></svg>",
          "caption": "三角形外角等於不相鄰兩內角之和"
        }
      ],
      "quiz": [
        {
          "stem": "三角形三內角比為 2:3:4，最大角為幾度？",
          "options": [
            "80°",
            "90°",
            "60°",
            "40°"
          ],
          "answer": 0,
          "explanation": "每份 = 180÷(2+3+4) = 20°。最大角 = 4 份 = 80°。",
          "trap": "先用內角和 180° 除以總份數 9；最大是 4 份(80°)，別取 2 份。"
        },
        {
          "stem": "一正多邊形每個內角為 150°，求邊數。",
          "options": [
            "12",
            "10",
            "8",
            "15"
          ],
          "answer": 0,
          "explanation": "外角 = 180−150 = 30°，邊數 = 360÷30 = 12。",
          "trap": "用外角去除 360° 最快；別拿內角 150° 去除 360°。"
        },
        {
          "stem": "三角形兩邊長為 5 與 9，第三邊長為整數，共有幾種可能？",
          "options": [
            "9 種",
            "13 種",
            "4 種",
            "8 種"
          ],
          "answer": 0,
          "explanation": "第三邊 x 須滿足 9−5 < x < 9+5，即 4 < x < 14，整數 x = 5,6,…,13 共 9 種。",
          "trap": "嚴格不等(不含 4 與 14)；5 到 13 共 9 個整數，別把端點算進去。"
        },
        {
          "stem": "△ABC 中，∠A 的外角為 110°，∠B = 45°，則 ∠C 為幾度？",
          "options": [
            "65°",
            "70°",
            "45°",
            "110°"
          ],
          "answer": 0,
          "explanation": "外角 = 不相鄰兩內角和：∠A 的外角 = ∠B + ∠C → 110 = 45 + ∠C → ∠C = 65°。",
          "trap": "⚠ ∠A 的外角等於另外兩內角(B、C)之和，不是 B 與 A 之和；故 ∠C = 110−45 = 65°。"
        }
      ]
    },
    {
      "id": "congruent",
      "name": "全等與相似形",
      "week": "九上 10月",
      "notes": [
        {
          "h": "全等與相似",
          "points": [
            "全等判定：SSS、SAS、ASA、AAS、RHS。",
            "相似：對應角相等、對應邊成比例。"
          ],
          "formula": "相似邊長比 k ⟹ 面積比 k²、體積比 k³",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><polygon points=\"40,140 100,140 40,100\" fill=\"#c9755c\" opacity=\"0.45\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><polygon points=\"160,150 280,150 160,70\" fill=\"#7fae9e\" opacity=\"0.45\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><text x=\"55\" y=\"158\" fill=\"#333\" font-size=\"12\">3</text><text x=\"20\" y=\"124\" fill=\"#333\" font-size=\"12\">4</text><text x=\"210\" y=\"168\" fill=\"#333\" font-size=\"12\">6</text><text x=\"142\" y=\"114\" fill=\"#333\" font-size=\"12\">8</text><text x=\"40\" y=\"40\" fill=\"#333\" font-size=\"13\">小 △ 與大 △ 相似，邊比 1:2</text><text x=\"40\" y=\"58\" fill=\"#2b2b2b\" font-size=\"12\">面積比 1:4 (邊比平方)</text></svg>",
          "caption": "相似三角形的邊比",
          "trap": "面積比是邊長比的平方，不要直接用邊長比當面積比。"
        }
      ],
      "quiz": [
        {
          "stem": "兩相似三角形面積比為 9:16，較小者周長 15，較大者周長為？",
          "options": [
            "20",
            "26.7",
            "11.25",
            "30"
          ],
          "answer": 0,
          "explanation": "面積比 9:16 → 邊長比(=周長比) = √9:√16 = 3:4。15×(4/3) = 20。",
          "trap": "周長比要先把面積比開根號(3:4)；直接用 9:16 算會錯。"
        },
        {
          "stem": "△ABC 中 DE∥BC，AD:DB = 2:3，若 DE = 8，則 BC 長為？",
          "options": [
            "20",
            "12",
            "5.33",
            "16"
          ],
          "answer": 0,
          "explanation": "AD:AB = 2:5，△ADE∼△ABC，DE:BC = 2:5。8:BC = 2:5 → BC = 20。",
          "trap": "對應比是 AD:AB = 2:5（非 AD:DB = 2:3）；分母要用整條 AB。"
        },
        {
          "stem": "兩相似立體模型邊長比 2:3，小者體積 16，大者體積為？",
          "options": [
            "54",
            "24",
            "36",
            "48"
          ],
          "answer": 0,
          "explanation": "體積比 = 2³:3³ = 8:27。16×(27/8) = 54。",
          "trap": "體積比是邊長比的「立方」(8:27)，不是 2:3 或 4:9。"
        },
        {
          "stem": "同一時刻，一根 1.5 公尺的竿子影長 2 公尺，旁邊旗桿影長 12 公尺，求旗桿高。",
          "options": [
            "9 公尺",
            "16 公尺",
            "8 公尺",
            "18 公尺"
          ],
          "answer": 0,
          "explanation": "同時刻日影成相似比例：高/影 相等。旗桿高 = 1.5×(12/2) = 1.5×6 = 9 公尺。",
          "trap": "⚠ 對應的是「高:影長」的比相等(1.5:2)；旗桿高 = 1.5×12/2 = 9，別直接拿 12 當高。"
        }
      ]
    },
    {
      "id": "pythagoras",
      "name": "畢氏定理與應用",
      "week": "八下 4月",
      "notes": [
        {
          "h": "畢氏定理",
          "points": [
            "直角三角形：兩股平方和 = 斜邊平方。",
            "常見組：3-4-5、5-12-13、8-15-17。"
          ],
          "formula": "c² = a² + b²（c 為斜邊）",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><polygon points=\"120,140 220,140 120,70\" fill=\"#7fae9e\" opacity=\"0.40\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><rect x=\"120\" y=\"128\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><text x=\"160\" y=\"158\" fill=\"#333\" font-size=\"12\">a (股)</text><text x=\"92\" y=\"108\" fill=\"#333\" font-size=\"12\">b (股)</text><text x=\"178\" y=\"100\" fill=\"#c9755c\" font-size=\"13\">c (斜邊)</text><line x1=\"120\" y1=\"70\" x2=\"220\" y2=\"140\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><text x=\"60\" y=\"36\" fill=\"#2b2b2b\" font-size=\"14\">c² = a² + b²</text><text x=\"60\" y=\"172\" fill=\"#333\" font-size=\"12\">直角對邊為斜邊，最長</text></svg>",
          "caption": "直角三角形股與斜邊",
          "trap": "算完 c² 記得開根號才是邊長；斜邊一定是最長邊。"
        }
      ],
      "quiz": [
        {
          "stem": "直角三角形兩股長為 6 與 8，求斜邊上的高。",
          "options": [
            "4.8",
            "5",
            "9.6",
            "7"
          ],
          "answer": 0,
          "explanation": "斜邊 = √(6²+8²) = 10。面積 = ½×6×8 = 24 = ½×10×h，故 h = 48÷10 = 4.8。",
          "trap": "用面積兩種算法相等求高；底要用斜邊 10，不是直接拿股長。"
        },
        {
          "stem": "一支 13 公尺梯子靠牆，底端離牆 5 公尺，梯頂離地多高？",
          "options": [
            "12 公尺",
            "13 公尺",
            "8 公尺",
            "√194 公尺"
          ],
          "answer": 0,
          "explanation": "梯子為斜邊：高 = √(13²−5²) = √(169−25) = √144 = 12。",
          "trap": "梯長 13 是斜邊，要用「減」(13²−5²)；不是 13²+5²。"
        },
        {
          "stem": "坐標平面上 A(1,2)、B(4,6) 兩點的距離為？",
          "options": [
            "5",
            "7",
            "25",
            "√7"
          ],
          "answer": 0,
          "explanation": "距離 = √((4−1)²+(6−2)²) = √(9+16) = √25 = 5。",
          "trap": "距離公式要把差平方(9+16)再開根號；別忘記最後開根號。"
        },
        {
          "stem": "一個邊長為 6 的正三角形，其高為？",
          "options": [
            "3√3",
            "6√3",
            "3√2",
            "√6"
          ],
          "answer": 0,
          "explanation": "高把底邊平分，形成直角三角形：斜邊 6、一股 3。高 = √(6²−3²) = √27 = 3√3。",
          "trap": "⚠ 正三角形的高用畢氏定理 √(6²−3²)，底要先取一半為 3；得 √27=3√3 不是 6√3。"
        }
      ]
    },
    {
      "id": "circle",
      "name": "圓與弧、扇形",
      "week": "九下 3月",
      "notes": [
        {
          "h": "圓的計算",
          "points": [
            "圓周長 = 2πr；面積 = πr²。",
            "弧長 = 2πr × (θ/360)；扇形面積 = πr² × (θ/360)。",
            "圓周角 = 同弧圓心角的一半。"
          ],
          "formula": "扇形面積 = πr²·(θ/360)",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><circle cx=\"150\" cy=\"95\" r=\"65\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><path d=\"M150 95 L215 95 A65 65 0 0 0 117.5 38.7 Z\" fill=\"#c9755c\" opacity=\"0.45\" stroke=\"#c9755c\" stroke-width=\"2\"/><circle cx=\"150\" cy=\"95\" r=\"3\" fill=\"#2b2b2b\"/><line x1=\"150\" y1=\"95\" x2=\"215\" y2=\"95\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><path d=\"M180 95 A30 30 0 0 0 169 66\" fill=\"none\" stroke=\"#7fae9e\" stroke-width=\"2\"/><text x=\"183\" y=\"84\" fill=\"#333\" font-size=\"12\">θ</text><text x=\"170\" y=\"115\" fill=\"#333\" font-size=\"12\">r</text><text x=\"40\" y=\"166\" fill=\"#333\" font-size=\"12\">扇形 = 整圓 × (θ/360)</text></svg>",
          "caption": "扇形圓心角與弧長",
          "trap": "弧長與面積都要乘上 (θ/360) 的比例，別用整圓。"
        }
      ],
      "quiz": [
        {
          "stem": "半徑 6、圓心角 120° 的扇形面積為（用 π）？",
          "options": [
            "12π",
            "24π",
            "4π",
            "8π"
          ],
          "answer": 0,
          "explanation": "扇形面積 = π×6²×(120/360) = 36π×(1/3) = 12π。",
          "trap": "要乘 120/360 = 1/3；別只算整圓 36π。"
        },
        {
          "stem": "半徑 9、弧長 6π 的扇形，圓心角為幾度？",
          "options": [
            "120°",
            "60°",
            "240°",
            "90°"
          ],
          "answer": 0,
          "explanation": "整圓周長 = 18π。θ = 360×(6π/18π) = 360×(1/3) = 120°。",
          "trap": "弧長比整圓周長(18π)，不是比直徑或半徑。"
        },
        {
          "stem": "同一弧所對的圓周角為 50°，則此弧所對的圓心角為？",
          "options": [
            "100°",
            "50°",
            "25°",
            "130°"
          ],
          "answer": 0,
          "explanation": "圓心角 = 圓周角的 2 倍 = 50×2 = 100°。",
          "trap": "圓周角是圓心角的「一半」，反推圓心角要「乘 2」不是除 2。"
        },
        {
          "stem": "圓心 O 半徑 10，一弦 AB 與圓心的距離為 6，則弦 AB 的長為？",
          "options": [
            "16",
            "8",
            "20",
            "12"
          ],
          "answer": 0,
          "explanation": "由圓心向弦作垂線平分弦，形成直角三角形：斜邊(半徑)10、一股(圓心距)6。半弦 = √(10²−6²) = 8，故 AB = 16。",
          "trap": "⚠ √(10²−6²)=8 只是「半弦」，弦長要再乘 2 = 16，別停在 8。"
        }
      ]
    },
    {
      "id": "statistics",
      "name": "統計圖表與集中量數",
      "week": "八下 5月",
      "notes": [
        {
          "h": "平均數、中位數、眾數",
          "points": [
            "平均數 = 總和 ÷ 個數。",
            "中位數 = 排序後最中間的值（偶數筆取中間兩數平均）。",
            "眾數 = 出現最多次的值。"
          ],
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><line x1=\"40\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><rect x=\"55\" y=\"110\" width=\"30\" height=\"40\" fill=\"#7fae9e\" opacity=\"0.6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><rect x=\"95\" y=\"70\" width=\"30\" height=\"80\" fill=\"#c9755c\" opacity=\"0.6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><rect x=\"135\" y=\"70\" width=\"30\" height=\"80\" fill=\"#c9755c\" opacity=\"0.6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><rect x=\"175\" y=\"95\" width=\"30\" height=\"55\" fill=\"#7fae9e\" opacity=\"0.6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><rect x=\"215\" y=\"125\" width=\"30\" height=\"25\" fill=\"#7fae9e\" opacity=\"0.6\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><text x=\"100\" y=\"62\" fill=\"#c9755c\" font-size=\"12\">最高 = 眾數</text><text x=\"50\" y=\"172\" fill=\"#333\" font-size=\"12\">長條最高者出現最多次即眾數</text></svg>",
          "caption": "長條圖判讀眾數值",
          "trap": "求中位數一定要先排序！"
        },
        {
          "h": "四分位數與盒狀圖",
          "points": [
            "Q1、Q2(中位數)、Q3 把資料分成四等份。",
            "四分位距 IQR = Q3 − Q1。"
          ],
          "trap": "盒狀圖的盒子長度是 IQR(=Q3−Q1)，不是全距。",
          "svg": "<svg viewBox=\"0 0 360 175\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"360\" height=\"175\" fill=\"#f3e7df\"/><line x1=\"30\" y1=\"130\" x2=\"340\" y2=\"130\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"70\" y1=\"70\" x2=\"130\" y2=\"70\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"130\" y=\"50\" width=\"120\" height=\"40\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"180\" y1=\"50\" x2=\"180\" y2=\"90\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><line x1=\"250\" y1=\"70\" x2=\"310\" y2=\"70\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"70\" y1=\"60\" x2=\"70\" y2=\"80\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"310\" y1=\"60\" x2=\"310\" y2=\"80\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"54\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">最小</text><text x=\"118\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">Q1</text><text x=\"166\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">Q2</text><text x=\"236\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">Q3</text><text x=\"294\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">最大</text><text x=\"130\" y=\"40\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\">盒長 = IQR = Q3−Q1</text><text x=\"30\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">盒狀圖:盒子兩端為 Q1、Q3，中線為中位數</text></svg>",
          "caption": "盒狀圖:盒長代表四分位距 IQR=Q3−Q1"
        }
      ],
      "quiz": [
        {
          "stem": "5 個數的平均為 12，其中 4 個分別是 8、10、14、20，求第 5 個數。",
          "options": [
            "8",
            "10",
            "12",
            "6"
          ],
          "answer": 0,
          "explanation": "總和 = 12×5 = 60；已知四數和 = 52；第 5 個 = 60−52 = 8。",
          "trap": "平均×個數=總和(60)，再減已知和；別把平均 12 當成那個數。"
        },
        {
          "stem": "資料 3, 7, 7, 10, 13, 16 的中位數為？",
          "options": [
            "8.5",
            "7",
            "10",
            "9.5"
          ],
          "answer": 0,
          "explanation": "共 6 筆(偶數)，已排序，中間兩數為第3、4筆 = 7 與 10，平均 = (7+10)/2 = 8.5。",
          "trap": "偶數筆取中間兩數平均；眾數是 7 但中位數是 8.5，別混淆。"
        },
        {
          "stem": "某次模考 6 人成績排序後 Q1=60、Q3=88，四分位距為？",
          "options": [
            "28",
            "74",
            "148",
            "14"
          ],
          "answer": 0,
          "explanation": "IQR = Q3 − Q1 = 88 − 60 = 28。",
          "trap": "四分位距是 Q3−Q1(=28)，不是兩者平均(74)或相加(148)。"
        },
        {
          "stem": "資料 2, 5, 6, 8, 11, 13, 15（已排序，共 7 筆）的第一四分位數 Q1 與第三四分位數 Q3 之差（四分位距）為？",
          "options": [
            "8",
            "9",
            "5",
            "13"
          ],
          "answer": 0,
          "explanation": "中位數 Q2=8（第4筆）。下半部 2,5,6 的中位數 Q1=5；上半部 11,13,15 的中位數 Q3=13。IQR = 13−5 = 8。",
          "trap": "⚠ 7 筆奇數時，中位數不計入上下半；下半 {2,5,6} 取 Q1=5、上半 {11,13,15} 取 Q3=13，IQR=8。"
        }
      ]
    },
    {
      "id": "probability",
      "name": "機率與計數",
      "week": "九下 4月",
      "notes": [
        {
          "h": "機率",
          "points": [
            "機率 = 有利結果數 ÷ 全部結果數，範圍 0~1。",
            "「放回」各次獨立；「不放回」後面分母會減少。"
          ],
          "formula": "P(事件) = 有利結果數 / 總結果數",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"320\" height=\"180\" fill=\"#f7f3ec\"/><circle cx=\"160\" cy=\"95\" r=\"65\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><path d=\"M160 95 L160 30 A65 65 0 0 1 217.3 127.5 Z\" fill=\"#c9755c\" opacity=\"0.5\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><path d=\"M160 95 L217.3 127.5 A65 65 0 1 1 160 30 Z\" fill=\"#7fae9e\" opacity=\"0.45\" stroke=\"#7fae9e\" stroke-width=\"1.5\"/><text x=\"185\" y=\"80\" fill=\"#333\" font-size=\"12\">3 紅</text><text x=\"110\" y=\"120\" fill=\"#333\" font-size=\"12\">2 藍</text><text x=\"40\" y=\"166\" fill=\"#333\" font-size=\"12\">P(紅)=有利/全部=3/5</text></svg>",
          "caption": "機率圓餅圖的佔比",
          "trap": "不放回時第二次的分母與符合數都要更新。"
        }
      ],
      "quiz": [
        {
          "stem": "袋中有 3 紅 2 藍球，連續取兩球「不放回」，兩球都是紅球的機率為？",
          "options": [
            "3/10",
            "9/25",
            "3/20",
            "1/2"
          ],
          "answer": 0,
          "explanation": "P = (3/5)×(2/4) = 6/20 = 3/10。",
          "trap": "不放回：第二次分母變 4、紅球只剩 2；若用 3/5×3/5=9/25 那是「放回」的算法。"
        },
        {
          "stem": "擲兩顆公正骰子，點數和為 7 的機率為？",
          "options": [
            "1/6",
            "1/12",
            "7/36",
            "1/9"
          ],
          "answer": 0,
          "explanation": "和為 7 的情形：(1,6)(2,5)(3,4)(4,3)(5,2)(6,1) 共 6 種，總數 36，P = 6/36 = 1/6。",
          "trap": "(1,6) 與 (6,1) 算兩種；總樣本是 36 不是 11 或 21。"
        },
        {
          "stem": "一箱 20 顆燈泡有 4 顆瑕疵，隨機抽 1 顆為「良品」的機率為？",
          "options": [
            "4/5",
            "1/5",
            "4/20",
            "16/4"
          ],
          "answer": 0,
          "explanation": "良品 = 20−4 = 16 顆，P = 16/20 = 4/5。",
          "trap": "問的是「良品」(16顆) 機率，不是瑕疵(4/20=1/5)。"
        },
        {
          "stem": "甲、乙、丙、丁、戊 5 人排成一列，甲與乙必須相鄰的機率為？",
          "options": [
            "2/5",
            "1/5",
            "1/10",
            "3/5"
          ],
          "answer": 0,
          "explanation": "總排法 5!=120。甲乙視為一綑：4!×2!=24×2=48。P = 48/120 = 2/5。",
          "trap": "⚠ 甲乙相鄰要把兩人綑成一單位算 4! 後再乘其內部 2! 種次序；別漏掉內部的 ×2。"
        }
      ]
    }
  ]
};
