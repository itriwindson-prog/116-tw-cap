// english.js — 英語（完整 108 課綱；補題到 4/topic + 每段筆記 SVG 圖解 + 答案經獨立重驗）
window.STUDYSYNC = window.STUDYSYNC || { data: {} };
window.STUDYSYNC.data.subjects = window.STUDYSYNC.data.subjects || {};
window.STUDYSYNC.data.subjects.english = {
  id: "english", name: "英語",
  topics: [
    {
      "id": "vocab",
      "name": "字彙與詞性 (Vocabulary & Parts of Speech)",
      "week": "暑假 第1週",
      "notes": [
        {
          "h": "八大詞性辨識",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"22\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">success 字族 -&gt; 詞性</text><rect x=\"20\" y=\"40\" width=\"80\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"60\" y=\"56\" text-anchor=\"middle\" fill=\"#333\" font-size=\"11\">success</text><text x=\"60\" y=\"69\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">n. 名詞</text><rect x=\"120\" y=\"40\" width=\"80\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"160\" y=\"56\" text-anchor=\"middle\" fill=\"#333\" font-size=\"11\">successful</text><text x=\"160\" y=\"69\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">adj. 形容詞</text><rect x=\"220\" y=\"40\" width=\"80\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"260\" y=\"54\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">successfully</text><text x=\"260\" y=\"69\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">adv. 副詞</text><line x1=\"100\" y1=\"57\" x2=\"120\" y2=\"57\" stroke=\"#7fae9e\" stroke-width=\"2\"/><line x1=\"200\" y1=\"57\" x2=\"220\" y2=\"57\" stroke=\"#7fae9e\" stroke-width=\"2\"/><rect x=\"20\" y=\"100\" width=\"280\" height=\"60\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"30\" y=\"120\" fill=\"#333\" font-size=\"11\">be 動詞 +</text><text x=\"110\" y=\"120\" fill=\"#c9755c\" font-size=\"11\">形容詞</text><text x=\"30\" y=\"142\" fill=\"#333\" font-size=\"11\">一般動詞 +</text><text x=\"120\" y=\"142\" fill=\"#7fae9e\" font-size=\"11\">副詞</text><text x=\"180\" y=\"131\" fill=\"#333\" font-size=\"10\">看空格修飾誰</text></svg>",
          "caption": "同源字依字尾分辨詞性",
          "points": [
            "名詞 (n.) 當主詞/受詞；動詞 (v.) 表動作或狀態；形容詞 (adj.) 修飾名詞；副詞 (adv.) 修飾動詞/形容詞/全句。",
            "從句子的『空格位置』判斷該填哪種詞性：be 動詞後常接形容詞，一般動詞後接副詞。",
            "字尾常透露詞性：-tion/-ment/-ness 多為名詞，-ful/-ous/-ive 多為形容詞,-ly 多為副詞。"
          ],
          "trap": "success(n.)、successful(adj.)、successfully(adv.) 同源字易混；先看空格『修飾誰』再選詞性，不要憑單字眼熟亂填。"
        }
      ],
      "quiz": [
        {
          "stem": "The team worked ___ to finish the project before the deadline.",
          "options": [
            "hard",
            "hardly",
            "harder than",
            "hardest"
          ],
          "answer": 0,
          "explanation": "此處需副詞修飾動詞 worked，hard 本身即可作副詞=努力地；句中無比較對象故不選比較級。",
          "trap": "hardly 是『幾乎不』(否定副詞)，與 hard『努力地』意思相反,別被字形相近騙到。"
        },
        {
          "stem": "Her ___ to help others made her popular among classmates.",
          "options": [
            "kind",
            "kindly",
            "kindness",
            "kindle"
          ],
          "answer": 2,
          "explanation": "所有格 Her 後需名詞當主詞,kindness(善良)為名詞；made 為主要動詞。",
          "trap": "Her 之後一定接名詞,kind 是形容詞、kindly 是副詞、kindle 是動詞(點燃),都不能當主詞。"
        },
        {
          "stem": "The scientist's discovery was so ___ that it completely changed how we understand the universe.",
          "options": [
            "significance",
            "signify",
            "significant",
            "significantly"
          ],
          "answer": 2,
          "explanation": "系動詞 was 後需形容詞當主詞補語,且 so...that 結構中 so 後接形容詞/副詞;此處修飾主詞 discovery 用形容詞 significant(重大的)。",
          "trap": "⚠ so 後可接 adj. 或 adv.,須看修飾對象:此處是 be 動詞補語修飾名詞 discovery,故用 significant;significantly(adv.)不能當 be 動詞補語,significance(n.)/signify(v.)詞性也不符。"
        },
        {
          "stem": "Although he spoke ___, none of the foreign visitors could understand a single word he said.",
          "options": [
            "clear",
            "clearly",
            "clearance",
            "clearness"
          ],
          "answer": 1,
          "explanation": "空格修飾一般動詞 spoke(說話的方式),須用副詞 clearly(清楚地)。",
          "trap": "⚠ 一般動詞後修飾『動作』用副詞,不是形容詞;spoke 是動詞,故選 clearly 而非 clear(adj.);別被 Although 轉折語意誤導去找名詞。"
        }
      ]
    },
    {
      "id": "wordformation",
      "name": "構詞:字首字尾 (Word Formation)",
      "week": "暑假 第1週",
      "notes": [
        {
          "h": "常見字首 (Prefix) 改變語意",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">字首 + 字根 + 字尾 拆解</text><rect x=\"30\" y=\"60\" width=\"60\" height=\"40\" rx=\"4\" fill=\"#c9755c\" opacity=\"0.85\"/><text x=\"60\" y=\"84\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"12\">un-</text><rect x=\"90\" y=\"60\" width=\"90\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"135\" y=\"84\" text-anchor=\"middle\" fill=\"#333\" font-size=\"12\">help</text><rect x=\"180\" y=\"60\" width=\"70\" height=\"40\" rx=\"4\" fill=\"#7fae9e\" opacity=\"0.85\"/><text x=\"215\" y=\"84\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"12\">-ful</text><text x=\"60\" y=\"118\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">字首 否定</text><text x=\"135\" y=\"118\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">字根 語意</text><text x=\"215\" y=\"118\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">字尾 詞性</text><text x=\"160\" y=\"150\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"12\">unhelpful = 沒有幫助的</text><text x=\"160\" y=\"170\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">im- 用於 m/p/b 開頭, in- 用於其他</text></svg>",
          "caption": "三段拆字組出新單字",
          "points": [
            "否定字首:un-/in-/im-/dis- (unhappy, impossible, dislike)。",
            "re- 表『再次』(rewrite=重寫)；pre- 表『之前』(preview=預習)。"
          ],
          "trap": "im- 用在 m/p/b 開頭(impossible),in- 用在其他(incorrect),拼錯字首=拼錯整字。"
        },
        {
          "h": "字尾 (Suffix) 改變詞性",
          "points": [
            "動詞→名詞:-tion (act→action)、-ment (move→movement)。",
            "名詞/動詞→形容詞:-ful (care→careful)、-able (read→readable)。"
          ],
          "trap": "加字尾常需變字根:happy→happiness(y 變 i)、 forget→forgettable(重複 t),別漏掉拼字變化。",
          "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"400\" height=\"200\" rx=\"8\" fill=\"#f3e7df\"/><text x=\"200\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\">字尾改變詞性 (字根 care 不變)</text><rect x=\"160\" y=\"40\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"200\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">care</text><line x1=\"200\" y1=\"70\" x2=\"80\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"1\"/><line x1=\"200\" y1=\"70\" x2=\"200\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"1\"/><line x1=\"200\" y1=\"70\" x2=\"320\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"1\"/><rect x=\"30\" y=\"96\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">careful</text><text x=\"80\" y=\"129\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#5aa874\">-ful 形容詞</text><rect x=\"150\" y=\"96\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"200\" y=\"113\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">carefully</text><text x=\"200\" y=\"129\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#c9755c\">-ly 副詞</text><rect x=\"270\" y=\"96\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#f0a52e\"/><text x=\"320\" y=\"113\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">careless</text><text x=\"320\" y=\"129\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#f0a52e\">-less 否定形</text><text x=\"200\" y=\"165\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">看空格『修飾誰』選字尾:名詞前用 -ful,</text><text x=\"200\" y=\"184\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">動詞後用 -ly</text></svg>",
          "caption": "同一字根加不同字尾即改變詞性與語意"
        }
      ],
      "quiz": [
        {
          "stem": "It is ___ to finish all the homework in one hour; there is just too much.",
          "options": [
            "possible",
            "impossible",
            "possibly",
            "possibility"
          ],
          "answer": 1,
          "explanation": "由 too much 可知做不完,需否定形容詞 impossible;be 動詞 is 後接形容詞。",
          "trap": "後句 too much 是語意關鍵,提示『不可能』;possibly 是副詞、possibility 是名詞都不能接在 is 後當補語。"
        },
        {
          "stem": "The teacher asked us to ___ the new words before class.",
          "options": [
            "view",
            "review",
            "preview",
            "viewer"
          ],
          "answer": 2,
          "explanation": "before class(課前)需『預習』=preview(pre-=之前)。",
          "trap": "review 是『複習』(re-=再次,指課後),時間線索 before class 指向 preview,字首一字之差語意相反。"
        },
        {
          "stem": "The instructions were so ___ that even the new workers finished the task without any help.",
          "options": [
            "understand",
            "misunderstand",
            "understandable",
            "understanding"
          ],
          "answer": 2,
          "explanation": "be 動詞 were 後接形容詞;字尾 -able 構成形容詞 understandable(易懂的),呼應『新人也能完成』。",
          "trap": "⚠ 後句『新人也能做完』暗示說明書『易懂』,須用形容詞 understandable;misunderstand(誤解,v.)語意相反,understand(v.)詞性不符,別只看字根眼熟。"
        },
        {
          "stem": "His ___ to give up his seat for the old man showed what a kind person he was.",
          "options": [
            "will",
            "willing",
            "willingness",
            "willingly"
          ],
          "answer": 2,
          "explanation": "所有格 His 後需名詞當主詞;字尾 -ness 把形容詞 willing 變名詞 willingness(樂意),made/showed 為動詞。",
          "trap": "⚠ His 之後必接名詞,willing(adj.)/willingly(adv.)皆不可當主詞;will 雖是名詞但意為『意志/遺囑』語意不通,-ness 構出的 willingness 才正確。"
        }
      ]
    },
    {
      "id": "tense",
      "name": "時態 (Tenses)",
      "week": "暑假 第1–3週",
      "notes": [
        {
          "h": "現在式 vs 現在進行式",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">時態時間軸</text><line x1=\"20\" y1=\"90\" x2=\"300\" y2=\"90\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><polygon points=\"300,90 292,86 292,94\" fill=\"#2b2b2b\"/><line x1=\"160\" y1=\"80\" x2=\"160\" y2=\"100\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><text x=\"40\" y=\"112\" fill=\"#333\" font-size=\"10\">過去</text><text x=\"150\" y=\"112\" fill=\"#c9755c\" font-size=\"10\">現在</text><text x=\"270\" y=\"112\" fill=\"#333\" font-size=\"10\">未來</text><rect x=\"30\" y=\"45\" width=\"100\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"80\" y=\"64\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">簡單式 習慣</text><text x=\"80\" y=\"135\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">every day</text><circle cx=\"160\" cy=\"90\" r=\"6\" fill=\"#c9755c\"/><rect x=\"195\" y=\"45\" width=\"105\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"247\" y=\"64\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">進行式 此刻</text><text x=\"247\" y=\"135\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">now / Look!</text><text x=\"160\" y=\"165\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">先圈時間副詞再選時態</text></svg>",
          "caption": "時間軸區分習慣與此刻",
          "points": [
            "現在簡單式表習慣／事實:I go to school every day.",
            "現在進行式表此刻正在發生:I am going now.",
            "頻率副詞 (always/usually/often) 搭配簡單式。"
          ],
          "trap": "看到 every day / usually 用簡單式;看到 now / at the moment / Look! 用進行式,先圈關鍵時間副詞。"
        },
        {
          "h": "完成式的時間參照",
          "points": [
            "現在完成式 have/has + p.p.:過去到現在,常搭 already/yet/since/for/just。",
            "過去完成式 had + p.p.:過去某時間點『之前』就完成的更早動作。",
            "未來式 will / be going to:預測或計畫。"
          ],
          "trap": "By the time + 過去式,前面更早的事用『過去完成式 had』,不是現在完成式 has;since 後接時間點、for 後接時間長度。",
          "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"400\" height=\"200\" rx=\"8\" fill=\"#f3e7df\"/><text x=\"200\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\">完成式的時間參照</text><line x1=\"30\" y1=\"150\" x2=\"380\" y2=\"150\" stroke=\"#3a342e\" stroke-width=\"2\"/><polygon points=\"380,150 372,146 372,154\" fill=\"#3a342e\"/><line x1=\"120\" y1=\"143\" x2=\"120\" y2=\"157\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"120\" y=\"172\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#3a342e\">過去某點</text><line x1=\"300\" y1=\"143\" x2=\"300\" y2=\"157\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"300\" y=\"172\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#c9755c\">現在 now</text><path d=\"M55 110 L115 110\" stroke=\"#5aa874\" stroke-width=\"6\"/><polygon points=\"117,110 109,106 109,114\" fill=\"#5aa874\"/><text x=\"85\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#5aa874\">had + p.p.</text><text x=\"85\" y=\"128\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#3a342e\">更早完成</text><path d=\"M150 80 L295 80\" stroke=\"#c9755c\" stroke-width=\"6\"/><polygon points=\"297,80 289,76 289,84\" fill=\"#c9755c\"/><text x=\"222\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#c9755c\">have/has + p.p.</text><text x=\"222\" y=\"98\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#3a342e\">延續到現在 (for/since)</text></svg>",
          "caption": "過去完成是過去的過去,現在完成則延續到此刻"
        }
      ],
      "quiz": [
        {
          "stem": "By the time we got to the theater, the movie ___.",
          "options": [
            "had already started",
            "has already started",
            "already started",
            "is already starting"
          ],
          "answer": 0,
          "explanation": "By the time + 過去動作 (got),比它更早發生的事用過去完成式 had + p.p.,故 had already started。",
          "trap": "看到 By the time + 過去式,前面更早的事要用『過去完成式 had』,不是現在完成式 has。"
        },
        {
          "stem": "Tom ___ in Tainan for ten years, and he still lives there now.",
          "options": [
            "lived",
            "has lived",
            "lives",
            "is living"
          ],
          "answer": 1,
          "explanation": "for ten years 且 still lives there now,表從過去持續到現在,用現在完成式 has lived。",
          "trap": "still…now 表動作持續到現在,須用現在完成式;lived(過去式)會暗示『現在已不住那裡』,與句意矛盾。"
        },
        {
          "stem": "Listen! Someone ___ the piano in the next room.",
          "options": [
            "plays",
            "played",
            "is playing",
            "has played"
          ],
          "answer": 2,
          "explanation": "Listen! 表此刻正在發生,用現在進行式 is playing。",
          "trap": "Listen!/Look! 是進行式的強烈訊號;plays(簡單式)用於習慣,別忽略句首的祈使語氣線索。"
        },
        {
          "stem": "She ___ English for five years before she moved abroad and started using it every day.",
          "options": [
            "studies",
            "has studied",
            "had studied",
            "is studying"
          ],
          "answer": 2,
          "explanation": "before she moved(過去)為基準點,比它更早且持續到那之前的動作用過去完成式 had studied。",
          "trap": "⚠ before + 過去式(moved)指出一個過去時間點,『在那之前』已學了五年要用過去完成 had studied,不是現在完成 has studied(那會延續到現在,與已出國矛盾)。"
        }
      ]
    },
    {
      "id": "noun",
      "name": "名詞、冠詞與可數性 (Nouns & Articles)",
      "week": "暑假 第2週",
      "notes": [
        {
          "h": "可數與不可數名詞",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">可數 vs 不可數</text><line x1=\"160\" y1=\"32\" x2=\"160\" y2=\"170\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><text x=\"80\" y=\"48\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"12\">可數 C</text><text x=\"240\" y=\"48\" text-anchor=\"middle\" fill=\"#7fae9e\" font-size=\"12\">不可數 U</text><rect x=\"30\" y=\"60\" width=\"100\" height=\"26\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"80\" y=\"77\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">a book / books</text><rect x=\"190\" y=\"60\" width=\"100\" height=\"26\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"240\" y=\"77\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">water / money</text><rect x=\"30\" y=\"96\" width=\"100\" height=\"26\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">many / a few</text><rect x=\"190\" y=\"96\" width=\"100\" height=\"26\" rx=\"4\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"240\" y=\"113\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">much / a little</text><text x=\"160\" y=\"145\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">a lot of / some 兩者皆可</text><text x=\"160\" y=\"165\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">information 永遠不加 s</text></svg>",
          "caption": "可數不可數搭配量詞對照",
          "points": [
            "可數名詞有單複數:a book / two books;不可數名詞無複數:water, money, information。",
            "many / a few 修飾可數;much / a little 修飾不可數;a lot of / some 兩者皆可。"
          ],
          "trap": "information、advice、furniture、homework 在英文是不可數,不可加 s、不可用 a;切勿說 informations。"
        },
        {
          "h": "冠詞 a/an/the",
          "points": [
            "a 用於子音音開頭、an 用於母音音開頭(an hour 因 h 不發音)。",
            "the 表特指或前文已提及;世界唯一(the sun)用 the。"
          ],
          "trap": "a/an 看『發音』非拼字:a university(發 /j/ 用 a)、an honest man(h 不發音用 an)。",
          "svg": "<svg viewBox=\"0 0 400 210\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"400\" height=\"210\" rx=\"8\" fill=\"#f3e7df\"/><text x=\"200\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\">冠詞 a / an / the 抉擇</text><rect x=\"20\" y=\"40\" width=\"175\" height=\"70\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"107\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">不特定 (首次提及)</text><text x=\"107\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">a + 子音『音』</text><text x=\"107\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">an + 母音『音』</text><rect x=\"205\" y=\"40\" width=\"175\" height=\"70\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><text x=\"292\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">特指 / 已提及 / 唯一</text><text x=\"292\" y=\"86\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#f0a52e\">the</text><text x=\"292\" y=\"104\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#3a342e\">the sun, the one we saw</text><rect x=\"30\" y=\"125\" width=\"160\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"110\" y=\"145\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#3a342e\">an hour (h 不發音)</text><rect x=\"210\" y=\"125\" width=\"160\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"290\" y=\"145\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#3a342e\">a university (發 /j/)</text><text x=\"200\" y=\"180\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">關鍵:看『發音』而非拼字字母,</text><text x=\"200\" y=\"198\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">第二次出現同一名詞改用 the</text></svg>",
          "caption": "a/an 看發音,特指或唯一用 the"
        }
      ],
      "quiz": [
        {
          "stem": "The teacher gave us a lot of useful ___ about the exam.",
          "options": [
            "informations",
            "information",
            "an information",
            "informationes"
          ],
          "answer": 1,
          "explanation": "information 為不可數名詞,無複數形也不加冠詞 a,故用原形 information。",
          "trap": "a lot of 可接不可數,但 information 永遠不加 s、不加 a,複數陷阱選項全錯。"
        },
        {
          "stem": "She waited for ___ hour, but the bus never came.",
          "options": [
            "a",
            "an",
            "the",
            "(無冠詞)"
          ],
          "answer": 1,
          "explanation": "hour 的 h 不發音,實際以母音 /au/ 開頭,故用 an。",
          "trap": "冠詞看『發音』不看拼字字母;hour 雖以子音 h 拼寫,但 h 不發音,須用 an 而非 a。"
        },
        {
          "stem": "We saw a strange animal in the zoo. ___ animal had a long neck and brown spots.",
          "options": [
            "A",
            "An",
            "The",
            "(無冠詞)"
          ],
          "answer": 2,
          "explanation": "第二句的 animal 是第一句已提及的『那隻』動物,屬特指,須用 the。",
          "trap": "⚠ 同一名詞第二次出現指『前文那一個』要用 the,不可再用 a/an;雖然 animal 以母音開頭看似要 an,但特指規則優先於 a/an 之分。"
        },
        {
          "stem": "My grandmother gave me a lot of good ___ about how to deal with difficult people.",
          "options": [
            "advices",
            "advice",
            "an advice",
            "advise"
          ],
          "answer": 1,
          "explanation": "advice(建議)為不可數名詞,無複數形也不加冠詞 a,故用原形 advice。",
          "trap": "⚠ a lot of 雖可接不可數,但 advice 永遠不加 s、不加 a;advise 是動詞(拼 s)詞性不符,複數陷阱選項全錯。"
        }
      ]
    },
    {
      "id": "pronoun",
      "name": "代名詞 (Pronouns)",
      "week": "暑假 第2週",
      "notes": [
        {
          "h": "格位與所有格",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">代名詞格位表</text><line x1=\"20\" y1=\"32\" x2=\"300\" y2=\"32\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"100\" y1=\"32\" x2=\"100\" y2=\"170\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"180\" y1=\"32\" x2=\"180\" y2=\"170\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"20\" y1=\"64\" x2=\"300\" y2=\"64\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"20\" y1=\"96\" x2=\"300\" y2=\"96\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"20\" y1=\"128\" x2=\"300\" y2=\"128\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><text x=\"60\" y=\"52\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">主格</text><text x=\"140\" y=\"52\" text-anchor=\"middle\" fill=\"#7fae9e\" font-size=\"10\">受格</text><text x=\"240\" y=\"52\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">所有格</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">I</text><text x=\"140\" y=\"84\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">me</text><text x=\"240\" y=\"84\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">my / mine</text><text x=\"60\" y=\"116\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">he</text><text x=\"140\" y=\"116\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">him</text><text x=\"240\" y=\"116\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">his / his</text><text x=\"60\" y=\"148\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">they</text><text x=\"140\" y=\"148\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">them</text><text x=\"240\" y=\"148\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">their</text><text x=\"160\" y=\"168\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"9\">介系詞後用受格: between you and me</text></svg>",
          "caption": "主格受格所有格三欄對照",
          "points": [
            "主格(I/he/they) 當主詞;受格(me/him/them) 當受詞或介系詞後。",
            "所有格形容詞 (my/his) + 名詞;所有格代名詞 (mine/his) 單獨使用。",
            "反身代名詞 (myself/themselves) 用於主受詞相同時。"
          ],
          "trap": "介系詞 (between/with/for) 後一定用受格:between you and me(非 I);easy 比較句 than 後口語可用受格。"
        }
      ],
      "quiz": [
        {
          "stem": "This is a secret just between you and ___.",
          "options": [
            "I",
            "me",
            "my",
            "mine"
          ],
          "answer": 1,
          "explanation": "介系詞 between 後接受格,you and me。",
          "trap": "between you and I 是常見錯誤;介系詞後必用受格 me,別因為覺得 I 較『正式』而誤選。"
        },
        {
          "stem": "My bike is broken, so I borrowed ___ from my brother.",
          "options": [
            "he",
            "him",
            "his",
            "himself"
          ],
          "answer": 2,
          "explanation": "借了『他的(腳踏車)』,所有格代名詞 his = his bike,單獨作受詞。",
          "trap": "borrowed 的受詞應是『物品』,his(他的東西)才合理;him 是『他(人)』語意不通。"
        },
        {
          "stem": "The twins look so alike that I can never tell ___ from her sister.",
          "options": [
            "she",
            "her",
            "hers",
            "herself"
          ],
          "answer": 1,
          "explanation": "tell A from B(分辨 A 與 B)中,tell 的受詞用受格 her。",
          "trap": "⚠ tell...from... 結構裡空格是動詞 tell 的受詞,須用受格 her,不是主格 she;hers(所有格代名詞)與 herself(反身代名詞)語意也不通。"
        },
        {
          "stem": "None of the students finished the test, because ___ was much harder than they had expected.",
          "options": [
            "they",
            "them",
            "it",
            "its"
          ],
          "answer": 2,
          "explanation": "because 子句的主詞指『the test(考試)』這件單數事物,用 it。",
          "trap": "⚠ 主詞指涉的是單數的 the test 而非複數 students,故用 it 不是 they;後面有動詞 was(單數)也印證主詞須為單數的 it。"
        }
      ]
    },
    {
      "id": "adjadv",
      "name": "形容詞與副詞:比較 (Comparison)",
      "week": "暑假 第3週",
      "notes": [
        {
          "h": "比較級與最高級",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">比較級階梯</text><rect x=\"30\" y=\"120\" width=\"80\" height=\"36\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"70\" y=\"138\" text-anchor=\"middle\" fill=\"#333\" font-size=\"11\">tall</text><text x=\"70\" y=\"151\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">原級</text><rect x=\"120\" y=\"85\" width=\"80\" height=\"71\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"160\" y=\"103\" text-anchor=\"middle\" fill=\"#333\" font-size=\"11\">taller</text><text x=\"160\" y=\"116\" text-anchor=\"middle\" fill=\"#7fae9e\" font-size=\"9\">比較 than</text><rect x=\"210\" y=\"48\" width=\"80\" height=\"108\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"250\" y=\"66\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">the tallest</text><text x=\"250\" y=\"79\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"9\">最高 in/of</text><line x1=\"110\" y1=\"120\" x2=\"120\" y2=\"120\" stroke=\"#2b2b2b\"/><line x1=\"200\" y1=\"85\" x2=\"210\" y2=\"85\" stroke=\"#2b2b2b\"/><text x=\"160\" y=\"174\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">不規則: good-better-best</text></svg>",
          "caption": "三級比較像階梯逐層升高",
          "points": [
            "比較級:short adj.+er than (taller than);long adj. 用 more+adj.+than (more careful than)。",
            "最高級:the+adj.+est (the tallest) 或 the most+adj.;範圍常用 in/of。",
            "倍數比較:twice as big as;愈來愈…用 比較級 and 比較級 (hotter and hotter)。"
          ],
          "trap": "than=比較級訊號,the+最高級=三者以上;good→better→best、bad→worse→worst 等不規則變化要背熟,別寫 gooder。"
        }
      ],
      "quiz": [
        {
          "stem": "Of all the students in the class, Amy runs ___.",
          "options": [
            "fast",
            "faster",
            "the fastest",
            "more fast"
          ],
          "answer": 2,
          "explanation": "Of all the students 表三者以上的範圍,用最高級 the fastest。",
          "trap": "Of all… 是最高級訊號(範圍),不是兩者相比,故用 the fastest 而非比較級 faster。"
        },
        {
          "stem": "The weather is getting ___ these days; we can hardly go out.",
          "options": [
            "hot and hot",
            "hotter and hotter",
            "more and more hot",
            "the hottest"
          ],
          "answer": 1,
          "explanation": "『愈來愈熱』用比較級 and 比較級:hotter and hotter。",
          "trap": "短形容詞用 -er 重複(hotter and hotter),不用 more and more hot;hot 字尾雙寫 t 再加 er。"
        },
        {
          "stem": "The more you practice speaking English, ___ you will become at it.",
          "options": [
            "the confident",
            "the more confident",
            "more confident",
            "the most confident"
          ],
          "answer": 1,
          "explanation": "The more..., the more... 句型表『愈...愈...』;confident 為長形容詞,比較級用 the more confident。",
          "trap": "⚠ The more A, the more B 兩邊都要 the+比較級;confident 是多音節形容詞用 more confident 不可加 -er;此句非三者比較,別誤選最高級 the most confident。"
        },
        {
          "stem": "Mount Jade is higher than ___ mountain in Taiwan.",
          "options": [
            "any",
            "any other",
            "other",
            "the most"
          ],
          "answer": 1,
          "explanation": "用比較級表達最高級時,須說 higher than any other mountain(比其他任何一座都高),排除自己。",
          "trap": "⚠ 主詞玉山本身也是台灣的山,比較時要排除自己,須用 any other;若只寫 any 等於說『比自己還高』邏輯矛盾。"
        }
      ]
    },
    {
      "id": "preposition",
      "name": "介系詞 (Prepositions)",
      "week": "開學 第1週",
      "notes": [
        {
          "h": "時間介系詞 in/on/at",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">時間介系詞 範圍由大到小</text><rect x=\"20\" y=\"40\" width=\"280\" height=\"110\" rx=\"6\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"34\" y=\"58\" fill=\"#7fae9e\" font-size=\"12\">in</text><text x=\"60\" y=\"58\" fill=\"#333\" font-size=\"10\">月/年/季 (in May, in 2025)</text><rect x=\"50\" y=\"68\" width=\"230\" height=\"72\" rx=\"6\" fill=\"#f7f4f1\" stroke=\"#2b2b2b\"/><text x=\"64\" y=\"86\" fill=\"#c9755c\" font-size=\"12\">on</text><text x=\"90\" y=\"86\" fill=\"#333\" font-size=\"10\">日期/星期 (on Monday)</text><rect x=\"80\" y=\"96\" width=\"180\" height=\"38\" rx=\"6\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"94\" y=\"120\" fill=\"#333\" font-size=\"12\">at</text><text x=\"120\" y=\"120\" fill=\"#333\" font-size=\"10\">鐘點 (at 7, at noon)</text><text x=\"160\" y=\"170\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">by=期限 / until=持續</text></svg>",
          "caption": "in on at 範圍由大到小",
          "points": [
            "at + 鐘點/特定時刻 (at 7, at noon);on + 日期/星期 (on Monday);in + 月/年/季 (in May, in 2025)。",
            "by=最晚在…之前(by Friday);until=持續到…(stay until 9)。"
          ],
          "trap": "by 強調『期限』、until 強調『持續』;in the morning 但 on Monday morning(有特定日期改用 on)。"
        },
        {
          "h": "地點與其他常考介系詞",
          "points": [
            "in(內部)/on(表面)/at(一個點);介系詞片語 be good at, be interested in, depend on。"
          ],
          "trap": "固定搭配要整組記:be afraid of、be famous for、arrive at(小地方)/in(大城市),介系詞錯=整題錯。",
          "svg": "<svg viewBox=\"0 0 400 210\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"400\" height=\"210\" rx=\"8\" fill=\"#f3e7df\"/><text x=\"200\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\">地點介系詞 in / on / at</text><rect x=\"40\" y=\"45\" width=\"90\" height=\"60\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><circle cx=\"85\" cy=\"75\" r=\"12\" fill=\"#5aa874\"/><text x=\"85\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">in 內部</text><text x=\"85\" y=\"137\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#3a342e\">in the box</text><line x1=\"160\" y1=\"95\" x2=\"245\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"2\"/><rect x=\"180\" y=\"75\" width=\"45\" height=\"20\" fill=\"#c9755c\"/><text x=\"200\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">on 表面</text><text x=\"200\" y=\"137\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#3a342e\">on the desk</text><circle cx=\"320\" cy=\"80\" r=\"6\" fill=\"#f0a52e\"/><text x=\"320\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\">at 一點</text><text x=\"320\" y=\"137\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#3a342e\">at the door</text><line x1=\"30\" y1=\"155\" x2=\"370\" y2=\"155\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"200\" y=\"176\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">固定搭配:arrive at(小地方)/ in(大城市)</text><text x=\"200\" y=\"196\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">be good at, interested in, famous for</text></svg>",
          "caption": "in 內部、on 接觸表面、at 視為一個點"
        }
      ],
      "quiz": [
        {
          "stem": "Please hand in your report ___ Friday; the teacher won't accept it later.",
          "options": [
            "until",
            "by",
            "in",
            "at"
          ],
          "answer": 1,
          "explanation": "『最晚在週五之前交出』表期限,用 by Friday。",
          "trap": "by(期限)vs until(持續):交報告是一次性動作有截止日,用 by;until 用於『持續到某時』如 wait until。"
        },
        {
          "stem": "My little sister is afraid ___ the dark and never sleeps without a light.",
          "options": [
            "of",
            "at",
            "for",
            "with"
          ],
          "answer": 0,
          "explanation": "固定片語 be afraid of(害怕),介系詞為 of。",
          "trap": "be afraid of 是固定搭配,介系詞不能換;靠片語記憶,不能照中文『對黑暗』翻成 at。"
        },
        {
          "stem": "The famous singer was born ___ a small village ___ the morning of a cold winter day.",
          "options": [
            "at / in",
            "in / on",
            "in / at",
            "on / in"
          ],
          "answer": 1,
          "explanation": "村莊視為較大範圍地點用 in;有特定日期的早晨(冬日早晨)用 on(on the morning of...)。",
          "trap": "⚠ in the morning 但有特定日期時改用 on the morning of...;村莊用 in(較大區域),兩個空格須分別判斷,不能都填同一個介系詞。"
        },
        {
          "stem": "Success usually depends ___ hard work rather than luck, my teacher always says.",
          "options": [
            "of",
            "on",
            "at",
            "with"
          ],
          "answer": 1,
          "explanation": "固定搭配 depend on(取決於、依賴),介系詞為 on。",
          "trap": "⚠ depend on 是固定搭配,介系詞不可換;別照中文『依靠』直覺翻成 of 或 with,片語要整組記。"
        }
      ]
    },
    {
      "id": "modal",
      "name": "助動詞與情態動詞 (Modals)",
      "week": "開學 第2週",
      "notes": [
        {
          "h": "情態動詞核心語意",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">情態動詞 + 原形動詞</text><rect x=\"40\" y=\"40\" width=\"100\" height=\"34\" rx=\"4\" fill=\"#c9755c\" opacity=\"0.85\"/><text x=\"90\" y=\"61\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"12\">must</text><rect x=\"180\" y=\"40\" width=\"100\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"230\" y=\"61\" text-anchor=\"middle\" fill=\"#333\" font-size=\"12\">go (原形)</text><line x1=\"140\" y1=\"57\" x2=\"180\" y2=\"57\" stroke=\"#7fae9e\" stroke-width=\"2\"/><polygon points=\"180,57 172,53 172,61\" fill=\"#7fae9e\"/><text x=\"160\" y=\"92\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">後接原形, 不加 to / -s</text><rect x=\"20\" y=\"105\" width=\"140\" height=\"55\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"90\" y=\"125\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"11\">must not</text><text x=\"90\" y=\"145\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">禁止 (不可)</text><rect x=\"170\" y=\"105\" width=\"140\" height=\"55\" rx=\"4\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"240\" y=\"125\" text-anchor=\"middle\" fill=\"#7fae9e\" font-size=\"11\">do not have to</text><text x=\"240\" y=\"145\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">不必 (沒必要)</text></svg>",
          "caption": "情態動詞後一律接原形",
          "points": [
            "must=必須/一定;have to=必須(外在規定);should=應該;had better=最好(否則有後果)。",
            "can/could=能力、許可;may/might=可能、許可;would rather=寧願。",
            "情態動詞後接原形動詞,沒有時態變化(no -s)。"
          ],
          "trap": "must not=禁止(強烈)、don't have to=不必(沒必要),兩者意思完全不同;情態動詞後一律接原形,別加 to 或 -s。"
        }
      ],
      "quiz": [
        {
          "stem": "You ___ touch that wire! It's extremely dangerous and could kill you.",
          "options": [
            "don't have to",
            "must not",
            "may not have to",
            "needn't"
          ],
          "answer": 1,
          "explanation": "extremely dangerous 表『嚴禁』,用 must not(禁止)。",
          "trap": "must not=禁止,don't have to=不必(沒必要);此句是危險警告須用禁止,別把『不必』誤當『不可』。"
        },
        {
          "stem": "It ___ rain later; you'd better take an umbrella just in case.",
          "options": [
            "must",
            "might",
            "should",
            "can"
          ],
          "answer": 1,
          "explanation": "just in case(以防萬一)表不確定的可能性,用 might(也許會)。",
          "trap": "might 表『可能、不確定』;must 表『一定』語氣太強,與 just in case 的猜測語氣不符。"
        },
        {
          "stem": "You ___ have told me about the meeting earlier; now I've missed it completely.",
          "options": [
            "must",
            "should",
            "can",
            "would"
          ],
          "answer": 1,
          "explanation": "should have + p.p. 表『過去應該做卻沒做』的責備或遺憾,符合『沒早點告訴我』的語境。",
          "trap": "⚠ should have p.p.=當初應該…(卻沒做);must have p.p.是『一定是…(推測)』語意不符;此句是責怪對方沒做,須用 should。"
        },
        {
          "stem": "The lights are still on, so someone ___ be working late in the office.",
          "options": [
            "can't",
            "must",
            "need",
            "would rather"
          ],
          "answer": 1,
          "explanation": "由『燈還亮著』這項證據做有把握的肯定推測,用 must be(一定是)。",
          "trap": "⚠ must 表『有根據的肯定推測』(一定是);can't 是『不可能』語意相反,燈亮著正暗示有人在,故用 must 不是 can't。"
        }
      ]
    },
    {
      "id": "passive",
      "name": "被動語態 (Passive Voice)",
      "week": "開學 第3週",
      "notes": [
        {
          "h": "被動結構與時態",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">主動 -&gt; 被動 轉換</text><rect x=\"20\" y=\"38\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"60\" y=\"57\" text-anchor=\"middle\" fill=\"#333\" font-size=\"11\">Tom</text><rect x=\"120\" y=\"38\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"160\" y=\"57\" text-anchor=\"middle\" fill=\"#333\" font-size=\"11\">wrote</text><rect x=\"220\" y=\"38\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"260\" y=\"57\" text-anchor=\"middle\" fill=\"#333\" font-size=\"11\">a book</text><path d=\"M60 70 C100 105, 230 105, 258 70\" stroke=\"#c9755c\" stroke-width=\"1.5\" fill=\"none\"/><polygon points=\"258,70 252,77 262,76\" fill=\"#c9755c\"/><path d=\"M260 70 C220 110, 90 110, 62 70\" stroke=\"#7fae9e\" stroke-width=\"1.5\" fill=\"none\"/><polygon points=\"62,70 56,76 66,77\" fill=\"#7fae9e\"/><rect x=\"20\" y=\"118\" width=\"100\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"70\" y=\"137\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">A book</text><rect x=\"130\" y=\"118\" width=\"100\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"180\" y=\"137\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">was written</text><rect x=\"240\" y=\"118\" width=\"60\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"270\" y=\"137\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">by Tom</text><text x=\"160\" y=\"168\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">受詞變主詞, be + p.p.</text></svg>",
          "caption": "受詞變主詞 be 加過去分詞",
          "points": [
            "被動=be + p.p.;受詞變主詞,動作者用 by 帶出(常省略)。",
            "各時態的 be 要對應:is made / was made / will be made / has been made。",
            "情態動詞被動:must be done、can be seen。"
          ],
          "trap": "主詞是『被動作』者就用被動;p.p. 不規則動詞要正確(written 非 writed);時態藏在 be 動詞,別只看 p.p.。"
        }
      ],
      "quiz": [
        {
          "stem": "This famous novel ___ by a teenager more than a hundred years ago.",
          "options": [
            "wrote",
            "was written",
            "has written",
            "writes"
          ],
          "answer": 1,
          "explanation": "小說是『被』寫的且 a hundred years ago 為過去,用過去被動 was written。",
          "trap": "主詞 novel 是受動者須用被動;wrote 是主動,且 write 的 p.p. 是 written 不是 writed。"
        },
        {
          "stem": "English ___ all over the world today.",
          "options": [
            "speaks",
            "is speaking",
            "is spoken",
            "spoke"
          ],
          "answer": 2,
          "explanation": "English 是『被』說的,現在事實用現在被動 is spoken。",
          "trap": "語言是被人說的,主詞為受動者用被動 is spoken;is speaking(進行主動)語意變成『英語正在說話』不通。"
        },
        {
          "stem": "The bridge ___ by next year, so traffic will become much smoother then.",
          "options": [
            "will finish",
            "will be finished",
            "is finishing",
            "has finished"
          ],
          "answer": 1,
          "explanation": "橋是『被』完成的且 by next year 表未來,用未來被動 will be finished。",
          "trap": "⚠ 主詞 bridge 是受動者須用被動;will finish 是主動(橋自己完成)語意不通,未來被動結構為 will be + p.p.。"
        },
        {
          "stem": "Look at the broken window! It ___ during the storm last night.",
          "options": [
            "broke",
            "was broken",
            "has broken",
            "breaks"
          ],
          "answer": 1,
          "explanation": "窗戶是『被』打破的且 last night 為過去,用過去被動 was broken。",
          "trap": "⚠ window 是受動者要用被動 was broken;broke 是主動(窗戶自己破)雖口語可見,但搭配 during the storm 強調被外力所破,標準答案用被動。"
        }
      ]
    },
    {
      "id": "gerundinf",
      "name": "不定詞與動名詞 (Infinitives & Gerunds)",
      "week": "開學 第4週",
      "notes": [
        {
          "h": "to V vs V-ing 的搭配",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">動詞後接 to V 或 V-ing</text><line x1=\"160\" y1=\"32\" x2=\"160\" y2=\"150\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><rect x=\"20\" y=\"40\" width=\"120\" height=\"24\" rx=\"4\" fill=\"#c9755c\" opacity=\"0.85\"/><text x=\"80\" y=\"57\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\">只接 to V</text><rect x=\"180\" y=\"40\" width=\"120\" height=\"24\" rx=\"4\" fill=\"#7fae9e\" opacity=\"0.85\"/><text x=\"240\" y=\"57\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\">只接 V-ing</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">want, hope</text><text x=\"80\" y=\"104\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">decide, plan</text><text x=\"80\" y=\"124\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">would like</text><text x=\"240\" y=\"84\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">enjoy, finish</text><text x=\"240\" y=\"104\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">mind, keep</text><text x=\"240\" y=\"124\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">avoid, practice</text><text x=\"160\" y=\"168\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"9\">stop to V 去做別事 / stop V-ing 停止</text></svg>",
          "caption": "動詞決定接 to V / V-ing",
          "points": [
            "只接 to V:want, hope, decide, plan, would like。",
            "只接 V-ing:enjoy, finish, mind, keep, avoid, practice。",
            "介系詞後接 V-ing:be good at swimming, look forward to seeing。"
          ],
          "trap": "stop to V(停下來去做別事) vs stop V-ing(停止做某事) 語意不同;remember to V(記得要做)vs remember V-ing(記得做過)。"
        }
      ],
      "quiz": [
        {
          "stem": "Would you mind ___ the window? It's a little cold in here.",
          "options": [
            "to close",
            "closing",
            "close",
            "closed"
          ],
          "answer": 1,
          "explanation": "mind 後接動名詞 V-ing,故 closing。",
          "trap": "mind 是『只接 V-ing』的動詞,別反射性填 to close;這類動詞(enjoy/finish/mind)要整組記。"
        },
        {
          "stem": "On his way home, he stopped ___ some bread for dinner.",
          "options": [
            "buying",
            "to buy",
            "bought",
            "buy"
          ],
          "answer": 1,
          "explanation": "stop to V=停下來『去做另一件事』(去買麵包),符合語意。",
          "trap": "stop to buy(停下來去買) vs stop buying(停止購買) 意思相反;此處是去買麵包,用 to V。"
        },
        {
          "stem": "I clearly remember ___ the door before I left, but now it's somehow open.",
          "options": [
            "to lock",
            "locking",
            "lock",
            "locked"
          ],
          "answer": 1,
          "explanation": "remember V-ing 表『記得做過某事』;由『離開前』且『現在卻開著』可知是回憶過去動作,用 locking。",
          "trap": "⚠ remember to V(記得要去做,未做)vs remember V-ing(記得做過,已做);此處是回憶離開前已鎖門的動作,用 locking 不是 to lock。"
        },
        {
          "stem": "It was already dark, so they decided ___ camping and go home instead.",
          "options": [
            "stopping",
            "to stop",
            "stop",
            "stopped"
          ],
          "answer": 1,
          "explanation": "decide 後只接 to V,故 to stop;stop V-ing 表『停止露營』,語意為決定停止並回家。",
          "trap": "⚠ decide 是『只接 to V』的動詞,須填 to stop;雖然 stop 本身後接 V-ing,但這裡受 decide 支配先填不定詞 to stop,別被 camping 干擾。"
        }
      ]
    },
    {
      "id": "relative",
      "name": "關係子句 (Relative Clauses)",
      "week": "上學期 期中後",
      "notes": [
        {
          "h": "關係代名詞的選用",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">關係子句 連接示意</text><rect x=\"20\" y=\"50\" width=\"90\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"65\" y=\"71\" text-anchor=\"middle\" fill=\"#333\" font-size=\"11\">The man</text><text x=\"65\" y=\"98\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"9\">先行詞 (人)</text><rect x=\"125\" y=\"50\" width=\"60\" height=\"34\" rx=\"4\" fill=\"#7fae9e\" opacity=\"0.85\"/><text x=\"155\" y=\"71\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"12\">who</text><text x=\"155\" y=\"98\" text-anchor=\"middle\" fill=\"#7fae9e\" font-size=\"9\">關代</text><rect x=\"200\" y=\"50\" width=\"100\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"250\" y=\"71\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">is talking...</text><text x=\"250\" y=\"98\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">形容詞子句</text><path d=\"M110 67 L125 67\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><path d=\"M185 67 L200 67\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><path d=\"M155 84 C155 120, 65 120, 65 90\" stroke=\"#7fae9e\" stroke-width=\"1.2\" fill=\"none\" stroke-dasharray=\"3 2\"/><polygon points=\"65,90 61,98 69,97\" fill=\"#7fae9e\"/><text x=\"160\" y=\"148\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">人用 who / 物用 which</text><text x=\"160\" y=\"167\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">whose=所有格, 接名詞</text></svg>",
          "caption": "關代把子句接回先行詞",
          "points": [
            "who/whom 指人;which 指物;that 人物皆可(但非限定/介系詞後不可用 that)。",
            "whose 表所有格(人或物);關代當受詞時可省略。",
            "where(地點)、when(時間) 為關係副詞。"
          ],
          "trap": "先行詞是『人』用 who、是『物』用 which;關代在子句中的角色(主詞/受詞)決定能否省略,先行詞後緊接動詞時不可省。"
        }
      ],
      "quiz": [
        {
          "stem": "The man ___ is talking to my mother is my new English teacher.",
          "options": [
            "which",
            "who",
            "whose",
            "whom"
          ],
          "answer": 1,
          "explanation": "先行詞 The man 是人,且關代在子句中當主詞(後接動詞 is talking),用 who。",
          "trap": "先行詞是人用 who/whom;此處關代當主詞用 who,不可用受格 whom,也不可用指物的 which。"
        },
        {
          "stem": "That's the house ___ roof was damaged in the typhoon.",
          "options": [
            "which",
            "who",
            "whose",
            "where"
          ],
          "answer": 2,
          "explanation": "roof 是 house 的『屋頂』,表所有關係用 whose(the house's roof)。",
          "trap": "whose 可指物的所有格;後面接名詞 roof 表『屋頂屬於房子』,別誤用 where(where 後須接完整句不接名詞)。"
        },
        {
          "stem": "The novel ___ I borrowed from the library last week turned out to be really boring.",
          "options": [
            "who",
            "what",
            "that",
            "whose"
          ],
          "answer": 2,
          "explanation": "先行詞 novel(物)且關代在子句中當 borrowed 的受詞,可用 that(或 which),此處選 that。",
          "trap": "⚠ 先行詞是物用 that/which 不可用 who;what 不能引導關係子句(本身含先行詞);關代當受詞雖可省略,但選項中 that 為正解。"
        },
        {
          "stem": "Taipei, ___ is the capital of Taiwan, is famous for its night markets.",
          "options": [
            "that",
            "which",
            "where",
            "who"
          ],
          "answer": 1,
          "explanation": "非限定子句(有逗號)補充說明 Taipei(物/地),關代當主詞用 which;非限定不可用 that。",
          "trap": "⚠ 逗號的非限定子句不可用 that,須用 which;此處關代當子句主詞(後接 is)指物用 which,不是指地點的 where(where 後須接完整句)。"
        }
      ]
    },
    {
      "id": "conjunction",
      "name": "連接詞與從屬子句 (Conjunctions)",
      "week": "上學期 期中後",
      "notes": [
        {
          "h": "對等與從屬連接詞",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">連接詞 只能留一個</text><rect x=\"30\" y=\"45\" width=\"90\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"75\" y=\"66\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">It rained</text><rect x=\"135\" y=\"45\" width=\"100\" height=\"34\" rx=\"4\" fill=\"#7fae9e\" opacity=\"0.85\"/><text x=\"185\" y=\"66\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\">Although</text><rect x=\"250\" y=\"45\" width=\"60\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"280\" y=\"66\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">played</text><line x1=\"120\" y1=\"62\" x2=\"135\" y2=\"62\" stroke=\"#2b2b2b\"/><line x1=\"235\" y1=\"62\" x2=\"250\" y2=\"62\" stroke=\"#2b2b2b\"/><rect x=\"120\" y=\"105\" width=\"90\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"165\" y=\"126\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"11\">but</text><line x1=\"135\" y1=\"139\" x2=\"195\" y2=\"105\" stroke=\"#c9755c\" stroke-width=\"2\"/><line x1=\"195\" y1=\"139\" x2=\"135\" y2=\"105\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"160\" y=\"166\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">Although 與 but 不可同句並用</text></svg>",
          "caption": "雖然但是英文只擇一",
          "points": [
            "對等:and, but, or, so;成對:both…and, not only…but also, either…or, neither…nor。",
            "從屬:because(原因)、although/though(雖然)、when/while(時間)、if(條件)。",
            "中文『雖然…但是』英文只能擇一:用 Although 就不用 but。"
          ],
          "trap": "Although 和 but 不能同句並用;because 和 so 也不能同句並用(中文兩個都說,英文只留一個)。"
        }
      ],
      "quiz": [
        {
          "stem": "___ it was raining hard, the players kept on with the game.",
          "options": [
            "Because",
            "Although",
            "So",
            "Unless"
          ],
          "answer": 1,
          "explanation": "下大雨『卻』仍繼續比賽,表讓步轉折,用 Although(雖然)。",
          "trap": "前後語意相反(雨大 vs 照打)須用 Although;Because 表原因語意不通,且英文不可 Although…but 並用。"
        },
        {
          "stem": "Hurry up, ___ you will miss the last train.",
          "options": [
            "and",
            "but",
            "or",
            "so"
          ],
          "answer": 2,
          "explanation": "祈使句 + or + 將會…=否則(不快點就會錯過火車)。",
          "trap": "祈使句後 and=就會(好結果)、or=否則(壞結果);錯過火車是壞結果須用 or,別誤填 and。"
        },
        {
          "stem": "___ my brother nor I am interested in playing video games all day long.",
          "options": [
            "Either",
            "Both",
            "Neither",
            "Not only"
          ],
          "answer": 2,
          "explanation": "成對連接詞 neither...nor...(兩者都不);呼應後面的 nor,且動詞依就近原則配合 I 用 am。",
          "trap": "⚠ 與 nor 配對的是 Neither(neither...nor 兩者皆否定);either 須配 or,both 須配 and,看後面的 nor 即可鎖定 Neither。"
        },
        {
          "stem": "He kept practicing every day ___ he could win the speech contest.",
          "options": [
            "so that",
            "so",
            "such that",
            "because"
          ],
          "answer": 0,
          "explanation": "so that + 子句表『目的』(為了能…);此句說明天天練習是為了贏比賽。",
          "trap": "⚠ so that(為了…)引導目的副詞子句;單獨的 so 表結果不接完整目的子句,because 表原因語意不符,別把 so that 拆開。"
        }
      ]
    },
    {
      "id": "subjunctive",
      "name": "假設語氣 (Subjunctive)",
      "week": "下學期 期中前",
      "notes": [
        {
          "h": "與現在/過去事實相反",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">假設語氣 時態往前推一格</text><text x=\"30\" y=\"55\" fill=\"#c9755c\" font-size=\"11\">與現在相反</text><rect x=\"30\" y=\"62\" width=\"120\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"90\" y=\"81\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">If + 過去式</text><rect x=\"180\" y=\"62\" width=\"120\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"240\" y=\"81\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">would + 原形</text><line x1=\"150\" y1=\"77\" x2=\"180\" y2=\"77\" stroke=\"#7fae9e\" stroke-width=\"2\"/><polygon points=\"180,77 172,73 172,81\" fill=\"#7fae9e\"/><text x=\"30\" y=\"120\" fill=\"#c9755c\" font-size=\"11\">與過去相反</text><rect x=\"30\" y=\"127\" width=\"120\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"90\" y=\"146\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">If + had p.p.</text><rect x=\"180\" y=\"127\" width=\"120\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"240\" y=\"146\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">would have p.p.</text><line x1=\"150\" y1=\"142\" x2=\"180\" y2=\"142\" stroke=\"#7fae9e\" stroke-width=\"2\"/><polygon points=\"180,142 172,138 172,146\" fill=\"#7fae9e\"/><text x=\"160\" y=\"174\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">be 動詞一律用 were</text></svg>",
          "caption": "假設語氣時態往前推一格",
          "points": [
            "與現在事實相反:If + 過去式, 主詞 + would/could + 原形 (If I were you, I would…)。",
            "與過去事實相反:If + had p.p., 主詞 + would have + p.p.。",
            "be 動詞在假設語氣一律用 were。"
          ],
          "trap": "與現在相反用『過去式』、與過去相反用『過去完成』,時態往前推一格;if 子句 be 動詞用 were(I/he 也用 were)。"
        }
      ],
      "quiz": [
        {
          "stem": "If I ___ a bird, I would fly to you right now.",
          "options": [
            "am",
            "was",
            "were",
            "had been"
          ],
          "answer": 2,
          "explanation": "與現在事實相反(我不是鳥),if 子句用過去式,be 動詞一律用 were。",
          "trap": "假設語氣 be 動詞固定用 were(連 I 也用 were);right now 表與『現在』相反,不可用 had been(那是與過去相反)。"
        },
        {
          "stem": "If you had studied harder, you ___ the exam last week.",
          "options": [
            "would pass",
            "would have passed",
            "will pass",
            "passed"
          ],
          "answer": 1,
          "explanation": "last week + if had studied 表與過去事實相反,主句用 would have + p.p.。",
          "trap": "if 子句已是 had p.p.(與過去相反),主句須對應 would have passed;別用 would pass(那是與現在相反)。"
        },
        {
          "stem": "I wish I ___ harder when I was young; I might have a better job now.",
          "options": [
            "study",
            "studied",
            "had studied",
            "have studied"
          ],
          "answer": 2,
          "explanation": "wish + 與過去事實相反用過去完成式 had studied(後悔年輕時沒用功)。",
          "trap": "⚠ wish 表與『過去』相反(when I was young)須用 had studied(過去完成);studied(過去式)是與『現在』相反,時間線索 when young 指向過去完成。"
        },
        {
          "stem": "___ I known you were sick, I would have visited you in the hospital.",
          "options": [
            "If",
            "Had",
            "Did",
            "Were"
          ],
          "answer": 1,
          "explanation": "假設語氣與過去相反時 if 可省略並倒裝:Had I known... = If I had known...。",
          "trap": "⚠ 與過去相反的假設句省略 if 時須倒裝助動詞 had 提前(Had I known);此處非完整 If 子句(沒有 had),故選倒裝的 Had 而非 If。"
        }
      ]
    },
    {
      "id": "sentence",
      "name": "句型:五大句型與問句 (Sentence Patterns)",
      "week": "下學期 期中前",
      "notes": [
        {
          "h": "間接問句與附加問句",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">間接問句 語序還原</text><rect x=\"20\" y=\"38\" width=\"280\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"30\" y=\"57\" fill=\"#333\" font-size=\"10\">直接: Where</text><text x=\"120\" y=\"57\" fill=\"#c9755c\" font-size=\"10\">is</text><text x=\"145\" y=\"57\" fill=\"#333\" font-size=\"10\">the station ?  (倒裝)</text><path d=\"M125 70 C150 95, 200 95, 225 80\" stroke=\"#7fae9e\" stroke-width=\"1.5\" fill=\"none\"/><polygon points=\"225,80 217,80 221,87\" fill=\"#7fae9e\"/><rect x=\"20\" y=\"100\" width=\"280\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"30\" y=\"119\" fill=\"#333\" font-size=\"10\">間接: ...where</text><text x=\"125\" y=\"119\" fill=\"#333\" font-size=\"10\">the station</text><text x=\"220\" y=\"119\" fill=\"#c9755c\" font-size=\"10\">is</text><text x=\"160\" y=\"155\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">疑問詞 + 主詞 + 動詞 (直述語序)</text><text x=\"160\" y=\"173\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">附加問句: 前肯後否, He is.. isn t he?</text></svg>",
          "caption": "間接問句改回主詞加動詞",
          "points": [
            "間接問句:疑問詞 + 主詞 + 動詞(用直述語序),如 I don't know where he is(非 where is he)。",
            "附加問句:前肯定後否定、前否定後肯定,助動詞與時態須對應(He is…, isn't he?)。",
            "祈使句附加問句用 will you?;Let's… 用 shall we?。"
          ],
          "trap": "間接問句要改成『主詞+動詞』的直述語序;附加問句前後一正一反,且主詞用代名詞、助動詞要對應前句時態。"
        }
      ],
      "quiz": [
        {
          "stem": "Could you tell me ___ the nearest MRT station is?",
          "options": [
            "where",
            "where is",
            "is where",
            "where does"
          ],
          "answer": 0,
          "explanation": "間接問句須用直述語序:where + 主詞(the station) + 動詞(is),故只填 where。",
          "trap": "間接問句不可倒裝;雖是問句但要用『主詞+動詞』語序,where is 是直接問句語序屬陷阱。"
        },
        {
          "stem": "Your sister can speak French, ___?",
          "options": [
            "can she",
            "can't she",
            "does she",
            "doesn't she"
          ],
          "answer": 1,
          "explanation": "前句肯定且有助動詞 can,附加問句用否定 can't 並對應主詞 she。",
          "trap": "附加問句前肯定後否定,助動詞須沿用前句的 can(不是 do);故為 can't she,別換成 doesn't。"
        },
        {
          "stem": "___ a wonderful idea you have come up with for the school festival!",
          "options": [
            "How",
            "What",
            "Such",
            "Very"
          ],
          "answer": 1,
          "explanation": "感嘆句修飾名詞片語(a wonderful idea)用 What;What + (a/an) + 形容詞 + 名詞。",
          "trap": "⚠ What 引導『名詞』感嘆句(What a + adj. + n.),How 引導『形容詞/副詞』感嘆句(How nice!);此處核心是名詞 idea,故用 What 不是 How。"
        },
        {
          "stem": "You haven't finished your homework yet, ___?",
          "options": [
            "have you",
            "haven't you",
            "do you",
            "did you"
          ],
          "answer": 0,
          "explanation": "前句為否定(haven't...yet),附加問句用肯定,並沿用助動詞 have,主詞 you,故 have you。",
          "trap": "⚠ 附加問句『前否定後肯定』;主句已含 haven't(否定),問句須用肯定 have you,且助動詞沿用 have 不可換成 do/did。"
        }
      ]
    },
    {
      "id": "cloze",
      "name": "克漏字策略 (Cloze)",
      "week": "下學期 期中後",
      "notes": [
        {
          "h": "上下文與搭配判讀",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">克漏字 看前後文邏輯</text><rect x=\"20\" y=\"40\" width=\"90\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"65\" y=\"64\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">前句</text><rect x=\"125\" y=\"40\" width=\"70\" height=\"40\" rx=\"4\" fill=\"#c9755c\" opacity=\"0.85\"/><text x=\"160\" y=\"64\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"14\">[?]</text><rect x=\"210\" y=\"40\" width=\"90\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"255\" y=\"64\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">後句</text><line x1=\"110\" y1=\"60\" x2=\"125\" y2=\"60\" stroke=\"#7fae9e\" stroke-width=\"2\"/><line x1=\"195\" y1=\"60\" x2=\"210\" y2=\"60\" stroke=\"#7fae9e\" stroke-width=\"2\"/><rect x=\"40\" y=\"105\" width=\"110\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"95\" y=\"120\" text-anchor=\"middle\" fill=\"#7fae9e\" font-size=\"10\">順承</text><text x=\"95\" y=\"133\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">therefore</text><rect x=\"170\" y=\"105\" width=\"110\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"225\" y=\"120\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">相反</text><text x=\"225\" y=\"133\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">however</text><text x=\"160\" y=\"166\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">判斷前後是順承還是相反</text></svg>",
          "caption": "空格靠前後句邏輯判讀",
          "points": [
            "先讀完整段抓主旨,再依空格前後判斷詞性、時態與邏輯關係。",
            "注意轉折詞(however/therefore)決定語意走向;固定搭配(make a decision)整組考。",
            "代名詞、冠詞題回前文找指涉對象。"
          ],
          "trap": "克漏字不能只看一格,要看前後句邏輯;連接詞/轉折詞題務必判斷『前後是順承還是相反』再選。"
        }
      ],
      "quiz": [
        {
          "stem": "She studied very hard for months. ___, she failed the entrance exam, which surprised everyone.",
          "options": [
            "Therefore",
            "However",
            "Besides",
            "For example"
          ],
          "answer": 1,
          "explanation": "努力卻落榜,前後語意相反且 surprised everyone,用轉折詞 However。",
          "trap": "前後因果相反(努力 vs 落榜)用 However;Therefore 表順承結果,與『令人意外』的轉折語氣矛盾。"
        },
        {
          "stem": "Before making such an important ___, you should talk to your parents first.",
          "options": [
            "decide",
            "decision",
            "decisive",
            "decidedly"
          ],
          "answer": 1,
          "explanation": "make a decision 為固定搭配,形容詞 important 後需名詞 decision。",
          "trap": "make 的受詞需名詞 decision;decide 是動詞,important(形容詞)後不能再接動詞,固定搭配要記熟。"
        },
        {
          "stem": "The road was covered with thick ice. ___, the driver slowed down and drove very carefully.",
          "options": [
            "However",
            "Therefore",
            "Otherwise",
            "Instead"
          ],
          "answer": 1,
          "explanation": "結冰是『因』,放慢小心開是合理『結果』,前後順承用 Therefore(因此)。",
          "trap": "⚠ 前後為因果順承(結冰→小心開)用 Therefore;However 表轉折相反,此處並無語意對立,別反射性填轉折詞。"
        },
        {
          "stem": "Many students find math difficult, but with regular ___ , they can improve a lot over time.",
          "options": [
            "practice",
            "practical",
            "practically",
            "practiced"
          ],
          "answer": 0,
          "explanation": "介系詞 with 後需名詞,regular(adj.)後也須接名詞,practice(練習)為名詞。",
          "trap": "⚠ 介系詞 with + 形容詞 regular 之後須接名詞,故用 practice(n.);practical(adj.)/practically(adv.)詞性不符,別被動詞 practiced 字形迷惑。"
        }
      ]
    },
    {
      "id": "reading",
      "name": "閱讀測驗策略 (Reading)",
      "week": "全期",
      "notes": [
        {
          "h": "題型與作答技巧",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">閱讀題型 對應位置</text><rect x=\"30\" y=\"35\" width=\"150\" height=\"120\" rx=\"4\" fill=\"#fff\" stroke=\"#2b2b2b\"/><rect x=\"42\" y=\"48\" width=\"126\" height=\"14\" rx=\"2\" fill=\"#c9755c\" opacity=\"0.5\"/><line x1=\"42\" y1=\"76\" x2=\"168\" y2=\"76\" stroke=\"#2b2b2b\" stroke-width=\"0.6\"/><line x1=\"42\" y1=\"90\" x2=\"168\" y2=\"90\" stroke=\"#2b2b2b\" stroke-width=\"0.6\"/><rect x=\"42\" y=\"100\" width=\"70\" height=\"10\" rx=\"2\" fill=\"#7fae9e\" opacity=\"0.6\"/><line x1=\"42\" y1=\"124\" x2=\"168\" y2=\"124\" stroke=\"#2b2b2b\" stroke-width=\"0.6\"/><rect x=\"42\" y=\"134\" width=\"126\" height=\"14\" rx=\"2\" fill=\"#c9755c\" opacity=\"0.5\"/><text x=\"205\" y=\"52\" fill=\"#c9755c\" font-size=\"10\">主旨題</text><text x=\"205\" y=\"65\" fill=\"#333\" font-size=\"9\">看首尾段</text><text x=\"205\" y=\"108\" fill=\"#7fae9e\" font-size=\"10\">細節題</text><text x=\"205\" y=\"121\" fill=\"#333\" font-size=\"9\">定位關鍵字</text><text x=\"160\" y=\"172\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">推論題須有文本依據, 字義靠上下文</text></svg>",
          "caption": "不同題型對應文章位置",
          "points": [
            "主旨題看首尾段;細節題回原文定位關鍵字;推論題須有文本依據不可過度延伸。",
            "字義題用上下文猜測(context clues),不靠單字背誦。",
            "先看題目再讀文章可提高定位效率。"
          ],
          "trap": "細節題答案常被『換句話說(paraphrase)』,別只找一模一樣的字;推論題切忌憑常識想像,要回文章找根據。"
        }
      ],
      "quiz": [
        {
          "stem": "A passage says: 'Despite the high price, the new phone sold out within hours.' What can we infer?",
          "options": [
            "The phone was cheap.",
            "The phone was very popular.",
            "Nobody wanted the phone.",
            "The phone was on sale at a discount."
          ],
          "answer": 1,
          "explanation": "雖然貴卻數小時內售罄,可推論該手機非常受歡迎。",
          "trap": "Despite 表讓步(雖然貴);售罄=搶手,故推論『受歡迎』;選項 A『便宜』與 high price 矛盾,屬細節陷阱。"
        },
        {
          "stem": "In 'The hikers were exhausted after the long climb,' the word 'exhausted' most likely means ___.",
          "options": [
            "excited",
            "very tired",
            "hungry",
            "lost"
          ],
          "answer": 1,
          "explanation": "經過 long climb 後的狀態,exhausted=精疲力竭,由上下文可猜出『非常疲累』。",
          "trap": "用 context clues(long climb 爬很久)推字義;excited(興奮)與『爬完累』的語境不符,別只看字首 ex- 亂猜。"
        },
        {
          "stem": "A passage states: 'The new policy will take effect next month, though many citizens still have doubts about it.' What can we infer?",
          "options": [
            "The policy has already failed.",
            "Not everyone fully supports the policy.",
            "All citizens welcome the policy.",
            "The policy was cancelled."
          ],
          "answer": 1,
          "explanation": "though many citizens still have doubts 顯示部分民眾存疑,可推論並非人人完全支持。",
          "trap": "⚠ though(雖然)引出讓步,have doubts=有疑慮,故推論『非人人支持』;選項 C『所有人歡迎』與 doubts 矛盾,屬細節陷阱,別過度延伸成『失敗/取消』。"
        },
        {
          "stem": "In 'The medicine had an immediate effect; the patient felt better within minutes,' the word 'immediate' most likely means ___.",
          "options": [
            "delayed",
            "happening at once",
            "painful",
            "expensive"
          ],
          "answer": 1,
          "explanation": "由 within minutes(數分鐘內就好轉)可推 immediate=立即的(馬上發生)。",
          "trap": "⚠ 用 context clues(within minutes 幾分鐘內)推字義;delayed(延遲)與『立刻見效』語境相反,別只憑字形猜,要回句子找線索。"
        }
      ]
    },
    {
      "id": "listening",
      "name": "聽力策略 (Listening)",
      "week": "全期每週",
      "listening": true,
      "notes": [
        {
          "h": "聽力作答策略",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">聽力 三步驟流程</text><rect x=\"20\" y=\"55\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"60\" y=\"78\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">先看圖</text><text x=\"60\" y=\"93\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">選項</text><rect x=\"120\" y=\"55\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"160\" y=\"78\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">標記</text><text x=\"160\" y=\"93\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">關鍵字</text><rect x=\"220\" y=\"55\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"260\" y=\"78\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">聽整句</text><text x=\"260\" y=\"93\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">語意</text><line x1=\"100\" y1=\"80\" x2=\"120\" y2=\"80\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><polygon points=\"120,80 112,76 112,84\" fill=\"#2b2b2b\"/><line x1=\"200\" y1=\"80\" x2=\"220\" y2=\"80\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><polygon points=\"220,80 212,76 212,84\" fill=\"#2b2b2b\"/><text x=\"160\" y=\"140\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"11\">注意 not / never 會反轉答案</text><text x=\"160\" y=\"162\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">聽到的字未必是答案</text></svg>",
          "caption": "聽力三步驟先預測再聽語意",
          "points": [
            "先看圖／選項,預測題目方向。",
            "聽到關鍵字立即標記,別執著聽懂每個字。",
            "注意語氣、否定詞與時間詞,常是答題關鍵。"
          ],
          "trap": "選項常出現『聽到的字』陷阱,聽到的單字未必是答案,要聽整句語意;尤其注意 not/never 等否定詞會反轉答案。"
        }
      ],
      "quiz": [
        {
          "stem": "聽到 'I'd rather take the bus than drive today.',說話者偏好怎麼去?",
          "options": [
            "搭公車",
            "開車",
            "走路",
            "騎腳踏車"
          ],
          "answer": 0,
          "explanation": "would rather A than B = 寧願 A 勝過 B,偏好 take the bus。",
          "trap": "would rather…than… 的偏好是 than『前面』那項;句尾出現的 drive 是被比下去的,別反選。"
        },
        {
          "stem": "聽到 'It's not until eight that the store opens.',商店幾點開門?",
          "options": [
            "七點前",
            "八點",
            "整天不開",
            "中午"
          ],
          "answer": 1,
          "explanation": "not until eight=直到八點才(開門),故開門時間為八點。",
          "trap": "not until=『直到…才』,not 不代表『不開』;聽到否定詞要聽完整句,八點才開門而非不營業。"
        },
        {
          "stem": "聽到 'The meeting has been put off until next Friday.',會議怎麼了?",
          "options": [
            "取消了",
            "延期了",
            "提前了",
            "照常舉行"
          ],
          "answer": 1,
          "explanation": "put off=延期、推遲;until next Friday 表延到下週五,故會議『延期』。",
          "trap": "⚠ put off 是『延期』不是『取消』;聽到 until next Friday 表延後而非取消,別把片語 put off 誤聽成 call off(取消)。"
        },
        {
          "stem": "聽到 'You can't miss it; the bank is right next to the post office.',對方在做什麼?",
          "options": [
            "拒絕幫忙",
            "報路(指引方向)",
            "邀約見面",
            "抱怨銀行"
          ],
          "answer": 1,
          "explanation": "You can't miss it(你一定找得到)+ right next to...(就在…旁邊)是典型的報路用語。",
          "trap": "⚠ You can't miss it 是『你絕對找得到』的報路慣用語,不是字面『不能錯過』;結合 next to the post office 可知在指引方向,別被 can't 的否定誤導。"
        }
      ]
    },
    {
      "id": "dailyenglish",
      "name": "日常對話用語 (Daily Conversation)",
      "week": "全期",
      "notes": [
        {
          "h": "情境功能句",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f7f4f1\"/><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#333\" font-size=\"13\">Do you mind...? 回答相反</text><rect x=\"60\" y=\"38\" width=\"200\" height=\"34\" rx=\"6\" fill=\"#fff\" stroke=\"#2b2b2b\"/><text x=\"160\" y=\"59\" text-anchor=\"middle\" fill=\"#333\" font-size=\"11\">Do you mind if I...?</text><line x1=\"130\" y1=\"72\" x2=\"90\" y2=\"100\" stroke=\"#7fae9e\" stroke-width=\"2\"/><line x1=\"190\" y1=\"72\" x2=\"230\" y2=\"100\" stroke=\"#c9755c\" stroke-width=\"2\"/><rect x=\"20\" y=\"102\" width=\"140\" height=\"56\" rx=\"6\" fill=\"#fff\" stroke=\"#7fae9e\"/><text x=\"90\" y=\"123\" text-anchor=\"middle\" fill=\"#7fae9e\" font-size=\"12\">No / Not at all</text><text x=\"90\" y=\"143\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">= 答應 (請便)</text><rect x=\"170\" y=\"102\" width=\"130\" height=\"56\" rx=\"6\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"235\" y=\"123\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"12\">Yes, I do</text><text x=\"235\" y=\"143\" text-anchor=\"middle\" fill=\"#333\" font-size=\"10\">= 拒絕 (介意)</text><text x=\"160\" y=\"174\" text-anchor=\"middle\" fill=\"#333\" font-size=\"9\">與中文直覺相反, 最易答反</text></svg>",
          "caption": "mind 答 No 才是答應",
          "points": [
            "邀約/回應:Would you like to…? / I'd love to, but…(婉拒)。",
            "請求/許可:Could you…? / Do you mind if I…?(回 No 才是答應)。",
            "建議:How about…? / Why don't we…?;道歉與回應:That's all right。"
          ],
          "trap": "Do you mind…? 問句答應要說 No(不介意),拒絕才說 Yes;這與中文直覺相反,最容易答反。"
        }
      ],
      "quiz": [
        {
          "stem": "A: 'Do you mind if I open the window?' B: '___ Go ahead.'",
          "options": [
            "Yes, I do.",
            "Not at all.",
            "Yes, please.",
            "I'd love to."
          ],
          "answer": 1,
          "explanation": "Do you mind…? 答應(不介意)用否定回答,Not at all + Go ahead 表『請便』。",
          "trap": "mind=介意,答應要說 Not at all/No;後句 Go ahead(請便)已暗示答應,故不能選 Yes(那是拒絕)。"
        },
        {
          "stem": "A: 'Thank you so much for your help.' B: '___'",
          "options": [
            "You're welcome.",
            "Yes, I do.",
            "Here you are.",
            "Not yet."
          ],
          "answer": 0,
          "explanation": "回應道謝用 You're welcome(不客氣)。",
          "trap": "道謝的標準回應是 You're welcome;Here you are 是『給你(遞東西)』,Not yet 是『還沒』,語境不符。"
        },
        {
          "stem": "A: 'Would you like to join us for dinner tonight?' B: '___ I already have other plans.'",
          "options": [
            "I'd love to.",
            "I'd love to, but",
            "Yes, please.",
            "Not at all."
          ],
          "answer": 1,
          "explanation": "後句 I already have other plans(已有別的安排)表婉拒,須用 I'd love to, but...(我很想,但是…)。",
          "trap": "⚠ 後句『已有其他計畫』是婉拒訊號,須用帶 but 的婉拒句型;單純 I'd love to(欣然接受)與後面的拒絕理由矛盾,Not at all 答非所問。"
        },
        {
          "stem": "A: 'I'm sorry I broke your cup by accident.' B: '___ It doesn't matter at all.'",
          "options": [
            "Never mind.",
            "Here you are.",
            "Help yourself.",
            "Congratulations!"
          ],
          "answer": 0,
          "explanation": "回應對方道歉、表示不介意用 Never mind(沒關係);呼應後句 It doesn't matter。",
          "trap": "⚠ 對方為打破杯子道歉,回應安慰用 Never mind(沒關係);Here you are 是『遞東西給你』,Help yourself 是『請自便(吃喝)』,語境皆不符。"
        }
      ]
    }
  ]
};
