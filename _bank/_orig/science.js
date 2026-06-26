// science.js — 自然（完整 108 課綱；子科經子代理審查+補題到4/topic+每段筆記SVG圖解+對抗驗證）
// topic.sub 對應 config 子科 id。子科順序：physchem / biology / earth。
window.STUDYSYNC = window.STUDYSYNC || { data: {} };
window.STUDYSYNC.data.subjects = window.STUDYSYNC.data.subjects || {};
window.STUDYSYNC.data.subjects.science = {
  id: "science", name: "自然",
  topics: [
    {
      "id": "p-force",
      "name": "力與運動",
      "sub": "physchem",
      "week": "上學期 9月",
      "notes": [
        {
          "h": "牛頓運動定律",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><line x1=\"20\" y1=\"130\" x2=\"300\" y2=\"130\" stroke=\"#3a342e\" stroke-width=\"2\"/><rect x=\"120\" y=\"92\" width=\"56\" height=\"38\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"148\" y=\"116\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">m</text><line x1=\"176\" y1=\"111\" x2=\"250\" y2=\"111\" stroke=\"#c9755c\" stroke-width=\"3\"/><polygon points=\"250,111 240,106 240,116\" fill=\"#c9755c\"/><text x=\"222\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">拉力 F</text><line x1=\"120\" y1=\"111\" x2=\"80\" y2=\"111\" stroke=\"#3a342e\" stroke-width=\"3\"/><polygon points=\"80,111 90,106 90,116\" fill=\"#3a342e\"/><text x=\"92\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">摩擦力</text><line x1=\"148\" y1=\"92\" x2=\"148\" y2=\"60\" stroke=\"#3a342e\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/><line x1=\"148\" y1=\"130\" x2=\"148\" y2=\"162\" stroke=\"#3a342e\" stroke-width=\"3\"/><polygon points=\"148,162 143,152 153,152\" fill=\"#3a342e\"/><text x=\"180\" y=\"158\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">重力 W=mg</text><text x=\"160\" y=\"48\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">合力 = ma</text></svg>",
          "caption": "合力決定加速度 F=ma",
          "points": [
            "牛頓第一定律(慣性):物體不受外力或合力為零時，靜者恆靜、動者沿直線等速運動。",
            "牛頓第二定律:合力 = 質量 × 加速度，加速度方向與合力方向相同。",
            "牛頓第三定律:作用力與反作用力大小相等、方向相反，分別作用在不同物體上，不會抵消。",
            "重量 W = mg，質量單位 kg，重量單位 N；台灣課本常取 g = 10 m/s²。"
          ],
          "formula": "F = ma；W = mg",
          "trap": "合力才決定加速度!算 F=ma 時要先把所有力(含摩擦力、重力分量)合成，不能只用某一個力。"
        },
        {
          "h": "等加速度直線運動",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><line x1=\"40\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"40\" y1=\"150\" x2=\"40\" y2=\"30\" stroke=\"#3a342e\" stroke-width=\"2\"/><polygon points=\"40,30 35,40 45,40\" fill=\"#3a342e\"/><polygon points=\"300,150 290,145 290,155\" fill=\"#3a342e\"/><text x=\"30\" y=\"40\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">v</text><text x=\"296\" y=\"168\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">t</text><line x1=\"40\" y1=\"150\" x2=\"260\" y2=\"60\" stroke=\"#c9755c\" stroke-width=\"3\"/><polygon points=\"40,150 260,150 260,60\" fill=\"#eef4f2\" stroke=\"#5aa874\" stroke-width=\"1.5\"/><text x=\"150\" y=\"135\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">面積=位移 s</text><text x=\"180\" y=\"88\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">斜率=a</text></svg>",
          "caption": "v-t圖斜率為加速度 面積為位移",
          "points": [
            "由靜止出發 v = at，平均速度 = (初速 + 末速)/2。",
            "位移 s = v₀t + ½at²；若由靜止 s = ½at²。",
            "速度對時間圖(v-t圖)斜率代表加速度，圖形下面積代表位移。"
          ],
          "formula": "v = v₀ + at；s = v₀t + ½at²",
          "trap": "單位要一致!時間用秒、速度用 m/s。題目給 km/hr 要先除以 3.6 換成 m/s 再代公式。"
        }
      ],
      "quiz": [
        {
          "stem": "一質量 6 kg 的木箱置於水平地面，受到水平向右 16 N 的拉力，木箱與地面間的摩擦力為 4 N。則木箱的加速度大小為何?(g = 10 m/s²)",
          "options": [
            "1 m/s²",
            "2 m/s²",
            "2.67 m/s²",
            "3.33 m/s²"
          ],
          "answer": 1,
          "explanation": "水平方向合力 = 拉力 − 摩擦力 = 16 − 4 = 12 N。由 F = ma，a = 合力/質量 = 12/6 = 2 m/s²。重力與正向力在鉛直方向互相抵消，不影響水平加速度。",
          "trap": "不能直接用 16/6 算!摩擦力與拉力方向相反，必須先求合力 12 N 再除以質量。"
        },
        {
          "stem": "一汽車由靜止開始等加速度直線前進，經過 5 秒後速度達到 20 m/s。則此 5 秒內汽車行駛的距離為何?",
          "options": [
            "40 m",
            "50 m",
            "80 m",
            "100 m"
          ],
          "answer": 1,
          "explanation": "加速度 a = (20 − 0)/5 = 4 m/s²。由靜止出發，距離 s = ½at² = ½ × 4 × 5² = ½ × 4 × 25 = 50 m。亦可用平均速度法:平均速度 = (0+20)/2 = 10 m/s，距離 = 10 × 5 = 50 m。",
          "trap": "別直接用末速度 20 × 5 = 100 m!等加速運動的距離要用平均速度(10 m/s)，不是末速度。"
        },
        {
          "stem": "甲、乙兩人在溜冰場上互推，甲質量 40 kg、乙質量 60 kg。互推瞬間，下列敘述何者正確?",
          "options": [
            "甲受到的推力比乙大",
            "兩人受到的推力大小相等，但甲的加速度較大",
            "兩人受到的推力大小相等，且加速度也相等",
            "質量大的乙加速度較大"
          ],
          "answer": 1,
          "explanation": "由牛頓第三定律，甲推乙的力與乙推甲的力大小相等、方向相反(設為 F)。但加速度 a = F/m，甲質量較小(40 kg)，故甲的加速度 a甲 = F/40 大於乙的 a乙 = F/60。所以推力相等但甲加速度較大。",
          "trap": "作用力反作用力『大小一定相等』與質量無關!但加速度受質量影響，質量小的反而被推得更快。"
        },
        {
          "stem": "一物體在水平桌面上以 10 m/s 的初速度滑行，因摩擦力作用而做等減速運動，經 4 秒後恰好停止。若物體質量為 2 kg，則此摩擦力大小為何?",
          "options": [
            "2.5 N",
            "5 N",
            "10 N",
            "20 N"
          ],
          "answer": 1,
          "explanation": "物體由 10 m/s 減速到 0，歷時 4 秒，加速度 a = (0 − 10)/4 = −2.5 m/s²(負號表減速)。摩擦力是唯一水平外力，由 F = ma，摩擦力大小 = 2 × 2.5 = 5 N。",
          "trap": "別把 a 算成 10/2=5!加速度要用『速度變化÷時間』=10/4=2.5 m/s²，再乘質量。題目問力大小，取正值即可。"
        }
      ]
    },
    {
      "id": "p-work-energy",
      "name": "功與能與簡單機械",
      "sub": "physchem",
      "week": "上學期 10月",
      "notes": [
        {
          "h": "功、功率與能量",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><line x1=\"30\" y1=\"150\" x2=\"290\" y2=\"150\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"30\" y1=\"150\" x2=\"30\" y2=\"30\" stroke=\"#3a342e\" stroke-width=\"2\"/><path d=\"M30 150 Q120 150 160 90 Q200 30 290 30\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><circle cx=\"55\" cy=\"143\" r=\"9\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><circle cx=\"270\" cy=\"34\" r=\"9\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"90\" x2=\"160\" y2=\"150\" stroke=\"#3a342e\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"60\" y=\"168\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">高動能</text><text x=\"240\" y=\"168\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">高位能</text><text x=\"120\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">Ek+Ep 守恆</text><text x=\"14\" y=\"40\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">能</text></svg>",
          "caption": "動能位能轉換 總能守恆",
          "points": [
            "功 W = 施力 F × 沿力方向位移 s，單位焦耳(J)。力與位移垂直時不作功。",
            "功率 P = 功/時間 = W/t，單位瓦特(W)，1 W = 1 J/s。",
            "動能 Ek = ½mv²；重力位能 Ep = mgh。能量守恆:總能量(動能+位能)不會憑空消失。"
          ],
          "formula": "W = Fs；P = W/t；Ek = ½mv²；Ep = mgh",
          "trap": "提著重物水平走路不對重物作功!因為施力(向上)與位移(水平)互相垂直，W = 0。"
        },
        {
          "h": "簡單機械與省力",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><line x1=\"60\" y1=\"30\" x2=\"160\" y2=\"30\" stroke=\"#3a342e\" stroke-width=\"2\"/><circle cx=\"110\" cy=\"50\" r=\"20\" fill=\"none\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"110\" y1=\"30\" x2=\"110\" y2=\"50\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><path d=\"M90 50 L90 100\" stroke=\"#5aa874\" stroke-width=\"2\"/><path d=\"M130 50 L130 110\" stroke=\"#c9755c\" stroke-width=\"2\"/><rect x=\"75\" y=\"100\" width=\"30\" height=\"26\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"90\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">W</text><line x1=\"130\" y1=\"110\" x2=\"130\" y2=\"150\" stroke=\"#c9755c\" stroke-width=\"3\"/><polygon points=\"130,150 125,140 135,140\" fill=\"#c9755c\"/><text x=\"160\" y=\"140\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">施力 F=½W</text><text x=\"160\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">動滑輪</text><text x=\"160\" y=\"168\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">省力一半 費距離兩倍</text></svg>",
          "caption": "動滑輪省一半力但費二倍距離",
          "points": [
            "機械利益(MA) = 抗力/施力。定滑輪不省力但可改變施力方向;動滑輪可省一半力但費二倍距離。",
            "省力一定費距離、省距離一定費力，功(理想下)不變:施力 × 施力距離 = 抗力 × 抗力距離。",
            "斜面:施力距離(斜邊)越長越省力，理想機械利益 = 斜邊長/高度。"
          ],
          "formula": "MA = 抗力/施力；功不滅:F施 × s施 = F抗 × s抗",
          "trap": "『省力』不等於『省功』!機械能省力但同時費距離，理想機械的總功並不會減少。"
        }
      ],
      "quiz": [
        {
          "stem": "用一個動滑輪將一個重 50 N 的物體等速向上提起 2 公尺。若不計滑輪重量與摩擦，則施力大小及拉繩子的長度各為何?",
          "options": [
            "25 N、2 m",
            "25 N、4 m",
            "50 N、4 m",
            "100 N、1 m"
          ],
          "answer": 1,
          "explanation": "理想動滑輪機械利益為 2，可省一半力，故施力 = 抗力/2 = 50/2 = 25 N。由功不滅:施力 × 施力距離 = 抗力 × 抗力距離，25 × s = 50 × 2 = 100 J，s = 4 m。亦即省一半力就要費二倍距離。",
          "trap": "省力一定費距離!動滑輪施力減半(25 N)，但拉繩長度變兩倍(4 m)，總功仍為 100 J 不變。"
        },
        {
          "stem": "一位質量 60 kg 的學生在 6 秒內沿樓梯等速爬上 3 公尺高的二樓。則他爬樓梯的平均功率為何?(g = 10 m/s²)",
          "options": [
            "100 W",
            "180 W",
            "300 W",
            "1800 W"
          ],
          "answer": 2,
          "explanation": "克服重力所作的功 = mgh = 60 × 10 × 3 = 1800 J。功率 P = W/t = 1800/6 = 300 W。",
          "trap": "1800 是『功』不是『功率』!還要除以時間 6 秒才是功率。別把焦耳和瓦特搞混。"
        },
        {
          "stem": "將一質量 2 kg 的小球自離地 5 m 高處由靜止自由落下，不計空氣阻力(g = 10 m/s²)。則小球落到地面瞬間的速率為何?",
          "options": [
            "5 m/s",
            "10 m/s",
            "14.1 m/s",
            "20 m/s"
          ],
          "answer": 1,
          "explanation": "由能量守恆，落地時重力位能全部轉為動能:mgh = ½mv²。質量可消去，gh = ½v²，10 × 5 = ½v²，v² = 100，v = 10 m/s。(與質量無關，重的輕的同高落下速率相同。)",
          "trap": "別把答案算成跟質量有關!mgh=½mv² 兩邊 m 互相抵消，落地速率只看高度與 g，2 kg 是用來誤導的。"
        },
        {
          "stem": "用一傾角固定的斜面把重 600 N 的物體推上高 2 m 的平台，斜面長 5 m。若推力為 300 N(含克服摩擦)，則此斜面的機械效率約為何?",
          "options": [
            "40 %",
            "60 %",
            "80 %",
            "100 %"
          ],
          "answer": 2,
          "explanation": "有用功(輸出)= 抗力 × 高度 = 600 × 2 = 1200 J。施力作的總功(輸入)= 推力 × 斜面長 = 300 × 5 = 1500 J。機械效率 = 有用功/總功 = 1200/1500 = 0.8 = 80%。差額 300 J 因摩擦而損耗。",
          "trap": "輸出功要用『抗力×高度(2m)』，輸入功用『施力×斜面長(5m)』，兩個距離不同別混用!有摩擦時效率必小於100%。"
        }
      ]
    },
    {
      "id": "p-waves",
      "name": "波動:聲音與光",
      "sub": "physchem",
      "week": "上學期 11月",
      "notes": [
        {
          "h": "波的基本性質與聲音",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><line x1=\"20\" y1=\"95\" x2=\"300\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><path d=\"M20 95 Q50 35 80 95 Q110 155 140 95 Q170 35 200 95 Q230 155 260 95 Q275 65 290 95\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><line x1=\"80\" y1=\"35\" x2=\"200\" y2=\"35\" stroke=\"#5aa874\" stroke-width=\"2\"/><text x=\"140\" y=\"28\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">波長 λ</text><line x1=\"80\" y1=\"35\" x2=\"80\" y2=\"95\" stroke=\"#5aa874\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/><line x1=\"200\" y1=\"35\" x2=\"200\" y2=\"95\" stroke=\"#5aa874\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/><line x1=\"50\" y1=\"95\" x2=\"50\" y2=\"35\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"58\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">振幅</text><text x=\"150\" y=\"172\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">波速 v = f λ</text></svg>",
          "caption": "波長振幅與波速關係",
          "points": [
            "波速 v = 波長 λ × 頻率 f。聲音是縱波，需要介質傳播，真空中不能傳聲。",
            "聲音在空氣中約 340 m/s，在水、固體中更快;頻率越高音調越高，振幅越大聲音越響。",
            "回聲:利用聲速與來回時間可測距離，距離 = 速度 × 時間 ÷ 2(因為來回兩趟)。"
          ],
          "formula": "v = fλ",
          "trap": "回聲測距時間是『來回』的!距離要記得除以 2，否則答案會多一倍。"
        },
        {
          "h": "光的反射與折射",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><line x1=\"40\" y1=\"130\" x2=\"280\" y2=\"130\" stroke=\"#3a342e\" stroke-width=\"3\"/><text x=\"250\" y=\"148\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">鏡面</text><line x1=\"160\" y1=\"130\" x2=\"160\" y2=\"40\" stroke=\"#3a342e\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><text x=\"166\" y=\"48\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">法線</text><line x1=\"70\" y1=\"60\" x2=\"160\" y2=\"130\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><polygon points=\"160,130 148,124 152,114\" fill=\"#c9755c\"/><line x1=\"160\" y1=\"130\" x2=\"250\" y2=\"60\" stroke=\"#5aa874\" stroke-width=\"2.5\"/><polygon points=\"250,60 238,62 244,72\" fill=\"#5aa874\"/><path d=\"M160 95 A40 40 0 0 1 145 110\" fill=\"none\" stroke=\"#3a342e\" stroke-width=\"1.2\"/><path d=\"M160 95 A40 40 0 0 0 175 110\" fill=\"none\" stroke=\"#3a342e\" stroke-width=\"1.2\"/><text x=\"128\" y=\"105\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">入射角</text><text x=\"180\" y=\"105\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">反射角</text><text x=\"160\" y=\"170\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">入射角 = 反射角(由法線量)</text></svg>",
          "caption": "反射定律:角度都從法線量起",
          "points": [
            "光是電磁波，可在真空中傳播，真空中光速約 3 × 10⁸ m/s。",
            "反射定律:入射角 = 反射角(都從法線量起)。平面鏡成正立等大虛像。",
            "折射:光由光疏進入光密介質(如空氣進入水)會偏向法線;凸透鏡會聚光、凹透鏡發散光。"
          ],
          "formula": "入射角 = 反射角",
          "trap": "入射角、反射角都是從『法線』量起，不是從鏡面量!別把和鏡面的夾角當成入射角。"
        }
      ],
      "quiz": [
        {
          "stem": "某人在山谷對著遠處山壁大喊一聲，經過 2 秒後聽到回聲。若當時聲音在空氣中的傳播速度為 340 m/s，則此人與山壁之間的距離約為多少?",
          "options": [
            "170 m",
            "340 m",
            "680 m",
            "1360 m"
          ],
          "answer": 1,
          "explanation": "聲音傳播的總路程 = 速度 × 時間 = 340 × 2 = 680 m。但這是聲音往返(去 + 回)的距離，故人到山壁的距離 = 680 ÷ 2 = 340 m。",
          "trap": "2 秒是聲音『來回』的時間!算出 680 m 是總路程，要再除以 2 才是單程距離 340 m。"
        },
        {
          "stem": "一聲波在空氣中傳播，其頻率為 680 Hz，波速為 340 m/s。若此聲波由空氣進入水中，波速增為 1480 m/s 而頻率不變，則它在水中的波長約為多少?",
          "options": [
            "0.5 m",
            "1.0 m",
            "2.18 m",
            "4.35 m"
          ],
          "answer": 2,
          "explanation": "波由一介質進入另一介質時，頻率不變(由聲源決定)。在水中波長 λ = v/f = 1480/680 ≈ 2.18 m。(空氣中波長為 340/680 = 0.5 m，進入水中後波速與波長都變大。)",
          "trap": "換介質時是『頻率不變』，不是波長不變!波速變大、頻率固定，所以波長一定跟著變大。"
        },
        {
          "stem": "閃電發生時，某人先看到閃光，經過 3 秒後才聽到雷聲。已知光速極快可視為瞬間到達，聲速為 340 m/s。則閃電發生處與此人的距離約為多少?",
          "options": [
            "約 113 m",
            "約 340 m",
            "約 680 m",
            "約 1020 m"
          ],
          "answer": 3,
          "explanation": "光速約 3×10⁸ m/s，傳 1 km 僅約百萬分之三秒，可視為瞬間看到。3 秒是聲音單程(由閃電傳到人)所需時間，距離 = 聲速 × 時間 = 340 × 3 = 1020 m。此處是單程，不需除以 2。",
          "trap": "這題不是回聲!3 秒是聲音『單程』時間，不要再除以 2。別把光的傳播時間也算進去(可忽略)。"
        },
        {
          "stem": "一物體放在凸透鏡前方、距離大於二倍焦距處。關於它在透鏡另一側所成的像，下列敘述何者正確?",
          "options": [
            "成正立放大的虛像",
            "成倒立縮小的實像",
            "成倒立放大的實像",
            "不成像"
          ],
          "answer": 1,
          "explanation": "凸透鏡會聚光線。當物距大於二倍焦距(2f)時，會在透鏡另一側二倍焦距與焦距之間成『倒立、縮小的實像』(照相機原理)。物體越遠像越小越靠近焦點。",
          "trap": "凸透鏡只有在物體位於『焦距內』時才成正立放大虛像(放大鏡);物距大於2f時成的是倒立縮小實像，方向別記反。"
        }
      ]
    },
    {
      "id": "p-heat",
      "name": "溫度與熱",
      "sub": "physchem",
      "week": "下學期 2月",
      "notes": [
        {
          "h": "熱量與比熱",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><rect x=\"60\" y=\"40\" width=\"40\" height=\"100\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"2\"/><rect x=\"60\" y=\"40\" width=\"40\" height=\"100\" rx=\"6\" fill=\"#c9755c\" fill-opacity=\"0.35\"/><text x=\"80\" y=\"158\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">熱水</text><rect x=\"220\" y=\"40\" width=\"40\" height=\"100\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"2\"/><rect x=\"220\" y=\"40\" width=\"40\" height=\"100\" rx=\"6\" fill=\"#7fae9e\" fill-opacity=\"0.35\"/><text x=\"240\" y=\"158\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">冷水</text><line x1=\"105\" y1=\"78\" x2=\"215\" y2=\"78\" stroke=\"#c9755c\" stroke-width=\"3\"/><polygon points=\"215,78 205,73 205,83\" fill=\"#c9755c\"/><text x=\"160\" y=\"70\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">放熱</text><line x1=\"215\" y1=\"105\" x2=\"105\" y2=\"105\" stroke=\"#5aa874\" stroke-width=\"3\"/><polygon points=\"105,105 115,100 115,110\" fill=\"#5aa874\"/><text x=\"160\" y=\"124\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">吸熱</text><text x=\"160\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">Q = m c ΔT</text></svg>",
          "caption": "高溫放熱 低溫吸熱平衡",
          "points": [
            "熱量公式 Q = mcΔT，m 為質量、c 為比熱、ΔT 為溫度變化。水的比熱 = 1 cal/g·°C，是常見物質中最大的。",
            "熱量單位:1 卡(cal) 可使 1 g 水升溫 1 °C;1 大卡(kcal) = 1000 cal。",
            "熱平衡:兩物體接觸最後溫度相同;高溫物體放出的熱 = 低溫物體吸收的熱(無熱量散失時)。"
          ],
          "formula": "Q = mcΔT",
          "trap": "比熱大的物質溫度『不容易』改變!水比熱大，所以同樣加熱，水升溫比金屬慢。"
        }
      ],
      "quiz": [
        {
          "stem": "將 100 g、80 °C 的熱水與 50 g、20 °C 的冷水混合(假設無熱量散失，水的比熱皆為 1 cal/g·°C)，則混合後達熱平衡時的溫度為何?",
          "options": [
            "40 °C",
            "50 °C",
            "60 °C",
            "70 °C"
          ],
          "answer": 2,
          "explanation": "設末溫為 T。熱水放熱 = 冷水吸熱:100 × 1 × (80 − T) = 50 × 1 × (T − 20)。展開:8000 − 100T = 50T − 1000，9000 = 150T，T = 60 °C。",
          "trap": "不是兩溫度直接平均(50 °C)!熱水質量(100 g)比冷水(50 g)多，末溫會偏向熱水那一側，所以是 60 °C 而非 50 °C。"
        },
        {
          "stem": "對 200 g 的水加熱，使其溫度由 25 °C 升高到 75 °C。若水的比熱為 1 cal/g·°C，則需吸收多少熱量?",
          "options": [
            "5 kcal",
            "10 kcal",
            "15 kcal",
            "20 kcal"
          ],
          "answer": 1,
          "explanation": "Q = mcΔT = 200 × 1 × (75 − 25) = 200 × 1 × 50 = 10000 cal = 10 kcal。",
          "trap": "ΔT 是溫度『變化量』50 °C，不是末溫 75!另外 10000 cal 要換算成 10 kcal(除以 1000)。"
        },
        {
          "stem": "將 100 g、20 °C 的某金屬塊投入 100 g、80 °C 的水中(水比熱 1 cal/g·°C)，達熱平衡時溫度為 75 °C。假設無熱量散失，則此金屬的比熱約為多少 cal/g·°C?",
          "options": [
            "0.09",
            "0.5",
            "1.0",
            "1.2"
          ],
          "answer": 0,
          "explanation": "水放熱 = 金屬吸熱。水降溫 80→75，放熱 = 100×1×(80−75) = 500 cal。金屬升溫 20→75，吸熱 = 100×c×(75−20) = 5500c cal。令兩者相等:500 = 5500c，c = 500/5500 ≈ 0.09 cal/g·°C。",
          "trap": "金屬的ΔT是 75−20=55，水的ΔT是 80−75=5，兩者末溫雖同但溫度變化不同!比熱小的金屬即使吸同樣熱量也升溫很多。"
        },
        {
          "stem": "甲、乙兩物質質量相同，比熱比為 甲:乙 = 1:3。若對兩者各提供相同的熱量，則兩者升高的溫度之比(甲:乙)為何?",
          "options": [
            "1 : 3",
            "3 : 1",
            "1 : 1",
            "9 : 1"
          ],
          "answer": 1,
          "explanation": "由 Q = mcΔT，ΔT = Q/(mc)。質量與熱量相同時，ΔT 與比熱 c 成反比。甲、乙比熱比為 1:3，故升溫比 ΔT甲:ΔT乙 = (1/1):(1/3) = 3:1。比熱小的甲升溫較多。",
          "trap": "比熱與升溫成『反比』!比熱大的(乙)反而難升溫，所以乙升溫少。別把比例 1:3 直接抄成答案。"
        }
      ]
    },
    {
      "id": "p-electricity",
      "name": "電路與歐姆定律",
      "sub": "physchem",
      "week": "下學期 3月",
      "notes": [
        {
          "h": "歐姆定律與電功率",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><text x=\"80\" y=\"24\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">串聯</text><line x1=\"40\" y1=\"55\" x2=\"120\" y2=\"55\" stroke=\"#3a342e\" stroke-width=\"2\"/><rect x=\"52\" y=\"48\" width=\"22\" height=\"14\" fill=\"#c9755c\" stroke=\"#3a342e\"/><rect x=\"86\" y=\"48\" width=\"22\" height=\"14\" fill=\"#c9755c\" stroke=\"#3a342e\"/><line x1=\"40\" y1=\"55\" x2=\"40\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"120\" y1=\"55\" x2=\"120\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"40\" y1=\"95\" x2=\"120\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"74\" y1=\"91\" x2=\"74\" y2=\"99\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"86\" y1=\"88\" x2=\"86\" y2=\"102\" stroke=\"#3a342e\" stroke-width=\"3\"/><text x=\"80\" y=\"120\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">電流相同</text><text x=\"240\" y=\"24\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">並聯</text><line x1=\"200\" y1=\"45\" x2=\"280\" y2=\"45\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"200\" y1=\"105\" x2=\"280\" y2=\"105\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"222\" y1=\"45\" x2=\"222\" y2=\"105\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"258\" y1=\"45\" x2=\"258\" y2=\"105\" stroke=\"#3a342e\" stroke-width=\"2\"/><rect x=\"216\" y=\"64\" width=\"12\" height=\"22\" fill=\"#7fae9e\" stroke=\"#3a342e\"/><rect x=\"252\" y=\"64\" width=\"12\" height=\"22\" fill=\"#7fae9e\" stroke=\"#3a342e\"/><text x=\"240\" y=\"124\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">電壓相同</text><text x=\"160\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">V = I R</text></svg>",
          "caption": "串聯並聯與歐姆定律",
          "points": [
            "歐姆定律 V = IR，電壓(V，伏特) = 電流(I，安培) × 電阻(R，歐姆)。",
            "串聯:電流處處相同，總電阻 = 各電阻相加，電壓依電阻比例分配。",
            "並聯:電壓處處相同，總電阻倒數 = 各電阻倒數之和，總電阻比任一支路都小。",
            "電功率 P = IV = I²R = V²/R，單位瓦特(W);電費(度)= 功率(kW) × 時間(hr)。"
          ],
          "formula": "V = IR；P = IV = I²R = V²/R",
          "trap": "串聯電流相同、並聯電壓相同!分壓分流時務必先判斷是串聯還是並聯，搞錯整題就垮。"
        }
      ],
      "quiz": [
        {
          "stem": "將 4 Ω 與 8 Ω 兩電阻串聯，接上 12 V 的電源。則通過電路的電流，以及 8 Ω 電阻所消耗的電功率分別為何?",
          "options": [
            "1 A、8 W",
            "2 A、16 W",
            "1.5 A、18 W",
            "3 A、24 W"
          ],
          "answer": 0,
          "explanation": "串聯總電阻 = 4 + 8 = 12 Ω。電流 I = V/R總 = 12/12 = 1 A(串聯電流處處相同)。8 Ω 電阻的功率 P = I²R = 1² × 8 = 8 W。",
          "trap": "算 8 Ω 的功率不能用 12 V!12 V 是『總』電壓，8 Ω 兩端電壓只有 8 V。要用通過它的電流 1 A 配它自己的電阻算 P = I²R。"
        },
        {
          "stem": "將 4 Ω 與 12 Ω 兩電阻並聯後，接上 12 V 的電源。則電路的總電阻與電源供應的總電流分別為何?",
          "options": [
            "16 Ω、0.75 A",
            "8 Ω、1.5 A",
            "3 Ω、4 A",
            "6 Ω、2 A"
          ],
          "answer": 2,
          "explanation": "並聯總電阻:1/R = 1/4 + 1/12 = 3/12 + 1/12 = 4/12，R = 3 Ω(或用 R = 4×12/(4+12) = 48/16 = 3 Ω)。總電流 I = V/R = 12/3 = 4 A。",
          "trap": "並聯總電阻比『任何一個』支路都小!不會是相加的 16 Ω。並聯越多電阻，總電阻反而越小。"
        },
        {
          "stem": "一個標示「110 V、55 W」的電燈泡，在正常使用(接 110 V)情況下，通過它的電流以及其燈絲電阻各約為何?",
          "options": [
            "0.5 A、220 Ω",
            "0.5 A、55 Ω",
            "2 A、55 Ω",
            "2 A、220 Ω"
          ],
          "answer": 0,
          "explanation": "由 P = IV，I = P/V = 55/110 = 0.5 A。再由 V = IR，R = V/I = 110/0.5 = 220 Ω(或 R = V²/P = 110²/55 = 12100/55 = 220 Ω)。",
          "trap": "電阻別用 V/P 或 P/V 隨便湊!要用 R=V²/P 或先求電流再 R=V/I。110/55=2 是錯的單位組合。"
        },
        {
          "stem": "一台功率 1500 W 的電熱水器，每天使用 2 小時，連續使用 30 天。若每度(1 kWh)電費為 3 元，則這 30 天的電費共約為多少元?",
          "options": [
            "90 元",
            "135 元",
            "270 元",
            "900 元"
          ],
          "answer": 2,
          "explanation": "功率 1500 W = 1.5 kW。每天用電 = 1.5 kW × 2 hr = 3 度;30 天共 3 × 30 = 90 度。電費 = 90 度 × 3 元 = 270 元。",
          "trap": "瓦特要先換成千瓦(÷1000)再算度數!1500 W=1.5 kW，別直接拿 1500 去乘時間，會差 1000 倍。"
        }
      ]
    },
    {
      "id": "p-magnetism",
      "name": "電與磁:電流磁效應與電磁感應",
      "sub": "physchem",
      "week": "下學期 4月",
      "notes": [
        {
          "h": "電流磁效應與電磁感應",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><rect x=\"60\" y=\"60\" width=\"70\" height=\"60\" fill=\"none\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"62\" y1=\"68\" x2=\"128\" y2=\"68\" stroke=\"#7fae9e\" stroke-width=\"3\"/><line x1=\"62\" y1=\"82\" x2=\"128\" y2=\"82\" stroke=\"#7fae9e\" stroke-width=\"3\"/><line x1=\"62\" y1=\"96\" x2=\"128\" y2=\"96\" stroke=\"#7fae9e\" stroke-width=\"3\"/><line x1=\"62\" y1=\"110\" x2=\"128\" y2=\"110\" stroke=\"#7fae9e\" stroke-width=\"3\"/><text x=\"95\" y=\"138\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">線圈</text><rect x=\"170\" y=\"70\" width=\"60\" height=\"26\" fill=\"#c9755c\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"184\" y=\"88\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">N</text><text x=\"216\" y=\"88\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">S</text><line x1=\"170\" y1=\"83\" x2=\"135\" y2=\"83\" stroke=\"#3a342e\" stroke-width=\"2.5\"/><polygon points=\"135,83 145,78 145,88\" fill=\"#3a342e\"/><text x=\"200\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">磁鐵移動</text><circle cx=\"40\" cy=\"90\" r=\"14\" fill=\"none\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"40\" y=\"95\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">G</text><text x=\"160\" y=\"166\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">磁場變化 → 感應電流</text></svg>",
          "caption": "磁場變化產生感應電流",
          "points": [
            "電流磁效應(厄斯特實驗):通電導線周圍會產生磁場;線圈通電成為電磁鐵，電流越大、線圈越多匝磁性越強。",
            "馬達原理:通電線圈在磁場中受力轉動，將電能轉換為動能(力學能)。",
            "電磁感應(法拉第):磁場變化或導線切割磁力線會在線圈中產生感應電流，是發電機的原理(動能轉電能)。",
            "感應電流只在『磁場變化』時產生;磁鐵靜止不動則無感應電流。"
          ],
          "trap": "馬達(電→動)和發電機(動→電)能量轉換方向相反!別把兩者的『電能/動能』流向記反了。"
        }
      ],
      "quiz": [
        {
          "stem": "將一根條形磁鐵的 N 極插入一個與檢流計相連的線圈中，檢流計指針偏轉。下列哪一種操作『不會』使檢流計指針偏轉?",
          "options": [
            "把磁鐵更快地插入線圈",
            "讓磁鐵 N 極停在線圈正中央靜止不動",
            "把磁鐵從線圈中抽出",
            "改用磁性更強的磁鐵插入"
          ],
          "answer": 1,
          "explanation": "感應電流產生的條件是『通過線圈的磁場發生變化』(即切割磁力線)。磁鐵插入、抽出或改變速度都會使磁場變化而產生感應電流。但磁鐵靜止不動時，磁場不再變化，故沒有感應電流，指針不偏轉。",
          "trap": "感應電流靠的是『磁場變化』，不是磁場本身有沒有!磁鐵就算在線圈裡，只要靜止不動就沒有感應電流。"
        },
        {
          "stem": "關於電動馬達與發電機的能量轉換，下列敘述何者正確?",
          "options": [
            "馬達將動能轉換為電能，發電機將電能轉換為動能",
            "馬達將電能轉換為動能，發電機將動能轉換為電能",
            "兩者都是將電能轉換為熱能",
            "兩者都是將化學能轉換為電能"
          ],
          "answer": 1,
          "explanation": "電動馬達利用通電線圈在磁場中受力而轉動，把『電能』轉換為『動能(力學能)』。發電機則利用電磁感應，靠外力轉動線圈切割磁力線產生電流，把『動能』轉換為『電能』。兩者能量轉換方向恰好相反。",
          "trap": "馬達=電變動、發電機=動變電。兩者剛好相反，最容易記反!可用『馬達會動(動能輸出)』來幫助記憶其輸出是動能。"
        },
        {
          "stem": "在厄斯特實驗中，將一條南北向的導線放在小磁針正上方並通以電流，磁針會發生偏轉。下列關於此實驗的推論，何者正確?",
          "options": [
            "磁針偏轉是因為導線本身帶有靜電吸引磁針",
            "電流會在導線周圍產生磁場，磁場使磁針偏轉",
            "只有交流電才會使磁針偏轉，直流電不會",
            "電流越小，磁針偏轉角度越大"
          ],
          "answer": 1,
          "explanation": "厄斯特實驗證明『電流的磁效應』:通有電流的導線周圍會產生環形磁場，此磁場與地磁共同作用使小磁針偏轉。電流越大，產生的磁場越強，磁針偏轉角度越大;直流電也會產生磁場使磁針偏轉。",
          "trap": "磁針偏轉是『電生磁』不是靜電!而且電流越大偏轉越大(成正比)，選項把方向說反才是陷阱。"
        },
        {
          "stem": "一電磁鐵由線圈纏繞鐵芯製成。下列哪一種改變『無法』增強此電磁鐵的磁力?",
          "options": [
            "增加通過線圈的電流",
            "增加線圈的匝數",
            "把鐵芯抽掉改為空心",
            "改用更粗的導線降低電阻使電流變大"
          ],
          "answer": 2,
          "explanation": "電磁鐵的磁力與『電流大小』及『線圈匝數』成正比，並因鐵芯能集中磁場而大幅增強。把鐵芯抽掉(改空心)會使磁場分散、磁力大幅減弱，故無法增強磁力。降低電阻使電流變大則會增強磁力。",
          "trap": "鐵芯是用來『增強』磁力的，抽掉只會變弱!選項中其他三項都讓電流或匝數增加而增強磁力，別選錯成增強的那些。"
        }
      ]
    },
    {
      "id": "c-matter-classification",
      "name": "物質的組成與分類",
      "sub": "physchem",
      "week": "上學期 9月",
      "notes": [
        {
          "h": "純物質與混合物、元素與化合物",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><rect x=\"120\" y=\"14\" width=\"80\" height=\"24\" rx=\"4\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"160\" y=\"31\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">物質</text><line x1=\"160\" y1=\"38\" x2=\"80\" y2=\"62\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"38\" x2=\"240\" y2=\"62\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"40\" y=\"62\" width=\"80\" height=\"24\" rx=\"4\" fill=\"#7fae9e\" fill-opacity=\"0.4\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"80\" y=\"79\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">純物質</text><rect x=\"200\" y=\"62\" width=\"80\" height=\"24\" rx=\"4\" fill=\"#c9755c\" fill-opacity=\"0.4\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"240\" y=\"79\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">混合物</text><line x1=\"80\" y1=\"86\" x2=\"45\" y2=\"116\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"86\" x2=\"115\" y2=\"116\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"10\" y=\"116\" width=\"70\" height=\"22\" rx=\"4\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"45\" y=\"132\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">元素</text><rect x=\"90\" y=\"116\" width=\"70\" height=\"22\" rx=\"4\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"125\" y=\"132\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">化合物</text><text x=\"45\" y=\"156\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">如鐵 氧</text><text x=\"125\" y=\"156\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">如水</text><text x=\"240\" y=\"106\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">如空氣 鹽水</text></svg>",
          "caption": "物質分類樹狀圖",
          "points": [
            "純物質有固定組成與性質，分為元素(如氧、鐵)與化合物(如水、二氧化碳);混合物(如空氣、食鹽水)由多種物質混合，比例不固定。",
            "原子是構成物質的基本粒子;分子由原子組成。化合物可用化學方法分解成元素，元素不能再被分解。",
            "物理變化不產生新物質(如水結冰);化學變化會產生新物質(如鐵生鏽、燃燒)。"
          ],
          "trap": "『混合物』與『化合物』別搞混!食鹽水是混合物(可用蒸發分離)，水(H₂O)是化合物(要用電解才能分解)。"
        }
      ],
      "quiz": [
        {
          "stem": "下列物質:(甲)氧氣 O₂、(乙)二氧化碳 CO₂、(丙)海水、(丁)純金。依序判斷其分類，何者完全正確?",
          "options": [
            "甲:化合物、乙:元素、丙:混合物、丁:元素",
            "甲:元素、乙:化合物、丙:混合物、丁:元素",
            "甲:元素、乙:化合物、丙:化合物、丁:混合物",
            "甲:混合物、乙:化合物、丙:混合物、丁:元素"
          ],
          "answer": 1,
          "explanation": "氧氣 O₂ 由同種原子(氧)組成，是元素。二氧化碳 CO₂ 由碳、氧兩種元素化合而成，是化合物。海水含水、鹽類等多種物質，比例不固定，是混合物。純金只含金原子(Au)，是元素。故甲元素、乙化合物、丙混合物、丁元素。",
          "trap": "O₂ 雖然是『分子』但仍是『元素』!元素的判斷看是否只含一種原子，與是否成分子無關。"
        },
        {
          "stem": "下列各組變化中，哪一組『都是物理變化』?",
          "options": [
            "水結成冰、糖溶解於水",
            "鐵生鏽、木材燃燒",
            "鎂帶燃燒、食物腐敗",
            "蠟燭燃燒、雙氧水分解"
          ],
          "answer": 0,
          "explanation": "物理變化不產生新物質、只改變狀態或外形。水結冰只是 H₂O 由液態變固態、糖溶解只是分散在水中，皆未生成新物質，為物理變化。其餘各組(生鏽、燃燒、腐敗、分解)都產生新物質，屬化學變化。",
          "trap": "糖溶於水『沒有變成新物質』是物理變化!別把溶解、熔化等狀態改變誤判為化學變化。有新物質生成才是化學變化。"
        },
        {
          "stem": "對一杯食鹽水(NaCl 水溶液)，下列分離或分解的判斷何者正確?",
          "options": [
            "可用『加熱蒸發』把水和鹽分開，因為食鹽水是混合物",
            "必須用『電解』才能把水和鹽分開",
            "食鹽水是化合物，無法用物理方法分離",
            "蒸發後留下的食鹽是混合物"
          ],
          "answer": 0,
          "explanation": "食鹽水是『混合物』，鹽與水只是混合並未化學結合，可用蒸發(物理方法)把水蒸走、留下食鹽而分離。電解是用來分解化合物(如電解水得氫氧)的方法。留下的食鹽(NaCl)是純物質中的化合物。",
          "trap": "混合物用『物理方法』即可分離(蒸發、過濾等)，不需電解!電解是分解化合物用的，別把混合物當化合物處理。"
        },
        {
          "stem": "已知某純物質可以用通電的方法(電解)分解，產生兩種以上不同的物質。則關於此純物質的判斷，何者最正確?",
          "options": [
            "它是元素，因為純物質都是元素",
            "它是化合物，因為元素不能再被分解",
            "它是混合物，因為能分解成多種物質",
            "無法判斷其分類"
          ],
          "answer": 1,
          "explanation": "純物質分為元素與化合物。元素無法再用化學方法分解成更簡單的物質;若一純物質能被電解(化學方法)分解成兩種以上物質，表示它由不同元素組成，故為化合物(如水電解成氫與氧)。",
          "trap": "能被分解成多種物質的純物質是『化合物』不是混合物!混合物用物理方法即可分離，而這裡是用通電的化學分解，且原本是純物質。"
        }
      ]
    },
    {
      "id": "c-reaction-mass",
      "name": "化學反應與質量守恆、化學計量",
      "sub": "physchem",
      "week": "上學期 11月",
      "notes": [
        {
          "h": "質量守恆與莫耳計算",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"150\" stroke=\"#3a342e\" stroke-width=\"3\"/><polygon points=\"160,40 150,55 170,55\" fill=\"#3a342e\"/><line x1=\"70\" y1=\"70\" x2=\"250\" y2=\"70\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"70\" y1=\"70\" x2=\"70\" y2=\"100\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"250\" y1=\"70\" x2=\"250\" y2=\"100\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"40\" y=\"100\" width=\"60\" height=\"30\" rx=\"5\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"70\" y=\"120\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">反應前</text><rect x=\"220\" y=\"100\" width=\"60\" height=\"30\" rx=\"5\" fill=\"#c9755c\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"250\" y=\"120\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">反應後</text><text x=\"160\" y=\"95\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">=</text><line x1=\"160\" y1=\"150\" x2=\"120\" y2=\"160\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"160\" y1=\"150\" x2=\"200\" y2=\"160\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"160\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">總質量不變</text></svg>",
          "caption": "反應前後總質量守恆",
          "points": [
            "質量守恆定律:化學反應前後，物質的『總質量』不變(原子種類與數目不變，只是重新組合)。",
            "莫耳數 = 質量 ÷ 莫耳質量(分子量)。1 莫耳任何物質含 6.02 × 10²³ 個粒子。",
            "平衡化學方程式時，箭號兩邊各元素原子數必須相等;係數比 = 莫耳數比 = 反應粒子數比。"
          ],
          "formula": "莫耳數 n = 質量 m ÷ 分子量 M",
          "trap": "質量守恆是『總質量』守恆，不是莫耳數守恆!反應前後莫耳數(分子數)常會改變，但總質量一定相等。"
        }
      ],
      "quiz": [
        {
          "stem": "氫氣與氧氣反應生成水:2H₂ + O₂ → 2H₂O。若有 4 g 氫氣完全反應(H 原子量 = 1，O 原子量 = 16)，則需消耗多少克氧氣，並生成多少克水?",
          "options": [
            "消耗 16 g 氧氣，生成 20 g 水",
            "消耗 32 g 氧氣，生成 36 g 水",
            "消耗 32 g 氧氣，生成 18 g 水",
            "消耗 64 g 氧氣，生成 68 g 水"
          ],
          "answer": 1,
          "explanation": "H₂ 分子量 = 2，4 g 氫氣 = 4/2 = 2 莫耳。由係數比 2H₂:O₂:2H₂O = 2:1:2，2 莫耳 H₂ 需 1 莫耳 O₂、生成 2 莫耳 H₂O。O₂ 分子量 = 32，需 1 × 32 = 32 g;H₂O 分子量 = 18，生成 2 × 18 = 36 g。驗證質量守恆:4 + 32 = 36 ✓。",
          "trap": "係數是『莫耳數比』不是質量比!要先把克數換成莫耳數，按係數比算另一物的莫耳數，再乘以它的分子量換回克數。"
        },
        {
          "stem": "將 100 g 的碳酸鈣(CaCO₃)完全加熱分解:CaCO₃ → CaO + CO₂↑。已知 CaCO₃ 分子量 = 100、CaO 分子量 = 56、CO₂ 分子量 = 44。則反應後剩下的固體(CaO)質量，以及逸出氣體(CO₂)的質量各為何?",
          "options": [
            "固體 100 g、氣體 0 g",
            "固體 44 g、氣體 56 g",
            "固體 56 g、氣體 44 g",
            "固體 56 g、氣體 56 g"
          ],
          "answer": 2,
          "explanation": "100 g CaCO₃ = 100/100 = 1 莫耳。係數比 1:1:1，生成 1 莫耳 CaO 與 1 莫耳 CO₂。CaO 質量 = 1 × 56 = 56 g(剩下的固體);CO₂ 質量 = 1 × 44 = 44 g(逸出氣體)。質量守恆:56 + 44 = 100 g ✓，與原 CaCO₃ 相等。",
          "trap": "加熱後固體變輕『不是質量消失』!減少的 44 g 是以 CO₂ 氣體逸散到空氣中，總質量(含氣體)仍守恆為 100 g。"
        },
        {
          "stem": "在密閉容器中將 12 g 碳與 32 g 氧氣完全反應生成二氧化碳:C + O₂ → CO₂(C 原子量 12、O 原子量 16)。反應後若仍在密閉容器內測量，下列關於容器內總質量的敘述何者正確?",
          "options": [
            "總質量為 44 g，因為生成 44 g 的 CO₂",
            "總質量為 32 g，因為碳被燒掉消失了",
            "總質量為 12 g，只剩下未變的碳",
            "總質量為 88 g，反應後質量加倍"
          ],
          "answer": 0,
          "explanation": "12 g C = 1 莫耳，32 g O₂ = 1 莫耳，恰好按 1:1 完全反應，生成 1 莫耳 CO₂ = 44 g。在密閉容器中氣體無法逸散，由質量守恆，反應後總質量 = 反應前總質量 = 12 + 32 = 44 g，正好等於生成的 CO₂ 質量。",
          "trap": "碳燃燒『不是消失』!它和氧結合變成 CO₂。密閉容器中氣體跑不掉，總質量守恆為 12+32=44 g，不會減少也不會加倍。"
        },
        {
          "stem": "鎂在空氣中燃燒:2Mg + O₂ → 2MgO(Mg 原子量 24、O 原子量 16)。若取 6 g 鎂帶在開放空間完全燃燒，則生成的氧化鎂(MgO)質量為何?",
          "options": [
            "4 g，因為燃燒會使質量減少",
            "6 g，質量不變",
            "10 g，因為鎂與氧結合質量增加",
            "16 g"
          ],
          "answer": 2,
          "explanation": "6 g Mg = 6/24 = 0.25 莫耳。由係數比 2Mg:2MgO = 1:1，生成 0.25 莫耳 MgO。MgO 分子量 = 24 + 16 = 40，故 MgO 質量 = 0.25 × 40 = 10 g。增加的 4 g 來自與鎂結合的氧。",
          "trap": "鎂燃燒後質量『增加』不是減少!因為它從空氣中結合了氧。增加的 4 g 正是參與反應的氧質量(質量守恆)。"
        }
      ]
    },
    {
      "id": "c-acid-base",
      "name": "溶液與酸鹼鹽",
      "sub": "physchem",
      "week": "下學期 3月",
      "notes": [
        {
          "h": "酸鹼性質、pH 與中和",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><rect x=\"30\" y=\"70\" width=\"86\" height=\"30\" fill=\"#c9755c\" fill-opacity=\"0.55\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"116\" y=\"70\" width=\"88\" height=\"30\" fill=\"#f0a52e\" fill-opacity=\"0.4\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"204\" y=\"70\" width=\"86\" height=\"30\" fill=\"#5aa874\" fill-opacity=\"0.5\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"30\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">0</text><text x=\"154\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">7</text><text x=\"278\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">14</text><line x1=\"160\" y1=\"66\" x2=\"160\" y2=\"104\" stroke=\"#3a342e\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\"/><text x=\"73\" y=\"128\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">酸性 H⁺</text><text x=\"160\" y=\"128\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">中性</text><text x=\"247\" y=\"128\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">鹼性 OH⁻</text><text x=\"160\" y=\"154\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">酸 + 鹼 → 鹽 + 水</text><text x=\"160\" y=\"26\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">pH 值</text></svg>",
          "caption": "pH 值與酸鹼中和",
          "points": [
            "酸:水溶液含 H⁺，pH < 7，使藍色石蕊變紅;鹼:水溶液含 OH⁻，pH > 7，使紅色石蕊變藍。中性 pH = 7。",
            "pH 越小酸性越強。pH 每差 1，[H⁺] 相差 10 倍(如 pH 2 的酸性是 pH 4 的 100 倍)。",
            "中和反應:酸 + 鹼 → 鹽 + 水，例如 HCl + NaOH → NaCl + H₂O。中和為放熱反應。"
          ],
          "formula": "酸 + 鹼 → 鹽 + 水",
          "trap": "pH 是『差 1 差 10 倍』的指數關係!pH 從 5 變 3 不是酸性多 2 倍，而是 10 × 10 = 100 倍。"
        }
      ],
      "quiz": [
        {
          "stem": "甲、乙兩杯溶液，甲的 pH = 2、乙的 pH = 5。下列關於兩溶液氫離子濃度的比較，何者正確?",
          "options": [
            "甲的氫離子濃度是乙的 3 倍",
            "甲的氫離子濃度是乙的 30 倍",
            "甲的氫離子濃度是乙的 1000 倍",
            "乙的氫離子濃度是甲的 1000 倍"
          ],
          "answer": 2,
          "explanation": "pH 每相差 1，氫離子濃度 [H⁺] 相差 10 倍。pH 2 與 pH 5 相差 3，故 [H⁺] 相差 10³ = 1000 倍。pH 越小酸性越強、[H⁺] 越大，所以甲(pH 2)的 [H⁺] 是乙(pH 5)的 1000 倍。",
          "trap": "pH 差 3 不是 3 倍，是 10³ = 1000 倍!而且 pH 小的氫離子濃度『大』，方向別弄反。"
        },
        {
          "stem": "取濃度 0.1 M 的鹽酸(HCl)200 mL，與濃度 0.1 M 的氫氧化鈉(NaOH)100 mL 混合。混合後溶液呈何性質?",
          "options": [
            "中性，因酸鹼恰好完全中和",
            "酸性，因鹽酸過量",
            "鹼性，因氫氧化鈉過量",
            "鹼性，因生成的鹽呈鹼性"
          ],
          "answer": 1,
          "explanation": "HCl 莫耳數 = 0.1 M × 0.2 L = 0.02 莫耳;NaOH 莫耳數 = 0.1 M × 0.1 L = 0.01 莫耳。中和反應 HCl + NaOH 為 1:1，0.01 莫耳 NaOH 只能中和 0.01 莫耳 HCl，尚有 0.02 − 0.01 = 0.01 莫耳 HCl 過量。故溶液中仍有過量 H⁺，呈酸性。",
          "trap": "濃度相同不代表恰好中和!要比較『莫耳數』(濃度×體積)。HCl 體積較大莫耳數較多，故酸過量呈酸性。"
        },
        {
          "stem": "向裝有 50 mL、0.2 M 鹽酸的燒杯中，逐滴加入 0.2 M 的氫氧化鈉溶液並持續攪拌。當加入的 NaOH 體積恰為多少 mL 時，溶液剛好達到中性?",
          "options": [
            "25 mL",
            "50 mL",
            "100 mL",
            "200 mL"
          ],
          "answer": 1,
          "explanation": "HCl 莫耳數 = 0.2 M × 0.05 L = 0.01 莫耳。中和為 1:1，需要 0.01 莫耳 NaOH。NaOH 濃度為 0.2 M，所需體積 = 莫耳數/濃度 = 0.01/0.2 = 0.05 L = 50 mL。此時 H⁺ 與 OH⁻ 恰好完全反應，溶液呈中性。",
          "trap": "兩者濃度相同(0.2 M)，所以中和體積要『相等』(50 mL)，不是減半!別被 25 mL 的陷阱誘導。"
        },
        {
          "stem": "在一杯藍色石蕊試液(鹼性)中，逐滴加入某酸並攪拌，溶液最後變成紅色。關於此過程，下列敘述何者正確?",
          "options": [
            "整個過程都是放熱反應，且最後溶液中 H⁺ 已過量",
            "此為吸熱反應，加酸後溫度下降",
            "溶液變紅表示鹼仍然過量",
            "中和反應結束後不會再有任何離子存在"
          ],
          "answer": 0,
          "explanation": "酸鹼中和為放熱反應，加酸過程會放熱使溫度略升。溶液由藍變紅，表示已從鹼性變為酸性，代表加入的酸已把鹼完全中和並使 H⁺ 過量(石蕊遇酸變紅)。中和後溶液中仍有鹽類解離的離子(如 Na⁺、Cl⁻)存在。",
          "trap": "石蕊『變紅』代表酸性、酸已過量，不是鹼過量!且中和是放熱不是吸熱;中和後水中仍有鹽的離子，不是沒有離子。"
        }
      ]
    },
    {
      "id": "c-redox-energy",
      "name": "氧化還原、電池與有機化合物能源",
      "sub": "physchem",
      "week": "下學期 4月",
      "notes": [
        {
          "h": "氧化還原與電池",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><path d=\"M40 90 Q40 140 90 140 L230 140 Q280 140 280 90\" fill=\"none\" stroke=\"#3a342e\" stroke-width=\"2\"/><rect x=\"55\" y=\"50\" width=\"20\" height=\"70\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"65\" y=\"44\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">鋅(−)</text><rect x=\"245\" y=\"50\" width=\"20\" height=\"70\" fill=\"#c9755c\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"255\" y=\"44\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">銅(+)</text><line x1=\"65\" y1=\"50\" x2=\"65\" y2=\"22\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"255\" y1=\"50\" x2=\"255\" y2=\"22\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"65\" y1=\"22\" x2=\"255\" y2=\"22\" stroke=\"#3a342e\" stroke-width=\"2\"/><line x1=\"80\" y1=\"14\" x2=\"240\" y2=\"14\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><polygon points=\"240,14 230,9 230,19\" fill=\"#c9755c\"/><text x=\"160\" y=\"10\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">電子 e⁻</text><text x=\"160\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">稀硫酸</text><text x=\"65\" y=\"135\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">氧化</text></svg>",
          "caption": "鋅銅電池 電子由負流向正",
          "points": [
            "氧化:得到氧或失去電子;還原:失去氧或得到電子。氧化與還原必同時發生。",
            "燃燒、生鏽、呼吸都是氧化反應;金屬活性大者較易被氧化(易失去電子)。",
            "電池(化學電池):利用氧化還原反應將化學能轉換為電能;活性大的金屬當負極(被氧化)。"
          ],
          "trap": "氧化還原一定『成對』發生!有物質被氧化，必有另一物質同時被還原，不會單獨只發生一種。"
        },
        {
          "h": "有機化合物與能源",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f3e7df\"/><polygon points=\"40,140 90,40 140,140\" fill=\"#f0a52e\" fill-opacity=\"0.5\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"90\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">充足O₂</text><text x=\"90\" y=\"110\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">完全燃燒</text><text x=\"90\" y=\"128\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">CO₂+H₂O</text><polygon points=\"190,140 230,55 270,140\" fill=\"#3a342e\" fill-opacity=\"0.35\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"230\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">缺O₂</text><text x=\"230\" y=\"110\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">不完全燃燒</text><text x=\"230\" y=\"128\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#d98072\" text-anchor=\"middle\">有毒 CO</text><text x=\"160\" y=\"26\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">燃燒與供氧量</text></svg>",
          "caption": "缺氧不完全燃燒生成有毒CO",
          "points": [
            "有機化合物以碳為主架構，多含碳、氫(如甲烷 CH₄、酒精、葡萄糖)。化石燃料(煤、石油、天然氣)燃燒釋放能量但產生 CO₂。",
            "燃燒(完全氧化)生成 CO₂ 與 H₂O 並放熱;不完全燃燒則產生有毒的一氧化碳 CO。",
            "再生能源(太陽能、風力、水力)較環保;核能不排碳但有輻射廢料問題。"
          ],
          "trap": "不完全燃燒產生的是『CO(一氧化碳)』有毒!別和完全燃燒的 CO₂(二氧化碳)搞混，氧氣不足才會生成 CO。"
        }
      ],
      "quiz": [
        {
          "stem": "將鋅片與銅片插入稀硫酸中並以導線連接，形成簡單電池。關於此電池,下列敘述何者正確?(已知活性:鋅 > 銅)",
          "options": [
            "銅片為負極，被氧化",
            "鋅片為負極，被氧化，電子由鋅片經導線流向銅片",
            "鋅片為正極，被還原",
            "電子由銅片經導線流向鋅片"
          ],
          "answer": 1,
          "explanation": "活性大的金屬較易失去電子(被氧化)而當負極。鋅活性大於銅，故鋅片為負極、被氧化(Zn → Zn²⁺ + 2e⁻)，放出的電子經由外部導線流向銅片(正極)。銅片為正極，溶液中的 H⁺ 在此得到電子被還原放出氫氣。",
          "trap": "電子在『外部導線』中由負極(鋅)流向正極(銅)!別與電流方向搞反(電流方向與電子流動方向相反)。活性大的當負極被氧化。"
        },
        {
          "stem": "關於含碳燃料的燃燒，下列敘述何者正確?",
          "options": [
            "完全燃燒會產生有毒的一氧化碳",
            "氧氣供應不足時容易發生不完全燃燒，產生有毒的一氧化碳",
            "燃燒是吸熱反應，會使周圍溫度下降",
            "不完全燃燒釋放的能量比完全燃燒多"
          ],
          "answer": 1,
          "explanation": "含碳燃料在氧氣充足時『完全燃燒』，生成二氧化碳(CO₂)與水並放出大量熱;氧氣不足時發生『不完全燃燒』，產生有毒的一氧化碳(CO)、甚至碳粒(黑煙)，且釋放的能量較少。燃燒是放熱反應，會使周圍溫度上升。",
          "trap": "產生有毒 CO 的是『不完全』燃燒(缺氧)，不是完全燃燒!而且不完全燃燒釋放的能量反而較『少』，不是較多。"
        },
        {
          "stem": "下列各反應或現象中，畫底線物質『被氧化』的是哪一個?(甲)鐵釘生鏽(Fe→Fe₂O₃)、(乙)氧化銅被氫氣還原(CuO→Cu)、(丙)木炭燃燒(C→CO₂)、(丁)氧化汞受熱分解放出氧(HgO→Hg)。哪些物質的『該元素』被氧化?",
          "options": [
            "只有甲",
            "甲和丙",
            "乙和丁",
            "甲、乙、丙、丁都被氧化"
          ],
          "answer": 1,
          "explanation": "氧化是『得到氧或失去電子』。甲:鐵 Fe 得到氧變 Fe₂O₃，鐵被氧化。丙:碳 C 得到氧變 CO₂，碳被氧化。乙:CuO 中的銅失去氧變成 Cu，是被『還原』。丁:HgO 中的汞失去氧變成 Hg，也是被『還原』。故被氧化的是甲和丙。",
          "trap": "得到氧才是被氧化!乙、丁是物質『失去氧』屬於被還原，方向相反。別看到反應有氧參與就全當氧化。"
        },
        {
          "stem": "關於各種能源的特性，下列敘述何者正確?",
          "options": [
            "燃燒天然氣不會排放二氧化碳，是零碳能源",
            "太陽能、風力、水力屬於再生能源，使用時不直接排放二氧化碳",
            "核能發電會排放大量二氧化碳，是溫室氣體主因",
            "化石燃料屬於再生能源，可不斷再生使用"
          ],
          "answer": 1,
          "explanation": "太陽能、風力、水力等再生能源可持續取得，發電時不直接燃燒、不排放二氧化碳，較為環保。天然氣屬化石燃料，燃燒會產生 CO₂。核能發電本身不排放二氧化碳，但有輻射廢料問題。化石燃料(煤、石油、天然氣)蘊藏有限、會耗盡，屬非再生能源。",
          "trap": "天然氣是化石燃料『仍會排碳』，不是零碳!核能反而『不排碳』(陷阱在輻射廢料);化石燃料是非再生能源，會用完。"
        }
      ]
    },
    {
      "id": "b-cell",
      "name": "細胞與生命",
      "sub": "biology",
      "week": "下學期 2月",
      "notes": [
        {
          "h": "細胞構造與功能",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"170\" y=\"20\" width=\"135\" height=\"140\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"3\"/><text x=\"237\" y=\"14\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">植物細胞</text><ellipse cx=\"80\" cy=\"90\" rx=\"62\" ry=\"68\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"80\" y=\"14\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">動物細胞</text><circle cx=\"80\" cy=\"90\" r=\"20\" fill=\"#c9755c\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"80\" y=\"94\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">核</text><ellipse cx=\"80\" cy=\"135\" rx=\"14\" ry=\"7\" fill=\"#5aa874\" stroke=\"#3a342e\"/><text x=\"80\" y=\"162\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">粒線體</text><circle cx=\"237\" cy=\"80\" r=\"18\" fill=\"#c9755c\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"237\" y=\"84\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">核</text><ellipse cx=\"285\" cy=\"58\" rx=\"13\" ry=\"8\" fill=\"#5aa874\" stroke=\"#3a342e\"/><text x=\"262\" y=\"44\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">葉綠體</text><rect x=\"200\" y=\"108\" width=\"40\" height=\"34\" rx=\"4\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><text x=\"220\" y=\"129\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">液胞</text></svg>",
          "caption": "動植物細胞構造比較：共有膜質核線體，植物多壁綠體大液胞。",
          "points": [
            "細胞是構成生物體的基本單位，動植物細胞都有細胞膜、細胞質與細胞核。",
            "細胞膜控制物質進出，具有選擇性通透；細胞核內含遺傳物質(DNA)，控制細胞活動。",
            "粒線體是行呼吸作用、產生能量的胞器；植物細胞另有葉綠體(光合作用)、細胞壁(支持)與大液胞。",
            "細胞核、葉綠體、粒線體是動植物細胞中能用顯微鏡較易觀察的構造。"
          ],
          "trap": "細胞壁與細胞膜不同：植物才有細胞壁(在膜外、提供支持)，但動植物都有細胞膜。"
        },
        {
          "h": "顯微鏡與生命現象",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"30\" width=\"100\" height=\"120\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"90\" y=\"22\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">視野</text><circle cx=\"118\" cy=\"128\" r=\"10\" fill=\"#c9755c\" stroke=\"#3a342e\"/><text x=\"90\" y=\"166\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">像在右下</text><line x1=\"180\" y1=\"90\" x2=\"250\" y2=\"90\" stroke=\"#5aa874\" stroke-width=\"2.5\"/><polygon points=\"250,90 240,85 240,95\" fill=\"#5aa874\"/><text x=\"215\" y=\"82\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">玻片</text><line x1=\"260\" y1=\"40\" x2=\"300\" y2=\"80\" stroke=\"#c9755c\" stroke-width=\"3\"/><polygon points=\"300,80 288,78 292,68\" fill=\"#c9755c\"/><text x=\"282\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">玻片往右下</text><text x=\"282\" y=\"134\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">像回中央</text></svg>",
          "caption": "成像顛倒：像在右下，玻片往右下(同向)移，像才回中央。",
          "points": [
            "複式顯微鏡總放大倍率＝目鏡倍率×物鏡倍率；倍率愈大，視野愈小、愈暗。",
            "低倍率先對焦再轉高倍率；高倍率只能用細調節輪，避免壓破玻片。",
            "成像上下左右皆顛倒：要把偏一側的物像移到中央，玻片須往該物像所在的『同方向』移動(像在右下就把玻片往右下推)。",
            "生命現象包括：生長、代謝(營養與呼吸)、生殖、感應與運動等。"
          ],
          "formula": "總放大倍率 = 目鏡倍率 × 物鏡倍率",
          "trap": "成像顛倒：玻片往右移、像反而往左跑。所以要把『右下方』的像移到中央，玻片要往右下方(同向)推。"
        }
      ],
      "quiz": [
        {
          "stem": "小明用顯微鏡觀察葉片表皮，先在物鏡10倍下看到位於視野「右下方」的氣孔，想將它移到視野中央，再轉40倍觀察。下列操作何者正確？",
          "options": [
            "玻片往左上方移動，再轉高倍率",
            "玻片往右下方移動，再轉高倍率",
            "玻片往右下方移動，並使用粗調節輪對焦",
            "玻片不動，直接轉高倍率並用粗調節輪"
          ],
          "answer": 1,
          "explanation": "複式顯微鏡成像上下左右皆顛倒，故玻片往右移時視野中的像會往左移。氣孔的像在『右下方』，要把它移到中央，必須將玻片往『右下方』(與像同方向)移動，像才會往左上方回到中央。轉高倍率後只能用細調節輪，粗調節輪易壓破玻片，故選B。",
          "trap": "成像顛倒使『玻片移動方向』與『像移動方向』相反，所以像在右下要把玻片往右下推(同向)；且高倍率嚴禁用粗調節輪。"
        },
        {
          "stem": "下列關於動物細胞與植物細胞共同具有的構造，何者正確？",
          "options": [
            "細胞壁、葉綠體、細胞膜",
            "細胞膜、細胞質、細胞核",
            "葉綠體、大液胞、粒線體",
            "細胞壁、細胞核、粒線體"
          ],
          "answer": 1,
          "explanation": "細胞膜、細胞質、細胞核、粒線體為動植物細胞共有；細胞壁、葉綠體、大液胞為植物細胞特有。選項B三者皆為共有，故選B。",
          "trap": "粒線體雖共有，但選項D含『細胞壁』(植物專有)故錯；只有B完全是共有構造。"
        },
        {
          "stem": "某學生用目鏡10倍、物鏡10倍觀察某細胞後，改用物鏡40倍重新觀察(目鏡不變)。關於改用高倍率後視野的變化，下列敘述何者完全正確？",
          "options": [
            "總放大倍率由100倍變為400倍，視野範圍變小且變暗",
            "總放大倍率由100倍變為50倍，視野範圍變大且變亮",
            "總放大倍率不變，只是視野變暗",
            "總放大倍率變為400倍，但視野範圍變大、變亮"
          ],
          "answer": 0,
          "explanation": "總放大倍率＝目鏡×物鏡。原為10×10=100倍，改物鏡40倍後為10×40=400倍。放大倍率愈高，所見範圍(視野)愈小、進入的光愈少而愈暗。故選A。",
          "trap": "倍率變高時『看得更大』但『看到的範圍更小』、且更暗，三者要一起判斷；別誤以為放大就看得更廣更亮。"
        },
        {
          "stem": "甲、乙、丙三種敘述：甲『種子發芽長成幼苗』、乙『含羞草受觸碰葉片閉合』、丙『鐵釘放久生鏽』。其中屬於『生命現象』的有哪些？",
          "options": [
            "只有甲",
            "甲與乙",
            "乙與丙",
            "甲、乙、丙皆是"
          ],
          "answer": 1,
          "explanation": "生命現象包括生長、代謝、生殖、感應與運動等。甲『發芽長成幼苗』是生長(生命現象)；乙『受刺激葉片閉合』是感應(生命現象)；丙鐵釘生鏽是金屬氧化的化學變化，鐵釘非生物、無生命現象。故甲與乙符合，選B。",
          "trap": "會『變化』不等於有生命：生鏽是化學變化而非生命現象；要看主體是不是生物、有沒有生長/感應/代謝等特徵。"
        }
      ]
    },
    {
      "id": "b-organization",
      "name": "生物體的組成層次",
      "sub": "biology",
      "week": "下學期 2月",
      "notes": [
        {
          "h": "從細胞到個體",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"35\" cy=\"90\" r=\"14\" fill=\"#5aa874\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"35\" y=\"125\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">細胞</text><circle cx=\"95\" cy=\"84\" r=\"7\" fill=\"#5aa874\" stroke=\"#3a342e\"/><circle cx=\"110\" cy=\"92\" r=\"7\" fill=\"#5aa874\" stroke=\"#3a342e\"/><circle cx=\"100\" cy=\"100\" r=\"7\" fill=\"#5aa874\" stroke=\"#3a342e\"/><text x=\"102\" y=\"125\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">組織</text><rect x=\"148\" y=\"74\" width=\"34\" height=\"34\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"165\" y=\"125\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">器官</text><rect x=\"210\" y=\"68\" width=\"20\" height=\"46\" rx=\"4\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><rect x=\"234\" y=\"68\" width=\"20\" height=\"46\" rx=\"4\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><text x=\"232\" y=\"125\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">系統</text><circle cx=\"292\" cy=\"78\" r=\"9\" fill=\"#3a342e\"/><rect x=\"287\" y=\"86\" width=\"10\" height=\"22\" fill=\"#3a342e\"/><text x=\"292\" y=\"125\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">個體</text><line x1=\"52\" y1=\"90\" x2=\"78\" y2=\"90\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><polygon points=\"78,90 70,86 70,94\" fill=\"#c9755c\"/><line x1=\"120\" y1=\"90\" x2=\"144\" y2=\"90\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><polygon points=\"144,90 136,86 136,94\" fill=\"#c9755c\"/><line x1=\"184\" y1=\"90\" x2=\"206\" y2=\"90\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><polygon points=\"206,90 198,86 198,94\" fill=\"#c9755c\"/><line x1=\"258\" y1=\"90\" x2=\"278\" y2=\"90\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><polygon points=\"278,90 270,86 270,94\" fill=\"#c9755c\"/><text x=\"160\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">組成層次由小到大</text></svg>",
          "caption": "組成層次由小到大：細胞→組織→器官→系統→個體。",
          "points": [
            "多細胞生物組成層次：細胞→組織→器官→器官系統→個體。",
            "組織是形態相似、功能相同的細胞集合(如動物上皮、肌肉、神經、結締組織)。",
            "植物組織包括分生組織、表皮、輸導(維管束)等；器官如根、莖、葉、花。",
            "單細胞生物(如變形蟲、草履蟲)以一個細胞完成所有生命功能。"
          ],
          "trap": "『器官系統』由多個器官合作完成特定功能(如消化系統)；不要把器官與系統混為一談。"
        }
      ],
      "quiz": [
        {
          "stem": "下列何者正確描述多細胞動物由小到大的組成層次？",
          "options": [
            "細胞→器官→組織→系統→個體",
            "細胞→組織→器官→系統→個體",
            "組織→細胞→器官→系統→個體",
            "細胞→系統→器官→組織→個體"
          ],
          "answer": 1,
          "explanation": "正確層次為細胞→組織→器官→器官系統→個體。相似細胞組成組織，不同組織組成器官，器官合作成系統，系統組成個體。故選B。",
          "trap": "組織在器官之前；常見錯誤是把組織與器官順序顛倒。"
        },
        {
          "stem": "草履蟲沒有消化系統、循環系統等構造，卻仍能完成攝食、消化、排泄等功能，最主要的原因是？",
          "options": [
            "牠的細胞特別大且分化複雜",
            "牠是多細胞生物，細胞間分工合作",
            "牠是單細胞生物，由一個細胞完成所有生命功能",
            "牠寄生在其他生物體內，靠宿主供應"
          ],
          "answer": 2,
          "explanation": "草履蟲為單細胞生物，整個個體只有一個細胞，所有生命功能(攝食、消化、運動、排泄等)都在這個細胞內由不同胞器分工完成，不需組織器官層次。故選C。",
          "trap": "單細胞生物沒有『組織、器官』層次，但仍有胞器分工；別誤以為牠需要器官系統。"
        },
        {
          "stem": "下列關於人體中『胃』的層次判斷，何者正確？",
          "options": [
            "胃只由單一種細胞組成，屬於『組織』",
            "胃含上皮、肌肉、神經等多種組織，屬於『器官』",
            "胃就是整個消化系統，屬於『器官系統』",
            "胃是消化系統中的一個細胞"
          ],
          "answer": 1,
          "explanation": "胃由上皮組織、肌肉組織、神經組織、結締組織等『多種組織』共同構成，能完成磨碎與初步消化的特定功能，屬於『器官』層次。多個器官(口、胃、小腸、肝…)合作才構成消化『系統』。故選B。",
          "trap": "器官由『多種組織』組成、非單一細胞或單一組織；胃只是消化系統中的一個器官，不等於整個系統。"
        },
        {
          "stem": "葉是植物進行光合作用的主要器官。下列關於『葉是器官』的判斷依據，何者最正確？",
          "options": [
            "葉只由一種表皮細胞構成，所以是組織",
            "葉含表皮、葉肉、輸導(維管束)等多種組織，協同完成光合與運輸功能",
            "葉是植物體中最小的構造單位",
            "葉等同於整株植物的全部系統"
          ],
          "answer": 1,
          "explanation": "葉同時含有表皮組織、葉肉(行光合)、維管束(輸導水分與養分)等多種組織，彼此協同完成光合作用與物質運輸，符合『器官』由多種組織組成並執行特定功能的定義。故選B。",
          "trap": "判斷器官的關鍵是『由多種組織組成、執行特定功能』；葉不是單一組織，也不是最小單位(細胞才是)。"
        }
      ]
    },
    {
      "id": "b-nutrition",
      "name": "營養：光合作用與消化",
      "sub": "biology",
      "week": "下學期 3月",
      "notes": [
        {
          "h": "光合作用",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"40\" r=\"20\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"50\" y1=\"62\" x2=\"120\" y2=\"95\" stroke=\"#f0a52e\" stroke-width=\"1.5\"/><line x1=\"42\" y1=\"62\" x2=\"105\" y2=\"100\" stroke=\"#f0a52e\" stroke-width=\"1.5\"/><text x=\"50\" y=\"44\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">光</text><path d=\"M120 110 Q160 70 200 110 Q160 130 120 110 Z\" fill=\"#5aa874\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"160\" y=\"114\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">葉綠體</text><text x=\"45\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">CO₂</text><text x=\"40\" y=\"142\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">水</text><line x1=\"80\" y1=\"114\" x2=\"118\" y2=\"110\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><polygon points=\"118,110 109,107 110,114\" fill=\"#3a342e\"/><line x1=\"202\" y1=\"105\" x2=\"245\" y2=\"95\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"245,95 235,93 238,101\" fill=\"#c9755c\"/><text x=\"278\" y=\"92\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">氧氣</text><line x1=\"202\" y1=\"118\" x2=\"245\" y2=\"128\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"245,128 235,123 235,131\" fill=\"#c9755c\"/><text x=\"265\" y=\"132\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">葡萄糖</text></svg>",
          "caption": "光合作用：吸CO₂與水，放氧氣並製造葡萄糖。",
          "points": [
            "植物利用葉綠體在光照下，把二氧化碳與水轉變成葡萄糖(養分)並釋放氧氣。",
            "光合作用的能量來源是光能，最終轉成葡萄糖中的化學能。",
            "葉是主要行光合作用的器官；葉綠素吸收光，氣孔是氣體進出通道。"
          ],
          "formula": "二氧化碳 + 水 →(光、葉綠體) 葡萄糖 + 氧氣",
          "trap": "光合作用『放出氧、吸收二氧化碳』；呼吸作用相反。植物無時無刻都在呼吸，只有照光時才行光合作用。"
        },
        {
          "h": "人體消化",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"50\" cy=\"35\" rx=\"24\" ry=\"16\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"50\" y=\"40\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">口腔</text><text x=\"95\" y=\"40\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">澱粉</text><path d=\"M50 51 Q50 75 90 80\" fill=\"none\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><ellipse cx=\"120\" cy=\"82\" rx=\"30\" ry=\"20\" fill=\"#c9755c\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"120\" y=\"86\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">胃</text><text x=\"120\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">蛋白質</text><path d=\"M150 90 Q200 100 200 130 Q200 150 240 150\" fill=\"none\" stroke=\"#5aa874\" stroke-width=\"6\"/><text x=\"255\" y=\"150\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">小腸</text><text x=\"230\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">脂質+吸收</text></svg>",
          "caption": "消化起點：澱粉口腔、蛋白質胃、脂質小腸；小腸主吸收。",
          "points": [
            "消化分機械性(咀嚼、蠕動)與化學性(酵素分解)。",
            "澱粉由唾液澱粉酶開始分解；蛋白質從胃開始消化；脂質在小腸內被膽汁乳化後分解。",
            "小腸是養分消化與吸收的主要場所，內壁有絨毛增加吸收表面積。",
            "膽汁由肝臟製造、儲存於膽囊，能乳化脂肪(不是酵素)。"
          ],
          "trap": "膽汁能乳化脂肪但不含消化酵素，本身不分解任何養分；澱粉的消化從口腔就開始，蛋白質從胃才開始。"
        }
      ],
      "quiz": [
        {
          "stem": "將一盆植物先放在黑暗中48小時，再讓某一片葉子的一半遮光、另一半照光數小時後，以碘液檢驗葉片澱粉。結果照光部分變藍黑色，遮光部分不變色。此實驗最能說明？",
          "options": [
            "光合作用需要二氧化碳",
            "光合作用需要光",
            "光合作用需要葉綠素",
            "光合作用會放出氧氣"
          ],
          "answer": 1,
          "explanation": "實驗中唯一不同的變因是『有無照光』(遮光vs照光)，其餘條件相同。照光處產生澱粉(碘液變藍黑)，遮光處沒有，故證明光合作用需要光。要先暗處理是為了消耗葉中原有澱粉。故選B。",
          "trap": "此設計的變因只控制『光』；要證明需要葉綠素須用斑葉，證明需二氧化碳須控制CO₂，別被選項混淆。"
        },
        {
          "stem": "某人膽囊被切除後，醫師提醒他要少吃油膩食物。最主要的原因是？",
          "options": [
            "膽汁中的酵素無法再分解澱粉",
            "失去膽汁乳化脂肪的功能，脂肪較難被消化吸收",
            "胃酸分泌減少，無法殺菌",
            "小腸絨毛消失，無法吸收養分"
          ],
          "answer": 1,
          "explanation": "膽汁由肝臟製造、儲存於膽囊，可乳化脂肪使其變成小油滴、增加與脂肪酶接觸面積，幫助脂肪消化。膽囊切除後膽汁儲存與釋放受影響，脂肪消化效率下降，故須少吃油膩食物。故選B。",
          "trap": "膽汁『乳化』脂肪但本身無酵素，故A錯(膽汁不分解澱粉)；膽囊與胃酸、絨毛無直接關係。"
        },
        {
          "stem": "把等量澱粉糊分裝甲、乙兩試管：甲加入新鮮唾液、乙加入等量清水，同置37°C水浴10分鐘後各滴入碘液。最可能的結果與解釋為何？",
          "options": [
            "甲、乙都變藍黑，因澱粉都未被分解",
            "甲不變藍黑、乙變藍黑，因甲中唾液澱粉酶把澱粉分解了",
            "甲變藍黑、乙不變藍黑，因清水能分解澱粉",
            "甲、乙都不變藍黑，因37°C下澱粉自行消失"
          ],
          "answer": 1,
          "explanation": "碘液遇澱粉變藍黑。甲管唾液含澱粉酶，在37°C(接近體溫、酵素最適溫)下把澱粉分解成麥芽糖，澱粉減少故碘液『不』變藍黑；乙管只有清水無酵素，澱粉仍在，碘液變藍黑。故選B。",
          "trap": "變藍黑代表『還有澱粉』、不變色代表『澱粉被分解』；別把顏色判讀方向弄反，清水本身不會分解澱粉。"
        },
        {
          "stem": "下列關於人體三大營養素開始進行『化學消化』的部位，何者完全正確？",
          "options": [
            "澱粉在胃、蛋白質在口腔、脂質在小腸",
            "澱粉在口腔、蛋白質在胃、脂質在小腸",
            "三者都從胃開始消化",
            "三者都要到小腸才開始消化"
          ],
          "answer": 1,
          "explanation": "澱粉的化學消化從『口腔』唾液澱粉酶開始；蛋白質要到『胃』中由胃液(胃蛋白酶、需酸性)才開始分解；脂質則到『小腸』經膽汁乳化後由脂肪酶分解。故選B。",
          "trap": "三大營養素開始消化的部位各不相同；常見誤區是以為全都在胃或全都在小腸才開始。"
        }
      ]
    },
    {
      "id": "b-transport-circulation",
      "name": "運輸與循環",
      "sub": "biology",
      "week": "下學期 3月",
      "notes": [
        {
          "h": "植物的運輸",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"120\" y=\"20\" width=\"30\" height=\"140\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"2\"/><rect x=\"170\" y=\"20\" width=\"30\" height=\"140\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"135\" y=\"14\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">木質部</text><text x=\"185\" y=\"14\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">韌皮部</text><line x1=\"135\" y1=\"150\" x2=\"135\" y2=\"40\" stroke=\"#5aa874\" stroke-width=\"2.5\"/><polygon points=\"135,40 130,52 140,52\" fill=\"#5aa874\"/><text x=\"92\" y=\"95\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"end\">水分</text><text x=\"92\" y=\"110\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"end\">向上</text><line x1=\"185\" y1=\"60\" x2=\"185\" y2=\"120\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><polygon points=\"185,60 180,72 190,72\" fill=\"#c9755c\"/><polygon points=\"185,120 180,108 190,108\" fill=\"#c9755c\"/><text x=\"228\" y=\"95\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">養分</text><text x=\"228\" y=\"110\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">雙向</text></svg>",
          "caption": "木質部送水只向上，韌皮部送養分可雙向。",
          "points": [
            "維管束含木質部與韌皮部。木質部由根向上運送水分與無機鹽。",
            "韌皮部運送葉子光合作用製造的養分(可向上或向下)。",
            "蒸散作用由氣孔散失水分，是植物向上吸水的主要拉力來源。"
          ],
          "trap": "木質部『只向上』送水與礦物質；韌皮部送養分『可雙向』。常被考成方向顛倒。"
        },
        {
          "h": "人體的循環",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"130\" y=\"55\" width=\"60\" height=\"75\" rx=\"10\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"160\" y=\"96\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">心臟</text><circle cx=\"55\" cy=\"92\" r=\"24\" fill=\"#5aa874\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"55\" y=\"96\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">全身</text><circle cx=\"265\" cy=\"92\" r=\"24\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"265\" y=\"96\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">肺</text><line x1=\"130\" y1=\"75\" x2=\"79\" y2=\"80\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><polygon points=\"79,80 89,75 89,85\" fill=\"#c9755c\"/><text x=\"100\" y=\"66\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">動脈出</text><line x1=\"79\" y1=\"108\" x2=\"130\" y2=\"112\" stroke=\"#3a342e\" stroke-width=\"2.5\"/><polygon points=\"130,112 120,107 120,117\" fill=\"#3a342e\"/><text x=\"100\" y=\"130\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">靜脈回</text><line x1=\"190\" y1=\"75\" x2=\"241\" y2=\"80\" stroke=\"#3a342e\" stroke-width=\"2.5\"/><polygon points=\"241,80 231,75 231,85\" fill=\"#3a342e\"/><line x1=\"241\" y1=\"108\" x2=\"190\" y2=\"112\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><polygon points=\"190,112 200,107 200,117\" fill=\"#c9755c\"/><text x=\"160\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">動脈離心 靜脈回心</text></svg>",
          "caption": "動脈一律離心、靜脈一律回心，與含氧量無關。",
          "points": [
            "心臟分左右心房、左右心室；心室壁較厚負責輸出血液。",
            "體循環：左心室→主動脈→全身→上下大靜脈→右心房；肺循環：右心室→肺動脈→肺→肺靜脈→左心房。",
            "動脈把血液送離心臟、靜脈把血液送回心臟；血液在微血管進行物質交換。",
            "肺動脈流的是缺氧血、肺靜脈流的是充氧血(與體循環相反)。"
          ],
          "trap": "動脈≠一定是充氧血。肺動脈送的是缺氧血、肺靜脈送的是充氧血；判斷動脈靜脈要看『離心或回心』而非血液含氧量。"
        }
      ],
      "quiz": [
        {
          "stem": "在一段時間內，一根血管中的血液剛從某器官流出且含氧量明顯降低、二氧化碳升高，接著流回心臟。此血管最可能是？",
          "options": [
            "肺靜脈",
            "肺動脈",
            "上、下大靜脈",
            "主動脈"
          ],
          "answer": 2,
          "explanation": "『從器官流出、含氧降低、流回心臟』是體循環中組織把氧用掉後形成的缺氧血，經大靜脈回到右心房，故為上、下大靜脈。肺動脈雖也是缺氧血但它是離開心臟去肺；肺靜脈是充氧血；主動脈是充氧血。故選C。",
          "trap": "肺動脈也是缺氧血，但它是『離心』去肺，題目強調『流回心臟』，故選大靜脈而非肺動脈。"
        },
        {
          "stem": "有一棵樹被環狀剝皮(只去除樹皮、保留內部木質部)，一段時間後傷口『上方』樹皮處逐漸膨大。最合理的解釋是？",
          "options": [
            "木質部被切斷，水分堆積在上方",
            "韌皮部被切斷，葉子製造的養分往下運輸受阻而堆積在傷口上方",
            "蒸散作用停止，水分無法上升",
            "根吸收的礦物質堆積在上方"
          ],
          "answer": 1,
          "explanation": "樹皮含韌皮部，環狀剝皮切斷韌皮部，葉(位於上方)行光合作用製造的養分向下運輸時被阻擋，堆積在傷口上方，使該處膨大。木質部仍完整，水分仍可上升，故樹短期不死。故選B。",
          "trap": "膨大在『上方』是因養分由上往下運被擋住；木質部沒被破壞，水分照常上升，別誤選木質部相關選項。"
        },
        {
          "stem": "依血液循環途徑，從『左心室』出發的一滴血，要回到『左心房』，依序必須經過下列哪一條路徑？",
          "options": [
            "主動脈→全身→大靜脈→右心房→右心室→肺動脈→肺→肺靜脈→左心房",
            "肺動脈→肺→肺靜脈→右心房→主動脈→全身→左心房",
            "主動脈→肺→肺動脈→全身→大靜脈→左心房",
            "肺靜脈→全身→主動脈→大靜脈→左心房"
          ],
          "answer": 0,
          "explanation": "血液由左心室經主動脈送往全身(體循環)，組織交換後成缺氧血由大靜脈回右心房，入右心室；再由右心室經肺動脈送到肺(肺循環)，氣體交換後成充氧血經肺靜脈回左心房。故正確順序為A。",
          "trap": "要先完成體循環(左心室出)再經右心進入肺循環才回左心房；常見錯誤是把肺動脈/肺靜脈接在錯誤的心房心室上。"
        },
        {
          "stem": "心臟四個腔室中，何者的肌肉壁通常最厚？其原因為何？",
          "options": [
            "右心房，因要接收全身回流的血液",
            "左心室，因要把血液加壓送往全身(體循環)，需克服最大阻力",
            "右心室，因要把血液送往離心臟最遠的腦部",
            "左心房，因要同時接收肺與全身的血液"
          ],
          "answer": 1,
          "explanation": "左心室負責把血液經主動脈打到『全身』(體循環)，路徑最長、需克服的阻力最大，故必須產生最高壓力，其肌肉壁也最厚。右心室只把血送到鄰近的肺(肺循環)，壁較薄；心房只負責接收與送入心室，壁更薄。故選B。",
          "trap": "壁厚對應『要把血推多遠、克服多大阻力』；左心室推全身故最厚，別誤以為接收最多血的心房最厚。"
        }
      ]
    },
    {
      "id": "b-respiration-excretion",
      "name": "呼吸與排泄",
      "sub": "biology",
      "week": "下學期 3月",
      "notes": [
        {
          "h": "呼吸作用與氣體交換",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"90\" cy=\"90\" r=\"40\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"90\" y=\"86\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">肺泡</text><circle cx=\"230\" cy=\"90\" r=\"40\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"230\" y=\"86\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">血液</text><line x1=\"130\" y1=\"78\" x2=\"190\" y2=\"78\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><polygon points=\"190,78 180,73 180,83\" fill=\"#c9755c\"/><text x=\"160\" y=\"70\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">O₂</text><line x1=\"190\" y1=\"105\" x2=\"130\" y2=\"105\" stroke=\"#5aa874\" stroke-width=\"2.5\"/><polygon points=\"130,105 140,100 140,110\" fill=\"#5aa874\"/><text x=\"160\" y=\"122\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">CO₂</text><text x=\"90\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">O₂高</text><text x=\"230\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">CO₂高</text><text x=\"160\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">肺泡與血液氣體交換</text></svg>",
          "caption": "肺泡氣體交換：氧入血液、二氧化碳出至肺泡。",
          "points": [
            "呼吸作用：細胞分解葡萄糖，與氧反應釋放能量，產生二氧化碳和水。",
            "氣體交換在肺泡進行：氧由肺泡擴散入血液，二氧化碳由血液擴散入肺泡。",
            "吸氣時橫膈下降、肋骨上舉、胸腔擴大、肺內壓下降使空氣進入。"
          ],
          "formula": "葡萄糖 + 氧 → 二氧化碳 + 水 + 能量",
          "trap": "『呼吸運動』(吸氣吐氣)是物理動作，『呼吸作用』是細胞內產能的化學反應，兩者不同。"
        },
        {
          "h": "排泄與恆定",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M55 35 Q35 35 35 65 Q35 95 55 95 Q70 65 55 35 Z\" fill=\"#c9755c\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"55\" y=\"68\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">腎</text><text x=\"55\" y=\"112\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">過濾血液</text><line x1=\"58\" y1=\"95\" x2=\"120\" y2=\"130\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"110\" y=\"120\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">輸尿管</text><ellipse cx=\"150\" cy=\"140\" rx=\"28\" ry=\"20\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"150\" y=\"145\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">膀胱</text><line x1=\"178\" y1=\"145\" x2=\"215\" y2=\"150\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"250\" y=\"152\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">尿道→尿</text><text x=\"200\" y=\"50\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">排尿素</text><text x=\"200\" y=\"70\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">調節水鹽</text></svg>",
          "caption": "排泄路徑：腎→輸尿管→膀胱→尿道，排除尿素。",
          "points": [
            "腎臟過濾血液形成尿液，排除含氮廢物(尿素)並調節水分與鹽分。",
            "排泄路徑：腎臟→輸尿管→膀胱→尿道。",
            "皮膚排汗、肺排出二氧化碳與水也屬廣義排泄。"
          ],
          "trap": "尿素由肝臟把含氮廢物轉成、再由腎臟排出；糞便是消化後殘渣(排遺)，不算排泄。"
        }
      ],
      "quiz": [
        {
          "stem": "人在劇烈運動後，呼吸與心跳會明顯加快。下列關於此現象的解釋，何者最正確？",
          "options": [
            "肌肉細胞需要更多氧並產生更多二氧化碳，身體加速氣體運輸與排除",
            "肌肉細胞停止呼吸作用以節省能量",
            "血液中氧氣過多，需加快呼吸排掉",
            "心跳加快是為了降低體內二氧化碳的製造量"
          ],
          "answer": 0,
          "explanation": "劇烈運動時肌肉細胞呼吸作用增強，需要大量氧並產生大量二氧化碳，因此呼吸加快以攝入更多氧、排出更多CO₂，心跳加快以加速血液運輸氧氣與廢物。故選A。",
          "trap": "呼吸加快是因為CO₂變多、需氧增加，不是氧過多；運動時呼吸作用是增強而非停止。"
        },
        {
          "stem": "某病人腎功能受損，無法正常過濾血液。下列何種物質最可能在他的血液中異常累積？",
          "options": [
            "氧氣",
            "葡萄糖",
            "尿素",
            "二氧化碳"
          ],
          "answer": 2,
          "explanation": "腎臟主要過濾血液、排除含氮廢物尿素並調節水鹽。腎功能受損時，尿素無法排出而在血中累積(尿毒)。二氧化碳主要由肺排出、葡萄糖會被重新吸收、氧由肺供應，皆非腎臟主要排除對象。故選C。",
          "trap": "二氧化碳由『肺』排，不是腎；腎臟排除的主要含氮廢物是尿素，這是判斷關鍵。"
        },
        {
          "stem": "關於吸氣時人體胸腔的變化，下列敘述何者完全正確？",
          "options": [
            "橫膈上升、肋骨下降、胸腔縮小、肺內壓上升",
            "橫膈下降、肋骨上舉、胸腔擴大、肺內壓下降，空氣被吸入",
            "橫膈下降、肋骨下降、胸腔縮小，空氣被擠出",
            "橫膈與肋骨皆不動，靠肺自行收縮吸氣"
          ],
          "answer": 1,
          "explanation": "吸氣時橫膈肌收縮『下降』、肋間肌使肋骨『上舉』，胸腔容積『擴大』，使肺內氣壓『下降』而低於外界，外界空氣便被壓入肺中。吐氣則相反。故選B。",
          "trap": "吸氣是『胸腔變大、肺內壓變小』空氣才被吸入；別把吸氣與吐氣的橫膈升降、壓力變化方向弄反。"
        },
        {
          "stem": "下列人體的四種排出物：(甲)汗、(乙)尿、(丙)呼出的二氧化碳、(丁)糞便。其中屬於『排泄』(排出細胞代謝廢物)的是哪些？",
          "options": [
            "甲、乙、丙",
            "只有乙",
            "乙、丁",
            "甲、乙、丙、丁全部"
          ],
          "answer": 0,
          "explanation": "排泄是把細胞代謝產生的廢物排出體外：汗(含水、鹽、少量尿素)、尿(含尿素)、呼出的CO₂都是代謝廢物，屬排泄。糞便是食物消化後未吸收的殘渣，從未進入細胞代謝，屬『排遺』而非排泄。故選A。",
          "trap": "糞便是『排遺』不是『排泄』；判斷關鍵在於該物質是否為細胞代謝產生的廢物，殘渣不算。"
        }
      ]
    },
    {
      "id": "b-homeostasis-coordination",
      "name": "恆定與協調：神經與內分泌",
      "sub": "biology",
      "week": "下學期 4月",
      "notes": [
        {
          "h": "神經系統",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"45\" cy=\"50\" r=\"18\" fill=\"#c9755c\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"45\" y=\"54\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">受器</text><circle cx=\"160\" cy=\"50\" r=\"22\" fill=\"#5aa874\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"160\" y=\"48\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">脊髓</text><text x=\"160\" y=\"63\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">中樞</text><circle cx=\"275\" cy=\"50\" r=\"18\" fill=\"#c9755c\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"275\" y=\"54\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">動器</text><line x1=\"63\" y1=\"50\" x2=\"135\" y2=\"50\" stroke=\"#3a342e\" stroke-width=\"2\"/><polygon points=\"135,50 125,45 125,55\" fill=\"#3a342e\"/><text x=\"99\" y=\"42\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">感覺神經</text><line x1=\"185\" y1=\"50\" x2=\"255\" y2=\"50\" stroke=\"#3a342e\" stroke-width=\"2\"/><polygon points=\"255,50 245,45 245,55\" fill=\"#3a342e\"/><text x=\"220\" y=\"42\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">運動神經</text><path d=\"M160 90 Q160 130 160 140\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><text x=\"160\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">反射弧不經大腦 由脊髓主導</text></svg>",
          "caption": "反射弧：受器→感覺神經→脊髓→運動神經→動器，不經大腦。",
          "points": [
            "神經系統分中樞(腦、脊髓)與周圍神經。神經元是基本單位。",
            "反射是不經大腦思考的快速反應，如縮手反射，由脊髓主導以保護身體。",
            "反射弧路徑：受器→感覺神經→中樞(脊髓)→運動神經→動器。"
          ],
          "trap": "反射(如縮手、膝跳)由脊髓控制、不經大腦，所以『先縮手才感到痛』；別把反射說成由大腦下令。"
        },
        {
          "h": "內分泌與恆定",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"55\" cy=\"60\" r=\"22\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"55\" y=\"58\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">內分泌</text><text x=\"55\" y=\"73\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">腺</text><path d=\"M77 65 Q150 80 240 110\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"240,110 229,107 233,99\" fill=\"#c9755c\"/><text x=\"150\" y=\"82\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">激素隨血液</text><circle cx=\"260\" cy=\"120\" r=\"24\" fill=\"#5aa874\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"260\" y=\"124\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">標的</text><text x=\"160\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">激素：慢而持久、作用全身</text></svg>",
          "caption": "激素隨血液送全身：慢而持久，與神經快而短暫互補。",
          "points": [
            "內分泌腺分泌激素(荷爾蒙)經血液運送，作用慢但持久。",
            "胰島素由胰臟分泌，能降低血糖；血糖恆定靠激素調節。",
            "神經調節快而短暫，激素調節慢而持久，兩者共同維持體內恆定。"
          ],
          "trap": "胰島素『降』血糖。糖尿病常因胰島素不足或失效，導致血糖偏高，不是血糖太低。"
        }
      ],
      "quiz": [
        {
          "stem": "手不小心碰到很燙的鍋子會立刻縮回，事後才感覺到痛。關於此反應，下列敘述何者正確？",
          "options": [
            "此反應由大腦下令，所以很快",
            "此為反射，由脊髓主導，痛覺訊息另外傳到大腦才感到痛",
            "縮手與感到痛是同一條神經同時完成",
            "此反應需要經過思考判斷後才縮手"
          ],
          "answer": 1,
          "explanation": "縮手是反射動作，受器接收刺激後訊息經脊髓直接送出運動指令使手縮回，不需大腦參與，所以非常快；同時痛覺訊息會『另外』上傳到大腦，因此『先縮手、後感痛』。故選B。",
          "trap": "反射不經大腦，所以才會先縮手後覺痛；若由大腦下令反而較慢，無法及時保護身體。"
        },
        {
          "stem": "甲、乙兩種體內調節方式：甲反應迅速但作用短暫，乙反應較慢但作用持久且可影響全身。甲、乙最可能分別是？",
          "options": [
            "甲為激素調節、乙為神經調節",
            "甲為神經調節、乙為激素調節",
            "甲、乙都是神經調節",
            "甲、乙都是激素調節"
          ],
          "answer": 1,
          "explanation": "神經調節以電訊號快速傳遞，反應快但作用短暫且較局部；激素(內分泌)經血液運送全身，反應慢但持久、影響範圍廣。故甲為神經、乙為激素，選B。",
          "trap": "『快而短暫』是神經、『慢而持久』是激素；兩者特性恰相反，容易對調。"
        },
        {
          "stem": "甲、乙、丙三人血糖測量：甲飯後血糖暫時升高、半小時後恢復正常；乙因胰島素分泌不足，飯後血糖長期偏高且難以下降。關於胰島素與血糖的調節，下列敘述何者正確？",
          "options": [
            "胰島素能『升高』血糖，乙是胰島素太多",
            "胰島素能『降低』血糖；甲分泌正常故能回穩，乙分泌不足故血糖偏高",
            "血糖由神經立即調節，與胰島素無關",
            "甲飯後血糖升高代表他罹患糖尿病"
          ],
          "answer": 1,
          "explanation": "胰島素由胰臟分泌、作用是『降低』血糖。甲飯後血糖暫升，但胰島素正常分泌使血糖回穩，屬正常生理。乙因胰島素分泌不足，無法有效降血糖，導致血糖長期偏高(糖尿病特徵)。故選B。",
          "trap": "胰島素是『降』血糖不是升血糖；飯後血糖暫時上升是正常現象，不等於糖尿病，關鍵在能否回穩。"
        },
        {
          "stem": "膝跳反射中，敲擊膝蓋下方肌腱會使小腿不自主向前踢出。下列關於此反射弧的訊息傳遞順序，何者正確？",
          "options": [
            "受器→運動神經→大腦→感覺神經→動器",
            "受器→感覺神經→脊髓→運動神經→動器",
            "動器→運動神經→脊髓→感覺神經→受器",
            "受器→感覺神經→大腦→運動神經→動器"
          ],
          "answer": 1,
          "explanation": "膝跳反射屬脊髓反射：肌腱受器接收敲擊刺激，訊息經『感覺神經』傳入『脊髓』中樞，直接由『運動神經』送出指令到大腿肌肉(動器)使小腿踢出，全程不經大腦。故順序為受器→感覺神經→脊髓→運動神經→動器，選B。",
          "trap": "反射弧中樞是『脊髓』不是大腦(故D錯)；順序固定由受器經感覺神經入、運動神經出，方向不可顛倒。"
        }
      ]
    },
    {
      "id": "b-reproduction",
      "name": "生殖：無性、有性與人類生殖",
      "sub": "biology",
      "week": "下學期 4月",
      "notes": [
        {
          "h": "無性與有性生殖",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"160\" stroke=\"#3a342e\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text x=\"80\" y=\"18\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">無性生殖</text><circle cx=\"80\" cy=\"55\" r=\"18\" fill=\"#5aa874\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"80\" y=\"59\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">親</text><line x1=\"80\" y1=\"73\" x2=\"80\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><polygon points=\"80,95 75,86 85,86\" fill=\"#3a342e\"/><circle cx=\"55\" cy=\"120\" r=\"13\" fill=\"#5aa874\" stroke=\"#3a342e\"/><circle cx=\"105\" cy=\"120\" r=\"13\" fill=\"#5aa874\" stroke=\"#3a342e\"/><text x=\"80\" y=\"150\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">基因相同</text><text x=\"240\" y=\"18\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">有性生殖</text><circle cx=\"215\" cy=\"55\" r=\"15\" fill=\"#c9755c\" stroke=\"#3a342e\"/><text x=\"215\" y=\"59\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">精</text><circle cx=\"265\" cy=\"55\" r=\"15\" fill=\"#f0a52e\" stroke=\"#3a342e\"/><text x=\"265\" y=\"59\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">卵</text><line x1=\"215\" y1=\"70\" x2=\"240\" y2=\"92\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"265\" y1=\"70\" x2=\"240\" y2=\"92\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><circle cx=\"240\" cy=\"120\" r=\"16\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"240\" y=\"124\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">後代</text><text x=\"240\" y=\"150\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">變異較大</text></svg>",
          "caption": "無性：後代與親同基因；有性：精卵結合，變異較大。",
          "points": [
            "無性生殖只需一個親代，後代與親代基因相同(如分裂、出芽、營養繁殖、孢子)。",
            "有性生殖需精卵結合(受精)，後代具有來自雙親的遺傳，變異較大。",
            "細胞分裂中，體細胞行有絲分裂(染色體數不變)；生殖細胞形成行減數分裂(染色體數減半)。"
          ],
          "trap": "無性生殖後代與親代『幾乎完全相同』、變異小；有性生殖才產生多樣變異。減數分裂使染色體減半，受精後恢復。"
        },
        {
          "h": "人類生殖",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"70\" cy=\"70\" rx=\"26\" ry=\"18\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"70\" y=\"74\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">卵巢</text><path d=\"M96 65 Q150 50 180 60\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"3\"/><text x=\"150\" y=\"42\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">輸卵管:受精</text><circle cx=\"148\" cy=\"58\" r=\"5\" fill=\"#c9755c\" stroke=\"#3a342e\"/><path d=\"M180 60 Q210 70 200 120 Q190 150 150 150 Q110 150 110 110\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"2\"/><text x=\"165\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">子宮</text><text x=\"165\" y=\"138\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">著床發育</text></svg>",
          "caption": "受精在輸卵管、著床發育在子宮，兩地點不同。",
          "points": [
            "精子由睪丸製造，卵由卵巢製造；受精通常發生在輸卵管。",
            "受精卵在子宮著床發育成胚胎，胎兒靠胎盤與母體交換養分與氣體。",
            "人類體細胞有23對(46條)染色體，精卵各帶23條，受精後恢復46條。"
          ],
          "trap": "受精發生在『輸卵管』、著床發育在『子宮』，兩個地點不同；胎盤負責物質交換但母子血液並不直接相通。"
        }
      ],
      "quiz": [
        {
          "stem": "園丁以『扦插』方式繁殖玫瑰，取一段枝條種植即可長成與母株性狀完全相同的新植株。關於此繁殖方式，下列敘述何者正確？",
          "options": [
            "屬於有性生殖，後代變異大",
            "屬於無性生殖，後代與母株基因相同",
            "需要經過精卵結合",
            "後代染色體數目為母株的一半"
          ],
          "answer": 1,
          "explanation": "扦插是營養繁殖，屬無性生殖，只需一個親代、不需精卵結合，後代由母株體細胞發育而來，基因與母株相同、染色體數目也相同，故性狀一致。故選B。",
          "trap": "無性生殖後代基因與母株相同、染色體數不變(不減半)；減半只發生在形成生殖細胞的減數分裂。"
        },
        {
          "stem": "人類體細胞含46條染色體。關於精子、卵與受精卵的染色體數目，下列何者正確？",
          "options": [
            "精子46條、卵46條、受精卵92條",
            "精子23條、卵23條、受精卵46條",
            "精子46條、卵23條、受精卵46條",
            "精子23條、卵46條、受精卵46條"
          ],
          "answer": 1,
          "explanation": "精子與卵由減數分裂形成，染色體數減半各為23條；受精時精卵結合，23+23=46條，恢復成體細胞數目，故選B。這樣才能維持世代間染色體數目恆定。",
          "trap": "生殖細胞各帶一半(23條)，受精後才恢復46條；若精卵都46，受精卵會變92導致世代倍增，是錯的。"
        },
        {
          "stem": "下列四種繁殖方式：(甲)馬鈴薯塊莖長出新株、(乙)水螅出芽、(丙)蛙的精卵結合產生蝌蚪、(丁)蕨類以孢子繁殖。其中屬於『有性生殖』的是？",
          "options": [
            "只有丙",
            "甲與丙",
            "丙與丁",
            "甲、乙、丁"
          ],
          "answer": 0,
          "explanation": "有性生殖的關鍵是『精卵(配子)結合受精』。甲塊莖(營養繁殖)、乙出芽、丁孢子繁殖都只需一個親代、無精卵結合，屬無性生殖；只有丙蛙的精卵結合屬有性生殖。故選A。",
          "trap": "孢子繁殖、出芽、營養繁殖都『不需精卵結合』，仍是無性生殖；別把『孢子』誤當成生殖細胞結合的有性過程。"
        },
        {
          "stem": "懷孕婦女的胎兒靠『胎盤』與母體交換物質。下列關於胎盤功能的敘述，何者正確？",
          "options": [
            "母體與胎兒的血液在胎盤中直接混合相通",
            "胎兒在胎盤處取得養分與氧、排出二氧化碳與廢物，但母子血液不直接相通",
            "胎兒靠胎盤直接用肺呼吸空氣",
            "胎盤負責讓受精卵在輸卵管著床"
          ],
          "answer": 1,
          "explanation": "胎盤是母體與胎兒間物質交換的場所：胎兒由此取得養分與氧、排出CO₂與含氮廢物，這些物質以擴散方式跨過胎盤，但母體與胎兒的血液『不直接相通混合』。胎兒不用肺呼吸，著床發生在子宮而非輸卵管。故選B。",
          "trap": "胎盤交換物質但『母子血液不直接相通』；常見錯誤是以為兩者血液混合，或把著床地點誤記為輸卵管。"
        }
      ]
    },
    {
      "id": "b-genetics",
      "name": "遺傳：孟德爾遺傳與性別決定",
      "sub": "biology",
      "week": "下學期 4月",
      "notes": [
        {
          "h": "孟德爾遺傳法則",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"22\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">Aa × Aa 棋盤格</text><text x=\"115\" y=\"48\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">A</text><text x=\"195\" y=\"48\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">a</text><text x=\"75\" y=\"92\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">A</text><text x=\"75\" y=\"135\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">a</text><rect x=\"90\" y=\"55\" width=\"80\" height=\"50\" fill=\"#c9755c\" fill-opacity=\"0.5\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"170\" y=\"55\" width=\"80\" height=\"50\" fill=\"#c9755c\" fill-opacity=\"0.3\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"90\" y=\"105\" width=\"80\" height=\"50\" fill=\"#c9755c\" fill-opacity=\"0.3\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"170\" y=\"105\" width=\"80\" height=\"50\" fill=\"#5aa874\" fill-opacity=\"0.5\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"130\" y=\"85\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">AA</text><text x=\"210\" y=\"85\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">Aa</text><text x=\"130\" y=\"135\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">Aa</text><text x=\"210\" y=\"135\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">aa</text><text x=\"160\" y=\"172\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">顯性:隱性 = 3 : 1</text></svg>",
          "caption": "Aa×Aa 棋盤格：1AA:2Aa:1aa，顯性比隱性為3:1。",
          "points": [
            "基因成對存在，分顯性(大寫)與隱性(小寫)；顯性性狀只要有一個顯性基因即表現。",
            "形成生殖細胞時成對基因會分開(分離律)，各帶一個進入精或卵。",
            "基因型如AA、Aa、aa；AA與Aa都表現顯性性狀，只有aa表現隱性。",
            "用棋盤格(Punnett square)可推算後代基因型與性狀比例。"
          ],
          "formula": "Aa × Aa → 1 AA : 2 Aa : 1 aa = 顯性 : 隱性 = 3 : 1",
          "trap": "Aa雖外表是顯性，卻帶有隱性基因(帶因者)。兩個Aa雜交，後代才可能出現隱性aa(比例1/4)。"
        },
        {
          "h": "染色體與性別決定",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"50\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">母 XX</text><text x=\"230\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">父 XY</text><circle cx=\"60\" cy=\"65\" r=\"16\" fill=\"#f0a52e\" stroke=\"#3a342e\"/><text x=\"60\" y=\"69\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">卵 X</text><circle cx=\"230\" cy=\"60\" r=\"14\" fill=\"#c9755c\" stroke=\"#3a342e\"/><text x=\"230\" y=\"64\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">精X</text><circle cx=\"270\" cy=\"60\" r=\"14\" fill=\"#5aa874\" stroke=\"#3a342e\"/><text x=\"270\" y=\"64\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">精Y</text><line x1=\"75\" y1=\"75\" x2=\"120\" y2=\"120\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"225\" y1=\"74\" x2=\"150\" y2=\"120\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"268\" y1=\"74\" x2=\"210\" y2=\"120\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"95\" y=\"122\" width=\"60\" height=\"26\" rx=\"4\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><text x=\"125\" y=\"139\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">XX 女</text><rect x=\"180\" y=\"122\" width=\"60\" height=\"26\" rx=\"4\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"210\" y=\"139\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">XY 男</text><text x=\"160\" y=\"170\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">性別由父親精子(X/Y)決定</text></svg>",
          "caption": "卵皆帶X，父親精子帶X或Y決定子女性別。",
          "points": [
            "人類23對染色體中，1對是性染色體：女性XX、男性XY。",
            "卵都帶X；精子帶X或Y。受精時若精子帶X→XX(女)，帶Y→XY(男)。",
            "因此孩子的性別由『父親的精子』帶X或Y決定，理論上男女比約1:1。"
          ],
          "trap": "決定孩子性別的是『父親』(精子帶X或Y)，不是母親；母親的卵一律帶X。"
        }
      ],
      "quiz": [
        {
          "stem": "豌豆中高莖(T)對矮莖(t)為顯性。兩株皆為高莖的豌豆雜交，後代卻出現了矮莖植株。則這兩株親代高莖的基因型最可能是？",
          "options": [
            "TT × TT",
            "TT × Tt",
            "Tt × Tt",
            "Tt × tt"
          ],
          "answer": 2,
          "explanation": "後代出現矮莖(tt)，表示父母雙方都必須能提供一個t。兩株都是高莖(有顯性表現)又都帶t，基因型只能是Tt×Tt。棋盤格：Tt×Tt→1TT:2Tt:1tt，故後代高莖:矮莖=3:1，會出現矮莖。TT×任何都不會出現tt，Tt×tt一方為矮莖不符題意。故選C。",
          "trap": "雙親都是高莖卻生出矮莖，代表兩者都是帶因者Tt；只要有一方是TT就不可能出現tt。"
        },
        {
          "stem": "一對夫妻已生了三個女兒，太太懷了第四胎。在不考慮其他因素下，這一胎是男孩的機率約為？",
          "options": [
            "0(一定是女兒)",
            "1/4",
            "1/2",
            "確定是男孩(因為前面都是女兒)"
          ],
          "answer": 2,
          "explanation": "孩子性別由父親精子決定：帶X→女(XX)、帶Y→男(XY)，比例約1:1。每次懷孕互相獨立，與前面生幾個女兒無關，故第四胎是男孩的機率約為1/2。故選C。",
          "trap": "前面生幾個女兒不會影響這一胎；每胎機率獨立，不會因為『都是女兒』就更容易生男孩。"
        },
        {
          "stem": "已知圓粒(R)對皺粒(r)為顯性。將一株圓粒豌豆與一株皺粒豌豆雜交，後代圓粒:皺粒約為1:1。則該圓粒親代的基因型為？",
          "options": [
            "RR",
            "Rr",
            "rr",
            "無法判斷"
          ],
          "answer": 1,
          "explanation": "皺粒親代為rr，只能提供r。若圓粒親代為RR，則後代全為Rr(全圓粒，比例1:0)；若圓粒親代為Rr，棋盤格Rr×rr→1Rr:1rr=圓粒:皺粒=1:1，符合題目。故該圓粒親代為Rr，選B。",
          "trap": "出現1:1代表顯性親代是雜合Rr(測交)；若是純合RR則後代全圓粒，不會有皺粒。"
        },
        {
          "stem": "一對父母皆能正常分辨顏色，卻生下一個色盲的兒子(色盲為性聯隱性，基因位於X染色體，以Xᶜ表示)。則這對父母的基因型最可能為何？",
          "options": [
            "父 XᶜY、母 XᶜXᶜ",
            "父 XY、母 XXᶜ",
            "父 XᶜY、母 XX",
            "父 XY、母 XᶜXᶜ"
          ],
          "answer": 1,
          "explanation": "色盲兒子為XᶜY，其Y來自父親、Xᶜ必來自母親，故母親至少帶一個Xᶜ。但母親色覺正常，故母親為帶因者XXᶜ。父親色覺正常，其X為正常X，基因型為XY。故選B。父親若為XᶜY則自己即色盲，與題意(父母皆正常)不符。",
          "trap": "兒子的X一定來自母親、Y來自父親；母親外表正常卻能生色盲兒，代表她是『帶因者』XXᶜ，而非色盲本人。"
        }
      ]
    },
    {
      "id": "b-evolution-diversity",
      "name": "演化與生物多樣性",
      "sub": "biology",
      "week": "下學期 5月",
      "notes": [
        {
          "h": "演化與天擇",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"55\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">原族群有變異</text><circle cx=\"30\" cy=\"60\" r=\"11\" fill=\"#3a342e\"/><circle cx=\"60\" cy=\"60\" r=\"11\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><circle cx=\"90\" cy=\"60\" r=\"11\" fill=\"#3a342e\"/><line x1=\"110\" y1=\"60\" x2=\"160\" y2=\"60\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"160,60 150,55 150,65\" fill=\"#c9755c\"/><text x=\"135\" y=\"50\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">環境篩選</text><text x=\"255\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">適應者存活多</text><circle cx=\"210\" cy=\"60\" r=\"11\" fill=\"#3a342e\"/><circle cx=\"240\" cy=\"60\" r=\"11\" fill=\"#3a342e\"/><circle cx=\"270\" cy=\"60\" r=\"11\" fill=\"#3a342e\"/><circle cx=\"300\" cy=\"60\" r=\"11\" fill=\"#3a342e\"/><line x1=\"160\" y1=\"110\" x2=\"160\" y2=\"140\" stroke=\"#5aa874\" stroke-width=\"2\"/><polygon points=\"160,140 155,131 165,131\" fill=\"#5aa874\"/><text x=\"160\" y=\"165\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">變異先有 環境後選</text></svg>",
          "caption": "天擇：變異先存在，環境篩選使適應者比例增加。",
          "points": [
            "族群中個體有變異，較適應環境者較易存活並繁殖後代，此即天擇。",
            "經長時間天擇累積，族群性狀改變，可能形成新物種，這就是演化。",
            "化石是研究演化的重要證據，可推測生物出現的先後與變化。"
          ],
          "trap": "天擇是『環境篩選原本就存在的變異』，不是生物為了適應而主動改變身體；變異先發生、環境再選擇。"
        },
        {
          "h": "生物多樣性與分類",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"40\" y=\"25\" width=\"240\" height=\"22\" rx=\"4\" fill=\"#c9755c\" fill-opacity=\"0.5\" stroke=\"#3a342e\"/><text x=\"160\" y=\"41\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">界(最大)</text><rect x=\"70\" y=\"52\" width=\"180\" height=\"20\" rx=\"4\" fill=\"#f0a52e\" fill-opacity=\"0.4\" stroke=\"#3a342e\"/><text x=\"160\" y=\"67\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">門 綱 目</text><rect x=\"100\" y=\"77\" width=\"120\" height=\"20\" rx=\"4\" fill=\"#5aa874\" fill-opacity=\"0.4\" stroke=\"#3a342e\"/><text x=\"160\" y=\"92\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">科 屬</text><rect x=\"125\" y=\"102\" width=\"70\" height=\"20\" rx=\"4\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"160\" y=\"117\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">種(最小)</text><text x=\"160\" y=\"145\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">學名=屬名+種小名</text><text x=\"160\" y=\"165\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">愈下層 親緣愈近</text></svg>",
          "caption": "分類階層界最大、種最小；學名為屬名加種小名。",
          "points": [
            "分類由大到小：界、門、綱、目、科、屬、種。",
            "學名採二名法，由屬名+種小名組成，以拉丁文斜體表示。",
            "生物多樣性包含基因、物種與生態系多樣性；多樣性高的生態系通常較穩定。"
          ],
          "trap": "分類階層『種』最小、『界』最大；同種生物才能交配並產生具生殖力的後代。"
        }
      ],
      "quiz": [
        {
          "stem": "某地原本有深淺顏色不同的蛾。工業污染使樹幹變黑後，深色蛾因不易被天敵發現而數量大增、淺色蛾減少。下列以『天擇』解釋此現象，何者最恰當？",
          "options": [
            "蛾為了適應環境主動把身體變深色",
            "環境改變後，原本就存在的深色變異較易存活並繁殖，比例因而增加",
            "污染直接讓淺色蛾的基因突變成深色",
            "深色與淺色蛾屬於不同物種，互不影響"
          ],
          "answer": 1,
          "explanation": "天擇的觀點是：族群中本來就同時存在深色與淺色的變異，環境(樹幹變黑)改變後，深色蛾較不易被獵食、存活與繁殖機會較高，使深色比例上升。並非蛾主動變色或污染使其突變。故選B。",
          "trap": "天擇是環境『篩選』既有變異，不是生物主動改變或環境直接造成定向突變。"
        },
        {
          "stem": "下列關於生物分類與學名的敘述，何者正確？",
          "options": [
            "分類階層由大到小為：種、屬、科、目、綱、門、界",
            "學名以二名法表示，由屬名與種小名組成",
            "同一個『屬』的生物一定能互相交配產生具生殖力的後代",
            "親緣關係愈近的生物，分類上差異愈大"
          ],
          "answer": 1,
          "explanation": "學名採二名法，由屬名(字首大寫)加種小名組成。分類由大到小應為界、門、綱、目、科、屬、種(A順序顛倒)。能交配並產生具生殖力後代的是『同種』而非同屬(C錯)。親緣愈近差異愈小(D錯)。故選B。",
          "trap": "能產生具生殖力後代的是『同種』不是同屬；分類由大到小是界→種，別把順序倒過來。"
        },
        {
          "stem": "甲、乙、丙、丁四種生物的分類階層比較：甲與乙同『科』不同屬；甲與丙同『屬』不同種；甲與丁同『目』不同科。則與甲『親緣關係最近』的是哪一種？",
          "options": [
            "乙",
            "丙",
            "丁",
            "三者與甲一樣近"
          ],
          "answer": 1,
          "explanation": "分類階層愈往下(種方向)共有，代表親緣關係愈近。甲與丙『同屬』(只差在種)是四者中共有到最低階層的，親緣最近；甲與乙同科(差屬與種)次之；甲與丁僅同目(差科、屬、種)最遠。故與甲親緣最近的是丙，選B。",
          "trap": "共有的分類階層『愈低(愈接近種)』親緣愈近；同屬比同科近、同科比同目近，別只看名稱長短判斷。"
        },
        {
          "stem": "保育人士常強調維持『生物多樣性』。下列關於生物多樣性的敘述，何者正確？",
          "options": [
            "生物多樣性只指物種數量的多寡",
            "多樣性包含基因、物種與生態系三層次；多樣性高的生態系通常較穩定、較能抵抗環境變動",
            "物種愈單一的生態系愈穩定",
            "外來種大量入侵能提高當地的生物多樣性"
          ],
          "answer": 1,
          "explanation": "生物多樣性包含基因多樣性、物種多樣性與生態系多樣性三個層次，不只是物種數目。多樣性高時食物網複雜、調節能力強，生態系通常較穩定、較能承受環境變動。物種單一反而脆弱；強勢外來種常排擠原生種而『降低』多樣性。故選B。",
          "trap": "多樣性不只看『物種數量』，還包含基因與生態系層次；且多樣性高才穩定，外來種入侵通常使多樣性下降。"
        }
      ]
    },
    {
      "id": "b-ecosystem",
      "name": "生態系：能量流動與物質循環",
      "sub": "biology",
      "week": "下學期 5月",
      "notes": [
        {
          "h": "食物鏈、食物網與能量流動",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"40\" width=\"60\" height=\"90\" fill=\"#5aa874\" fill-opacity=\"0.6\" stroke=\"#3a342e\"/><text x=\"50\" y=\"90\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">生產者</text><rect x=\"110\" y=\"55\" width=\"55\" height=\"60\" fill=\"#f0a52e\" fill-opacity=\"0.5\" stroke=\"#3a342e\"/><text x=\"137\" y=\"90\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">初級</text><rect x=\"195\" y=\"68\" width=\"45\" height=\"34\" fill=\"#c9755c\" fill-opacity=\"0.5\" stroke=\"#3a342e\"/><text x=\"217\" y=\"89\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">次級</text><rect x=\"265\" y=\"76\" width=\"35\" height=\"18\" fill=\"#3a342e\"/><text x=\"282\" y=\"110\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">三級</text><line x1=\"80\" y1=\"85\" x2=\"108\" y2=\"85\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"108,85 99,81 99,89\" fill=\"#c9755c\"/><line x1=\"165\" y1=\"85\" x2=\"193\" y2=\"85\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"193,85 184,81 184,89\" fill=\"#c9755c\"/><line x1=\"240\" y1=\"85\" x2=\"263\" y2=\"85\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"263,85 254,81 254,89\" fill=\"#c9755c\"/><text x=\"160\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">能量單向流動 逐級遞減</text></svg>",
          "caption": "能量金字塔：自生產者單向流動且逐級遞減。",
          "points": [
            "生產者(綠色植物)行光合作用製造養分，是能量進入生態系的起點。",
            "消費者依序為初級(植食)、次級、三級(肉食)消費者；分解者分解遺體與排泄物。",
            "能量沿食物鏈單向流動且逐級遞減，每一層大約只有少部分能量傳到下一營養階。"
          ],
          "formula": "能量流動方向：生產者 → 初級消費者 → 次級消費者 →…(逐級遞減)",
          "trap": "能量『單向流動、逐級遞減』不會循環；物質(碳、氮)才會在生態系中循環利用。"
        },
        {
          "h": "碳循環與氮循環",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"160\" cy=\"35\" rx=\"70\" ry=\"20\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"160\" y=\"40\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">大氣 CO₂</text><rect x=\"60\" y=\"110\" width=\"70\" height=\"30\" rx=\"4\" fill=\"#5aa874\" fill-opacity=\"0.5\" stroke=\"#3a342e\"/><text x=\"95\" y=\"130\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">植物</text><rect x=\"190\" y=\"110\" width=\"70\" height=\"30\" rx=\"4\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><text x=\"225\" y=\"130\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">動物/分解者</text><line x1=\"120\" y1=\"50\" x2=\"95\" y2=\"108\" stroke=\"#5aa874\" stroke-width=\"2\"/><polygon points=\"95,108 92,98 101,101\" fill=\"#5aa874\"/><text x=\"70\" y=\"80\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">光合固碳</text><line x1=\"225\" y1=\"108\" x2=\"200\" y2=\"52\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"200,52 198,62 207,59\" fill=\"#c9755c\"/><text x=\"235\" y=\"80\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">呼吸/分解</text><line x1=\"130\" y1=\"125\" x2=\"188\" y2=\"125\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><polygon points=\"188,125 179,121 179,129\" fill=\"#3a342e\"/><text x=\"160\" y=\"168\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">碳在生物與大氣間循環</text></svg>",
          "caption": "碳循環：光合固碳、呼吸與分解放碳，物質可循環。",
          "points": [
            "碳循環：光合作用把CO₂固定成有機物，呼吸作用、分解、燃燒再把碳釋回大氣。",
            "氮循環：固氮細菌把氮氣轉成含氮化合物供植物利用，分解者與細菌使氮回到環境。",
            "分解者(細菌、真菌)在物質循環中扮演把有機物分解回無機物的關鍵角色。"
          ],
          "trap": "燃燒化石燃料釋放大量CO₂，是大氣CO₂上升、加劇溫室效應的重要原因之一。"
        }
      ],
      "quiz": [
        {
          "stem": "在『草→蝗蟲→青蛙→蛇』這條食物鏈中，若大量捕殺青蛙，短期內最可能出現的現象是？",
          "options": [
            "蝗蟲增加、蛇減少",
            "蝗蟲減少、蛇增加",
            "蝗蟲與蛇都增加",
            "蝗蟲與蛇都減少"
          ],
          "answer": 0,
          "explanation": "青蛙是蝗蟲的天敵、又是蛇的食物。青蛙大量減少後：失去捕食者的蝗蟲會增加(草被吃更多)；以青蛙為食的蛇則因食物減少而下降。故蝗蟲增加、蛇減少，選A。",
          "trap": "移除中間環節要同時往兩邊推：牠的獵物(蝗蟲)變多、以牠為食者(蛇)變少。"
        },
        {
          "stem": "關於生態系中能量與物質的流動，下列敘述何者正確？",
          "options": [
            "能量可在生態系中循環使用，物質則單向流失",
            "能量單向流動且逐級遞減，物質(如碳、氮)可循環利用",
            "能量與物質都會循環",
            "能量與物質都單向流動不循環"
          ],
          "answer": 1,
          "explanation": "能量自生產者進入後沿食物鏈單向流動、每一營養階遞減，最後以熱能散失，不會循環；而碳、氮等物質可經光合、呼吸、分解、固氮等過程在生物與環境間反覆循環。故選B。",
          "trap": "關鍵對比：能量『單向遞減不循環』，物質『可循環』；兩者性質剛好相反，極易對調。"
        },
        {
          "stem": "在一個草原生態系中，若把所有『分解者(細菌、真菌)』移除，長期下來最可能發生的後果是？",
          "options": [
            "完全沒有影響，生態系照常運作",
            "動植物遺體與排泄物堆積，無機養分無法回到土壤，植物可利用的養分逐漸枯竭",
            "生產者因養分變多而大量繁殖",
            "能量循環加速，生態系更穩定"
          ],
          "answer": 1,
          "explanation": "分解者把動植物遺體與排泄物中的有機物分解成無機物(如含氮、含碳的無機鹽)，使養分回到環境供生產者再利用。若移除分解者，遺體與廢物會堆積、無機養分無法歸還土壤，植物可用養分漸枯竭，整個生態系終將崩解。故選B。",
          "trap": "分解者是物質循環的關鍵環節：少了它養分『回不去』環境；別誤以為遺體堆積能讓養分變多。"
        },
        {
          "stem": "假設一條食物鏈中，每一營養階只能把所獲得能量的『十分之一』傳到下一階。若生產者固定了10000單位能量，則第三級消費者(肉食動物)最多約可獲得多少單位能量？",
          "options": [
            "10000 單位",
            "1000 單位",
            "100 單位",
            "10 單位"
          ],
          "answer": 3,
          "explanation": "能量每升高一個營養階約只剩十分之一。生產者10000→初級消費者10000×1/10=1000→次級消費者1000×1/10=100→三級消費者100×1/10=10單位。故第三級消費者最多約得10單位。故選D。",
          "trap": "要逐級乘以1/10、共三次(生產者到第三級隔三層)；別只除一次或數錯營養階數而高估能量。"
        }
      ]
    },
    {
      "id": "b-human-environment",
      "name": "人類與環境保育",
      "sub": "biology",
      "week": "下學期 5月",
      "notes": [
        {
          "h": "環境問題與保育",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"30\" width=\"130\" height=\"120\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><text x=\"85\" y=\"24\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">問題</text><text x=\"85\" y=\"58\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">棲地破壞</text><text x=\"85\" y=\"82\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">暖化污染</text><text x=\"85\" y=\"106\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">外來種入侵</text><text x=\"85\" y=\"130\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">物種滅絕</text><line x1=\"152\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#5aa874\" stroke-width=\"2.5\"/><polygon points=\"190,90 180,85 180,95\" fill=\"#5aa874\"/><rect x=\"192\" y=\"30\" width=\"110\" height=\"120\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"247\" y=\"24\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">保育</text><text x=\"247\" y=\"58\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">設保護區</text><text x=\"247\" y=\"82\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">節能減碳</text><text x=\"247\" y=\"106\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">復育棲地</text><text x=\"247\" y=\"130\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">資源回收</text></svg>",
          "caption": "環境問題對應保育作法：減害並復育生態。",
          "points": [
            "人口增加與過度開發造成棲地破壞、生物多樣性下降、物種滅絕。",
            "溫室氣體(如CO₂)增加導致全球暖化；過度排放污染物造成水、空氣污染。",
            "外來種入侵會排擠原生種、破壞生態平衡(如福壽螺、小花蔓澤蘭)。",
            "保育作法：設立保護區、復育棲地、節能減碳、垃圾減量與資源回收。"
          ],
          "trap": "外來種不一定有益；強勢外來種常缺乏天敵而大量繁殖，反而威脅原生生物與生態平衡。"
        }
      ],
      "quiz": [
        {
          "stem": "某湖泊引入一種繁殖力強、又缺乏天敵的外來魚種後，數年內原生魚種數量銳減。下列解釋何者最合理？",
          "options": [
            "外來種增加了生物多樣性，對生態一定有利",
            "外來種因缺乏天敵而大量繁殖，與原生種競爭食物與棲地，使原生種減少",
            "原生魚種自行演化成外來種",
            "外來種與原生種彼此互利共生"
          ],
          "answer": 1,
          "explanation": "強勢外來種在新環境常缺乏天敵控制，得以大量繁殖，並與原生種競爭食物、空間等資源，甚至直接捕食，導致原生種數量下降、生物多樣性降低。故選B。",
          "trap": "外來種『不一定』增加多樣性；強勢外來種反而壓迫原生種，常使整體多樣性下降。"
        },
        {
          "stem": "近年大氣中二氧化碳濃度上升，被認為與全球暖化有關。下列人類活動中，何者最可能『同時』增加大氣CO₂並降低吸收CO₂的能力？",
          "options": [
            "大量種植樹木",
            "大量燃燒化石燃料並砍伐森林",
            "推廣太陽能與風力發電",
            "進行資源回收與垃圾減量"
          ],
          "answer": 1,
          "explanation": "燃燒化石燃料(煤、石油)會釋放大量CO₂；砍伐森林則減少能行光合作用吸收CO₂的植物。兩者並行使大氣CO₂上升又削弱固碳能力，加劇溫室效應。種樹、再生能源、回收則有助減碳。故選B。",
          "trap": "題目要『同時』增加排放又減少吸收：燃燒(增排放)＋砍林(減吸收)兩者兼具，才是最佳答案。"
        },
        {
          "stem": "工廠把含汞、鉛等重金屬的廢水排入河中，這些重金屬不易分解。下列關於『生物累積(生物放大)』的敘述，何者最正確？",
          "options": [
            "重金屬會在每一營養階逐漸被分解，愈高階愈少",
            "重金屬隨食物鏈累積，營養階愈高的生物體內濃度通常愈高",
            "只有生產者體內會累積重金屬，動物不受影響",
            "重金屬一進入水中就完全無害"
          ],
          "answer": 1,
          "explanation": "汞、鉛等重金屬不易被分解或排出，會在生物體內累積。沿食物鏈被逐級攝食時，捕食者吃下大量含毒獵物，毒物在體內不斷累積，故營養階『愈高』(如大型肉食魚、人)體內濃度通常『愈高』，此即生物累積/生物放大。故選B。",
          "trap": "與能量遞減相反：難分解的毒物沿食物鏈是『愈高階愈濃』而非愈少；別把它和能量逐級遞減混為一談。"
        },
        {
          "stem": "下列四種作為：(甲)隨手關燈、搭乘大眾運輸；(乙)大量使用一次性塑膠製品；(丙)做好垃圾分類與資源回收；(丁)任意野放外來寵物到野外。其中『有助於環境保育』的是？",
          "options": [
            "甲與丙",
            "乙與丁",
            "甲、乙、丙",
            "甲、丙、丁"
          ],
          "answer": 0,
          "explanation": "甲(節能減碳)與丙(資源回收、垃圾減量)都能減少資源消耗與污染，有助保育。乙大量使用一次性塑膠製造大量垃圾與污染；丁野放外來種會造成外來種入侵、危害原生生態，兩者皆有害。故有助保育的是甲與丙，選A。",
          "trap": "野放外來『寵物』看似善心卻會釀成外來種入侵，是破壞而非保育；一次性塑膠也是製造污染，別誤選。"
        }
      ]
    },
    {
      "id": "e-rock",
      "name": "岩石與礦物",
      "sub": "earth",
      "week": "上學期 11月",
      "notes": [
        {
          "h": "三大岩類與岩石循環",
          "points": [
            "火成岩：岩漿（或熔岩）冷卻凝固而成；冷卻快→礦物結晶小（如玄武岩），冷卻慢→結晶大（如花岡岩）。",
            "沉積岩：碎屑經風化、搬運、沉積、壓密膠結而成，常有層理，是唯一可能含化石的岩類（如砂岩、頁岩、石灰岩）。",
            "變質岩：原有岩石在高溫高壓下『固態』改造，礦物重新排列，常見葉理（如大理岩由石灰岩變質、片麻岩）。",
            "岩石循環：三大岩類可互相轉換，岩漿冷卻成火成岩，任何岩石風化堆積成沉積岩，受高溫高壓變質，再熔融回岩漿。"
          ],
          "trap": "成因動詞別搞混：火成=『冷卻』、沉積=『堆積膠結』、變質=『高溫高壓改造（仍是固態，未熔化）』；一旦熔化變岩漿就不是變質岩了。",
          "svg": "<svg viewBox=\"0 0 360 200\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"100\" r=\"78\" fill=\"none\" stroke=\"#3a342e\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/><rect x=\"130\" y=\"6\" width=\"100\" height=\"30\" rx=\"5\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"180\" y=\"26\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">火成岩</text><rect x=\"4\" y=\"150\" width=\"100\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"54\" y=\"170\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">沉積岩</text><rect x=\"256\" y=\"150\" width=\"100\" height=\"30\" rx=\"5\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"306\" y=\"170\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">變質岩</text><path d=\"M214 30 A78 78 0 0 1 300 150\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"300,150 296,138 308,142\" fill=\"#c9755c\"/><path d=\"M256 168 A78 78 0 0 1 104 168\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"104,168 116,164 112,176\" fill=\"#c9755c\"/><path d=\"M60 150 A78 78 0 0 1 146 30\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"146,30 134,34 140,22\" fill=\"#c9755c\"/><text x=\"180\" y=\"104\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">岩石循環</text></svg>",
          "caption": "三大岩類經冷卻、堆積、變質互相循環轉換。"
        },
        {
          "h": "礦物的辨識",
          "points": [
            "礦物是天然、無機、有固定化學成分與結晶構造的固體；岩石是一種或多種礦物的集合體。",
            "辨識性質：硬度（莫氏硬度1滑石～10鑽石）、顏色、條痕、解理、光澤、比重。",
            "條痕（礦物粉末顏色）比外觀顏色更可靠，例如黃鐵礦外觀金黃但條痕為黑色。"
          ],
          "trap": "『礦物』與『岩石』不同層級：礦物是組成單位，岩石是集合體；別把花岡岩當成一種礦物。",
          "svg": "<svg viewBox=\"0 0 360 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"30\" y=\"40\" width=\"110\" height=\"70\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><polygon points=\"55,75 70,55 85,78 70,95\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"1\"/><polygon points=\"95,90 112,68 128,92 110,102\" fill=\"#c9755c\" stroke=\"#3a342e\" stroke-width=\"1\"/><circle cx=\"95\" cy=\"60\" r=\"9\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"85\" y=\"128\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">岩石（集合體）</text><line x1=\"148\" y1=\"75\" x2=\"205\" y2=\"75\" stroke=\"#3a342e\" stroke-width=\"2\"/><polygon points=\"205,75 195,70 195,80\" fill=\"#3a342e\"/><rect x=\"212\" y=\"45\" width=\"54\" height=\"60\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><polygon points=\"225,90 239,62 253,90\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"239\" y=\"125\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">單一礦物</text><rect x=\"285\" y=\"118\" width=\"60\" height=\"24\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"315\" y=\"134\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">條痕</text><line x1=\"285\" y1=\"118\" x2=\"285\" y2=\"118\" stroke=\"#3a342e\"/><text x=\"300\" y=\"34\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">硬度·解理</text></svg>",
          "caption": "岩石由多種礦物組成，礦物靠硬度、條痕等性質辨識。"
        }
      ],
      "quiz": [
        {
          "stem": "在某岩層中發現大量三葉蟲化石，下列推論最合理的是？",
          "options": [
            "該岩層為古生代形成的沉積岩",
            "由岩漿在地底冷卻形成的火成岩",
            "為高溫高壓造成的變質岩",
            "形成於地函深處的岩石"
          ],
          "answer": 0,
          "explanation": "含化石的岩石必為沉積岩，因為化石需在堆積過程中被埋藏保存；火成岩高溫、變質岩高溫高壓都會破壞生物遺骸。三葉蟲是古生代的標準化石。",
          "trap": "看到化石先鎖定『沉積岩』，再用化石種類判定地質年代；別被『地底、高溫』等字眼誘導選火成或變質。"
        },
        {
          "stem": "甲、乙兩塊火成岩成分相近，但甲的礦物結晶顆粒明顯比乙大。關於兩者的形成，最合理的解釋是？",
          "options": [
            "甲冷卻速度較慢，乙冷卻速度較快",
            "甲冷卻速度較快，乙冷卻速度較慢",
            "甲含化石較多",
            "乙受到較大的壓力"
          ],
          "answer": 0,
          "explanation": "岩漿冷卻愈慢，礦物有愈充足時間生長，結晶顆粒愈大（如深處的花岡岩）；冷卻快則結晶細小（如地表的玄武岩）。甲顆粒大代表冷卻慢。",
          "trap": "結晶大小反映『冷卻快慢』而非壓力或時間久遠；冷卻慢→大結晶，要記反向關係，別直覺以為快冷會長更大。"
        },
        {
          "stem": "石灰岩經高溫高壓作用後最可能變成下列何者？",
          "options": [
            "大理岩",
            "玄武岩",
            "花岡岩",
            "礫岩"
          ],
          "answer": 0,
          "explanation": "石灰岩（沉積岩）經變質作用形成大理岩（變質岩）。玄武岩、花岡岩為火成岩，礫岩為沉積岩。",
          "trap": "變質作用是『沉積岩→變質岩』，產物仍為固態岩石；石灰岩對應大理岩、砂岩對應石英岩，要記對配對。"
        },
        {
          "stem": "甲岩漿在地表迅速冷卻、乙岩漿在地底深處緩慢冷卻，兩者成分相同。又知丙岩石中夾有層理與貝殼化石。關於三者岩類與結晶的判斷，何者完全正確？",
          "options": [
            "甲、乙皆為火成岩且乙結晶較大；丙為沉積岩",
            "甲、乙皆為火成岩且甲結晶較大；丙為變質岩",
            "甲為火成岩、乙為變質岩；丙為沉積岩",
            "甲、乙、丙皆為火成岩"
          ],
          "answer": 0,
          "explanation": "甲、乙都由岩漿冷卻而成，皆屬火成岩；乙在地底深處冷卻慢，礦物有更多時間生長，結晶較大（如花岡岩），甲在地表冷卻快故結晶細小（如玄武岩）。丙含層理與化石，必為沉積岩。",
          "trap": "兩者都是火成岩，差別只在冷卻快慢決定結晶大小；別把『冷卻慢』誤判為變質作用，變質是固態高溫高壓改造、不經熔融冷卻。含化石的丙一定是沉積岩。"
        }
      ]
    },
    {
      "id": "e-plate-tectonics",
      "name": "板塊運動與地震火山",
      "sub": "earth",
      "week": "上學期 11月",
      "notes": [
        {
          "h": "板塊構造與三種交界",
          "points": [
            "地球由內而外分為地核、地函、地殼；板塊是地殼與上部地函合稱的『岩石圈』，漂浮在軟流圈上緩慢移動。",
            "張裂型（分離）交界：板塊分開，岩漿上湧，形成中洋脊與海底擴張（如大西洋中洋脊）。",
            "聚合型（碰撞）交界：板塊相撞，常有隱沒帶、海溝、造山運動、火山與大地震（如環太平洋）。",
            "錯動型（平移）交界：兩板塊水平錯動，多發生地震但少火山（如聖安地列斯斷層）。"
          ],
          "formula": "震源（地下發生處）正上方的地表點＝震央。",
          "trap": "『震源』在地下、『震央』在地表，兩者位置上下對應；火山多在張裂與聚合帶，錯動帶通常沒有火山。",
          "svg": "<svg viewBox=\"0 0 400 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"60\" width=\"120\" height=\"60\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"270\" y=\"60\" width=\"120\" height=\"60\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"70\" y1=\"60\" x2=\"55\" y2=\"60\" stroke=\"#c9755c\" stroke-width=\"2\"/><line x1=\"30\" y1=\"50\" x2=\"60\" y2=\"50\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"28,50 40,45 40,55\" fill=\"#c9755c\"/><line x1=\"110\" y1=\"50\" x2=\"80\" y2=\"50\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"112,50 100,45 100,55\" fill=\"#c9755c\"/><text x=\"70\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">張裂</text><text x=\"70\" y=\"40\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">中洋脊</text><line x1=\"300\" y1=\"50\" x2=\"330\" y2=\"50\" stroke=\"#3a342e\" stroke-width=\"2\"/><polygon points=\"332,50 320,45 320,55\" fill=\"#3a342e\"/><line x1=\"360\" y1=\"50\" x2=\"330\" y2=\"50\" stroke=\"#3a342e\" stroke-width=\"2\"/><polygon points=\"328,50 340,45 340,55\" fill=\"#3a342e\"/><text x=\"330\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">聚合</text><text x=\"330\" y=\"40\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">海溝·造山</text><circle cx=\"200\" cy=\"150\" r=\"7\" fill=\"#d98072\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"200\" y=\"175\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">震源</text><line x1=\"200\" y1=\"143\" x2=\"200\" y2=\"120\" stroke=\"#3a342e\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><circle cx=\"200\" cy=\"120\" r=\"4\" fill=\"#f0a52e\"/><text x=\"200\" y=\"114\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">震央</text></svg>",
          "caption": "張裂生成中洋脊、聚合形成海溝；震源在地下、震央在其正上方地表。"
        },
        {
          "h": "臺灣的板塊背景",
          "points": [
            "臺灣位於歐亞板塊與菲律賓海板塊聚合（碰撞）交界，因此地震、造山活動頻繁，山脈持續抬升。",
            "規模（芮氏規模）表示地震釋放能量大小，一次地震只有一個規模；震度表示某地搖晃的程度，各地不同。"
          ],
          "trap": "『規模』與『震度』不同：規模一震只有一個值、能量大小；震度因距離與地質而各地不同，離震央近通常震度大。",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,40 120,30 150,90 100,160 40,140\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"75\" y=\"95\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">歐亞板塊</text><polygon points=\"230,30 340,50 330,150 240,160 200,90\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"275\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">菲律賓海板塊</text><line x1=\"150\" y1=\"95\" x2=\"185\" y2=\"95\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><polygon points=\"185,95 173,90 173,100\" fill=\"#c9755c\"/><line x1=\"200\" y1=\"95\" x2=\"165\" y2=\"95\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><polygon points=\"165,95 177,90 177,100\" fill=\"#c9755c\"/><polygon points=\"170,55 178,75 162,75\" fill=\"#5aa874\" stroke=\"#3a342e\" stroke-width=\"1\"/><polygon points=\"170,68 180,90 160,90\" fill=\"#5aa874\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"172\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">擠壓抬升</text><text x=\"172\" y=\"42\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">聚合</text></svg>",
          "caption": "臺灣夾在歐亞與菲律賓海板塊聚合處，擠壓使山脈持續抬升。"
        }
      ],
      "quiz": [
        {
          "stem": "臺灣地震頻繁，主要原因是位於下列哪兩個板塊的交界？",
          "options": [
            "歐亞板塊與菲律賓海板塊",
            "太平洋板塊與北美板塊",
            "印度板塊與非洲板塊",
            "南極板塊與南美板塊"
          ],
          "answer": 0,
          "explanation": "臺灣位於歐亞板塊與菲律賓海板塊的聚合交界，板塊碰撞擠壓造成頻繁地震與造山運動。",
          "trap": "別把『太平洋板塊』直接套到臺灣；臺灣是歐亞與菲律賓海板塊互相擠壓，這也是中央山脈持續抬升的原因。"
        },
        {
          "stem": "某次地震在 A 地測得震度 5 級、B 地測得震度 3 級，下列敘述何者正確？",
          "options": [
            "這次地震的規模只有一個固定值，A 地較靠近震央",
            "這次地震有兩個規模",
            "B 地距離震央較近",
            "震度與規模意義完全相同"
          ],
          "answer": 0,
          "explanation": "一次地震只有單一規模（能量大小），但震度隨各地搖晃程度而異；震度大通常代表離震央較近，故 A 地（震度5）較近。",
          "trap": "震度大小可比較『離震央遠近』，但規模是全震唯一值；別把不同地點的震度當成不同規模。"
        },
        {
          "stem": "在板塊的『張裂型』交界處，最可能出現下列哪種地形或現象？",
          "options": [
            "中洋脊與海底擴張",
            "高聳的褶皺山脈",
            "深邃的海溝",
            "板塊水平錯動的平移斷層"
          ],
          "answer": 0,
          "explanation": "張裂型交界板塊分離、岩漿上湧形成新海洋地殼，造成中洋脊與海底擴張。褶皺山脈與海溝屬聚合型，平移斷層屬錯動型。",
          "trap": "張裂＝拉開生成新地殼（中洋脊）；聚合才有海溝、造山。別把『海溝』誤配到張裂帶。"
        },
        {
          "stem": "某測站記錄到一次地震，P 波（速度約 8 km/s）比 S 波（速度約 4 km/s）早 6 秒抵達。若波皆由震央沿地表直線傳來，則此測站距震央約多少公里？",
          "options": [
            "48 km",
            "24 km",
            "12 km",
            "72 km"
          ],
          "answer": 0,
          "explanation": "設距離 d。P 波時間 = d/8、S 波時間 = d/4，到時差 = d/4 − d/8 = d/8 = 6 秒，故 d = 48 km。P 波快先到、S 波慢後到，兩者時間差隨距離增大。",
          "trap": "不能直接用兩速度差 4 km/s 乘 6 秒！到時差是『兩段時間相減』（d/4−d/8），要解出 d/8=6 才得 48 km；也別把 P、S 波快慢記反。"
        }
      ]
    },
    {
      "id": "e-surface-taiwan",
      "name": "地表作用與臺灣地質",
      "sub": "earth",
      "week": "上學期 12月",
      "notes": [
        {
          "h": "風化、侵蝕、搬運、堆積",
          "points": [
            "風化：岩石在原地被破壞（物理風化如熱脹冷縮、凍裂；化學風化如溶蝕）。",
            "侵蝕→搬運→堆積：流水、風、冰川、海浪將碎屑帶離並在他處沉積，是形成沉積岩的前段過程。",
            "河流上游侵蝕強，常見V型谷、瀑布；下游堆積強，形成氾濫平原、三角洲。",
            "外營力（風化侵蝕）使地表趨於平緩；內營力（板塊、火山、造山）使地表起伏增大。"
          ],
          "trap": "『風化』是在原地破壞，『侵蝕』含搬離；兩者順序是先風化、後侵蝕搬運，別顛倒。",
          "svg": "<svg viewBox=\"0 0 380 190\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"20,40 70,40 50,90 90,90 60,160 20,160\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"45\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">上游</text><polyline points=\"55,55 50,80 65,110 55,150\" fill=\"none\" stroke=\"#5aa874\" stroke-width=\"3\"/><text x=\"95\" y=\"70\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">V型谷·侵蝕</text><line x1=\"110\" y1=\"120\" x2=\"250\" y2=\"120\" stroke=\"#5aa874\" stroke-width=\"3\"/><polygon points=\"250,120 240,115 240,125\" fill=\"#5aa874\"/><text x=\"180\" y=\"112\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">搬運</text><polygon points=\"260,120 350,110 360,160 260,160\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"310\" y=\"148\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">三角洲·堆積</text><text x=\"310\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">下游</text></svg>",
          "caption": "上游侵蝕成V型谷、下游搬運堆積成三角洲。"
        },
        {
          "h": "臺灣特殊地質地形",
          "points": [
            "臺灣多斷層與褶皺，東部有海岸山脈與花東縱谷（兩板塊縫合帶）。",
            "野柳女王頭等屬差別侵蝕（軟硬岩抗蝕不同）形成；石灰岩區可發育溶蝕地形。"
          ],
          "trap": "野柳奇岩主要是『海浪侵蝕＋差別風化侵蝕』造成，不是火山噴發堆出來的。",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"100\" width=\"320\" height=\"70\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1\"/><path d=\"M120 100 q5 -40 30 -42 q25 2 30 42\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><ellipse cx=\"150\" cy=\"58\" rx=\"26\" ry=\"16\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"126\" y1=\"100\" x2=\"126\" y2=\"78\" stroke=\"#3a342e\" stroke-width=\"1\"/><line x1=\"174\" y1=\"100\" x2=\"174\" y2=\"78\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"150\" y=\"55\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">硬</text><text x=\"150\" y=\"92\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">軟</text><text x=\"150\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">女王頭</text><line x1=\"240\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"208,110 220,105 220,115\" fill=\"#c9755c\"/><line x1=\"245\" y1=\"125\" x2=\"215\" y2=\"125\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"213,125 225,120 225,130\" fill=\"#c9755c\"/><text x=\"285\" y=\"122\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">海浪侵蝕</text></svg>",
          "caption": "軟硬岩抗蝕不同，差別侵蝕雕出野柳女王頭。"
        }
      ],
      "quiz": [
        {
          "stem": "下列關於『風化』與『侵蝕』的敘述，何者正確？",
          "options": [
            "風化使岩石在原地崩解，侵蝕則包含把碎屑搬離原地",
            "侵蝕一定發生在風化之前",
            "風化只會發生在河流中",
            "兩者都只靠化學作用進行"
          ],
          "answer": 0,
          "explanation": "風化是岩石在原地被分解破壞；侵蝕是搬運營力（流水、風等）把風化產物帶離原地。順序為先風化、再侵蝕搬運。",
          "trap": "關鍵差別在『有沒有搬離』：風化在原地、侵蝕含搬運；且風化在先。別把兩者當同義詞或顛倒順序。"
        },
        {
          "stem": "河流的上游與下游相比，下列敘述何者最合理？",
          "options": [
            "上游侵蝕作用強，常見V型谷；下游堆積作用強，常見三角洲",
            "上游堆積作用強，常形成三角洲",
            "下游侵蝕作用強，常形成瀑布",
            "上下游的作用完全相同"
          ],
          "answer": 0,
          "explanation": "上游坡陡、流速快、下切侵蝕強，形成V型谷與瀑布；下游坡緩、流速慢、搬運力下降而堆積，形成氾濫平原、三角洲。",
          "trap": "把『侵蝕』配上游、『堆積』配下游；三角洲是堆積地形屬下游，別錯配到上游。"
        },
        {
          "stem": "若某地區長期『內營力作用大於外營力作用』，則此地區的地表最可能呈現何種變化？",
          "options": [
            "起伏逐漸增大，山脈持續抬升而險峻",
            "逐漸被夷平成平坦準平原",
            "完全不發生任何地形變化",
            "只會沉積出三角洲而無山脈"
          ],
          "answer": 0,
          "explanation": "內營力（板塊擠壓、造山、火山）使地表起伏增大；外營力（風化、侵蝕）使地表趨於平緩。內營力大於外營力時，抬升速度超過削平速度，地表起伏增大、山勢險峻，正如造山活躍的臺灣。",
          "trap": "內營力『起』、外營力『平』，方向相反；本題比的是兩者相對大小，內營力佔上風時地表變陡而非被夷平，別把兩種營力效果記反。"
        },
        {
          "stem": "臺灣東部的『花東縱谷』被視為兩大板塊的縫合帶。關於此地形的成因，下列敘述最合理的是？",
          "options": [
            "位於歐亞板塊與菲律賓海板塊相接處，因板塊聚合擠壓而成",
            "由火山噴發的熔岩直接堆疊而成",
            "完全由河流下游堆積三角洲填出",
            "因板塊張裂拉開形成中洋脊"
          ],
          "answer": 0,
          "explanation": "花東縱谷是歐亞板塊（中央山脈側）與菲律賓海板塊（海岸山脈側）的縫合帶，兩板塊聚合擠壓接合於此，地震活動頻繁。並非火山堆疊或張裂形成。",
          "trap": "『縫合帶』是兩板塊聚合相接處，不是張裂；別被『縱谷=低地』誤導成單純河流堆積或張裂下陷，它的核心成因是板塊碰撞接合。"
        }
      ]
    },
    {
      "id": "e-atmosphere-weather",
      "name": "大氣組成與天氣變化",
      "sub": "earth",
      "week": "下學期 2月",
      "notes": [
        {
          "h": "大氣組成與氣團、鋒面",
          "points": [
            "乾空氣主要成分：氮約78%、氧約21%，其餘為氬、二氧化碳等；水氣含量變動大、影響天氣。",
            "氣團：大範圍性質（溫度、濕度）均勻的空氣，如冷氣團、暖氣團。",
            "冷鋒：冷氣團推向暖氣團，過境後氣溫下降、氣壓上升，常短時強降雨；暖鋒過境後氣溫上升。",
            "滯留鋒（如梅雨鋒面）：冷暖勢力相當而少移動，常帶來連續性降雨（臺灣5、6月梅雨）。"
          ],
          "trap": "冷鋒過境後是『氣溫降、氣壓升』；別記反成升溫。降雨在鋒面附近，冷鋒雨區窄而強、暖鋒雨區寬而緩。",
          "svg": "<svg viewBox=\"0 0 380 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"120\" width=\"360\" height=\"50\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1\"/><path d=\"M40 120 L160 120 L120 60 Z\" fill=\"#7fae9e\" fill-opacity=\"0.5\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"80\" y=\"110\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">冷氣團</text><path d=\"M160 120 L340 120 L340 70 Z\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"260\" y=\"105\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">暖氣團</text><line x1=\"160\" y1=\"120\" x2=\"205\" y2=\"120\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><polygon points=\"205,120 193,114 193,126\" fill=\"#c9755c\"/><polygon points=\"125,62 133,54 117,54\" fill=\"#3a342e\"/><text x=\"190\" y=\"145\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">冷鋒推進</text><line x1=\"150\" y1=\"50\" x2=\"160\" y2=\"75\" stroke=\"#5aa874\" stroke-width=\"2\"/><line x1=\"135\" y1=\"50\" x2=\"145\" y2=\"75\" stroke=\"#5aa874\" stroke-width=\"2\"/><text x=\"120\" y=\"40\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">過境後降溫升壓</text></svg>",
          "caption": "冷鋒冷氣團推向暖氣團，過境後降溫、升壓並有強降雨。"
        },
        {
          "h": "颱風",
          "points": [
            "颱風是熱帶海洋上的低氣壓系統，需溫暖海水（約26°C以上）提供能量。",
            "北半球颱風近地面氣流『逆時針』向中心旋轉吹入；中心為颱風眼，風雨反而最小。",
            "颱風登陸後因失去暖海水能量補給且地表摩擦增大，強度會逐漸減弱。"
          ],
          "trap": "颱風眼是『最平靜』處，不是最強處；最強風雨在眼牆（眼的外圍）。北半球氣流逆時針旋入，別與南半球搞混。",
          "svg": "<svg viewBox=\"0 0 320 190\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"160\" cy=\"95\" r=\"75\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1\"/><path d=\"M160 95 m0 -55 a55 55 0 0 0 -48 28\" fill=\"none\" stroke=\"#7fae9e\" stroke-width=\"3\"/><path d=\"M160 95 m0 55 a55 55 0 0 0 48 -28\" fill=\"none\" stroke=\"#7fae9e\" stroke-width=\"3\"/><path d=\"M160 95 m-55 0 a55 55 0 0 0 28 48\" fill=\"none\" stroke=\"#7fae9e\" stroke-width=\"3\"/><path d=\"M160 95 m55 0 a55 55 0 0 0 -28 -48\" fill=\"none\" stroke=\"#7fae9e\" stroke-width=\"3\"/><polygon points=\"112,67 108,78 120,75\" fill=\"#7fae9e\"/><circle cx=\"160\" cy=\"95\" r=\"16\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"160\" y=\"99\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">眼</text><text x=\"160\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">逆時針吹入</text><text x=\"160\" y=\"182\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">眼牆風雨最強·眼最平靜</text></svg>",
          "caption": "北半球颱風逆時針旋入，颱風眼最平靜、眼牆風雨最強。"
        }
      ],
      "quiz": [
        {
          "stem": "冷鋒過境後，某地的天氣變化最可能為下列何者？",
          "options": [
            "氣溫下降、氣壓上升",
            "氣溫上升、氣壓下降",
            "氣溫上升、氣壓上升",
            "氣溫與氣壓都不變"
          ],
          "answer": 0,
          "explanation": "冷鋒是冷氣團主動推進取代暖氣團，過境後該地被冷氣團籠罩，氣溫下降；冷空氣密度大，氣壓上升。",
          "trap": "冷鋒『過境後』由冷氣團控制：降溫＋升壓。別把過境前後的趨勢搞反，也別與暖鋒（過境後升溫）混淆。"
        },
        {
          "stem": "關於北半球的颱風，下列敘述何者正確？",
          "options": [
            "近地面氣流逆時針旋轉吹入中心，颱風眼風雨最小",
            "颱風眼是風雨最強烈的地方",
            "氣流順時針吹出中心",
            "登陸後因海水補給而增強"
          ],
          "answer": 0,
          "explanation": "北半球颱風為低壓系統，近地面氣流逆時針旋入中心；中心颱風眼下沉氣流使其風雨最小；登陸後失去暖海水能量補給會減弱。",
          "trap": "颱風眼＝最平靜，最強在眼牆；北半球逆時針『吹入』（不是吹出），登陸後是減弱不是增強。"
        },
        {
          "stem": "臺灣每年5、6月常有連續多日降雨的『梅雨』，主要與下列何種天氣系統有關？",
          "options": [
            "滯留鋒（鋒面少移動，冷暖勢力相當）",
            "快速移動的冷鋒",
            "高氣壓中心籠罩",
            "颱風眼通過"
          ],
          "answer": 0,
          "explanation": "梅雨是滯留鋒（冷暖氣團勢力相當、鋒面在臺灣附近徘徊少移動）造成的連續性降雨。",
          "trap": "梅雨特徵是『連續多日』，對應滯留鋒（不移動）；快速移動的冷鋒雨勢短暫，與梅雨持續特性不符。"
        },
        {
          "stem": "下列關於『乾空氣組成』與『氣壓隨高度變化』的敘述，何者完全正確？",
          "options": [
            "乾空氣中氮約佔78%、氧約佔21%；高度愈高、空氣愈稀薄、氣壓愈低",
            "乾空氣中氧約佔78%、氮約佔21%；高度愈高氣壓愈高",
            "二氧化碳是乾空氣中含量最多的氣體；氣壓不隨高度改變",
            "水氣是乾空氣的固定主成分；高山上氣壓比平地高"
          ],
          "answer": 0,
          "explanation": "乾空氣主要成分為氮約78%、氧約21%，其餘為氬、二氧化碳等微量。氣壓是上方空氣重量造成，高度愈高、上方空氣愈少、氣壓愈低，故高山氣壓比平地低。",
          "trap": "氮多於氧（78%>21%），別把兩者比例對調；且『乾空氣』不含水氣。氣壓隨高度『升高而降低』，高山氣壓比平地低，別記反。"
        }
      ]
    },
    {
      "id": "e-water-ocean",
      "name": "水循環與海洋",
      "sub": "earth",
      "week": "下學期 2月",
      "notes": [
        {
          "h": "水循環",
          "points": [
            "水循環由太陽能與重力驅動：蒸發（含植物蒸散）→凝結成雲→降水→地表逕流或入滲→匯入海洋。",
            "地球的水以海洋（鹹水）占絕大多數，淡水比例極小，可用淡水更少。",
            "水在循環中改變狀態（固、液、氣）但總量大致守恆。"
          ],
          "trap": "水循環的主要能量來源是『太陽能』；蒸發吸熱、凝結放熱，別把凝結誤認為吸熱過程。",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"140\" width=\"360\" height=\"40\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"60\" y=\"165\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">海洋</text><circle cx=\"60\" cy=\"30\" r=\"16\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"60\" y=\"34\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">日</text><ellipse cx=\"180\" cy=\"55\" rx=\"40\" ry=\"18\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"180\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">雲(凝結)</text><line x1=\"90\" y1=\"135\" x2=\"150\" y2=\"75\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"150,75 138,79 145,87\" fill=\"#c9755c\"/><text x=\"95\" y=\"105\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">蒸發</text><line x1=\"230\" y1=\"70\" x2=\"280\" y2=\"130\" stroke=\"#5aa874\" stroke-width=\"2\"/><polygon points=\"280,130 268,124 276,118\" fill=\"#5aa874\"/><text x=\"285\" y=\"95\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">降水</text><line x1=\"280\" y1=\"140\" x2=\"110\" y2=\"152\" stroke=\"#5aa874\" stroke-width=\"2\" stroke-dasharray=\"3 3\"/><text x=\"230\" y=\"172\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">逕流回海·總量守恆</text></svg>",
          "caption": "太陽能驅動蒸發、凝結、降水、逕流，水總量守恆。"
        },
        {
          "h": "洋流與潮汐",
          "points": [
            "洋流：海水大規模流動，可分暖流（由低緯流向高緯）與寒流（由高緯流向低緯），會調節沿岸氣候。",
            "黑潮為流經臺灣東岸的強勁暖流，使附近氣候較溫暖。",
            "潮汐：海水面週期性升降，主要由月球（其次太陽）引力造成；一天約有兩次漲潮兩次退潮。",
            "大潮（潮差最大）發生在朔（新月）與望（滿月），此時日、地、月接近一直線，引力疊加。"
          ],
          "trap": "潮汐主因是『月球引力』（月球較近，影響大於太陽）；大潮在新月與滿月（成一直線），小潮在上下弦（成直角），別配反。",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"150\" cy=\"95\" r=\"22\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"150\" y=\"99\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">地</text><ellipse cx=\"150\" cy=\"95\" rx=\"40\" ry=\"24\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><circle cx=\"280\" cy=\"95\" r=\"12\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"280\" y=\"99\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">月</text><circle cx=\"40\" cy=\"95\" r=\"16\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"40\" y=\"99\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">日</text><line x1=\"56\" y1=\"95\" x2=\"268\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text x=\"110\" y=\"82\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">隆起</text><text x=\"190\" y=\"82\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">隆起</text><text x=\"180\" y=\"175\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">日地月一直線→大潮</text></svg>",
          "caption": "日地月接近一直線時引力疊加，海面兩側隆起形成大潮。"
        }
      ],
      "quiz": [
        {
          "stem": "下列關於水循環的敘述，何者正確？",
          "options": [
            "驅動水循環的主要能量來自太陽，水會在固、液、氣三態間轉換",
            "水循環的能量主要來自地球內部的地熱",
            "水循環過程中水的總量會大量減少",
            "降水後的水不會再回到海洋"
          ],
          "answer": 0,
          "explanation": "水循環主要由太陽能（提供蒸發所需熱量）與重力共同驅動，水在三態間轉換，總量大致守恆並最終匯回海洋。",
          "trap": "主要能量是『太陽能』不是地熱；水循環是封閉循環，總量守恆，降水最終會經逕流回到海洋。"
        },
        {
          "stem": "海邊在農曆十五（滿月）附近常出現潮差特別大的『大潮』，最主要的原因是？",
          "options": [
            "太陽、地球、月球接近排成一直線，引力作用疊加",
            "此時月球距離地球最遠",
            "此時只有太陽引力作用",
            "此時月球與太陽引力方向互相抵消"
          ],
          "answer": 0,
          "explanation": "滿月（望）與新月（朔）時，日、地、月接近一直線，太陽與月球的引潮力方向疊加，造成潮差最大的大潮。",
          "trap": "大潮成因是引力『疊加』（一直線），小潮才是互相抵消（上下弦、成直角）；滿月與新月都會大潮，別只記滿月。"
        },
        {
          "stem": "流經臺灣東岸、使沿岸氣候較溫暖的強勁洋流是？",
          "options": [
            "黑潮（暖流）",
            "親潮（寒流）",
            "加利福尼亞涼流",
            "祕魯涼流"
          ],
          "answer": 0,
          "explanation": "黑潮是由低緯度流向高緯度的暖流，流經臺灣東部海域，帶來溫暖海水，調節沿岸氣候使其較溫暖。",
          "trap": "由低緯往高緯的是『暖流』；黑潮屬暖流故使氣候變暖。寒流由高緯往低緯、會降溫，別配錯。"
        },
        {
          "stem": "某港口今天早上 6:00 出現一次滿潮（漲潮最高）。若一天約有兩次滿潮、相鄰兩次滿潮約間隔 12 小時 25 分，則當天下一次滿潮最接近下列哪個時刻？",
          "options": [
            "約 18:25",
            "約 12:00",
            "約 12:25",
            "約 18:00"
          ],
          "answer": 0,
          "explanation": "一天約有兩次滿潮，相鄰兩次滿潮約相隔半個太陰日（約12小時25分）。由早上 6:00 加 12 小時 25 分，得約 18:25。潮汐週期略長於 12 小時是因月球本身也在公轉、每天潮時會延後約 50 分鐘。",
          "trap": "不是剛好 12 小時（18:00）！相鄰滿潮間隔是約 12 小時 25 分而非整 12 小時，所以每天潮時會逐日延後，別用整 12 小時硬算。"
        }
      ]
    },
    {
      "id": "e-earth-motion",
      "name": "地球的運動與四季",
      "sub": "earth",
      "week": "下學期 3月",
      "notes": [
        {
          "h": "自轉與晝夜",
          "points": [
            "地球自轉：繞地軸由西向東自轉一周約24小時，造成晝夜交替與日月星辰東升西落（視運動）。",
            "因自轉由西向東，故太陽『東升西落』，這是視運動而非太陽真的繞地球。",
            "公轉：地球繞太陽一周約365.25天（一年），是四季與晝夜長短變化的背景。"
          ],
          "trap": "晝夜交替是『自轉』造成、四季是『公轉＋地軸傾斜』造成，別把兩者搞混。",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"95\" r=\"18\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"40\" y=\"99\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">日</text><circle cx=\"210\" cy=\"95\" r=\"45\" fill=\"none\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><path d=\"M210 50 A45 45 0 0 0 210 140 Z\" fill=\"#3a342e\" fill-opacity=\"0.25\"/><line x1=\"58\" y1=\"95\" x2=\"165\" y2=\"95\" stroke=\"#f0a52e\" stroke-width=\"2\"/><line x1=\"58\" y1=\"80\" x2=\"165\" y2=\"80\" stroke=\"#f0a52e\" stroke-width=\"2\"/><line x1=\"58\" y1=\"110\" x2=\"165\" y2=\"110\" stroke=\"#f0a52e\" stroke-width=\"2\"/><text x=\"175\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">晝</text><text x=\"235\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">夜</text><path d=\"M210 45 a30 12 0 0 1 26 8\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"236,53 226,50 230,60\" fill=\"#c9755c\"/><text x=\"280\" y=\"99\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">由西向東自轉</text></svg>",
          "caption": "地球由西向東自轉，向陽面為晝、背陽面為夜。"
        },
        {
          "h": "四季成因與晝夜長短",
          "points": [
            "四季主因是地軸傾斜約23.5°且方向固定，使陽光直射點在南北回歸線間移動，造成各地受熱差異。",
            "夏季太陽直射較高、白晝較長、單位面積受熱多故較熱；冬季相反。",
            "夏至（約6/21）北半球白晝最長；冬至（約12/22）白晝最短；春分、秋分晝夜等長。",
            "北半球夏季時南半球為冬季，季節相反。"
          ],
          "trap": "四季成因是『地軸傾斜』不是地球離太陽遠近！事實上北半球冬季時地球反而較接近太陽，遠近不是主因。",
          "svg": "<svg viewBox=\"0 0 380 190\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"190\" cy=\"95\" r=\"16\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"190\" y=\"99\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">日</text><circle cx=\"60\" cy=\"95\" r=\"15\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"54\" y1=\"82\" x2=\"66\" y2=\"108\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"60\" y=\"135\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">北半球夏</text><circle cx=\"320\" cy=\"95\" r=\"15\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"314\" y1=\"82\" x2=\"326\" y2=\"108\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"320\" y=\"135\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">北半球冬</text><ellipse cx=\"190\" cy=\"95\" rx=\"130\" ry=\"55\" fill=\"none\" stroke=\"#3a342e\" stroke-width=\"1\" stroke-dasharray=\"4 4\"/><text x=\"190\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">地軸恆傾23.5°·直射點移動</text></svg>",
          "caption": "地軸固定傾斜23.5°，公轉使直射點南北移動而生四季。"
        }
      ],
      "quiz": [
        {
          "stem": "造成地球四季變化的最主要原因是？",
          "options": [
            "地軸傾斜約23.5°，使陽光直射點在南北回歸線間移動",
            "地球公轉軌道為橢圓，冬季離太陽遠所以冷",
            "太陽本身亮度隨季節改變",
            "地球自轉速度隨季節改變"
          ],
          "answer": 0,
          "explanation": "四季主因是地軸傾斜且方向固定，公轉時陽光直射緯度改變，造成各地日照時數與太陽高度角不同而有冷暖。與地球離太陽遠近無關。",
          "trap": "最常見的錯誤觀念就是『離太陽近遠』；其實北半球冬季地球更近太陽。四季關鍵是『地軸傾斜』造成直射角與晝長差異。"
        },
        {
          "stem": "在臺灣（北半球），下列哪一天的白晝時間最長？",
          "options": [
            "夏至（約6月21日）",
            "冬至（約12月22日）",
            "春分（約3月21日）",
            "秋分（約9月23日）"
          ],
          "answer": 0,
          "explanation": "北半球夏至時太陽直射北回歸線附近，北半球各地白晝最長、黑夜最短。冬至白晝最短，春分與秋分晝夜約等長。",
          "trap": "白晝最長在『夏至』、最短在冬至；春分秋分晝夜等長。別把『最熱的時間』與『白晝最長』混為一談（夏至不一定最熱）。"
        },
        {
          "stem": "太陽每天『東升西落』的現象，是由下列何者造成？",
          "options": [
            "地球由西向東自轉",
            "地球繞太陽公轉",
            "太陽繞著地球轉",
            "月球的引力"
          ],
          "answer": 0,
          "explanation": "地球自西向東自轉，使我們觀察到的太陽、月亮、星星呈現東升西落的視運動，並非天體真的繞地球運行。",
          "trap": "東升西落是『自轉』造成的視運動，不是公轉，更不是太陽真的繞地球；自轉方向是由西向東。"
        },
        {
          "stem": "在北半球的夏至這天，臺北（緯度較高）與屏東（緯度較低，較接近北回歸線）相比，下列敘述最合理的是？",
          "options": [
            "屏東正午太陽高度角較大，臺北白晝時間較長",
            "臺北正午太陽高度角較大，屏東白晝時間較長",
            "兩地太陽高度角與白晝時間都完全相同",
            "屏東正午太陽高度角較大，且白晝也較長"
          ],
          "answer": 0,
          "explanation": "夏至太陽直射北回歸線附近，愈接近直射緯度（屏東）正午太陽高度角愈大；而北半球夏至時，緯度愈高白晝愈長，故臺北白晝較屏東長。兩項判準方向不同，要分開判斷。",
          "trap": "『太陽高度角大』與『白晝長』在夏至的北半球並非同一地最佔優：屏東離直射點近故高度角大，但白晝長短看緯度高低，緯度高的臺北白晝反而較長，別混為一談。"
        }
      ]
    },
    {
      "id": "e-moon-eclipse",
      "name": "月相與日月食",
      "sub": "earth",
      "week": "下學期 3月",
      "notes": [
        {
          "h": "月相變化",
          "points": [
            "月球本身不發光，靠反射陽光；因月球繞地球公轉，日、地、月相對位置改變而有月相盈虧。",
            "順序：新月（朔，看不到）→眉月→上弦月→盈凸→滿月（望）→虧凸→下弦月→殘月，週期約29.5天。",
            "新月時月球在地球與太陽之間（同側）；滿月時月球與太陽分居地球兩側。"
          ],
          "trap": "月相變化是『日地月相對位置』造成，不是地球影子遮住月球（那是月食）；月相每天看到的是被照亮部分多寡。",
          "svg": "<svg viewBox=\"0 0 380 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"75\" r=\"16\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1\"/><path d=\"M40 59 A16 16 0 0 1 40 91 Z\" fill=\"#3a342e\"/><text x=\"40\" y=\"115\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">新月</text><circle cx=\"130\" cy=\"75\" r=\"16\" fill=\"#3a342e\" stroke=\"#3a342e\" stroke-width=\"1\"/><path d=\"M130 59 A16 16 0 0 1 130 91 Z\" fill=\"#f3e7df\"/><text x=\"130\" y=\"115\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">上弦</text><circle cx=\"220\" cy=\"75\" r=\"16\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"220\" y=\"115\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">滿月</text><circle cx=\"310\" cy=\"75\" r=\"16\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1\"/><path d=\"M310 59 A16 16 0 0 0 310 91 Z\" fill=\"#3a342e\"/><text x=\"310\" y=\"115\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">下弦</text><line x1=\"60\" y1=\"75\" x2=\"108\" y2=\"75\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><polygon points=\"108,75 100,71 100,79\" fill=\"#c9755c\"/><line x1=\"150\" y1=\"75\" x2=\"198\" y2=\"75\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><polygon points=\"198,75 190,71 190,79\" fill=\"#c9755c\"/><line x1=\"240\" y1=\"75\" x2=\"288\" y2=\"75\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><polygon points=\"288,75 280,71 280,79\" fill=\"#c9755c\"/><text x=\"190\" y=\"35\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">週期約29.5天</text></svg>",
          "caption": "日地月相對位置改變，月球反光部分盈虧成各月相。"
        },
        {
          "h": "日食與月食",
          "points": [
            "日食：月球走到太陽與地球之間（月球擋住太陽），順序為日—月—地；只可能發生在新月（朔）。",
            "月食：地球走到太陽與月球之間（地球影子遮住月球），順序為日—地—月；只可能發生在滿月（望）。",
            "並非每次朔望都發生食，因月球公轉軌道與地球公轉面有約5°夾角，多數時候三者未完全成一直線。"
          ],
          "trap": "日食發生在新月、月食發生在滿月，別記反！判斷口訣：日食＝月在中間擋太陽（日月地）；月食＝地在中間擋影子（日地月）。",
          "svg": "<svg viewBox=\"0 0 380 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"100\" y=\"24\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">日食(新月)</text><circle cx=\"30\" cy=\"55\" r=\"14\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"30\" y=\"59\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">日</text><circle cx=\"110\" cy=\"55\" r=\"7\" fill=\"#3a342e\"/><text x=\"110\" y=\"40\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">月</text><circle cx=\"180\" cy=\"55\" r=\"13\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"180\" y=\"59\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">地</text><line x1=\"44\" y1=\"55\" x2=\"167\" y2=\"55\" stroke=\"#3a342e\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"100\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">日—月—地</text><text x=\"280\" y=\"24\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">月食(滿月)</text><circle cx=\"210\" cy=\"140\" r=\"14\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"210\" y=\"144\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">日</text><circle cx=\"290\" cy=\"140\" r=\"13\" fill=\"#7fae9e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"290\" y=\"144\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">地</text><circle cx=\"355\" cy=\"140\" r=\"7\" fill=\"#3a342e\"/><text x=\"355\" y=\"125\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">月</text><line x1=\"224\" y1=\"140\" x2=\"348\" y2=\"140\" stroke=\"#3a342e\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"280\" y=\"175\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">日—地—月</text></svg>",
          "caption": "日食月在中間（日月地）、月食地在中間（日地月）。"
        }
      ],
      "quiz": [
        {
          "stem": "發生『日食』時，太陽、地球、月球三者的相對位置（由太陽往外）應為？",
          "options": [
            "太陽—月球—地球",
            "太陽—地球—月球",
            "地球—太陽—月球",
            "月球—太陽—地球"
          ],
          "answer": 0,
          "explanation": "日食是月球運行到太陽與地球之間，遮住了射向地球的陽光，故排列為太陽—月球—地球，且只發生在新月。",
          "trap": "日食是『月球在中間』擋太陽（新月）；月食才是地球在中間（滿月）。把『誰被擋、誰在中間』想清楚就不會選反。"
        },
        {
          "stem": "某天晚上看到又圓又亮的滿月，這天若恰好發生天文現象，最可能是下列何者？",
          "options": [
            "月食",
            "日食",
            "新月",
            "上弦月"
          ],
          "answer": 0,
          "explanation": "滿月時月球與太陽分居地球兩側（日—地—月），此時地球影子才可能落在月球上發生月食。日食只發生在新月。",
          "trap": "滿月對應『月食』、新月對應日食；看到滿月就不可能是日食。月相與食的對應要記牢。"
        },
        {
          "stem": "月球會出現盈虧（月相）變化，最主要的原因是？",
          "options": [
            "日、地、月相對位置改變，我們看到月球被照亮的部分不同",
            "地球的影子週期性遮住月球",
            "月球本身會發光且亮度改變",
            "月球與地球的距離每天劇烈改變"
          ],
          "answer": 0,
          "explanation": "月球不發光，靠反射陽光；隨月球繞地公轉，日地月相對位置改變，地球上看到月球受照亮部分的比例不同，形成月相。",
          "trap": "月相是『相對位置』造成，不是地球影子遮擋（那是月食）；月球也不會自己發光。"
        },
        {
          "stem": "農曆每個月幾乎都會經歷新月與滿月，但日食與月食卻不是每個月都發生。最主要的原因是？",
          "options": [
            "月球公轉軌道面與地球公轉面約有5°夾角，多數朔望時三者未完全成一直線",
            "月球每個月只在白天經過太陽附近",
            "地球影子每個月都剛好錯過月球幾公里",
            "新月與滿月每個月的日期都不固定，無法預測"
          ],
          "answer": 0,
          "explanation": "日食需在新月、月食需在滿月，但月球公轉軌道面（白道）與地球公轉面（黃道）約有5°夾角，大多數朔望時月球偏在地影或日地連線上下方，三者未完全對齊成一直線，故不發生食。",
          "trap": "並非『新月一定日食、滿月一定月食』！朔望只是必要條件，還要三者『恰好對齊成一直線』；軌道面5°夾角使多數朔望無法成食，這是關鍵限制。"
        }
      ]
    },
    {
      "id": "e-solar-system",
      "name": "太陽系與星空",
      "sub": "earth",
      "week": "下學期 4月",
      "notes": [
        {
          "h": "太陽系成員",
          "points": [
            "太陽系以太陽為中心，八大行星由內而外：水星、金星、地球、火星、木星、土星、天王星、海王星。",
            "類地行星（水金地火）體積小、密度大、岩石為主；類木行星（木土天海）體積大、密度小、以氣體為主。",
            "太陽是太陽系唯一的恆星（會自行發光發熱），行星本身不發光、靠反射陽光。",
            "其他成員：衛星（繞行星）、小行星、彗星等。"
          ],
          "trap": "『恆星』會自己發光（如太陽），『行星』不發光只反光；金星很亮是因反射陽光，不是它自己發光。",
          "svg": "<svg viewBox=\"0 0 400 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"30\" cy=\"85\" r=\"20\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"30\" y=\"89\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">日</text><circle cx=\"80\" cy=\"85\" r=\"4\" fill=\"#c9755c\"/><circle cx=\"105\" cy=\"85\" r=\"5\" fill=\"#c9755c\"/><circle cx=\"132\" cy=\"85\" r=\"5\" fill=\"#7fae9e\"/><circle cx=\"158\" cy=\"85\" r=\"4\" fill=\"#c9755c\"/><text x=\"118\" y=\"120\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">類地(小·岩石)</text><circle cx=\"230\" cy=\"85\" r=\"14\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1\"/><circle cx=\"285\" cy=\"85\" r=\"12\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1\"/><circle cx=\"330\" cy=\"85\" r=\"10\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1\"/><circle cx=\"372\" cy=\"85\" r=\"10\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"300\" y=\"120\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">類木(大·氣體)</text><text x=\"200\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">水金地火木土天海</text></svg>",
          "caption": "八大行星由內而外，內側類地小而岩石、外側類木大而氣體。"
        },
        {
          "h": "恆星與星空的視運動",
          "points": [
            "因地球自轉，夜空恆星呈東升西落；北半球可見星空繞『北極星』附近旋轉（北極星幾乎不動）。",
            "因地球公轉，不同季節夜晚看到的星座不同（季節星空）。",
            "恆星距離極遠，彼此相對位置長期幾乎不變，故組成固定的星座圖案。"
          ],
          "trap": "北極星看似不動是因它幾乎正對地軸延伸方向；星星東升西落是『自轉』，季節星座不同是『公轉』，兩者成因不同。",
          "svg": "<svg viewBox=\"0 0 320 190\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"160\" cy=\"95\" r=\"75\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1\"/><polygon points=\"160,93 164,101 172,101 166,107 168,115 160,110 152,115 154,107 148,101 156,101\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"0.5\"/><text x=\"160\" y=\"130\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">北極星(幾乎不動)</text><circle cx=\"160\" cy=\"95\" r=\"55\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><circle cx=\"215\" cy=\"95\" r=\"3\" fill=\"#3a342e\"/><path d=\"M205 50 a55 55 0 0 1 20 12\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"225,62 214,59 219,69\" fill=\"#c9755c\"/><text x=\"160\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">星空繞北極星旋轉(自轉)</text></svg>",
          "caption": "地球自轉使星空繞幾乎不動的北極星旋轉。"
        }
      ],
      "quiz": [
        {
          "stem": "下列關於太陽系天體的敘述，何者正確？",
          "options": [
            "太陽是唯一會自行發光發熱的恆星，行星靠反射陽光而被看見",
            "金星是恆星，因為它在夜空中很亮",
            "所有行星都會自行發光",
            "木星是類地行星，以岩石為主"
          ],
          "answer": 0,
          "explanation": "太陽系中只有太陽是恆星會自行發光發熱；行星（含金星、木星）不發光，靠反射陽光被看見。木星屬類木行星，以氣體為主。",
          "trap": "亮≠會發光：金星很亮只是反射陽光的行星，不是恆星。木星是類木（氣體）行星，不是類地。"
        },
        {
          "stem": "夜晚長時間觀察，北半球的星空看起來繞著某顆幾乎不動的星旋轉，這顆星與此現象的成因是？",
          "options": [
            "北極星；因地球自轉，星空繞地軸方向（北極星）旋轉",
            "金星；因地球公轉",
            "太陽；因月球繞地球",
            "火星；因星星本身在移動"
          ],
          "answer": 0,
          "explanation": "北極星幾乎正對地軸向北延伸的方向，地球自轉時星空看似繞北極星旋轉，北極星本身幾乎不動。",
          "trap": "星空『一夜之間』的旋轉是自轉造成（繞北極星）；季節不同看到不同星座才是公轉。別把兩者成因互換。"
        },
        {
          "stem": "依與太陽的距離由近到遠，下列行星排列何者正確？",
          "options": [
            "水星、金星、地球、火星",
            "金星、水星、火星、地球",
            "地球、金星、水星、火星",
            "火星、地球、金星、水星"
          ],
          "answer": 0,
          "explanation": "太陽系內側四顆類地行星由近到遠為：水星、金星、地球、火星。",
          "trap": "順序口訣『水金地火木土天海』；注意水星最近、金星比地球更近太陽，別把金星與地球順序顛倒。"
        },
        {
          "stem": "甲、乙兩顆行星，甲體積小、平均密度大、表面為岩石；乙體積大、平均密度小、主要由氣體組成。關於兩者的分類與在太陽系中的位置，何者最合理？",
          "options": [
            "甲為類地行星、位於內側；乙為類木行星、位於外側",
            "甲為類木行星、位於外側；乙為類地行星、位於內側",
            "兩者都是類地行星",
            "甲密度大故離太陽較遠，乙離太陽較近"
          ],
          "answer": 0,
          "explanation": "類地行星（水金地火）體積小、密度大、以岩石為主，位於太陽系內側；類木行星（木土天海）體積大、密度小、以氣體為主，位於外側。甲符合類地、乙符合類木。",
          "trap": "別被『體積大』直覺成密度大！類木行星雖然體積大，但以氣體為主、平均密度反而小；密度大的是岩石類地行星，且類地在內側、類木在外側。"
        }
      ]
    },
    {
      "id": "e-universe-observation",
      "name": "宇宙與天文觀測",
      "sub": "earth",
      "week": "下學期 4月",
      "notes": [
        {
          "h": "宇宙的尺度與單位",
          "points": [
            "由小到大：行星系統（如太陽系）→恆星與星團→星系（如銀河系，太陽系位於其中）→星系團→宇宙。",
            "天文距離常用『光年』＝光在真空中一年所走的距離（是距離單位，不是時間單位）。",
            "看到遙遠星體的光是它很久以前發出的，等於『看見過去』。"
          ],
          "trap": "『光年』是長度（距離）單位，不是時間！別把『100光年遠』誤解成100年時間。",
          "svg": "<svg viewBox=\"0 0 380 160\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"60\" width=\"60\" height=\"40\" rx=\"5\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"40\" y=\"84\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">太陽系</text><rect x=\"95\" y=\"55\" width=\"70\" height=\"50\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"130\" y=\"84\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">銀河系</text><rect x=\"190\" y=\"48\" width=\"80\" height=\"64\" rx=\"5\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"230\" y=\"84\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">星系團</text><rect x=\"295\" y=\"40\" width=\"75\" height=\"80\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"332\" y=\"84\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">宇宙</text><line x1=\"40\" y1=\"125\" x2=\"360\" y2=\"125\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"360,125 350,120 350,130\" fill=\"#c9755c\"/><text x=\"185\" y=\"145\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">尺度由小到大</text><text x=\"60\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">光年＝距離單位</text></svg>",
          "caption": "宇宙尺度由太陽系到宇宙層層放大，距離以光年衡量。"
        },
        {
          "h": "天文觀測工具",
          "points": [
            "光學望遠鏡靠口徑集光，口徑愈大集光力愈強，可看到更暗的天體。",
            "太空望遠鏡（如置於大氣層外）可避免大氣擾動與光害，影像更清晰。",
            "觀星宜選無光害、空氣穩定、天氣晴朗的地點與時間。"
          ],
          "trap": "望遠鏡看得更暗主要靠『口徑（集光力）』大，不是單純把影像放大；放大倍率過高反而會更暗更模糊。",
          "svg": "<svg viewBox=\"0 0 360 180\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"30,55 30,95 90,80 90,70\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"45\" x2=\"30\" y2=\"105\" stroke=\"#c9755c\" stroke-width=\"2.5\"/><text x=\"22\" y=\"125\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">大口徑</text><line x1=\"100\" y1=\"55\" x2=\"160\" y2=\"55\" stroke=\"#f0a52e\" stroke-width=\"2\"/><line x1=\"100\" y1=\"75\" x2=\"160\" y2=\"75\" stroke=\"#f0a52e\" stroke-width=\"2\"/><line x1=\"100\" y1=\"95\" x2=\"160\" y2=\"95\" stroke=\"#f0a52e\" stroke-width=\"2\"/><text x=\"130\" y=\"45\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">入射光</text><text x=\"60\" y=\"82\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">集光多</text><circle cx=\"265\" cy=\"75\" r=\"30\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><circle cx=\"258\" cy=\"68\" r=\"2\" fill=\"#3a342e\"/><circle cx=\"275\" cy=\"82\" r=\"2\" fill=\"#3a342e\"/><circle cx=\"270\" cy=\"65\" r=\"1.5\" fill=\"#3a342e\"/><text x=\"265\" y=\"125\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">看見更暗天體</text></svg>",
          "caption": "口徑愈大集光力愈強，能觀測到更暗的天體。"
        }
      ],
      "quiz": [
        {
          "stem": "天文學常用『光年』來表示距離，下列關於光年的敘述何者正確？",
          "options": [
            "光年是距離單位，等於光在一年中行進的距離",
            "光年是時間單位，等於一年",
            "光年表示星體的亮度",
            "光年是太陽到地球的時間"
          ],
          "answer": 0,
          "explanation": "光年是長度（距離）單位，定義為光在真空中一年所行進的距離，用來描述天體間的遙遠距離。",
          "trap": "名字裡有『年』但它是『距離』單位；看到光年要想成超長的尺，不要當成時間。"
        },
        {
          "stem": "兩架光學望遠鏡其他條件相同，甲的口徑較大。關於甲望遠鏡，下列敘述最合理的是？",
          "options": [
            "集光力較強，能觀測到較暗的天體",
            "口徑大反而看不到暗星",
            "口徑與觀測能力無關",
            "口徑越大放大倍率一定越小"
          ],
          "answer": 0,
          "explanation": "光學望遠鏡的集光力主要取決於口徑，口徑愈大集光愈多，能看到更暗、更遠的天體。",
          "trap": "決定能否看到暗天體的是『集光力（口徑）』而非倍率；倍率太高反而更暗更模糊，別只想著放大。"
        },
        {
          "stem": "某顆恆星距離地球約 500 光年。今晚我們在地球上看到它的光，最合理的解釋是？",
          "options": [
            "這道光是它約 500 年前發出的，我們看到的是它 500 年前的樣子",
            "這道光是它今晚才發出的，代表它現在的樣子",
            "它距離我們 500 年的時間，不是距離",
            "光從它到地球只需要一瞬間"
          ],
          "answer": 0,
          "explanation": "光年是距離單位，500 光年代表光需走 500 年才能到達地球。因此今晚看到的光是該恆星約 500 年前發出的，我們看到的是它 500 年前的樣貌，這就是『看見過去』。",
          "trap": "光年是距離不是時間，但因光速有限，距離 500 光年『恰好對應光走 500 年』；關鍵是我們看到的是過去的它，而非『現在』的樣子。"
        },
        {
          "stem": "天文學家常把大型望遠鏡建在高山上，或把望遠鏡送到大氣層外的太空。這樣做最主要的好處是？",
          "options": [
            "減少大氣擾動與光害的影響，使觀測影像更清晰",
            "讓望遠鏡更接近恆星而看得更清楚",
            "增加地球自轉速度以利追星",
            "使光年的距離變短"
          ],
          "answer": 0,
          "explanation": "地球大氣會擾動星光（造成閃爍）並有光害，高山空氣稀薄穩定、光害少，太空中更無大氣干擾，故影像更清晰。並非靠『接近恆星』，因恆星距離以光年計，登高那點距離可忽略。",
          "trap": "別以為上高山或上太空是為了『離星星更近』——以光年尺度看那點高度完全可忽略；真正目的是避開大氣擾動與光害。"
        }
      ]
    },
    {
      "id": "e-climate-change",
      "name": "全球環境變遷",
      "sub": "earth",
      "week": "下學期 5月",
      "notes": [
        {
          "h": "溫室效應與全球暖化",
          "points": [
            "溫室氣體（二氧化碳、甲烷、水氣等）能吸收地表放出的紅外線並再輻射，使地表保溫，稱溫室效應。",
            "適度的溫室效應使地球維持適合生命的溫度；但人類大量燃燒化石燃料使CO₂增加，造成『全球暖化』。",
            "暖化影響：冰川與極地冰融、海平面上升、極端天氣增多、生態改變。",
            "減緩方法：節能減碳、發展再生能源、植樹造林、減少化石燃料使用。"
          ],
          "trap": "溫室效應本身是『自然且必要』的，問題出在人為排放使它『過強』；別把溫室效應一概視為壞事。臭氧層破洞與溫室效應是不同問題。",
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"40\" cy=\"35\" r=\"15\" fill=\"#f0a52e\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"40\" y=\"39\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">日</text><rect x=\"0\" y=\"150\" width=\"360\" height=\"40\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"60\" y=\"175\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">地表</text><path d=\"M0 70 Q180 60 360 70\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/><text x=\"285\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">溫室氣體層</text><line x1=\"55\" y1=\"50\" x2=\"150\" y2=\"148\" stroke=\"#f0a52e\" stroke-width=\"2\"/><polygon points=\"150,148 138,143 144,135\" fill=\"#f0a52e\"/><line x1=\"170\" y1=\"148\" x2=\"210\" y2=\"78\" stroke=\"#d98072\" stroke-width=\"2\"/><line x1=\"210\" y1=\"78\" x2=\"250\" y2=\"148\" stroke=\"#d98072\" stroke-width=\"2\"/><polygon points=\"250,148 238,140 246,134\" fill=\"#d98072\"/><text x=\"235\" y=\"110\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">紅外線被反射回</text></svg>",
          "caption": "溫室氣體吸收並回送地表紅外線，使地表保溫。"
        },
        {
          "h": "聖嬰現象與其他變遷",
          "points": [
            "聖嬰現象：赤道東太平洋海溫『異常偏暖』，改變全球大氣環流，造成部分地區乾旱、部分地區洪澇。",
            "反聖嬰（拉尼娜）則是該海域海溫異常偏冷，影響相反。",
            "這些是海洋與大氣交互作用造成的氣候變異，會影響漁業與降雨分布。"
          ],
          "trap": "聖嬰是赤道東太平洋『偏暖』、反聖嬰『偏冷』，別配反；聖嬰是氣候『變異』，與溫室效應造成的長期暖化是不同概念。",
          "svg": "<svg viewBox=\"0 0 360 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"60\" width=\"320\" height=\"70\" fill=\"#eef4f2\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"55\" y=\"50\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">西太平洋</text><text x=\"290\" y=\"50\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">東太平洋</text><rect x=\"240\" y=\"70\" width=\"95\" height=\"50\" fill=\"#d98072\" fill-opacity=\"0.45\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"288\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">異常偏暖</text><line x1=\"180\" y1=\"95\" x2=\"235\" y2=\"95\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"235,95 225,90 225,100\" fill=\"#c9755c\"/><text x=\"175\" y=\"150\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">聖嬰：赤道東太平洋偏暖</text><text x=\"40\" y=\"95\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">赤道</text></svg>",
          "caption": "聖嬰現象是赤道東太平洋海溫異常偏暖，反聖嬰則偏冷。"
        }
      ],
      "quiz": [
        {
          "stem": "下列關於『溫室效應』的敘述，何者最正確？",
          "options": [
            "適度溫室效應使地球保溫適合生命，但人為排放過多溫室氣體會加劇全球暖化",
            "溫室效應完全是壞事，應完全消除",
            "溫室效應是臭氧層破洞造成的",
            "溫室氣體會使地表溫度下降"
          ],
          "answer": 0,
          "explanation": "溫室氣體吸收並再輻射地表紅外線使地球保溫，適度的溫室效應是維持生命所必需；問題在人類大量排放CO₂使效應過強，導致全球暖化。",
          "trap": "溫室效應本身必要、非全壞；它與『臭氧層破洞』是兩回事。把『適度有益、過量有害』分清楚。"
        },
        {
          "stem": "下列哪一項做法最有助於減緩全球暖化？",
          "options": [
            "發展太陽能、風力等再生能源以減少化石燃料燃燒",
            "大量燃燒煤與石油發電",
            "砍伐森林開發土地",
            "增加汽機車的使用"
          ],
          "answer": 0,
          "explanation": "全球暖化主因是燃燒化石燃料排放CO₂，發展再生能源可減少化石燃料使用與碳排放，有助減緩暖化。其餘選項都會增加碳排或減少碳吸收。",
          "trap": "減碳關鍵是『少燒化石燃料、少砍森林』；燃煤、砍林、增車都會加劇暖化，要選『減少碳排』的做法。"
        },
        {
          "stem": "『聖嬰現象』指的是下列哪一種海洋異常？",
          "options": [
            "赤道東太平洋海水溫度異常偏暖",
            "赤道東太平洋海水溫度異常偏冷",
            "北極海冰全部融化",
            "海水鹽度突然變為零"
          ],
          "answer": 0,
          "explanation": "聖嬰現象是赤道東太平洋海溫異常偏暖，改變大氣環流而影響全球降雨分布；海溫異常偏冷則為反聖嬰（拉尼娜）。",
          "trap": "聖嬰＝偏『暖』、反聖嬰＝偏『冷』，兩者方向相反，最容易記反；題目問聖嬰要選偏暖。"
        },
        {
          "stem": "關於『聖嬰現象』與『全球暖化（溫室效應過強）』的比較，下列敘述何者最正確？",
          "options": [
            "聖嬰是赤道東太平洋海溫的短期氣候變異，暖化是溫室氣體長期累積造成的趨勢，兩者是不同概念",
            "兩者是同一件事的不同名稱",
            "聖嬰是海溫偏冷，暖化是海溫偏暖，方向相反",
            "全球暖化只發生在赤道東太平洋，與其他地區無關"
          ],
          "answer": 0,
          "explanation": "聖嬰現象是赤道東太平洋海溫『異常偏暖』的短期、週期性氣候變異（海氣交互作用）；全球暖化則是人為排放溫室氣體造成全球長期升溫的趨勢。兩者成因、時間尺度與範圍都不同，不可混為一談。",
          "trap": "別把『聖嬰』與『全球暖化』畫等號！聖嬰是短期區域性變異（且偏暖、非偏冷），暖化是長期全球性趨勢；選項C還故意把聖嬰說成偏冷，雙重陷阱。"
        }
      ]
    }
  ]
};
