// english.js — 英語（題庫擴充版：每科≥800題；新主題含筆記+SVG；答案經獨立對抗重驗）
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"22\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">success 字族 -&gt; 詞性</text><rect x=\"20\" y=\"40\" width=\"80\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"60\" y=\"56\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"11\">success</text><text x=\"60\" y=\"69\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">n. 名詞</text><rect x=\"120\" y=\"40\" width=\"80\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"160\" y=\"56\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"11\">successful</text><text x=\"160\" y=\"69\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">adj. 形容詞</text><rect x=\"220\" y=\"40\" width=\"80\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"260\" y=\"54\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">successfully</text><text x=\"260\" y=\"69\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">adv. 副詞</text><line x1=\"100\" y1=\"57\" x2=\"120\" y2=\"57\" stroke=\"#5aa874\" stroke-width=\"2\"/><line x1=\"200\" y1=\"57\" x2=\"220\" y2=\"57\" stroke=\"#5aa874\" stroke-width=\"2\"/><rect x=\"20\" y=\"100\" width=\"280\" height=\"60\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"30\" y=\"120\" fill=\"#3a342e\" font-size=\"11\">be 動詞 +</text><text x=\"110\" y=\"120\" fill=\"#c9755c\" font-size=\"11\">形容詞</text><text x=\"30\" y=\"142\" fill=\"#3a342e\" font-size=\"11\">一般動詞 +</text><text x=\"120\" y=\"142\" fill=\"#5aa874\" font-size=\"11\">副詞</text><text x=\"180\" y=\"131\" fill=\"#3a342e\" font-size=\"10\">看空格修飾誰</text></svg>",
          "caption": "同源字依字尾分辨詞性",
          "points": [
            "名詞 (n.) 當主詞/受詞；動詞 (v.) 表動作或狀態；形容詞 (adj.) 修飾名詞；副詞 (adv.) 修飾動詞/形容詞/全句。",
            "從句子的『空格位置』判斷該填哪種詞性：be 動詞後常接形容詞，一般動詞後接副詞。",
            "字尾常透露詞性：-tion/-ment/-ness 多為名詞，-ful/-ous/-ive 多為形容詞,-ly 多為副詞。"
          ],
          "trap": "success(n.)、successful(adj.)、successfully(adv.) 同源字易混；先看空格『修飾誰』再選詞性，不要憑單字眼熟亂填。"
        },
        {
          "h": "可數與不可數名詞 countable & uncountable",
          "points": [
            "名詞分可數與不可數兩類:可數名詞有單複數,前面可加 a/an 或數字,例如 a book、three apples;不可數名詞沒有複數形,不能加 a/an,例如 water、money、information、advice。",
            "不可數名詞要計量時,借用『單位詞』:a glass of water(一杯水)、a piece of advice(一則建議)、two pieces of bread(兩片麵包)。",
            "搭配的量詞也不同:可數名詞用 many、a few(many friends);不可數名詞用 much、a little(much time);兩者皆可用 some、a lot of。"
          ],
          "formula": "可數: a/an + 單數、數字 + 複數；不可數: a + 單位詞 + of + 名詞",
          "trap": "advice、information、homework、furniture、bread 在英文都是不可數,沒有複數,不能說 an advice、two informations、homeworks,要說 a piece of advice、some information。"
        },
        {
          "h": "形容詞變副詞的拼字規則 -ly",
          "points": [
            "多數形容詞加 -ly 變副詞:quick→quickly、careful→carefully、slow→slowly,用來修飾動詞,例如 She speaks slowly。",
            "字尾是子音加 y 時,先把 y 改 i 再加 -ly:happy→happily、easy→easily、lucky→luckily。",
            "有些字本身同時是形容詞和副詞,不另外加 -ly:fast、hard、early、late,例如 a fast car(形容詞)、He runs fast(副詞)。"
          ],
          "formula": "形容詞 + ly → 副詞；子音 + y → 去 y 加 ily",
          "trap": "friendly、lovely、lonely 字尾雖是 -ly,卻是『形容詞』不是副詞;不能說 She smiled friendly,要說 She gave me a friendly smile。另外 hard 是『努力地』,hardly 是『幾乎不』,意思相反別混。"
        },
        {
          "h": "形容詞的順序與位置",
          "points": [
            "形容詞放在名詞『前面』直接修飾,例如 a beautiful red flower;放在 be 動詞或連綴動詞後面當補語,例如 The flower is beautiful、It looks nice。",
            "多個形容詞一起用時有大致順序:『主觀評價 + 大小 + 顏色 + 材質 + 名詞』,例如 a nice big white house。",
            "連綴動詞(look、smell、taste、sound、feel)後面接形容詞不是副詞,例如 The soup tastes good(不是 tastes well)。"
          ],
          "formula": "評價 + 大小 + 顏色 + 材質 + 名詞；連綴動詞 + 形容詞",
          "trap": "中文說『湯嚐起來很好』容易直翻成 tastes well,但 taste 是連綴動詞要接形容詞 good;well 當副詞時指『把事情做好』,當形容詞時指『健康的』,語意都不同。"
        }
      ],
      "quiz": [
        {
          "stem": "The team worked ___ to finish the project before the deadline.",
          "options": [
            "hardest",
            "hardly",
            "harder than",
            "hard"
          ],
          "answer": 3,
          "explanation": "此處需副詞修飾動詞 worked，hard 本身即可作副詞=努力地；句中無比較對象故不選比較級。",
          "trap": "hardly 是『幾乎不』(否定副詞)，與 hard『努力地』意思相反,別被字形相近騙到。"
        },
        {
          "stem": "Her ___ to help others made her popular among classmates.",
          "options": [
            "kindness",
            "kindly",
            "kind",
            "kindle"
          ],
          "answer": 0,
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
        },
        {
          "stem": "The reporter's account was completely ___; she had invented every detail to make the story more exciting.",
          "options": [
            "fictitious",
            "objective",
            "factual",
            "credible"
          ],
          "answer": 0,
          "explanation": "後句『她捏造了每個細節』提示報導內容是虛構的,fictitious(虛構的、捏造的)最合;credible(可信的)、factual(真實的)、objective(客觀的)皆與『捏造』矛盾。",
          "trap": "⚠ 須由後句 invented every detail 反推空格為負面『虛構』;credible 與 factual 是正面褒義,放進去與『捏造』前後矛盾,別只看到 account 就選『可信』。"
        },
        {
          "stem": "Despite repeated warnings, the factory continued to ___ the river with chemical waste.",
          "options": [
            "polluted",
            "pollution",
            "pollute",
            "pollutant"
          ],
          "answer": 2,
          "explanation": "continued to 之後接原形動詞,且後面有受詞 the river,須用動詞 pollute(污染);pollution(n.污染)、pollutant(n.污染物)為名詞不能接受詞。",
          "trap": "⚠ continued to 後須接原形動詞而非名詞;pollution/pollutant 雖語意相關卻是名詞,無法帶受詞 the river,須先看句構再選詞性。"
        },
        {
          "stem": "The two plans look similar, but on closer inspection, the ___ between them are huge.",
          "options": [
            "difference",
            "different",
            "differently",
            "differences"
          ],
          "answer": 3,
          "explanation": "the ___ between them are huge,動詞 are 為複數,主詞須用可數複數名詞 differences(差異);different 是形容詞、differently 是副詞皆不能當主詞。",
          "trap": "⚠ 動詞 are(複數)決定主詞須為複數名詞 differences,不是 difference(單數搭 is);別漏看 are 而選了單數形。"
        },
        {
          "stem": "After failing the exam three times, he was on the ___ of giving up his dream of becoming a doctor.",
          "options": [
            "edge",
            "verge",
            "side",
            "point"
          ],
          "answer": 1,
          "explanation": "片語 on the verge of + V-ing=瀕臨、即將;『瀕臨放棄夢想』語意最合;on the point of 雖也表即將,但慣用搭配為 on the verge of giving up。",
          "trap": "⚠ on the verge of 為固定搭配(瀕臨);on the edge 多指『邊緣/緊張』,on the side 是『附帶』,意思皆不符『即將放棄』。"
        },
        {
          "stem": "The medicine had a strong ___ effect, so the doctor told her not to drive after taking it.",
          "options": [
            "sleepy",
            "asleep",
            "sleep",
            "sleeping"
          ],
          "answer": 3,
          "explanation": "空格修飾名詞 effect,須用形容詞;sleeping 在此作分詞形容詞表『使人想睡的(令人嗜睡的)』;sleepy(感到睏的)修飾人,asleep 不能放名詞前,sleep 是名詞/動詞。",
          "trap": "⚠ asleep 為敘述性形容詞只能當補語,不能放在名詞 effect 前;sleepy 描述『人感到睏』而非『藥的作用』,此處修飾 effect 用 sleeping。"
        },
        {
          "stem": "Her boss kept ___ her work in front of others, which made her feel embarrassed and worthless.",
          "options": [
            "criticizing",
            "praising",
            "encouraging",
            "admiring"
          ],
          "answer": 0,
          "explanation": "後句『讓她感到難堪又無價值』為負面感受,故空格須為負面動作 criticizing(批評);praising/encouraging/admiring 皆正面,與後果矛盾。",
          "trap": "⚠ 由結果 embarrassed and worthless(負面)反推動作須為負面;praise(讚美)等正面詞會造成前後語意衝突,情境判讀是關鍵。"
        },
        {
          "stem": "The witness's two statements ___ each other, so the jury could not decide which one to believe.",
          "options": [
            "supported",
            "matched",
            "contradicted",
            "confirmed"
          ],
          "answer": 2,
          "explanation": "後句『陪審團無法決定該信哪一個』暗示兩份證詞互相矛盾,contradicted(與…矛盾)最合;support/match/confirm 皆表一致,與『無法決定信哪個』衝突。",
          "trap": "⚠ 關鍵在 could not decide which one to believe=兩說法衝突;support/match/confirm 表彼此一致,若一致就無須猶豫該信誰,故須選『矛盾』。"
        },
        {
          "stem": "The new manager is very ___; she lets her team make their own decisions instead of controlling every detail.",
          "options": [
            "strict",
            "flexible",
            "stubborn",
            "demanding"
          ],
          "answer": 1,
          "explanation": "後句『讓團隊自行決定而非掌控每個細節』描述開明有彈性的作風,flexible(有彈性的、開明的)最合;strict/stubborn/demanding 皆表嚴格固執,與『放手讓人決定』相反。",
          "trap": "⚠ 須由分號後的說明判斷:不控制細節、讓人自主=flexible;strict(嚴格)、demanding(要求高)、stubborn(固執)都與『放手』語意相反。"
        },
        {
          "stem": "It took the rescue team several hours to ___ the survivors from the collapsed building.",
          "options": [
            "rescue",
            "recover",
            "remove",
            "release"
          ],
          "answer": 0,
          "explanation": "rescue team 從倒塌建築中『救出』生還者,rescue(救援、救出)最合且常與 from 連用;release(釋放)、remove(移除)、recover(尋回/康復)語意皆不貼切。",
          "trap": "⚠ recover 雖可指『尋回』,但多用於物品或遺體;對『生還者(survivors)』從倒塌建築救出應用 rescue,須區分對象是活人還是物。"
        },
        {
          "stem": "The instructions were written in such ___ language that even experts had trouble understanding them.",
          "options": [
            "simple",
            "technical",
            "plain",
            "casual"
          ],
          "answer": 1,
          "explanation": "後句『連專家都難以理解』暗示語言艱深專業,technical(專業術語的)最合;plain/simple/casual 皆表淺白,與『連專家都看不懂』矛盾。",
          "trap": "⚠ such...that 結果子句『experts had trouble understanding』指內容艱深;plain/simple(簡單)放進去前後矛盾——若簡單,專家不會看不懂。"
        },
        {
          "stem": "He apologized so ___ that we could tell he truly regretted what he had done.",
          "options": [
            "sincerity",
            "sincere",
            "sincerely",
            "insincere"
          ],
          "answer": 2,
          "explanation": "空格修飾動詞 apologized(道歉的方式),且 so 後接副詞 sincerely(誠懇地);sincere 是形容詞、sincerity 是名詞、insincere 語意相反。",
          "trap": "⚠ so 後可接 adj. 或 adv.,須看修飾對象:此處修飾動詞 apologized,故用副詞 sincerely;若誤判成形容詞會選 sincere。"
        },
        {
          "stem": "The teacher reminded us that success ___ on hard work, not on luck.",
          "options": [
            "consists",
            "decides",
            "insists",
            "depends"
          ],
          "answer": 3,
          "explanation": "depend on=取決於、依靠;『成功取決於努力』語意最合且搭配 on;decide on 是『決定選擇』、insist on 是『堅持』、consist of 才合語法,皆語意不符。",
          "trap": "⚠ 四個動詞都常接介系詞,但只有 depend on 表『取決於』;insist on(堅持)、decide on(選定)、consist of(由…組成)意思全不同,須看語意搭配。"
        },
        {
          "stem": "The charity provides food and shelter for people who have nowhere else to ___.",
          "options": [
            "turn",
            "look",
            "go",
            "reach"
          ],
          "answer": 0,
          "explanation": "片語 have nowhere to turn=走投無路、求助無門;『沒有其他地方可求助的人』語意最合,turn 為固定用法。",
          "trap": "⚠ have nowhere to turn 是固定片語(求助無門);中文易想成『可去 go』,但英文慣用 turn 表『求助』,片語不可任意替換動詞。"
        },
        {
          "stem": "Although the test was difficult, she managed to answer every question ___.",
          "options": [
            "correct",
            "correctness",
            "correctly",
            "correction"
          ],
          "answer": 2,
          "explanation": "空格修飾動詞 answer(回答的方式),須用副詞 correctly(正確地);correct 是形容詞、correction/correctness 是名詞皆不能修飾動詞。",
          "trap": "⚠ 修飾『回答』這個動作用副詞 correctly;answer correct 是常見錯誤,因為動詞後修飾動作須用副詞而非形容詞。"
        },
        {
          "stem": "The price of the phone is far ___ what most students can afford, so few of them buy it.",
          "options": [
            "across",
            "above",
            "over",
            "beyond"
          ],
          "answer": 3,
          "explanation": "beyond what one can afford=超出能力負擔;『遠超過多數學生負擔得起的範圍』語意最合,beyond 表超出限度。",
          "trap": "⚠ beyond 表『超出(能力/範圍)』,與 afford 搭配最自然;above/over 多指數量或位置高於,放在 what... can afford 前不如 beyond 道地。"
        },
        {
          "stem": "The coach's encouraging words ___ the players' confidence right before the final match.",
          "options": [
            "reduced",
            "boosted",
            "doubted",
            "ignored"
          ],
          "answer": 1,
          "explanation": "encouraging words(鼓勵的話)的效果應是『提升』信心,boost(提升、增強)最合;reduce(減少)、doubt(懷疑)、ignore(忽略)皆與『鼓勵』的正面效果矛盾。",
          "trap": "⚠ 由主詞 encouraging words(鼓勵)推動作須為正面;reduce/doubt/ignore 是負面或中性,與『鼓勵能提升信心』的因果不符。"
        },
        {
          "stem": "Reading widely will ___ your vocabulary and help you express ideas more clearly.",
          "options": [
            "expand",
            "expense",
            "expand on",
            "expert"
          ],
          "answer": 0,
          "explanation": "expand=擴充、擴大;『大量閱讀會擴充字彙量』語意最合且直接接受詞 your vocabulary;expense 是名詞、expert 是名詞、expand on 是『詳述』語意不符。",
          "trap": "⚠ expand 直接接受詞表『擴充』;expand on 是『進一步闡述(某主題)』,接 vocabulary 語意不通,別被相似片語誤導。"
        },
        {
          "stem": "The shy student felt ___ when the teacher suddenly asked him to sing in front of the whole class.",
          "options": [
            "confident",
            "relaxed",
            "awkward",
            "delighted"
          ],
          "answer": 2,
          "explanation": "由 shy student(害羞的學生)突然被叫到全班面前唱歌,合理感受是『尷尬不自在』,awkward(尷尬的)最合;confident/relaxed/delighted 皆與害羞者的處境不符。",
          "trap": "⚠ 須結合人物特質(shy)與情境(突然被叫上台)判斷情緒;對害羞的人而言此情境是難堪,故 awkward,而非 confident/delighted 等正面詞。"
        },
        {
          "stem": "The government set up a fund to ___ families who lost their homes in the earthquake.",
          "options": [
            "consist",
            "resist",
            "insist",
            "assist"
          ],
          "answer": 3,
          "explanation": "assist=援助、幫助;『援助地震中失去家園的家庭』語意最合;resist(抵抗)、insist(堅持)、consist(構成,須接 of)皆語意不符且不接此受詞。",
          "trap": "⚠ assist/resist/insist/consist 四字字尾相同極易混淆;設立基金的目的是『幫助』受災家庭,故 assist,別只憑字形眼熟亂選。"
        },
        {
          "stem": "She remained ___ throughout the crisis, calmly giving orders while everyone else panicked.",
          "options": [
            "nervous",
            "composed",
            "confused",
            "frightened"
          ],
          "answer": 1,
          "explanation": "後句『冷靜下達命令、而其他人都慌亂』提示她保持鎮定,composed(鎮定的、沉著的)最合;nervous/confused/frightened 皆與『冷靜下令』矛盾。",
          "trap": "⚠ 由對比 while everyone else panicked(別人慌亂)反推她是『鎮定 composed』;若選 nervous/frightened 便與後句 calmly giving orders 自相矛盾。"
        },
        {
          "stem": "The novel was so ___ that I couldn't put it down until I had read the very last page.",
          "options": [
            "bored",
            "boring",
            "gripping",
            "tiring"
          ],
          "answer": 2,
          "explanation": "後句『放不下手直到讀完最後一頁』表小說極引人入勝,gripping(扣人心弦的)最合;boring/tiring 是負面,bored 形容人感到無聊,皆不符。",
          "trap": "⚠ couldn't put it down 是『欲罷不能』的線索,須選正面 gripping;boring(令人厭煩)與 bored(感到無聊)方向相反,且 bored 修飾人不修飾 novel。"
        },
        {
          "stem": "The scientists made an important ________ when they found a new kind of insect deep in the forest.",
          "options": [
            "discovery",
            "discover",
            "discovered",
            "discovering"
          ],
          "answer": 0,
          "explanation": "空格前有形容詞 important 修飾,且前面是冠詞 an,所以需要一個「名詞」當受詞。表示「發現(這件事/成果)」的名詞是 discovery。原形動詞、過去式與現在分詞都不能直接接在冠詞與形容詞之後當名詞用。"
        },
        {
          "stem": "My grandmother is very ________; she always shares her food with the neighbors and helps anyone in need.",
          "options": [
            "generous",
            "generously",
            "generosity",
            "generate"
          ],
          "answer": 0,
          "explanation": "be 動詞 is 後面接主詞補語,用來描述主詞的性質,應使用「形容詞」。generous(慷慨的)為形容詞;副詞用來修飾動詞、名詞是抽象概念、而 generate 是動詞,都不能填在 be 動詞後當補語描述人。"
        },
        {
          "stem": "Although the movie got bad reviews, the ending was so ________ that the whole audience cried.",
          "options": [
            "move",
            "movement",
            "touching",
            "touch"
          ],
          "answer": 2,
          "explanation": "be 動詞 was 之後需要形容詞當補語來形容 ending(結局)。touching 意為「感人的」,是形容詞,語意上也符合觀眾落淚的情境。其餘選項分別是動詞「移動」、名詞「運動/動作」、以及動詞或名詞「觸碰」,都無法在此當形容詞描述結局。",
          "trap": "touching 是由動詞加 -ing 變來的形容詞,容易被誤認為只是進行式動詞;此處需要的是「感人的」這個形容詞意思。"
        },
        {
          "stem": "The new student speaks English so ________ that our teacher thought she grew up in Canada.",
          "options": [
            "fluently",
            "fluent",
            "fluency",
            "fluid"
          ],
          "answer": 0,
          "explanation": "空格要修飾動詞 speaks(說),說明「說得多流利」,應使用「副詞」。fluently(流利地)是副詞。fluent 是形容詞、fluency 是名詞、fluid 意為流體或流暢的,詞性與語意都不符合修飾動詞的需求。",
          "trap": "so...that 句型中,so 後面接的是修飾動詞的副詞,不是形容詞;看到 speaks 是動詞就要選副詞,而非形容詞 fluent。"
        },
        {
          "stem": "Read the notice: \"Visitors must keep their bags with them at all times. The museum takes no ________ for lost items.\" Which word best completes the notice?",
          "options": [
            "direction",
            "responsibility",
            "attention",
            "difference"
          ],
          "answer": 1,
          "explanation": "由語境判斷:告示要求訪客隨身保管包包,並說博物館「不承擔」遺失物品的什麼。take responsibility for 是固定用法,意為「為……負責」,填入後語意完整——博物館對遺失物品不負責任。其餘選項與 take...for 搭配不成立,語意上也無法表達「負責」的概念。",
          "trap": "本題須同時考慮 take + 名詞 的搭配詞與整段告示語境;take direction/attention/difference 都不是表達「負責」的正確搭配,只有 responsibility 能與 take...for 構成「負責」。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">字首 + 字根 + 字尾 拆解</text><rect x=\"30\" y=\"60\" width=\"60\" height=\"40\" rx=\"4\" fill=\"#c9755c\" opacity=\"0.85\"/><text x=\"60\" y=\"84\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"12\">un-</text><rect x=\"90\" y=\"60\" width=\"90\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"135\" y=\"84\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"12\">help</text><rect x=\"180\" y=\"60\" width=\"70\" height=\"40\" rx=\"4\" fill=\"#5aa874\" opacity=\"0.85\"/><text x=\"215\" y=\"84\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"12\">-ful</text><text x=\"60\" y=\"118\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">字首 否定</text><text x=\"135\" y=\"118\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">字根 語意</text><text x=\"215\" y=\"118\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">字尾 詞性</text><text x=\"160\" y=\"150\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"12\">unhelpful = 沒有幫助的</text><text x=\"160\" y=\"170\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">im- 用於 m/p/b 開頭, in- 用於其他</text></svg>",
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
          "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"200\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\">字尾改變詞性 (字根 care 不變)</text><rect x=\"160\" y=\"40\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"200\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">care</text><line x1=\"200\" y1=\"70\" x2=\"80\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"1\"/><line x1=\"200\" y1=\"70\" x2=\"200\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"1\"/><line x1=\"200\" y1=\"70\" x2=\"320\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"1\"/><rect x=\"30\" y=\"96\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">careful</text><text x=\"80\" y=\"129\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#5aa874\">-ful 形容詞</text><rect x=\"150\" y=\"96\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"200\" y=\"113\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">carefully</text><text x=\"200\" y=\"129\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#c9755c\">-ly 副詞</text><rect x=\"270\" y=\"96\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#f0a52e\"/><text x=\"320\" y=\"113\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">careless</text><text x=\"320\" y=\"129\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#f0a52e\">-less 否定形</text><text x=\"200\" y=\"165\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">看空格『修飾誰』選字尾:名詞前用 -ful,</text><text x=\"200\" y=\"184\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">動詞後用 -ly</text></svg>",
          "caption": "同一字根加不同字尾即改變詞性與語意"
        },
        {
          "h": "名詞字尾:表『人』的 -er / -or / -ist",
          "points": [
            "在動詞後加 -er 或 -or 常表『做這件事的人』:teach→teacher(老師)、sing→singer(歌手)、act→actor(演員)、visit→visitor(訪客)。",
            "字尾 -ist 多表『專精某領域的人』:art→artist(藝術家)、science→scientist(科學家)、piano→pianist(鋼琴家)。",
            "字尾 -ese、-an、-ish 常表『某國人或某語言』:Japan→Japanese、America→American、Britain→British。"
          ],
          "formula": "動詞 + er/or → 做某事的人；名詞 + ist → 某領域專家",
          "trap": "並非所有『人』都用同一字尾,要逐字記:不能把 scientist 寫成 scienter,也不能把 actor 寫成 acter;另外國籍字第一個字母要大寫,Japanese、American 都要大寫 J、A。"
        },
        {
          "h": "同一字根的詞性家族 word family",
          "points": [
            "同一個字根常衍生出名詞、動詞、形容詞、副詞一整組:decide(動詞,決定)→decision(名詞);care(名詞/動詞,關心)→careful(形容詞)→carefully(副詞)。",
            "會考填空常給你字根,要你依空格『需要的詞性』選對形式:beauty(名詞)→beautiful(形容詞)→beautifully(副詞),看修飾誰決定用哪個。",
            "記單字時連同整個字族一起記最有效,例如 success(名詞)、succeed(動詞)、successful(形容詞)、successfully(副詞)一次背齊。"
          ],
          "formula": "字根 + 不同字尾 → 改變詞性(n./v./adj./adv.)",
          "trap": "別把詞性放錯位置:succeed 是動詞、success 是名詞,不能說 a success person 或 He successed;要說 a successful person、He succeeded。先判斷空格要的詞性再選字尾。"
        },
        {
          "h": "複合字 compound words",
          "points": [
            "兩個字合起來組成新字叫複合字,常見的有名詞加名詞:classroom(教室)、homework(功課)、basketball(籃球)、weekend(週末)。",
            "也有形容詞加名詞構成的複合字,例如 blackboard(黑板);還有像 breakfast(早餐)、haircut(理髮)這類常見複合名詞。",
            "複合字的意思常可從兩個組成字推出來:rain 加 coat 等於 raincoat(雨衣)、tooth 加 brush 等於 toothbrush(牙刷)。"
          ],
          "formula": "字A + 字B → 新的複合字(意義可由兩字推出)",
          "trap": "複合名詞變複數時,是在整個字的字尾加 s,不是改中間那個字:多個牙刷是 toothbrushes 不是 teethbrush;另外 homework 是不可數名詞,不能加 s 說 homeworks。"
        }
      ],
      "quiz": [
        {
          "stem": "It is ___ to finish all the homework in one hour; there is just too much.",
          "options": [
            "possibility",
            "possible",
            "possibly",
            "impossible"
          ],
          "answer": 3,
          "explanation": "由 too much 可知做不完,需否定形容詞 impossible;be 動詞 is 後接形容詞。",
          "trap": "後句 too much 是語意關鍵,提示『不可能』;possibly 是副詞、possibility 是名詞都不能接在 is 後當補語。"
        },
        {
          "stem": "The teacher asked us to ___ the new words before class.",
          "options": [
            "preview",
            "review",
            "view",
            "viewer"
          ],
          "answer": 0,
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
            "willingness",
            "willing",
            "willingly"
          ],
          "answer": 1,
          "explanation": "所有格 His 後需名詞當主詞;字尾 -ness 把形容詞 willing 變名詞 willingness(樂意),made/showed 為動詞。",
          "trap": "⚠ His 之後必接名詞,willing(adj.)/willingly(adv.)皆不可當主詞;will 雖是名詞但意為『意志/遺囑』語意不通,-ness 構出的 willingness 才正確。"
        },
        {
          "stem": "The witnesses gave ___ accounts of the crash, so the judge had no idea which version was true.",
          "options": [
            "contradict",
            "contradiction",
            "contradictory",
            "contradicted"
          ],
          "answer": 2,
          "explanation": "空格修飾名詞 accounts,需形容詞;『法官不知哪個版本為真』表示說法『互相矛盾的』,動詞 contradict 加 -ory 變形容詞 contradictory。",
          "trap": "⚠ contradict 是動詞、contradiction 是名詞皆不能修飾名詞 accounts;陷阱在 -ory 是不常見的形容詞字尾,別只挑眼熟的名詞 contradiction。"
        },
        {
          "stem": "Although the new intern looked nervous, she handled the crisis with surprising ___, calming everyone down.",
          "options": [
            "maturity",
            "maturely",
            "matured",
            "mature"
          ],
          "answer": 0,
          "explanation": "介系詞 with + surprising(形容詞)後需名詞;mature 加 -ity 變抽象名詞 maturity(成熟),with maturity = 成熟地。",
          "trap": "⚠ 介系詞片語 with + 形容詞 + 名詞;mature(adj.)/maturely(adv.)/matured(過去分詞)皆不能當 with 的受詞;-ity 名詞字尾才正確。"
        },
        {
          "stem": "The medicine works fast, but it should be used with care because of its possible ___ effects on the heart.",
          "options": [
            "harm",
            "harmless",
            "harmfully",
            "harmful"
          ],
          "answer": 3,
          "explanation": "空格與 possible 並列修飾名詞 effects,需形容詞;『須小心使用、可能對心臟…』表示『有害的』,harm + -ful = harmful。",
          "trap": "⚠ harmless(無害的)與『須小心使用』語意矛盾;harm 是名/動詞、harmfully 是副詞皆不能修飾名詞 effects;判讀 with care 指向 -ful。"
        },
        {
          "stem": "The country's economy began to ___ after the new trade policy opened more markets to local farmers.",
          "options": [
            "wide",
            "widen",
            "widely",
            "width"
          ],
          "answer": 1,
          "explanation": "助動詞片語 began to 後需原形動詞;形容詞 wide 加 -en 變動詞 widen(使變寬/擴大),此處指市場擴大。",
          "trap": "⚠ wide(adj.)/widely(adv.)/width(n.)皆非動詞;to 後須接原形動詞,-en 把形容詞變動詞是關鍵,別誤填副詞 widely。"
        },
        {
          "stem": "Her explanation was so ___ that even after listening twice, the students still asked many questions.",
          "options": [
            "unclear",
            "clarify",
            "clear",
            "clarity"
          ],
          "answer": 0,
          "explanation": "be 動詞 was 後接形容詞作補語;『聽兩次仍問很多問題』表示說明『不清楚的』,un- + clear = unclear。",
          "trap": "⚠ 反向判讀:students still asked many questions 暗示『不清楚』而非清楚;clear 語意相反、clarify 是動詞、clarity 是名詞皆不符。"
        },
        {
          "stem": "Scientists warn that some species may soon ___ if their forest homes keep being cut down at this speed.",
          "options": [
            "appear",
            "appearance",
            "disappear",
            "reappear"
          ],
          "answer": 2,
          "explanation": "助動詞 may 後需原形動詞;『森林被砍光、物種…』表示『消失』,dis-(否定/離開)+ appear = disappear(消失/絕跡)。",
          "trap": "⚠ reappear 是『再次出現』、appear 是『出現』語意相反;破壞情境 forest homes cut down 指向消失;appearance 是名詞不能接在 may 後。"
        },
        {
          "stem": "The manager praised the new system for its ___; it almost never broke down even under heavy use.",
          "options": [
            "depend",
            "dependable",
            "dependence",
            "dependability"
          ],
          "answer": 3,
          "explanation": "所有格 its 後需名詞;『幾乎不故障』表示系統『可靠度』,depend → dependable(adj.)→ 再加 -ity 變 dependability(可靠性)。",
          "trap": "⚠ its 後須接名詞,dependable 是形容詞、depend 是動詞皆不可;dependence 意為『依賴』語意不符,須用『可靠性』dependability,兩步驟構詞。"
        },
        {
          "stem": "The two designs are almost ___; only an expert can tell the tiny difference between them.",
          "options": [
            "ident",
            "identical",
            "identify",
            "identity"
          ],
          "answer": 1,
          "explanation": "be 動詞 are 後接形容詞作補語;『只有專家能分辨微小差異』表示兩者『幾乎一模一樣的』,identical(完全相同的)。",
          "trap": "⚠ identify 是動詞(辨認)、identity 是名詞(身分)皆不符;are 後須形容詞,almost 修飾形容詞 identical 才合理。"
        },
        {
          "stem": "The volunteers' ___ to help strangers after the earthquake moved the whole nation to tears.",
          "options": [
            "willing",
            "willingly",
            "unwilling",
            "willingness"
          ],
          "answer": 3,
          "explanation": "所有格 volunteers' 後需名詞當主詞;『願意幫陌生人、感動全國』表示『樂意』,willing + -ness = willingness。",
          "trap": "⚠ 所有格之後必接名詞,willing(adj.)/willingly(adv.)/unwilling(adj.)皆不可當主詞;情境為正面感人故非 un-,須用 willingness。"
        },
        {
          "stem": "Despite the heavy rain, the runners kept going ___, refusing to give up before the finish line.",
          "options": [
            "courageously",
            "courageous",
            "encourage",
            "courage"
          ],
          "answer": 0,
          "explanation": "空格修飾動詞 kept going(持續前進),需副詞;courageous 加 -ly 變 courageously(勇敢地),呼應 refusing to give up。",
          "trap": "⚠ 修飾動詞須用副詞;courage 是名詞、courageous 是形容詞、encourage 是動詞皆不能修飾 kept going,別誤填形容詞。"
        },
        {
          "stem": "The reporter's question was so ___ that the minister refused to answer and quickly left the room.",
          "options": [
            "sense",
            "sensitive",
            "sensible",
            "senseless"
          ],
          "answer": 1,
          "explanation": "be 動詞 was 後接形容詞;『部長拒答並離開』表示問題觸及『敏感的』議題,sense + -itive = sensitive(敏感的)。",
          "trap": "⚠ sensible 意為『明智的』、senseless 意為『無意義的』皆不符『拒答離開』的情境;同字根 sense 衍生多形容詞,須依語意選 sensitive。"
        },
        {
          "stem": "The old computer is now almost ___; no shop sells parts for it anymore.",
          "options": [
            "use",
            "useful",
            "useless",
            "usable"
          ],
          "answer": 2,
          "explanation": "be 動詞 is 後接形容詞;『再也買不到零件』表示電腦『沒用了、無用的』,use + -less = useless。",
          "trap": "⚠ useful(有用的)/usable(可用的)與『買不到零件』矛盾;use 是名/動詞;否定字尾 -less 才符合『派不上用場』之意。"
        },
        {
          "stem": "Good leaders must learn to ___ power to others instead of trying to do everything themselves.",
          "options": [
            "powerfully",
            "powerful",
            "empower",
            "power"
          ],
          "answer": 2,
          "explanation": "助動詞 must learn to 後需原形動詞;字首 en/em-(使…)+ power = empower(授權給…),呼應『把權力交給他人』。",
          "trap": "⚠ power 雖可當動詞但意為『供電』不符;powerful(adj.)/powerfully(adv.)皆非此處所需動詞;em- 用在 p 開頭(同 im- 規則),構出 empower。"
        },
        {
          "stem": "The bridge was built to be ___; engineers say it can stand strong for at least a hundred years.",
          "options": [
            "durably",
            "dure",
            "duration",
            "durable"
          ],
          "answer": 3,
          "explanation": "be 動詞 be 後接形容詞作補語;『能屹立至少百年』表示『耐用的、持久的』,字根 dur(持續)+ -able = durable。",
          "trap": "⚠ duration 是名詞(期間)、durably 是副詞皆不符;to be 後須形容詞;字根 dur 較少見,別因不熟而漏選 -able 形容詞。"
        },
        {
          "stem": "His remarks were completely ___ to the topic, so the chairperson asked him to stay on point.",
          "options": [
            "irrelevant",
            "relevantly",
            "relevance",
            "relevant"
          ],
          "answer": 0,
          "explanation": "be 動詞 were 後接形容詞;『主席請他切回正題』表示發言『離題、不相關的』,否定字首 ir- + relevant = irrelevant。",
          "trap": "⚠ relevant(相關的)語意相反;relevance 是名詞、relevantly 是副詞皆不符;否定字首在 r 開頭字前用 ir-(如 irregular),別誤拼 inrelevant。"
        },
        {
          "stem": "After months of training, the once shy boy spoke on stage with great ___ and won first prize.",
          "options": [
            "assured",
            "assurance",
            "assure",
            "assuredly"
          ],
          "answer": 1,
          "explanation": "介系詞 with + great(形容詞)後需名詞;assure 加 -ance 變名詞 assurance(自信、把握),with assurance = 有把握地。",
          "trap": "⚠ with + 形容詞 + 名詞;assure 是動詞、assured 是分詞/形容詞、assuredly 是副詞皆不能當 with 的受詞;名詞 assurance 才正確。"
        },
        {
          "stem": "The author's latest novel is highly ___; readers say they simply cannot put it down once they start.",
          "options": [
            "read",
            "reader",
            "readable",
            "reading"
          ],
          "answer": 2,
          "explanation": "be 動詞 is 後接形容詞(highly 為副詞修飾它);『一翻開就停不下來』表示小說『可讀性高、好讀的』,read + -able = readable。",
          "trap": "⚠ reader(讀者)/reading(閱讀)是名詞、read 是動詞皆不能接在 is highly 後當補語;副詞 highly 後須形容詞 readable。"
        },
        {
          "stem": "The committee found the evidence ___ and therefore dropped all charges against the suspect.",
          "options": [
            "convince",
            "convincing",
            "convinced",
            "unconvincing"
          ],
          "answer": 3,
          "explanation": "find + 受詞 + 形容詞(受詞補語);『因此撤銷所有指控』表示證據『沒有說服力的』,un- + convincing = unconvincing。",
          "trap": "⚠ convincing(有說服力的)會導致『起訴』而非『撤銷』,語意相反;判讀 dropped all charges 須加否定字首 un-;convinced 意為『被說服的』修飾人不合此處。"
        },
        {
          "stem": "Some chemicals in the lab are highly ___; one small spark could cause a huge explosion.",
          "options": [
            "flammable",
            "inflame",
            "flame",
            "flameless"
          ],
          "answer": 0,
          "explanation": "be 動詞 are 後接形容詞;『一點火花就爆炸』表示化學品『易燃的』,flame → flammable(易燃的)。",
          "trap": "⚠ flameless(無火焰的)語意相反;inflame 是動詞(使發炎/激怒)、flame 是名詞皆不符;易燃要用 -able 字尾的 flammable。"
        },
        {
          "stem": "The instructions were written so ___ that workers from many countries could follow them without help.",
          "options": [
            "simple",
            "simply",
            "simplify",
            "simplicity"
          ],
          "answer": 1,
          "explanation": "空格修飾動詞 written(被寫),需副詞;simple 去 e 加 -ly 變 simply(簡單地),呼應『各國工人都能照做』。",
          "trap": "⚠ 修飾過去分詞 written 的方式須用副詞 simply;simple 是形容詞、simplify 是動詞、simplicity 是名詞皆不能修飾動詞,別誤填形容詞。"
        },
        {
          "stem": "The young scientist's ___ in solving the puzzle amazed even the senior professors at the meeting.",
          "options": [
            "wisdom",
            "wisely",
            "wiseness",
            "wise"
          ],
          "answer": 0,
          "explanation": "所有格 scientist's 後需名詞當主詞;形容詞 wise 的名詞形不規則變化為 wisdom(智慧),『令資深教授驚嘆』。",
          "trap": "⚠ 所有格之後必接名詞;wise 是形容詞、wisely 是副詞皆不可當主詞;wise 的名詞並非加 -ness(無 wiseness 一字),而是不規則的 wisdom,易拼錯選錯。"
        },
        {
          "stem": "Someone who paints pictures for a living is called a ___.",
          "options": [
            "paint",
            "painting",
            "painted",
            "painter"
          ],
          "answer": 3,
          "explanation": "字尾 -er 加在動詞後面表示『做某動作的人』,paint(畫)+ er = painter(畫家/油漆工)。paint 是動詞『畫』;painting 是名詞『畫作、繪畫』;painted 是過去式,都無法表示『畫畫的人』。"
        },
        {
          "stem": "The instructions were not clear at all. In fact, they were quite ___.",
          "options": [
            "unclear",
            "disclear",
            "inclear",
            "nonclear"
          ],
          "answer": 0,
          "explanation": "字首 un- 表示否定『不』,clear(清楚的)加 un- 變成 unclear(不清楚的),符合『說明一點都不清楚』的語意。dis-、in-、non- 雖然也是否定字首,但 clear 慣用搭配的是 un-,英文裡並沒有 disclear、inclear、nonclear 這些字。",
          "trap": "看到『否定』就隨便挑一個否定字首;clear 只跟 un- 搭配,別誤選 in-/dis-/non-。"
        },
        {
          "stem": "There are many cars on this road. Be ___ when you cross it.",
          "options": [
            "care",
            "careful",
            "careless",
            "caring"
          ],
          "answer": 1,
          "explanation": "字尾 -ful 表示『充滿…的』,care(小心)加 -ful 變成 careful(小心的),過馬路當然要小心。-less 表示『沒有…的』,careless 是『粗心的』,意思正好相反;care 是名詞或動詞,不能直接接在 be 後面當形容詞;caring 是『有愛心的』,語意不合。",
          "trap": "careful 和 careless 只差字尾,意思卻完全相反(小心 vs 粗心),不要看到 care 就選。"
        },
        {
          "stem": "Thanks to the ___ of the new bridge, people can now travel between the two towns easily.",
          "options": [
            "construction",
            "constructive",
            "constructor",
            "constructing"
          ],
          "answer": 0,
          "explanation": "空格前有 the、後有 of,中間要填名詞。construct(建造)加字尾 -ion 變成名詞 construction(建造、工程),the construction of the new bridge 指『這座新橋的興建』。constructive 是形容詞『有建設性的』;constructor 指『建造者(人)』,語意不合;constructing 是動名詞,不與『the … of』這個結構慣用搭配。",
          "trap": "constructive 也由 construct 變來,但意思是『有建設性的』,不是『興建這件事』,別被同字根騙了。"
        },
        {
          "stem": "The city spent a lot of money to ___ the old railway system last year.",
          "options": [
            "modernize",
            "modernization",
            "modern",
            "modernized"
          ],
          "answer": 0,
          "explanation": "不定詞 to 後面要接原形動詞。字尾 -ize 表示『使…化』,modern(現代的)加 -ize 變成動詞 modernize(使現代化),to modernize the system 指『把系統現代化』。modernization 是名詞『現代化』;modern 是形容詞;modernized 是過去式/過去分詞,三者都不能直接接在 to 後面當原形動詞。",
          "trap": "modernization 看起來很正式像答案,但 to 後面必須用原形動詞 modernize,不是名詞。"
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
          "svg": "<svg viewBox=\"0 0 360 220\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"16\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\" font-weight=\"bold\">現在簡單式 vs 現在進行式</text><rect x=\"10\" y=\"30\" width=\"66\" height=\"66\" rx=\"6\" fill=\"#5aa874\"/><text x=\"43\" y=\"57\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\">簡單式</text><text x=\"43\" y=\"73\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\">習慣</text><text x=\"43\" y=\"89\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"9\">．事實</text><line x1=\"86\" y1=\"63\" x2=\"330\" y2=\"63\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><polygon points=\"336,63 328,59 328,67\" fill=\"#3a342e\"/><circle cx=\"110\" cy=\"63\" r=\"4.5\" fill=\"#5aa874\"/><circle cx=\"150\" cy=\"63\" r=\"4.5\" fill=\"#5aa874\"/><circle cx=\"190\" cy=\"63\" r=\"4.5\" fill=\"#5aa874\"/><circle cx=\"230\" cy=\"63\" r=\"4.5\" fill=\"#5aa874\"/><circle cx=\"270\" cy=\"63\" r=\"4.5\" fill=\"#5aa874\"/><circle cx=\"310\" cy=\"63\" r=\"4.5\" fill=\"#5aa874\"/><text x=\"205\" y=\"46\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">每天重複發生</text><text x=\"205\" y=\"88\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">I go to school every day.</text><rect x=\"10\" y=\"118\" width=\"66\" height=\"66\" rx=\"6\" fill=\"#c9755c\"/><text x=\"43\" y=\"145\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\">進行式</text><text x=\"43\" y=\"161\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\">此刻</text><text x=\"43\" y=\"177\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"9\">正進行</text><line x1=\"86\" y1=\"151\" x2=\"330\" y2=\"151\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><polygon points=\"336,151 328,147 328,155\" fill=\"#3a342e\"/><circle cx=\"205\" cy=\"151\" r=\"8\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><circle cx=\"205\" cy=\"151\" r=\"4.5\" fill=\"#c9755c\"/><text x=\"205\" y=\"136\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">now / Look!</text><text x=\"205\" y=\"176\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">I am going now.</text><rect x=\"10\" y=\"196\" width=\"340\" height=\"18\" rx=\"9\" fill=\"#f3e7df\"/><text x=\"180\" y=\"209\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">頻率副詞 always / usually / often → 配簡單式</text></svg>",
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
          "svg": "<svg viewBox=\"0 0 400 200\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"200\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\">完成式的時間參照</text><line x1=\"30\" y1=\"150\" x2=\"380\" y2=\"150\" stroke=\"#3a342e\" stroke-width=\"2\"/><polygon points=\"380,150 372,146 372,154\" fill=\"#3a342e\"/><line x1=\"120\" y1=\"143\" x2=\"120\" y2=\"157\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"120\" y=\"172\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#3a342e\">過去某點</text><line x1=\"300\" y1=\"143\" x2=\"300\" y2=\"157\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"300\" y=\"172\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#c9755c\">現在 now</text><path d=\"M55 110 L115 110\" stroke=\"#5aa874\" stroke-width=\"6\"/><polygon points=\"117,110 109,106 109,114\" fill=\"#5aa874\"/><text x=\"85\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#5aa874\">had + p.p.</text><text x=\"85\" y=\"128\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#3a342e\">更早完成</text><path d=\"M150 80 L295 80\" stroke=\"#c9755c\" stroke-width=\"6\"/><polygon points=\"297,80 289,76 289,84\" fill=\"#c9755c\"/><text x=\"222\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#c9755c\">have/has + p.p.</text><text x=\"222\" y=\"98\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#3a342e\">延續到現在 (for/since)</text></svg>",
          "caption": "過去完成是過去的過去,現在完成則延續到此刻"
        },
        {
          "h": "過去式 vs 過去進行式 past simple vs past continuous",
          "points": [
            "過去簡單式表過去『已結束』的動作或習慣:I watched TV last night(昨晚看了電視,已結束)。",
            "過去進行式 was/were + Ving 表過去某時刻『正在進行』的動作:At eight last night, I was watching TV。",
            "常用『過去進行式 + when + 過去簡單式』表一個長動作進行中、被另一個短動作打斷:I was cooking when the phone rang(我正在煮飯時電話響了)。"
          ],
          "formula": "S + was/were + Ving … when + S + 過去式",
          "trap": "短暫、瞬間的動作(電話響、有人進來)用過去簡單式 rang、came,長時間的背景動作才用過去進行式 was cooking;別顛倒成 The phone was ringing when I cooked。"
        },
        {
          "h": "現在完成式 vs 過去簡單式 present perfect vs past simple",
          "points": [
            "現在完成式不可搭配明確的過去時間點:錯 I have seen him yesterday,對 I saw him yesterday。",
            "句中有 yesterday、last week、in 2020、ago 等『確定的過去時間』時,一律用過去簡單式。",
            "現在完成式用於『不點明何時、強調對現在的影響或經驗』:I have already finished my homework(已做完,現在輕鬆了)。"
          ],
          "formula": "have/has + p.p.(不接過去時間點) / 過去式 + yesterday、ago…",
          "trap": "最常見的錯誤是 have + 過去時間點,例如 I have lost my key yesterday;有 yesterday 就要改成 I lost my key yesterday。"
        },
        {
          "h": "未來:will vs be going to 的差別",
          "points": [
            "will 多用於『說話當下的臨時決定』或單純預測:OK, I will help you(臨時決定幫你)。",
            "be going to 用於『事先已有的計畫或打算』:I am going to visit Japan next month(早就計畫好)。",
            "看到明顯徵兆、推測即將發生時,英語慣用 be going to:Look at the dark clouds! It is going to rain。"
          ],
          "formula": "S + will + 原形 V / S + be going to + 原形 V",
          "trap": "已規劃好的事不要用 will:已計畫好要去拜訪阿姨,宜說 I am going to visit my aunt this weekend;另外 will 後直接接原形,別寫成 will to go 或 will going。"
        }
      ],
      "quiz": [
        {
          "stem": "By the time we got to the theater, the movie ___.",
          "options": [
            "already started",
            "has already started",
            "is already starting",
            "had already started"
          ],
          "answer": 3,
          "explanation": "By the time + 過去動作 (got),比它更早發生的事用過去完成式 had + p.p.,故 had already started。",
          "trap": "看到 By the time + 過去式,前面更早的事要用『過去完成式 had』,不是現在完成式 has。"
        },
        {
          "stem": "Tom ___ in Tainan for ten years, and he still lives there now.",
          "options": [
            "lived",
            "is living",
            "has lived",
            "lives"
          ],
          "answer": 2,
          "explanation": "for ten years 且 still lives there now,表從過去持續到現在,用現在完成式 has lived。",
          "trap": "still…now 表動作持續到現在,須用現在完成式;lived(過去式)會暗示『現在已不住那裡』,與句意矛盾。"
        },
        {
          "stem": "Listen! Someone ___ the piano in the next room.",
          "options": [
            "is playing",
            "played",
            "plays",
            "has played"
          ],
          "answer": 0,
          "explanation": "Listen! 表此刻正在發生,用現在進行式 is playing。",
          "trap": "Listen!/Look! 是進行式的強烈訊號;plays(簡單式)用於習慣,別忽略句首的祈使語氣線索。"
        },
        {
          "stem": "She ___ English for five years before she moved abroad and started using it every day.",
          "options": [
            "had studied",
            "has studied",
            "is studying",
            "studies"
          ],
          "answer": 0,
          "explanation": "before she moved(過去)為基準點,比它更早且持續到那之前的動作用過去完成式 had studied。",
          "trap": "⚠ before + 過去式(moved)指出一個過去時間點,『在那之前』已學了五年要用過去完成 had studied,不是現在完成 has studied(那會延續到現在,與已出國矛盾)。"
        },
        {
          "stem": "Hardly ___ the bus when it began to pour with rain.",
          "options": [
            "did I get off",
            "I had gotten off",
            "had I gotten off",
            "I have gotten off"
          ],
          "answer": 2,
          "explanation": "Hardly...when 句型表『一...就...』,Hardly 置句首須倒裝,且主句用過去完成式,故 had I gotten off。",
          "trap": "⚠ 否定副詞 Hardly 置句首必須倒裝(助動詞提前),且 Hardly...when 搭配過去完成 had + p.p.;不可寫成 I had(未倒裝)或 did I get(時態錯)。"
        },
        {
          "stem": "No sooner ___ the door than the phone rang loudly.",
          "options": [
            "I had closed",
            "I closed",
            "have I closed",
            "had I closed"
          ],
          "answer": 3,
          "explanation": "No sooner...than 與 Hardly...when 同義,置句首倒裝且用過去完成式,故 had I closed。",
          "trap": "⚠ No sooner 後接 than(不是 when),且句首倒裝用過去完成 had I closed;常見錯誤是不倒裝(I had)或誤用 when。"
        },
        {
          "stem": "If I ___ about the traffic jam earlier, I would have taken another route.",
          "options": [
            "knew",
            "had known",
            "have known",
            "would know"
          ],
          "answer": 1,
          "explanation": "主句為 would have taken(與過去事實相反),屬第三類條件句,If 子句用過去完成式 had known。",
          "trap": "⚠ 主句 would have + p.p. 是與『過去』事實相反,if 子句必須用過去完成 had known;knew(過去式)是與現在相反的第二類條件句,時態不對稱。"
        },
        {
          "stem": "It's high time we ___ home; it's almost midnight.",
          "options": [
            "will go",
            "go",
            "went",
            "have gone"
          ],
          "answer": 2,
          "explanation": "It's (high) time + 主詞 + 過去式,表『早該做某事卻還沒做』,故 went(假設語氣過去式)。",
          "trap": "⚠ It's high time (that) 子句用過去式表現在該做之事(虛擬),不是真的過去;go(原形)或 will go(未來)都不符此固定句型。"
        },
        {
          "stem": "The new bridge ___ for two years, and engineers say it won't open until next spring.",
          "options": [
            "is building",
            "has been built",
            "has built",
            "has been being built"
          ],
          "answer": 3,
          "explanation": "橋是被建造(被動),且『持續兩年仍在進行』,用現在完成進行被動 has been being built。",
          "trap": "⚠ 橋無法自己建造,須用被動;又因動作持續且未完成(尚未開通),用現在完成進行被動 has been being built;has been built(完成被動)會暗示已蓋好。"
        },
        {
          "stem": "Every time I visit Grandma, she ___ me a bowl of hot soup before I even sit down.",
          "options": [
            "brings",
            "is bringing",
            "has brought",
            "brought"
          ],
          "answer": 0,
          "explanation": "Every time 引導反覆發生的習慣性事件,主句用現在簡單式 brings。",
          "trap": "⚠ Every time / Whenever 表反覆習慣,主句用現在簡單式 brings;雖句中有 before 子句,但全句描述每次都發生的常態,非單一進行中的動作。"
        },
        {
          "stem": "She speaks as if she ___ the whole story, but actually she knows nothing about it.",
          "options": [
            "knows",
            "knew",
            "has known",
            "will know"
          ],
          "answer": 1,
          "explanation": "as if + 與現在事實相反,用過去式 knew(假設語氣),故 knew。",
          "trap": "⚠ as if/as though 表與現在事實相反時,子句用過去式 knew(虛擬);句尾 actually she knows nothing 證實是相反的假設,不可用 knows。"
        },
        {
          "stem": "Look at the chart: the company's sales ___ steadily since 2020 and reached a record high last month.",
          "options": [
            "rise",
            "are rising",
            "have risen",
            "had risen"
          ],
          "answer": 2,
          "explanation": "since 2020 表從過去持續到現在的趨勢,圖表數據累積至今,用現在完成式 have risen(sales 為複數)。",
          "trap": "⚠ since + 過去起點延續到現在用現在完成 have risen;reached last month 只是過程中的一點,不改變整體『自2020起至今』的現在完成框架;had risen(過去完成)缺過去基準點。"
        },
        {
          "stem": "I would rather you ___ so loudly while everyone else is trying to concentrate.",
          "options": [
            "didn't talk",
            "don't talk",
            "won't talk",
            "haven't talked"
          ],
          "answer": 0,
          "explanation": "would rather + 主詞 + 過去式,表對現在或未來的期望(虛擬),故 didn't talk。",
          "trap": "⚠ would rather (that) + 另一主詞時,子句用過去式 didn't talk 表現在虛擬,非過去事實;don't talk(原形/現在式)不符此句型結構。"
        },
        {
          "stem": "By the end of this year, I ___ at this company for a decade.",
          "options": [
            "will work",
            "will be working",
            "have worked",
            "will have been working"
          ],
          "answer": 3,
          "explanation": "By the end of this year(未來時點)+『持續一段時間 for a decade』強調延續,用未來完成進行式 will have been working。",
          "trap": "⚠ 『到未來某時點為止已持續多久』用未來完成進行 will have been working,強調持續過程;will have worked(未來完成)只表完成不強調延續,for a decade 是線索。"
        },
        {
          "stem": "The witness insisted that the suspect ___ the building before midnight, hours before the fire started.",
          "options": [
            "left",
            "had left",
            "leaves",
            "has left"
          ],
          "answer": 1,
          "explanation": "主句 insisted(過去),且『離開』比『火災發生』更早,用過去完成式 had left。",
          "trap": "⚠ 兩過去事件有先後,較早者(離開)用過去完成 had left;主句 insisted 為過去,間接陳述中更早動作降為過去完成,不是過去簡單 left。"
        },
        {
          "stem": "Neither the players nor the coach ___ satisfied with the referee's final decision yesterday.",
          "options": [
            "were",
            "was",
            "have been",
            "is"
          ],
          "answer": 1,
          "explanation": "Neither A nor B 動詞與最近的主詞 the coach(單數)一致,且 yesterday 為過去,故 was。",
          "trap": "⚠ Neither...nor 採『就近原則』,動詞配最近的 the coach(單數)用 was;別被前面複數 players 誤導用 were;yesterday 排除現在完成 have been。"
        },
        {
          "stem": "When you ___ this recording, I will already be on a plane heading to London.",
          "options": [
            "are hearing",
            "will hear",
            "heard",
            "hear"
          ],
          "answer": 3,
          "explanation": "When 引導的時間副詞子句中,表未來的動作用現在簡單式代替未來式,故 hear;主句才用未來。",
          "trap": "⚠ 時間連接詞 when 引導的子句即使指未來也用現在簡單式 hear,不可用 will;主句 I will already be 才表未來,別把 will 放進子句。"
        },
        {
          "stem": "The earth ___ around the sun, a fact that ancient sailors used to rely on at sea.",
          "options": [
            "moves",
            "moved",
            "is moving",
            "has moved"
          ],
          "answer": 0,
          "explanation": "天體運行為不變的科學真理,恆用現在簡單式 moves;後半 used to 不影響主句的真理時態。",
          "trap": "⚠ 不變真理(地球繞太陽)永遠用現在簡單式 moves,即使句中提到過去(ancient sailors used to);is moving(進行式)不適用於普遍恆常事實。"
        },
        {
          "stem": "Five years ___ a long time to wait, but the result finally proved worth it.",
          "options": [
            "are",
            "is",
            "were",
            "have been"
          ],
          "answer": 1,
          "explanation": "表時間/金額/距離的複數名詞當『一個整體單位』時視為單數,動詞用 is。",
          "trap": "⚠ Five years 在此指『五年這段時間』作單一整體,動詞用單數 is;雖形式為複數,但作量度單位時不用 are;proved 為過去不影響主句此處的判斷句結構。"
        },
        {
          "stem": "Not until she got home ___ that she had left her umbrella on the train.",
          "options": [
            "she realized",
            "she had realized",
            "did she realize",
            "had she realized"
          ],
          "answer": 2,
          "explanation": "Not until 置句首,主句須倒裝;『回到家才意識到』為過去,故倒裝助動詞用 did she realize。",
          "trap": "⚠ Not until 置句首時主句倒裝(did + 主詞 + 原形),時態看『回到家』那一刻為過去簡單,故 did she realize;不可用未倒裝的 she realized,had left 已交代更早動作。"
        },
        {
          "stem": "This is one of the best novels that ___ ever been written about wartime friendship.",
          "options": [
            "has",
            "is",
            "have",
            "had"
          ],
          "answer": 2,
          "explanation": "one of the + 複數名詞 + that 子句,關係子句動詞與複數先行詞 novels 一致,用現在完成 have been written 的助動詞 have。",
          "trap": "⚠ 『one of the + 複數N + that』的關係子句動詞配複數 novels 用 have,非配 one 用 has;『至今寫過』用現在完成,故 have been。"
        },
        {
          "stem": "While the committee ___ the proposal, a fire alarm went off and everyone rushed out.",
          "options": [
            "has discussed",
            "discussed",
            "had discussed",
            "was discussing"
          ],
          "answer": 3,
          "explanation": "went off(突發短動作)發生時,委員會『正在』討論(背景持續動作),用過去進行式 was discussing(committee 視為單數整體)。",
          "trap": "⚠ While + 過去進行作背景,被突發的 went off 打斷;committee 此處當整體單數配 was;discussed(過去簡單)無法表『正在進行時被打斷』。"
        },
        {
          "stem": "By the time the next bus comes, we ___ here for nearly forty minutes.",
          "options": [
            "will have been waiting",
            "are waiting",
            "will wait",
            "have waited"
          ],
          "answer": 0,
          "explanation": "By the time + 現在式(comes 表未來)+ 強調持續時間 for nearly forty minutes,主句用未來完成進行式 will have been waiting。",
          "trap": "⚠ By the time 子句用現在式 comes 代未來;主句『到那時已持續等多久』用未來完成進行 will have been waiting;have waited(現在完成)無法表未來時點前的持續。"
        },
        {
          "stem": "The manager required that every report ___ submitted before the Friday deadline.",
          "options": [
            "is",
            "be",
            "was",
            "will be"
          ],
          "answer": 1,
          "explanation": "require / suggest / demand / insist 等要求類動詞後的 that 子句用『(should) + 原形』的假設語氣,故 be submitted。",
          "trap": "⚠ require that 子句用假設語氣原形動詞 be(should 省略),不隨主句變過去;is/was/will be 都違反此要求類動詞的虛擬規則。"
        },
        {
          "stem": "Look at this graph — by 2050, the world's population ___ around ten billion, experts predict.",
          "options": [
            "reaches",
            "is reaching",
            "reached",
            "will reach"
          ],
          "answer": 3,
          "explanation": "by 2050 為未來時點,搭配 predict 對未來的單純預測結果,用未來式 will reach。",
          "trap": "⚠ 此處強調『達到某數值』的單一未來預測,用 will reach;雖有 by 2050,但句意是『將達到』而非『在那之前已完成』,故非未來完成 will have reached;reaches(簡單式)不表此單一未來預測。"
        },
        {
          "stem": "My grandmother ___ a cup of tea every morning before she leaves for work.",
          "options": [
            "is drinking",
            "drank",
            "drinks",
            "has drunk"
          ],
          "answer": 2,
          "explanation": "every morning 表『習慣性、反覆發生』的動作,用現在簡單式,主詞為第三人稱單數故動詞加 -s,寫成 drinks。"
        },
        {
          "stem": "I ___ this novel yet, so please don't spoil the ending for me.",
          "options": [
            "didn't finish",
            "don't finish",
            "haven't finished",
            "hadn't finished"
          ],
          "answer": 2,
          "explanation": "yet(還沒)強調『到目前為止尚未完成、且與現在有關』,用現在完成式的否定 have/has + 過去分詞,故為 haven't finished。",
          "trap": "⚠ yet 是現在完成式的訊號,不可用過去簡單式的 didn't finish;過去完成式的 hadn't finished 需要另一個明確的過去基準點,本句沒有,故不適用。"
        },
        {
          "stem": "By this time next summer, Sophia ___ from college and found her first full-time job.",
          "options": [
            "will have graduated",
            "will graduate",
            "graduates",
            "has graduated"
          ],
          "answer": 0,
          "explanation": "By this time next summer 指向未來的某個時間點,表『到那個未來時間之前就已完成』的動作,用未來完成式 will have + 過去分詞,故為 will have graduated。",
          "trap": "⚠『by + 未來時間點』要用未來完成式 will have graduated,不是單純未來式 will graduate(那只表未來會發生、未強調在該點前已完成);現在完成式 has graduated 與未來時間點互相矛盾。"
        },
        {
          "stem": "While Grandpa ___ the plants in the garden, a sudden rain started to fall.",
          "options": [
            "watered",
            "was watering",
            "waters",
            "has watered"
          ],
          "answer": 1,
          "explanation": "While 引導的是『過去正在進行的長動作』,被後面突然發生的短動作(rain started)打斷,持續進行的背景動作用過去進行式 was watering。",
          "trap": "⚠ 背景中持續進行的長動作用過去進行式 was watering,突發的短動作(started)才用過去簡單式;整句時間定調為過去,故不可用現在進行式 waters 或現在完成式。"
        },
        {
          "stem": "Not only ___ the first prize, but she also broke the school record that day.",
          "options": [
            "she won",
            "did she won",
            "did she win",
            "she has won"
          ],
          "answer": 2,
          "explanation": "否定詞組 Not only 置於句首時,主句必須倒裝為『助動詞 + 主詞 + 原形動詞』;事情發生在 that day(過去),借助 did 後主要動詞回原形,故為 did she win。",
          "trap": "⚠ Not only 置句首要倒裝並借助 did,主要動詞須回原形 win,不可寫成 did she won(重複過去)或未倒裝的 she won;that day 定調過去,故排除現在完成式。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">可數 vs 不可數</text><line x1=\"160\" y1=\"32\" x2=\"160\" y2=\"170\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"80\" y=\"48\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"12\">可數 C</text><text x=\"240\" y=\"48\" text-anchor=\"middle\" fill=\"#5aa874\" font-size=\"12\">不可數 U</text><rect x=\"30\" y=\"60\" width=\"100\" height=\"26\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"80\" y=\"77\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">a book / books</text><rect x=\"190\" y=\"60\" width=\"100\" height=\"26\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"240\" y=\"77\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">water / money</text><rect x=\"30\" y=\"96\" width=\"100\" height=\"26\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"80\" y=\"113\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">many / a few</text><rect x=\"190\" y=\"96\" width=\"100\" height=\"26\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"240\" y=\"113\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">much / a little</text><text x=\"160\" y=\"145\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">a lot of / some 兩者皆可</text><text x=\"160\" y=\"165\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">information 永遠不加 s</text></svg>",
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
          "svg": "<svg viewBox=\"0 0 400 210\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"200\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\">冠詞 a / an / the 抉擇</text><rect x=\"20\" y=\"40\" width=\"175\" height=\"70\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"107\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">不特定 (首次提及)</text><text x=\"107\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">a + 子音『音』</text><text x=\"107\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">an + 母音『音』</text><rect x=\"205\" y=\"40\" width=\"175\" height=\"70\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><text x=\"292\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">特指 / 已提及 / 唯一</text><text x=\"292\" y=\"86\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#f0a52e\">the</text><text x=\"292\" y=\"104\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#3a342e\">the sun, the one we saw</text><rect x=\"30\" y=\"125\" width=\"160\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"110\" y=\"145\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#3a342e\">an hour (h 不發音)</text><rect x=\"210\" y=\"125\" width=\"160\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"290\" y=\"145\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#3a342e\">a university (發 /j/)</text><text x=\"200\" y=\"180\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">關鍵:看『發音』而非拼字字母,</text><text x=\"200\" y=\"198\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">第二次出現同一名詞改用 the</text></svg>",
          "caption": "a/an 看發音,特指或唯一用 the"
        },
        {
          "h": "名詞的單複數變化規則 (Plural forms)",
          "points": [
            "一般名詞字尾直接加 -s,例如 book 變 books、cat 變 cats;字尾是 s, x, ch, sh 的要加 -es,例如 bus 變 buses、box 變 boxes、watch 變 watches。",
            "字尾子音加 y 的,要去 y 改成 -ies,例如 city 變 cities、baby 變 babies;但母音加 y 直接加 -s,例如 boy 變 boys、day 變 days。",
            "字尾是 f 或 fe 的常去 f 改 -ves,例如 leaf 變 leaves、knife 變 knives。"
          ],
          "formula": "子音 + y → 去 y + ies;f/fe → 去 f + ves",
          "trap": "母音加 y 不可變 ies:正確是 boys、days,不是 boies、daies;只有子音加 y 才改 ies。"
        },
        {
          "h": "不規則複數與單複數同形 (Irregular plurals)",
          "points": [
            "有些名詞複數是不規則變化,要背:man 變 men、woman 變 women、child 變 children、foot 變 feet、tooth 變 teeth、mouse 變 mice。",
            "少數動物名詞單複數同形,例如 one sheep / two sheep、a fish / many fish、a deer / three deer。",
            "people 本身就是 person 的複數,表示『人們』,後面要配複數動詞,例如 Many people are waiting outside."
          ],
          "trap": "people 已是複數,不可說 two peoples 來指人數,也不可配單數動詞;child 的複數是 children,不是 childs。"
        },
        {
          "h": "零冠詞與固定用法 (Zero article)",
          "points": [
            "泛指複數或不可數名詞、講一般概念時,前面不加冠詞,例如 I like music.、Dogs are friendly animals.",
            "三餐、運動、學科、語言前通常不加冠詞,例如 have breakfast、play basketball、study English。",
            "go to school / go to bed 這類表示『去做該場所的本來目的』的片語也不加冠詞。"
          ],
          "trap": "泛指時別亂加 the:I love the music. 是錯的;只有特指某段音樂才用 the music。play 後面的球類運動不加 the(play soccer 而非 play the soccer)。"
        }
      ],
      "quiz": [
        {
          "stem": "The teacher gave us a lot of useful ___ about the exam.",
          "options": [
            "informations",
            "informationes",
            "an information",
            "information"
          ],
          "answer": 3,
          "explanation": "information 為不可數名詞,無複數形也不加冠詞 a,故用原形 information。",
          "trap": "a lot of 可接不可數,但 information 永遠不加 s、不加 a,複數陷阱選項全錯。"
        },
        {
          "stem": "She waited for ___ hour, but the bus never came.",
          "options": [
            "a",
            "the",
            "(無冠詞)",
            "an"
          ],
          "answer": 3,
          "explanation": "hour 的 h 不發音,實際以母音 /au/ 開頭,故用 an。",
          "trap": "冠詞看『發音』不看拼字字母;hour 雖以子音 h 拼寫,但 h 不發音,須用 an 而非 a。"
        },
        {
          "stem": "We saw a strange animal in the zoo. ___ animal had a long neck and brown spots.",
          "options": [
            "The",
            "An",
            "A",
            "(無冠詞)"
          ],
          "answer": 0,
          "explanation": "第二句的 animal 是第一句已提及的『那隻』動物,屬特指,須用 the。",
          "trap": "⚠ 同一名詞第二次出現指『前文那一個』要用 the,不可再用 a/an;雖然 animal 以母音開頭看似要 an,但特指規則優先於 a/an 之分。"
        },
        {
          "stem": "My grandmother gave me a lot of good ___ about how to deal with difficult people.",
          "options": [
            "advices",
            "an advice",
            "advice",
            "advise"
          ],
          "answer": 2,
          "explanation": "advice(建議)為不可數名詞,無複數形也不加冠詞 a,故用原形 advice。",
          "trap": "⚠ a lot of 雖可接不可數,但 advice 永遠不加 s、不加 a;advise 是動詞(拼 s)詞性不符,複數陷阱選項全錯。"
        },
        {
          "stem": "The police ___ still looking for the suspect, and ___ news about the case ___ broadcast every hour.",
          "options": [
            "is / a / is",
            "are / (無冠詞) / is",
            "are / the / are",
            "is / the / are"
          ],
          "answer": 1,
          "explanation": "police 為集合名詞但永遠搭配複數動詞 are;news 雖字尾 s 卻不可數用單數 is 且泛指時零冠詞,故 are / (無冠詞) / is。",
          "trap": "⚠ police 看似單數實為複數恆用 are;news 看似複數卻不可數恆用 is,兩個常見字方向相反,且 news 泛指不加冠詞。"
        },
        {
          "stem": "Mrs. Lin asked the two new ___ to introduce themselves before the meeting began.",
          "options": [
            "passers-bies",
            "passer-bys",
            "passers-by",
            "passer-by"
          ],
          "answer": 2,
          "explanation": "複合名詞 passer-by 的核心字是 passer,複數在核心字加 s→passers-by;two new 證明須用複數。",
          "trap": "⚠ 複合名詞變複數在『主要名詞』加 s 而非字尾,passer-bys 加錯位置;by 是介系詞不變,故非 passers-bies。"
        },
        {
          "stem": "Neither the manager nor the two assistants ___ aware that the ___ had already left the building.",
          "options": [
            "was / staff",
            "were / staffs",
            "were / staff",
            "was / staffs"
          ],
          "answer": 2,
          "explanation": "neither...nor 採就近原則,動詞與最近的 the two assistants(複數)一致用 were;staff 作『全體員工』為集合名詞,泛指此處用原形 staff。",
          "trap": "⚠ neither A nor B 動詞看靠近的 B,B 為複數故 were,別被前面單數 manager 誤導;staff 集合名詞不加 s,staffs 僅在指多個團隊時才用。"
        },
        {
          "stem": "She has made great ___ in her studies, but there is still ___ room for improvement.",
          "options": [
            "progress / much",
            "progress / many",
            "a progress / many",
            "progresses / a"
          ],
          "answer": 0,
          "explanation": "progress 為不可數名詞,無複數也不加 a,故用原形;room 作『空間/餘地』時不可數,用修飾不可數的 much。",
          "trap": "⚠ progress 永遠不可數,progresses 與 a progress 皆錯;room 此處非『房間』(可數)而是抽象『餘地』(不可數)故用 much 不用 many。"
        },
        {
          "stem": "The ___ in this old story all end happily, which is why ___ love reading them to their kids.",
          "options": [
            "heros / mothers",
            "heros / mothers-in-law",
            "heroes / mother",
            "heroes / mothers"
          ],
          "answer": 3,
          "explanation": "hero 字尾子音+o,變複數加 es→heroes;mother 規則複數加 s,且後句泛指一般母親用複數 mothers。",
          "trap": "⚠ hero、potato、tomato 等子音+o 結尾加 es,heros 為常見拼寫錯誤;此處泛指母親用 mothers,並非 mother-in-law 之複合名詞。"
        },
        {
          "stem": "A number of ___ been damaged in the flood, but the amount of ___ needed to repair them is still unknown.",
          "options": [
            "buildings has / money have",
            "buildings have / money is",
            "buildings have / money are",
            "building have / moneys have"
          ],
          "answer": 1,
          "explanation": "a number of + 複數名詞(buildings)接複數動詞 have;the amount of money 主詞核心為不可數 money,動詞用單數,故 is。",
          "trap": "⚠ a number of(許多)用複數 have,與 the number of 相反;money 不可數無 moneys,且 the amount of 後動詞看不可數本體用 is 而非 are。"
        },
        {
          "stem": "There ___ a series of accidents on this road, so the city installed ___ new traffic lights last month.",
          "options": [
            "have been / a few",
            "has been / a little",
            "have been / a little",
            "has been / a few"
          ],
          "answer": 3,
          "explanation": "a series of 視為單一系列為單數,動詞用 has been;traffic lights 可數複數,用修飾可數的 a few。",
          "trap": "⚠ a series of 雖後接複數仍當單數用 has,易誤選 have;a few 修飾可數(lights),a little 修飾不可數,選 a little 即被誤導。"
        },
        {
          "stem": "The number of ___ visiting the museum ___ doubled, yet ___ of the exhibits remain unchanged.",
          "options": [
            "tourists has / many",
            "tourist has / many",
            "tourists have / much",
            "tourist have / many"
          ],
          "answer": 0,
          "explanation": "the number of 後接複數名詞 tourists,但主詞核心是 the number(單數)故用 has doubled;exhibits 可數,many of the exhibits。",
          "trap": "⚠ the number of tourists 的真正主詞是 the number(單數)用 has,別被 tourists 誘選 have;exhibits 可數須用 many 而非 much。"
        },
        {
          "stem": "He spilled ___ all over the table, and now there are several ___ on the carpet too.",
          "options": [
            "inks / stains",
            "an ink / stain",
            "ink / stains",
            "ink / staines"
          ],
          "answer": 2,
          "explanation": "ink 為不可數名詞,不加 a、不加 s,用原形;stain(污漬)可數,several 須接複數 stains。",
          "trap": "⚠ ink 不可數,an ink 與 inks 皆錯;stain 為一般可數名詞規則加 s,staines 是杜撰拼法,several 後須真複數。"
        },
        {
          "stem": "All the ___ on the farm were sold, including five ___ and a dozen ___.",
          "options": [
            "cattles / oxes / gooses",
            "cattle / oxen / geese",
            "cattle / oxes / geese",
            "cattles / oxen / geese"
          ],
          "answer": 1,
          "explanation": "cattle 為恆複數集合名詞無 -s;ox 的不規則複數為 oxen;goose 的不規則複數為 geese,故 cattle / oxen / geese。",
          "trap": "⚠ cattle 沒有 cattles 形式;ox→oxen、goose→geese 皆為母音變化或加 -en 的不規則複數,加 -s 一律錯。"
        },
        {
          "stem": "Economics ___ often considered difficult, but the statistics in this report ___ surprisingly clear.",
          "options": [
            "are / is",
            "is / is",
            "is / are",
            "are / are"
          ],
          "answer": 2,
          "explanation": "Economics 作學科名為單數用 is;statistics 在此指『一組數據』為可數複數用 are,故 is / are。",
          "trap": "⚠ economics 作學科單數,但 statistics 指『統計數據(複數筆)』時用 are、指『統計學』時才單數;同字尾 -s 卻因語意一單一複。"
        },
        {
          "stem": "I need ___ to wrap the gift, and please hand me ___ from the drawer to cut the ribbon.",
          "options": [
            "two pieces of paper / a pair of scissors",
            "two papers / a scissors",
            "two paper / a scissor",
            "two sheets of papers / scissors"
          ],
          "answer": 0,
          "explanation": "paper(紙)不可數,計量用 pieces/sheets of paper;scissors 恆複數成對工具,計量用 a pair of scissors。",
          "trap": "⚠ paper 不可數不能加 s(papers 指『報告/論文』語意不符);scissors 無單數 scissor,且 sheets of papers 量詞後名詞仍不能加 s。"
        },
        {
          "stem": "The jury ___ divided in their opinions; some wanted to convict, while ___ believed the man was innocent.",
          "options": [
            "was / the other",
            "was / others",
            "were / the others",
            "were / others"
          ],
          "answer": 3,
          "explanation": "jury 作集合名詞但強調『成員各持己見』時當複數用 were;some...others 表『有些...另一些(非全部)』故用 others。",
          "trap": "⚠ 集合名詞 jury 強調成員分歧時用複數 were,與視為整體時的單數相反;some...others 為不定指,加 the(the others)則變特指全部剩餘者語意不符。"
        },
        {
          "stem": "Each of the ___ was given ___ to complete the obstacle course within ten minutes.",
          "options": [
            "athlete / two chances",
            "athletes / a chance",
            "athletes / two chances",
            "athlete / a chance"
          ],
          "answer": 1,
          "explanation": "each of the + 複數名詞 athletes;主詞核心 each 為單數用 was,給『一次』機會 a chance 與單數一致。",
          "trap": "⚠ each of the 後須接複數名詞(athletes),但動詞與所給單位仍依 each 為單數;故 a chance 對應 each 的單數,two chances 與 each 不合。"
        },
        {
          "stem": "The ___ of the band ___ tuning their instruments when the leader walked in.",
          "options": [
            "musicians / were",
            "musician / was",
            "musicians / was",
            "musician / were"
          ],
          "answer": 0,
          "explanation": "整個樂團有多位樂手故用複數 musicians;主詞 musicians 為複數,過去進行式用 were tuning。",
          "trap": "⚠ of the band 是修飾語,真正主詞是前面的 musicians(複數)用 were;別被單數的 band 干擾而誤選 was。"
        },
        {
          "stem": "The waiter brought us two ___ of tea and a ___ of bread to share before the main course.",
          "options": [
            "cup / loaf",
            "cups / loaf",
            "cup / loaves",
            "cups / loaves"
          ],
          "answer": 1,
          "explanation": "tea 不可數用 cup 計量,two 使量詞變複數 cups;bread 不可數用 loaf 計量,a 對應單數量詞 loaf,故 cups / loaf。",
          "trap": "⚠ 變複數的是量詞(cup→cups)而非不可數的 tea/bread;a loaf 為單數量詞配 a,選 loaves 與 a 不一致,別把量詞與名詞混淆。"
        },
        {
          "stem": "Either the twins or their mother ___ going to drive, because ___ of them knows the way well.",
          "options": [
            "are / each",
            "is / each",
            "are / both",
            "is / both"
          ],
          "answer": 1,
          "explanation": "either...or 就近原則,動詞與最近的 their mother(單數)一致用 is;each of them 強調『每一個』搭配單數 knows,符合語意。",
          "trap": "⚠ either A or B 動詞看靠近的 B(mother 單數)用 is,別被前面複數 twins 誤導;both of them 接複數動詞 know,與後面 knows 不一致。"
        },
        {
          "stem": "The ___ damage caused by the typhoon was huge, but luckily there ___ only a few minor ___.",
          "options": [
            "(無冠詞) / was / injuries",
            "many / was / injury",
            "many / were / injuries",
            "(無冠詞) / were / injuries"
          ],
          "answer": 3,
          "explanation": "damage 不可數,The damage 已特指不需數量詞故第一空為無冠詞修飾;there be 與最近主詞 a few minor injuries(複數)一致用 were;injury 可數,a few 接複數 injuries。",
          "trap": "⚠ damage 不可數不可用 many 修飾;a few 須接複數 injuries,且 there be 看後面複數用 were 而非 was。"
        },
        {
          "stem": "The ___ at this hotel include a garden, two pools, and a gym, which is why ___ visit it every summer.",
          "options": [
            "facility / familys",
            "facilitys / families",
            "facilities / families",
            "facilities / familys"
          ],
          "answer": 2,
          "explanation": "列舉多項設施故用複數,facility 子音+y 變複數去 y 加 ies→facilities;family 同理變 families,泛指一般家庭用複數。",
          "trap": "⚠ facility 與 family 皆為子音+y 結尾,變複數須去 y 加 ies;facilitys、familys 為母音+y 規則的誤套,一律錯。"
        },
        {
          "stem": "Half of the ___ on the shelf ___ missing, and half of the milk in the bottle ___ gone too.",
          "options": [
            "book are / are",
            "books are / is",
            "books is / is",
            "book is / are"
          ],
          "answer": 1,
          "explanation": "half of + 名詞動詞依該名詞:books 可數複數用 are;milk 不可數用 is,故 books are / is。",
          "trap": "⚠ half of / most of / some of 的動詞看 of 後名詞的可數性:books(複數)用 are,milk(不可數)用 is,兩者方向不同極易混淆。"
        },
        {
          "stem": "This is ___ office; both of them share it, but the books over there are ___.",
          "options": [
            "James and Tom's / theirs",
            "James's and Tom's / their",
            "James' and Tom / theirs",
            "James and Toms' / theirs"
          ],
          "answer": 0,
          "explanation": "兩人『共同擁有』一間辦公室,所有格只在最後一個名詞加 's→James and Tom's;the books 的所有格代名詞用 theirs(後不接名詞)。",
          "trap": "⚠ 共同擁有只在最後一名詞加 's(James and Tom's);若各自擁有才兩者都加 's。theirs 為所有格代名詞獨立使用,their 後須接名詞故不可。"
        },
        {
          "stem": "My mother bought some fresh ______ at the market this morning.",
          "options": [
            "breads",
            "a bread",
            "breaded",
            "bread"
          ],
          "answer": 3,
          "explanation": "「bread」是不可數名詞,不能加 s 變複數,也不能加不定冠詞 a。搭配 some 時直接用原形不可數名詞,故正確答案為不可數的原形寫法「bread」。"
        },
        {
          "stem": "There is ______ old temple near my grandmother's house in the countryside.",
          "options": [
            "a",
            "an",
            "the",
            "some"
          ],
          "answer": 1,
          "explanation": "空格後的形容詞「old」以母音發音開頭,不定冠詞須用「an」而非「a」。此處第一次提及,泛指一座舊廟,用不定冠詞而非定冠詞;單數可數名詞前也不用 some。",
          "trap": "判斷 a/an 要看緊接其後單字的「發音」是否為母音,是 old 而不是後面的 temple。"
        },
        {
          "stem": "The teacher gave us ______ homework, so we had to stay up late last night.",
          "options": [
            "many",
            "a lot",
            "a lot of",
            "a few"
          ],
          "answer": 2,
          "explanation": "「homework」是不可數名詞。修飾不可數名詞表「大量」要用 a lot of;many 與 a few 只能修飾可數複數名詞;a lot 為副詞用法,不能直接接名詞,後面須加 of。故正確為 a lot of。",
          "trap": "homework 看似可以計數,實為不可數名詞,不能用 many 或 a few。"
        },
        {
          "stem": "I need to buy two ______ of milk and three ______ of paper for the project.",
          "options": [
            "bottle / piece",
            "bottles / pieces of",
            "bottles / pieces",
            "bottle of / pieces"
          ],
          "answer": 2,
          "explanation": "milk 與 paper 都是不可數名詞,計量時用「數字 + 量詞複數 + of + 不可數名詞」。two 後量詞用複數 bottles,three 後量詞用複數 pieces,兩處 of 都已在題幹中提供,故量詞應填 bottles 與 pieces。",
          "trap": "題幹中兩個 of 都已寫出,選項只需填量詞;量詞本身要隨數字變複數(bottles/pieces),不要重複多寫 of。"
        },
        {
          "stem": "Read the passage: \"Jenny keeps three cats, two dogs, and a rabbit at home. She spends over an hour feeding them every evening. Taking care of so many ______ is tiring, but she loves every one of them.\" Which word best fits the blank?",
          "options": [
            "animal",
            "animals",
            "an animal",
            "animal's"
          ],
          "answer": 1,
          "explanation": "由前文 three cats、two dogs、a rabbit 可知寵物不只一隻,搭配 so many 需接可數名詞的複數形。animal 為可數名詞,複數為 animals;單數 animal 或加冠詞的 an animal 與 many 不合,animal's 是所有格也不對。故填複數 animals。",
          "trap": "so many 之後必須接可數名詞複數,別被單數原形或所有格形式誤導。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">代名詞格位表</text><line x1=\"20\" y1=\"32\" x2=\"300\" y2=\"32\" stroke=\"#3a342e\" stroke-width=\"1\"/><line x1=\"100\" y1=\"32\" x2=\"100\" y2=\"170\" stroke=\"#3a342e\" stroke-width=\"1\"/><line x1=\"180\" y1=\"32\" x2=\"180\" y2=\"170\" stroke=\"#3a342e\" stroke-width=\"1\"/><line x1=\"20\" y1=\"64\" x2=\"300\" y2=\"64\" stroke=\"#3a342e\" stroke-width=\"1\"/><line x1=\"20\" y1=\"96\" x2=\"300\" y2=\"96\" stroke=\"#3a342e\" stroke-width=\"1\"/><line x1=\"20\" y1=\"128\" x2=\"300\" y2=\"128\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"60\" y=\"52\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">主格</text><text x=\"140\" y=\"52\" text-anchor=\"middle\" fill=\"#5aa874\" font-size=\"10\">受格</text><text x=\"240\" y=\"52\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">所有格</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">I</text><text x=\"140\" y=\"84\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">me</text><text x=\"240\" y=\"84\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">my / mine</text><text x=\"60\" y=\"116\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">he</text><text x=\"140\" y=\"116\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">him</text><text x=\"240\" y=\"116\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">his / his</text><text x=\"60\" y=\"148\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">they</text><text x=\"140\" y=\"148\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">them</text><text x=\"240\" y=\"148\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">their</text><text x=\"160\" y=\"168\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"9\">介系詞後用受格: between you and me</text></svg>",
          "caption": "主格受格所有格三欄對照",
          "points": [
            "主格(I/he/they) 當主詞;受格(me/him/them) 當受詞或介系詞後。",
            "所有格形容詞 (my/his) + 名詞;所有格代名詞 (mine/his) 單獨使用。",
            "反身代名詞 (myself/themselves) 用於主受詞相同時。"
          ],
          "trap": "介系詞 (between/with/for) 後一定用受格:between you and me(非 I);easy 比較句 than 後口語可用受格。"
        },
        {
          "h": "指示代名詞 this/that/these/those",
          "points": [
            "this 和 these 指『近的』,that 和 those 指『遠的』;this/that 配單數,these/those 配複數,例如 This is my pen.、These are my books.",
            "電話中介紹自己用 this:Hello, this is Amy speaking.;問對方是誰用 Who's that?",
            "為了避免重複名詞,可用 that 或 those 代替前面提過的名詞,例如 The weather here is better than that in Taipei."
          ],
          "trap": "this/these 是限定詞也是代名詞,別把單複數配錯:正確是 These are nice. 不是 This are nice.;指城市天氣比較時用 that 代替 the weather,不可用 it。"
        },
        {
          "h": "不定代名詞 one / it 的差別",
          "points": [
            "one 代替『同類但不特定』的可數名詞,例如 I lost my pen, so I need to buy a new one.(one = a pen,任何一支)。",
            "it 代替『前面提到的那個特定東西』,例如 I lost my pen. Have you seen it?(it = 我的那支筆)。",
            "複數時 one 變 ones,例如 These shoes are old; I want new ones."
          ],
          "formula": "新的同類用 one/ones;原來那個用 it/them",
          "trap": "別混用 one 和 it:買一支新的要說 buy a new one,不可說 buy a new it;特指原物才用 it。"
        },
        {
          "h": "虛主詞 it 與 It takes 句型",
          "points": [
            "談天氣、時間、距離時用 it 當主詞,沒有實際意義,例如 It is raining.、It is seven o'clock.、It is far from here.",
            "把不定詞當主詞時,常用 it 當虛主詞放句首,真正主詞移到後面,例如 It is important to keep promises.",
            "句型 It takes + 人 + 時間 + to + 原形動詞,表示『某事花某人多少時間』,例如 It takes me two hours to finish the work."
          ],
          "formula": "It is + 形容詞 + to + V;It takes + 人 + 時間 + to V",
          "trap": "天氣時間距離一律用 it 當主詞,不可省略也不可用 there:正確 It is hot today. 不是 Is hot today. 或 There is hot today."
        },
        {
          "h": "反身代名詞的慣用法 (Reflexive idioms)",
          "points": [
            "主詞和受詞是同一人時用反身代名詞,例如 She hurt herself.、I taught myself English.",
            "by oneself 表示『獨自、靠自己』,等於 alone,例如 He lives by himself.",
            "片語 enjoy oneself 表示『玩得愉快』、help oneself to 表示『自行取用(食物)』,例如 Help yourself to the cake."
          ],
          "trap": "受詞和主詞不同人時不可用反身代名詞:幫『別人』要說 help him,主受詞相同才用 help himself;myself 不可單獨當主詞用。"
        }
      ],
      "quiz": [
        {
          "stem": "This is a secret just between you and ___.",
          "options": [
            "I",
            "mine",
            "my",
            "me"
          ],
          "answer": 3,
          "explanation": "介系詞 between 後接受格,you and me。",
          "trap": "between you and I 是常見錯誤;介系詞後必用受格 me,別因為覺得 I 較『正式』而誤選。"
        },
        {
          "stem": "My bike is broken, so I borrowed ___ from my brother.",
          "options": [
            "his",
            "he",
            "him",
            "himself"
          ],
          "answer": 0,
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
            "its",
            "it"
          ],
          "answer": 3,
          "explanation": "because 子句的主詞指『the test(考試)』這件單數事物,用 it。",
          "trap": "⚠ 主詞指涉的是單數的 the test 而非複數 students,故用 it 不是 they;後面有動詞 was(單數)也印證主詞須為單數的 it。"
        },
        {
          "stem": "Read the note: \"To my dear students, the success of this class belongs to you, not to ___. You worked hard; I merely guided.\" Who does the underlined blank refer to?",
          "options": [
            "me",
            "I",
            "my",
            "mine"
          ],
          "answer": 0,
          "explanation": "介系詞 to 後須用受格,且與前面的 to you 平行,寫信者指『我自己』用 me。",
          "trap": "⚠ 介系詞 to 後一定用受格 me,別因句子正式而誤選主格 I;my 為所有格形容詞須接名詞,mine 為所有格代名詞語意不符『不是因為我這個人』。"
        },
        {
          "stem": "\"Whoever finishes first should help ___ struggling,\" the coach said, pointing at the slower runners behind.",
          "options": [
            "whoever is",
            "whomever is",
            "those who are",
            "they who are"
          ],
          "answer": 2,
          "explanation": "help 的受詞指『那些正在掙扎的人』,用 those who are struggling,who 在子句中作主詞配合 are。",
          "trap": "⚠ help 後需要受詞且指複數人群,用 those who are(指示+關代);whoever/whomever 引導的是名詞子句,單數語感且與後面 struggling 的複數情境及 are 不合。"
        },
        {
          "stem": "Survey result: 60% of the staff support the plan; 40% oppose ___. Clearly, the majority are in favor of ___.",
          "options": [
            "them / it",
            "it / it",
            "it / them",
            "them / them"
          ],
          "answer": 1,
          "explanation": "兩個空格都指涉單數的 the plan,故皆用 it。",
          "trap": "⚠ 兩格指涉的都是單數的 the plan 這一個計畫,皆用 it;別被 staff、majority 等集合或複數概念誤導而選 them。"
        },
        {
          "stem": "Each of the three finalists believed that ___ deserved to win, yet only one could take the trophy.",
          "options": [
            "he or she",
            "them",
            "they",
            "their"
          ],
          "answer": 0,
          "explanation": "Each of + 複數作主詞視為單數,Each 強調個別,正式語法用單數 he or she 作 believed 子句的主詞。",
          "trap": "⚠ Each 強調『每一個』為單數,that 子句主詞用單數 he or she;雖有 three finalists,但 Each of 鎖定單數;them 為受格不可作主詞,their 為所有格。"
        },
        {
          "stem": "The detective said, \"The thief left ___ fingerprints all over the safe, but smartly wiped the doorknob clean.\"",
          "options": [
            "its",
            "their",
            "his or her",
            "whose"
          ],
          "answer": 2,
          "explanation": "the thief 為單數且性別不明,正式書面語的通性單數所有格用 his or her,修飾名詞 fingerprints。",
          "trap": "⚠ the thief 是單數人,正式語法用 his or her;its 用於非人/動物,their 雖口語常見但與明確單數先行詞在正式句不一致,whose 為關係/疑問所有格。"
        },
        {
          "stem": "\"It wasn't ___ who broke the vase!\" cried the boy. \"It was the cat that knocked it off the shelf.\"",
          "options": [
            "my",
            "me",
            "mine",
            "I"
          ],
          "answer": 3,
          "explanation": "分裂句 It was/wasn't ___ who... 中,空格是 who 子句動詞 broke 的真正主詞,正式語法用主格 I。",
          "trap": "⚠ 後接 who + 動詞 broke,該代名詞是子句主詞,正式語法用主格 I,不是口語的 me;my/mine 為所有格皆不可作主詞。"
        },
        {
          "stem": "Either the manager or the two assistants will present ___ findings at the meeting tomorrow.",
          "options": [
            "his",
            "her",
            "their",
            "its"
          ],
          "answer": 2,
          "explanation": "Either A or B 結構,所有格依就近的 B(the two assistants,複數)決定,用 their。",
          "trap": "⚠ Either...or... 適用就近原則,所有格看最靠近的 the two assistants(複數)用 their;別被前面單數的 the manager 誤導而選 his/her。"
        },
        {
          "stem": "The committee could not agree ___; in the end, half voted yes and half voted no.",
          "options": [
            "among them",
            "among themselves",
            "with each other",
            "between themselves"
          ],
          "answer": 1,
          "explanation": "委員會成員彼此(主受詞同群)無法達成共識,且為三人以上,用 among themselves。",
          "trap": "⚠ 主詞與受詞指同一群人須用反身 themselves,不用 them;三人以上用 among 非 between;agree among themselves 為固定搭配,with each other 在此不如此自然。"
        },
        {
          "stem": "\"This trophy means more to me than any other in my collection, because I earned ___ entirely on ___ own,\" she said.",
          "options": [
            "it / her",
            "them / mine",
            "it / my",
            "it / mine"
          ],
          "answer": 2,
          "explanation": "第一格指單數 trophy 用受格 it;第二格 on one's own(靠自己)用所有格形容詞,主詞 I 對應 my。",
          "trap": "⚠ trophy 單數用 it;on my own(獨力)固定用所有格形容詞 my + own,不能用 mine 或 her;說話者是 I 故對應 my。"
        },
        {
          "stem": "Not a single one of the volunteers brought ___ own water bottle, so the organizers had to buy dozens.",
          "options": [
            "his or her",
            "their",
            "its",
            "your"
          ],
          "answer": 0,
          "explanation": "Not a single one (of...) 強調『沒有任何一個人』為單數,正式語法的通性所有格用 his or her。",
          "trap": "⚠ one 為單數核心,Not a single one 視為單數,正式語法用 his or her;雖有複數 volunteers,但 one of 鎖定單數;its 用於非人,your 人稱錯誤。"
        },
        {
          "stem": "The two countries signed the agreement, promising never to attack ___ again.",
          "options": [
            "themselves",
            "them",
            "one another's",
            "each other"
          ],
          "answer": 3,
          "explanation": "兩個國家『互相』不再攻擊對方,兩者之間用 each other 作 attack 的受詞。",
          "trap": "⚠ 兩方互相用 each other,作受詞;themselves 表『攻擊自己』語意荒謬;one another's 為所有格須接名詞;them 指涉不清且非『彼此』。"
        },
        {
          "stem": "Of all the paintings in the gallery, the one I admired most was ___ hanging by the entrance.",
          "options": [
            "it",
            "the one",
            "that",
            "this"
          ],
          "answer": 1,
          "explanation": "代替前述單數可數名詞 painting 並後接修飾語 hanging by the entrance,用 the one。",
          "trap": "⚠ 代替前面可數單數名詞且後有後位修飾(hanging...)用 the one;it 不可後接分詞片語作此指定;that/this 指示詞在此指代不明確。"
        },
        {
          "stem": "\"Between the two of us, I trust you far more than ___ trust me,\" he admitted with a sigh.",
          "options": [
            "your",
            "me",
            "I",
            "you"
          ],
          "answer": 3,
          "explanation": "比較句 than 後是完整子句的主詞 + 動詞 trust me,須用主格 you(=than you trust me)。",
          "trap": "⚠ than 後接的是子句 you trust me,空格是動詞 trust 的主詞用 you;後面有動詞 trust 即知需要主格主詞,非受格。"
        },
        {
          "stem": "The new policy will affect every employee, regardless of ___ rank or department.",
          "options": [
            "their",
            "whose",
            "his or her",
            "its"
          ],
          "answer": 2,
          "explanation": "every employee 為單數且性別不定,正式語法的通性單數所有格用 his or her。",
          "trap": "⚠ every + 單數名詞 employee 視為單數,正式語法用 his or her;their 雖口語可接受,但 every 明確為單數在正式測驗用 his or her;its 用於非人,whose 為關係/疑問所有格。"
        },
        {
          "stem": "\"Give the prize to ___ scores the highest,\" announced the host, \"no matter which team they come from.\"",
          "options": [
            "whoever",
            "whom",
            "whomever",
            "who"
          ],
          "answer": 0,
          "explanation": "介系詞 to 後接名詞子句,子句內代名詞作 scores 的主詞,用主格的 whoever。",
          "trap": "⚠ 決定格位的是子句內角色:作 scores 的主詞用主格 whoever,不因前有介系詞 to 就用 whomever;單純 who/whom 缺『無論誰』之意。"
        },
        {
          "stem": "She and her sister look so similar that strangers often mistake one for ___.",
          "options": [
            "another",
            "the other",
            "other",
            "others"
          ],
          "answer": 1,
          "explanation": "兩者中『一個錯認成另一個』,two 中特定的另一個用 the other。",
          "trap": "⚠ 僅有姊妹兩人,one... the other(兩者中特定的另一個);another 用於三者以上不特定的『再一個』;other 須接名詞;others 為複數,皆不合『兩人互認』情境。"
        },
        {
          "stem": "\"The fault is entirely ___,\" the captain said, taking responsibility. \"My crew followed orders; I gave the wrong ones.\"",
          "options": [
            "me",
            "my",
            "mine",
            "myself"
          ],
          "answer": 2,
          "explanation": "be 動詞後表『過錯是我的』,須用所有格代名詞 mine(= my fault),單獨使用。",
          "trap": "⚠ The fault is ___ 補語位置用所有格代名詞 mine 表『我的(過錯)』;my 為所有格形容詞須接名詞;me/myself 不能表所屬,語意錯誤。"
        },
        {
          "stem": "Many people claim to support the charity, but few actually donate any of ___ own money to it.",
          "options": [
            "their",
            "its",
            "his",
            "your"
          ],
          "answer": 0,
          "explanation": "few 指涉前面複數的 many people,所有格用複數 their。",
          "trap": "⚠ few 在此承接複數先行詞 people,所有格用 their;主詞為複數人群非單數,故非 his;its 用於非人,your 人稱不一致。"
        },
        {
          "stem": "The students whose projects were chosen will each receive a certificate, and ___ will be displayed in the lobby.",
          "options": [
            "it",
            "those",
            "theirs",
            "they"
          ],
          "answer": 3,
          "explanation": "and 後子句的主詞指涉前面複數的 projects(這些作品將被展示),用主格 they。",
          "trap": "⚠ 後句主詞指複數的 projects,用主格 they;it 為單數不合;theirs 為所有格代名詞語意不對;those 須接名詞或修飾語在此突兀。"
        },
        {
          "stem": "\"You can blame the weather, the traffic, or the alarm — but the truth is, only ___ are to blame for being late,\" the boss told the two of them.",
          "options": [
            "you",
            "yourselves",
            "yourself",
            "your"
          ],
          "answer": 1,
          "explanation": "主詞 you 指『你們兩人』為複數,強調『該怪你們自己』用複數反身代名詞 yourselves。",
          "trap": "⚠ 對象是兩個人(the two of them),反身代名詞用複數 yourselves,不是單數 yourself;此處配合主詞 you 作強調,your 為所有格不可作主詞補語。"
        },
        {
          "stem": "Neither the evidence nor the witnesses convinced the jury; in the end, ___ found the man not guilty.",
          "options": [
            "it",
            "one",
            "they",
            "he"
          ],
          "answer": 2,
          "explanation": "後句主詞指涉前面的 the jury(陪審團成員),強調集合中多位成員共同裁決時用複數 they,配合動詞 found。",
          "trap": "⚠ the jury 作『一群成員共同行動』時用複數 they;雖 jury 可作單數,但此處強調陪審員集體做出裁決,they 最自然;it 指物、he 指特定單一男性、one 泛指皆不合。"
        },
        {
          "stem": "My sister loves baking. Look! She made this whole birthday cake all by ___.",
          "options": [
            "himself",
            "yourself",
            "myself",
            "herself"
          ],
          "answer": 3,
          "explanation": "主詞是「My sister」為女性單數,片語「by ___」需用反身代名詞表示「獨自、親自」,因此要用對應女性單數的反身代名詞 herself。指男性單數的、指第二人稱的、以及指第一人稱「我」的反身形式都與 my sister 不一致。"
        },
        {
          "stem": "Emma and I are going to the night market tonight. Would you like to come with ___?",
          "options": [
            "we",
            "them",
            "us",
            "our"
          ],
          "answer": 2,
          "explanation": "介系詞 with 後面要接受格。「Emma and I」包含說話者,合起來當受詞時要用第一人稱複數受格 us。主格的 we 不能放在介系詞後;第三人稱複數的 them 會把說話者排除在外,指涉錯誤;所有格 our 後面則需再接名詞,語意不通。",
          "trap": "介系詞 with 後要用受格,且句中含說話者,應選包含自己的第一人稱複數,不要誤用主格或第三人稱。"
        },
        {
          "stem": "David and his little brother get along really well. They always help ___ with the housework.",
          "options": [
            "themselves",
            "them",
            "each other",
            "yourselves"
          ],
          "answer": 2,
          "explanation": "句意是兄弟倆「互相」幫忙,強調彼此之間的動作,兩者互助應用相互代名詞 each other。反身代名詞 themselves 意為「幫他們自己」,語意不符;them 會指向別人而非彼此;第二人稱複數的反身形式與第三人稱主詞 They 也不一致。",
          "trap": "『互相幫忙』要用相互代名詞,別誤用意為『幫自己』的反身代名詞。"
        },
        {
          "stem": "Neither of the two girls remembered to bring ___ umbrella, so they both got soaked in the rain.",
          "options": [
            "their",
            "hers",
            "its",
            "her"
          ],
          "answer": 3,
          "explanation": "主詞 Neither of the two girls 在文法上視為單數,且指的是女生,因此所有格要用女性單數;空格後接名詞 umbrella,需要形容詞性所有格 her。複數的 their 與單數主詞不一致;hers 是所有代名詞,後面不可再接名詞;its 用於非人或動物,不適合指女生。",
          "trap": "Neither 當單數看待,且空格後有名詞要用形容詞性所有格 her,別被『two girls』誘導成複數,也別和所有代名詞 hers 混用。"
        },
        {
          "stem": "___ notebook is this on the floor? I found it near the door, and there is a phone number written inside.",
          "options": [
            "Who's",
            "Who",
            "Whose",
            "Which"
          ],
          "answer": 2,
          "explanation": "空格後接名詞 notebook,是在問「這本筆記本是誰的」,要用表示所有的疑問詞 Whose。Who's 是 who is 的縮寫,語意變成『誰是筆記本』不通;Who 為主格疑問詞,後面不直接接名詞表所有;Which 用於在特定選項中挑選,句中並未提供選項。",
          "trap": "問『誰的+名詞』要用所有格疑問詞 Whose,別和發音相同、意為 who is 的縮寫混淆。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">比較級階梯</text><rect x=\"30\" y=\"120\" width=\"80\" height=\"36\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"70\" y=\"138\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"11\">tall</text><text x=\"70\" y=\"151\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">原級</text><rect x=\"120\" y=\"85\" width=\"80\" height=\"71\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"160\" y=\"103\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"11\">taller</text><text x=\"160\" y=\"116\" text-anchor=\"middle\" fill=\"#5aa874\" font-size=\"9\">比較 than</text><rect x=\"210\" y=\"48\" width=\"80\" height=\"108\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"250\" y=\"66\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">the tallest</text><text x=\"250\" y=\"79\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"9\">最高 in/of</text><line x1=\"110\" y1=\"120\" x2=\"120\" y2=\"120\" stroke=\"#3a342e\"/><line x1=\"200\" y1=\"85\" x2=\"210\" y2=\"85\" stroke=\"#3a342e\"/><text x=\"160\" y=\"174\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">不規則: good-better-best</text></svg>",
          "caption": "三級比較像階梯逐層升高",
          "points": [
            "比較級:short adj.+er than (taller than);long adj. 用 more+adj.+than (more careful than)。",
            "最高級:the+adj.+est (the tallest) 或 the most+adj.;範圍常用 in/of。",
            "倍數比較:twice as big as;愈來愈…用 比較級 and 比較級 (hotter and hotter)。"
          ],
          "trap": "than=比較級訊號,the+最高級=三者以上;good→better→best、bad→worse→worst 等不規則變化要背熟,別寫 gooder。"
        },
        {
          "h": "形容詞與副詞的形態與位置",
          "points": [
            "形容詞修飾名詞,放在名詞前或 be 動詞後,例如 a careful driver、She is careful.;副詞修飾動詞、形容詞,常放動詞後。",
            "多數副詞由形容詞加 -ly 構成,例如 careful 變 carefully、quick 變 quickly;字尾子音加 y 要去 y 改 -ily,例如 happy 變 happily。",
            "fast、hard、early、late 等字形容詞副詞同形,例如 a fast car(形容詞)/ run fast(副詞)。"
          ],
          "formula": "形容詞 + ly → 副詞;happy → happily",
          "trap": "hardly 不是 hard 的副詞!hardly 意思是『幾乎不』,例如 I can hardly hear you.;『努力地』要用 hard,如 work hard。"
        },
        {
          "h": "原級比較 as...as 句型",
          "points": [
            "兩者程度相同時用 as + 形容詞或副詞原級 + as,例如 Tom is as tall as Jack.",
            "否定 not as...as 表示『不如、沒有那麼…』,例如 This book is not as interesting as that one.",
            "句中若是修飾動詞要用副詞原級,例如 She runs as fast as her brother."
          ],
          "formula": "as + 原級 + as;not as + 原級 + as",
          "trap": "as...as 中間放原級,不可放比較級:正確 as tall as,不是 as taller as;否定句『沒有那麼』用 not as...as,別誤用比較級。"
        },
        {
          "h": "比較級的修飾與強調",
          "points": [
            "比較級前可用 much、a lot、even、far 來強調差距,例如 This one is much cheaper than that one.",
            "表示『差一點點』可用 a little 或 a bit,例如 He is a little taller than me.",
            "very 不能修飾比較級,要強調『更…』用 much 或 even。"
          ],
          "trap": "別用 very 修飾比較級:正確 much better、even better,不是 very better;very 只能修飾原級(very good)。"
        },
        {
          "h": "不規則比較與 the + 比較級句型",
          "points": [
            "good 和 well 的比較級是 better、最高級 best;bad 和 badly 是 worse、worst;many/much 是 more、most;little 是 less、least。",
            "句型 The + 比較級..., the + 比較級... 表示『愈…就愈…』,例如 The more you practice, the better you become.",
            "比較範圍若是『所有當中』用最高級加 the,例如 He is the tallest of the three."
          ],
          "formula": "The + 比較級..., the + 比較級... = 愈…愈…",
          "trap": "good/bad 的比較級是不規則的 better/worse,不可說 gooder、badder;『愈…愈…』兩個子句前都要加 the。"
        },
        {
          "h": "分詞當形容詞:V-ing 主動令人 vs p.p. 被動感到",
          "points": [
            "會考最愛考『情緒動詞』的分詞怎麼選。口訣:形容『事物本身令人怎樣』用現在分詞 V-ing 表主動,例如 The movie is boring,電影本身很無聊、令人厭煩;形容『人被弄得感到怎樣』用過去分詞 p.p. 表被動,例如 I am bored,我感到無聊。同組還有 interesting 有趣的事物對 interested 感興趣的人、exciting 對 excited、surprising 對 surprised、tiring 對 tired。",
            "解題兩步驟:第一步看被形容的是『人』還是『事物』;第二步問『這東西令別人有情緒』還是『這人自己感到情緒』。令別人就用 V-ing,自己感到就用 p.p.。要注意 people、students 這種『人』通常是感到情緒,多半配 p.p.,例如 The students were excited。",
            "分詞片語放在名詞後面『後位修飾』,等於把關係子句化簡。主動用 V-ing,例如 the man standing there 就是 the man who is standing there,站在那裡的男人;被動用 p.p.,例如 the book written by him 就是 the book which was written by him,他寫的書。看到名詞後面接分詞,先判斷這名詞是自己做動作用 V-ing、還是被動作用 p.p.,就能選對。"
          ],
          "trap": "最常錯把『人』一律配 V-ing。I am boring 是『我這個人很無聊、讓別人覺得無趣』,不是『我覺得無聊』;要說『我覺得無聊』得用 I am bored。同理 She is interested in art,她對藝術有興趣,不可寫成 interesting。",
          "svg": "<svg viewBox=\"0 0 340 150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"20\" width=\"150\" height=\"110\" rx=\"8\" fill=\"#f3e7df\"/><rect x=\"178\" y=\"20\" width=\"150\" height=\"110\" rx=\"8\" fill=\"#eef4f2\"/><text x=\"87\" y=\"44\" font-size=\"15\" text-anchor=\"middle\" fill=\"#c9755c\" font-weight=\"bold\">V-ing 主動</text><text x=\"87\" y=\"70\" font-size=\"12\" text-anchor=\"middle\" fill=\"#3a342e\">事物令人…</text><text x=\"87\" y=\"92\" font-size=\"12\" text-anchor=\"middle\" fill=\"#3a342e\">boring 令人厭</text><text x=\"87\" y=\"113\" font-size=\"12\" text-anchor=\"middle\" fill=\"#3a342e\">The book is</text><text x=\"253\" y=\"44\" font-size=\"15\" text-anchor=\"middle\" fill=\"#5aa874\" font-weight=\"bold\">p.p. 被動</text><text x=\"253\" y=\"70\" font-size=\"12\" text-anchor=\"middle\" fill=\"#3a342e\">人感到…</text><text x=\"253\" y=\"92\" font-size=\"12\" text-anchor=\"middle\" fill=\"#3a342e\">bored 感到厭</text><text x=\"253\" y=\"113\" font-size=\"12\" text-anchor=\"middle\" fill=\"#3a342e\">I am</text></svg>",
          "caption": "事物令人→V-ing;人自己感到→p.p.,是會考選分詞的判斷關鍵。"
        }
      ],
      "quiz": [
        {
          "stem": "Of all the students in the class, Amy runs ___.",
          "options": [
            "more fast",
            "faster",
            "fast",
            "the fastest"
          ],
          "answer": 3,
          "explanation": "Of all the students 表三者以上的範圍,用最高級 the fastest。",
          "trap": "Of all… 是最高級訊號(範圍),不是兩者相比,故用 the fastest 而非比較級 faster。"
        },
        {
          "stem": "The weather is getting ___ these days; we can hardly go out.",
          "options": [
            "hotter and hotter",
            "hot and hot",
            "more and more hot",
            "the hottest"
          ],
          "answer": 0,
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
            "any other",
            "other",
            "any",
            "the most"
          ],
          "answer": 0,
          "explanation": "用比較級表達最高級時,須說 higher than any other mountain(比其他任何一座都高),排除自己。",
          "trap": "⚠ 主詞玉山本身也是台灣的山,比較時要排除自己,須用 any other;若只寫 any 等於說『比自己還高』邏輯矛盾。"
        },
        {
          "stem": "Although the soup smelled ___, the guests were too polite to say a single word about it.",
          "options": [
            "terribly",
            "the most terrible",
            "more terribly",
            "terrible"
          ],
          "answer": 3,
          "explanation": "smell 為連綴動詞(linking verb),後接形容詞補語修飾主詞 soup,故用 terrible。",
          "trap": "⚠ smell/taste/look/sound/feel 等感官連綴動詞後接形容詞(terrible)而非副詞(terribly);副詞只修飾一般動作動詞;此句無比較對象,不用比較級或最高級。"
        },
        {
          "stem": "The negotiations went so badly that, by midnight, both sides looked ___ exhausted to continue.",
          "options": [
            "very",
            "enough",
            "too",
            "so"
          ],
          "answer": 2,
          "explanation": "由 to continue 的不定詞可知為 too + 形容詞 + to V 句型『太…以致於不能…』:too exhausted to continue。",
          "trap": "⚠ very 只是『非常』不含『以致於不能』的否定結果;enough 須放形容詞之後(exhausted enough);so 須配 that 子句而非 to V;故選 too。"
        },
        {
          "stem": "She bought a ___ at the antique market and proudly hung it above the fireplace.",
          "options": [
            "round small wooden mirror",
            "small round wooden mirror",
            "wooden small round mirror",
            "small wooden round mirror"
          ],
          "answer": 1,
          "explanation": "形容詞排序遵循『大小→形狀→材質』:small(大小)→ round(形狀)→ wooden(材質)+ 名詞 mirror。",
          "trap": "⚠ 多個形容詞排序為 opinion-size-shape-age-colour-origin-material;此題 size(small)在 shape(round)前、material(wooden)最靠名詞,只有 small round wooden 正確。"
        },
        {
          "stem": "The lecture was so ___ that almost half of the audience felt ___ within twenty minutes.",
          "options": [
            "boring / boring",
            "bored / boring",
            "boring / bored",
            "bored / bored"
          ],
          "answer": 2,
          "explanation": "事物本身令人厭煩用 -ing(boring lecture);人感到厭煩用 -ed(audience felt bored)。",
          "trap": "⚠ -ing 形容詞描述引發感受的來源(演講 boring),-ed 形容詞描述感受者的狀態(聽眾 bored);兩格主詞不同,不可相同填法。"
        },
        {
          "stem": "I have ___ patience for excuses, so please just tell me the truth right away.",
          "options": [
            "little",
            "a few",
            "few",
            "fewer"
          ],
          "answer": 0,
          "explanation": "patience 為不可數名詞,表『幾乎沒有』用 little(無冠詞,帶否定意味)。",
          "trap": "⚠ few/a few 修飾可數複數,little/a little 修飾不可數;patience 不可數須用 little;無 a 的 little 表『幾乎沒有』,語境(別找藉口)正符此否定語氣。"
        },
        {
          "stem": "Of the two routes to the summit, the eastern one is by far ___, though it offers fewer rest stops.",
          "options": [
            "more safe",
            "safer",
            "the safest",
            "the safer"
          ],
          "answer": 3,
          "explanation": "兩者之間且有 of the two 限定範圍,用 the + 比較級 the safer;by far 加強比較級。",
          "trap": "⚠ 兩者比較不可用最高級 the safest;但因 of the two 特指其中『較…的那個』須加 the;safe 短形容詞作 safer 非 more safe;故選 the safer。"
        },
        {
          "stem": "___ had the referee blown the whistle ___ the crowd burst into cheers.",
          "options": [
            "No sooner / when",
            "Hardly / than",
            "No sooner / than",
            "Scarcely / then"
          ],
          "answer": 2,
          "explanation": "No sooner... than... 表『一…就…』,且 No sooner 置句首須倒裝(had the referee);搭配 than。",
          "trap": "⚠ No sooner 固定配 than(不配 when);Hardly/Scarcely 才配 when(非 than 或 then);故 A、B、D 的連接詞搭配皆錯,選 No sooner...than。"
        },
        {
          "stem": "The witness described the suspect as a man in his ___ wearing a torn jacket.",
          "options": [
            "thirty",
            "thirties",
            "thirty's",
            "thirtieth"
          ],
          "answer": 1,
          "explanation": "in one's thirties 表『三十幾歲』,固定用複數 thirties。",
          "trap": "⚠ 表『某人幾十歲』用 in one's + 整十數的複數(thirties/forties);thirty 單數、thirtieth 序數、thirty's 所有格皆不合此固定用法。"
        },
        {
          "stem": "The more advanced the technology becomes, ___ it seems to be for ordinary users to keep up.",
          "options": [
            "the hardest",
            "harder",
            "the more hard",
            "the harder"
          ],
          "answer": 3,
          "explanation": "The + 比較級..., the + 比較級... 句型;hard 短形容詞比較級為 harder,前加 the。",
          "trap": "⚠ 此句型後半也必須是 the + 比較級;hard→harder(非 more hard);非三者比較不用最高級 the hardest;故選 the harder。"
        },
        {
          "stem": "Despite years of training, he could ___ finish the marathon, collapsing just past the finish line.",
          "options": [
            "hardly",
            "nearly hard",
            "hard",
            "almost hardly"
          ],
          "answer": 0,
          "explanation": "語境表『勉強才能完成』含否定意味,用副詞 hardly(幾乎不/勉強)修飾動詞 finish。",
          "trap": "⚠ hard(努力地)與 hardly(幾乎不)意義完全不同;此處需『差點不能/勉強』之否定副詞 hardly;hard 作副詞意為『努力』與『癱倒在終點』語境矛盾。"
        },
        {
          "stem": "The new policy affected ___ every department, leaving managers scrambling to adjust their budgets.",
          "options": [
            "near",
            "close",
            "nearly",
            "hardly"
          ],
          "answer": 2,
          "explanation": "修飾 every(幾乎每一個)用副詞 nearly(=almost);nearly every department。",
          "trap": "⚠ near 多作介系詞/形容詞表『靠近』,修飾 every 表『幾乎』須用副詞 nearly;hardly 為否定『幾乎不』語意相反;close 不能這樣修飾 every。"
        },
        {
          "stem": "Her explanation was ___ clear; not a single student raised a hand to ask a question afterward.",
          "options": [
            "absolutely",
            "perfectly",
            "more perfect",
            "very perfectly"
          ],
          "answer": 1,
          "explanation": "perfectly clear 為固定搭配,perfectly 作副詞加強 clear(完全清楚);語境支持『毫無疑問』。",
          "trap": "⚠ clear 為可分級形容詞,常用 perfectly clear 表『十分清楚』;absolutely 多修飾不可分級形容詞(如 absolutely perfect);very perfectly 副詞疊用、more perfect 與語境(無人提問=很清楚)不符。"
        },
        {
          "stem": "This museum holds ___ artifacts than any other in the country, drawing scholars from around the world.",
          "options": [
            "far more valuable",
            "much more valuable",
            "many more valuable",
            "the most valuable"
          ],
          "answer": 0,
          "explanation": "artifacts 為可數複數,『更多有價值的文物』用 more valuable artifacts,前加 far 加強比較級;有 than 故非最高級。",
          "trap": "⚠ 此處比較的是『數量更多的文物』,more 修飾可數複數,加強詞須用 far/many more 形式;much 修飾不可數量,與可數 artifacts 不符;有 than any other 仍是比較級結構,故選 far more valuable。"
        },
        {
          "stem": "The harder the climbers pushed upward, ___ the air became, forcing them to rest more often.",
          "options": [
            "thinner",
            "the thinner",
            "the thinnest",
            "the more thin"
          ],
          "answer": 1,
          "explanation": "The + 比較級..., the + 比較級...;thin 短形容詞比較級為 thinner(雙寫 n),前加 the。",
          "trap": "⚠ 後半子句也須 the + 比較級;thin→thinner(子音字母雙寫加 er),非 more thin;兩量同步變化非三者比較,不用最高級 thinnest。"
        },
        {
          "stem": "He is ___ a careful driver that he has never received even a single parking ticket in twenty years.",
          "options": [
            "very",
            "so",
            "such",
            "too"
          ],
          "answer": 2,
          "explanation": "such + a/an + (形容詞) + 單數名詞 + that...;此處有名詞 driver,故用 such a careful driver。",
          "trap": "⚠ so + 形容詞/副詞 + that,但 such + (a) + 形容詞 + 名詞 + that;本句核心是名詞 driver,須用 such;若改 so 須寫 so careful a driver 才合文法。"
        },
        {
          "stem": "Among all the proposals submitted, hers was ___ practical, which is why the committee adopted it at once.",
          "options": [
            "as",
            "the more",
            "more",
            "by far the most"
          ],
          "answer": 3,
          "explanation": "Among all 表多者範圍用最高級;practical 長形容詞用 the most practical,by far 加強最高級。",
          "trap": "⚠ Among all the proposals 是最高級訊號;by far 雖也修飾比較級,但此處範圍為『所有提案』須用最高級;more/the more 為兩者比較、as 為同級,皆不合。"
        },
        {
          "stem": "The two brothers are equally talented, but the younger one works ___ than the elder.",
          "options": [
            "more diligent",
            "the most diligently",
            "as diligently",
            "more diligently"
          ],
          "answer": 3,
          "explanation": "修飾動詞 works 用副詞;diligently 為長副詞,比較級用 more diligently;有 than 為比較級。",
          "trap": "⚠ 修飾動作 works 須用副詞 diligently 非形容詞 diligent;long 副詞比較級加 more;有 than 不用最高級 the most diligently,也非同級 as diligently。"
        },
        {
          "stem": "There were ___ chairs in the hall than expected, so dozens of guests had to stand throughout the ceremony.",
          "options": [
            "less",
            "the fewest",
            "fewer",
            "little"
          ],
          "answer": 2,
          "explanation": "chairs 為可數複數,『較少』用 fewer;有 than 為比較級。",
          "trap": "⚠ 可數名詞(chairs)用 fewer,不可數才用 less;有 than 為兩相比較不用最高級 the fewest;little 修飾不可數且非比較級,皆不合。"
        },
        {
          "stem": "The candidate spoke ___ confidently during the debate that even her rivals nodded in agreement.",
          "options": [
            "so",
            "very",
            "such",
            "too"
          ],
          "answer": 0,
          "explanation": "so + 副詞 + that 句型;confidently 為副詞修飾 spoke,故用 so confidently that...。",
          "trap": "⚠ 此處 confidently 為修飾動詞的副詞,須用 so(so + 副詞 + that);such 須接名詞;very 不引導 that 結果子句;too 表否定結果與語境(對手點頭認同)不符。"
        },
        {
          "stem": "No matter how ___ the instructions were written, several customers still assembled the shelf upside down.",
          "options": [
            "clear",
            "clearly",
            "more clearly",
            "the most clearly"
          ],
          "answer": 1,
          "explanation": "No matter how + 副詞/形容詞...;此處修飾被動動詞 were written,須用副詞 clearly。",
          "trap": "⚠ 形容詞與副詞之別:修飾『how + 動詞(were written)』須用副詞 clearly 不用形容詞 clear;No matter how 後接原級,不用比較級或最高級。"
        },
        {
          "stem": "The deeper the divers descended, ___ they could see, until total darkness surrounded them.",
          "options": [
            "the fewer",
            "less",
            "the less",
            "the least"
          ],
          "answer": 2,
          "explanation": "see 此處指可見的『程度/範圍』為不可數概念,『愈少』用 less;the + 比較級句型須加 the。",
          "trap": "⚠ the more..., the less... 句型後半須 the + 比較級;『能見度』為不可數用 less 不用可數的 fewer;兩量同步變化非三者比較,不用最高級 the least。"
        },
        {
          "stem": "My new phone is ___ than my old one, so it's easy to carry around all day.",
          "options": [
            "light",
            "lighter",
            "more light",
            "lightest"
          ],
          "answer": 1,
          "explanation": "句中有 than 表兩者相比,須用比較級;light 為短形容詞,比較級直接加 -er 成 lighter。"
        },
        {
          "stem": "Of all the dishes on the menu, this seafood pasta is ___.",
          "options": [
            "expensive",
            "more expensive",
            "most expensive",
            "the most expensive"
          ],
          "answer": 3,
          "explanation": "Of all the dishes 表三者以上的範圍,用最高級;expensive 為長形容詞,最高級為 the most expensive,且最高級前須加 the。"
        },
        {
          "stem": "After months of training, Nina can now run ___ her older brother in the school relay.",
          "options": [
            "as faster as",
            "as fast as",
            "so fast as",
            "as fastly as"
          ],
          "answer": 1,
          "explanation": "兩者程度相同用 as + 原級 + as;此處修飾動詞 run 需副詞,而 fast 形容詞與副詞同形,故用 as fast as。",
          "trap": "as...as 中間只能放原級,不可放比較級 faster;fast 的副詞就是 fast,沒有 fastly;肯定句用 as...as,不用 so...as。"
        },
        {
          "stem": "The second interview turned out to be ___ stressful than the first, which is why she felt calm enough to smile the whole time.",
          "options": [
            "much more",
            "less",
            "the least",
            "as"
          ],
          "answer": 1,
          "explanation": "由『冷靜到能全程微笑』可推知第二次比較不緊張;表『比較不…』用 less + 形容詞 + than,故為 less stressful than。",
          "trap": "更緊張(more stressful)與『冷靜微笑』語意矛盾;最高級 the least 後不接 than;as 須配 as 而非 than;唯有 less...than 合乎文意與文法。"
        },
        {
          "stem": "The new stadium can hold ___ people as the old one, which is exactly why the city decided to build it.",
          "options": [
            "as twice many",
            "twice as much",
            "as many twice",
            "twice as many"
          ],
          "answer": 3,
          "explanation": "倍數比較的語序為『倍數詞 + as + 原級 + as』;people 為可數複數,原級用 many,故為 twice as many people as。",
          "trap": "倍數詞 twice 要放在 as...as 之前,不能插進中間;people 可數要用 many 而非不可數的 much,故只有 twice as many 正確。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">時間介系詞 範圍由大到小</text><rect x=\"20\" y=\"40\" width=\"280\" height=\"110\" rx=\"6\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"34\" y=\"58\" fill=\"#5aa874\" font-size=\"12\">in</text><text x=\"60\" y=\"58\" fill=\"#3a342e\" font-size=\"10\">月/年/季 (in May, in 2025)</text><rect x=\"50\" y=\"68\" width=\"230\" height=\"72\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><text x=\"64\" y=\"86\" fill=\"#c9755c\" font-size=\"12\">on</text><text x=\"90\" y=\"86\" fill=\"#3a342e\" font-size=\"10\">日期/星期 (on Monday)</text><rect x=\"80\" y=\"96\" width=\"180\" height=\"38\" rx=\"6\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"94\" y=\"120\" fill=\"#3a342e\" font-size=\"12\">at</text><text x=\"120\" y=\"120\" fill=\"#3a342e\" font-size=\"10\">鐘點 (at 7, at noon)</text><text x=\"160\" y=\"170\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">by=期限 / until=持續</text></svg>",
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
          "svg": "<svg viewBox=\"0 0 400 210\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"200\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\">地點介系詞 in / on / at</text><rect x=\"40\" y=\"45\" width=\"90\" height=\"60\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><circle cx=\"85\" cy=\"75\" r=\"12\" fill=\"#5aa874\"/><text x=\"85\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">in 內部</text><text x=\"85\" y=\"137\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#3a342e\">in the box</text><line x1=\"160\" y1=\"95\" x2=\"245\" y2=\"95\" stroke=\"#3a342e\" stroke-width=\"2\"/><rect x=\"180\" y=\"75\" width=\"45\" height=\"20\" fill=\"#c9755c\"/><text x=\"200\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">on 表面</text><text x=\"200\" y=\"137\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#3a342e\">on the desk</text><circle cx=\"320\" cy=\"80\" r=\"6\" fill=\"#f0a52e\"/><text x=\"320\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\">at 一點</text><text x=\"320\" y=\"137\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#3a342e\">at the door</text><line x1=\"30\" y1=\"155\" x2=\"370\" y2=\"155\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"200\" y=\"176\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">固定搭配:arrive at(小地方)/ in(大城市)</text><text x=\"200\" y=\"196\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">be good at, interested in, famous for</text></svg>",
          "caption": "in 內部、on 接觸表面、at 視為一個點"
        },
        {
          "h": "動態方向介系詞 to / into / through",
          "points": [
            "to 表示移動的『目的地、終點』,例如 go to school、walk to the station。",
            "into 表示『進入內部』,out of 表示『從裡面出來』,例如 He walked into the room.、She ran out of the house.",
            "through 表示『穿過、貫穿』,across 表示『橫越表面』,例如 walk through the forest、swim across the river。"
          ],
          "trap": "中式英文常漏掉 to:正確 go to school,但 go home 是例外,home 當副詞時前面不加 to(不可說 go to home)。"
        },
        {
          "h": "表期間的 for / during / since",
          "points": [
            "for 後接『一段時間長度』,例如 I have studied for two hours.;during 後接『某個時段或事件名稱』,例如 during the summer、during the meeting。",
            "since 後接『起始時間點』,常和現在完成式連用,例如 I have lived here since 2020.",
            "問時間長度用 How long...,例如 How long have you been here?"
          ],
          "formula": "for + 一段時間;since + 時間點;during + 時段/事件",
          "trap": "for 和 during 別搞混:『for two hours(時間長度)』vs『during the movie(某事件期間)』;since 配完成式,不可說 since two hours。"
        },
        {
          "h": "常考介系詞搭配與片語動詞",
          "points": [
            "固定搭配要整組背:be afraid of(害怕)、be famous for(以…聞名)、be proud of(以…自豪)、be late for(遲到)。",
            "片語動詞的介系詞改變意思:look for(尋找)、look after(照顧)、look up(查字典)。",
            "表方式或工具用 by 或 with,例如 go by bus(搭公車)、write with a pen(用筆寫)。"
          ],
          "trap": "搭乘交通工具用 by 且不加冠詞:by bus、by train;但若強調『特定那台』改用 on,如 on the bus;write 用工具是 with a pen 不是 by a pen。"
        }
      ],
      "quiz": [
        {
          "stem": "Please hand in your report ___ Friday; the teacher won't accept it later.",
          "options": [
            "until",
            "in",
            "at",
            "by"
          ],
          "answer": 3,
          "explanation": "『最晚在週五之前交出』表期限,用 by Friday。",
          "trap": "by(期限)vs until(持續):交報告是一次性動作有截止日,用 by;until 用於『持續到某時』如 wait until。"
        },
        {
          "stem": "My little sister is afraid ___ the dark and never sleeps without a light.",
          "options": [
            "with",
            "at",
            "of",
            "for"
          ],
          "answer": 2,
          "explanation": "固定片語 be afraid of(害怕),介系詞為 of。",
          "trap": "be afraid of 是固定搭配,介系詞不能換;靠片語記憶,不能照中文『對黑暗』翻成 at。"
        },
        {
          "stem": "The famous singer was born ___ a small village ___ the morning of a cold winter day.",
          "options": [
            "in / on",
            "at / in",
            "in / at",
            "on / in"
          ],
          "answer": 0,
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
        },
        {
          "stem": "The heavy rain prevented the rescue team ___ reaching the village ___ time, so the supplies arrived a day late.",
          "options": [
            "from / in",
            "of / on",
            "from / on",
            "for / in"
          ],
          "answer": 0,
          "explanation": "prevent sb from V-ing(阻止某人做某事)用 from;in time 表『及時、來得及』;supplies 遲到一天正是『沒能及時』的結果。",
          "trap": "⚠ in time(及時、趕得上)≠ on time(準時、按表定時間);此處強調『來不及』故用 in time;prevent 後固定接 from + V-ing,不可換 of。"
        },
        {
          "stem": "He was accused ___ stealing the money, but ___ the end the real thief turned out to be the manager ___ charge of the safe.",
          "options": [
            "of / at / in",
            "for / at / of",
            "of / in / in",
            "with / in / of"
          ],
          "answer": 2,
          "explanation": "be accused of(被指控)用 of;in the end(最後、終究)是固定片語;be in charge of(負責、掌管)用 in。",
          "trap": "⚠ in the end(最終、結果)≠ at the end of(在…末端);accuse of 不可換 for(blame sb for 才用 for);in charge of 三字一組記。"
        },
        {
          "stem": "___ behalf of the whole class, I'd like to thank you ___ everything you've done for us ___ the past three years.",
          "options": [
            "For / for / in",
            "In / of / for",
            "On / about / since",
            "On / for / over"
          ],
          "answer": 3,
          "explanation": "on behalf of(代表)用 on;thank sb for sth 用 for;over the past three years(在過去三年間)表一段延續期間用 over。",
          "trap": "⚠ on behalf of 固定用 on,非 in/for;表『過去這幾年間』與 the past...years 搭配 over 最自然;since 須接時間點,接時段不可用。"
        },
        {
          "stem": "___ spite of the bad weather, the marathon went on, and runners kept going ___ the finish line ___ exhaustion.",
          "options": [
            "Despite / to / in spite of",
            "In / toward / despite",
            "In / for / despite",
            "On / toward / against"
          ],
          "answer": 1,
          "explanation": "in spite of(儘管)用 in;跑『朝向』終點線用 toward;第三空『不顧筋疲力盡』後接名詞 exhaustion,用 despite。",
          "trap": "⚠ in spite of 與 despite 同義但結構不同:in spite OF(三字含 of)vs despite(本身即介系詞,後不加 of);第三空後接名詞 exhaustion 須用 despite,不可再用 in spite。"
        },
        {
          "stem": "The new bridge is ___ construction now; ___ its completion, drivers must take the old road ___ the river.",
          "options": [
            "in / by / across",
            "on / for / over",
            "under / until / along",
            "under / by / along"
          ],
          "answer": 2,
          "explanation": "under construction(施工中)為固定片語;until its completion(直到完工為止)表持續用 until;沿著河(平行於河岸)走老路用 along。",
          "trap": "⚠ under construction 固定用 under,非 in/on;until(持續到某時點)強調『在完工前一直』,by(期限)語意不符;沿著河岸用 along,across 是橫越過河。"
        },
        {
          "stem": "This phone is far superior ___ that one ___ terms of battery life, though it costs ___ a hundred dollars more.",
          "options": [
            "from / in / over",
            "than / of / about",
            "to / on / above",
            "to / in / over"
          ],
          "answer": 3,
          "explanation": "be superior to(優於)用 to,非 than;in terms of(就…而言)固定片語;『多出一百多美元』表超過某數量用 over。",
          "trap": "⚠ superior/inferior/prior/senior 等拉丁比較字後一律用 to,絕不用 than;in terms of 整組記;over a hundred(超過一百)用 over,above 多指高度位置。"
        },
        {
          "stem": "We all agreed ___ the plan, but couldn't agree ___ who should lead it, so we agreed ___ the manager to decide.",
          "options": [
            "to / on / with",
            "with / to / on",
            "on / with / to",
            "to / with / on"
          ],
          "answer": 0,
          "explanation": "agree to + 提案/計畫(同意接受)用 to;agree on + 議題(對某點達成共識)用 on;agree with + 人(同意某人)用 with。",
          "trap": "⚠ agree 三種搭配考點:agree TO a plan(接受方案)、agree ON a point(就某議題取得共識)、agree WITH a person(贊同某人);依受詞性質分辨,最易混。"
        },
        {
          "stem": "Instead ___ taking the bus, she decided to go ___ foot, which turned out to be faster ___ rush hour.",
          "options": [
            "for / on / during",
            "of / on / during",
            "of / by / at",
            "to / by / in"
          ],
          "answer": 1,
          "explanation": "instead of(而非)用 of;on foot(步行)固定片語;during rush hour(在尖峰時段)用 during + 名詞。",
          "trap": "⚠ instead of 後接名詞/動名詞用 of;『步行』是 on foot 而非 by foot(交通工具才用 by);during 後接名詞(rush hour),若接子句才用 while。"
        },
        {
          "stem": "The flight was delayed ___ three hours ___ to the storm, and passengers had to wait ___ the gate ___ midnight.",
          "options": [
            "by / due / at / until",
            "for / owing / in / by",
            "by / because / on / until",
            "of / due / at / by"
          ],
          "answer": 0,
          "explanation": "delayed by three hours(延誤達三小時,表幅度)用 by;due to(由於)固定片語;在登機門(視為一點)用 at the gate;『等到午夜』表持續用 until。",
          "trap": "⚠ delay BY three hours(延誤的『時間量』用 by)易誤填 for;due to 須與 to 搭配(因 to the storm);wait at the gate(把門當點);until midnight(一直等到)不用 by(by 是期限不含『持續等待』語意)。"
        },
        {
          "stem": "Regardless ___ the cost, they insisted ___ buying the best equipment, hoping it would pay ___ ___ the long run.",
          "options": [
            "of / in / off / at",
            "for / in / back / on",
            "of / on / off / in",
            "to / on / out / in"
          ],
          "answer": 2,
          "explanation": "regardless of(不論、無視)用 of;insist on V-ing(堅持)用 on;pay off(獲得回報、值得)為片語動詞;in the long run(長遠來看)固定片語。",
          "trap": "⚠ regardless of 固定用 of;insist on 不可換 in;pay off=(投資/努力)有回報,別填 pay back(償還);in the long run(長期而言)用 in,非 at。"
        },
        {
          "stem": "The library stays open ___ the clock during exams, so students can study there ___ any hour ___ the night.",
          "options": [
            "about / at / of",
            "round / in / in",
            "over / on / of",
            "around / at / of"
          ],
          "answer": 3,
          "explanation": "around the clock(全天候、24 小時)固定片語;at any hour(在任何鐘點)用 at;at any hour of the night(夜裡任何時刻)用 of 修飾。",
          "trap": "⚠ around the clock=日夜不停,別照字面填 over/about;鐘點/時刻用 at any hour;『夜裡的』用 of the night(of 表所屬),不用 in the night 直接接。"
        },
        {
          "stem": "Apart ___ being expensive, the hotel was ___ walking distance ___ the beach, which made it popular ___ tourists.",
          "options": [
            "from / within / to / for",
            "from / within / of / with",
            "from / in / to / among",
            "of / in / from / for"
          ],
          "answer": 1,
          "explanation": "apart from(除…之外)用 from;within walking distance of(在步行可達範圍內)固定搭配,distance OF the beach 用 of;be popular with(受…歡迎)用 with。",
          "trap": "⚠ within walking distance OF(距離某地用 of)易誤填 to/from;be popular WITH sb(受某群人歡迎)用 with,不用 for/among;apart from 與 except for 義近但介系詞不同。"
        },
        {
          "stem": "The boss objected ___ the proposal and was opposed ___ any change, so the team had to give ___ the idea ___ a while.",
          "options": [
            "against / to / in / for",
            "on / to / up / for",
            "to / against / up / since",
            "to / to / up / for"
          ],
          "answer": 3,
          "explanation": "object to(反對)用 to;be opposed to(反對)用 to;give up(放棄)片語動詞;『放棄一陣子』表持續一段時間用 for a while。",
          "trap": "⚠ object TO 與 be opposed TO 都用 to(不可用 against,雖中文都是『反對』);give up=放棄;for a while(一段時間)用 for,不可用 since。"
        },
        {
          "stem": "The temperature here stays ___ zero all winter, and snow lies ___ the ground ___ months ___ a time.",
          "options": [
            "below / on / since / in",
            "under / in / since / at",
            "below / on / for / at",
            "beneath / on / for / on"
          ],
          "answer": 2,
          "explanation": "below zero(零度以下)用 below;snow on the ground(雪覆蓋地面)用 on;for months(持續數月)用 for;for months at a time(一次連續數月)用 at a time。",
          "trap": "⚠ below zero(刻度/數值之下)用 below 而非 under;雪在地『面』上用 on the ground;for...at a time(一次連續…之久)是固定結構,別用 in/since。"
        },
        {
          "stem": "___ addition to English, she speaks French, and ___ means of an online app she is now learning Japanese ___ her own.",
          "options": [
            "In / by / on",
            "On / with / by",
            "In / with / on",
            "On / by / on"
          ],
          "answer": 0,
          "explanation": "in addition to(除…之外還)用 in;by means of(藉由…手段)固定片語用 by;on one's own(獨自、靠自己)固定片語用 on。",
          "trap": "⚠ in addition to(此外還有,語氣為附加)用 in;by means of(透過某方法)整組記,不可用 with means;on one's own=獨力,用 on 不用 by。"
        },
        {
          "stem": "The witness swore that ___ no circumstances had he seen the suspect, who was ___ doubt somewhere else ___ the time of the crime.",
          "options": [
            "on / without / at",
            "under / without / at",
            "under / beyond / in",
            "in / beyond / on"
          ],
          "answer": 1,
          "explanation": "under no circumstances(在任何情況下都不)固定片語;without doubt(無疑地)用 without;at the time of(在…的時刻)用 at。",
          "trap": "⚠ under no circumstances 固定用 under(且為倒裝句 had he seen);without doubt(無疑)用 without;at the time of 用 at,不用 on/in。"
        },
        {
          "stem": "He is senior ___ me ___ rank, but ___ comparison ___ his predecessor, he is far less experienced.",
          "options": [
            "to / in / in / with",
            "than / on / by / to",
            "to / on / in / to",
            "than / in / by / with"
          ],
          "answer": 0,
          "explanation": "be senior to(資歷/地位高於)用 to;in rank(在職級上)用 in;in comparison with(與…相比)固定片語用 with。",
          "trap": "⚠ senior to 同 superior to,後用 to 不用 than;in comparison WITH(與…比較)用 with;別把 senior 當一般形容詞接 than。"
        },
        {
          "stem": "The factory was shut down ___ safety reasons, throwing hundreds ___ work, which led ___ protests ___ the streets.",
          "options": [
            "for / out of / in / on",
            "of / off / in / on",
            "for / out of / to / in",
            "by / out of / to / in"
          ],
          "answer": 2,
          "explanation": "for safety reasons(基於安全考量)用 for;out of work(失業)固定片語;lead to(導致)用 to;protests in the streets(在街上抗議)用 in。",
          "trap": "⚠ for...reasons(基於…原因)用 for;out of work=失業(out of 表脫離狀態),別填 off;lead to(導致)用 to 不可省;『在街上』用 in the streets。"
        },
        {
          "stem": "Thanks ___ everyone's effort, the project was finished ahead ___ schedule and well ___ budget, much ___ the boss's delight.",
          "options": [
            "for / of / under / to",
            "for / of / in / for",
            "to / to / within / for",
            "to / of / within / to"
          ],
          "answer": 3,
          "explanation": "thanks to(多虧、由於)用 to;ahead of schedule(提前)用 of;within budget(在預算內)用 within;much to one's delight(令某人非常高興的是)固定句型用 to。",
          "trap": "⚠ thanks to(歸功於/由於)用 to,非 for;ahead OF schedule 用 of;within budget(預算之內)用 within;『much to one's + 情緒名詞』是固定句型,用 to。"
        },
        {
          "stem": "The two countries finally came ___ an agreement ___ years of talks, putting ___ end ___ the long conflict.",
          "options": [
            "into / for / the / of",
            "to / after / an / to",
            "to / since / an / of",
            "into / after / the / to"
          ],
          "answer": 1,
          "explanation": "come to an agreement(達成協議)用 to;after years of talks(歷經數年談判後)用 after;put an end to(結束、終止)固定片語,end 後用 to。",
          "trap": "⚠ come TO an agreement(達成)用 to,易誤 into;put an end TO sth(終結某事)固定用 to,不可用 of;after(在…之後)表歷時數年後,別填 since。"
        },
        {
          "stem": "The scientist devoted her whole life ___ research, and ___ her dedication we now benefit ___ many of her discoveries.",
          "options": [
            "to / because of / of",
            "for / due / of",
            "to / thanks to / from",
            "on / thanks to / from"
          ],
          "answer": 2,
          "explanation": "devote...to(致力於、奉獻給)用 to;thanks to(多虧)用 to;benefit from(從…受益)用 from。",
          "trap": "⚠ devote...to + V-ing/名詞(奉獻於)用 to,易誤填 for;『多虧她的奉獻』用 thanks to(後接名詞);benefit FROM(受益於某來源)用 from,不用 of。"
        },
        {
          "stem": "Our new English teacher is very good ___ telling funny stories, so nobody ever falls asleep in her class.",
          "options": [
            "for",
            "of",
            "with",
            "at"
          ],
          "answer": 3,
          "explanation": "固定搭配 be good at(擅長)後接名詞或動名詞,telling stories 用 at。"
        },
        {
          "stem": "The old town of Lukang is famous ___ its traditional snacks and beautiful temples.",
          "options": [
            "for",
            "of",
            "at",
            "with"
          ],
          "answer": 0,
          "explanation": "固定搭配 be famous for(以…聞名)後接使其出名的事物,介系詞為 for。"
        },
        {
          "stem": "The manager was proud ___ his team; ___ the end, their hard work paid off, and they finished the big project ___ time despite the very tight schedule.",
          "options": [
            "of / at / in",
            "for / in / on",
            "with / in / on",
            "of / in / on"
          ],
          "answer": 3,
          "explanation": "be proud of(以…自豪)用 of;in the end(最終、結果)是固定片語;on time 表『按表定時間、準時完成』,配合『儘管時程很趕仍如期完成』的語意。",
          "trap": "⚠ in the end(最終)≠ at the end of(在…末端,需加 of);on time(準時、按進度)≠ in time(及時、趕得上);proud 後固定接 of,不可換成 for。"
        },
        {
          "stem": "A thief broke ___ the museum late at night and escaped ___ a small window at the back before the guards arrived.",
          "options": [
            "into / into",
            "in / through",
            "into / through",
            "through / into"
          ],
          "answer": 2,
          "explanation": "break into + 地點表『闖入(建築內部)』用 into;從窗戶這個開口逃走是『穿過』,用 through。",
          "trap": "⚠ break in 不接受詞,一旦後面接地點(the museum)就要用 break into;逃出時是穿越窗戶開口用 through,不是 into(進入)。"
        },
        {
          "stem": "We went to the beach ___ bus, and we swam in the sea almost every day ___ the summer vacation.",
          "options": [
            "on / for",
            "with / during",
            "by / during",
            "by / for"
          ],
          "answer": 2,
          "explanation": "表交通工具用 by 且不加冠詞,by bus;during 後接某個時段或事件(the summer vacation),表『在這段期間內』。",
          "trap": "⚠ 交通工具 by bus 不加冠詞(≠ on the bus 指特定那台);during 接時段/事件(the summer vacation),for 則接純時間長度(如 for two weeks),此處接的是特定假期故用 during。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">情態動詞 + 原形動詞</text><rect x=\"40\" y=\"40\" width=\"100\" height=\"34\" rx=\"4\" fill=\"#c9755c\" opacity=\"0.85\"/><text x=\"90\" y=\"61\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"12\">must</text><rect x=\"180\" y=\"40\" width=\"100\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"230\" y=\"61\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"12\">go (原形)</text><line x1=\"140\" y1=\"57\" x2=\"180\" y2=\"57\" stroke=\"#5aa874\" stroke-width=\"2\"/><polygon points=\"180,57 172,53 172,61\" fill=\"#5aa874\"/><text x=\"160\" y=\"92\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">後接原形, 不加 to / -s</text><rect x=\"20\" y=\"105\" width=\"140\" height=\"55\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"90\" y=\"125\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"11\">must not</text><text x=\"90\" y=\"145\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">禁止 (不可)</text><rect x=\"170\" y=\"105\" width=\"140\" height=\"55\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"240\" y=\"125\" text-anchor=\"middle\" fill=\"#5aa874\" font-size=\"11\">do not have to</text><text x=\"240\" y=\"145\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">不必 (沒必要)</text></svg>",
          "caption": "情態動詞後一律接原形",
          "points": [
            "must=必須/一定;have to=必須(外在規定);should=應該;had better=最好(否則有後果)。",
            "can/could=能力、許可;may/might=可能、許可;would rather=寧願。",
            "情態動詞後接原形動詞,沒有時態變化(no -s)。"
          ],
          "trap": "must not=禁止(強烈)、don't have to=不必(沒必要),兩者意思完全不同;情態動詞後一律接原形,別加 to 或 -s。"
        },
        {
          "h": "否定的語意差:must not vs don't have to",
          "points": [
            "must not(mustn't)表『禁止、絕對不可以』:You must not park here(這裡禁止停車)。",
            "don't have to / doesn't have to 表『不必、沒有必要』,可做可不做:You don't have to come if you are busy(不必來)。",
            "兩者中文常都翻成『不用』,語意卻天差地遠:一個是禁止,一個是免除義務。"
          ],
          "formula": "must not + 原形 V(禁止) / don't have to + 原形 V(不必)",
          "trap": "想說『你不必這麼做』卻寫成 You must not do it,意思變成『你不准做』;『不必』要用 don't have to,別混淆。"
        },
        {
          "h": "推測的可能性:must / may / might / can't",
          "points": [
            "對現在事實『很有把握的推測』用 must be:She must be tired; she worked all day(她一定很累)。",
            "不太確定、可能性較低用 may be / might be:He may be at home, but I am not sure(他可能在家)。",
            "推測『不可能』時用 can't be,不用 mustn't:He can't be the thief; he was with me(他不可能是小偷)。"
          ],
          "formula": "S + must / may / might / can't + be + …(對現況的推測)",
          "trap": "表『一定不是、不可能』要用 can't,不能用 mustn't(那是禁止);另外 must be 是把握高的推測,別誤以為它只能表『必須』。"
        },
        {
          "h": "過去的能力與請求:could / would",
          "points": [
            "could 是 can 的過去式,表過去的能力:When I was five, I could swim(五歲時就會游泳)。",
            "禮貌地請求或詢問時,用 Could you…? / Would you…? 比 Can you…? 更客氣:Could you help me, please?",
            "would 也可表過去習慣性的動作(=used to):When we were young, we would play by the river every summer。"
          ],
          "formula": "could / would + 原形 V(過去能力、禮貌請求、過去習慣)",
          "trap": "情態動詞後一律接原形:錯 could to swim、would playing,正確是 could swim、would play;請求對方時 Could you 比直白的 Can you 更得體。"
        },
        {
          "h": "建議與義務的強弱:should vs ought to vs had better",
          "points": [
            "should 與 ought to 語意接近,都表『應該、建議』:You should see a doctor、You ought to see a doctor(該去看醫生)。",
            "had better(常縮寫 'd better)語氣更強,帶『否則會有壞後果』的警告:You had better hurry, or you will miss the bus。",
            "had better 的否定是 had better not,直接放在原形動詞前:You had better not be late。"
          ],
          "formula": "should / ought to / had better (+ not) + 原形 V",
          "trap": "had better 雖含 had,指的卻是『現在或未來』的建議,不是過去;否定是 had better not,別寫成 had not better;ought 後面要有 to(ought to go),這點和其他情態動詞不同。"
        }
      ],
      "quiz": [
        {
          "stem": "You ___ touch that wire! It's extremely dangerous and could kill you.",
          "options": [
            "don't have to",
            "needn't",
            "may not have to",
            "must not"
          ],
          "answer": 3,
          "explanation": "extremely dangerous 表『嚴禁』,用 must not(禁止)。",
          "trap": "must not=禁止,don't have to=不必(沒必要);此句是危險警告須用禁止,別把『不必』誤當『不可』。"
        },
        {
          "stem": "It ___ rain later; you'd better take an umbrella just in case.",
          "options": [
            "must",
            "should",
            "might",
            "can"
          ],
          "answer": 2,
          "explanation": "just in case(以防萬一)表不確定的可能性,用 might(也許會)。",
          "trap": "might 表『可能、不確定』;must 表『一定』語氣太強,與 just in case 的猜測語氣不符。"
        },
        {
          "stem": "You ___ have told me about the meeting earlier; now I've missed it completely.",
          "options": [
            "should",
            "would",
            "can",
            "must"
          ],
          "answer": 0,
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
        },
        {
          "stem": "A: \"I knocked for ten minutes but nobody answered.\" B: \"They ___ been out; their car wasn't in the driveway either.\"",
          "options": [
            "needn't have",
            "can't have",
            "should have",
            "must have"
          ],
          "answer": 3,
          "explanation": "由『沒人應門』且『車也不在』兩項證據,對過去做有把握的肯定推測,用 must have been(一定是出去了)。",
          "trap": "⚠ must have p.p.=對過去的肯定推測;can't have 是『不可能』語意相反,證據都指向他們出門了,故用 must have。"
        },
        {
          "stem": "The report is due tomorrow morning, so you ___ stay up all night if you start now—you still have plenty of time.",
          "options": [
            "don't have to",
            "mustn't",
            "had better",
            "couldn't"
          ],
          "answer": 0,
          "explanation": "後句『還有很多時間』表示『沒必要』熬夜,用 don't have to(不必)。",
          "trap": "⚠ mustn't=禁止(不可),don't have to=不必(沒必要);此處是說沒必要熬夜而非禁止熬夜,別把『不必』誤填成『不可』。"
        },
        {
          "stem": "She speaks French so fluently that she ___ have lived in Paris for years.",
          "options": [
            "might not",
            "can't",
            "must",
            "needn't"
          ],
          "answer": 2,
          "explanation": "由『法語極流利』這項證據做肯定推測,用 must have lived(一定曾住過)。",
          "trap": "⚠ 流利暗示確曾久居,用 must have;can't have(不可能住過)與證據矛盾,might not(也許沒)語氣太弱。"
        },
        {
          "stem": "When I was a child, I ___ swim very well, but after years without practice, I can hardly stay afloat now.",
          "options": [
            "can",
            "could",
            "must",
            "should"
          ],
          "answer": 1,
          "explanation": "描述過去的能力用 could(過去能夠),與『小時候』及對比『現在不太行』相符。",
          "trap": "⚠ 過去能力用 could;can 是現在的能力,與 When I was a child 的過去時間及後句對比衝突。"
        },
        {
          "stem": "It's pouring outside and he left without a coat—he ___ be freezing by now.",
          "options": [
            "must",
            "can't",
            "needn't",
            "wouldn't"
          ],
          "answer": 0,
          "explanation": "由『大雨且沒帶外套』推得『現在一定凍壞了』,用 must be(一定是)。",
          "trap": "⚠ 有證據的肯定推測用 must;can't be(不可能冷)與情境矛盾,別把推測的方向弄反。"
        },
        {
          "stem": "You ___ have woken me up at 5 a.m.—the meeting wasn't until noon, so I lost two hours of sleep for nothing.",
          "options": [
            "must not",
            "can't",
            "needn't",
            "wouldn't"
          ],
          "answer": 2,
          "explanation": "needn't have p.p.=『當初不必做卻做了』,符合『其實不用那麼早叫醒我』的語境。",
          "trap": "⚠ needn't have p.p.=不必做卻做了(已做);don't have to 是現在不必,must not 是禁止,皆與『過去多此一舉』語意不同。"
        },
        {
          "stem": "A: \"Whose umbrella is this?\" B: \"It ___ be Tom's—he's the only one who brought one today.\"",
          "options": [
            "might not",
            "must",
            "can't",
            "needn't"
          ],
          "answer": 1,
          "explanation": "由『只有他帶傘』這項唯一線索,做有把握的肯定推測,用 must be(一定是)。",
          "trap": "⚠ 證據唯一指向 Tom,用 must be;can't be(不可能是)與線索相反,might be(可能)語氣不夠肯定。"
        },
        {
          "stem": "We ___ rather take the early train so that we won't get stuck in the morning rush hour.",
          "options": [
            "must",
            "had",
            "should",
            "would"
          ],
          "answer": 3,
          "explanation": "would rather + 原形=寧願(做某事),符合『寧願搭早班車以免塞車』。",
          "trap": "⚠ 固定句型是 would rather V;had rather 較罕用,常考的搭配是 would rather,別與 had better 混淆。"
        },
        {
          "stem": "You ___ leave your bike unlocked here; bikes get stolen in this neighborhood all the time.",
          "options": [
            "needn't",
            "don't have to",
            "had better not",
            "may not have to"
          ],
          "answer": 2,
          "explanation": "後句『常被偷』暗示有後果,警告語氣用 had better not(最好別,否則有後果)。",
          "trap": "⚠ had better not=最好別(含警告);don't have to / needn't 是『不必』語意完全不同,此句是勸阻而非說沒必要。"
        },
        {
          "stem": "The ground is completely dry this morning, so it ___ have rained during the night after all.",
          "options": [
            "can't",
            "must",
            "should",
            "needn't"
          ],
          "answer": 0,
          "explanation": "由『地面全乾』推得『昨晚不可能下過雨』,對過去的否定推測用 can't have rained。",
          "trap": "⚠ can't have p.p.=對過去的否定推測(不可能…過);must have(一定下過)與『地乾』的證據相反。"
        },
        {
          "stem": "Passengers ___ fasten their seat belts before the plane takes off; it's an airline rule.",
          "options": [
            "may",
            "must",
            "would",
            "need"
          ],
          "answer": 1,
          "explanation": "『航空規定』表示強制義務,用 must(必須)。",
          "trap": "⚠ 表規定義務用 must;may 是『許可』,語氣為『可以』而非『必須』,與 rule 的強制性不符。"
        },
        {
          "stem": "After years of training, a guide dog ___ guide a blind person safely across a busy street—an ability ordinary dogs will never have.",
          "options": [
            "must can",
            "can be able to",
            "must able to",
            "is able to"
          ],
          "answer": 3,
          "explanation": "表『能夠(具備能力)』用 be able to,主詞為單數第三人稱故 is able to;符合『導盲犬能安全帶領主人』。",
          "trap": "⚠ 兩個情態/能力詞不可連用:must can、can be able to 皆重複;must able to 缺 be 動詞;正確的能力表達是 is able to。"
        },
        {
          "stem": "A: \"He failed again even though he studied so hard.\" B: \"He ___ have studied the wrong material; the test covered Chapter 5, not Chapter 4.\"",
          "options": [
            "can't",
            "needn't",
            "must",
            "wouldn't"
          ],
          "answer": 2,
          "explanation": "由『考的是第5章而他像準備了別的』推得『一定是讀錯範圍』,對過去做肯定推測用 must have studied。",
          "trap": "⚠ 對過去原因的肯定推測用 must have;can't have(不可能讀錯)與『他考砸了』的結果矛盾。"
        },
        {
          "stem": "When you finish the exam, you ___ leave the room quietly, but you ___ talk to other students.",
          "options": [
            "may / mustn't",
            "must / may not",
            "may / don't have to",
            "must / needn't"
          ],
          "answer": 0,
          "explanation": "前空『可以安靜離場』表許可用 may;後空『不可與他人交談』表禁止用 mustn't。",
          "trap": "⚠ may=許可(可以),mustn't=禁止(不可);兩空一許可一禁止,別把 don't have to(不必)當成禁止填入後空。"
        },
        {
          "stem": "I'm not sure where Lily is. She ___ be in the library, or she ___ have gone home—I really can't tell.",
          "options": [
            "must / must",
            "might / might",
            "can't / can't",
            "must / can't"
          ],
          "answer": 1,
          "explanation": "『我真的說不準』表示兩種情況都只是可能,前後皆用表不確定的 might(可能)。",
          "trap": "⚠ 不確定的猜測用 might;must(一定)語氣太強,與『說不準』的猶豫語氣不符,兩空都該是 might。"
        },
        {
          "stem": "You look exhausted. You ___ have been driving for over ten hours straight—why didn't you take a break?",
          "options": [
            "shouldn't",
            "can't",
            "needn't",
            "must"
          ],
          "answer": 3,
          "explanation": "由『你看起來累壞了』推得『一定是連開十幾小時』,對過去持續行為的肯定推測用 must have been driving。",
          "trap": "⚠ must have been V-ing=對過去進行動作的肯定推測;can't have(不可能開過)與『看起來很累』的證據相反。"
        },
        {
          "stem": "Visitors ___ touch the paintings, but they ___ take photos without flash if they like.",
          "options": [
            "needn't / must",
            "may not / must",
            "must not / may",
            "don't have to / can't"
          ],
          "answer": 2,
          "explanation": "前空『不可觸摸畫作』表禁止用 must not;後空『可以(不用閃光燈)拍照』表許可用 may。",
          "trap": "⚠ must not=禁止,may=許可;前禁止後許可,別把 don't have to(不必)誤用於『不可觸摸』。"
        },
        {
          "stem": "There's no way the thief came in through the window—it was locked from the inside. He ___ used the front door.",
          "options": [
            "can't have",
            "shouldn't have",
            "needn't have",
            "must have"
          ],
          "answer": 3,
          "explanation": "既然窗戶從內反鎖、小偷不可能由窗進入,由排除法推得『一定是走前門』,用 must have used。",
          "trap": "⚠ 排除其他可能後的肯定推測用 must have;can't have used(不可能用過前門)與『只剩前門可走』的推論矛盾。"
        },
        {
          "stem": "We've still got half a tank of gas, so we ___ stop to refuel until we reach the next city.",
          "options": [
            "won't have to",
            "had better",
            "mustn't",
            "shouldn't"
          ],
          "answer": 0,
          "explanation": "由『還有半箱油』推得『到下個城市前不必停下加油』,表將來沒必要用 won't have to(不必)。",
          "trap": "⚠ won't have to=將來不必;mustn't(禁止加油)語意荒謬,此句是說沒必要停而非禁止停。"
        },
        {
          "stem": "A: \"Sorry I'm late—the bus broke down.\" B: \"You ___ taken a taxi; I told you this meeting was important.\"",
          "options": [
            "must have",
            "should have",
            "can't have",
            "needn't have"
          ],
          "answer": 1,
          "explanation": "should have p.p.=當初應該做卻沒做(責備/遺憾),符合『你當初應該搭計程車』的語境。",
          "trap": "⚠ should have p.p.=當初該做卻沒做;must have(一定是)是推測,needn't have(不必卻做了)語意相反,此句在責怪對方沒搭計程車。"
        },
        {
          "stem": "These instructions ___ be followed exactly; otherwise the machine ___ be damaged beyond repair.",
          "options": [
            "should / can't",
            "may / must",
            "can / must not",
            "must / may"
          ],
          "answer": 3,
          "explanation": "前空『必須確實遵守』為強制義務用 must(被動 must be followed);後空『機器可能損壞』表可能性用 may(may be damaged)。",
          "trap": "⚠ 此題考情態動詞被動 must be done / may be done;前空義務用 must,後空表可能後果用 may,別把可能性的 may 與義務的 must 對調。"
        },
        {
          "stem": "You ______ ride your bike here. Look at the sign—it says \"No Bikes.\"",
          "options": [
            "can",
            "mustn't",
            "would",
            "don't have to"
          ],
          "answer": 1,
          "explanation": "標誌寫著「禁止騎腳踏車」,表示「不可以、禁止」,情態動詞要用表示禁止的用法;表能力或許可的「可以/會」、表假設的「將會」、以及表沒有義務的「不必」都不符合禁止的語意。"
        },
        {
          "stem": "A: Whose jacket is this on the chair? B: It ______ be Kevin's. He's the only boy wearing a red one today, and this jacket is red.",
          "options": [
            "can't",
            "must",
            "needn't",
            "shouldn't"
          ],
          "answer": 1,
          "explanation": "說話者根據「他是今天唯一穿紅色外套的男生,而這件正好是紅色」做出很有把握的推論,要用表示「一定是」的肯定推測;語意相反的「不可能」、以及「不必」和「不應該」都不符合這裡的推論。",
          "trap": "線索指向高度確定,別因為看到否定情境就誤選語意相反的「不可能」。"
        },
        {
          "stem": "I feel awful. I ______ so many unkind words to my sister yesterday; now she won't even look at me.",
          "options": [
            "shouldn't say",
            "don't have to say",
            "shouldn't have said",
            "couldn't say"
          ],
          "answer": 2,
          "explanation": "事情發生在昨天,是對「過去已經做的事」表示後悔,結構為「should + have + 過去分詞」的否定,意思是「當初不該說」;只用原形的「不該說」指現在或未來,時態不符;其餘兩個選項語意不通。",
          "trap": "句中有 yesterday 表過去,後悔要用「should have + 過去分詞」,不能只用原形動詞。"
        },
        {
          "stem": "The street is covered with fallen leaves and broken branches this morning. A strong wind ______ during the night.",
          "options": [
            "must blow",
            "should have blown",
            "can't have blown",
            "must have blown"
          ],
          "answer": 3,
          "explanation": "滿地落葉與斷枝是現在看到的證據,而推論的動作發生在昨晚(過去),要用「must + have + 過去分詞」表示對過去的肯定推測,意為「昨晚一定颳過強風」;只用原形的「一定颳風」時態錯誤;「不可能颳過」語意相反;「當初應該颳」表示過去該做而未做,也不合理。",
          "trap": "證據在眼前(現在),但事件在過去,要用「must have + 過去分詞」,別用現在式的原形動詞。"
        },
        {
          "stem": "Tomorrow is a national holiday, so students ______ wear their uniforms; they can dress casually.",
          "options": [
            "mustn't",
            "don't have to",
            "can't",
            "had better not"
          ],
          "answer": 1,
          "explanation": "明天放假、又說可以穿便服,表示「不需要、非強制」穿制服,要用表示沒有義務的用法;「不可以穿(禁止)」語意過強且相反,「不能」與「最好不要」也都帶禁止或勸阻的意味,與「非強制」不同。",
          "trap": "「不必」是沒有義務,別和「禁止(不可以)」的用法混淆。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">主動 -&gt; 被動 轉換</text><rect x=\"20\" y=\"38\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"60\" y=\"57\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"11\">Tom</text><rect x=\"120\" y=\"38\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"160\" y=\"57\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"11\">wrote</text><rect x=\"220\" y=\"38\" width=\"80\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"260\" y=\"57\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"11\">a book</text><path d=\"M60 70 C100 105, 230 105, 258 70\" stroke=\"#c9755c\" stroke-width=\"1.5\" fill=\"none\"/><polygon points=\"258,70 252,77 262,76\" fill=\"#c9755c\"/><path d=\"M260 70 C220 110, 90 110, 62 70\" stroke=\"#5aa874\" stroke-width=\"1.5\" fill=\"none\"/><polygon points=\"62,70 56,76 66,77\" fill=\"#5aa874\"/><rect x=\"20\" y=\"118\" width=\"100\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"70\" y=\"137\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">A book</text><rect x=\"130\" y=\"118\" width=\"100\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"180\" y=\"137\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">was written</text><rect x=\"240\" y=\"118\" width=\"60\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"270\" y=\"137\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">by Tom</text><text x=\"160\" y=\"168\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">受詞變主詞, be + p.p.</text></svg>",
          "caption": "受詞變主詞 be 加過去分詞",
          "points": [
            "被動=be + p.p.;受詞變主詞,動作者用 by 帶出(常省略)。",
            "各時態的 be 要對應:is made / was made / will be made / has been made。",
            "情態動詞被動:must be done、can be seen。"
          ],
          "trap": "主詞是『被動作』者就用被動;p.p. 不規則動詞要正確(written 非 writed);時態藏在 be 動詞,別只看 p.p.。"
        },
        {
          "h": "何時該用被動:不知或不必說動作者",
          "points": [
            "當動作者不重要、不知道或顯而易見時,用被動把重點放在『原受詞』上:English is spoken here(這裡通行英語)。",
            "強調結果而非誰做的:The window was broken last night(窗戶被打破了,不必說是誰)。",
            "正式公告、新聞、說明常用被動:Smoking is not allowed in this area(此區禁止吸菸)。"
          ],
          "formula": "原受詞 + be + p.p. (+ by 動作者)",
          "trap": "不是每句都該硬改被動;若動作者才是重點仍用主動。改被動時別忘了 be 動詞:錯 The window broken last night,正確 The window was broken last night。"
        },
        {
          "h": "授與動詞的被動:兩個受詞的處理",
          "points": [
            "give、send、show 等有兩個受詞的句子,可把『人』當被動主詞:I was given a present(我被送了一份禮物)。",
            "主動 They gave me a present 改被動,慣常以人開頭:I was given a present(by them)。",
            "也可改用『物』當主詞,此時人前要加介系詞 to:A present was given to me。"
          ],
          "formula": "人 + be + p.p. + 物 / 物 + be + p.p. + to + 人",
          "trap": "以『物』當被動主詞時別漏掉介系詞 to:錯 A present was given me,要寫 A present was given to me;兩種被動擇一即可,別把兩個受詞都搬到主詞。"
        },
        {
          "h": "by 之外的介系詞:被動慣用搭配",
          "points": [
            "多數被動用 by 帶出動作者,但有些固定片語不用 by:be interested in(對…有興趣)。",
            "be made of / be made from 表材質:The desk is made of wood(看得出原料用 of)。",
            "其他常考:be covered with snow(被雪覆蓋)、be filled with water(裝滿水)、be worried about(擔心)。"
          ],
          "formula": "be + p.p. + in / of / with / about …(固定搭配,非 by)",
          "trap": "情緒、興趣、材質類的被動不用 by:錯 I am interested by music、be filled by water;要用 interested in music、filled with water,這些介系詞是固定搭配,需背熟。"
        },
        {
          "h": "進行式被動 present continuous passive",
          "points": [
            "要表達『正在被進行』的動作,用 is/are being + p.p.:The bridge is being built now(橋正在被建造)。",
            "結構是『be 動詞 + being + 過去分詞』,being 不可省略。",
            "過去進行被動則是 was/were being + p.p.:The room was being cleaned when I arrived(我到時房間正在被打掃)。"
          ],
          "formula": "S + is/are/was/were + being + p.p.",
          "trap": "進行式被動一定要有 being:寫成 The bridge is built now 就變成單純的現在式被動,失去『正在進行』之意;強調此刻正在被做要寫 is being built。"
        }
      ],
      "quiz": [
        {
          "stem": "This famous novel ___ by a teenager more than a hundred years ago.",
          "options": [
            "was written",
            "writes",
            "has written",
            "wrote"
          ],
          "answer": 0,
          "explanation": "小說是『被』寫的且 a hundred years ago 為過去,用過去被動 was written。",
          "trap": "主詞 novel 是受動者須用被動;wrote 是主動,且 write 的 p.p. 是 written 不是 writed。"
        },
        {
          "stem": "English ___ all over the world today.",
          "options": [
            "spoke",
            "is speaking",
            "speaks",
            "is spoken"
          ],
          "answer": 3,
          "explanation": "English 是『被』說的,現在事實用現在被動 is spoken。",
          "trap": "語言是被人說的,主詞為受動者用被動 is spoken;is speaking(進行主動)語意變成『英語正在說話』不通。"
        },
        {
          "stem": "The bridge ___ by next year, so traffic will become much smoother then.",
          "options": [
            "is finishing",
            "will finish",
            "will be finished",
            "has finished"
          ],
          "answer": 2,
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
        },
        {
          "stem": "A new shopping mall ___ near the station now; it should open next spring.",
          "options": [
            "is being built",
            "has built",
            "is built",
            "builds"
          ],
          "answer": 0,
          "explanation": "now 表動作正在進行,且 mall 是被建造者,須用現在進行被動 is being built。",
          "trap": "⚠ 現在進行被動結構為 is/are being + p.p.,別漏掉 being 而填 is built(那是單純現在被動,無『正在』之意);has built 是主動完成,語意成『商場蓋了東西』不通。"
        },
        {
          "stem": "By the time we arrived, all the tickets ___, so we had to go home disappointed.",
          "options": [
            "had sold out",
            "were selling",
            "have been sold",
            "had been sold"
          ],
          "answer": 3,
          "explanation": "By the time we arrived(過去某時)之前票已被賣完,用過去完成被動 had been sold。",
          "trap": "⚠ tickets 是被賣的,須用被動;且『在過去某時間點之前已完成』要用過去完成 had been + p.p.,別用 have been sold(現在完成,與過去時間軸不符)。"
        },
        {
          "stem": "The injured passengers ___ to the nearest hospital before the ambulance left the scene.",
          "options": [
            "have been taken",
            "took",
            "had been taken",
            "were taking"
          ],
          "answer": 2,
          "explanation": "before the ambulance left(過去)之前傷者已被送醫,且乘客是被送的,用過去完成被動 had been taken。",
          "trap": "⚠ passengers 是受動者要用被動(被送往醫院);兩個過去事件有先後,先發生的『送醫』用過去完成 had been taken;were taking 是主動進行,語意變成乘客自己在帶人。"
        },
        {
          "stem": "Children under twelve ___ to enter the construction site without an adult.",
          "options": [
            "must not allow",
            "must not be allowed",
            "are not allowing",
            "do not allow"
          ],
          "answer": 1,
          "explanation": "兒童是『不被允許』的對象,情態動詞被動為 must not be + p.p.,故 must not be allowed。",
          "trap": "⚠ 主詞 children 是被允許的對象須用被動;情態動詞 must 後接 be + p.p.,別填主動的 must not allow(語意變成『兒童不可以允許』);allow 後通常接 to V，此句為 be allowed to。"
        },
        {
          "stem": "The old theater is going to ___ into a public library next year.",
          "options": [
            "turn",
            "turning",
            "be turned",
            "be turning"
          ],
          "answer": 2,
          "explanation": "戲院是被改建的,be going to 後的被動為 be going to be + p.p.,故 be turned。",
          "trap": "⚠ theater 是受動者要用被動;be going to 之後接原形,被動形是 be turned(be + p.p.);turn 為主動(戲院自己變),語意不通。"
        },
        {
          "stem": "Every detail of the wedding ___ care of by a professional planner, so the couple felt relaxed.",
          "options": [
            "was taken",
            "took",
            "was taking",
            "has taking"
          ],
          "answer": 0,
          "explanation": "片語動詞 take care of 改被動須保留 of:be taken care of;此處過去事實用 was taken care of。",
          "trap": "⚠ 片語動詞 take care of 變被動時 of 不可丟,完整為 be taken care of by...;別只看 care of 而漏掉被動的 was taken;主詞 detail 是被照料的對象故用被動。"
        },
        {
          "stem": "The students ___ a difficult question by the examiner, and none of them could answer it.",
          "options": [
            "are asked",
            "asked",
            "were asking",
            "were asked"
          ],
          "answer": 3,
          "explanation": "ask 為授與動詞,主動 The examiner asked the students a question,改被動學生當主詞 were asked a question。",
          "trap": "⚠ 雙受詞動詞 ask sb sth 改被動,人當主詞時 sth 仍留在後面(were asked a question);主詞 students 是被問者用過去被動 were asked;by the examiner 點出真正動作者。"
        },
        {
          "stem": "Look! The whole street ___ with colorful lights for the coming festival.",
          "options": [
            "decorates",
            "is being decorated",
            "is decorating",
            "has decorated"
          ],
          "answer": 1,
          "explanation": "Look! 提示動作正在發生,街道是被裝飾者,用現在進行被動 is being decorated。",
          "trap": "⚠ Look! 表此刻正在進行,且 street 是被裝飾者,須用現在進行被動 is being decorated;is decorating 是主動(街道自己在裝飾)不通,has decorated 沒有『正在』之意。"
        },
        {
          "stem": "This kind of traditional pottery ___ by hand for over five hundred years.",
          "options": [
            "has made",
            "made",
            "is making",
            "has been made"
          ],
          "answer": 3,
          "explanation": "for over five hundred years 表持續到現在,陶器是被製作者,用現在完成被動 has been made。",
          "trap": "⚠ for + 一段時間延續到現在用現在完成;陶器是被做的須用被動,合為 has been made;has made 是主動(陶器做了東西)語意不通。"
        },
        {
          "stem": "When I got to the office, I found that my report ___ on my desk by someone.",
          "options": [
            "had been left",
            "had left",
            "has been left",
            "left"
          ],
          "answer": 0,
          "explanation": "report 是被留下的,且在『我到辦公室(過去)』之前已發生,用過去完成被動 had been left。",
          "trap": "⚠ report 是受動者要用被動;『發現時』報告早已被放在桌上,先發生的動作用過去完成 had been left;had left 是主動(報告自己離開)不通。"
        },
        {
          "stem": "The naughty boy doesn't like ___ in front of his classmates by the teacher.",
          "options": [
            "scolding",
            "to scold",
            "being scolded",
            "scolded"
          ],
          "answer": 2,
          "explanation": "男孩是被罵的對象,like 後接動名詞,動名詞被動為 being + p.p.,故 being scolded。",
          "trap": "⚠ 男孩是被責罵者須用被動;動名詞的被動形是 being + p.p.(being scolded);scolding 是主動(男孩罵人),scolded 缺 being 無法當動名詞主體。"
        },
        {
          "stem": "It is said that ___ thousands of stars in that part of the night sky, though we can barely see them.",
          "options": [
            "there to be",
            "there are",
            "to have",
            "having"
          ],
          "answer": 1,
          "explanation": "虛主詞句型 It is said that + 子句;子句用 there are 表『有…』,故『It is said that there are thousands of stars』最完整正確。B『there to be』只用於『There are said to be…』的不定詞轉換,不能接在 that 之後;C『to have』、D『having』皆不合句構。",
          "trap": "⚠ 有 that 引導子句時,子句要用完整的 there are;『there to be』只出現在沒有 that 的不定詞句『There are said to be…』,兩種句型不可混用。"
        },
        {
          "stem": "The famous scientist ___ to have discovered a new way to store solar energy.",
          "options": [
            "believes",
            "is believing",
            "has believed",
            "is believed"
          ],
          "answer": 3,
          "explanation": "People believe the scientist...改被動 The scientist is believed to have...,主詞是被相信的對象,用 is believed。",
          "trap": "⚠ 主詞 scientist 是『被認為』的對象,用被動 is believed to V;believes 是主動(科學家相信別人)語意相反;to have discovered 表比主句更早發生的動作。"
        },
        {
          "stem": "Not until the bill was huge ___ how much electricity had been wasted at home.",
          "options": [
            "we realized",
            "we were realized",
            "did we realize",
            "were we realized"
          ],
          "answer": 2,
          "explanation": "Not until 置句首主句須倒裝(did + 主詞 + 原形);realize 是主動知覺,故 did we realize;而 electricity 是被浪費的用被動 had been wasted。",
          "trap": "⚠ 兩層陷阱:Not until 倒裝主句用 did we realize(realize 是主動,人不是被實現);後半 electricity 才是被浪費者用被動 had been wasted;別把 realize 也改成被動 were realized。"
        },
        {
          "stem": "These ancient documents must ___ with great care, or they will fall apart.",
          "options": [
            "be handled",
            "to be handled",
            "being handled",
            "handle"
          ],
          "answer": 0,
          "explanation": "文件是被處理的對象,情態動詞 must 後被動為 be + p.p.,故 must be handled。",
          "trap": "⚠ documents 是被處理者要用被動;must 後接原形,被動形 be handled;handle 是主動(文件處理東西)不通,being/to be handled 不接在 must 之後。"
        },
        {
          "stem": "The road ___ when the heavy rain suddenly started, so the workers had to stop and take cover.",
          "options": [
            "was repaired",
            "was being repaired",
            "had repaired",
            "repaired"
          ],
          "answer": 1,
          "explanation": "大雨『突然開始』時道路正在被修,過去某動作進行中用過去進行被動 was being repaired。",
          "trap": "⚠ 一個過去動作進行中被另一動作打斷,用過去進行式;road 是被修者須被動,合為 was being repaired;was repaired 只表單純過去被動,少了『正在』被打斷的語意。"
        },
        {
          "stem": "She was very upset because she ___ for the team she had supported all her life.",
          "options": [
            "didn't choose",
            "hasn't chosen",
            "wasn't choosing",
            "wasn't chosen"
          ],
          "answer": 3,
          "explanation": "由語境『她很沮喪』可知她沒被選上;她是被選的對象,過去否定被動用 wasn't chosen。",
          "trap": "⚠ 主詞 she 是被挑選者,要用被動 was chosen;『沮喪』暗示落選故用否定 wasn't chosen;didn't choose 是主動(她沒選別人)與沮喪語意不符。"
        },
        {
          "stem": "The instructions on the box should ___ carefully before you put the shelf together.",
          "options": [
            "be followed",
            "follows",
            "have followed",
            "follow"
          ],
          "answer": 0,
          "explanation": "說明書是被遵循的對象,should 後被動為 be + p.p.,故 should be followed。",
          "trap": "⚠ instructions 是被遵守者須用被動;should 後接原形被動 be followed;follow 是主動(說明書去遵循)語意不通,別被前面祈使般語氣誤導填原形。"
        },
        {
          "stem": "The missing hikers ___ by the rescue team after being lost in the mountains for three days.",
          "options": [
            "found",
            "were found",
            "were finding",
            "have been finding"
          ],
          "answer": 1,
          "explanation": "登山者是被搜救隊找到的,過去事實用過去被動 were found。",
          "trap": "⚠ hikers 是被尋獲者要用被動 were found;found(主動)語意變成登山者找到東西;were finding/have been finding 為主動進行,皆與『被尋獲』語意不符。"
        },
        {
          "stem": "By next month, more than two hundred trees ___ along both sides of this avenue.",
          "options": [
            "will plant",
            "will be planted",
            "will have been planted",
            "are planting"
          ],
          "answer": 2,
          "explanation": "By next month 表『到未來某時間點之前已完成』,樹是被種的,用未來完成被動 will have been planted。",
          "trap": "⚠ By + 未來時間 表到那時已完成,用未來完成 will have been + p.p.;trees 是被種者須被動;will be planted 只是單純未來被動,缺『在那時間點前已完成』之意。"
        },
        {
          "stem": "The thief ___ running out of the bank, but he managed to escape before the police came.",
          "options": [
            "was seen",
            "was seeing",
            "has seen",
            "saw"
          ],
          "answer": 0,
          "explanation": "小偷是被看見的對象,知覺動詞被動 be seen V-ing 表看見正在進行的動作,故 was seen running。",
          "trap": "⚠ thief 是被目擊者用被動 was seen;知覺動詞 see sb V-ing 改被動後保留 V-ing(was seen running);saw 是主動(小偷看見東西)語意相反,was seeing 亦為主動。"
        },
        {
          "stem": "The classroom ___ every day by the students on duty.",
          "options": [
            "cleans",
            "is cleaning",
            "clean",
            "is cleaned"
          ],
          "answer": 3,
          "explanation": "主詞 The classroom 是「被打掃」的對象,屬被動語態。頻率副詞 every day 為現在簡單式,被動結構是 be + 過去分詞,單數主詞用 is,故正解為「is cleaned」。其餘為主動語態(cleans)、主動進行式(is cleaning)或原形(clean),皆不符被動語意。"
        },
        {
          "stem": "These delicious cookies ___ by my grandmother last night.",
          "options": [
            "made",
            "was made",
            "are made",
            "were made"
          ],
          "answer": 3,
          "explanation": "cookies 是動作的接受者(由祖母製作),需用被動語態;時間 last night 為過去,且主詞為複數,故用「were made」。單數的 was made 與複數主詞不符;are made 為現在式,時態錯誤;僅 made 缺少 be 動詞,無法構成被動。",
          "trap": "主詞 cookies 為複數,be 動詞要用 were 而非 was;又因 last night 是過去,別誤選現在式 are made。"
        },
        {
          "stem": "「Someone will deliver the package tomorrow.」下列哪一句意思相同?",
          "options": [
            "The package will be delivered tomorrow.",
            "The package will deliver tomorrow.",
            "The package is delivered tomorrow.",
            "The package will be delivering tomorrow."
          ],
          "answer": 0,
          "explanation": "原句為未來式主動,受詞 the package 轉為主詞後,未來被動的結構是 will be + 過去分詞,故「The package will be delivered tomorrow.」正確。缺少 be 的 will deliver 仍是主動;is delivered 時態變成現在;will be delivering 為進行式,語意不合。",
          "trap": "未來被動的助動詞 will 後面必須接 be + 過去分詞;別漏掉 be,也別誤用進行式 delivering。"
        },
        {
          "stem": "This traditional bridge ___ of wood and stone hundreds of years ago.",
          "options": [
            "made",
            "is made",
            "was made",
            "was making"
          ],
          "answer": 2,
          "explanation": "主詞 this traditional bridge 是被建造的對象,需用被動語態;時間 hundreds of years ago 表過去,故用過去被動「was made」。is made 為現在式,時態不符;單獨的 made 缺 be 動詞;was making 是主動進行式,不符被動語意。",
          "trap": "時間點 hundreds of years ago 表示過去,要用過去被動 was made,別被現在式 is made 誤導。"
        },
        {
          "stem": "English ___ in many countries around the world.",
          "options": [
            "is spoken",
            "speaks",
            "is speaking",
            "spoke"
          ],
          "answer": 0,
          "explanation": "主詞 English 是「被說」的語言,屬被動語態;in many countries 表達普遍事實,用現在簡單式,單數主詞,故正解為「is spoken」。speaks、spoke 為主動語態,is speaking 為主動進行式,皆不符被動語意。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">動詞後接 to V 或 V-ing</text><line x1=\"160\" y1=\"32\" x2=\"160\" y2=\"150\" stroke=\"#3a342e\" stroke-width=\"1\"/><rect x=\"20\" y=\"40\" width=\"120\" height=\"24\" rx=\"4\" fill=\"#c9755c\" opacity=\"0.85\"/><text x=\"80\" y=\"57\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\">只接 to V</text><rect x=\"180\" y=\"40\" width=\"120\" height=\"24\" rx=\"4\" fill=\"#5aa874\" opacity=\"0.85\"/><text x=\"240\" y=\"57\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\">只接 V-ing</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">want, hope</text><text x=\"80\" y=\"104\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">decide, plan</text><text x=\"80\" y=\"124\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">would like</text><text x=\"240\" y=\"84\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">enjoy, finish</text><text x=\"240\" y=\"104\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">mind, keep</text><text x=\"240\" y=\"124\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">avoid, practice</text><text x=\"160\" y=\"168\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"9\">stop to V 去做別事 / stop V-ing 停止</text></svg>",
          "caption": "動詞決定接 to V / V-ing",
          "points": [
            "只接 to V:want, hope, decide, plan, would like。",
            "只接 V-ing:enjoy, finish, mind, keep, avoid, practice。",
            "介系詞後接 V-ing:be good at swimming, look forward to seeing。"
          ],
          "trap": "stop to V(停下來去做別事) vs stop V-ing(停止做某事) 語意不同;remember to V(記得要做)vs remember V-ing(記得做過)。"
        },
        {
          "h": "stop / remember / forget:接 to V 或 V-ing 意思不同",
          "points": [
            "stop to V 是『停下來去做某事』:He stopped to smoke(停下來抽菸);stop V-ing 是『停止做某事』:He stopped smoking(戒菸)。",
            "remember to V 是『記得要去做(還沒做)』:Remember to lock the door;remember V-ing 是『記得做過(已做)』:I remember locking the door。",
            "forget to V 是『忘了要做』:I forgot to call him;forget V-ing 是『忘記做過的事』,較少用。"
          ],
          "formula": "stop / remember / forget + to V(未發生) / + V-ing(已發生)",
          "trap": "stop smoking(戒菸)和 stop to smoke(停下來抽菸)意思相反,選錯就答錯;判斷 remember 後接哪個,先看那件事『做了沒』。"
        },
        {
          "h": "受詞 + to V 的句型:tell / ask / want sb to do",
          "points": [
            "want、ask、tell、allow 等動詞後接『人 + to V』:I want you to help me(要你幫我)。",
            "中文『我希望你來』不可直譯成 I hope you to come,want 才能接受詞 + to V。",
            "常考句型:My mom told me to clean my room(媽媽叫我整理房間)、The teacher asked us to be quiet(老師要我們安靜)。"
          ],
          "formula": "S + want / ask / tell + 受詞 + to V",
          "trap": "hope 不能接『人 + to V』:錯 I hope you to win,要用 I hope (that) you will win;want、ask、tell 才用受詞 + to V 句型,別搞混。"
        },
        {
          "h": "動名詞當主詞與 enjoy 類動詞",
          "points": [
            "動名詞(V-ing)可當句子主詞,且視為單數:Swimming is good for your health(游泳有益健康)。",
            "enjoy、finish、mind、give up、feel like 等後面只能接 V-ing:Would you mind opening the window?",
            "feel like V-ing 表『想要做某事』:I feel like eating ice cream(想吃冰)。"
          ],
          "formula": "V-ing + 單數動詞(當主詞) / enjoy / mind / feel like + V-ing",
          "trap": "動名詞當主詞視為單數,動詞用單數:錯 Reading books are fun,正確 Reading books is fun;另外 enjoy 後絕不接 to V(錯 enjoy to play),要用 enjoy playing。"
        },
        {
          "h": "表目的的 to V:in order to / so as to",
          "points": [
            "不定詞 to V 可表『目的』,等於『為了…』:I get up early to catch the first bus(早起為了趕首班車)。",
            "想更清楚地表目的,可用 in order to + V 或 so as to + V:I study hard in order to pass the exam。",
            "目的的否定用 in order not to / so as not to:He spoke softly so as not to wake the baby(怕吵醒寶寶)。"
          ],
          "formula": "S + V …(in order to / so as to)+ 原形 V(表目的)",
          "trap": "表目的用 to V,別用 for + V-ing:錯 I came here for learning English,正確 I came here to learn English;否定目的是 in order not to,別寫成 in order to not。"
        }
      ],
      "quiz": [
        {
          "stem": "Would you mind ___ the window? It's a little cold in here.",
          "options": [
            "closed",
            "to close",
            "close",
            "closing"
          ],
          "answer": 3,
          "explanation": "mind 後接動名詞 V-ing,故 closing。",
          "trap": "mind 是『只接 V-ing』的動詞,別反射性填 to close;這類動詞(enjoy/finish/mind)要整組記。"
        },
        {
          "stem": "On his way home, he stopped ___ some bread for dinner.",
          "options": [
            "to buy",
            "buying",
            "bought",
            "buy"
          ],
          "answer": 0,
          "explanation": "stop to V=停下來『去做另一件事』(去買麵包),符合語意。",
          "trap": "stop to buy(停下來去買) vs stop buying(停止購買) 意思相反;此處是去買麵包,用 to V。"
        },
        {
          "stem": "I clearly remember ___ the door before I left, but now it's somehow open.",
          "options": [
            "to lock",
            "lock",
            "locking",
            "locked"
          ],
          "answer": 2,
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
        },
        {
          "stem": "The committee is considering ___ the deadline, but most members would prefer ___ the original date.",
          "options": [
            "extending / keeping",
            "to extend / keeping",
            "to extend / to keep",
            "extending / to keep"
          ],
          "answer": 3,
          "explanation": "consider 後只接 V-ing(extending);prefer 後可接 to V(此處 would prefer 表偏好,接 to keep)。故為 extending / to keep。",
          "trap": "⚠ 同一句兩個空格分屬不同支配動詞:consider 只接動名詞、would prefer 接不定詞,別套用同一規則。"
        },
        {
          "stem": "I'll never forget ___ the Great Wall last summer; it was the most amazing trip of my life.",
          "options": [
            "visiting",
            "visit",
            "to visit",
            "to have visited"
          ],
          "answer": 0,
          "explanation": "forget V-ing 表『忘不了做過的事』;由 last summer 與『最棒的旅行』可知是回憶過去經歷,用 visiting。",
          "trap": "⚠ forget to V(忘了要去做,未做)vs forget V-ing(忘不了做過,已做);此處是難忘的回憶,用 visiting 不是 to visit。"
        },
        {
          "stem": "After hours of arguing, they finally stopped ___ and started ___ a real solution.",
          "options": [
            "fighting / looking for",
            "to fight / looking for",
            "fighting / to look for",
            "to fight / to look for"
          ],
          "answer": 2,
          "explanation": "stop V-ing=停止做某事(停止爭吵);start 後接 to V 或 V-ing 皆可,搭配 to look for 最自然(開始去尋找)。故 fighting / to look for。",
          "trap": "⚠ stop fighting(停止爭吵)才合語意,stop to fight 是『停下來去打架』語意矛盾;start 兩種皆可,但 stop 的選擇是關鍵。"
        },
        {
          "stem": "She is used to ___ up early, so getting to the 6 a.m. class is no problem for her.",
          "options": [
            "to wake",
            "waking",
            "wake",
            "woke"
          ],
          "answer": 1,
          "explanation": "be used to + V-ing=『習慣於』;此處 to 是介系詞,後接動名詞 waking。",
          "trap": "⚠ be used to V-ing(習慣於)≠ used to V(過去常做);此處的 to 是介系詞不是不定詞,後面必接 V-ing。"
        },
        {
          "stem": "It's no use ___ over spilled milk; let's focus on ___ the problem now.",
          "options": [
            "crying / solving",
            "crying / to solve",
            "to cry / solving",
            "to cry / to solve"
          ],
          "answer": 0,
          "explanation": "It's no use + V-ing=『做…沒有用』;focus on 的 on 是介系詞,後接 V-ing(solving)。故 crying / solving。",
          "trap": "⚠ It's no use 與 focus on 後都要 V-ing;兩個空格都不是 to V,別被慣性誘導填不定詞。"
        },
        {
          "stem": "The teacher made all the students ___ the poem aloud and then asked them ___ its meaning.",
          "options": [
            "to read / explain",
            "read / explain",
            "read / to explain",
            "reading / explaining"
          ],
          "answer": 2,
          "explanation": "make + 受詞 + 原形動詞(read,使役不加 to);ask + 受詞 + to V(to explain)。故 read / to explain。",
          "trap": "⚠ 使役動詞 make 後接原形(read)不加 to,但 ask 後須接 to V;兩個動詞句型不同別混用。"
        },
        {
          "stem": "___ a foreign language well takes years of practice and patience.",
          "options": [
            "Speak",
            "Speaking",
            "To speaking",
            "Spoke"
          ],
          "answer": 1,
          "explanation": "句首作主詞且後接單數動詞 takes,用動名詞 Speaking(To speak 也可,但 To speaking 文法錯誤,故選 Speaking)。",
          "trap": "⚠ 動名詞或不定詞可當主詞,但 To speaking 是錯誤組合(to 後須接原形);正確主詞形式是 Speaking。"
        },
        {
          "stem": "We had the mechanic ___ the engine, and he had the car ___ within an hour.",
          "options": [
            "to check / repaired",
            "checking / repairing",
            "check / to repair",
            "check / repaired"
          ],
          "answer": 3,
          "explanation": "have + 人 + 原形(check,叫人做);have + 物 + 過去分詞(repaired,事情被完成)。故 check / repaired。",
          "trap": "⚠ have 後接『人』用原形(主動)、接『物』用過去分詞(被動);依受詞是人或物決定形式,別一律填原形。"
        },
        {
          "stem": "Instead of ___ about the heavy rain, why not ___ an umbrella with you?",
          "options": [
            "complaining / bring",
            "to complain / bring",
            "complaining / to bring",
            "complain / bringing"
          ],
          "answer": 0,
          "explanation": "Instead of 的 of 是介系詞接 V-ing(complaining);why not + 原形動詞(bring)。故 complaining / bring。",
          "trap": "⚠ Instead of 後接 V-ing,但 why not 後接原形動詞;兩個空格句型不同,別都填同一形式。"
        },
        {
          "stem": "The novel is worth ___, and I really look forward to ___ the movie version next month.",
          "options": [
            "to read / to see",
            "to read / see",
            "reading / to see",
            "reading / seeing"
          ],
          "answer": 3,
          "explanation": "be worth + V-ing(值得做);look forward to 的 to 是介系詞接 V-ing(seeing)。故 reading / seeing。",
          "trap": "⚠ look forward to 的 to 是介系詞,後接 V-ing 不是原形;搭配 be worth V-ing,兩空都填動名詞。"
        },
        {
          "stem": "He apologized for ___ late and promised ___ on time from then on.",
          "options": [
            "to be / coming",
            "to be / to come",
            "being / to come",
            "being / coming"
          ],
          "answer": 2,
          "explanation": "apologize for 的 for 是介系詞接 V-ing(being);promise 後接 to V(to come)。故 being / to come。",
          "trap": "⚠ apologize for + V-ing(為已發生的事道歉),promise + to V(承諾未來);依時間方向與句型,兩空形式不同。"
        },
        {
          "stem": "Would you rather ___ at home or ___ out for dinner tonight?",
          "options": [
            "staying / eating",
            "stay / eat",
            "to stay / to eat",
            "stay / to eat"
          ],
          "answer": 1,
          "explanation": "would rather + 原形動詞(stay ... or eat);兩個選項都用原形。故 stay / eat。",
          "trap": "⚠ would rather 後直接接原形動詞,不加 to 也不用 V-ing;別與 would like to V 混淆。"
        },
        {
          "stem": "The new policy aims at ___ pollution and encouraging citizens ___ public transport.",
          "options": [
            "reducing / to use",
            "to reduce / using",
            "reducing / using",
            "to reduce / to use"
          ],
          "answer": 0,
          "explanation": "aim at 的 at 是介系詞接 V-ing(reducing);encourage + 受詞 + to V(to use)。故 reducing / to use。",
          "trap": "⚠ aim at + V-ing,但 encourage sb. to V;一個受介系詞支配、一個受動詞句型支配,形式不同。"
        },
        {
          "stem": "I can't help ___ that something is wrong; he keeps ___ the truth from us.",
          "options": [
            "to feel / hiding",
            "to feel / to hide",
            "feeling / to hide",
            "feeling / hiding"
          ],
          "answer": 3,
          "explanation": "can't help + V-ing=『忍不住做』(feeling);keep + V-ing=『持續做』(hiding)。故 feeling / hiding。",
          "trap": "⚠ can't help V-ing(忍不住)與 keep V-ing(持續)都只接動名詞;別把 can't help 的 help 當一般動詞填 to V。"
        },
        {
          "stem": "The story is so touching that it's hard ___ tears when you read it.",
          "options": [
            "hold back",
            "holding back",
            "to hold back",
            "held back"
          ],
          "answer": 2,
          "explanation": "It is + 形容詞(hard)+ to V 的句型;此處真主詞為不定詞 to hold back。",
          "trap": "⚠ It is hard to V 的虛主詞句型須接不定詞;雖然前面有 so...that,but 空格仍受 hard 後接 to V 支配,別填 V-ing。"
        },
        {
          "stem": "Rather than ___ by bus, they chose ___ to save time.",
          "options": [
            "go / fly",
            "going / to fly",
            "going / flying",
            "to go / flying"
          ],
          "answer": 1,
          "explanation": "Rather than 後常與前面句型平行;choose to V(to fly)。此句 they chose to fly,rather than 對應主動詞用 going,formal 用法常見 Rather than going... chose to fly。故 going / to fly。",
          "trap": "⚠ Rather than 後可接 V-ing 或原形與前句平行,而 choose 後固定接 to V;此處 chose to fly 鎖定第二空為 to fly。"
        },
        {
          "stem": "Don't let the failure ___ you; learning ___ from your mistakes is what really matters.",
          "options": [
            "discourage / to grow",
            "to discourage / to grow",
            "discouraging / grow",
            "discourage / growing"
          ],
          "answer": 0,
          "explanation": "let + 受詞 + 原形動詞(discourage,使役不加 to);learn to V=『學會做某事』,故 learn to grow(學會成長)。故 discourage / to grow。",
          "trap": "⚠ let 後接原形動詞(discourage)不加 to,但 learn 後接 to V(to grow);兩個空格句型不同,別都填原形或都填動名詞。"
        },
        {
          "stem": "She suggested ___ a break, and everyone agreed ___ for ten minutes.",
          "options": [
            "to take / to rest",
            "taking / resting",
            "taking / to rest",
            "to take / resting"
          ],
          "answer": 2,
          "explanation": "suggest 後只接 V-ing(taking);agree 後接 to V(to rest)。故 taking / to rest。",
          "trap": "⚠ suggest 是『只接 V-ing』的動詞,但 agree 接 to V;兩動詞句型相反,別都填同一形式。"
        },
        {
          "stem": "It took her three weeks ___ the report, and she spent every weekend ___ data.",
          "options": [
            "finishing / collecting",
            "finishing / to collect",
            "to finish / to collect",
            "to finish / collecting"
          ],
          "answer": 3,
          "explanation": "It takes sb. + time + to V(to finish);spend + time + V-ing(collecting)。故 to finish / collecting。",
          "trap": "⚠ It takes...to V 接不定詞,但 spend...V-ing 接動名詞;兩個『花時間』句型形式不同,易混淆。"
        },
        {
          "stem": "The manager objected to ___ the meeting and insisted on ___ it as scheduled.",
          "options": [
            "postpone / hold",
            "postponing / holding",
            "to postpone / to hold",
            "postponing / to hold"
          ],
          "answer": 1,
          "explanation": "object to 與 insist on 的 to/on 都是介系詞,後接 V-ing(postponing / holding)。故 postponing / holding。",
          "trap": "⚠ object to 的 to 是介系詞接 V-ing,不是不定詞;與 insist on V-ing 同理,兩空都填動名詞。"
        },
        {
          "stem": "Seeing is ___; only by ___ it with your own eyes can you truly understand.",
          "options": [
            "to believe / see",
            "believe / to see",
            "believing / seeing",
            "believing / to see"
          ],
          "answer": 2,
          "explanation": "Seeing is believing(眼見為憑,主詞補語平行用 V-ing);by 是介系詞接 V-ing(seeing)。故 believing / seeing。",
          "trap": "⚠ 諺語 Seeing is believing 主補對稱用動名詞;by + V-ing 表方法,兩空都填 V-ing,別被諺語拆解誤導。"
        },
        {
          "stem": "My little brother enjoys ___ comic books after school every day.",
          "options": [
            "read",
            "to read",
            "reading",
            "reads"
          ],
          "answer": 2,
          "explanation": "enjoy 後面固定接動名詞（V-ing）表示喜歡做某事，所以要用「reading」；原形、to＋原形、第三人稱單數的形式都不符合 enjoy 的用法。"
        },
        {
          "stem": "We were thirsty on the way home, so we stopped ___ some water at the convenience store.",
          "options": [
            "buying",
            "buy",
            "bought",
            "to buy"
          ],
          "answer": 3,
          "explanation": "這裡是「停下來『去』買水」，表示停止原本的動作以達成另一個目的，要用 stop＋to＋原形，故為「to buy」；若用 stop＋V-ing 會變成「停止買水」，與口渴、走進便利商店的情境不合。",
          "trap": "stop to V（停下來去做某事）和 stop V-ing（停止做某事）意思完全不同，要看情境判斷。"
        },
        {
          "stem": "Amy is really looking forward to ___ her cousins in Taichung during the summer vacation.",
          "options": [
            "visit",
            "to visit",
            "visited",
            "visiting"
          ],
          "answer": 3,
          "explanation": "look forward to 這個片語裡的 to 是介系詞，不是不定詞記號，後面要接動名詞（V-ing），所以用「visiting」；接原形或 to＋原形都是常見錯誤。",
          "trap": "看到 to 就填原形是陷阱；look forward to 的 to 是介系詞，後面必須接 V-ing。"
        },
        {
          "stem": "Ben spends most of his free time ___ the guitar because he dreams of ___ a famous musician someday.",
          "options": [
            "to play / to become",
            "playing / to become",
            "to play / becoming",
            "playing / becoming"
          ],
          "answer": 3,
          "explanation": "spend＋時間＋V-ing 表示「花時間做某事」，第一格要用 playing；dream of 中的 of 是介系詞，後面要接動名詞，第二格要用 becoming，因此兩格都用動名詞。",
          "trap": "兩處都要接動名詞：別把 spend 後面誤填 to＋原形，也別把介系詞 of 後面誤填原形。"
        },
        {
          "stem": "___ English songs every day is a good way to improve your listening skills.",
          "options": [
            "Listen to",
            "Listening to",
            "Listened to",
            "Listens to"
          ],
          "answer": 1,
          "explanation": "句首要用動名詞當主詞，表示「每天聽英文歌」這件事，所以用「Listening to」；動詞原形、過去式或第三人稱單數形式都不能直接當主詞。",
          "trap": "句首缺主詞時要用 V-ing 的動名詞，而且動名詞主詞視為單數，後面搭配 is。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">關係子句 連接示意</text><rect x=\"20\" y=\"50\" width=\"90\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"65\" y=\"71\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"11\">The man</text><text x=\"65\" y=\"98\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"9\">先行詞 (人)</text><rect x=\"125\" y=\"50\" width=\"60\" height=\"34\" rx=\"4\" fill=\"#5aa874\" opacity=\"0.85\"/><text x=\"155\" y=\"71\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"12\">who</text><text x=\"155\" y=\"98\" text-anchor=\"middle\" fill=\"#5aa874\" font-size=\"9\">關代</text><rect x=\"200\" y=\"50\" width=\"100\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"250\" y=\"71\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">is talking...</text><text x=\"250\" y=\"98\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">形容詞子句</text><path d=\"M110 67 L125 67\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><path d=\"M185 67 L200 67\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><path d=\"M155 84 C155 120, 65 120, 65 90\" stroke=\"#5aa874\" stroke-width=\"1.2\" fill=\"none\" stroke-dasharray=\"3 2\"/><polygon points=\"65,90 61,98 69,97\" fill=\"#5aa874\"/><text x=\"160\" y=\"148\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">人用 who / 物用 which</text><text x=\"160\" y=\"167\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">whose=所有格, 接名詞</text></svg>",
          "caption": "關代把子句接回先行詞",
          "points": [
            "who/whom 指人;which 指物;that 人物皆可(但非限定/介系詞後不可用 that)。",
            "whose 表所有格(人或物);關代當受詞時可省略。",
            "where(地點)、when(時間) 為關係副詞。"
          ],
          "trap": "先行詞是『人』用 who、是『物』用 which;關代在子句中的角色(主詞/受詞)決定能否省略,先行詞後緊接動詞時不可省。"
        },
        {
          "h": "限定與非限定關係子句 Defining vs. Non-defining",
          "points": [
            "限定子句沒有逗號,用來界定『是哪一個』,缺了它句意就不完整,例 The boy who broke the window ran away.,who 子句指出是哪個男孩。",
            "非限定子句有逗號,只是補充說明先行詞,拿掉也不影響句子成立,例 My father, who is a doctor, works in Taipei.。",
            "非限定子句不可用 that,也不可省略關代;限定子句裡關代當受詞時才可以省略。"
          ],
          "formula": "先行詞 + (,) + 關代 + 子句 + (,)",
          "trap": "有逗號的非限定子句絕對不能用 that:錯誤 Taipei, that is the capital...;要用 which 或 who。逗號的有無會改變句意,別隨意加減逗號。"
        },
        {
          "h": "關係子句中的主詞動詞一致 Subject-Verb Agreement",
          "points": [
            "關代當主詞時,子句裡的動詞單複數要跟『先行詞』一致,例 the student who studies hard(先行詞單數用 studies)、the students who study hard(複數用 study)。",
            "關代 which/who 本身沒有單複數,真正決定動詞型態的是它所代替的先行詞。",
            "所以判斷動詞要回頭找先行詞,而不是看關代本身。"
          ],
          "formula": "先行詞(單/複) + who/which + 對應的單/複數動詞",
          "trap": "別看到關代就一律用單數動詞:正確 I have friends who live abroad.,錯誤 ...who lives abroad.;動詞要回頭看先行詞 friends 是複數。"
        },
        {
          "h": "關係副詞 where / when / why",
          "points": [
            "先行詞是地點用 where,例 This is the house where I was born.(我出生的房子)。",
            "先行詞是時間用 when,例 I remember the day when we met.(我們相遇的那天)。",
            "先行詞是 the reason(原因)時用 why,例 Tell me the reason why you were late.。"
          ],
          "formula": "地點 + where / 時間 + when / the reason + why + 主詞 + 動詞",
          "trap": "關係副詞後面接『完整句子』,別誤用成關代:正確 the city where I live,錯誤 the city which I live(若要用 which 則要寫成 the city which I live in,句尾需補介系詞)。"
        }
      ],
      "quiz": [
        {
          "stem": "The man ___ is talking to my mother is my new English teacher.",
          "options": [
            "who",
            "whose",
            "which",
            "whom"
          ],
          "answer": 0,
          "explanation": "先行詞 The man 是人,且關代在子句中當主詞(後接動詞 is talking),用 who。",
          "trap": "先行詞是人用 who/whom;此處關代當主詞用 who,不可用受格 whom,也不可用指物的 which。"
        },
        {
          "stem": "That's the house ___ roof was damaged in the typhoon.",
          "options": [
            "which",
            "who",
            "where",
            "whose"
          ],
          "answer": 3,
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
        },
        {
          "stem": "The scientist ___ research on coral reefs won an award has just published a new book about climate change.",
          "options": [
            "whose",
            "which",
            "whom",
            "who"
          ],
          "answer": 0,
          "explanation": "空格後接名詞 research,且 research 是 the scientist 的『研究』,表所有格,須用 whose(the scientist's research won an award)。",
          "trap": "⚠ 看到先行詞是人就直覺選 who 會錯;關鍵在空格後緊接名詞 research 表所有關係,只有 whose 後可直接接名詞,who/whom 後不接名詞。"
        },
        {
          "stem": "Is this the restaurant ___ you told me the chef once cooked for the president?",
          "options": [
            "that",
            "which",
            "where",
            "whose"
          ],
          "answer": 2,
          "explanation": "先行詞 restaurant 是地點,且去掉插入語 you told me 後,子句 the chef once cooked for the president (here) 結構完整、不缺主受詞,須用關係副詞 where。",
          "trap": "⚠ 易被 you told me 干擾而選 which/that;判斷時把插入語拿掉,子句已是完整句(主詞 the chef、動詞 cooked 都在),缺的是『地點副詞』,故用 where 而非關代 which。"
        },
        {
          "stem": "He gave me several reasons, none of ___ sounded convincing enough to change my mind.",
          "options": [
            "them",
            "whom",
            "that",
            "which"
          ],
          "answer": 3,
          "explanation": "非限定子句中『介系詞/數量詞 of + 關代』指物用 which(none of which);先行詞 reasons 是物。",
          "trap": "⚠ none of them 會造成逗號連接兩個獨立句的逗號黏接錯誤(comma splice),須用關代 which 連接;指物用 which 不可用 whom,且 of 後不可用 that。"
        },
        {
          "stem": "The little girl ___ I thought was lost turned out to be the manager's daughter.",
          "options": [
            "whom",
            "who",
            "which",
            "whose"
          ],
          "answer": 1,
          "explanation": "把插入語 I thought 拿掉,子句為 (who) was lost,關代在子句中當主詞(後接 was),指人用主格 who。",
          "trap": "⚠ I thought 是插入語,易誤判關代為 thought 的受詞而選 whom;實際上關代是 was lost 的主詞,須用主格 who,插入的 I thought 不影響格位。"
        },
        {
          "stem": "2025 was the year ___ our school celebrated its hundredth anniversary with a grand ceremony.",
          "options": [
            "which",
            "whose",
            "when",
            "that"
          ],
          "answer": 2,
          "explanation": "先行詞 the year 是時間,且後接的子句 our school celebrated... 結構完整不缺主受詞,須用關係副詞 when(=in which)。",
          "trap": "⚠ 先行詞是時間且子句完整時用關係副詞 when,不可用指物的 which/that(那需子句缺主詞或受詞);此句 celebrated 已有主詞 our school、受詞 anniversary,故用 when。"
        },
        {
          "stem": "My grandmother, ___ I owe everything I have today, passed away peacefully last winter.",
          "options": [
            "which",
            "who",
            "that",
            "whom"
          ],
          "answer": 3,
          "explanation": "關代是 owe ... to 的受詞(owe everything to her),非限定子句指人當受詞用 whom;原句 to whom I owe everything 的 to 移到後方,留下 whom。",
          "trap": "⚠ 非限定子句(逗號)不可用 that;此處關代當動詞 owe 的間接受詞(owe sth to sb),指人當受詞用受格 whom 不可用主格 who。"
        },
        {
          "stem": "The committee will accept any proposal ___ they believe can solve the problem effectively.",
          "options": [
            "which",
            "whom",
            "what",
            "whichever"
          ],
          "answer": 0,
          "explanation": "去掉插入語 they believe,子句為 (which) can solve the problem,關代當主詞、先行詞 proposal 是物,用 which。",
          "trap": "⚠ they believe 為插入語,關代其實是 can solve 的主詞,須用主格;指物用 which 不可用 whom;what 不能引導關係子句(本身含先行詞 proposal 已出現)。"
        },
        {
          "stem": "Few of the tourists ___ visited the island last summer were aware of the danger hidden beneath the calm sea.",
          "options": [
            "which",
            "who",
            "whom",
            "whose"
          ],
          "answer": 1,
          "explanation": "先行詞 the tourists 是人,關代在子句中當主詞(後接動詞 visited),用主格 who。",
          "trap": "⚠ 別被句首 Few of 與後方長定語干擾;關代緊接動詞 visited 當主詞,指人用 who,不可用受格 whom 或指物的 which。"
        },
        {
          "stem": "This is exactly the kind of help ___ we have been looking for during the past few months.",
          "options": [
            "who",
            "what",
            "which",
            "where"
          ],
          "answer": 2,
          "explanation": "先行詞 help(物),關代當 looking for 的受詞,用 which(或 that);關代當受詞雖可省略,但選項中正解為 which。",
          "trap": "⚠ what 不能引導關係子句(先行詞 the kind of help 已出現);先行詞是物用 which 不可用 who;look for 的受詞由關代充當,缺受詞故非 where。"
        },
        {
          "stem": "Tom apologized to everyone in the room, ___ made the atmosphere much less tense.",
          "options": [
            "that",
            "what",
            "who",
            "which"
          ],
          "answer": 3,
          "explanation": "逗號後的 which 為非限定子句,指代『前面整件事』(Tom 道歉這件事),這種用法只能用 which。",
          "trap": "⚠ 關代指『前面整句/整件事』時固定用 which,不可用 that 或 what;此處先行詞不是 everyone(否則語意變成『每個人讓氣氛緩和』),而是整個道歉的行為。"
        },
        {
          "stem": "The old bridge, the surface of ___ had cracked badly, was finally closed for repairs.",
          "options": [
            "which",
            "that",
            "it",
            "whose"
          ],
          "answer": 0,
          "explanation": "the surface of which = whose surface,指物的所有格。空格前有介系詞 of,只能填 which(of which);whose 不與 of 連用,it/that 也不能當 of 的關代受詞。先行詞 the bridge 是物,故選 which。",
          "trap": "⚠ the surface of it 會造成逗號黏接兩個獨立句的錯誤;of 後不可接 that,且須用關代 which 連接子句;此結構等同 whose surface，但本題空格在 of 之後故選 which。"
        },
        {
          "stem": "She is one of those people ___ never give up no matter how difficult the situation becomes.",
          "options": [
            "that's",
            "who",
            "whom",
            "which"
          ],
          "answer": 1,
          "explanation": "先行詞為 those people(複數人),關代當子句主詞用 who,動詞配合複數先行詞用原形 give(one of those people who give up)。",
          "trap": "⚠ one of + 複數名詞 + who 時,關代指的是複數的 people 而非 one,故動詞用 give 不用 gives;指人用 who 不可用 which。"
        },
        {
          "stem": "There was something strange about the way ___ he stared at the painting for nearly an hour.",
          "options": [
            "which",
            "how",
            "that",
            "in which"
          ],
          "answer": 2,
          "explanation": "先行詞為 the way 時,關係副詞用 that 或 in which,或兩者皆省略;the way how 為錯誤用法,故選 that。",
          "trap": "⚠ the way 後不可用 how(the way how 是錯誤搭配),須用 that、in which 或省略;選項有 how 與 in which 干擾,正確習慣用法是 the way that。"
        },
        {
          "stem": "The professor recommended three books, all of ___ are now out of print and hard to find.",
          "options": [
            "which",
            "that",
            "them",
            "those"
          ],
          "answer": 0,
          "explanation": "non-restrictive 子句中『all of + 關代』指物用 which(all of which);先行詞 three books 是物。",
          "trap": "⚠ all of them 會造成兩獨立句以逗號相連的黏接錯誤,須用關代 which;of 後不可接 that,指物不可用指人結構,故為 all of which。"
        },
        {
          "stem": "Anyone ___ wishes to join the debate club must sign up before this Friday afternoon.",
          "options": [
            "whom",
            "which",
            "whose",
            "who"
          ],
          "answer": 3,
          "explanation": "先行詞 Anyone(指人)且關代當子句主詞(後接 wishes),用主格 who。",
          "trap": "⚠ Anyone/Everyone 等不定代名詞指人,關代用 who;此處當主詞用 who 不可用受格 whom,也不可用指物的 which。"
        },
        {
          "stem": "It was in this very house ___ the famous writer spent the last ten years of his life.",
          "options": [
            "which",
            "that",
            "where",
            "when"
          ],
          "answer": 1,
          "explanation": "此為強調句 It was ... that ...,強調地點副詞片語 in this very house,連接詞用 that(不是關係副詞 where)。",
          "trap": "⚠ 這是『It is/was ... that ...』強調句而非關係子句:被強調的 in this very house 已含介系詞,故空格用 that;若誤判為先行詞 house 而填 where,則 in 會多餘。"
        },
        {
          "stem": "The reason ___ he gave for being late sounded too unbelievable to be true.",
          "options": [
            "where",
            "why",
            "which",
            "for that"
          ],
          "answer": 2,
          "explanation": "先行詞 the reason,但子句 he gave (the reason) 缺受詞(give 的受詞),須用關代 which/that 當受詞,而非關係副詞 why。",
          "trap": "⚠ 看到 the reason 易反射選 why,但 why 後須接完整句;此句 gave 缺受詞,關代要當 gave 的受詞,故用 which 不可用 why(why=for which 是副詞不佔受詞位)。"
        },
        {
          "stem": "We finally reached a small village, beyond ___ lay nothing but endless desert.",
          "options": [
            "it",
            "that",
            "where",
            "which"
          ],
          "answer": 3,
          "explanation": "介系詞 beyond + 關代,先行詞 village 是物,介系詞後指物用 which(beyond which lay... 為倒裝);介系詞後不可用 that。",
          "trap": "⚠ 介系詞(beyond)後不可接 that,指物須用 which;此句為地方副詞置前的倒裝(beyond which lay nothing),別因有地點概念就選 where,where 前不加介系詞。"
        },
        {
          "stem": "The two candidates, neither of ___ had enough experience, were rejected by the hiring panel.",
          "options": [
            "whom",
            "who",
            "them",
            "which"
          ],
          "answer": 0,
          "explanation": "non-restrictive 子句『neither of + 關代』指人用 whom(neither of whom);先行詞 candidates 是人,介系詞 of 後用受格 whom。",
          "trap": "⚠ neither of them 造成逗號黏接錯誤,須用關代;介系詞 of 後指人用受格 whom 不可用主格 who;先行詞是人不可用 which。"
        },
        {
          "stem": "That was the moment ___ I realized how much my parents had sacrificed for me over the years.",
          "options": [
            "that",
            "when",
            "which",
            "what"
          ],
          "answer": 1,
          "explanation": "先行詞 the moment 是時間,後接子句 I realized... 結構完整(主詞 I、動詞 realized、受詞子句皆在),用關係副詞 when。",
          "trap": "⚠ 子句若完整不缺主受詞,先行詞為時間須用 when 而非 which/that;此句 realized 已有主詞 I 與受詞 how 子句,故空格填時間副詞 when,不可用 what(what 不引導關係子句)。"
        },
        {
          "stem": "The medicine ___ side effects had not been fully tested was pulled from the market immediately.",
          "options": [
            "which",
            "that",
            "of which",
            "whose"
          ],
          "answer": 3,
          "explanation": "空格後接名詞 side effects,且是 the medicine 的『副作用』,表所有格用 whose(物亦可用 whose);the medicine's side effects had not been tested。",
          "trap": "⚠ 先行詞是物也可用 whose 表所有格;空格後緊接名詞 side effects,只有 whose 能直接接名詞,which/that 後須接動詞或缺成分的句子,of which 則需放在名詞之後(side effects of which)。"
        },
        {
          "stem": "The bakery ___ sells the mango cake my sister loves is right next to our school.",
          "options": [
            "who",
            "which",
            "whom",
            "whose"
          ],
          "answer": 1,
          "explanation": "先行詞 the bakery 是物(店家),關係代名詞在子句中當主詞,後面直接接動詞 sells,指物當主詞用 which。"
        },
        {
          "stem": "I have a classmate ___ father is a famous pilot for China Airlines.",
          "options": [
            "whose",
            "who",
            "whom",
            "which"
          ],
          "answer": 0,
          "explanation": "空格後緊接名詞 father,且 father 是 classmate 的父親,表『某人的父親』的所有關係;先行詞是人、表所有格時用 whose。",
          "trap": "⚠ 先行詞是人易直覺選指人的主格,但空格後緊接名詞 father 表所有關係,只有表所有格的關代後面可直接接名詞;主格關代後面要接動詞、不接名詞。"
        },
        {
          "stem": "The stadium ___ we watched the baseball final last night can hold fifty thousand people.",
          "options": [
            "which",
            "that",
            "whose",
            "where"
          ],
          "answer": 3,
          "explanation": "先行詞 the stadium 是地點,且子句 we watched the baseball final 結構完整(主詞 we、動詞 watched、受詞 the baseball final 都在),不缺主詞或受詞,須用關係副詞 where。",
          "trap": "⚠ 別看到先行詞是物就選指物的關代;此句子句已完整、不缺主受詞,缺的是『地點副詞』,故用 where,而非需要空缺才能用的指物關代。"
        },
        {
          "stem": "The author ___ everyone expected would win the prize surprisingly lost to a newcomer.",
          "options": [
            "whom",
            "who",
            "which",
            "whose"
          ],
          "answer": 1,
          "explanation": "把插入語 everyone expected 拿掉,子句為 ___ would win the prize,關係代名詞是 would win 的主詞;先行詞 the author 是人、在子句中當主詞,用主格 who。",
          "trap": "⚠ everyone expected 是插入語,易誤判關代為 expected 的受詞而選受格;實際上關代是後面 would win 的主詞,指人須用主格 who,插入語不影響格位。"
        },
        {
          "stem": "The company launched five new phones last year, three of ___ became best-sellers within a month.",
          "options": [
            "them",
            "that",
            "whom",
            "which"
          ],
          "answer": 3,
          "explanation": "逗號後為非限定子句,補充說明前面的 phones;『數量詞 three of + 關係代名詞』指物用 which(three of the phones became best-sellers),先行詞 phones 是物。",
          "trap": "⚠ 若填代名詞 them 會變成兩個獨立句用逗號黏接(comma splice)的錯誤,須用關代連接;介系詞 of 後不可接 that,指物也不可用指人的 whom。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">連接詞 只能留一個</text><rect x=\"30\" y=\"45\" width=\"90\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"75\" y=\"66\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">It rained</text><rect x=\"135\" y=\"45\" width=\"100\" height=\"34\" rx=\"4\" fill=\"#5aa874\" opacity=\"0.85\"/><text x=\"185\" y=\"66\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\">Although</text><rect x=\"250\" y=\"45\" width=\"60\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"280\" y=\"66\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">played</text><line x1=\"120\" y1=\"62\" x2=\"135\" y2=\"62\" stroke=\"#3a342e\"/><line x1=\"235\" y1=\"62\" x2=\"250\" y2=\"62\" stroke=\"#3a342e\"/><rect x=\"120\" y=\"105\" width=\"90\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"165\" y=\"126\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"11\">but</text><line x1=\"135\" y1=\"139\" x2=\"195\" y2=\"105\" stroke=\"#c9755c\" stroke-width=\"2\"/><line x1=\"195\" y1=\"139\" x2=\"135\" y2=\"105\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"160\" y=\"166\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">Although 與 but 不可同句並用</text></svg>",
          "caption": "雖然但是英文只擇一",
          "points": [
            "對等:and, but, or, so;成對:both…and, not only…but also, either…or, neither…nor。",
            "從屬:because(原因)、although/though(雖然)、when/while(時間)、if(條件)。",
            "中文『雖然…但是』英文只能擇一:用 Although 就不用 but。"
          ],
          "trap": "Although 和 but 不能同句並用;because 和 so 也不能同句並用(中文兩個都說,英文只留一個)。"
        },
        {
          "h": "副詞子句與時間連接詞 Time Clauses",
          "points": [
            "由 when, while, before, after, as soon as, until 引導時間副詞子句,描述動作發生的時間或先後,例 I will call you when I arrive.。",
            "時間或條件副詞子句中,即使指未來也用『現在式』代替未來式,例 When she comes, we will start.(不用 will come)。",
            "while 多搭配進行式表『正當…的時候』,例 While I was cooking, the phone rang.。"
          ],
          "formula": "主要子句 + when/while/after... + 主詞 + 現在式(代替未來式)",
          "trap": "時間或條件副詞子句裡不用 will:正確 When it stops raining, we will go.,錯誤 When it will stop raining...;未來的意思由主要子句的 will 表達即可。"
        },
        {
          "h": "表原因與結果的連接 because / so / so that",
          "points": [
            "because 引導原因子句,放結果之前或之後皆可,例 He stayed home because he was sick.;so 連接結果,例 He was sick, so he stayed home.。",
            "because 後面接『主詞加動詞』的句子;because of 後面只接名詞或動名詞,例 because of the rain。",
            "so... that... 表『如此…以致於』,例 He was so tired that he fell asleep.;so 後面接形容詞或副詞。"
          ],
          "formula": "so + 形容詞/副詞 + that + 主詞 + 動詞(如此…以致於)",
          "trap": "because 與 so 不可在同一句並用:中文『因為…所以…』英文只能擇一,錯誤 Because he was sick, so he stayed home.;另外 because 後接句子、because of 後接名詞,別混用。"
        },
        {
          "h": "成對連接詞與主詞動詞一致 Correlative Conjunctions",
          "points": [
            "both A and B 視為複數,動詞用複數,例 Both Tom and Mary are here.。",
            "either A or B、neither A nor B、not only A but also B,動詞跟『最靠近的 B』一致,例 Neither you nor he is wrong. 或 Not only the students but also the teacher likes it.。",
            "成對連接詞前後要連接『對等』的詞類或結構,例 not only by bus but also by train(介系詞片語對介系詞片語)。"
          ],
          "formula": "either/neither/not only ... 動詞跟最靠近的主詞一致",
          "trap": "neither...nor 與 either...or 的動詞看最靠近的那個主詞,不是一律用複數:正確 Either the cats or the dog is noisy.,錯誤 ...are noisy.;且 neither...nor 本身已含否定,句中不可再加 not。"
        }
      ],
      "quiz": [
        {
          "stem": "___ it was raining hard, the players kept on with the game.",
          "options": [
            "Because",
            "Unless",
            "So",
            "Although"
          ],
          "answer": 3,
          "explanation": "下大雨『卻』仍繼續比賽,表讓步轉折,用 Although(雖然)。",
          "trap": "前後語意相反(雨大 vs 照打)須用 Although;Because 表原因語意不通,且英文不可 Although…but 並用。"
        },
        {
          "stem": "Hurry up, ___ you will miss the last train.",
          "options": [
            "or",
            "but",
            "and",
            "so"
          ],
          "answer": 0,
          "explanation": "祈使句 + or + 將會…=否則(不快點就會錯過火車)。",
          "trap": "祈使句後 and=就會(好結果)、or=否則(壞結果);錯過火車是壞結果須用 or,別誤填 and。"
        },
        {
          "stem": "___ my brother nor I am interested in playing video games all day long.",
          "options": [
            "Either",
            "Both",
            "Not only",
            "Neither"
          ],
          "answer": 3,
          "explanation": "成對連接詞 neither...nor...(兩者都不);呼應後面的 nor,且動詞依就近原則配合 I 用 am。",
          "trap": "⚠ 與 nor 配對的是 Neither(neither...nor 兩者皆否定);either 須配 or,both 須配 and,看後面的 nor 即可鎖定 Neither。"
        },
        {
          "stem": "He kept practicing every day ___ he could win the speech contest.",
          "options": [
            "such that",
            "so",
            "so that",
            "because"
          ],
          "answer": 2,
          "explanation": "so that + 子句表『目的』(為了能…);此句說明天天練習是為了贏比賽。",
          "trap": "⚠ so that(為了…)引導目的副詞子句;單獨的 so 表結果不接完整目的子句,because 表原因語意不符,別把 so that 拆開。"
        },
        {
          "stem": "___ had I sat down ___ the phone started ringing again.",
          "options": [
            "Hardly ... when",
            "No sooner ... than",
            "Not only ... but",
            "As soon ... as"
          ],
          "answer": 0,
          "explanation": "Hardly/Scarcely ... when ... 與 No sooner ... than ... 都表「一…就…」。句首倒裝為 Hardly had I + p.p.，後半須搭配 when，故選 Hardly ... when。",
          "trap": "⚠ No sooner 必須配 than（不是 when），Hardly/Scarcely 才配 when；倒裝用了 had（過去完成）排除 As soon as，又因兩個空格須成對，唯一正確配對是 Hardly ... when。"
        },
        {
          "stem": "She is good not only at singing ___ at dancing, which makes her the star of the show.",
          "options": [
            "and also",
            "but also",
            "or also",
            "as well"
          ],
          "answer": 1,
          "explanation": "not only A but also B 為固定成對連接詞（不僅 A 而且 B），故空格填 but also。",
          "trap": "⚠ not only 的固定搭配是 but also（不是 and also）；as well 須以 as well as 形式出現且不與 not only 配對，別被「也」的中文語感誤導成 and also。"
        },
        {
          "stem": "___ you study or play, you should always do your best — that's my father's motto.",
          "options": [
            "Weather",
            "Whether",
            "Either",
            "Neither"
          ],
          "answer": 1,
          "explanation": "Whether A or B 表「無論是 A 還是 B」，引導讓步副詞子句。句意為「無論讀書或玩」，故用 Whether。",
          "trap": "⚠ Whether（無論）才能引導子句並配 or；Either 配 or 是連接對等項而非引導完整子句作主句的狀語，且此處需「無論…都…」的讓步語氣；Weather（天氣）為同音陷阱。"
        },
        {
          "stem": "The harder you work, ___ you will become — success doesn't come by luck.",
          "options": [
            "the successful",
            "the most successful",
            "more successful",
            "the more successful"
          ],
          "answer": 3,
          "explanation": "「The + 比較級 ..., the + 比較級 ...」表「越…就越…」。前半 The harder，後半須對應 the more successful。",
          "trap": "⚠ 此句型後半也必須有 the，且 successful 為多音節形容詞須用 the more successful（不是 the successful 或 more successful）；漏掉 the 或誤用最高級皆錯。"
        },
        {
          "stem": "He spoke so fast ___ none of us could follow what he was saying.",
          "options": [
            "that",
            "so that",
            "such that",
            "as that"
          ],
          "answer": 0,
          "explanation": "so + 形容詞/副詞 + that 表「如此…以致於…」。此處 so fast that 引導結果子句，故填 that。",
          "trap": "⚠ 已有 so（修飾副詞 fast），結果子句只需 that；so that 是「為了」表目的且不與前面的 so 並用，such that 須搭配名詞（such + n. + that），此處是副詞故用 so ... that。"
        },
        {
          "stem": "___ the weather was terrible, the rescue team kept searching for the missing climbers all night.",
          "options": [
            "Despite",
            "Because of",
            "Even though",
            "In spite of"
          ],
          "answer": 2,
          "explanation": "空格後接完整子句（the weather was terrible），須用「連接詞」Even though（即使／儘管），表讓步。",
          "trap": "⚠ Despite / In spite of 是「介系詞」只能接名詞或動名詞，不能接子句；後面是 the weather was terrible（含主詞+動詞的子句），故須用連接詞 Even though，別被「儘管」的中文誤導選成介系詞。"
        },
        {
          "stem": "Take this umbrella with you; ___ you'll get soaked in the heavy rain on the way home.",
          "options": [
            "otherwise",
            "therefore",
            "moreover",
            "however"
          ],
          "answer": 0,
          "explanation": "前句建議帶傘，後句說明「否則」會淋濕，前後為「條件—不利後果」關係，用 otherwise（否則，= or else）。",
          "trap": "⚠ otherwise 表「否則／不然」連接「未照做的負面後果」；therefore（因此）是順承結果、however（然而）是轉折、moreover（此外）是補充，皆不符「不帶傘就會淋濕」的假設語氣。"
        },
        {
          "stem": "___ he is rich, he is far from happy; money alone cannot buy a peaceful mind.",
          "options": [
            "Rich though as he is",
            "As rich he is",
            "Rich as he is",
            "Though rich as he is"
          ],
          "answer": 2,
          "explanation": "讓步倒裝句型「形容詞 + as/though + 主詞 + be」表「雖然…」，正確語序為 Rich as he is（= Although he is rich）。",
          "trap": "⚠ 此讓步倒裝須把形容詞提到句首：Rich as he is；不可寫成 As rich he is，也不可 as 與 though 並用（Rich though...或 Rich as... 擇一），故唯一正確是 Rich as he is。"
        },
        {
          "stem": "I will lend you the book ___ you promise to return it by Friday.",
          "options": [
            "unless",
            "even if",
            "in case",
            "as long as"
          ],
          "answer": 3,
          "explanation": "「我會借你書，只要你答應週五前還」表正向條件，as long as（只要）= if，引導條件子句。",
          "trap": "⚠ as long as（只要）引導肯定條件；unless（除非＝if not）會使語意反轉成「除非你答應…否則才借」邏輯不通，in case（以防）、even if（即使）也不符「附帶條件才借」之意。"
        },
        {
          "stem": "Neither the teachers nor the principal ___ aware of the change in the exam schedule.",
          "options": [
            "are",
            "is",
            "were",
            "have been"
          ],
          "answer": 1,
          "explanation": "neither ... nor ... 連接兩主詞時動詞依「就近原則」與最靠近的 the principal（單數）一致，故用 is。",
          "trap": "⚠ neither A nor B 的動詞看「最靠近」的 B（the principal 單數）→ is；雖然前面有複數 the teachers，但就近原則以 nor 後的單數為準，別誤用 are/were。"
        },
        {
          "stem": "It won't be long ___ the new high-speed rail connects the two cities.",
          "options": [
            "since",
            "before",
            "until",
            "after"
          ],
          "answer": 1,
          "explanation": "It won't be long before ... 為固定句型，表「不久之後就會…」。故填 before。",
          "trap": "⚠ It will/won't be long before... 是固定搭配，意為「不久就…」；此處不可用 until（It won't be long until 並非標準用法），before 才能正確表達「在…之前不會太久」。"
        },
        {
          "stem": "He ran to the station as fast as he could, ___ he still missed the train.",
          "options": [
            "now that",
            "so that",
            "in order that",
            "only to find that"
          ],
          "answer": 3,
          "explanation": "only to + V 表「結果卻（出乎意料地）…」。拼命跑到車站卻仍錯過火車，用 only to find that 表意外的負面結果。",
          "trap": "⚠ only to（不料卻…）表非預期的負面結果；so that / in order that 表「目的」（為了），now that 表「既然」，皆不符「努力後卻落空」的轉折，別把結果誤當目的。"
        },
        {
          "stem": "___ you have made up your mind, there's no point in arguing about it any further.",
          "options": [
            "By the time",
            "So that",
            "Now that",
            "In case"
          ],
          "answer": 2,
          "explanation": "Now that 表「既然／由於現在…」，引導原因子句。句意「既然你已下定決心，再爭也沒意義」。",
          "trap": "⚠ Now that（既然）兼具時間與原因，引導「已成立的前提」；So that（為了/以致）、In case（以防）、By the time（到…時候）皆不符「既然…就別再…」的因果語氣。"
        },
        {
          "stem": "The plan sounds perfect in theory; ___, it is almost impossible to carry out in real life.",
          "options": [
            "nevertheless",
            "in addition",
            "as a result",
            "for instance"
          ],
          "answer": 0,
          "explanation": "前句「理論上完美」與後句「現實幾乎無法執行」為強烈轉折，用 nevertheless（然而、儘管如此）。",
          "trap": "⚠ 前後語意對立（理論完美 vs 現實做不到）須用轉折詞 nevertheless；as a result（因此）順承、in addition（此外）補充、for instance（舉例）皆不符對比邏輯。"
        },
        {
          "stem": "___ the students ___ the teacher was satisfied with the result, for the whole project had clearly failed.",
          "options": [
            "Although ... but",
            "Neither ... nor",
            "Even though ... yet",
            "Whether ... or"
          ],
          "answer": 1,
          "explanation": "句意「學生和老師都不滿意結果」是全盤否定;『Neither A nor B』表「既不…也不…」,配合後句「整個專案顯然失敗」最合理。動詞依就近原則與最近主詞 the teacher(單數)一致,故用 was(已在題幹)。",
          "trap": "⚠ Although/Even though 是連接詞,英文不可再與 but/yet 並用(擇一即可),故排除前兩項;Whether...or 表「無論…或」語意不合。只有 Neither A nor B(兩者皆否)能呼應「都不滿意」的全盤否定。"
        },
        {
          "stem": "Read the dialogue: A: \"Will the picnic be cancelled?\" B: \"___ it rains, we'll move it indoors, so don't worry.\" Choose the best word for the blank.",
          "options": [
            "Unless",
            "In case",
            "Even if",
            "As though"
          ],
          "answer": 2,
          "explanation": "B 說「就算下雨，我們也會移到室內」，表示讓步——即使下雨野餐照辦，用 Even if（即使）最能傳達「不必擔心」。",
          "trap": "⚠ Even if（即使）強調「下雨也照常」的安撫語氣；Unless（除非＝if not）會變成「除非下雨否則移室內」邏輯顛倒，In case（以防萬一）語氣較弱不貼合「別擔心」，As though（彷彿）語意不通。"
        },
        {
          "stem": "Look at the sign: \"Keep quiet in the library ___ others can concentrate on their reading.\" The blank means the purpose of the rule. Choose the best answer.",
          "options": [
            "so",
            "such that",
            "because",
            "so that"
          ],
          "answer": 3,
          "explanation": "標示說明保持安靜的『目的』是讓他人能專心閱讀，目的副詞子句用 so that（為了…）。",
          "trap": "⚠ 表「目的」用 so that + 子句；單獨的 so 表「結果」、because 表「原因」（方向相反，是因為別人要專心才安靜嗎？語意不順），such that 需搭名詞，故正解 so that。"
        },
        {
          "stem": "From the weather report: \"It will be sunny in the morning; ___, a sudden storm may hit the coast by evening.\" Choose the connector that fits the contrast.",
          "options": [
            "thus",
            "on the other hand",
            "in conclusion",
            "likewise"
          ],
          "answer": 1,
          "explanation": "上午晴、傍晚卻可能有暴風雨，前後天氣對比，用 on the other hand（另一方面、相對地）表轉折對照。",
          "trap": "⚠ 前後為對比關係用 on the other hand；thus（因此）順承、likewise（同樣地）表類比、in conclusion（總之）為總結，皆無法表達「晴 vs 暴風雨」的相反走向。"
        },
        {
          "stem": "___ how hard the problem looks, our teacher always reminds us never to give up.",
          "options": [
            "However",
            "Whatever",
            "No matter",
            "Despite"
          ],
          "answer": 2,
          "explanation": "No matter how + 形容詞/副詞 表「無論多麼…」，引導讓步子句。No matter how hard = 無論多難。",
          "trap": "⚠ 後接 how + adj.（how hard）須用 No matter；However 雖也可接形容詞（However hard），但 However how 連用是錯的，此處空格後緊跟 how，故只能是 No matter how；Despite 為介系詞不接子句，Whatever 須接名詞。"
        },
        {
          "stem": "She had ___ finished her homework ___ the power suddenly went out across the whole neighborhood.",
          "options": [
            "barely ... when",
            "scarcely ... than",
            "hardly ... than",
            "no sooner ... when"
          ],
          "answer": 0,
          "explanation": "「一…就…」句型中，hardly/scarcely/barely 配 when，no sooner 配 than。此處兩空為 barely ... when，正確成對。",
          "trap": "⚠ 配對規則：hardly/scarcely/barely → when；no sooner → than。選項 1(no sooner...when)、2(scarcely...than)、3(hardly...than)皆配錯，唯有 barely ... when 正確；別把 than 與 when 混用。"
        },
        {
          "stem": "Study the chart of two students' scores: Tom rose from 60 to 90, ___ Mary dropped from 85 to 70 over the same term. Choose the connector showing the contrast.",
          "options": [
            "for",
            "since",
            "as",
            "while"
          ],
          "answer": 3,
          "explanation": "Tom 進步、Mary 退步，同一學期內形成對比，用 while（然而、相對地）表「對比」用法最恰當。",
          "trap": "⚠ while 除「當…時」外亦可表「然而／相對」的對比，正好連接 Tom 升、Mary 降；since（既然/自從）、as（因為/當）、for（因為）都偏「原因/時間」而非「對比」，會誤把對照關係讀成因果。"
        },
        {
          "stem": "Ted waited at the library ______ the heavy rain finally stopped.",
          "options": [
            "because",
            "although",
            "unless",
            "until"
          ],
          "answer": 3,
          "explanation": "句意為「泰德在圖書館一直等,『到』大雨終於停了為止」,動作持續到某個時間點才結束,用表時間的從屬連接詞「直到」最合適。表原因、表讓步、表條件的連接詞都無法表達『持續到某時間點』的語意;尤其人是在『等雨停』,雨一停等待就結束,讓步語意並不成立。"
        },
        {
          "stem": "______ Nina practices the violin every day, she still makes many mistakes in the concert.",
          "options": [
            "Because",
            "Since",
            "Although",
            "So"
          ],
          "answer": 2,
          "explanation": "前後句意相反:「每天練小提琴」卻「仍犯很多錯」,屬讓步關係,須用表「雖然」的從屬連接詞。表原因的連接詞會使前後邏輯衝突;而表「所以」的對等連接詞不能放在句首引導從屬子句。",
          "trap": "看到前句像原因就選表「因為」的選項,忽略後句的 still 透露前後語意其實相反。"
        },
        {
          "stem": "We should leave for the station now, ______ we'll miss the last train home.",
          "options": [
            "or",
            "and",
            "but",
            "for"
          ],
          "answer": 0,
          "explanation": "句型為「建議 + 否則 + 不良後果」,意為「現在就該出發去車站,否則就會錯過末班車」。用表「否則」的對等連接詞帶出『不這麼做就會發生』的壞結果。後果是確定會發生的(will),因此表順接、表轉折、表原因的連接詞都不合:錯過末班車不是出發造成的、也不是出發的原因、更不是『即使出發仍會發生』的無奈,而是『不出發就會發生』的警告。",
          "trap": "想成『而且會錯過』而誤選表「而且」的選項;關鍵在句意是『不出發就會有壞結果』,屬「否則」的警告用法。"
        },
        {
          "stem": "Unless you finish both your homework ______ your review of the new words tonight, you won't be ready for tomorrow's quiz.",
          "options": [
            "so",
            "and",
            "but",
            "or"
          ],
          "answer": 1,
          "explanation": "句中的 both 必須與表「並且」的對等連接詞搭配,形成 both...and 的相關連接詞結構,把「做完功課」和「複習生字」兩件都必須完成的準備並列起來。both 只能配「並且」,因此表結果、表轉折的連接詞都不能與 both 連用;表「或者」的連接詞既不能與 both 搭配,其『二選一』的語意也與『兩件都要完成』不符。",
          "trap": "看到 unless 就反射想搭表「否則/或者」的選項;但句中的 both 只能搭配表「並且」的連接詞(both...and),兩件事都要完成,並非二選一。"
        },
        {
          "stem": "The path became muddy ______ it had rained all night, so the hikers walked very slowly.",
          "options": [
            "so that",
            "though",
            "because",
            "in case"
          ],
          "answer": 2,
          "explanation": "「小路變得泥濘」的原因是「整晚下雨」,兩者為因果關係,須用表「因為」的從屬連接詞。表目的、表讓步、表「以防萬一」的連接詞皆與『下雨導致泥濘』的因果不符;句尾另有 so 帶出後續結果,顯示前段填空是在陳述原因。",
          "trap": "句尾已有表結果的 so,容易誤以為空格也要用 so that;其實空格處要說明『泥濘』的原因,應選表「因為」的連接詞。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">假設語氣 時態往前推一格</text><text x=\"30\" y=\"55\" fill=\"#c9755c\" font-size=\"11\">與現在相反</text><rect x=\"30\" y=\"62\" width=\"120\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"90\" y=\"81\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">If + 過去式</text><rect x=\"180\" y=\"62\" width=\"120\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"240\" y=\"81\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">would + 原形</text><line x1=\"150\" y1=\"77\" x2=\"180\" y2=\"77\" stroke=\"#5aa874\" stroke-width=\"2\"/><polygon points=\"180,77 172,73 172,81\" fill=\"#5aa874\"/><text x=\"30\" y=\"120\" fill=\"#c9755c\" font-size=\"11\">與過去相反</text><rect x=\"30\" y=\"127\" width=\"120\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"90\" y=\"146\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">If + had p.p.</text><rect x=\"180\" y=\"127\" width=\"120\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"240\" y=\"146\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">would have p.p.</text><line x1=\"150\" y1=\"142\" x2=\"180\" y2=\"142\" stroke=\"#5aa874\" stroke-width=\"2\"/><polygon points=\"180,142 172,138 172,146\" fill=\"#5aa874\"/><text x=\"160\" y=\"174\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">be 動詞一律用 were</text></svg>",
          "caption": "假設語氣時態往前推一格",
          "points": [
            "與現在事實相反:If + 過去式, 主詞 + would/could + 原形 (If I were you, I would…)。",
            "與過去事實相反:If + had p.p., 主詞 + would have + p.p.。",
            "be 動詞在假設語氣一律用 were。"
          ],
          "trap": "與現在相反用『過去式』、與過去相反用『過去完成』,時態往前推一格;if 子句 be 動詞用 were(I/he 也用 were)。"
        },
        {
          "h": "與未來事實相反 vs. 可能成真的條件句",
          "points": [
            "真實條件句(可能成真)用 If 加現在式,主要子句用 will 加原形動詞,例 If it rains tomorrow, I will stay home.,表示未來真有可能下雨。",
            "與現在事實相反的假設句用 If 加過去式,主要子句用 would 加原形動詞,動作其實不真實,例 If I had wings, I would fly to you.。",
            "判斷關鍵:看說話者是『預期會發生』還是『純屬空想』,前者用現在式加 will,後者用過去式加 would。"
          ],
          "formula": "真實:If + 現在式, S + will + 原形 / 假設:If + 過去式, S + would + 原形",
          "trap": "別把真實條件句也用過去式:明天可能下雨要說 If it rains tomorrow, I will...,不是 If it rained;另外 If 條件子句裡不放 will,will 要放在主要子句。"
        },
        {
          "h": "I wish 表達與現在事實相反的願望",
          "points": [
            "wish 後面接與『現在』事實相反的願望,子句用過去式,例 I wish I were taller.(我希望我更高,其實不高)。",
            "be 動詞在 wish 子句中一律用 were,不分人稱,例 I wish I were rich.。",
            "wish 也常用來客氣表達遺憾,例 I wish I had more time.(可惜時間不夠)。"
          ],
          "formula": "S + wish + (that) + 主詞 + were/過去式(與現在相反)",
          "trap": "wish 後面的 be 動詞一律用 were,不分人稱:會考標準答案是 I wish I were rich.,而非 I wish I was rich.;另外 wish 不可直接接現在式來表達這種與事實相反的願望。"
        },
        {
          "h": "用 if 引導的勸告與假設 If I were you",
          "points": [
            "要給對方建議時,常用 If I were you, I would...,例 If I were you, I would say sorry.(如果我是你,我會道歉)。",
            "這是與現在事實相反的假設,所以 be 動詞用 were、主要子句用 would 加原形動詞。",
            "語氣比直接命令委婉,適合用來提建議或表達看法。"
          ],
          "formula": "If I were you, I would + 原形動詞 ...",
          "trap": "這種與事實相反的假設,be 動詞要用 were 不用 was:正確 If I were you...,錯誤 If I was you...;主要子句也別忘了用 would,例 ..., I would tell her.。"
        }
      ],
      "quiz": [
        {
          "stem": "If I ___ a bird, I would fly to you right now.",
          "options": [
            "were",
            "am",
            "was",
            "had been"
          ],
          "answer": 0,
          "explanation": "與現在事實相反(我不是鳥),if 子句用過去式,be 動詞一律用 were。",
          "trap": "假設語氣 be 動詞固定用 were(連 I 也用 were);right now 表與『現在』相反,不可用 had been(那是與過去相反)。"
        },
        {
          "stem": "If you had studied harder, you ___ the exam last week.",
          "options": [
            "passed",
            "would pass",
            "will pass",
            "would have passed"
          ],
          "answer": 3,
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
        },
        {
          "stem": "If it ___ so heavily yesterday, we could have finished the hiking trail, but we had to turn back halfway.",
          "options": [
            "didn't rain",
            "doesn't rain",
            "wouldn't rain",
            "hadn't rained"
          ],
          "answer": 3,
          "explanation": "yesterday 與主句 could have finished 顯示與『過去』事實相反,if 子句須用過去完成式;否定即 hadn't rained。",
          "trap": "⚠ 主句是 could have + p.p.(與過去相反),if 子句必須用 had p.p.;didn't rain 是與現在相反的時態,時間詞 yesterday + could have 已鎖定過去完成。"
        },
        {
          "stem": "She talks as if she ___ the whole story, but actually she only heard part of it.",
          "options": [
            "knew",
            "would know",
            "had known",
            "knows"
          ],
          "answer": 0,
          "explanation": "as if 引導與『現在』事實相反(她其實不全知道),主句現在式 talks,從句用過去式 knew。",
          "trap": "⚠ as if 後與現在相反用過去式 knew;had known 是與過去相反。主句 talks(現在式)且 actually she only hears 為現在情境,不可往前推到過去完成。"
        },
        {
          "stem": "___ it not for your timely help, the whole project would have collapsed last month.",
          "options": [
            "Had",
            "If",
            "Were",
            "Should"
          ],
          "answer": 2,
          "explanation": "Were it not for = If it were not for(要不是…),這是與事實相反假設句省略 if 的倒裝固定句型。",
          "trap": "⚠ 'Were it not for' 是固定倒裝句(=If it were not for),雖主句 would have collapsed 像過去,但 be 動詞倒裝仍用 Were;Had 需搭配 it not been for 才成立。"
        },
        {
          "stem": "Look at the dark clouds. It's high time we ___ home before the storm hits.",
          "options": [
            "go",
            "went",
            "have gone",
            "will go"
          ],
          "answer": 1,
          "explanation": "It's (high) time + 主詞 + 過去式,表『早該做卻還沒做』,屬假設語氣,用 went。",
          "trap": "⚠ 'It's time/high time + S + 過去式' 是固定假設句型,動詞用過去式 went 表現在該做;雖語意指當下,卻不可用現在式 go 或 will go。"
        },
        {
          "stem": "My teacher suggested that every student ___ a draft before the final report is due.",
          "options": [
            "submits",
            "submitted",
            "submit",
            "would submit"
          ],
          "answer": 2,
          "explanation": "suggest 等表建議/要求動詞後的 that 子句用『(should) + 原形』,故用原形 submit。",
          "trap": "⚠ suggest/insist/demand 後 that 子句用 (should) 原形,動詞用 submit 不隨主詞 every student 加 s;這是假設語氣的『建議型』,別誤用第三人稱單數 submits。"
        },
        {
          "stem": "If I ___ about the traffic jam earlier, I would be sitting in the meeting room right now instead of stuck on the highway.",
          "options": [
            "had known",
            "would know",
            "have known",
            "knew"
          ],
          "answer": 0,
          "explanation": "混合假設:if 子句指過去(早知道)用 had known,主句指現在 would be sitting,故 if 用過去完成。",
          "trap": "⚠ 這是混合假設句:過去的條件(earlier→had known)+ 現在的結果(right now→would be sitting);if 子句看『過去』線索 earlier,須用 had known 而非 knew。"
        },
        {
          "stem": "If you ___ to lend me the money now, I would be able to pay the deposit and we could move in next week.",
          "options": [
            "would be",
            "were",
            "had been",
            "are"
          ],
          "answer": 1,
          "explanation": "與現在事實相反,if 子句用過去式;be 動詞一律用 were(were to 表將來不太可能的假設)。",
          "trap": "⚠ if 子句 be 動詞假設語氣固定用 were(連 you 也是);主句 would be able to 為與現在相反,排除 are(直說)與 had been(與過去相反)。"
        },
        {
          "stem": "Without the help of GPS, the rescue team ___ the lost climbers in such thick fog.",
          "options": [
            "wouldn't find",
            "didn't find",
            "won't find",
            "wouldn't have found"
          ],
          "answer": 3,
          "explanation": "Without = If it had not been for(救援已完成,屬過去),主句用 would have + p.p. 的否定 wouldn't have found。",
          "trap": "⚠ Without 在此等於與『過去』相反的假設(救援已成功的事實),主句須 would have found;wouldn't find 是與現在相反,別忽略已完成的過去情境。"
        },
        {
          "stem": "If he had taken my advice back then, he ___ such a serious mistake and lost his job.",
          "options": [
            "wouldn't have made",
            "didn't make",
            "wouldn't make",
            "won't make"
          ],
          "answer": 0,
          "explanation": "if 子句 had taken(與過去相反),且 lost his job 是過去結果,主句用 wouldn't have made。",
          "trap": "⚠ if 子句已是 had p.p. 且後文 lost his job 指過去,主句必須對應 would have made;wouldn't make 是與現在相反,時態不一致。"
        },
        {
          "stem": "I would rather you ___ anything about this to my parents; it would only worry them.",
          "options": [
            "don't say",
            "didn't say",
            "hadn't said",
            "won't say"
          ],
          "answer": 1,
          "explanation": "would rather + 主詞 + 過去式,表對現在/未來的願望(寧願你別說),用過去式 didn't say。",
          "trap": "⚠ 'would rather + S + 過去式' 表對現在或未來的偏好,用 didn't say;hadn't said 是對過去的遺憾。此處 it would only worry them 指未來,故非過去完成。"
        },
        {
          "stem": "Should you ___ any difficulty installing the software, please contact our support team immediately.",
          "options": [
            "met",
            "to meet",
            "have met",
            "meet"
          ],
          "answer": 3,
          "explanation": "Should + 主詞 + 原形 = If you should…(萬一),為與未來假設的倒裝句,用原形 meet。",
          "trap": "⚠ 'Should you meet…' = If you should meet…(倒裝省略 if),Should 後接原形動詞 meet;別因 Should 像過去而填 met,倒裝助動詞後一律接原形。"
        },
        {
          "stem": "If the witness had told the truth, the innocent man ___ in prison now.",
          "options": [
            "wouldn't have been",
            "isn't",
            "wouldn't be",
            "wasn't"
          ],
          "answer": 2,
          "explanation": "混合假設:過去的條件(had told)+ 現在的結果 now,主句用 would + 原形 be。",
          "trap": "⚠ 混合句型:if 指過去(had told),主句因有 now 指現在,用 wouldn't be(would+原形);別因 if 子句是過去完成就反射填 wouldn't have been。"
        },
        {
          "stem": "But for your generous donation, the old library ___ down years ago.",
          "options": [
            "would have shut",
            "would shut",
            "shut",
            "had shut"
          ],
          "answer": 0,
          "explanation": "But for = If it had not been for(要不是),years ago 指過去,主句用 would have + p.p.。",
          "trap": "⚠ But for(=Without)在此搭配 years ago 為與過去相反,主句用 would have shut down;would shut 是與現在相反,時間詞 years ago 已鎖定過去。"
        },
        {
          "stem": "I wish I ___ taller; then I could reach the top shelf without a stool.",
          "options": [
            "am",
            "was",
            "were",
            "had been"
          ],
          "answer": 2,
          "explanation": "wish + 與現在事實相反,be 動詞用 were(對現在身高的願望);then I could 指現在。",
          "trap": "⚠ wish 表與『現在』相反用 were(be 動詞固定 were);had been 是與過去相反。後句 could reach 指當下能力,故非過去完成。"
        },
        {
          "stem": "If only I ___ my passport at home, we wouldn't be missing our flight at this very moment.",
          "options": [
            "didn't leave",
            "hadn't left",
            "don't leave",
            "wouldn't leave"
          ],
          "answer": 1,
          "explanation": "混合假設:過去的動作(leave 護照)用 had left,主句現在結果 wouldn't be missing,故否定 hadn't left。",
          "trap": "⚠ 'If only' 用法同 wish；此為混合句:過去把護照留在家(hadn't left)導致現在趕不上(at this moment);if 子句指過去動作須用過去完成。"
        },
        {
          "stem": "The coach insisted that the injured player ___ for the rest of the season to fully recover.",
          "options": [
            "rests",
            "rested",
            "is resting",
            "rest"
          ],
          "answer": 3,
          "explanation": "insist(堅持要求)後 that 子句用 (should) + 原形,故用原形 rest。",
          "trap": "⚠ insist 表『要求』時 that 子句用 (should) 原形 rest，不加 s 也不用過去式;若 insist 表『堅稱事實』才用直說,此處 to recover 顯示是要求語氣。"
        },
        {
          "stem": "Had the government acted sooner, thousands of lives ___ during the flood.",
          "options": [
            "could have been saved",
            "can be saved",
            "could be saved",
            "were saved"
          ],
          "answer": 0,
          "explanation": "Had the government acted = If the government had acted(與過去相反倒裝),主句用 could have been + p.p.(被動)。",
          "trap": "⚠ 倒裝 Had…acted 為與過去相反,主句須 could have been saved(完成被動);could be saved 是與現在相反,且 lives 與 save 為被動關係不可漏 been。"
        },
        {
          "stem": "If you were to find a wallet on the street, what ___ you do with it?",
          "options": [
            "will",
            "did",
            "would",
            "had"
          ],
          "answer": 2,
          "explanation": "were to 表將來不太可能發生的純假設,主句用 would + 原形;故用 would。",
          "trap": "⚠ 'were to' 強調與將來相反的假設,主句助動詞用 would 不可用 will(will 屬可能成真的條件句);這是純假設提問,與真實未來條件區分。"
        },
        {
          "stem": "She acted as though nothing ___, even though the accident had clearly upset her deeply.",
          "options": [
            "happens",
            "had happened",
            "happened",
            "would happen"
          ],
          "answer": 1,
          "explanation": "as though 引導與『過去』事實相反(事故已發生卻裝沒事),主句過去式 acted,從句須往前推用過去完成 had happened。",
          "trap": "⚠ as though 後若指比主句更早的『過去』須用過去完成 had happened;主句 acted 是過去式，事故早已發生(the accident had upset her)，故非單純過去式 happened。"
        },
        {
          "stem": "Suppose you ___ the lottery tomorrow, would you quit your job right away?",
          "options": [
            "win",
            "would win",
            "had won",
            "won"
          ],
          "answer": 3,
          "explanation": "Suppose 引導假設,搭配主句 would quit(與現在/將來相反的純假設),從句用過去式 won。",
          "trap": "⚠ Suppose/Supposing 等於 if,主句 would quit 顯示為純假設,從句用過去式 won;雖有 tomorrow，但 would 表不太可能成真，故非現在式 win。"
        },
        {
          "stem": "If our team had not lost focus in the final minutes, we ___ the championship that everyone expected us to win.",
          "options": [
            "could have won",
            "would win",
            "can win",
            "would win it"
          ],
          "answer": 0,
          "explanation": "if 子句 had not lost(與過去相反),比賽已結束,主句用 could/would have + p.p.,故 could have won。",
          "trap": "⚠ if 子句 had not lost + 過去情境(expected us to win),主句須 could have won(與過去相反);would win/can win 是現在或可能語氣，與已結束的比賽矛盾。"
        },
        {
          "stem": "I wish I ___ how to swim; then I could go to the beach with you every summer.",
          "options": [
            "knew",
            "know",
            "have known",
            "will know"
          ],
          "answer": 0,
          "explanation": "wish 表達與現在事實相反的願望時,that 子句用過去式(假設語氣),knew 表『真希望自己現在會游泳』,但事實上不會。"
        },
        {
          "stem": "If Kevin ___ more carefully, he wouldn't make so many careless mistakes in the monthly exams.",
          "options": [
            "works",
            "will work",
            "had worked",
            "worked"
          ],
          "answer": 3,
          "explanation": "主句 wouldn't make 為與現在事實相反的第二類條件句,if 子句須用過去式 worked 表『若他現在做事更用心(但實際上沒有)』。",
          "trap": "⚠ 主句 would/wouldn't + 原形 表與現在相反,if 子句用過去式 worked;had worked 是與過去相反的第三類條件句,與主句時態不對稱;works、will work 屬真實條件,不合虛擬語氣。"
        },
        {
          "stem": "The safety manager insisted that every new employee ___ a first-aid course before starting work on the factory floor.",
          "options": [
            "take",
            "takes",
            "took",
            "will take"
          ],
          "answer": 0,
          "explanation": "insist / suggest / demand / require 等要求類動詞後的 that 子句用『(should)+ 原形動詞』的假設語氣,should 省略後直接用原形 take。",
          "trap": "⚠ 要求類動詞後 that 子句用原形(should 省略),不隨主詞第三人稱單數加 s,也不隨主句改為過去或未來;takes、took、will take 都違反此虛擬規則。"
        },
        {
          "stem": "___ better last weekend, we would have gone hiking in the mountains just as we had originally planned.",
          "options": [
            "If the weather was",
            "Should the weather be",
            "Had the weather been",
            "Were the weather"
          ],
          "answer": 2,
          "explanation": "與過去事實相反的條件句可省略 if 並倒裝成『Had + 主詞 + 過去分詞』,還原即 If the weather had been better,配合主句 would have gone,指上週末其實天氣不好。",
          "trap": "⚠ 與過去相反用 Had + 主詞 + p.p. 倒裝(Had the weather been);Were the weather 表與現在相反,Should the weather be 表未來可能,未倒裝的 If the weather was 也非虛擬,皆不符 last weekend 已過去的語境。"
        },
        {
          "stem": "I really wish I ___ to my teacher's advice last year; I would be much better prepared for the exam now.",
          "options": [
            "had listened",
            "listened",
            "have listened",
            "would listen"
          ],
          "answer": 0,
          "explanation": "wish 表達對『過去』未實現之事的懊悔時,子句用過去完成式 had listened;last year 點明是過去,故非只用過去式。",
          "trap": "⚠ wish 對過去的遺憾用過去完成 had listened;若只用過去式 listened 是對『現在』的相反假設,與 last year 的過去時間點不符;have listened、would listen 皆非虛擬語氣的正確形式。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">間接問句 語序還原</text><rect x=\"20\" y=\"38\" width=\"280\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"30\" y=\"57\" fill=\"#3a342e\" font-size=\"10\">直接: Where</text><text x=\"120\" y=\"57\" fill=\"#c9755c\" font-size=\"10\">is</text><text x=\"145\" y=\"57\" fill=\"#3a342e\" font-size=\"10\">the station ?  (倒裝)</text><path d=\"M125 70 C150 95, 200 95, 225 80\" stroke=\"#5aa874\" stroke-width=\"1.5\" fill=\"none\"/><polygon points=\"225,80 217,80 221,87\" fill=\"#5aa874\"/><rect x=\"20\" y=\"100\" width=\"280\" height=\"30\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"30\" y=\"119\" fill=\"#3a342e\" font-size=\"10\">間接: ...where</text><text x=\"125\" y=\"119\" fill=\"#3a342e\" font-size=\"10\">the station</text><text x=\"220\" y=\"119\" fill=\"#c9755c\" font-size=\"10\">is</text><text x=\"160\" y=\"155\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">疑問詞 + 主詞 + 動詞 (直述語序)</text><text x=\"160\" y=\"173\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">附加問句: 前肯後否, He is.. isn t he?</text></svg>",
          "caption": "間接問句改回主詞加動詞",
          "points": [
            "間接問句:疑問詞 + 主詞 + 動詞(用直述語序),如 I don't know where he is(非 where is he)。",
            "附加問句:前肯定後否定、前否定後肯定,助動詞與時態須對應(He is…, isn't he?)。",
            "祈使句附加問句用 will you?;Let's… 用 shall we?。"
          ],
          "trap": "間接問句要改成『主詞+動詞』的直述語序;附加問句前後一正一反,且主詞用代名詞、助動詞要對應前句時態。"
        },
        {
          "h": "五大基本句型 Five Sentence Patterns",
          "points": [
            "第一型主詞加完全不及物動詞:例 Birds fly.（鳥兒飛）;這類動詞後面不需要受詞,句意就完整。",
            "第二型主詞加be動詞或連綴動詞再加補語:例 She is a nurse. 或 The soup smells good.,補語用來補充說明主詞。",
            "第三型主詞加及物動詞加受詞:例 I like apples.;第四型再多一個受詞,例 He gave me a gift.（gave 後面 me 是間接受詞、a gift 是直接受詞）。",
            "第五型主詞加動詞加受詞再加受詞補語:例 We call him Tom. 或 The news made me happy.,受詞補語用來描述受詞。"
          ],
          "formula": "S+Vi / S+Vi+補語 / S+Vt+O / S+Vt+間接受詞+直接受詞 / S+Vt+O+受詞補語",
          "trap": "連綴動詞 look, smell, taste, sound, feel 後面接形容詞當補語,不可用副詞:正確 It tastes good.,錯誤 It tastes well.(well 只有在指身體健康時才當形容詞,如 I feel well.)。"
        },
        {
          "h": "There be 句型與主詞動詞一致",
          "points": [
            "表達『有』『存在』用 There is / There are,真正的主詞在 be 動詞後面,be 動詞單複數要跟它後面那個名詞一致。",
            "後面接單數或不可數名詞用 is,例 There is a book on the desk. 或 There is some water.;接複數名詞用 are,例 There are five students.。",
            "若有兩個以上名詞並列,be 動詞通常跟『最靠近』的那個名詞一致,例 There is a pen and two books on the table.。"
          ],
          "formula": "There + is/are + 主詞(名詞) + 地點/時間",
          "trap": "中文『桌上有一本書』別逐字翻成 The desk has a book.,英文要用 There is a book on the desk.;另外 be 動詞要跟『後面的名詞』一致,不是跟 there 一致。"
        },
        {
          "h": "Yes/No 問句與 Wh- 問句",
          "points": [
            "Yes/No 問句把 be 動詞或助動詞移到主詞前面,例 Are you ready? 或 Do you like tea?,一般動詞要借助 do/does/did。",
            "Wh- 問句以疑問詞開頭再倒裝,例 Where do you live? 或 What did she say?,疑問詞當受詞時後面仍要倒裝。",
            "當疑問詞本身就是主詞時不倒裝、也不用 do,例 Who broke the window? 直接用 Who 加動詞。"
          ],
          "formula": "(Wh-) + be/do/does/did + S + 原形動詞 ...?",
          "trap": "一般動詞的問句要靠 do/does/did,主要動詞回原形:正確 Does he play basketball?,錯誤 Does he plays...;疑問詞當主詞時不可再加 do,例 Who lives here? 不是 Who does live here?。"
        }
      ],
      "quiz": [
        {
          "stem": "Could you tell me ___ the nearest MRT station is?",
          "options": [
            "where does",
            "where is",
            "is where",
            "where"
          ],
          "answer": 3,
          "explanation": "間接問句須用直述語序:where + 主詞(the station) + 動詞(is),故只填 where。",
          "trap": "間接問句不可倒裝;雖是問句但要用『主詞+動詞』語序,where is 是直接問句語序屬陷阱。"
        },
        {
          "stem": "Your sister can speak French, ___?",
          "options": [
            "can she",
            "doesn't she",
            "can't she",
            "does she"
          ],
          "answer": 2,
          "explanation": "前句肯定且有助動詞 can,附加問句用否定 can't 並對應主詞 she。",
          "trap": "附加問句前肯定後否定,助動詞須沿用前句的 can(不是 do);故為 can't she,別換成 doesn't。"
        },
        {
          "stem": "___ a wonderful idea you have come up with for the school festival!",
          "options": [
            "What",
            "Such",
            "How",
            "Very"
          ],
          "answer": 0,
          "explanation": "感嘆句修飾名詞片語(a wonderful idea)用 What;What + (a/an) + 形容詞 + 名詞。",
          "trap": "⚠ What 引導『名詞』感嘆句(What a + adj. + n.),How 引導『形容詞/副詞』感嘆句(How nice!);此處核心是名詞 idea,故用 What 不是 How。"
        },
        {
          "stem": "You haven't finished your homework yet, ___?",
          "options": [
            "did you",
            "haven't you",
            "do you",
            "have you"
          ],
          "answer": 3,
          "explanation": "前句為否定(haven't...yet),附加問句用肯定,並沿用助動詞 have,主詞 you,故 have you。",
          "trap": "⚠ 附加問句『前否定後肯定』;主句已含 haven't(否定),問句須用肯定 have you,且助動詞沿用 have 不可換成 do/did。"
        },
        {
          "stem": "Neither the teacher nor her students ___ aware that the school trip ___ scheduled for that very morning.",
          "options": [
            "was; had been",
            "were; had been",
            "was; have been",
            "were; was"
          ],
          "answer": 1,
          "explanation": "neither A nor B 的動詞依『就近原則』與最靠近的主詞一致;最近主詞為 her students(複數),故第一空用 were。第二空 the school trip 在敘述的那個早上之前即已排定,用過去完成被動 had been scheduled。故選 were; had been。",
          "trap": "⚠ 別被『neither...nor 一律用單數』的迷思誤導;就近原則要看最靠近動詞的主詞 students(複數)→ were。第二空表『更早之前就已排定』,用過去完成被動 had been scheduled,不是 have been(現在完成)或 was(單純過去)。"
        },
        {
          "stem": "___ had the manager finished his speech ___ the audience began to applaud loudly.",
          "options": [
            "Hardly; when",
            "Scarcely; then",
            "No sooner; than",
            "Not only; but also"
          ],
          "answer": 2,
          "explanation": "『No sooner...had + S + p.p. ...than + 過去式』表『一…就…』,倒裝句固定搭配 no sooner...than。句首否定副詞 No sooner 引導倒裝(had the manager finished),對應連接詞為 than,故選 No sooner; than。",
          "trap": "⚠ Hardly/Scarcely 雖也可倒裝表『一…就…』,但須搭配 when(Hardly...when),不可配 then;No sooner 固定配 than，固定搭配不可混用。"
        },
        {
          "stem": "Only after the storm had passed ___ to assess the damage to their fishing boats.",
          "options": [
            "did the villagers go out",
            "the villagers went out",
            "went the villagers out",
            "the villagers did go out"
          ],
          "answer": 0,
          "explanation": "『Only + 副詞片語』置於句首時,主句須部分倒裝:助動詞(did)提前 + 主詞 + 原形動詞,故 did the villagers go out。",
          "trap": "⚠ Only after... 置句首觸發倒裝,須用助動詞 did + 主詞 + 原形 go;直接寫 the villagers went out(正常語序)是最常見錯誤,全動詞倒裝 went the villagers 亦不合英語規則。"
        },
        {
          "stem": "So ___ was the evidence that the jury reached a verdict in less than an hour.",
          "options": [
            "convincing",
            "convinced",
            "convincingly",
            "convince"
          ],
          "answer": 0,
          "explanation": "『So + 形容詞 + be 動詞 + 主詞 + that...』倒裝結構,空格須為形容詞修飾 evidence。證據『令人信服的』用現在分詞轉的形容詞 convincing(主動,使人信服)。",
          "trap": "⚠ 此為 So...that 倒裝(So convincing was the evidence);形容詞修飾事物用 -ing(convincing);convinced(被說服的)用於人,convincingly 是副詞,皆不符語法位置。"
        },
        {
          "stem": "It was not the price but the poor quality of the product ___ the customers to complain.",
          "options": [
            "which it caused",
            "what caused",
            "caused",
            "that caused"
          ],
          "answer": 3,
          "explanation": "強調句型 It was...that...,被強調者為 not the price but the poor quality(主詞),其後用關係詞 that,動詞 caused 對應整個強調主詞。故 that caused。",
          "trap": "⚠ 強調句一律用 that,不論被強調者為人或物;what 不能引導強調句,which it caused 多餘加了 it,單純 caused 則缺少 that 使句子缺連接成分。"
        },
        {
          "stem": "___ you to lend me your notes, I would be able to catch up with the missed lessons quickly.",
          "options": [
            "Had",
            "Should",
            "Were",
            "If"
          ],
          "answer": 2,
          "explanation": "與現在事實相反的假設,省略 if 時 be 動詞 were 倒裝至句首:Were you to lend me...(= If you were to lend me...),表對未來不太可能的假設。",
          "trap": "⚠ 此為與未來相反假設的 were to 倒裝句(Were S to V);Should 倒裝後須接原形且語意為『萬一』,Had 用於與過去相反(Had + p.p.),If 則無法倒裝且後句缺 would 對應,須用 Were。"
        },
        {
          "stem": "The committee insisted that every application ___ submitted before the deadline, or it ___ rejected without exception.",
          "options": [
            "was; will be",
            "be; would be",
            "is; would be",
            "be; will be"
          ],
          "answer": 1,
          "explanation": "insist that 後接『假設語氣』:S + (should) + 原形,故 be submitted(被動原形)。後半 or it... 表結果,與主句語氣一致用 would be rejected。",
          "trap": "⚠ insist/demand/require 等要求動詞後的 that 子句用『(should) + 原形動詞』(be submitted),不可用 was/is;後句 or 引導的結果配合語氣用 would be。"
        },
        {
          "stem": "Not until she had read the contract three times ___ the hidden clause that could cost her thousands.",
          "options": [
            "she noticed",
            "she did notice",
            "did she notice",
            "noticed she"
          ],
          "answer": 2,
          "explanation": "Not until... 置句首,主句倒裝:did + 主詞 + 原形,故 did she notice。",
          "trap": "⚠ Not until 在句首使主句倒裝(did she notice),不是 until 子句本身倒裝;直接寫 she noticed 未倒裝是常見錯,noticed she 為全動詞倒裝不合規。"
        },
        {
          "stem": "___ how fragile the ecosystem was, the researchers urged the government to act immediately.",
          "options": [
            "Realizing",
            "Having been realized",
            "To realize",
            "Realized"
          ],
          "answer": 0,
          "explanation": "分詞構句:主詞 the researchers 與 realize 為主動關係(研究者意識到),用現在分詞 Realizing 引導,= Because they realized how fragile...。",
          "trap": "⚠ 分詞構句須判斷主詞與動詞的主被動;研究者『主動』意識到,用 Realizing(主動);Realized/Having been realized 是被動,語意不通,To realize 表目的不符因果語境。"
        },
        {
          "stem": "Such ___ that the entire stadium fell silent the moment she stepped onto the stage.",
          "options": [
            "her fame was",
            "did her fame be",
            "her fame it was",
            "was her fame"
          ],
          "answer": 3,
          "explanation": "『Such + be 動詞 + 主詞 + that...』倒裝句:Such was her fame that...(她如此出名,以致於…),be 動詞 was 提前至 Such 之後。",
          "trap": "⚠ Such 置句首觸發 be 動詞倒裝(Such was her fame);her fame was 未倒裝,加 it 多餘,did...be 文法錯誤(be 動詞不需助動詞 did)。"
        },
        {
          "stem": "The harder the team practiced, ___ they became, until they finally won the championship.",
          "options": [
            "more confident",
            "the more confident",
            "the most confident",
            "the confident more"
          ],
          "answer": 1,
          "explanation": "『The + 比較級..., the + 比較級...』表『越…就越…』。confident 為多音節形容詞,比較級用 more confident,前加 the,故 the more confident。",
          "trap": "⚠ The + 比較級...the + 比較級 兩邊都要 the 且都用『比較級』;漏掉 the(more confident)或誤用最高級(the most confident)皆錯,語序 the confident more 也不對。"
        },
        {
          "stem": "Rarely ___ such a brilliant solution proposed by someone so young and inexperienced.",
          "options": [
            "we have seen",
            "have we seen",
            "we had seen",
            "did we saw"
          ],
          "answer": 1,
          "explanation": "否定副詞 Rarely 置句首觸發倒裝,完成式助動詞 have 提前:have we seen。",
          "trap": "⚠ Rarely/Seldom/Never 等否定副詞置句首須倒裝(have we seen);未倒裝的 we have seen 錯,did we saw 同時用助動詞與過去式動詞為雙重錯誤。"
        },
        {
          "stem": "He spoke ___ confidently ___ everyone in the room assumed he was the real expert.",
          "options": [
            "so; that",
            "such; that",
            "too; to",
            "as; as"
          ],
          "answer": 0,
          "explanation": "confidently 為副詞,『so + 副詞 + that...』表『如此…以致於…』,故 so confidently that。",
          "trap": "⚠ so 修飾形容詞/副詞(so confidently),such 修飾名詞片語;此處 confidently 是副詞,須用 so...that,不可用 such;too...to 表『太…以致不能』語意相反。"
        },
        {
          "stem": "What surprised the judges most ___ not his technique but his fearless attitude toward failure.",
          "options": [
            "were",
            "was",
            "are",
            "have been"
          ],
          "answer": 1,
          "explanation": "主詞為名詞子句 What surprised the judges most,視為單數,動詞用 was;補語 not A but B 結構不影響主詞單複數。",
          "trap": "⚠ What 引導的名詞子句作主詞時恆視為『單數』,用 was;別被後面 not...but... 或補語的名詞迷惑而誤用複數 were。"
        },
        {
          "stem": "Long ___ the days when people had to walk miles just to send a single message.",
          "options": [
            "gone is",
            "are gone",
            "gone are",
            "have gone"
          ],
          "answer": 2,
          "explanation": "表語(Long gone)置句首的完全倒裝,主詞 the days 為複數,be 動詞用 are,語序為 Long gone are the days...(那些日子已一去不返)。",
          "trap": "⚠ 形容詞/分詞表語置句首引發完全倒裝(Long gone are the days);主詞 days 複數須用 are,gone is 主謂不一致,have gone 用了完成式不符此慣用倒裝句型。"
        },
        {
          "stem": "Provided that the weather ___ fine tomorrow, the outdoor concert ___ as planned.",
          "options": [
            "will stay; proceeds",
            "stays; proceeds",
            "stayed; would proceed",
            "stays; will proceed"
          ],
          "answer": 3,
          "explanation": "Provided that(假如)引導條件子句,屬條件副詞子句『現在式表未來』,用 stays;主句指未來用 will proceed。",
          "trap": "⚠ 條件子句(Provided that...)中『現在式代替未來』(stays),不可用 will;主句才用 will proceed;兩處都用現在式或時態錯配皆不符。"
        },
        {
          "stem": "It is high time the government ___ serious action to reduce air pollution in major cities.",
          "options": [
            "has taken",
            "takes",
            "will take",
            "took"
          ],
          "answer": 3,
          "explanation": "『It is (high) time + 主詞 + 過去式』表『早該…了(但還沒做)』的假設語氣,用過去式 took。",
          "trap": "⚠ It is high time 後的子句用『過去式』表現在早該做卻未做的虛擬語氣(took);用現在式 takes 或未來 will take 是最常見錯誤。"
        },
        {
          "stem": "___ he apologize sincerely, his teammates might still be willing to forgive his mistake.",
          "options": [
            "Had",
            "Were",
            "Should",
            "Did"
          ],
          "answer": 2,
          "explanation": "與未來相反/不確定的假設,省略 if 用 Should 倒裝至句首接原形動詞:Should he apologize...(= If he should apologize),表『萬一/要是他道歉』。",
          "trap": "⚠ 後接原形動詞 apologize,須用 Should 倒裝(萬一);Were 倒裝後須接 to V 或形容詞,Had 用於與過去相反(接 p.p.),Did 不用於倒裝假設句。"
        },
        {
          "stem": "Across the valley ___ the ancient temple that thousands of pilgrims visit each spring.",
          "options": [
            "stands",
            "stand",
            "is standing",
            "stood"
          ],
          "answer": 0,
          "explanation": "地方副詞片語(Across the valley)置句首的完全倒裝,主詞 the ancient temple 為單數,動詞用現在式 stands(visit each spring 表習慣性現在事實)。",
          "trap": "⚠ 地方副詞置句首引發完全倒裝,動詞須與『真正主詞 temple(單數)』一致用 stands;誤看 valley 或被句末複數 pilgrims 干擾而用 stand 為錯,進行式/過去式與『每年春天造訪』的恆常語境不合。"
        },
        {
          "stem": "No matter how carefully you plan, ___ unexpected problems still arise during a long journey.",
          "options": [
            "there are times which",
            "there are times when",
            "it has times when",
            "there is times that"
          ],
          "answer": 1,
          "explanation": "there are times when...(有時候…)為固定句型,times 複數用 are,修飾時間先行詞用關係副詞 when,故 there are times when。",
          "trap": "⚠ 修飾『時間 times』的關係詞用 when 不可用 which/that(which 須在子句中作主受詞,此處 problems arise 結構完整);主詞 times 複數須用 are,it has times 句構亦錯。"
        },
        {
          "stem": "She would have caught the early train ___ she ___ ten minutes earlier instead of checking her phone.",
          "options": [
            "unless; had left",
            "had; left",
            "if; had left",
            "if; left"
          ],
          "answer": 2,
          "explanation": "與過去事實相反的假設:主句 would have caught(過去未發生),條件子句用過去完成 had left,連接詞用 if,故 if she had left。",
          "trap": "⚠ 與過去相反的假設,if 子句用『過去完成 had left』,主句用 would have + p.p.;用過去式 left(if; left)是與現在相反的時態錯配,unless(除非)會使語意相反。"
        },
        {
          "stem": "Which sentence uses the pattern S + V (主詞 + 動詞) without any object or complement?",
          "options": [
            "My sister enjoys music.",
            "The old man walks slowly every morning.",
            "They elected him captain.",
            "She feels tired today."
          ],
          "answer": 1,
          "explanation": "第一大句型是「主詞 + 完全不及物動詞」,不需要受詞或補語。「那位老人每天早上慢慢地走路」中的 walks 是不及物動詞,slowly 與 every morning 都是副詞(修飾語),句子本身結構完整。「我姊姊喜歡音樂」有受詞 music,屬第三句型;「他們選他當隊長」有受詞與受詞補語,屬第五句型;「她今天覺得累」有主詞補語 tired,屬第二句型。"
        },
        {
          "stem": "Look at this sentence: \"The volunteers gave the children some warm blankets.\" Which sentence uses the SAME sentence pattern (S + V + IO + DO)?",
          "options": [
            "Grandpa told us an interesting story.",
            "The news made everyone happy.",
            "The kitten looks very cute.",
            "Many tourists visit this temple."
          ],
          "answer": 0,
          "explanation": "題幹「志工給孩子們一些溫暖的毯子」是第四句型:主詞 + 授與動詞 + 間接受詞(the children)+ 直接受詞(some warm blankets)。「爺爺告訴我們一個有趣的故事」同樣是 told + 間接受詞 us + 直接受詞 an interesting story,結構相同。「這消息使大家開心」是第五句型(受詞 + 受詞補語);「這隻小貓看起來很可愛」是第二句型(連綴動詞 + 主詞補語);「許多遊客參觀這座廟」只有一個受詞,是第三句型。",
          "trap": "made everyone happy 也有兩個名詞/形容詞在動詞後面,容易誤判為雙受詞,但 happy 是形容詞補語,說明 everyone 的狀態,屬第五句型而非第四句型。"
        },
        {
          "stem": "Choose the question that correctly asks about the underlined part: \"Kevin bought <u>a new bike</u> last weekend.\"",
          "options": [
            "Who bought a new bike last weekend?",
            "When did Kevin buy a new bike?",
            "Did Kevin buy a new bike?",
            "What did Kevin buy last weekend?"
          ],
          "answer": 3,
          "explanation": "畫線部分 a new bike 是句子的受詞(事物),要問「買了什麼」,應用疑問詞 What 開頭,並用助動詞 did + 原形動詞 buy:What did Kevin buy last weekend?。問「誰買的」是針對主詞,問「何時買的」是針對時間 last weekend,兩者都不是問受詞;而 Did Kevin buy...? 是是非問句,只能用 yes/no 回答,無法問出「買了什麼東西」。",
          "trap": "四個選項都與句子相關,但只有針對畫線的受詞(a new bike)發問才正確;要先確認畫線部分是受詞(事物),而不是主詞、時間或整句真假。"
        },
        {
          "stem": "Read the paragraph and choose the best answer for the blank:\n\"Amy wanted to know why her plants were dying. She asked her teacher, '____' Her teacher smiled and said the pots had no holes for the water to drain out.\"",
          "options": [
            "Are my plants beautiful?",
            "Why do my plants keep dying?",
            "Do you like gardening?",
            "When will you water the plants?"
          ],
          "answer": 1,
          "explanation": "由前一句 Amy wanted to know why her plants were dying(想知道植物為何枯死)以及老師回答枯死的原因(花盆沒有排水孔)可知,Amy 問的是「原因」,應用 Why 開頭的問句:Why do my plants keep dying?。詢問植物是否漂亮、是否喜歡園藝、何時澆水,都無法對應到老師「解釋枯死原因」的回答,語意不連貫。",
          "trap": "要靠前後文推斷:前句的 why...were dying 與後句老師解釋原因,共同鎖定問句必須問『為什麼』,不能只看空格單句就選是非問句或其他 wh- 問句。"
        },
        {
          "stem": "Rewrite \"You should turn off the lights before you leave.\" as a polite request using a question. Which is grammatically correct and natural?",
          "options": [
            "Could you please turn off the lights before you leave?",
            "Could you please turning off the lights before you leave?",
            "Do you could turn off the lights before you leave?",
            "Should you please to turn off the lights before you leave?"
          ],
          "answer": 0,
          "explanation": "以 Could you please + 原形動詞 開頭是英文中禮貌的請求句型。情態助動詞 could 後面必須接原形動詞 turn,所以 Could you please turn off the lights...? 文法正確且自然。turning 是動名詞,不能直接接在 could 之後;Do you could 把助動詞 do 與情態助動詞 could 疊用,文法錯誤;Should you please to turn 除了語意生硬外,情態助動詞 should 後面也不可加 to。",
          "trap": "情態助動詞(could/should)後面一律接原形動詞,不可用 -ing、to + 原形,也不可與 do/does 併用;四個選項只有動詞形式與助動詞用法的差別。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">克漏字 看前後文邏輯</text><rect x=\"20\" y=\"40\" width=\"90\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"65\" y=\"64\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">前句</text><rect x=\"125\" y=\"40\" width=\"70\" height=\"40\" rx=\"4\" fill=\"#c9755c\" opacity=\"0.85\"/><text x=\"160\" y=\"64\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"14\">[?]</text><rect x=\"210\" y=\"40\" width=\"90\" height=\"40\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"255\" y=\"64\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">後句</text><line x1=\"110\" y1=\"60\" x2=\"125\" y2=\"60\" stroke=\"#5aa874\" stroke-width=\"2\"/><line x1=\"195\" y1=\"60\" x2=\"210\" y2=\"60\" stroke=\"#5aa874\" stroke-width=\"2\"/><rect x=\"40\" y=\"105\" width=\"110\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"95\" y=\"120\" text-anchor=\"middle\" fill=\"#5aa874\" font-size=\"10\">順承</text><text x=\"95\" y=\"133\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">therefore</text><rect x=\"170\" y=\"105\" width=\"110\" height=\"34\" rx=\"4\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"225\" y=\"120\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"10\">相反</text><text x=\"225\" y=\"133\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">however</text><text x=\"160\" y=\"166\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">判斷前後是順承還是相反</text></svg>",
          "caption": "空格靠前後句邏輯判讀",
          "points": [
            "先讀完整段抓主旨,再依空格前後判斷詞性、時態與邏輯關係。",
            "注意轉折詞(however/therefore)決定語意走向;固定搭配(make a decision)整組考。",
            "代名詞、冠詞題回前文找指涉對象。"
          ],
          "trap": "克漏字不能只看一格,要看前後句邏輯;連接詞/轉折詞題務必判斷『前後是順承還是相反』再選。"
        },
        {
          "h": "詞性與構詞判讀 part of speech",
          "points": [
            "空格先判斷該填的詞性:介系詞或冠詞後多接名詞,be 動詞後常接形容詞,助動詞後接原形動詞。例如 with regular ___ 要填名詞 practice(規律的練習),不是動詞。",
            "從字尾(suffix)辨識選項詞性:-tion、-ment、-ness 多為名詞,如 decision、movement;-ful、-ive、-ous 多為形容詞,如 careful、active;-ly 多為副詞,如 quickly。",
            "同一字根常一次給名詞、動詞、形容詞、副詞當四個選項,要看『空格在句中扮演什麼角色』,而非挑哪個字眼熟。"
          ],
          "formula": "介系詞/冠詞 + N;be + adj.;助動詞 + 原形V",
          "trap": "最常見錯誤是只看字熟不看詞性,例如把 He is very ___ 填成名詞 success,正解是形容詞 successful;記住形容詞修飾名詞、副詞修飾動詞,別把 quick 與 quickly 用反。"
        },
        {
          "h": "時態一致與動詞形式 tense agreement",
          "points": [
            "克漏字常考整段時態一致:看到 yesterday、last year、ago 等過去時間詞,空格動詞要用過去式,如 went、bought,不可填現在式。",
            "同段其他動詞會給線索,例如前句已用過去式 visited,後句承接同一時間的空格通常也用過去式,別中途換時態。",
            "注意動詞後接哪種形式:enjoy、finish 後接動名詞 V-ing,如 enjoy reading;want、decide 後接不定詞 to V,如 decide to go。"
          ],
          "formula": "過去時間詞 → 過去式V;enjoy/finish + Ving;want/decide + to V",
          "trap": "中式英文常把『昨天我去公園』寫成 I go to the park yesterday,go 須改過去式 went;另外 enjoy 後面不可接不定詞,enjoy to read 是錯的,應為 enjoy reading。"
        },
        {
          "h": "連接詞與句子邏輯 connectives",
          "points": [
            "克漏字常在句中考連接詞,要分清功能:because 表原因、so 表結果、but 表轉折、and 表並列。例如 He was tired, ___ he kept working,空格要用表轉折的 but。",
            "從屬連接詞 although、because、when 引導子句,須有主要子句搭配;中文『雖然…但是』在英文 although 與 but 只能擇一,不能兩個一起用。",
            "依語意關係挑對連接詞:表『條件假設』用 if,表『目的』用 so that,看清空格前後的邏輯再選。"
          ],
          "formula": "原因 because;結果 so;轉折 but/although;條件 if",
          "trap": "最典型中式英文是 Although it rained, but we went out,英文 although 與 but 不可並用,只能留一個:Although it rained, we went out,或 It rained, but we went out。"
        },
        {
          "h": "固定搭配與片語動詞 collocation",
          "points": [
            "克漏字偏好考固定搭配,整組記才不會選錯:make a decision(做決定)、take care of(照顧)、look forward to(期待)、be interested in(對…有興趣)。",
            "片語動詞(phrasal verb)的介副詞是關鍵考點:turn on/off(開關)、give up(放棄)、put on(穿上),空格常就在介副詞那一格。",
            "be 動詞 + 形容詞 + 介系詞 的搭配要背對介系詞:be good at、be afraid of、be famous for,選錯介系詞就失分。"
          ],
          "formula": "be interested in + N/Ving;look forward to + N/Ving;be good at + N/Ving",
          "trap": "look forward to 的 to 是介系詞,後面接名詞或動名詞,如 look forward to seeing you,不可寫成 look forward to see;另外 be good at 不可誤用成 be good in。"
        }
      ],
      "quiz": [
        {
          "stem": "She studied very hard for months. ___, she failed the entrance exam, which surprised everyone.",
          "options": [
            "However",
            "Besides",
            "Therefore",
            "For example"
          ],
          "answer": 0,
          "explanation": "努力卻落榜,前後語意相反且 surprised everyone,用轉折詞 However。",
          "trap": "前後因果相反(努力 vs 落榜)用 However;Therefore 表順承結果,與『令人意外』的轉折語氣矛盾。"
        },
        {
          "stem": "Before making such an important ___, you should talk to your parents first.",
          "options": [
            "decide",
            "decidedly",
            "decisive",
            "decision"
          ],
          "answer": 3,
          "explanation": "make a decision 為固定搭配,形容詞 important 後需名詞 decision。",
          "trap": "make 的受詞需名詞 decision;decide 是動詞,important(形容詞)後不能再接動詞,固定搭配要記熟。"
        },
        {
          "stem": "The road was covered with thick ice. ___, the driver slowed down and drove very carefully.",
          "options": [
            "However",
            "Instead",
            "Therefore",
            "Otherwise"
          ],
          "answer": 2,
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
        },
        {
          "stem": "The factory used to dump waste into the river. ___, strict laws now force it to clean the water before releasing it, so the fish have slowly come back.",
          "options": [
            "As a result",
            "In the past",
            "On the other hand",
            "Fortunately"
          ],
          "answer": 3,
          "explanation": "前句是過去的污染問題,後句是現在有嚴法、魚回來的『好轉』結果。前後並非單純因果或對比，而是『所幸情況改善』，故 Fortunately(幸好)最貼合整段由壞轉好的語氣。",
          "trap": "⚠ As a result 看似因果，但『過去污染』不是『現在嚴法』的原因；In the past 與句中 now 時間矛盾；On the other hand 需要兩個對等觀點對比，此處是『改善』而非平行對立，要讀完整段語氣再選。"
        },
        {
          "stem": "Neither the manager nor the workers ___ willing to accept the new schedule, which led to a long argument during the meeting.",
          "options": [
            "was",
            "were",
            "is",
            "has been"
          ],
          "answer": 1,
          "explanation": "Neither A nor B 的動詞採『就近原則』，動詞與最靠近的主詞 the workers(複數)一致，故用 were；後句 led(過去式)也定調整句為過去時態。",
          "trap": "⚠ Neither...nor... 動詞看『最近』的主詞 workers(複數)→ were，不是看 manager；又後句 led 為過去式，故排除現在式 is/has been，須同時判斷『就近一致』與『時態呼應』。"
        },
        {
          "stem": "The new museum is well worth ___; it displays many rare paintings that you can hardly see anywhere else.",
          "options": [
            "to visit",
            "visit",
            "visiting",
            "visited"
          ],
          "answer": 2,
          "explanation": "be worth + V-ing 為固定句型，表『值得做某事』，故用動名詞 visiting。",
          "trap": "⚠ worth 後接動名詞(V-ing)，不接不定詞 to visit，這是與直覺相反的固定用法；被動的 visited 也不合，因主動表示『值得去參觀』。"
        },
        {
          "stem": "I called you several times last night, but you didn't answer. What ___ at that time?",
          "options": [
            "were you doing",
            "did you do",
            "have you done",
            "do you do"
          ],
          "answer": 0,
          "explanation": "前句以 last night、at that time 指過去某『特定時點正在進行』的動作，須用過去進行式 were you doing。",
          "trap": "⚠ at that time(在那個時間點)強調『當下正在進行』，用過去進行式；單純過去式 did you do 問的是『做了什麼事(完成)』，語意較弱，且與『正在做什麼以致沒接電話』的情境不符。"
        },
        {
          "stem": "Mike is much more careful than his brother. ___ of the two boys often double-checks his homework before handing it in.",
          "options": [
            "Former",
            "The former",
            "The latter",
            "Latter"
          ],
          "answer": 1,
          "explanation": "前句先提 Mike，後提 his brother；『細心、會反覆檢查』指的是先提到的 Mike，故用 the former(前者)，且 former/latter 須加定冠詞 the。",
          "trap": "⚠ the former=前者(Mike)、the latter=後者(brother)；句意指『細心檢查』者是 Mike(先出現)→ the former，別搞反順序；又 former/latter 當代名詞須加 the，裸寫 Former/Latter 不合語法。"
        },
        {
          "stem": "She speaks English so fluently ___ many people think she grew up in America.",
          "options": [
            "as",
            "which",
            "than",
            "that"
          ],
          "answer": 3,
          "explanation": "so + adv. + that... 為『如此…以致於…』句型，故空格填 that 引導結果子句。",
          "trap": "⚠ so...that... 表『如此…以致於』，固定搭配 that；別看到比較語氣就填 than(無比較對象)，as 用於 as...as 同級比較，which 引導關係子句也不合此處邏輯。"
        },
        {
          "stem": "If I ___ about the traffic jam earlier, I would have taken a different route to the airport.",
          "options": [
            "knew",
            "would know",
            "had known",
            "have known"
          ],
          "answer": 2,
          "explanation": "後句 would have taken 是『與過去事實相反』的假設語氣，if 子句須用過去完成式 had known。",
          "trap": "⚠ 主句 would have taken 透露這是『與過去相反』的第三條件句，if 子句必須用 had + p.p.(had known)；單純過去式 knew 屬於『與現在相反』，時態層級不對。"
        },
        {
          "stem": "The book gives some useful tips on ___ a job interview, such as how to dress and what questions to expect.",
          "options": [
            "how prepare for",
            "to preparing for",
            "prepare for",
            "preparing for"
          ],
          "answer": 3,
          "explanation": "介系詞 on 後須接動名詞，且 prepare 與 interview 之間需介系詞 for，故為 preparing for。",
          "trap": "⚠ 介系詞 on 後接動名詞 preparing，不可接原形 prepare；prepare for 的 for 不能省(prepare for an interview)；how prepare 缺 to 不成句，to preparing 則 to 後不接 V-ing。"
        },
        {
          "stem": "By the time the firefighters arrived, the small kitchen fire ___ into a huge blaze that destroyed half the house.",
          "options": [
            "spread",
            "has spread",
            "had spread",
            "was spreading"
          ],
          "answer": 2,
          "explanation": "By the time + 過去式(arrived)指出一個過去的時間點，火勢在『那之前已』蔓延成大火，須用過去完成式 had spread 表更早發生。",
          "trap": "⚠ By the time 子句用過去式 arrived，主句的動作『更早完成』要用過去完成式 had spread;若用單純過去式 spread，無法表現『消防員到達前火已擴大』的時間先後。"
        },
        {
          "stem": "The plan sounds great in theory, but it is too expensive to ___ in a small town with so few people.",
          "options": [
            "carry out",
            "carry on",
            "put up with",
            "give up"
          ],
          "answer": 0,
          "explanation": "carry out=執行、實施(計畫)。前句說計畫理論上很好但太貴，後接『難以實施』最合理，故選 carry out。",
          "trap": "⚠ carry out(執行計畫)≠ carry on(繼續進行已開始的事)；此處計畫尚未開始談『太貴難以實施』，用 carry out；put up with(忍受)、give up(放棄)語意皆不符。"
        },
        {
          "stem": "It was not the price ___ the poor service that made the customers complain about the restaurant online.",
          "options": [
            "and",
            "but",
            "or",
            "so"
          ],
          "answer": 1,
          "explanation": "not A but B 句型表『不是 A 而是 B』；客人抱怨的不是價格而是服務差，故空格填 but。",
          "trap": "⚠ not...but... 是固定相關連接詞，意為『不是…而是…』；別填 and(會變成兩者皆是)或 or，要從『made customers complain』看出真正的原因是 poor service。"
        },
        {
          "stem": "Tom was the only one of the students who ___ able to solve the difficult math problem without any help.",
          "options": [
            "were",
            "was",
            "are",
            "have been"
          ],
          "answer": 1,
          "explanation": "the only one of + 複數 + who... 結構中，關係代名詞指的是 the only one(單數)，故用單數動詞 was；又整句為過去語境。",
          "trap": "⚠ 因為有 the only one，who 指『唯一那一個(單數)』，動詞用 was，而非與 students 一致用 were;這是『the only one of...』與『one of the...』判別的關鍵陷阱。"
        },
        {
          "stem": "Hardly ___ the bus stop when the bus pulled away right in front of us.",
          "options": [
            "had we reached",
            "we reached",
            "we had reached",
            "did we reach"
          ],
          "answer": 0,
          "explanation": "Hardly...when... 表『一…就…』；否定副詞 Hardly 置句首須倒裝，且主句用過去完成式，故為 had we reached。",
          "trap": "⚠ 否定副詞 Hardly 開頭要『倒裝』(助動詞提前)→ had we reached，不可用正常語序 we had reached;又 Hardly...when 句型主句用過去完成式 had+p.p.，故排除 did we reach。"
        },
        {
          "stem": "The teacher asked the noisy students to lower their voices, ___ disturbed the class next door.",
          "options": [
            "that",
            "what",
            "which",
            "it"
          ],
          "answer": 2,
          "explanation": "此處需『非限定關係子句』補充說明前面整件事(學生吵鬧)，並作後句主詞，須用關係代名詞 which。",
          "trap": "⚠ 逗號後補述『前面整件事』要用 which(非限定用法)，that 不能用於逗號後的非限定子句;what 不接先行詞、it 會造成兩個獨立主句而缺連接詞，皆不合。"
        },
        {
          "stem": "Online shopping has become very popular. ___, it has caused many small local stores to close down for good.",
          "options": [
            "In addition",
            "For instance",
            "Meanwhile",
            "However"
          ],
          "answer": 3,
          "explanation": "前句講網購『流行(正面)』，後句講造成小店倒閉『負面影響』，前後語意對立，須用轉折詞 However。",
          "trap": "⚠ 前『流行』後『害店倒閉』是正反對比，用 However;In addition/For instance 是補充或舉例(語意同向)，Meanwhile 偏『同時』時間並列，皆無法表現此處的正反轉折。"
        },
        {
          "stem": "Our team finally won the championship. The success was the result of ___ everyone had worked together for the whole season.",
          "options": [
            "what",
            "the way that",
            "how that",
            "the way"
          ],
          "answer": 1,
          "explanation": "the result of + 名詞子句；表『大家合作的方式』可用 the way (that/in which) + 子句，the way that 為正確且完整的選項。",
          "trap": "⚠ of 後需名詞性結構，the way that everyone worked together(大家合作的方式)合理;what 後接子句但 of what... 此處語意應為『方式』而非『的東西』；how that 連用不合語法，the way 後直接接子句雖口語可，但本題 the way that 最為標準完整。"
        },
        {
          "stem": "___ being tired after a long day, the nurse stayed at the hospital to take care of the emergency patients.",
          "options": [
            "In spite of",
            "Instead of",
            "Thanks to",
            "Because of"
          ],
          "answer": 0,
          "explanation": "前『又累』後『仍留下照顧病人』語意讓步相反，須用 In spite of(儘管)+ 名詞/動名詞。",
          "trap": "⚠ 前後是『雖然累卻仍留下』的讓步轉折，用 In spite of;Because of(因為)會變成『因為累所以留下』語意矛盾，Thanks to(多虧)語感正面亦不合，Instead of(而非)語意更不對。"
        },
        {
          "stem": "The harder the farmers work during the season, ___ they will earn when the crops are sold.",
          "options": [
            "the most",
            "the more",
            "more",
            "much more"
          ],
          "answer": 1,
          "explanation": "The + 比較級..., the + 比較級... 表『越…就越…』；前半 The harder 已定句型，後半須對應 the more。",
          "trap": "⚠ 『The 比較級..., the 比較級...』是固定對稱句型，前有 The harder，後必為 the more,不可用最高級 the most 或裸寫 more/much more，要看見前半的 The harder 就鎖定句型。"
        },
        {
          "stem": "The new smartphone is reported ___ thousands of cameras and sensors during its three-year development before its release last week.",
          "options": [
            "to be tested",
            "to have tested",
            "to have been tested",
            "to test"
          ],
          "answer": 2,
          "explanation": "手機是『被測試』(被動)，且測試發生在『上週發表之前』(更早完成)，故用完成式被動不定詞 to have been tested。",
          "trap": "⚠ 主詞 smartphone 是被『測試』→ 被動;又測試在發表(過去)之前完成→ 完成式;兩者合一須用 to have been tested;to be tested 缺『更早完成』語意，to have tested 是主動完成式皆不合。"
        },
        {
          "stem": "Such ___ that the audience kept laughing from the beginning to the very end of the show.",
          "options": [
            "was funny the play",
            "funny the play was",
            "the play was funny",
            "a funny play it was"
          ],
          "answer": 3,
          "explanation": "Such + (a/an) + adj. + n. + that... 句型表『如此…以致於』；單數可數名詞 play 須用 Such a funny play it was that...。",
          "trap": "⚠ Such 後接『a/an + 形容詞 + 名詞』(such a funny play)，再接 that 結果子句;若是 So 才接 So funny the play was。考點是 Such 與 So 後的語序差異，可數單數名詞前的 a 不可漏。"
        },
        {
          "stem": "We had expected a big crowd at the concert, but ___ a few people showed up because of the heavy rain that evening.",
          "options": [
            "only",
            "quite",
            "almost",
            "nearly"
          ],
          "answer": 0,
          "explanation": "前句『原本預期人很多』，後句因大雨『只來了幾個人』，前後對比落差須用 only(僅僅)強調人數出乎意料地少。",
          "trap": "⚠ but 後與『預期人多』形成落差，須用 only(只)強調少;quite a few 反而是『相當多』，almost/nearly a few 不合英文慣用，要由 but 的轉折判斷此處應為『人少』。"
        },
        {
          "stem": "My little cousin is afraid ___ thunder, so she always covers her ears whenever a storm comes.",
          "options": [
            "on",
            "of",
            "for",
            "with"
          ],
          "answer": 1,
          "explanation": "be afraid of 為固定搭配，表『害怕…』，形容詞 afraid 之後的介系詞須用 of，故填 of。"
        },
        {
          "stem": "Our school library keeps only five copies of that popular novel; ___, students often have to wait for weeks before they can borrow it.",
          "options": [
            "However",
            "As a result",
            "In contrast",
            "For example"
          ],
          "answer": 1,
          "explanation": "藏書量少是原因，需要等好幾週是合理的結果，前後為因果順承關係，故用表『結果』的連接詞，語意才連貫。",
          "trap": "前後是因果順承(書少→要久等)，要用表結果的連接詞;表轉折相反的詞在此並無語意對立，勿一看到空格就反射性填轉折詞。"
        },
        {
          "stem": "After months of hard training, the young pianist played the whole concert with great ___ and received a standing ovation.",
          "options": [
            "confident",
            "confidence",
            "confidently",
            "confide"
          ],
          "answer": 1,
          "explanation": "介系詞 with 之後、且被形容詞 great 修飾的位置須為名詞，『with great + 名詞』表『帶著極大的…』，故填名詞形式的『信心』。",
          "trap": "with(介系詞)加 great(形容詞)之後要接名詞;形容詞、副詞與動詞形式詞性都不合，別只挑看起來眼熟的字，先判斷空格需要的詞性。"
        },
        {
          "stem": "By the time the paramedics finally reached the mountain trail, the injured hiker ___ there alone for nearly two hours, cold and exhausted.",
          "options": [
            "waited",
            "had waited",
            "has waited",
            "was waiting"
          ],
          "answer": 1,
          "explanation": "By the time 加過去式 reached 點出一個過去時間點;等待的動作發生在『抵達』之前並已持續兩小時，屬於過去某時間點之前的動作，須用過去完成式 had + p.p.。",
          "trap": "By the time 帶出的是過去參考點，之前就已完成/持續的動作要用過去完成式(had waited);現在完成式與整段過去情境衝突，過去進行式則無法表達『在他們抵達前已等了兩小時』的先後關係。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">閱讀題型 對應位置</text><rect x=\"30\" y=\"35\" width=\"150\" height=\"120\" rx=\"4\" fill=\"#fff\" stroke=\"#3a342e\"/><rect x=\"42\" y=\"48\" width=\"126\" height=\"14\" rx=\"2\" fill=\"#c9755c\" opacity=\"0.5\"/><line x1=\"42\" y1=\"76\" x2=\"168\" y2=\"76\" stroke=\"#3a342e\" stroke-width=\"0.6\"/><line x1=\"42\" y1=\"90\" x2=\"168\" y2=\"90\" stroke=\"#3a342e\" stroke-width=\"0.6\"/><rect x=\"42\" y=\"100\" width=\"70\" height=\"10\" rx=\"2\" fill=\"#5aa874\" opacity=\"0.6\"/><line x1=\"42\" y1=\"124\" x2=\"168\" y2=\"124\" stroke=\"#3a342e\" stroke-width=\"0.6\"/><rect x=\"42\" y=\"134\" width=\"126\" height=\"14\" rx=\"2\" fill=\"#c9755c\" opacity=\"0.5\"/><text x=\"205\" y=\"52\" fill=\"#c9755c\" font-size=\"10\">主旨題</text><text x=\"205\" y=\"65\" fill=\"#3a342e\" font-size=\"9\">看首尾段</text><text x=\"205\" y=\"108\" fill=\"#5aa874\" font-size=\"10\">細節題</text><text x=\"205\" y=\"121\" fill=\"#3a342e\" font-size=\"9\">定位關鍵字</text><text x=\"160\" y=\"172\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">推論題須有文本依據, 字義靠上下文</text></svg>",
          "caption": "不同題型對應文章位置",
          "points": [
            "主旨題看首尾段;細節題回原文定位關鍵字;推論題須有文本依據不可過度延伸。",
            "字義題用上下文猜測(context clues),不靠單字背誦。",
            "先看題目再讀文章可提高定位效率。"
          ],
          "trap": "細節題答案常被『換句話說(paraphrase)』,別只找一模一樣的字;推論題切忌憑常識想像,要回文章找根據。"
        },
        {
          "h": "略讀與尋讀 skimming and scanning",
          "points": [
            "略讀(skimming)是快速看過全文抓大意與文章結構,適合做主旨題;不必看懂每個字,重點放在首段、各段第一句與結尾。",
            "尋讀(scanning)是帶著題目的關鍵字(數字、人名、地點)快速掃描定位,適合做細節題,找到對應句就停,不必從頭讀到尾。",
            "兩者搭配:先 skimming 掌握全貌,再針對各題 scanning 回原文找答案,可大幅省時又準確。"
          ],
          "formula": "",
          "trap": "細節題常見錯誤是憑印象作答而不回原文定位;會考的干擾選項常用原文出現過的字眼包裝錯誤訊息,務必回到對應句逐字核對再選。"
        },
        {
          "h": "代換與同義改寫 paraphrase",
          "points": [
            "閱讀測驗的正解很少照抄原文,常用同義改寫:原文 The store closes at nine,選項可能寫成 You cannot buy anything there after nine,意思相同但換字。",
            "看到選項與原文用字完全一樣(原文重現)反而要小心,常是把原句移花接木、張冠李戴的陷阱選項。",
            "平時練習把原文句子用自己的話改寫,熟悉 big 等於 large、begin 等於 start 等同義替換,作答時就能對得上。"
          ],
          "formula": "",
          "trap": "把『與原文字面相同』當成正解是常見失分點;要比對的是『意思』是否一致,而非字面是否雷同,過度延伸或無中生有的選項一律刪去。"
        },
        {
          "h": "文章結構與信號詞 text structure",
          "points": [
            "掌握文章結構有助定位:故事體依時間先後 first、then、finally 鋪陳,說明文常用 for example、in addition 列舉支持。",
            "信號詞透露語意走向:however、on the other hand 表轉折(前後相反),therefore、as a result 表結果,for example 表舉例支持前句。",
            "首段常點出主旨(topic sentence),末段常做總結或呼應主旨,主旨題優先看這兩處。"
          ],
          "formula": "轉折 however;結果 therefore;舉例 for example",
          "trap": "看到 however、but 卻忽略它代表『語意轉向』,常導致主旨判斷錯誤;轉折詞後面那句通常才是作者真正想強調的重點,別只記前半句。"
        },
        {
          "h": "主旨題與標題選擇 main idea and title",
          "points": [
            "主旨(main idea)是整篇都在談的核心,要『涵蓋全文』;若某選項只說到其中一段的細節,範圍太窄,不能當主旨。",
            "標題題選最能概括全文又不過大的:太籠統(如 Animals)或太細(只講一個例子)都不對,要不大不小剛好涵蓋。",
            "判斷主旨可問自己:作者寫這篇『最想告訴我什麼』,把各段共同指向的訊息合起來就是答案。"
          ],
          "formula": "",
          "trap": "把『文中提到的某個細節』誤當主旨是高頻錯誤;主旨必須概括全文,範圍過窄(只對應一段)或過寬(超出文章內容)的選項都要排除。"
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
            "lost",
            "hungry",
            "very tired"
          ],
          "answer": 3,
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
            "happening at once",
            "painful",
            "delayed",
            "expensive"
          ],
          "answer": 0,
          "explanation": "由 within minutes(數分鐘內就好轉)可推 immediate=立即的(馬上發生)。",
          "trap": "⚠ 用 context clues(within minutes 幾分鐘內)推字義;delayed(延遲)與『立刻見效』語境相反,別只憑字形猜,要回句子找線索。"
        },
        {
          "stem": "Notice: 'The library will be closed from July 1 to July 5 for renovation. During this period, borrowed books are due on July 8 instead of their original dates. Online services remain available.' A student borrowed a book due on July 3. When must it be returned?",
          "options": [
            "It cannot be returned at all.",
            "July 5",
            "July 3",
            "July 8"
          ],
          "answer": 3,
          "explanation": "公告說閉館期間(7/1–7/5)原本到期的書改為 7/8 歸還。原到期日 7/3 落在閉館期間,故順延至 7/8。",
          "trap": "⚠ 須整合兩個條件:原到期日(7/3)落在閉館區間內,才適用『改為 7/8』的規則。直接選原到期日 July 3 會忽略公告的延期條款。"
        },
        {
          "stem": "A passage ends: 'So next time you feel like giving up, remember that the marathon runner's secret is not speed, but the refusal to stop.' What is the writer's main purpose?",
          "options": [
            "To encourage readers to keep going through difficulty",
            "To explain how to run a marathon faster",
            "To warn readers about the dangers of running",
            "To compare different types of marathons"
          ],
          "answer": 0,
          "explanation": "結尾以馬拉松跑者『不停下來』為例,呼籲讀者在想放棄時繼續堅持,目的是激勵讀者面對困難不放棄。",
          "trap": "⚠ 寫作目的題要抓整體訴求,不是字面細節。marathon、speed 只是比喻載體;選『跑得更快/跑步危險』都是被表面字詞誤導,真正用意是鼓勵堅持。"
        },
        {
          "stem": "In 'Although the experiment seemed promising at first, its results turned out to be inconclusive, leaving the scientists unsure whether the drug worked,' the word 'inconclusive' most likely means ___.",
          "options": [
            "not giving a definite answer",
            "clearly successful",
            "completely false",
            "extremely dangerous"
          ],
          "answer": 0,
          "explanation": "由後句 leaving the scientists unsure whether the drug worked(讓科學家無法確定藥是否有效)可推 inconclusive=無定論的、不明確的。",
          "trap": "⚠ 用上下文(unsure whether)推字義,而非拆字面。Although 表先揚後抑,但 inconclusive≠『完全錯誤』(completely false 過度);也非『成功』,那與 unsure 矛盾。"
        },
        {
          "stem": "Two reviews: Review 1 says 'The plot was gripping but the acting felt wooden.' Review 2 says 'The performances carried an otherwise dull story.' Which statement do BOTH reviews support?",
          "options": [
            "Both the story and the acting were excellent.",
            "The story and the acting were not both strong at the same time.",
            "Both reviewers disliked everything about the film.",
            "Both reviewers praised the acting."
          ],
          "answer": 1,
          "explanation": "Review 1:劇情好但演技差;Review 2:演技撐起平淡劇情。兩篇都指出『劇情』與『演技』並非同時都優秀——各有一項較弱,共同點是兩者不能同時都強。",
          "trap": "⚠ 比對兩文觀點題要找『共同成立』的結論。兩評對『演技』看法相反(一說 wooden、一說 carried),故 D 錯;唯一兩篇都支持的是『兩項並非同時皆強』。"
        },
        {
          "stem": "Schedule — Train A departs 09:15, arrives 11:40. Train B departs 09:50, arrives 11:30. A passenger must arrive before 11:35 and wants the latest possible departure. Which train should they take?",
          "options": [
            "Train A, because it departs earlier",
            "Train A, because it arrives later",
            "Train B, because it both departs later and arrives before 11:35",
            "Neither train meets the requirement"
          ],
          "answer": 2,
          "explanation": "需求:11:35 前到達且出發越晚越好。A 到 11:40(超過 11:35,不符);B 到 11:30(符合)且出發 09:50 比 A 晚,故選 B。",
          "trap": "⚠ 雙條件圖表題:先用『到達 < 11:35』刷掉 A(11:40 超時),再比出發時間。只看『出發早/晚』而忽略到達限制會誤選 A。"
        },
        {
          "stem": "'Critics argue that fast fashion harms the environment. Supporters, however, point out that it makes trendy clothes affordable for low-income shoppers.' What is the function of the second sentence?",
          "options": [
            "It repeats the same idea as the first sentence.",
            "It presents an opposing viewpoint to the first.",
            "It gives an example of environmental harm.",
            "It concludes that fast fashion should be banned."
          ],
          "answer": 1,
          "explanation": "第一句講批評者認為快時尚有害環境;however 引出支持者的相反觀點(讓低收入者買得起流行服飾)。第二句功能是提出對立觀點。",
          "trap": "⚠ however 是『轉折/對比』訊號,代表立場相反而非重複或舉例。沒有任何句子下『應禁止』的結論,D 屬過度推論。"
        },
        {
          "stem": "Ad: 'Buy 2 get 1 free on all T-shirts (cheapest item free). T-shirts are $200 each.' A customer takes 3 T-shirts. How much will they pay?",
          "options": [
            "$200",
            "$600",
            "$500",
            "$400"
          ],
          "answer": 3,
          "explanation": "買 2 送 1,最便宜的免費。三件單價皆 $200,免費一件後付兩件 = $200 × 2 = $400。",
          "trap": "⚠ 『買2送1』是付兩件、拿三件,不是打折或免兩件。$600 是未套用優惠的原價;$200 誤以為只付一件。"
        },
        {
          "stem": "'By the time the firefighters arrived, the small kitchen fire had already spread to the upper floors.' What can we infer about the situation?",
          "options": [
            "The firefighters arrived before the fire started.",
            "The fire grew worse before help came.",
            "The firefighters put out the fire instantly.",
            "There was never any real danger."
          ],
          "answer": 1,
          "explanation": "had already spread(過去完成式)表在消防員抵達『之前』火已蔓延到樓上,可推火勢在援助到來前已惡化。",
          "trap": "⚠ By the time + 過去完成式表『某動作在另一過去時間點前已完成』。火在他們到達前就擴大,故並非『立刻撲滅』或『沒有危險』;A 把時序顛倒。"
        },
        {
          "stem": "In 'The manager remained composed even as customers shouted complaints and phones rang nonstop,' the word 'composed' most likely means ___.",
          "options": [
            "confused and lost",
            "angry and shouting",
            "calm and in control",
            "tired and sleepy"
          ],
          "answer": 2,
          "explanation": "even as(即使在…時)引出混亂情境(顧客大喊、電話響不停),經理仍 remained composed,對比可推 composed=冷靜、沉著。",
          "trap": "⚠ even as 表『即便處於…仍…』的對比語氣,故 composed 應與混亂相反=冷靜。被 shouted/rang 等吵雜字眼帶著選『生氣』就落入情境字面陷阱。"
        },
        {
          "stem": "'The committee rejected the proposal not because it lacked merit, but because there was simply no budget to fund it.' Why was the proposal rejected?",
          "options": [
            "Because it was a bad idea",
            "Because there was no money for it",
            "Because the committee misunderstood it",
            "Because it was submitted too late"
          ],
          "answer": 1,
          "explanation": "not because A, but because B 句型:否定 A(並非沒價值),強調真正原因 B(沒有預算)。故被否決是因為沒錢。",
          "trap": "⚠ not...but... 句型重點在 but 後面。not because it lacked merit 已明說『並非因為它沒價值』,故 A 正好相反;真正原因是 no budget。"
        },
        {
          "stem": "A chart shows monthly sales: Jan 120, Feb 90, Mar 150, Apr 150, May 110. Which statement is true based ONLY on the chart?",
          "options": [
            "Sales rose every month.",
            "March and April had equal sales, the highest of the period.",
            "May had the lowest sales.",
            "Sales doubled from January to March."
          ],
          "answer": 1,
          "explanation": "三月與四月皆 150,為五個月中最高且相等。B 正確。",
          "trap": "⚠ 圖表題只能依數據判斷。A 錯(2月降);C 錯(最低是 2月 90,非 5月 110);D 錯(120→150 非兩倍)。最高且相等的 March/April 才符合。"
        },
        {
          "stem": "'When the teacher praised Mia's essay, she blushed and looked down at her desk.' What does 'she' most likely refer to, and what does her reaction suggest?",
          "options": [
            "Mia; she felt shy or embarrassed by the praise",
            "The teacher; she was proud",
            "Mia; she was angry at the teacher",
            "The teacher; she was embarrassed"
          ],
          "answer": 0,
          "explanation": "句中被讚美的是 Mia,blushed(臉紅)+ looked down(低頭)是被稱讚而害羞/不好意思的反應,故 she 指 Mia,表害羞。",
          "trap": "⚠ 代名詞指代題:被讚美並做出臉紅反應的合理對象是 Mia(被誇者),非老師。臉紅低頭是害羞而非生氣,別忽略文本依據亂推情緒。"
        },
        {
          "stem": "'Unlike his older brother, who plans every detail in advance, Tom prefers to act on impulse.' What can we conclude about Tom?",
          "options": [
            "Tom carefully plans everything.",
            "Tom tends to act without much planning.",
            "Tom and his brother behave the same way.",
            "Tom never makes any decisions."
          ],
          "answer": 1,
          "explanation": "Unlike his older brother, who plans every detail(與凡事詳細規劃的哥哥不同),Tom act on impulse(憑衝動行事),故 Tom 較不事先規劃。",
          "trap": "⚠ Unlike 表對比:哥哥規劃→Tom 相反,即少規劃。被前半句 plans every detail 誤導而選 A 正好相反;act on impulse≠『從不做決定』。"
        },
        {
          "stem": "Email: 'Please confirm your attendance by Friday. If we do not hear from you, we will assume you cannot come and give your seat to someone on the waiting list.' What happens if you do not reply by Friday?",
          "options": [
            "Your seat is kept for you anyway.",
            "You automatically attend the event.",
            "Your seat may be given to another person.",
            "The event will be cancelled."
          ],
          "answer": 2,
          "explanation": "若週五前未回覆,主辦方將『假設你不能來』並把座位讓給候補名單上的人,故座位可能被讓出。",
          "trap": "⚠ If we do not hear from you... give your seat to someone on the waiting list 是『不回覆→讓位』。沉默被視為不出席,不是保留座位,A、B 與條款相反。"
        },
        {
          "stem": "In 'The novel's deliberately ambiguous ending lets each reader imagine a different fate for the heroine,' the phrase 'deliberately ambiguous' suggests the ending is ___.",
          "options": [
            "accidentally confusing",
            "intentionally open to interpretation",
            "clearly and fully explained",
            "poorly written by mistake"
          ],
          "answer": 1,
          "explanation": "deliberately=故意地;ambiguous=模稜兩可。後句 lets each reader imagine a different fate(讓每位讀者想像不同結局)呼應『刻意保留解讀空間』。",
          "trap": "⚠ deliberately(刻意)排除 A、D 的『意外/失誤』。ambiguous 與『清楚解釋(C)』相反;結合 each reader imagine different 可確認是『故意開放詮釋』。"
        },
        {
          "stem": "'Some say social media connects people; others say it isolates them. The truth probably lies somewhere in between.' What is the writer's stance?",
          "options": [
            "Social media only connects people.",
            "Social media only isolates people.",
            "Social media has no effect on people.",
            "Both effects can be partly true."
          ],
          "answer": 3,
          "explanation": "The truth probably lies somewhere in between(真相大概介於兩者之間),作者採折衷立場,認為兩種效果都可能部分為真。",
          "trap": "⚠ lies somewhere in between 是折衷訊號,作者不偏向任一極端,故非『只連結/只孤立』;也不是『毫無影響』,別把『兼具兩面』誤讀為『沒影響』。"
        },
        {
          "stem": "Recipe note: 'Bake at 180°C for 25 minutes. For a fan oven, lower the temperature by 20°C and reduce the time by 5 minutes.' For a fan oven, what setting should be used?",
          "options": [
            "180°C for 25 minutes",
            "160°C for 20 minutes",
            "200°C for 30 minutes",
            "160°C for 25 minutes"
          ],
          "answer": 1,
          "explanation": "旋風烤箱需『降溫 20°C』(180→160)且『減 5 分鐘』(25→20),故 160°C、20 分鐘。",
          "trap": "⚠ lower by 20°C / reduce by 5 minutes 都是『減少』。180-20=160、25-5=20;選 200°C/30 把『減』看成『加』方向錯誤,D 漏減時間。"
        },
        {
          "stem": "'Scientists once believed the smallest particle was the atom. Later research, however, revealed even tinier components inside it.' What does this passage mainly tell us?",
          "options": [
            "Atoms do not exist.",
            "Scientific understanding can change with new research.",
            "The atom is still the smallest particle.",
            "Scientists never make mistakes."
          ],
          "answer": 1,
          "explanation": "曾以為原子最小,however 後來研究發現原子內還有更小成分——說明科學認知會隨新研究而改變。",
          "trap": "⚠ 主旨題抓整體訊息:once believed...later...revealed 的轉折在表達『認知會更新』。C 與後句『發現更小成分』矛盾;A、D 過度延伸。"
        },
        {
          "stem": "'Had the captain noticed the warning lights earlier, the ship might never have run aground.' What does this sentence imply actually happened?",
          "options": [
            "The captain noticed the lights in time and avoided the accident.",
            "The captain did not notice the lights in time, and the ship ran aground.",
            "There were no warning lights on the ship.",
            "The ship reached the port safely."
          ],
          "answer": 1,
          "explanation": "Had the captain noticed... might never have run aground 是與過去事實相反的假設(若早點注意…就不會擱淺),言下之意是『實際上船長未及時注意,船真的擱淺了』。",
          "trap": "⚠ 假設語氣 (Had + 過去完成 = If the captain had noticed) 與過去事實相反:假設『若早注意就不會擱淺』,反推事實是『沒早注意、確實擱淺』。被字面 might never have run aground 誤讀成沒事故會選 A/D。"
        },
        {
          "stem": "'The tone of the letter shifted from polite requests to firm warnings as the deadline approached.' What does this tell us about the letters over time?",
          "options": [
            "They became friendlier.",
            "They stayed exactly the same.",
            "They grew more serious and insistent.",
            "They became more uncertain."
          ],
          "answer": 2,
          "explanation": "語氣從 polite requests(客氣請求)轉為 firm warnings(堅定警告),隨截止日逼近而變得更嚴肅、強硬。",
          "trap": "⚠ 語氣變化題:shifted from polite requests to firm warnings 是『由軟轉硬』。firm warnings 比 polite requests 更嚴正,故非『更友善/不變/更不確定』。"
        },
        {
          "stem": "Coupon: 'Get 15% off any order over $500. Cannot be combined with other discounts.' A customer's cart totals $480 and already has a 10% member discount applied. Can they also use this coupon?",
          "options": [
            "No, because the order is under $500 AND coupons cannot be combined.",
            "No, because 15% is less than 10%.",
            "Yes, but only the 15% applies.",
            "Yes, both discounts apply."
          ],
          "answer": 0,
          "explanation": "此券有兩個障礙:①需滿 $500 才可用,而購物車僅 $480(未達門檻);②不可與其他折扣併用,而已套用 10% 會員折扣。兩條件皆不符,故不可用。",
          "trap": "⚠ 雙重限制題:就算金額達標,『不可併用』也會擋下已套會員折扣的訂單;反之就算可併用,$480 也未達 $500。兩個獨立條件任一不符即不可用,別只檢查一項。"
        },
        {
          "stem": "閱讀下列公告,回答問題:\n\"Notice: The school library will be closed this Friday for cleaning. It will open again on Monday. Please return or borrow your books before Thursday.\"\n問題:根據這則公告,圖書館何時會重新開放?",
          "options": [
            "這個星期五 (This Friday)",
            "星期四 (Thursday)",
            "星期一 (Monday)",
            "星期六 (Saturday)"
          ],
          "answer": 2,
          "explanation": "這是掃讀(scanning)找特定訊息的題型。公告寫著圖書館週五因清潔而關閉,並說 \"It will open again on Monday\",直接指出重新開放的日子。週五是關閉日、週四是還借書的期限,都不是開放日,故正解為「星期一(Monday)」。"
        },
        {
          "stem": "閱讀短文,回答問題:\n\"Maria loves painting. Last summer, she visited an art museum in Taipei with her cousin. They stayed there for three hours, looking at many beautiful works. Soon after the trip, Maria decided to take painting classes.\"\n問題:根據短文,Maria 最可能為什麼決定去上繪畫課?",
          "options": [
            "參觀美術館的經驗讓她對藝術更感興趣",
            "她的表親強迫她一起去上課",
            "她想成為美術館的導覽員",
            "她需要完成學校指定的作業"
          ],
          "answer": 0,
          "explanation": "這是推論(inference)題。短文說 Maria 本來就熱愛繪畫,參觀美術館看了許多作品後「不久便決定去上繪畫課」,可合理推論是這趟參觀讓她對藝術更投入。文中只提到表親「同行」,沒有強迫;也未提及當導覽員或寫作業,故正解為「參觀美術館的經驗讓她對藝術更感興趣」。",
          "trap": "看到 with her cousin 別誤讀成被表親強迫;表親只是同行者,不是決定的原因。"
        },
        {
          "stem": "閱讀回收中心的說明,回答問題:\n\"The city recycling center accepts paper on Mondays, glass on Wednesdays, and plastic on Fridays. Metal is collected on the same day as glass. If a holiday falls on a collection day, that item is collected the next day instead.\"\n問題:如果這個星期三是國定假日,金屬(metal)會在哪一天被回收?",
          "options": [
            "星期一 (Monday)",
            "星期三 (Wednesday)",
            "星期五 (Friday)",
            "星期四 (Thursday)"
          ],
          "answer": 3,
          "explanation": "這題要整合多個訊息。先由 \"Metal is collected on the same day as glass\" 得知金屬與玻璃同一天收,而玻璃是星期三;再套用規則「若收集日遇假日,該項目順延到隔天」。本週星期三為國定假日,所以金屬改到隔天星期四收,故正解為「星期四(Thursday)」。",
          "trap": "金屬本來跟玻璃同在星期三,但逢假日要順延一天,答案不是星期三;星期五是塑膠日,也不是金屬。"
        },
        {
          "stem": "閱讀短文,回答問題:\n\"The movie was so tedious that half of the audience fell asleep before it ended. Even the actors on the screen seemed bored.\"\n問題:根據上下文,畫底線的 tedious 最可能是什麼意思?",
          "options": [
            "刺激的 (exciting)",
            "昂貴的 (expensive)",
            "可怕的 (scary)",
            "無聊的 (boring)"
          ],
          "answer": 3,
          "explanation": "這是由上下文猜測生字字義(guessing meaning from context)的閱讀策略。句中線索「一半觀眾在結束前就睡著」和「連螢幕上的演員都顯得無聊」都指向負面、乏味的感受,因此 tedious 最接近「無聊的(boring)」。刺激、昂貴、可怕都與這些線索矛盾。",
          "trap": "別因為主題是「電影」就直覺聯想成刺激;要依觀眾睡著、演員顯得無聊等線索推論字義。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">聽力 三步驟流程</text><rect x=\"20\" y=\"55\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"60\" y=\"78\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">先看圖</text><text x=\"60\" y=\"93\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">選項</text><rect x=\"120\" y=\"55\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"160\" y=\"78\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">標記</text><text x=\"160\" y=\"93\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">關鍵字</text><rect x=\"220\" y=\"55\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"260\" y=\"78\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">聽整句</text><text x=\"260\" y=\"93\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">語意</text><line x1=\"100\" y1=\"80\" x2=\"120\" y2=\"80\" stroke=\"#3a342e\" stroke-width=\"2\"/><polygon points=\"120,80 112,76 112,84\" fill=\"#3a342e\"/><line x1=\"200\" y1=\"80\" x2=\"220\" y2=\"80\" stroke=\"#3a342e\" stroke-width=\"2\"/><polygon points=\"220,80 212,76 212,84\" fill=\"#3a342e\"/><text x=\"160\" y=\"140\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"11\">注意 not / never 會反轉答案</text><text x=\"160\" y=\"162\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">聽到的字未必是答案</text></svg>",
          "caption": "聽力三步驟先預測再聽語意",
          "points": [
            "先看圖／選項,預測題目方向。",
            "聽到關鍵字立即標記,別執著聽懂每個字。",
            "注意語氣、否定詞與時間詞,常是答題關鍵。"
          ],
          "trap": "選項常出現『聽到的字』陷阱,聽到的單字未必是答案,要聽整句語意;尤其注意 not/never 等否定詞會反轉答案。"
        },
        {
          "h": "數字與時間訊息 numbers & time",
          "points": [
            "聽價格、電話、時刻時,要分清易混的尾音:fifteen 重音在後(唸成 fif-TEEN),fifty 重音在前(唸成 FIF-ty),thirteen 與 thirty 也是同樣道理。",
            "時間常用 a quarter past seven(七點十五分)、half past eight(八點半);價格 It's twelve fifty 指 12 元 50 分,別聽成 1250。",
            "聽到 the day after tomorrow(後天)、in two weeks(兩週後)這類詞要換算,不能只抓一個數字就作答。"
          ],
          "formula": "",
          "trap": "最常把 thirteen/thirty、fifteen/fifty 聽錯:-teen 結尾重音在後、母音拉長,-ty 結尾重音在前;要聽完整個字、靠重音判別,不要憑前半段就搶答。"
        },
        {
          "h": "推測說話地點與身分 inference",
          "points": [
            "題目常問 Where are the speakers? 或 Who is the man?,答案要靠線索字推測,通常不會直接講出來。",
            "聽到 Check, please. 與 Are you ready to order? 可推測在餐廳(restaurant);聽到 Open your mouth. 與 Does it hurt here? 可推測在看牙醫(at the dentist's)。",
            "聽到 boarding 與 gate 多半在機場(airport);聽到 fitting room 與 try it on 多半在服飾店。"
          ],
          "formula": "",
          "trap": "別被單一字面意思騙:聽到 book 不一定是書,可能是 book a table(訂位);要綜合整段情境詞,不要抓到一個名詞就對號入座。"
        },
        {
          "h": "聽出語氣與言外之意 tone & intention",
          "points": [
            "婉拒常常不直接說 no:I'd love to, but I have to study. 其實是拒絕;聽到 but 之後才是重點。",
            "反問語氣如 Do I have to? 常表示不情願;You did a great job! 配合稱讚的語調是讚美。",
            "聽到 Could you do me a favor? 是要拜託對方;Would you mind opening the window? 是客氣地請求,回答 Not at all. 反而表示願意。"
          ],
          "formula": "",
          "trap": "別把帶 but 的句子當成答應:I'd love to, but… 是婉拒。又如 Would you mind…? 答 No / Not at all. 其實是答應幫忙,別被否定字誤導。"
        },
        {
          "h": "看圖與看表選答 picture & schedule",
          "points": [
            "圖表題先快速比對各選項圖的差異:人數、動作、物品位置、天氣,聽到對應描述再勾選。",
            "位置介系詞是關鍵:The cat is under the table.(在桌子下)、next to the door(在門旁)、between A and B(在兩者之間)。",
            "看課表或時刻表時,先鎖定問句問的是哪一天、哪一節、幾點,再對照欄位作答。"
          ],
          "formula": "",
          "trap": "位置介系詞最易混:in(在裡面)、on(在表面)、under(在下方)、in front of(在前面)、behind(在後面);聽到 behind 別誤選 in front of,先確認方位再對圖。"
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
            "中午",
            "七點前",
            "整天不開",
            "八點"
          ],
          "answer": 3,
          "explanation": "not until eight=直到八點才(開門),故開門時間為八點。",
          "trap": "not until=『直到…才』,not 不代表『不開』;聽到否定詞要聽完整句,八點才開門而非不營業。"
        },
        {
          "stem": "聽到 'The meeting has been put off until next Friday.',會議怎麼了?",
          "options": [
            "提前了",
            "取消了",
            "延期了",
            "照常舉行"
          ],
          "answer": 2,
          "explanation": "put off=延期、推遲;until next Friday 表延到下週五,故會議『延期』。",
          "trap": "⚠ put off 是『延期』不是『取消』;聽到 until next Friday 表延後而非取消,別把片語 put off 誤聽成 call off(取消)。"
        },
        {
          "stem": "聽到 'You can't miss it; the bank is right next to the post office.',對方在做什麼?",
          "options": [
            "拒絕幫忙",
            "抱怨銀行",
            "邀約見面",
            "報路(指引方向)"
          ],
          "answer": 3,
          "explanation": "You can't miss it(你一定找得到)+ right next to...(就在…旁邊)是典型的報路用語。",
          "trap": "⚠ You can't miss it 是『你絕對找得到』的報路慣用語,不是字面『不能錯過』;結合 next to the post office 可知在指引方向,別被 can't 的否定誤導。"
        },
        {
          "stem": "You hear: 'If only I had taken the earlier train, I wouldn't be stuck here now.' What is true about the speaker?",
          "options": [
            "He took the earlier train.",
            "He prefers the later train.",
            "He missed the earlier train and is now stuck.",
            "He is about to catch the earlier train."
          ],
          "answer": 2,
          "explanation": "If only + 過去完成式 (had taken) 表與過去事實相反的遺憾,代表他『沒有』搭上較早的車;主句 wouldn't be stuck 表現在被困。",
          "trap": "⚠ If only I had taken... 是與過去相反的假設,真正事實正好相反——他沒搭上;別把假設句聽成真的搭到了。"
        },
        {
          "stem": "You hear two speakers. W: 'Did you finish the report?' M: 'I would have, if my laptop hadn't crashed.' What happened?",
          "options": [
            "He did not finish because the laptop crashed.",
            "His laptop is fine and the report is done.",
            "He finished the report.",
            "He never started the report."
          ],
          "answer": 0,
          "explanation": "I would have (finished), if my laptop hadn't crashed = 第三條件句,真實情況是電腦當機所以『沒』完成。",
          "trap": "⚠ would have + if...hadn't 表與事實相反;laptop hadn't crashed 是假設,真實情形是『電腦真的當機了』,報告沒做完。"
        },
        {
          "stem": "You hear: 'Hardly had I sat down when the phone rang.' Which happened first?",
          "options": [
            "The phone rang first.",
            "Sitting down happened first.",
            "They happened at exactly the same second, unrelated.",
            "Neither event happened."
          ],
          "answer": 1,
          "explanation": "Hardly had I sat down when... = 我才剛坐下,電話就響了;past perfect (had sat) 的動作先發生,故『坐下』在前。",
          "trap": "⚠ Hardly had + 過去完成式...when... 表前一動作剛完成另一件就發生;had sat down 是較早的動作,別因為 when 引導電話而誤判電話在先。"
        },
        {
          "stem": "On a train announcement: 'Passengers for Platform 3 should change at the next stop, except those traveling to Greenfield.' Who stays on the train at the next stop?",
          "options": [
            "All Platform 3 passengers.",
            "Only passengers not going to Platform 3.",
            "No one stays on.",
            "Passengers traveling to Greenfield."
          ],
          "answer": 3,
          "explanation": "should change... except those traveling to Greenfield = 除了往 Greenfield 的乘客都要換車,故往 Greenfield 者留在車上不換。",
          "trap": "⚠ except 引導『例外』,被排除者行為相反——去 Greenfield 的人『不用』換車;別把全體都當成要換車。"
        },
        {
          "stem": "You hear a weather forecast: 'It'll be sunny in the morning, but showers are likely to move in by late afternoon.' What should you prepare for the afternoon?",
          "options": [
            "Rain later in the day.",
            "Bright sunshine all day.",
            "Snow in the morning.",
            "Strong wind only."
          ],
          "answer": 0,
          "explanation": "showers are likely to move in by late afternoon = 傍晚前可能下陣雨,故下午要為下雨做準備。",
          "trap": "⚠ but 後轉折才是重點;聽到開頭 sunny 就選晴天會錯,showers(陣雨)move in by late afternoon 才是下午的關鍵。"
        },
        {
          "stem": "Phone message: 'This is Dr. Lee's office. Your appointment on Monday has been moved up to this Friday at 10.' When is the appointment now?",
          "options": [
            "Monday, as planned.",
            "Next Monday at 10.",
            "This Friday at 10.",
            "It was cancelled."
          ],
          "answer": 2,
          "explanation": "moved up = 提前;原本週一的約診提前到『本週五十點』。",
          "trap": "⚠ moved up 是『提前』而非延後或維持原狀;聽到 Monday 是舊時間,新時間是 Friday,別選錯。"
        },
        {
          "stem": "You hear: 'I can't thank you enough for what you've done.' What does the speaker mean?",
          "options": [
            "He is unable to thank the person.",
            "He is extremely grateful.",
            "He refuses to say thanks.",
            "He has nothing to thank for."
          ],
          "answer": 1,
          "explanation": "can't thank you enough = 再怎麼感謝都不夠,表示非常感激,是強調感謝的慣用語。",
          "trap": "⚠ can't...enough 是『再…也不夠』的強調讚美句型,意思正好是極度感謝;別被字面 can't 誤解為無法感謝。"
        },
        {
          "stem": "At a restaurant. W: 'Would you care for some dessert?' M: 'I'd better not; I'm watching my weight.' What does the man do?",
          "options": [
            "Orders dessert happily.",
            "Asks for a larger portion.",
            "Politely declines dessert.",
            "Complains about the food."
          ],
          "answer": 2,
          "explanation": "I'd better not + I'm watching my weight(我在控制體重)= 婉拒甜點。",
          "trap": "⚠ I'd better not 是委婉拒絕;watching my weight 是控制體重的理由,別把 care for(想要)當成他要點甜點。"
        },
        {
          "stem": "You hear: 'No sooner had the game started than it began to pour.' What is the correct sequence?",
          "options": [
            "It rained the whole day before the game.",
            "It rained, then the game started.",
            "The game was cancelled before starting.",
            "The game started, then it rained almost immediately."
          ],
          "answer": 3,
          "explanation": "No sooner had the game started than it began to pour = 比賽一開始就立刻下起大雨;had started 動作在前。",
          "trap": "⚠ No sooner...than... 表『一…就…』,had started 為先發生的動作;than 後的下雨緊接在後,別倒過來判斷。"
        },
        {
          "stem": "A store clerk says: 'The jacket is on sale, but only if you buy two or more items.' When do you get the sale price?",
          "options": [
            "Only when buying two or more items.",
            "Only on items other than the jacket.",
            "Never, the sale ended.",
            "On any single jacket."
          ],
          "answer": 0,
          "explanation": "only if you buy two or more items = 條件是買兩件以上才享特價。",
          "trap": "⚠ only if 設定『唯一條件』;沒買滿兩件就沒折扣,別聽到 on sale 就以為單買也享優惠。"
        },
        {
          "stem": "You hear: 'I wish I could come to your party, but I'll be out of town.' Will the speaker attend?",
          "options": [
            "Yes, definitely.",
            "No, the speaker will be away.",
            "Yes, after returning early.",
            "Only if invited again."
          ],
          "answer": 1,
          "explanation": "I wish I could come(我希望能來,但其實不能)+ but I'll be out of town(我會出城)= 無法參加。",
          "trap": "⚠ I wish I could come 表『無法前往的遺憾』,並非答應;but I'll be out of town 已點明缺席原因。"
        },
        {
          "stem": "Announcement: 'Flight BA208 to Paris is now boarding at Gate 12; the previously announced Gate 9 is no longer in use.' Which gate should passengers go to?",
          "options": [
            "Neither; the flight is delayed.",
            "Gate 9.",
            "Both gates 9 and 12.",
            "Gate 12."
          ],
          "answer": 3,
          "explanation": "boarding at Gate 12 + Gate 9 is no longer in use = 改在 12 號登機門,9 號已停用。",
          "trap": "⚠ 機場廣播常更改登機門;no longer in use 表 9 號作廢,正確是新公布的 Gate 12,別記住第一個聽到的號碼。"
        },
        {
          "stem": "You hear: 'It's high time we left for the airport.' What does the speaker imply?",
          "options": [
            "There is plenty of time left.",
            "The airport is closed.",
            "We should have left already; we're late.",
            "We just arrived at the airport."
          ],
          "answer": 2,
          "explanation": "It's high time + 過去式 (we left) = 早該…了,暗示出發時間已過、該趕快走。",
          "trap": "⚠ It's high time we left 用過去式表『早就該做』的催促語氣,意指已經太晚,不是還有充裕時間。"
        },
        {
          "stem": "W: 'How was the movie?' M: 'It could have been better.' What is the man's opinion?",
          "options": [
            "The movie was somewhat disappointing.",
            "He didn't watch the movie.",
            "The movie was excellent.",
            "The movie was the best ever."
          ],
          "answer": 0,
          "explanation": "It could have been better = 本來可以更好,委婉表達『不夠好、有點失望』。",
          "trap": "⚠ could have been better 是委婉的負評,意思是『不太好』;別把 better 當成稱讚而誤選優秀。"
        },
        {
          "stem": "You hear: 'Take this medicine twice a day, but not on an empty stomach.' When should you avoid taking it?",
          "options": [
            "After meals.",
            "When you haven't eaten anything.",
            "Twice a day always.",
            "Only at night."
          ],
          "answer": 1,
          "explanation": "not on an empty stomach = 不要空腹時服用,故肚子空空(沒吃東西)時應避免。",
          "trap": "⚠ on an empty stomach = 空腹;not on an empty stomach 表『別空腹吃』,要在飯後或進食後服用,別理解反了。"
        },
        {
          "stem": "Two friends. M: 'Shall we walk or take a taxi?' W: 'It's pouring outside, so let's not risk getting soaked.' What will they do?",
          "options": [
            "Take a taxi.",
            "Wait until it stops, then walk.",
            "Stay home all day.",
            "Walk in the rain."
          ],
          "answer": 0,
          "explanation": "It's pouring(下大雨)+ let's not risk getting soaked(別冒險淋濕)= 選擇搭計程車而非步行。",
          "trap": "⚠ 需整合『下大雨』與『不想淋濕』兩個線索推論;否定句 let's not...walk 暗示排除走路,故搭計程車。"
        },
        {
          "stem": "You hear: 'Not only did she pass the exam, but she also got the highest score.' What is true?",
          "options": [
            "She failed the exam.",
            "She didn't take the exam.",
            "She only passed but scored low.",
            "She passed and scored the highest."
          ],
          "answer": 3,
          "explanation": "Not only...but also... = 不僅…而且…;她不僅通過,還拿了最高分,兩件都是肯定的。",
          "trap": "⚠ Not only...but also 是『遞進肯定』而非否定;聽到 Not only 開頭別誤判為否定,兩個訊息都成立。"
        },
        {
          "stem": "A neighbor says: 'You're welcome to use the garden anytime, as long as you lock the gate when you leave.' What is the condition?",
          "options": [
            "You can never use the garden.",
            "You can only use it when the owner is home.",
            "You may use it if you lock the gate on leaving.",
            "You must ask permission each time."
          ],
          "answer": 2,
          "explanation": "as long as you lock the gate = 只要離開時鎖門,就可隨時使用花園。",
          "trap": "⚠ as long as 引導『條件』,鎖門是使用花園的唯一前提;別把 anytime 當成毫無條件。"
        },
        {
          "stem": "You hear: 'The teacher said we needn't have brought our textbooks today.' What does this mean about the textbooks?",
          "options": [
            "They were required and used.",
            "They brought textbooks, but it turned out unnecessary.",
            "They forgot the textbooks at home.",
            "They must bring textbooks tomorrow."
          ],
          "answer": 1,
          "explanation": "needn't have brought = 其實不必帶卻帶了,表示『帶了但白帶了』。",
          "trap": "⚠ needn't have + 過去分詞 表『做了卻沒必要』;事實是他們有帶,只是不必要,別誤聽成沒帶或被要求帶。"
        },
        {
          "stem": "Library announcement: 'The library closes at 9, but the study rooms must be empty by 8:30.' By when must you leave the study rooms?",
          "options": [
            "8:00.",
            "9:00.",
            "8:30.",
            "Anytime before closing."
          ],
          "answer": 2,
          "explanation": "study rooms must be empty by 8:30 = 自習室須在八點半前淨空,與整館九點才關門不同。",
          "trap": "⚠ 同段含兩個時間,closes at 9 是全館,study rooms 的截止是 8:30;別把整館關門時間套到自習室。"
        },
        {
          "stem": "You hear: 'I'd sooner stay home than go out in this heat.' What does the speaker prefer?",
          "options": [
            "Going out despite the heat.",
            "Staying home.",
            "Going out only at night.",
            "Traveling somewhere cooler."
          ],
          "answer": 1,
          "explanation": "would sooner A than B = 寧願 A 也不要 B;偏好 stay home(待在家)勝過出門。",
          "trap": "⚠ would sooner...than... 與 would rather...than 同義,偏好的是 than 前的 stay home;句尾的 go out 是被比下去的選項,別反選。"
        },
        {
          "stem": "聽到 'The next train leaves at a quarter to nine.' 火車幾點開?",
          "options": [
            "8:45",
            "9:15",
            "9:45",
            "8:15"
          ],
          "answer": 0,
          "explanation": "a quarter to nine 表示『差十五分就九點』,也就是 8:45;to 是『差…到整點』。"
        },
        {
          "stem": "在派對邀約中。W: 'Can you come to my farewell party this Saturday?' M: 'I wish I could, but I have to catch an early flight.' 這位男士的意思是?",
          "options": [
            "他無法出席,婉轉拒絕了",
            "他很樂意出席派對",
            "他想改到別的時間見面",
            "他星期六不用搭飛機"
          ],
          "answer": 0,
          "explanation": "I wish I could 表示『真希望能，但…』的委婉拒絕，but 之後說明他要趕早班飛機，所以其實不能參加。",
          "trap": "I wish I could 聽起來像答應，其實 but 之後才是重點——這是婉拒；別聽到 could 就以為他會出席。"
        },
        {
          "stem": "校內廣播:'All members must return the library books by Wednesday, but those who joined after May may return them on Friday.' 六月才入會的 Amy,她的還書期限是?",
          "options": [
            "星期三",
            "星期一",
            "星期五",
            "不必還書"
          ],
          "answer": 2,
          "explanation": "一般成員週三前還書，但『五月之後入會者』屬例外可延到週五;Amy 六月入會，符合 after May，故期限為週五。",
          "trap": "別聽到開頭的 Wednesday 就作答;Amy 六月入會屬 after May 的例外，but 引導的例外條件會改變答案，要延到週五。"
        },
        {
          "stem": "聽到 'Had I known you were allergic to peanuts, I would never have ordered this dish.' 關於說話者，何者為真?",
          "options": [
            "他早就知道對方對花生過敏",
            "他其實沒有點這道菜",
            "對方並不會對花生過敏",
            "他當時不知道對方會過敏,而且已經點了這道菜"
          ],
          "answer": 3,
          "explanation": "Had I known 等於 If I had known,是與過去事實相反的假設，表示他當時『並不知道』;would never have ordered 同樣與事實相反，代表他『其實已經點了』這道菜。",
          "trap": "倒裝的 Had I known 就是 If I had known，與過去相反——真實情況是他不知道;would never have ordered 也是假設，真實是他已經點了，別被否定字面反向誤判。"
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
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"160\" y=\"20\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"13\">Do you mind...? 回答相反</text><rect x=\"60\" y=\"38\" width=\"200\" height=\"34\" rx=\"6\" fill=\"#fff\" stroke=\"#3a342e\"/><text x=\"160\" y=\"59\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"11\">Do you mind if I...?</text><line x1=\"130\" y1=\"72\" x2=\"90\" y2=\"100\" stroke=\"#5aa874\" stroke-width=\"2\"/><line x1=\"190\" y1=\"72\" x2=\"230\" y2=\"100\" stroke=\"#c9755c\" stroke-width=\"2\"/><rect x=\"20\" y=\"102\" width=\"140\" height=\"56\" rx=\"6\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"90\" y=\"123\" text-anchor=\"middle\" fill=\"#5aa874\" font-size=\"12\">No / Not at all</text><text x=\"90\" y=\"143\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">= 答應 (請便)</text><rect x=\"170\" y=\"102\" width=\"130\" height=\"56\" rx=\"6\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"235\" y=\"123\" text-anchor=\"middle\" fill=\"#c9755c\" font-size=\"12\">Yes, I do</text><text x=\"235\" y=\"143\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"10\">= 拒絕 (介意)</text><text x=\"160\" y=\"174\" text-anchor=\"middle\" fill=\"#3a342e\" font-size=\"9\">與中文直覺相反, 最易答反</text></svg>",
          "caption": "mind 答 No 才是答應",
          "points": [
            "邀約/回應:Would you like to…? / I'd love to, but…(婉拒)。",
            "請求/許可:Could you…? / Do you mind if I…?(回 No 才是答應)。",
            "建議:How about…? / Why don't we…?;道歉與回應:That's all right。"
          ],
          "trap": "Do you mind…? 問句答應要說 No(不介意),拒絕才說 Yes;這與中文直覺相反,最容易答反。"
        },
        {
          "h": "招呼與寒暄 greetings",
          "points": [
            "問候用 How are you? / How's it going?,回答可說 Pretty good. 或 Not bad.,再禮貌反問 And you?。",
            "初次見面說 Nice to meet you.,只有第一次見面才用 meet;再次見面要改說 Nice to see you again.。",
            "道別不只 Goodbye,還有 See you later. / Take care. / Have a nice day.。"
          ],
          "formula": "",
          "trap": "meet 與 see 易誤用:第一次見面才用 Nice to meet you.,已認識的人要用 Nice to see you.;對熟人說 meet you 會顯得生硬。"
        },
        {
          "h": "電話用語 on the phone",
          "points": [
            "接電話自報身分或詢問對方用 Hello, this is Amy. / Who's calling, please?;指認自己用 this is,不用 I am。",
            "找人說 May I speak to Mr. Lin?;請對方稍候用 Hold on, please. 或 Just a moment, please.。",
            "對方不在可幫忙留言:Can I take a message? / Would you like to leave a message?。"
          ],
          "formula": "",
          "trap": "電話中表明身分用 This is Amy (speaking).,不是 I am Amy;問對方是誰用 Who's calling? 而非中式直譯的 Who are you?,後者很不禮貌。"
        },
        {
          "h": "問路與指引方向 asking the way",
          "points": [
            "禮貌問路用 Excuse me, how can I get to the station? 或 Where is the post office?。",
            "指路常用祈使句:Go straight. / Turn left at the corner. / It's on your right.。",
            "估距離與位置用 It's about a five-minute walk. 與 across from the bank(在銀行對面)。"
          ],
          "formula": "祈使句:(Please) + 原形動詞 …(Turn right / Go straight)",
          "trap": "指路祈使句要用原形動詞開頭:說 Turn left.,不要說 You turn left 或 Turning left;另外 across from(對面)別和 next to(隔壁)搞混。"
        },
        {
          "h": "餐廳與購物用語 restaurant & shopping",
          "points": [
            "點餐時服務生問 May I take your order? / Anything to drink?,客人答 I'd like a hamburger.。",
            "內用外帶要分清:For here or to go?;結帳用 Check, please. 與 How much is it?。",
            "購物試穿與詢問用 Can I try it on? / Do you have a bigger size? / It's on sale.。"
          ],
          "formula": "I'd like + 名詞 / to + 原形動詞",
          "trap": "點餐表達意願用 I'd like(= I would like),別用 I want,後者語氣較沒禮貌;且 I'd like 後接名詞或 to + 原形動詞,不能直接接動詞原形。"
        }
      ],
      "quiz": [
        {
          "stem": "A: 'Do you mind if I open the window?' B: '___ Go ahead.'",
          "options": [
            "Not at all.",
            "Yes, I do.",
            "Yes, please.",
            "I'd love to."
          ],
          "answer": 0,
          "explanation": "Do you mind…? 答應(不介意)用否定回答,Not at all + Go ahead 表『請便』。",
          "trap": "mind=介意,答應要說 Not at all/No;後句 Go ahead(請便)已暗示答應,故不能選 Yes(那是拒絕)。"
        },
        {
          "stem": "A: 'Thank you so much for your help.' B: '___'",
          "options": [
            "Not yet.",
            "Yes, I do.",
            "Here you are.",
            "You're welcome."
          ],
          "answer": 3,
          "explanation": "回應道謝用 You're welcome(不客氣)。",
          "trap": "道謝的標準回應是 You're welcome;Here you are 是『給你(遞東西)』,Not yet 是『還沒』,語境不符。"
        },
        {
          "stem": "A: 'Would you like to join us for dinner tonight?' B: '___ I already have other plans.'",
          "options": [
            "I'd love to.",
            "Yes, please.",
            "Not at all.",
            "I'd love to, but"
          ],
          "answer": 3,
          "explanation": "後句 I already have other plans(已有別的安排)表婉拒,須用 I'd love to, but...(我很想,但是…)。",
          "trap": "⚠ 後句『已有其他計畫』是婉拒訊號,須用帶 but 的婉拒句型;單純 I'd love to(欣然接受)與後面的拒絕理由矛盾,Not at all 答非所問。"
        },
        {
          "stem": "A: 'I'm sorry I broke your cup by accident.' B: '___ It doesn't matter at all.'",
          "options": [
            "Here you are.",
            "Help yourself.",
            "Never mind.",
            "Congratulations!"
          ],
          "answer": 2,
          "explanation": "回應對方道歉、表示不介意用 Never mind(沒關係);呼應後句 It doesn't matter。",
          "trap": "⚠ 對方為打破杯子道歉,回應安慰用 Never mind(沒關係);Here you are 是『遞東西給你』,Help yourself 是『請自便(吃喝)』,語境皆不符。"
        },
        {
          "stem": "A: 'I've been waiting here for almost an hour!' B: 'I'm terribly sorry. ___ The traffic was a nightmare.' A: 'Well, you might have called me at least.'",
          "options": [
            "It's none of your business.",
            "I couldn't help it.",
            "I can't agree more.",
            "It serves you right."
          ],
          "answer": 1,
          "explanation": "I couldn't help it.(我也是沒辦法/身不由己)用來為遲到道歉並說明原因;A 接著抱怨『至少該打通電話』,可見 B 在辯解。",
          "trap": "⚠ couldn't help it 不是『沒幫上忙』,而是『無法控制、情非得已』;與後句塞車理由連貫。It serves you right(活該)是責備對方,語氣完全相反。"
        },
        {
          "stem": "A: 'How was the job interview you were so nervous about?' B: '___ They told me I got the position right on the spot!'",
          "options": [
            "It couldn't have gone better.",
            "I wish it had gone well.",
            "It could have been worse.",
            "It couldn't have gone worse."
          ],
          "answer": 0,
          "explanation": "後句『當場就告訴我錄取了』是極好的結果,故用 It couldn't have gone better.(不可能更好了=好得不能再好)。",
          "trap": "⚠ couldn't have gone better 雖含否定 couldn't,實為最高肯定(好到極點)。It could have been worse(本來可能更糟,還算可以)語氣太弱;I wish it had gone well 暗示沒成功,皆與『當場錄取』矛盾。"
        },
        {
          "stem": "A: 'Shall we take the seven o'clock train or the later one?' B: 'It's ___ to me. Either works for my schedule.'",
          "options": [
            "all of a sudden",
            "all the way",
            "all the same",
            "all at once"
          ],
          "answer": 2,
          "explanation": "It's all the same to me.(對我來說都一樣/沒差)呼應後句 Either works(哪個都行)。",
          "trap": "⚠ all the same 是慣用語『都一樣、無所謂』;all the way 是『一路、徹底』,all of a sudden / all at once 都是『突然』,皆不合語境。"
        },
        {
          "stem": "A: 'Do you think Tom will lend us his car for the trip?' B: 'Don't ___ it. He's very protective of that car.'",
          "options": [
            "count on",
            "look after",
            "give up",
            "put off"
          ],
          "answer": 0,
          "explanation": "count on(指望、依賴)+ Don't 表『別指望』,呼應後句『他很寶貝那台車』。",
          "trap": "⚠ count on=指望/依靠;look after=照顧,give up=放棄,put off=延期,皆無『指望某事發生』之意。注意此處 it 指『借車這件事』。"
        },
        {
          "stem": "Waiter: 'Here's your bill, sir.' Customer: 'Excuse me, I think there must be ___. We didn't order the dessert listed here.'",
          "options": [
            "a pleasure",
            "no doubt",
            "an order",
            "a mistake"
          ],
          "answer": 3,
          "explanation": "There must be a mistake.(一定是弄錯了)用來客氣指出帳單有誤,呼應『我們沒點這道甜點』。",
          "trap": "⚠ 此情境是禮貌地指出帳單錯誤,須用 a mistake;there's no doubt(毫無疑問)語氣與『質疑帳單』相反,a pleasure / an order 語意不符。"
        },
        {
          "stem": "A: 'I'm thinking of quitting school to start a business.' B: 'If I ___ you, I'd finish my studies first. You can always start later.'",
          "options": [
            "were",
            "was",
            "am",
            "had been"
          ],
          "answer": 0,
          "explanation": "與現在事實相反的假設『如果我是你』用 If I were you,主句配 I'd(=I would)。",
          "trap": "⚠ 表建議的『假如我是你』固定用 were(假設語氣),即使主詞是 I 也不用 was;主句用 would 對應,故選 were。"
        },
        {
          "stem": "A: 'Would you mind passing me the salt?' B: '___' (B then hands over the salt.)",
          "options": [
            "Yes, I would.",
            "Not at all.",
            "Never mind.",
            "I'd rather not."
          ],
          "answer": 1,
          "explanation": "Would you mind…? 答應(不介意去做)用 Not at all,且 B 隨後遞出鹽,證明是答應。",
          "trap": "⚠ Would you mind…? 答應要用否定(Not at all);Yes, I would 與 I'd rather not 都是拒絕,與『遞出鹽』的動作矛盾。本題考 Would you mind + 動名詞(請求做事),與既有題的 Do you mind if(請求許可)不同。"
        },
        {
          "stem": "A: 'My grandmother passed away last week.' B: '___ Please let me know if there's anything I can do.'",
          "options": [
            "It's a piece of cake.",
            "Congratulations!",
            "What a coincidence!",
            "I'm sorry to hear that."
          ],
          "answer": 3,
          "explanation": "聽到對方親人過世表達哀悼用 I'm sorry to hear that.(我很遺憾),再接『有需要儘管說』。",
          "trap": "⚠ 此處 sorry 不是道歉而是『遺憾、節哀』;Congratulations(恭喜)在喪事語境極不得體,What a coincidence(真巧)與 a piece of cake(輕而易舉)皆失禮。"
        },
        {
          "stem": "Sign at the museum: 'Visitors are kindly reminded to refrain from touching the exhibits.' This sign tells visitors that they ___.",
          "options": [
            "may take photos of the exhibits",
            "must not touch the exhibits",
            "should clean the exhibits",
            "are allowed to handle the exhibits"
          ],
          "answer": 1,
          "explanation": "refrain from touching=克制不要觸碰,等於『不可觸摸展品』(must not touch)。",
          "trap": "⚠ refrain from + V-ing 意為『避免、忍住不做』,等同禁止;選項 D『允許觸碰』正好相反，A、C 與標示內容無關。此為告示判讀題。"
        },
        {
          "stem": "A: 'I heard you finally got your driver's license. ___' B: 'Thanks! I was so relieved to pass on my third try.'",
          "options": [
            "What a shame!",
            "Good for you!",
            "Take it easy.",
            "Don't mention it."
          ],
          "answer": 1,
          "explanation": "為對方考到駕照道賀用 Good for you!(真替你高興/做得好),呼應 B 道謝。",
          "trap": "⚠ Good for you 是真誠祝賀;What a shame(真可惜)語氣相反,Take it easy(放輕鬆/別緊張)與 Don't mention it(不客氣)都答非所問。"
        },
        {
          "stem": "A: 'Could you turn down the music? I'm trying to study.' B: 'Oh, ___ I didn't realize it was that loud.'",
          "options": [
            "my pleasure.",
            "I'm afraid not.",
            "sorry about that.",
            "you're welcome."
          ],
          "answer": 2,
          "explanation": "對方因吵到而要求關小聲，B 道歉用 Sorry about that.(抱歉),並說沒意識到那麼大聲。",
          "trap": "⚠ 後句『沒發覺那麼大聲』是道歉理由，須選 sorry；I'm afraid not(恐怕不行)等於拒絕關小聲，與語境衝突；my pleasure / you're welcome 是回應道謝，用錯場合。"
        },
        {
          "stem": "A: 'This is the third time you've forgotten your homework this week!' B: '___ I'll make sure it never happens again.' A: 'See that it doesn't.'",
          "options": [
            "It won't take long.",
            "It won't happen again, I promise.",
            "It doesn't matter.",
            "It's up to you."
          ],
          "answer": 1,
          "explanation": "被責備後保證改進，用 It won't happen again, I promise.(我保證不會再犯),呼應後句『我會確保不再發生』及 A 的 See that it doesn't(你最好別)。",
          "trap": "⚠ 說話者是被責備的一方，應道歉並保證；It doesn't matter(沒關係)是安慰別人，立場相反；It's up to you(由你決定)、It won't take long(不會花太久)皆不合。"
        },
        {
          "stem": "A: 'Why didn't you tell me the meeting was cancelled? I drove all the way here for nothing!' B: 'I assumed someone else ___ you. I'm sorry for the mix-up.'",
          "options": [
            "has informed",
            "would inform",
            "had informed",
            "informs"
          ],
          "answer": 2,
          "explanation": "B『以為別人(在此之前)已通知過你』，是在過去某時點之前完成的動作，用過去完成式 had informed。",
          "trap": "⚠ 主句 assumed 為過去式，從屬子句表『更早之前已完成』須用過去完成式 had informed；has informed(現在完成)與時態主軸不符，would inform 指未來、informs 為現在，皆錯。"
        },
        {
          "stem": "A: 'Excuse me, do you know where I can find the nearest pharmacy?' B: 'Sorry, ___ I'm new to this area myself.'",
          "options": [
            "you can't miss it.",
            "I have no idea.",
            "go straight ahead.",
            "it's just around the corner."
          ],
          "answer": 1,
          "explanation": "B 解釋自己也是新來的(I'm new to this area)，所以不知道，用 I have no idea.(我也不清楚)。",
          "trap": "⚠ 後句『我自己也是新來的』是『不知道』的理由，須選 I have no idea；其餘三個都是『知道並指路』的回答，與 B 不熟此區矛盾。"
        },
        {
          "stem": "A: 'I'm not sure I can finish this report by Friday.' B: 'Take your time. ___ Quality matters more than speed here.'",
          "options": [
            "It's about time.",
            "Hurry up.",
            "There's no rush.",
            "You'd better be quick."
          ],
          "answer": 2,
          "explanation": "Take your time(慢慢來)+ There's no rush.(不急)+『品質比速度重要』，三者語氣一致。",
          "trap": "⚠ 整段都在叫對方別急，故選 There's no rush；Hurry up / You'd better be quick 是催促，It's about time(早該如此/終於)帶責備語氣，皆與『慢慢來』衝突。"
        },
        {
          "stem": "Phone call. A: 'Hello, may I speak to Mr. Lin?' B: 'I'm afraid he's not available right now. ___' A: 'Yes, please tell him David called.'",
          "options": [
            "Who's speaking?",
            "Would you like to leave a message?",
            "Speaking.",
            "You've got the wrong number."
          ],
          "answer": 1,
          "explanation": "林先生不在，B 詢問是否留言 Would you like to leave a message?，呼應 A 回『請告訴他 David 打過來』。",
          "trap": "⚠ A 回應內容是留言，故 B 須問是否留言；Speaking(我就是)用於本人接電話，與『他不在』矛盾；Who's speaking 是問來電者是誰，A 不會以留言內容回答。電話用語判讀題。"
        },
        {
          "stem": "A: 'You look exhausted. You've been working for ten hours straight.' B: 'I know, but I can't stop now. The deadline is ___.'",
          "options": [
            "out of the question",
            "around the clock",
            "on the house",
            "just around the corner"
          ],
          "answer": 3,
          "explanation": "deadline is just around the corner.(截止日近在眼前)解釋為何不能停下休息。",
          "trap": "⚠ just around the corner=迫在眉睫/即將到來(此處指時間，非地點);around the clock 是『日以繼夜』修飾動作而非 deadline，out of the question 是『不可能』，on the house 是『店家招待』，皆不合。"
        },
        {
          "stem": "A: 'I'd like a refund for this jacket. The zipper broke after one day.' B: 'I see. ___, but do you have the receipt with you?' A: 'Yes, here it is.'",
          "options": [
            "No problem at all",
            "I'm afraid we can't help you",
            "That's out of the question",
            "It's none of my business"
          ],
          "answer": 0,
          "explanation": "店員願意處理退款並接著問收據，用 No problem at all(沒問題),語氣配合後面 but(但須先確認收據)。",
          "trap": "⚠ 後面顧客順利出示收據、互動正向，店員應是同意處理；That's out of the question(門都沒有)與 I'm afraid we can't help 都是拒絕，It's none of my business(不關我的事)失禮，皆不合服務情境。"
        },
        {
          "stem": "A: 'Congratulations on winning first prize! You must be thrilled.' B: '___ I honestly didn't expect to win at all.'",
          "options": [
            "I can hardly believe it!",
            "I told you so.",
            "It's not my cup of tea.",
            "I couldn't care less."
          ],
          "answer": 0,
          "explanation": "得獎又『完全沒料到會贏』，用 I can hardly believe it!(我簡直不敢相信)表達驚喜。",
          "trap": "⚠ I can hardly believe it 是『難以置信(的驚喜)』;I couldn't care less(我一點都不在乎)與得獎興奮矛盾，not my cup of tea(不合我胃口)、I told you so(我早說吧)皆與『沒料到會贏』衝突。"
        },
        {
          "stem": "A: 'Why are you carrying an umbrella? It's perfectly sunny.' B: 'The forecast says it ___ later this afternoon, so I'd rather be safe than sorry.'",
          "options": [
            "rained",
            "has rained",
            "is going to rain",
            "rains"
          ],
          "answer": 2,
          "explanation": "氣象預報對未來的預測，且帶 later this afternoon，用 be going to rain；『有備無患』故帶傘。",
          "trap": "⚠ later this afternoon 指未來，須用未來式 is going to rain；rained / has rained 指過去或已完成，與帶傘防雨的未來情境矛盾；rains 為現在習慣，不合『稍晚』預測。"
        },
        {
          "stem": "A: 'I can't decide between the blue one and the red one. They both look great on you.' B: 'Why don't you get ___? They're on sale today, after all.'",
          "options": [
            "none",
            "neither",
            "either",
            "both"
          ],
          "answer": 3,
          "explanation": "兩件都好看又在打折，建議『兩件都買』用 both，呼應 after all(反正都特價)。",
          "trap": "⚠ 後句『反正今天都打折』暗示鼓勵全買，故選 both；either 是『兩者任一』未解決猶豫，neither/none 是『都不』與『兩件都好看』矛盾。"
        },
        {
          "stem": "A: You look pale. Are you feeling okay?\nB: Not really. I think I'm coming down with a cold.\nA: Oh no. ______ You should get some rest.\n請選出最適合填入空格的句子。",
          "options": [
            "Congratulations!",
            "That's a great idea.",
            "No problem at all.",
            "Take care of yourself."
          ],
          "answer": 3,
          "explanation": "B 說自己好像感冒了,A 回應時應表達關心,「好好照顧自己」最符合語境。其餘選項分別用於祝賀、贊同對方的提議、以及回應對方的請求或道謝,都與「安慰生病的人」不搭。"
        },
        {
          "stem": "在餐廳裡,服務生對顧客說:「Are you ready to order?」\n下列顧客的回應,哪一個最自然、最恰當?",
          "options": [
            "You're welcome.",
            "I'm fine, thanks.",
            "Here you are.",
            "Yes, I'll have the beef noodles, please."
          ],
          "answer": 3,
          "explanation": "服務生問「準備好點餐了嗎?」,顧客最自然的回應是說出想點的餐點,「我要牛肉麵,謝謝」直接回應點餐需求。回應道謝、問候近況、以及遞東西給對方的用語都不符合「點餐」情境。"
        },
        {
          "stem": "A: I'm sorry, but I can't make it to your birthday party tomorrow.\nB: ______ Maybe we can hang out another day.\n根據對話,B 想表達「沒關係、能理解」並提議改天,最適合的一句是?",
          "options": [
            "That's all right. Don't worry about it.",
            "You must be kidding me.",
            "It's none of your business.",
            "I couldn't agree more."
          ],
          "answer": 0,
          "explanation": "A 為無法出席道歉,B 隨後提議改天見面,語氣應是體諒的。「沒關係,別擔心」既接受道歉又銜接後面改天的提議。其餘選項語帶責怪、拒人於外、或表示完全同意,都與安慰、體諒的語氣不合。",
          "trap": "'That's all right' 在此不是『那是對的』,而是回應道歉時的『沒關係』;別被字面意思誤導。"
        },
        {
          "stem": "A: Excuse me, how can I get to the train station from here?\nB: Go straight for two blocks and turn left. It's next to the post office.\nA: ______\nB: You're welcome. Have a nice day!\n根據 B 最後的回應,A 空格處最可能說的是?",
          "options": [
            "I have no idea.",
            "What a pity!",
            "Thanks a lot for your help.",
            "Could you say that again?"
          ],
          "answer": 2,
          "explanation": "B 最後說「不客氣」(You're welcome),表示 A 先前是向他道謝,因此空格應為感謝用語「非常謝謝你的幫忙」。表示不知道、覺得可惜、或請對方再說一次,都無法引出『不客氣』這個回應。",
          "trap": "要用 B 的『You're welcome』倒推 A 說了什麼;關鍵在『不客氣』只用來回應『謝謝』,而非回應問路或請求重述。"
        }
      ]
    },
    {
      "id": "phrasalverbs",
      "name": "片語動詞 (Phrasal Verbs)",
      "week": "暑假 第1週",
      "notes": [
        {
          "h": "片語動詞的組成與語意",
          "points": [
            "片語動詞 = 動詞 + 介系詞/副詞,合起來產生與字面不同的新語意,例如 look after = 照顧、give up = 放棄、run out of = 用完。",
            "高頻必背組:turn on/off(打開/關閉)、put on/off(穿上/延期)、take off(脫下/起飛)、look for(尋找)、look after(照顧)、get on/off(上/下車)、find out(查出)。",
            "片語動詞常可改寫成一個較正式的單一動詞:find out = discover、put off = postpone、give up = quit、look into = investigate,閱讀與克漏字常考此種同義替換。",
            "同一個片語動詞可能有多重語意,須靠上下文判斷,例如 take off 可指『脫下』『(飛機)起飛』或『(商品)暢銷』。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"30\" width=\"70\" height=\"34\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"55\" y=\"52\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">look</text><text x=\"100\" y=\"52\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">+</text><rect x=\"115\" y=\"30\" width=\"70\" height=\"34\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"150\" y=\"52\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">after</text><text x=\"200\" y=\"52\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">→</text><rect x=\"218\" y=\"28\" width=\"120\" height=\"38\" rx=\"18\" fill=\"#f0a52e\" opacity=\"0.25\" stroke=\"#f0a52e\"/><text x=\"278\" y=\"52\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">照顧</text><text x=\"20\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">give up = 放棄</text><text x=\"20\" y=\"126\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">run out of = 用完</text><text x=\"20\" y=\"152\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">find out = discover</text><text x=\"20\" y=\"178\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">put off = postpone</text></svg>",
          "caption": "動詞加上介副詞會合成新語意,且常等於一個較正式的單一動詞。",
          "trap": "⚠ 別把片語動詞拆開逐字直譯:look after 不是『往後看』而是『照顧』;字面義與實際義常完全不同。"
        },
        {
          "h": "可分離與受詞位置",
          "points": [
            "可分離片語動詞:受詞為名詞時,可放中間或後面皆可,例如 turn on the light = turn the light on。",
            "受詞為代名詞(it/them/him…)時『必須』放在動詞與介副詞中間:turn it on(○),turn on it(✗)。",
            "不可分離片語動詞(動詞+介系詞型,如 look after、look for、get on):受詞一律放在整組後面,look after him(○),look him after(✗)。",
            "判斷訣竅:含副詞(on/off/up/down)的多半可分離;含介系詞(after/for/at/into)的多半不可分離。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"12\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">可分離</text><rect x=\"12\" y=\"42\" width=\"230\" height=\"30\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#5aa874\"/><text x=\"22\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">turn it on</text><text x=\"150\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">✔ 代名詞置中</text><rect x=\"12\" y=\"80\" width=\"230\" height=\"30\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"22\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">turn on it</text><text x=\"150\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">✘ 不可置後</text><text x=\"12\" y=\"138\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">不可分離</text><rect x=\"12\" y=\"150\" width=\"230\" height=\"30\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#5aa874\"/><text x=\"22\" y=\"170\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">look after him</text><text x=\"258\" y=\"170\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">✔</text></svg>",
          "caption": "可分離片語動詞遇代名詞必置中;不可分離片語動詞受詞一律置後。",
          "trap": "⚠ 最常錯在代名詞位置:可分離片語動詞遇 it/them 必須置中(turn it off),寫成 turn off it 即錯。"
        },
        {
          "h": "日常高頻片語動詞情境記憶",
          "points": [
            "把片語動詞放進生活情境記更牢:起床盥洗有 get up(起床)、wake up(醒來)、put on(穿上)、take off(脫下)。",
            "上下學交通有 get on/off(上/下公車、火車)、get in/out of(上/下小汽車)、pick up(接某人)、drop off(放某人下車)。",
            "做事處理有 fill in/out(填寫表格)、throw away(丟掉)、clean up(清理)、turn down(調小聲或拒絕)。"
          ],
          "formula": "動詞 + 介副詞 → 情境化片語(get on the bus / get in the car)",
          "trap": "搭公車和搭小汽車用的字不同:上下公車、火車用 get on/off the bus,但上下小汽車、計程車要用 get in/out of the car,別一律用 get on。"
        },
        {
          "h": "意思相近的片語動詞辨析",
          "points": [
            "look 系列易混:look for 是『尋找』的過程、find 是『找到』的結果、find out 是『查明、得知資訊』,例如 I looked for my keys and finally found them。",
            "turn 系列:turn on/off(開、關電器)、turn up/down(調大、調小聲音),其中 turn down 也指『拒絕邀請或提議』。",
            "give 與 take 系列:give up(放棄)、give back(歸還)、take up(開始從事一項嗜好)、take back(收回說過的話)。"
          ],
          "formula": "同動詞 + 不同介副詞 → 不同語意(turn on / turn up / turn down)",
          "trap": "look for 是『找的動作』,find 是『找到的結果』,不能混用:不能說 I found for my keys,要說 I looked for my keys 然後 found them;find out 是查明資訊,不能拿來說『找到實物』。"
        },
        {
          "h": "三字片語動詞 verb + adverb + preposition",
          "points": [
            "有些片語動詞由三個字組成(動詞加副詞加介系詞),受詞一律放在最後:run out of(用完,例如 We ran out of milk)、look forward to(期待)、get along with(和某人相處融洽)。",
            "look forward to 的 to 是介系詞,後面要接名詞或動名詞 V-ing:I look forward to seeing you,不是 to see you。",
            "其他常考:catch up with(趕上)、keep up with(跟上)、come up with(想出主意)、put up with(忍受)。"
          ],
          "formula": "動詞 + 副詞 + 介系詞 + 受詞(三字片語,受詞放最後)",
          "trap": "look forward to、be used to 裡的 to 是『介系詞』不是不定詞,後面要接 V-ing:『期待見到你』是 look forward to seeing you 不是 to see you;這是會考超高頻陷阱。"
        }
      ],
      "quiz": [
        {
          "stem": "After the fire alarm went off by mistake, the staff had to ___ the panicking guests and ___ them that there was no real danger.",
          "options": [
            "calm down / assure",
            "calm / down assure",
            "down calm / assure",
            "calm up / assure"
          ],
          "answer": 0,
          "explanation": "calm down = 使…冷靜下來,為可分離片語動詞,受詞 the guests 為名詞可置於 down 之後;assure them 為固定用法。語意上需先安撫驚慌的客人。",
          "trap": "⚠ calm down 是固定組合,不可拆成 calm...down 中間插別的字,也沒有 calm up;受詞為名詞時整組不必硬拆。"
        },
        {
          "stem": "The new smartphone ___ so fast that the factory ___ stock within a week.",
          "options": [
            "took off / ran out",
            "took on / ran out of",
            "took off / ran out of",
            "took off / run out of"
          ],
          "answer": 2,
          "explanation": "take off 在此指『(商品)暢銷、大受歡迎』;run out of + 受詞(stock)= 用完。主詞 factory 為單數第三人稱、句中為過去式 ran 正確。take on 是『承擔/雇用』不合語意。",
          "trap": "⚠ run out(用盡,不及物)後不接受詞,run out of(用完某物)後才接受詞;此處後有 stock,須用 ran out of。"
        },
        {
          "stem": "I couldn't ___ what she was saying because the loud music ___ her voice.",
          "options": [
            "make up / drowned out",
            "make out / dropped out",
            "work out / dropped out",
            "make out / drowned out"
          ],
          "answer": 3,
          "explanation": "make out = 聽清楚/辨識出;drown out = (聲音)蓋過、淹沒。make up 是『編造/化妝/和好』,drop out 是『退出/輟學』,皆不合語意。",
          "trap": "⚠ make out(聽辨清楚)與 make up(編造)語意截然不同;drown out(蓋過聲音)勿與 drop out(退出)混淆。"
        },
        {
          "stem": "Which sentence is grammatically correct?",
          "options": [
            "Please turn off it before you leave the room.",
            "Please turn it off before you leave the room.",
            "Please look him after while I'm away.",
            "Please look after carefully the baby."
          ],
          "answer": 1,
          "explanation": "turn off 為可分離片語動詞,代名詞 it 必須置於中間,故 turn it off 正確。turn off it(✗)。look after 不可分離,受詞須置後 look after him,故 look him after(✗);第四句副詞插在 after 與受詞間也不自然。",
          "trap": "⚠ 兩條規則同時考:可分離者代名詞置中(turn it off),不可分離者受詞置後(look after him);選項刻意各違反一條。"
        },
        {
          "stem": "The meeting was ___ until next Monday because the manager wanted more time to ___ the proposal.",
          "options": [
            "put off / look after",
            "put on / look into",
            "put off / look into",
            "called off / look into"
          ],
          "answer": 2,
          "explanation": "put off = 延期(= postpone),與『until next Monday』相符;look into = 調查/研究(提案)。put on 是『穿上』,called off 是『取消』(取消就不會 until next Monday),look after 是『照顧』,皆不合。",
          "trap": "⚠ put off(延期)與 called off(取消)都常出現在會議情境,但有 until next Monday 表延後到某日,只能是延期 put off。"
        },
        {
          "stem": "「他答應戒菸,卻一再食言。」Which English sentence best matches this meaning?",
          "options": [
            "He promised to take up smoking, but he broke his word again and again.",
            "He promised to give in smoking, but he broke his word again and again.",
            "He promised to give away smoking, but he broke his word again and again.",
            "He promised to give up smoking, but he broke his word again and again."
          ],
          "answer": 3,
          "explanation": "give up = 戒除/放棄(戒菸 give up smoking)。give in 是『屈服』,take up 是『開始從事(某嗜好)』語意相反,give away 是『贈送/洩漏』,皆不符『戒菸』。",
          "trap": "⚠ take up smoking 是『開始抽菸』,與『戒菸』完全相反;勿因 take up 也接 smoking 就誤選。"
        },
        {
          "stem": "Although the team ___ many difficulties, they never ___ their original goal.",
          "options": [
            "came across / gave up on",
            "came across / gave up",
            "came up / gave up on",
            "came across / gave away"
          ],
          "answer": 0,
          "explanation": "come across = 偶然遇到(困難);give up on + 受詞 = 對…放棄/不再抱期望,後接受詞 goal 須用 give up on(give up 後直接接抽象目標較不自然,且與介系詞片語語感不同)。come up 是『出現/被提及』。",
          "trap": "⚠ give up(放棄做某事)與 give up on sb./sth.(對某人某事不抱希望)用法不同;此處受詞為 goal,慣用 give up on。"
        },
        {
          "stem": "The detective spent weeks trying to ___ who had ___ the valuable painting.",
          "options": [
            "find out / made up with",
            "find out / made off with",
            "find out / made out with",
            "figure on / made off with"
          ],
          "answer": 1,
          "explanation": "find out = 查明;make off with = 偷走、捲款潛逃帶走(某物)。make up with 是『與…和好』,figure on 是『指望/預計』,make out with 是口語『與…親熱』,皆不合『偷畫』語意。",
          "trap": "⚠ make off with(偷走)易與 make up with(和好)、make out(理解/親熱)混淆,字尾介副詞一字之差語意天差地別。"
        },
        {
          "stem": "Read the dialogue. A: \"I'm exhausted from work.\" B: \"Why don't you ___ for a few days and ___ your energy?\"  Which best fills the blanks?",
          "options": [
            "take time on / build up",
            "take off time / build up",
            "take time off / break up",
            "take time off / build up"
          ],
          "answer": 3,
          "explanation": "take time off = 請假/休息一段時間,time 為名詞,慣用語序 take time off;build up = 累積/恢復(精力)。break up 是『分手/結束』不合。take off time 語序不自然。",
          "trap": "⚠ take time off 是固定語序(time 置中);build up energy(累積精力)勿選 break up(分手),情境是恢復不是結束。"
        },
        {
          "stem": "Which underlined phrasal verb can be replaced by \"tolerate\" without changing the meaning?",
          "options": [
            "I can't put up with his rude behavior any longer.",
            "I can't put on weight no matter what I eat.",
            "I can't put off the meeting any longer.",
            "I can't put away my old toys."
          ],
          "answer": 0,
          "explanation": "put up with = 忍受 = tolerate。put off = 延期、put on = 增加(體重)/穿上、put away = 收起來,皆與 tolerate 無關。",
          "trap": "⚠ put up with(忍受)是三字片語,勿與 put off/put on/put away 混淆;只有 put up with ≈ tolerate。"
        },
        {
          "stem": "The plane was about to ___, so the flight attendant asked everyone to ___ their seatbelts.",
          "options": [
            "take off / take off",
            "take off / fasten",
            "get off / fasten",
            "take off / put off"
          ],
          "answer": 1,
          "explanation": "take off(飛機)起飛;fasten one's seatbelt = 繫好安全帶。第二空若填 take off 變成『解開安全帶』語意矛盾;get off 是『下(車/機)』與『about to』起飛情境不符。",
          "trap": "⚠ 同一片語 take off 在不同位置語意不同:飛機 take off 是起飛,但 take off the seatbelt 是『解開』,第二空須用 fasten。"
        },
        {
          "stem": "After running for an hour, she had to ___ because she had completely ___.",
          "options": [
            "slow down / worn off",
            "slow up / worn out",
            "slow down / worn out",
            "break down / worn out"
          ],
          "answer": 2,
          "explanation": "slow down = 放慢速度;wear out = 使精疲力竭(此處 had worn out 表她已筋疲力盡)。wear off 是『(效果)逐漸消失』,slow up 較少用且不自然,break down 是『故障/崩潰』語意偏重。",
          "trap": "⚠ wear out(精疲力竭/磨損)與 wear off(藥效等逐漸消退)意義不同;跑步後人累用 worn out。"
        },
        {
          "stem": "The factory was forced to ___ production and eventually ___ hundreds of workers due to the economic crisis.",
          "options": [
            "cut off / lay off",
            "cut down on / lay out",
            "cut down on / lay off",
            "cut down on / take off"
          ],
          "answer": 2,
          "explanation": "cut down on = 減少(產量);lay off = 解雇/裁員。lay out 是『陳列/規劃』,cut off 是『切斷/中斷』語意過重,take off 不能用於『解雇人』。",
          "trap": "⚠ lay off(裁員)勿與 lay out(規劃/陳列)混淆;cut down on(減少)與 cut off(完全切斷)程度不同,減產用 cut down on。"
        },
        {
          "stem": "Which sentence uses the phrasal verb INCORRECTLY?",
          "options": [
            "Could you turn the radio down?",
            "Could you turn it down?",
            "Could you turn down the radio?",
            "Could you turn the radio it down?"
          ],
          "answer": 3,
          "explanation": "turn down 為可分離片語動詞:turn down the radio(○)、turn the radio down(○)、turn it down(○)。但 turn the radio it down(✗)同時放了名詞與代名詞且語序錯誤。",
          "trap": "⚠ 可分離片語動詞受詞只能出現一次:名詞可置中或置後、代名詞必置中,但不可同時塞名詞與代名詞。"
        },
        {
          "stem": "When you ___ a new word while reading, you should ___ it in a dictionary instead of guessing.",
          "options": [
            "come across / look after",
            "come across / look up",
            "run into / look up to",
            "come across / look up to"
          ],
          "answer": 1,
          "explanation": "come across = 偶然遇到(生字);look up = 查閱(字典)。look after 是『照顧』,look up to 是『敬仰』,run into 雖也指『偶遇』但搭配第二空 look up to(敬仰)不合語意。",
          "trap": "⚠ look up(查閱)與 look up to(敬仰)差一個 to 意義全變;查字典用 look up,不可選 look up to。"
        },
        {
          "stem": "The negotiations finally ___ after months of effort, and both sides ___ a fair agreement.",
          "options": [
            "fell through / failed to reach",
            "went through / came up with",
            "fell through / put up with",
            "fell through / came up with"
          ],
          "answer": 0,
          "explanation": "fall through = (計畫/談判)失敗、告吹;既然談判告吹,合邏輯的是『未能達成』failed to reach。若用 came up with(想出)則與『fell through』矛盾。went through 是『通過/經歷』語意相反。",
          "trap": "⚠ fall through(失敗告吹)與 go through(順利通過)意義相反;談判 fell through 後,後句須是『未達成協議』才合邏輯。"
        },
        {
          "stem": "「這個計畫聽起來不錯,但我們需要進一步研究細節。」 Choose the best translation.",
          "options": [
            "The plan sounds good, but we need to look after the details further.",
            "The plan sounds good, but we need to look up the details further.",
            "The plan sounds good, but we need to look into the details further.",
            "The plan sounds good, but we need to look out the details further."
          ],
          "answer": 2,
          "explanation": "look into = 深入研究/調查(細節)= investigate。look after 是『照顧』,look up 是『查閱(字詞)』,look out 是『小心』,皆不符『進一步研究細節』。",
          "trap": "⚠ look 系列片語動詞極多:into(調查)、after(照顧)、up(查閱)、out(小心),須依語意精準選 look into。"
        },
        {
          "stem": "He was offered a great job abroad, but family reasons made him ___ the offer in the end.",
          "options": [
            "turn on",
            "turn up",
            "turn over",
            "turn down"
          ],
          "answer": 3,
          "explanation": "turn down = 拒絕(提議/邀請)。turn up 是『出現/調大聲』,turn over 是『翻轉/移交』,turn on 是『打開』,皆不符『拒絕工作機會』。",
          "trap": "⚠ turn down 除了『調小聲』也是『拒絕』;勿因前面有 a great job 就誤以為接受,family reasons 暗示是婉拒。"
        },
        {
          "stem": "In which sentence does \"take on\" mean \"to employ / hire\"?",
          "options": [
            "The company plans to take on twenty new engineers next year.",
            "Her face took on a worried look.",
            "Don't take on more work than you can handle.",
            "He took on the champion in the final match."
          ],
          "answer": 0,
          "explanation": "take on 在第一句指『雇用』(take on engineers)。第二句是『承擔(工作)』、第三句是『呈現(神情)』、第四句是『與…對抗/較量』,均為 take on 的其他義項。",
          "trap": "⚠ take on 一字多義:雇用/承擔/呈現/對抗;須看受詞與情境,受詞為『人員+數量』時多指雇用。"
        },
        {
          "stem": "The old car kept ___ on the highway, so they finally decided to ___ a newer model.",
          "options": [
            "breaking up / go for",
            "breaking down / go for",
            "breaking down / go off",
            "breaking out / go for"
          ],
          "answer": 1,
          "explanation": "break down = (車/機器)故障;go for = 選擇/決定要。break up 是『分手/破碎』,break out 是『爆發』,go off 是『響起/離開/變質』,皆不合車輛情境。",
          "trap": "⚠ break down(故障)勿與 break up(分手)、break out(爆發)混淆;機器拋錨用 break down。"
        },
        {
          "stem": "Read the notice: \"Due to bad weather, today's outdoor concert has been ___. Tickets will be refunded.\" Which phrasal verb fits best?",
          "options": [
            "called up",
            "called on",
            "called off",
            "called for"
          ],
          "answer": 2,
          "explanation": "call off = 取消(活動)。退票(refunded)說明活動取消,故 called off。call on 是『拜訪/呼籲』,call up 是『打電話/召集』,call for 是『需要/要求』,皆不符告示語意。",
          "trap": "⚠ call off(取消)是告示常見用語;勿選 call for(需要)或 call up(打電話),由『退票』可確定是取消。"
        },
        {
          "stem": "Choose the sentence where the pronoun object is placed CORRECTLY.",
          "options": [
            "I'll pick up you at eight tomorrow morning.",
            "She ran into him friend at the mall.",
            "Please look it after while I am gone.",
            "I'll pick you up at eight tomorrow morning."
          ],
          "answer": 3,
          "explanation": "pick up 為可分離片語動詞,代名詞 you 必須置中:pick you up(○),pick up you(✗)。run into 不可分離,受詞置後但『into him friend』語法錯誤(應為 ran into his friend)。look after 不可分離,look after it(○),look it after(✗)。",
          "trap": "⚠ pick up 遇代名詞必置中(pick you up);look after 不可分離,代名詞也只能置後(look after it),兩規則相反易錯。"
        },
        {
          "stem": "After years of hard work, his small startup finally ___, and orders started to ___.",
          "options": [
            "paid off / pour in",
            "paid off / pour out",
            "paid back / pour in",
            "paid off / pour over"
          ],
          "answer": 0,
          "explanation": "pay off = (努力)得到回報、有所成;pour in = 大量湧入(訂單湧入)。pay back 是『償還/報復』,pour out 是『傾訴/湧出(向外)』,pour over 是『仔細研讀』,皆不合。",
          "trap": "⚠ pay off(努力有回報)勿與 pay back(償還)混淆;訂單『湧入』用 pour in(向內),非 pour out(向外)。"
        },
        {
          "stem": "The committee will ___ the new safety rules, and all employees are expected to ___ them strictly.",
          "options": [
            "draw on / abide by",
            "draw up / abide by",
            "draw up / put up with",
            "draw out / abide by"
          ],
          "answer": 1,
          "explanation": "draw up = 草擬/制定(規則);abide by = 遵守(規則)。draw on 是『利用/動用』,draw out 是『拉長/取出』,put up with 是『忍受』,皆不符『制定並遵守規則』。",
          "trap": "⚠ draw up(草擬制定)勿與 draw on(動用)、draw out(拉長)混淆;『遵守規則』用 abide by,非 put up with(忍受)。"
        },
        {
          "stem": "Which of the following sentences is the most natural and correct usage?",
          "options": [
            "We've run out milk, so I'll get some on my way home.",
            "We've run out of it milk, so I'll get some on my way home.",
            "We've run out of milk, so I'll get some on my way home.",
            "We've run milk out of, so I'll get some on my way home."
          ],
          "answer": 2,
          "explanation": "run out of + 受詞(名詞或代名詞,但不可同時)。run out of milk(○);run out milk(✗,漏 of);run out of it milk(✗,代名詞與名詞並列);run milk out of(✗,語序錯誤)。",
          "trap": "⚠ run out of 為固定三字片語不可拆;受詞不可同時放代名詞與名詞(it milk),of 也不可省略。"
        },
        {
          "stem": "Before entering the temple, visitors are asked to ___ their shoes and leave them at the door.",
          "options": [
            "put on",
            "turn off",
            "take on",
            "take off"
          ],
          "answer": 3,
          "explanation": "take off = 脫下(take off one's shoes 脫鞋),符合進廟前『把鞋脫下』的情境。put on 是『穿上』語意相反;turn off 是『關閉(電器)』;take on 是『承擔/雇用』,皆不合。"
        },
        {
          "stem": "The flight attendant reminded passengers to ___ their phones during takeoff and to ___ the landing card before arrival.",
          "options": [
            "turn on / fill out",
            "turn off / fill out",
            "turn off / find out",
            "turn down / fill out"
          ],
          "answer": 1,
          "explanation": "turn off = 關閉(起飛時手機須關機);fill out = 填寫(表格、入境卡)。turn on 是『打開』與起飛須關機矛盾;find out 是『查明資訊』不能用於『填表』;turn down 是『調小聲/拒絕』不合語意。",
          "trap": "⚠ turn off(關閉)勿看成 turn on(打開)或 turn down(調小/拒絕);填寫表格用 fill out/fill in,別誤選 find out(查明)。"
        },
        {
          "stem": "Which sentence uses the phrasal verb correctly?",
          "options": [
            "Could you fill in it before the deadline?",
            "She finally came up with a brilliant idea for the project.",
            "He simply can't put up his noisy neighbors with.",
            "The police looked the strange case into very carefully."
          ],
          "answer": 1,
          "explanation": "come up with(想出)為三字片語動詞,受詞須置於整組之後(came up with an idea),故此句正確。fill in 可分離,代名詞 it 必須置中,應為 fill it in;put up with 為三字片語不可拆散,語序應為 put up with his neighbors;look into 不可分離,受詞須置後,應為 looked into the case,不可拆成 looked the case into。",
          "trap": "⚠ 三字片語(come up with、put up with)整組不可拆、受詞放最後;可分離片語遇代名詞必置中(fill it in);最易一次錯在語序。"
        },
        {
          "stem": "After two weeks in bed with a high fever, Ben was finally able to ___ the flu and return to school.",
          "options": [
            "get over",
            "get off",
            "get through",
            "get away"
          ],
          "answer": 0,
          "explanation": "get over = 從(疾病、挫折)中康復、痊癒(get over the flu 從流感康復),符合『臥病兩週後終於病癒』。get off 是『下車/離開』;get through 是『度過難關/接通電話』;get away 是『逃離/走開/度假』,皆不合『病癒』語意。",
          "trap": "⚠ get over(從病痛或打擊中康復)才接 the flu;勿混 get through(熬過艱難時期)、get away(逃離),字尾介副詞一變語意全不同。"
        }
      ]
    },
    {
      "id": "confusingwords",
      "name": "易混淆字辨析 (Confusing Words)",
      "week": "暑假 第1週",
      "notes": [
        {
          "h": "音近與形近易混字",
          "points": [
            "音近字最常考拼字一字之差卻詞性不同:lose（丟失,動詞,/luːz/)對 loose（鬆的,形容詞,/luːs/);advice（建議,名詞,不可數)對 advise（勸告,動詞);要靠句中位置與詞性判斷。",
            "affect 是動詞「影響」(The weather affects my mood),effect 是名詞「效果/影響」(have an effect on),最常見的關鍵字是前面有 the/an 或 a 就要用名詞 effect。",
            "形近字靠拼字差一兩個字母區分:quite（相當)對 quiet（安靜);desert（沙漠/拋棄,重音在前/d-)對 dessert（甜點,雙 s,重音在後);看到雙 s 又指食物就是甜點。",
            "辨識步驟:先判斷句子需要的「詞性」(名詞/動詞/形容詞),再回頭挑拼字符合該詞性的字,而非只憑發音相近隨手填。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"16\" width=\"150\" height=\"44\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"24\" y=\"36\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">lose 丟失 v.</text><text x=\"24\" y=\"52\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">loose 鬆的 adj.</text><rect x=\"196\" y=\"16\" width=\"150\" height=\"44\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"206\" y=\"36\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">advice 建議 n.</text><text x=\"206\" y=\"52\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">advise 勸告 v.</text><rect x=\"14\" y=\"74\" width=\"150\" height=\"44\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"24\" y=\"94\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">affect 影響 v.</text><text x=\"24\" y=\"110\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">effect 效果 n.</text><rect x=\"196\" y=\"74\" width=\"150\" height=\"44\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"206\" y=\"94\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">desert 沙漠</text><text x=\"206\" y=\"110\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">dessert 甜點 ss</text><text x=\"180\" y=\"148\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#f0a52e\" text-anchor=\"middle\">先判詞性</text><path d=\"M150 160 L210 160\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"180\" y=\"176\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">再挑拼字</text></svg>",
          "caption": "音近(lose/loose、advice/advise、affect/effect)與形近(quite/quiet、desert/dessert)各成一組,先判詞性再選字。",
          "trap": "⚠ 不要只憑發音相近隨手填:advice/advise、effect/affect 詞性不同,句中該用名詞還是動詞才是判斷關鍵。"
        },
        {
          "h": "語意相對與用法不同",
          "points": [
            "方向相反的成對動詞最易錯:borrow 是「向別人借進」(I borrowed a book from him),lend 是「把東西借出給人」(He lent me a book);bring 是「帶來(朝說話者)」,take 是「帶去(離開說話者)」。",
            "中文都譯「說」但用法不同:tell 後直接接人(tell me a story、tell him the truth);say 接說話內容(say sorry、say that...);speak/talk 強調說話這個動作(speak English、talk to her),其中只有 tell 慣常後接「人+事」雙受詞。",
            "rise 是不及物動詞「(自己)上升」,後面不接受詞(The sun rises);raise 是及物動詞「舉起/提高」,必須接受詞(raise your hand、raise prices),看後面有沒有受詞就能判斷。",
            "lie(躺,不及物,lie-lay-lain)與 lay(放置,及物,lay-laid-laid)也是同類陷阱:及物要受詞用 lay,不及物無受詞用 lie。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"180\" cy=\"60\" r=\"24\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><text x=\"180\" y=\"64\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">我</text><path d=\"M150 60 L70 60\" stroke=\"#5aa874\" stroke-width=\"2\" marker-end=\"url(#a)\"/><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0 L6 3 L0 6\" fill=\"#5aa874\"/></marker><marker id=\"b\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0 L6 3 L0 6\" fill=\"#c9755c\"/></marker></defs><text x=\"68\" y=\"50\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">borrow 借進</text><path d=\"M210 60 L290 60\" stroke=\"#c9755c\" stroke-width=\"2\" marker-end=\"url(#b)\"/><text x=\"230\" y=\"50\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">lend 借出</text><text x=\"180\" y=\"112\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">bring 朝我 / take 離我</text><rect x=\"30\" y=\"130\" width=\"140\" height=\"44\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#5aa874\"/><text x=\"40\" y=\"150\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">rise 自升 無受詞</text><text x=\"40\" y=\"166\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">lie 躺 不及物</text><rect x=\"190\" y=\"130\" width=\"140\" height=\"44\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"200\" y=\"150\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">raise 舉 接受詞</text><text x=\"200\" y=\"166\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">lay 放 及物</text></svg>",
          "caption": "以說話者為中心:borrow/bring 朝向自己、lend/take 朝向外;rise/lie 無受詞,raise/lay 必接受詞。",
          "trap": "⚠ rise/raise、lie/lay 判斷關鍵是「後面有無受詞」;tell 才直接接人,say 接內容,別把 say me 寫成一句。"
        },
        {
          "h": "程度與數量易混字 too / very、another / other",
          "points": [
            "very 與 too 都表程度但語氣不同:very 是『很』(中性),例如 The coffee is very hot 表示很燙但還能喝;too 是『太…以致於不行』,例如 The coffee is too hot to drink 表示燙到不能喝。",
            "another 與 other 易混:another 接單數可數名詞(another cup),other 接複數或不可數名詞(other books、other water),the other 指『兩者中的另一個』。",
            "few/little 帶否定語氣(幾乎沒有),a few/a little 帶肯定語氣(有一些):I have few friends(幾乎沒朋友)相對於 I have a few friends(有幾個朋友)。"
          ],
          "formula": "too + 形容詞 + to V(太…而不能…)；another + 單數、other + 複數",
          "trap": "中文的『太』常被誤用:『這咖啡很好喝』別說成 too good(too 帶負面語氣『太…以致於不行』),要用 very good;『再給我一個』是 another one 不是 other one(other 後面要接複數)。"
        },
        {
          "h": "撇號陷阱:its/it's、their/there/they're",
          "points": [
            "its 是所有格『它的』(The dog wagged its tail),it's 是 it is 或 it has 的縮寫(It's raining);有沒有撇號意思完全不同。",
            "their(他們的)、there(那裡、There is)、they're(they are)三個發音相同但用法不同,要看句意分辨。",
            "your(你的)與 you're(you are)、whose(誰的)與 who's(who is)也是同類陷阱,寫作時最常拼錯。"
          ],
          "formula": "有撇號 = 縮寫(it's = it is)；無撇號 = 所有格(its = 它的)",
          "trap": "所有格 its、your、their、whose『絕對沒有撇號』;一加撇號就變成 be 動詞或助動詞的縮寫。會考克漏字常考 It's time to go(It is)與 The cat licked its paws 的區別,看句子缺不缺動詞來判斷。"
        },
        {
          "h": "中文同字、英文要分的字 cost / spend / take / pay",
          "points": [
            "這幾個字中文都和『花費』有關,但主詞與句型不同:spend 主詞是人,例如 I spent two hours on it 或 I spent 100 dollars on the book;cost 主詞是物,例如 The book cost me 100 dollars。",
            "take 常用 It takes 加人加時間加 to V 表『花時間』:It takes me ten minutes to walk to school。",
            "pay 是『付錢給人或付帳單』:I paid the driver、pay for the meal(為某事物付錢)。"
          ],
          "formula": "人 spend 金錢/時間 on 物；物 cost 人 金錢；It takes 人 時間 to V",
          "trap": "主詞用錯最常見:不能說 I cost 100 dollars(cost 主詞要是物),要說 I spent 100 dollars 或 The book cost me 100 dollars;spend 後面接時間時用 on 加名詞或 in V-ing,不能直接接原形動詞。"
        }
      ],
      "quiz": [
        {
          "stem": "My grandfather always gives me good ______, and he ______ me to study harder whenever I feel lazy.",
          "options": [
            "advice; advise",
            "advise; advises",
            "advice; advices",
            "advise; advice"
          ],
          "answer": 0,
          "explanation": "第一空前有 good 修飾且作 gives 的受詞,需名詞 advice(不可數,無複數);第二空 he ______ me 需動詞,用 advise。故選 advice; advise。",
          "trap": "⚠ advice 是不可數名詞沒有 advices;advise 才是動詞。兩字詞性不同,別憑發音互換。"
        },
        {
          "stem": "The heavy traffic will ______ our arrival time, but luckily the bad weather had little ______ on the flight.",
          "options": [
            "effect; affect",
            "affect; affect",
            "effect; effect",
            "affect; effect"
          ],
          "answer": 3,
          "explanation": "第一空 will ______ 需動詞「影響」用 affect;第二空 little ______ 前有 little(限定詞)需名詞,have an effect on 的 effect。故 affect; effect。",
          "trap": "⚠ affect 動詞、effect 名詞。看到前面有 a/an/little/the 等限定詞就要用名詞 effect。"
        },
        {
          "stem": "\"Could you ______ me your bike? I need to ______ one because mine is broken,\" Tom asked his neighbor.",
          "options": [
            "lend; borrow",
            "borrow; lend",
            "lend; lend",
            "borrow; borrow"
          ],
          "answer": 0,
          "explanation": "Tom 請鄰居「借出」腳踏車給他,主詞是出借方,用 lend(lend sb sth);第二句 Tom 自己要「借進」一台,用 borrow。故 lend; borrow。",
          "trap": "⚠ 方向相反:擁有者借出用 lend,需求者借入用 borrow。看主詞是給出方還是取得方。"
        },
        {
          "stem": "Please ______ still on the mat and ______ your hand if you have a question; don't ______ your bag on the clean desk.",
          "options": [
            "lay; rise; lie",
            "lie; raise; lay",
            "lie; rise; lay",
            "lay; raise; lie"
          ],
          "answer": 1,
          "explanation": "第一空 ______ still「保持躺著不動」不及物用 lie;第二空 ______ your hand 接受詞「舉手」用及物 raise;第三空 ______ your bag 接受詞「放置背包」用及物 lay。故 lie; raise; lay,選 B。",
          "trap": "⚠ lie 不及物(lie still 無受詞);raise 及物(舉手需受詞);lay 及物(放背包需受詞)。一題同時辨 lie/lay 與 rise/raise。"
        },
        {
          "stem": "It was ______ in the library, and the room was ______ large, so we could hear even a dropped pin.",
          "options": [
            "quite; quite",
            "quite; quiet",
            "quiet; quiet",
            "quiet; quite"
          ],
          "answer": 3,
          "explanation": "第一空 It was ______「很安靜」用形容詞 quiet;第二空 ______ large「相當大」用副詞 quite 修飾形容詞 large。故 quiet; quite。",
          "trap": "⚠ quiet 形容詞(安靜),quite 副詞(相當)。只差一個字母位置,靠語意與被修飾詞判斷。"
        },
        {
          "stem": "After crossing the dry ______, the travelers were so tired that no one wanted ______ after dinner.",
          "options": [
            "dessert; desert",
            "desert; desert",
            "desert; dessert",
            "dessert; dessert"
          ],
          "answer": 2,
          "explanation": "第一空 dry ______「乾燥的沙漠」用 desert(單 s,重音在前);第二空 after dinner wanted ______「甜點」用 dessert(雙 s)。故 desert; dessert。",
          "trap": "⚠ 甜點 dessert 有兩個 s;沙漠/拋棄 desert 一個 s。記「sweet stuff = double s」。"
        },
        {
          "stem": "Don't ______ your temper just because your shoelaces are ______; stay calm and tie them again.",
          "options": [
            "lose; loose",
            "loose; loose",
            "lose; lose",
            "loose; lose"
          ],
          "answer": 0,
          "explanation": "lose one's temper 是「發脾氣」固定用法,動詞 lose;第二空 shoelaces are ______「鞋帶鬆了」用形容詞 loose。故 lose; loose。",
          "trap": "⚠ lose 動詞(/luːz/,丟失/失去),loose 形容詞(/luːs/,鬆的)。lose your temper 不可寫 loose。"
        },
        {
          "stem": "Which sentence uses the underlined word CORRECTLY?",
          "options": [
            "She told that she was tired.",
            "He said me an interesting story.",
            "Can you speak me what happened?",
            "Please tell me the truth right now."
          ],
          "answer": 3,
          "explanation": "tell 後可直接接人再接事:tell me the truth 正確。(A)told 後不能直接接 that 子句而漏受詞,應 said that;(B)say 不接人,應 told me;(C)speak 不接人作此用,應 tell me。故選 D。",
          "trap": "⚠ tell 直接接人(tell sb sth),say 接內容不接人(say that),speak/talk 強調動作。四者中文都是「說」但用法不同。"
        },
        {
          "stem": "\"When you come to my house tonight, please ______ your sister with you; and after the party, ______ some cookies home with you,\" said the host.",
          "options": [
            "take; bring",
            "bring; take",
            "bring; bring",
            "take; take"
          ],
          "answer": 1,
          "explanation": "說話者(host)在「my house」是目的地,客人朝這裡移動「帶來妹妹」用 bring;派對後客人「帶餅乾回自己家」是離開說話者所在處,用 take。故 bring; take,選 B。",
          "trap": "⚠ 判斷基準是說話者(host)所在的 my house:朝這裡來用 bring,離開這裡回家用 take。同句兩方向相反。"
        },
        {
          "stem": "The price of oil has ______ sharply, which forced many companies to ______ the prices of their products.",
          "options": [
            "raised; rise",
            "risen; rise",
            "raised; raise",
            "risen; raise"
          ],
          "answer": 3,
          "explanation": "第一空 has ______ sharply 主詞是 price 自己上漲,不及物 rise 的完成式 risen;第二空 ______ the prices 接受詞「提高價格」用及物 raise。故 risen; raise。",
          "trap": "⚠ rise(rise-rose-risen)不及物無受詞;raise(raise-raised-raised)及物必接受詞。混用三態也是陷阱。"
        },
        {
          "stem": "Which sentence is grammatically CORRECT?",
          "options": [
            "The cat is laying on the warm floor.",
            "He laid the baby gently in the crib.",
            "I want to lay down for a while.",
            "The book lays on the table all day."
          ],
          "answer": 1,
          "explanation": "lay(放置,及物,lay-laid-laid):He laid the baby(接受詞 the baby)正確。(A)躺著無受詞應 lying;(C)躺下無受詞應 lie down;(D)書躺著無受詞應 lies。故選 B。",
          "trap": "⚠ lay 及物(放某物,需受詞),lie 不及物(自己躺,無受詞)。lay 的過去式 laid 與 lie 的過去式 lay 拼法重疊更易混。"
        },
        {
          "stem": "Reading good books can ______ your mind, and the ______ of regular reading on vocabulary is huge.",
          "options": [
            "effect; affect",
            "affect; affect",
            "affect; effect",
            "effect; effect"
          ],
          "answer": 2,
          "explanation": "第一空 can ______ your mind 需動詞「影響」用 affect;第二空 the ______ of...前有 the 需名詞,effect。故 affect; effect。",
          "trap": "⚠ 同一題兩字都考:can 後接原形動詞 affect;the 後接名詞 effect。詞性決定一切。"
        },
        {
          "stem": "Find the sentence where the underlined word is used WRONGLY.",
          "options": [
            "I borrowed some money from the bank.",
            "She lent her umbrella to a stranger.",
            "Could you borrow me your pen?",
            "He always borrows books from the library."
          ],
          "answer": 2,
          "explanation": "(C)borrow 是「借入」不能用「borrow me」表借給我,應為 lend me 或 Can I borrow your pen。其餘 A、B、D 用法正確。故錯誤者為 C。",
          "trap": "⚠ 「借我」要說 lend me,不是 borrow me。borrow 永遠是向外借「進」,主詞是取得方。"
        },
        {
          "stem": "We ______ a lot of fun at the party, and our teacher ______ a short speech before the games began.",
          "options": [
            "had; made",
            "made; had",
            "did; made",
            "had; did"
          ],
          "answer": 0,
          "explanation": "have fun 是固定搭配「玩得開心」用 had;make a speech「發表演說」固定搭配用 made。故 had; made。",
          "trap": "⚠ 雖非典型音形混淆,但 have/make/do 搭配固定:have fun、make a speech 不可互換,逐字中譯易錯。"
        },
        {
          "stem": "The doctor's ______ helped a lot; it greatly ______ how quickly the patient recovered.",
          "options": [
            "advice; affected",
            "advise; effected",
            "advice; effected",
            "advise; affected"
          ],
          "answer": 0,
          "explanation": "第一空 The doctor's ______ 需名詞 advice;第二空 it greatly ______ how...需動詞「影響」用 affected(affect 的過去式)。故 advice; affected。",
          "trap": "⚠ 兩組各一字:advice(名詞)非 advise;affected(動詞 affect)非 effected。effect 作動詞義為「實現」與此處「影響」不同。"
        },
        {
          "stem": "Choose the sentence with NO error.",
          "options": [
            "Please rise your hand to answer.",
            "The sun raises in the east every morning.",
            "They raised enough money for the trip.",
            "Prices have raised since last year."
          ],
          "answer": 2,
          "explanation": "(C)raised enough money 及物接受詞,正確。(A)rise 不及物不能接 your hand,應 raise;(B)太陽自升用 rises;(D)價格自漲用 have risen。故選 C。",
          "trap": "⚠ raise 一定要有受詞;沒有受詞(太陽、價格自己動)就用 rise。raised 與 risen 三態也要分清。"
        },
        {
          "stem": "It was so ______ in the museum that I could hear my own heartbeat, and the exhibition was ______ impressive.",
          "options": [
            "quite; quiet",
            "quite; quite",
            "quiet; quiet",
            "quiet; quite"
          ],
          "answer": 3,
          "explanation": "第一空 It was so ______「很安靜」需形容詞 quiet;第二空 ______ impressive「相當令人印象深刻」需副詞 quite 修飾形容詞。故 quiet; quite。",
          "trap": "⚠ so 後接形容詞 quiet;quite 作副詞修飾另一形容詞 impressive。注意 so quite 不通,應 so quiet。"
        },
        {
          "stem": "Which option correctly completes: \"She ______ me that she would ______ goodbye before leaving for the ______ where the camels lived.\"",
          "options": [
            "told; say; dessert",
            "said; tell; dessert",
            "told; say; desert",
            "said; say; desert"
          ],
          "answer": 2,
          "explanation": "第一空後接人 me 用 told;第二空 say goodbye 固定用 say;第三空 camels lived「駱駝住的地方=沙漠」desert。故 told; say; desert。",
          "trap": "⚠ 三重陷阱:接人用 told、say goodbye 固定用 say、駱駝住沙漠 desert(單 s)。dessert 是甜點。"
        },
        {
          "stem": "The strong wind didn't ______ the race much, but the heavy rain had a serious ______ on the runners' speed.",
          "options": [
            "effect; affect",
            "effect; effect",
            "affect; effect",
            "affect; affect"
          ],
          "answer": 2,
          "explanation": "第一空 didn't ______ 需原形動詞 affect;第二空 a serious ______ 前有 a 需名詞 effect(have an effect on)。故 affect; effect。",
          "trap": "⚠ didn't 後接原形動詞 affect;a serious 後接名詞 effect。have an effect on 是固定片語。"
        },
        {
          "stem": "Find the INCORRECT sentence.",
          "options": [
            "My shoelace came loose during the run.",
            "Don't loose your passport at the airport.",
            "I lost my keys somewhere in the park.",
            "These pants are too loose for me."
          ],
          "answer": 1,
          "explanation": "(B)「弄丟護照」需動詞 lose,不能用形容詞 loose,應 Don't lose your passport。其餘 A、C、D 中 loose/lost 用法皆正確。故 B 錯誤。",
          "trap": "⚠ lose 是動詞(丟失),loose 是形容詞(鬆的)。Don't lose 不可寫 Don't loose。"
        },
        {
          "stem": "\"Can you ______ me how to ______ this word in English?\" the student asked, hoping the teacher could ______ more slowly.",
          "options": [
            "say; tell; speak",
            "tell; say; speak",
            "tell; speak; say",
            "speak; tell; say"
          ],
          "answer": 1,
          "explanation": "第一空後接人 me 用 tell;第二空 how to ______ this word「怎麼說這個字」說出內容用 say;第三空 ______ more slowly「說(話)慢一點」強調說話動作不接受詞,用 speak。故 tell; say; speak,選 B。",
          "trap": "⚠ tell 接人(tell me)、say 接內容(say this word)、speak 強調動作不接受詞(speak slowly)。三者中譯都是「說」。"
        },
        {
          "stem": "The teacher gave us some helpful ______ and ______ us to read more, which positively ______ our writing.",
          "options": [
            "advise; adviced; effected",
            "advise; advised; effected",
            "advice; adviced; affected",
            "advice; advised; affected"
          ],
          "answer": 3,
          "explanation": "第一空 some helpful ______ 名詞 advice;第二空 ______ us to read 動詞 advise 過去式 advised;第三空 positively ______ our writing 動詞 affect 過去式 affected。故 advice; advised; affected。",
          "trap": "⚠ advise 過去式是 advised 不是 adviced;名詞 advice 與動詞 advise 拼字不同;影響用 affected 非 effected。"
        },
        {
          "stem": "Which sentence is CORRECT in both underlined words?",
          "options": [
            "He lay the book down and lie on the sofa.",
            "He laid the book down and lay on the sofa.",
            "He laid the book down and laid on the sofa.",
            "He lay the book down and laid on the sofa."
          ],
          "answer": 1,
          "explanation": "「放下書」及物用 lay 的過去式 laid;「躺到沙發上」不及物用 lie 的過去式 lay。故 laid the book; lay on the sofa,選 B。",
          "trap": "⚠ lay(放,及物)過去式 laid;lie(躺,不及物)過去式 lay。lie 的過去式 lay 與 lay 的原形同形,是最大陷阱。"
        },
        {
          "stem": "The smell of the freshly baked ______ made everyone forget how tired they were after crossing the ______.",
          "options": [
            "dessert; desert",
            "dessert; dessert",
            "desert; dessert",
            "desert; desert"
          ],
          "answer": 0,
          "explanation": "第一空 freshly baked ______「現烤的甜點」用 dessert(雙 s);第二空 after crossing the ______「穿越沙漠」用 desert。故 dessert; desert。",
          "trap": "⚠ 順序顛倒設陷阱:先甜點 dessert(雙 s)後沙漠 desert(單 s)。靠 baked/crossing 線索判斷,別只看位置。"
        },
        {
          "stem": "Read the dialogue: A: \"I think I will ______ the game if I stay this nervous.\" B: \"Relax! Just ______ your hand when you're ready and ______ me what you need.\" Choose the best set of words.",
          "options": [
            "loose; rise; say",
            "loose; raise; say",
            "lose; rise; tell",
            "lose; raise; tell"
          ],
          "answer": 3,
          "explanation": "第一空 will ______ the game「輸掉比賽」動詞 lose;第二空 ______ your hand「舉手」及物 raise;第三空 ______ me「告訴我」接人用 tell。故 lose; raise; tell。",
          "trap": "⚠ 三點整合:lose(動詞,非 loose)、raise(及物舉手,非 rise)、tell(接人,非 say)。情境題須同時判斷三組易混字。"
        },
        {
          "stem": "Could you ___ me your umbrella? Mine is broken and it's raining outside.",
          "options": [
            "lend",
            "borrow",
            "rent",
            "return"
          ],
          "answer": 0,
          "explanation": "「借出」的動詞為 lend,句型是 lend somebody something,把自己的東西借給別人;而 borrow 意為「向他人借入」,須用 borrow something from somebody。此處是把自己的傘借給對方使用,應選「借出」。租借(rent)與歸還(return)則不符句意。"
        },
        {
          "stem": "This math problem is much harder ___ the one we did yesterday, so we spent nearly an hour solving it.",
          "options": [
            "then",
            "that",
            "than",
            "as"
          ],
          "answer": 2,
          "explanation": "形容詞比較級 harder 之後要接表示比較對象的連接詞「比…更」,句意是「這題比昨天那題難得多」,故須用比較用的 than。表「然後、那時」的字並非比較用詞,不能放在比較級後面。",
          "trap": "比較用的 than 與表「然後/那時」的 then 只差一個字母,發音也相近,最容易一眼看錯而誤選。"
        },
        {
          "stem": "Staying up late for many days can seriously ___ your health, so doctors advise students to sleep before eleven.",
          "options": [
            "effect",
            "affect",
            "effort",
            "afford"
          ],
          "answer": 1,
          "explanation": "空格前有助動詞 can、後面接受詞 your health,需要一個動詞。「影響」當動詞時要用 affect;而 effect 通常是名詞「影響、效果」,不能放在這裡當動詞。effort(努力)與 afford(負擔得起)雖拼寫相近,但意思完全不同。",
          "trap": "affect(動詞:影響)與 effect(名詞:效果/影響)只差開頭字母,拼寫相近的 effort、afford 也會干擾判斷;關鍵是先看句子需要動詞還是名詞。"
        },
        {
          "stem": "I was so exhausted after the long trip that I ___ on the bed and fell asleep with my shoes still on.",
          "options": [
            "laid",
            "lied",
            "layed",
            "lay"
          ],
          "answer": 3,
          "explanation": "句意是「我躺在床上」。「躺」的動詞是 lie,不及物,不需受詞,其過去式剛好是 lay,所以描述過去躺下的動作要用 lay。laid 是 lay(放置,及物動詞)的過去式,後面必須接受詞;lied 是 lie(說謊)的過去式;layed 則不是正確的英文拼法。",
          "trap": "lie(躺)的過去式 lay 與原形動詞 lay(放置)長得一模一樣;lay(放置)的過去式其實是 laid,而「說謊」lie 的過去式是 lied,三組動詞極易混淆,需先判斷句意是「躺」還是「放置」。"
        }
      ]
    },
    {
      "id": "collocation",
      "name": "搭配詞與慣用語 (Collocations & Idioms)",
      "week": "暑假 第1週",
      "notes": [
        {
          "h": "高頻動詞搭配:make / do / take / have",
          "points": [
            "make 強調「製造、做出某種抽象結果或決定」:make a decision(做決定)、make a mistake(犯錯)、make noise(製造噪音)、make a plan(訂計畫)、make progress(進步)、make money(賺錢)。",
            "do 強調「從事、執行某項活動或工作」:do (one's) homework(寫功課)、do the dishes(洗碗)、do exercise(運動)、do one's best(盡力)、do the laundry(洗衣服)、do business(做生意)。",
            "take 與 have 各有固定圈子:take a photo(拍照)、take a break(休息)、take a shower(洗澡)、take medicine(吃藥);have a meeting(開會)、have fun(玩得開心)、have a try(試試)。",
            "搭配詞是「約定俗成」的固定組合,不能用同義詞硬換;母語人士憑語感記憶,學習者要把整組片語當「一個單位」背下來,例如 make a decision 不可說成 do a decision。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"14\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"50\" y=\"34\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">make</text><rect x=\"95\" y=\"14\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"135\" y=\"34\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">do</text><rect x=\"180\" y=\"14\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"220\" y=\"34\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">take</text><rect x=\"265\" y=\"14\" width=\"85\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"307\" y=\"34\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">have</text><text x=\"50\" y=\"66\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">decision</text><text x=\"50\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">mistake</text><text x=\"50\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">noise</text><text x=\"135\" y=\"66\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">homework</text><text x=\"135\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">dishes</text><text x=\"135\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">exercise</text><text x=\"220\" y=\"66\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">a photo</text><text x=\"220\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">a break</text><text x=\"220\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">a shower</text><text x=\"307\" y=\"66\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">a meeting</text><text x=\"307\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">fun</text><text x=\"307\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">a try</text><rect x=\"10\" y=\"150\" width=\"340\" height=\"28\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"180\" y=\"168\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">固定組合,不可互換</text></svg>",
          "caption": "make/do/take/have 各有固定搭配的名詞圈,需整組記憶。",
          "trap": "⚠ 最常見錯誤是把 make 與 do 互換:做決定是 make a decision(非 do),寫功課是 do homework(非 make)。記訣:make 偏「無中生有做出結果」,do 偏「執行既有活動」。"
        },
        {
          "h": "形容詞搭配與常見慣用語",
          "points": [
            "天氣形容詞有固定搭配:大雨是 heavy rain(不是 big rain)、強風是 strong wind(不是 big wind)、高溫是 high temperature、濃霧是 thick/heavy fog;形容程度大小要選對形容詞。",
            "慣用語(idioms)語意不能逐字翻譯:a piece of cake = 輕而易舉、break the ice = 打破僵局、once in a blue moon = 難得一次、under the weather = 身體不適、hit the books = 用功讀書。",
            "介系詞片語也是固定搭配:in trouble(有麻煩)、on time(準時)、in danger(有危險)、by accident(意外地)、in time(及時)、on purpose(故意地);介系詞用錯整個片語語意就變。",
            "遇到慣用語要從「整體比喻義」理解,切忌把每個單字拆開直譯;例如 It's a piece of cake 是「很簡單」,而非真的「一塊蛋糕」。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"16\" width=\"160\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"30\" y=\"36\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">heavy rain</text><text x=\"150\" y=\"36\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">✓</text><rect x=\"188\" y=\"16\" width=\"160\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"206\" y=\"36\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">big rain</text><text x=\"340\" y=\"36\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">✗</text><rect x=\"12\" y=\"58\" width=\"336\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#f0a52e\"/><text x=\"20\" y=\"78\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">a piece of cake = 輕而易舉</text><rect x=\"12\" y=\"96\" width=\"336\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#f0a52e\"/><text x=\"20\" y=\"116\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">break the ice = 打破僵局</text><rect x=\"12\" y=\"134\" width=\"336\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"20\" y=\"154\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">慣用語看整體比喻,別逐字翻</text></svg>",
          "caption": "形容詞搭配與慣用語都有固定形式,慣用語須取比喻義。",
          "trap": "⚠ 受中文影響易把「大雨」直譯成 big rain;英文用 heavy rain。慣用語更不能拆字直譯,a piece of cake 不是談蛋糕,而是「小事一樁」。"
        },
        {
          "h": "動詞或形容詞 + 介系詞的固定搭配",
          "points": [
            "很多動詞後面固定接某個介系詞,要整組記:listen to(聽)、look at(看)、wait for(等)、look for(找)、depend on(依賴)、agree with(同意某人)。",
            "有些動詞後接的介系詞會改變語意:look at(看)、look for(找)、look after(照顧)、look up(查),介系詞一換意思就不同。",
            "形容詞也有固定介系詞搭配:be good at(擅長)、be afraid of(害怕)、be interested in(對…有興趣)、be proud of(以…為傲)。"
          ],
          "formula": "listen to / wait for / be good at + 名詞(介系詞固定不可換)",
          "trap": "中式英文最常漏掉或用錯介系詞:『聽音樂』是 listen to music 不是 listen music;『等公車』是 wait for the bus 不是 wait the bus;『擅長英文』是 good at English 不是 good in English。"
        },
        {
          "h": "比喻性慣用語的整體理解",
          "points": [
            "慣用語(idioms)不能逐字翻譯,要記整句的比喻義:rain cats and dogs 是『下傾盆大雨』、let the cat out of the bag 是『不小心洩漏祕密』、be all ears 是『洗耳恭聽』。",
            "和身體部位有關的慣用語很常見:keep an eye on(看顧)、give someone a hand(幫忙)、pull someone's leg(開玩笑、捉弄某人)。",
            "遇到看似簡單卻語意怪的句子,先想是不是慣用語,從『整體比喻』而非單字字面去理解。"
          ],
          "formula": "慣用語 = 固定詞組 → 取整體比喻義,不可逐字直譯",
          "trap": "逐字翻譯一定出錯:pull my leg 不是『拉我的腿』而是『開我玩笑』;give me a hand 不是『給我一隻手』而是『幫我忙』;會考閱讀看到這類片語別照字面理解。"
        },
        {
          "h": "數量與頻率的常見搭配",
          "points": [
            "表頻率的副詞放在一般動詞前、be 動詞後:always、usually、often、sometimes、seldom、never,例如 He is always late、I usually get up early。",
            "問頻率用 How often,回答常用 once a week、twice a month、three times a year;注意 every day(兩個字)是『每天』,everyday(一個字)是形容詞『日常的』。",
            "表數量的固定搭配:a lot of(許多,可數不可數皆可)、plenty of(充足的)、a number of(若干,接複數名詞)。"
          ],
          "formula": "頻率副詞:be 動詞後、一般動詞前；once/twice/X times + a + 時間單位",
          "trap": "『兩次』口語慣用 twice 而不說 two times;『每天』是 every day(兩個字),everyday(一個字)是形容詞只能修飾名詞(my everyday life),所以不能說 I exercise everyday,要寫 I exercise every day。"
        }
      ],
      "quiz": [
        {
          "stem": "After hours of debate, the committee finally ______ a decision that satisfied both sides.",
          "options": [
            "had",
            "did",
            "took",
            "made"
          ],
          "answer": 3,
          "explanation": "「做決定」的固定搭配是 make a decision。雖然 take a decision 在英式英語偶見,但會考標準答案與美式用法為 make a decision;do/had a decision 皆非固定搭配。",
          "trap": "⚠ 受中文「做」決定影響易選 did。英文用 make,因 make 表「做出抽象結果」。"
        },
        {
          "stem": "The math problem was so easy for Tina that she described it as ______.",
          "options": [
            "a couch potato",
            "a hot potato",
            "a wet blanket",
            "a piece of cake"
          ],
          "answer": 3,
          "explanation": "a piece of cake = 輕而易舉,符合「題目很簡單」的語境。a hot potato 是棘手問題、a wet blanket 是掃興的人、a couch potato 是成天看電視的懶人,皆不合。",
          "trap": "⚠ 四個選項都含食物或物品,易誤判。要看語境是「容易」,只有 a piece of cake 表簡單。"
        },
        {
          "stem": "Because of the ______ rain last night, several roads near the river were flooded this morning.",
          "options": [
            "big",
            "heavy",
            "strong",
            "thick"
          ],
          "answer": 1,
          "explanation": "「大雨」的固定搭配是 heavy rain。big rain 不合英文習慣;strong 搭配 wind(強風);thick 搭配 fog(濃霧)。",
          "trap": "⚠ 中文「大」雨直譯成 big rain 是典型陷阱;rain 的程度用 heavy。"
        },
        {
          "stem": "I don't go to the movies often — only ______, maybe twice a year.",
          "options": [
            "on time",
            "in time",
            "once in a blue moon",
            "out of the blue"
          ],
          "answer": 2,
          "explanation": "once in a blue moon = 難得一次,呼應「一年只兩次」。on time 準時、in time 及時、out of the blue 突然地,皆不合語意。",
          "trap": "⚠ out of the blue 與 blue moon 都有 blue,易混。前者指「突然」,後者指「很少」。"
        },
        {
          "stem": "Choose the sentence in which the collocation is used CORRECTLY.",
          "options": [
            "She makes her homework every evening before dinner.",
            "He did a serious mistake on the final exam.",
            "They had a meeting to discuss the new project.",
            "We took a decision to cancel the trip."
          ],
          "answer": 2,
          "explanation": "have a meeting 為正確搭配。(A) 應為 do her homework;(B) 應為 made a mistake;(D) 標準用法為 made a decision。故只有 (C) 正確。",
          "trap": "⚠ 四句各藏一個搭配,需逐一檢查 make/do/take/have 是否配對正確,不能只看單句通順。"
        },
        {
          "stem": "The new student felt shy, so the teacher told a joke to ______ at the start of class.",
          "options": [
            "break the ice",
            "break a leg",
            "make ends meet",
            "pull one's leg"
          ],
          "answer": 0,
          "explanation": "break the ice = 打破僵局/緩和氣氛,符合「化解陌生害羞」的情境。break a leg 是祝好運、make ends meet 是收支平衡、pull one's leg 是開玩笑捉弄,皆不合。",
          "trap": "⚠ break a leg 與 break the ice 都用 break,易混;前者祝演出順利,後者破冰。"
        },
        {
          "stem": "My grandfather always reminds me to ______ my best, no matter how hard the task is.",
          "options": [
            "make",
            "give",
            "take",
            "do"
          ],
          "answer": 3,
          "explanation": "「盡力」的固定搭配是 do one's best。make/take/give 皆不與 one's best 搭配。",
          "trap": "⚠ 易誤選 make。one's best 前面固定用 do,不可用 make。"
        },
        {
          "stem": "Which underlined collocation is INCORRECT?",
          "options": [
            "The strong wind blew the umbrella away.",
            "Please take a photo of us in front of the temple.",
            "I need to make the dishes after dinner.",
            "We should have fun at the party tonight."
          ],
          "answer": 2,
          "explanation": "(C) 應為 do the dishes(洗碗),不是 make the dishes。其餘 strong wind、take a photo、have fun 皆為正確搭配。",
          "trap": "⚠ 題目問「錯誤」的,易看漏;the dishes 指洗碗用 do,make the dishes 反而像「做菜餚」語意不符。"
        },
        {
          "stem": "The factory has been losing money, and the manager is struggling to ______ to keep workers paid.",
          "options": [
            "take it easy",
            "make ends meet",
            "make up his mind",
            "break the news"
          ],
          "answer": 1,
          "explanation": "make ends meet = 使收支平衡/勉強維持生計,符合工廠虧錢、勉力支付薪水的語境。make up one's mind 是下定決心、take it easy 是放輕鬆、break the news 是宣布消息,皆不合。",
          "trap": "⚠ make up his mind 也以 make 開頭,但意思是下決心,與「維持收支」無關。"
        },
        {
          "stem": "It's raining hard outside; we'd better ______ a taxi instead of walking to the station.",
          "options": [
            "do",
            "have",
            "make",
            "take"
          ],
          "answer": 3,
          "explanation": "搭乘交通工具的固定搭配是 take a taxi/bus/train。do/make/have a taxi 皆非搭配。",
          "trap": "⚠ 交通工具用 take(take a bus/taxi/train),別受中文「坐/搭」誤導選其他動詞。"
        },
        {
          "stem": "Sorry I'm late — I missed the bus ______ and had to wait for the next one.",
          "options": [
            "by accident",
            "on time",
            "in danger",
            "on purpose"
          ],
          "answer": 0,
          "explanation": "依語意「我不是故意的」,by accident = 意外地/不小心地,最合理。on purpose 是故意、in danger 有危險、on time 準時,皆與「錯過公車」的歉意語境不符。",
          "trap": "⚠ on purpose(故意)與 by accident(意外)語意相反;道歉情境應選非故意的 by accident。"
        },
        {
          "stem": "Choose the option that best paraphrases: \"Finishing the report on time was a piece of cake for her.\"",
          "options": [
            "It was very difficult for her to finish the report on time.",
            "It was very easy for her to finish the report on time.",
            "She refused to finish the report on time.",
            "She forgot to finish the report on time."
          ],
          "answer": 1,
          "explanation": "a piece of cake = 輕而易舉,故全句意為「準時完成報告對她而言很簡單」,(B) 正確改寫。",
          "trap": "⚠ 慣用語不可直譯成「一塊蛋糕」;a piece of cake 表「非常容易」,選 difficult 就反了。"
        },
        {
          "stem": "The students were asked to ______ research on local history before writing their essays.",
          "options": [
            "make",
            "do",
            "take",
            "give"
          ],
          "answer": 1,
          "explanation": "do research 為固定搭配(進行研究)。make/take/give research 皆非標準搭配。",
          "trap": "⚠ 易誤選 make。research(研究)前用 do,表「從事、進行」這項活動。"
        },
        {
          "stem": "I haven't been feeling well today — I think I'm ______.",
          "options": [
            "in hot water",
            "over the moon",
            "on cloud nine",
            "under the weather"
          ],
          "answer": 3,
          "explanation": "under the weather = 身體不適,符合「今天不太舒服」。over the moon 與 on cloud nine 都是非常開心、in hot water 是惹上麻煩,皆不合。",
          "trap": "⚠ over the moon 與 on cloud nine 都表開心,語意與「不舒服」相反,別被選項數量誤導。"
        },
        {
          "stem": "Which sentence uses the verb–noun collocation CORRECTLY?",
          "options": [
            "Don't make so much noise; the baby is sleeping.",
            "She always does a lot of mistakes in spelling.",
            "Let's make our homework together at the library.",
            "He took a big progress in English this year."
          ],
          "answer": 0,
          "explanation": "make noise(製造噪音)正確。(B) 應為 makes mistakes;(C) 應為 do our homework;(D) 應為 made great progress(且程度用 great 非 big)。",
          "trap": "⚠ (D) 兩處錯:progress 用 make 且程度用 great;big progress 與 took 都不對,別只看單一字。"
        },
        {
          "stem": "Before the big exam, many students stay up late to ______.",
          "options": [
            "hit the road",
            "hit the ceiling",
            "hit the books",
            "hit the sack"
          ],
          "answer": 2,
          "explanation": "hit the books = 用功讀書,符合考前熬夜唸書的情境。hit the road 是上路出發、hit the sack 是睡覺、hit the ceiling 是大發雷霆,皆不合。",
          "trap": "⚠ 四個都用 hit,須看後面名詞;讀書是 books,hit the sack 反而是去睡覺。"
        },
        {
          "stem": "The two countries are trying to ______ peace after years of conflict.",
          "options": [
            "make",
            "take",
            "do",
            "have"
          ],
          "answer": 0,
          "explanation": "make peace = 講和/締造和平,為固定搭配。do/take/have peace 皆非標準搭配。",
          "trap": "⚠ peace 用 make(make peace),不可用 do;make 表「做出、締造」這個抽象結果。"
        },
        {
          "stem": "Read the dialogue and choose the best answer.\nA: Can you help me move this weekend?\nB: Sure, ______. I'm free on Saturday.",
          "options": [
            "it's a piece of cake",
            "you're pulling my leg",
            "it's not my cup of tea",
            "I'm in hot water"
          ],
          "answer": 0,
          "explanation": "B 答應幫忙且週六有空,it's a piece of cake(小事一樁)表「很樂意、不費事」最得體。you're pulling my leg 是「你在開玩笑」、not my cup of tea 是「不合我胃口」、in hot water 是「惹上麻煩」,皆不合語境。",
          "trap": "⚠ 須讀懂對話語境是「樂意幫忙」;not my cup of tea 反而是婉拒,與下一句「我週六有空」矛盾。"
        },
        {
          "stem": "Please be quiet in the library; you should not ______ noise here.",
          "options": [
            "do",
            "make",
            "take",
            "have"
          ],
          "answer": 1,
          "explanation": "make noise(製造噪音)為固定搭配。do/take/have noise 皆非搭配。",
          "trap": "⚠ noise 用 make,別受中文影響選 do;make 表「製造出」噪音這個結果。"
        },
        {
          "stem": "Which of the following collocations about weather is CORRECT?",
          "options": [
            "a big snow fell overnight",
            "a strong rain hit the city",
            "thick fog covered the valley",
            "a heavy wind broke the branches"
          ],
          "answer": 2,
          "explanation": "thick fog(濃霧)為正確搭配。(A) 應為 heavy snow;(B) 應為 heavy rain;(D) 應為 strong wind。",
          "trap": "⚠ 各天氣名詞搭配不同形容詞:rain/snow 用 heavy、wind 用 strong、fog 用 thick/heavy,不可混用。"
        },
        {
          "stem": "He promised to call me, but he never did. He was just ______.",
          "options": [
            "pulling my leg",
            "breaking the ice",
            "doing me a favor",
            "making my day"
          ],
          "answer": 0,
          "explanation": "依語意「他答應卻沒做到」,pull one's leg = 開玩笑/唬人,最合理。break the ice 是破冰、do someone a favor 是幫忙、make one's day 是讓人開心,皆不合。",
          "trap": "⚠ pull my leg 不是「拉我的腿」,而是「開玩笑、耍我」,須取慣用語比喻義。"
        },
        {
          "stem": "Students should ______ exercise regularly to stay healthy.",
          "options": [
            "make",
            "have",
            "do",
            "take"
          ],
          "answer": 2,
          "explanation": "do exercise(做運動)為固定搭配。亦可說 take exercise(英式),但會考標準與美式常用為 do exercise;make/have exercise 皆非搭配,在四選項中 do 為最佳答案。",
          "trap": "⚠ exercise 表「運動」時用 do;易誤選 make。注意 take exercise 雖存在,但本題正解圈定 do。"
        },
        {
          "stem": "The meeting starts at nine, so please arrive ______ to get a good seat.",
          "options": [
            "by time",
            "in time",
            "at time",
            "on time"
          ],
          "answer": 3,
          "explanation": "on time = 準時(剛好在規定時間),符合「九點開會請準時到」。in time 是「及時、來得及」,語意略不同;at time 與 by time 皆非標準片語。",
          "trap": "⚠ on time(準時)與 in time(及時)易混:強調「不遲到、按時」用 on time。"
        },
        {
          "stem": "Choose the sentence where the idiom matches its meaning \"to feel extremely happy.\"",
          "options": [
            "After hearing the good news, she was in hot water.",
            "After hearing the good news, she was over the moon.",
            "After hearing the good news, she was under the weather.",
            "After hearing the good news, she was a wet blanket."
          ],
          "answer": 1,
          "explanation": "over the moon = 極為開心,符合題目要求。under the weather 是身體不適、in hot water 是惹麻煩、a wet blanket 是掃興的人,皆與「開心」不符。",
          "trap": "⚠ 須先讀懂題目要的是「非常開心」,再配對慣用語;under the weather 等與開心無關。"
        },
        {
          "stem": "It took us a long time to ______ friends with the shy new classmate.",
          "options": [
            "do",
            "have",
            "take",
            "make"
          ],
          "answer": 3,
          "explanation": "make friends (with) = 交朋友,為固定搭配。do/take/have friends 皆非此搭配。",
          "trap": "⚠ 「交朋友」用 make friends,易誤選 have;make 表「建立、結交」這段關係。"
        },
        {
          "stem": "Don't worry about your mistake. Everyone makes mistakes sometimes, so just try to ______ it and keep going.",
          "options": [
            "put on",
            "take off",
            "get over",
            "look after"
          ],
          "answer": 2,
          "explanation": "「get over」是慣用語,意為「克服、走出(困難或不愉快)」,符合語境「別擔心錯誤、走出來繼續前進」。「put on」指穿上、「take off」指脫下或起飛、「look after」指照顧,皆不合句意。"
        },
        {
          "stem": "My grandfather is now eighty years old, but he is still ______ health and takes a walk every morning.",
          "options": [
            "in good",
            "on good",
            "at good",
            "with good"
          ],
          "answer": 0,
          "explanation": "固定搭配為「in good health」(身體健康),介系詞須用 in。其餘介系詞 on、at、with 與 health 搭配不合英語慣用法。",
          "trap": "health 前的介系詞是固定搭配 in,別因為前面有 still 就直覺選其他介系詞。"
        },
        {
          "stem": "When the fire alarm suddenly rang, the students didn't panic. They kept ______ and left the classroom in an orderly line.",
          "options": [
            "their words",
            "calm",
            "a straight face",
            "the ball rolling"
          ],
          "answer": 1,
          "explanation": "「keep calm」是慣用語,意為「保持冷靜」,符合火警時學生不驚慌、有秩序離開的語境。「keep one's word」指守信、「keep a straight face」指忍住不笑、「keep the ball rolling」指讓事情持續進行,均不合句意。",
          "trap": "keep 後面接的慣用語很多,要抓住『不驚慌』的線索選『保持冷靜』,別被同樣以 keep 開頭的片語混淆。"
        },
        {
          "stem": "Reading: \"Lisa was very nervous before the singing contest. Her best friend told her, 'Just do your best and don't think too much.' On the stage, Lisa suddenly forgot the words of the song. She felt her mind go blank. But instead of giving up, she took a deep breath and made up a few lines by herself. The audience thought it was part of the show and cheered loudly.\"\n\nWhat does the phrase \"her mind go blank\" most likely mean in the passage?",
          "options": [
            "She couldn't remember or think of anything for a moment.",
            "She suddenly came up with a brilliant new idea.",
            "She felt very relaxed and confident on the stage.",
            "She decided to quit the contest right away."
          ],
          "answer": 0,
          "explanation": "由上下文可知 Lisa 突然忘詞、之後才深呼吸自行編詞,「one's mind go blank」意為「腦筋一片空白、一時什麼都想不起來」。文中她並非想到新點子、並非放鬆自信,也沒有立刻退出,故其餘選項與情節矛盾。",
          "trap": "要根據『突然忘詞』這個線索推論片語意思,別被後面她自行編詞而誤以為是『想到好點子』。"
        }
      ]
    },
    {
      "id": "quantifiers",
      "name": "數量詞與不定代名詞 (Quantifiers & Indefinite Pronouns)",
      "week": "暑假 第2週",
      "notes": [
        {
          "h": "可數性與數量詞選用",
          "points": [
            "先判斷名詞可數或不可數:可數名詞(books, apples)用 many / (a) few / several;不可數名詞(water, money, information)用 much / (a) little;a lot of / lots of / some / plenty of 則兩者皆可。",
            "a few / a little 帶肯定語氣,表「有一些、足夠」;few / little(前面沒有 a)帶否定語氣,表「幾乎沒有」。例:He has a few friends(他有幾個朋友)vs He has few friends(他幾乎沒朋友)。",
            "some 通常用於肯定句,以及表「提供、邀請、請求」而期待肯定回答的疑問句(Would you like some tea?);any 用於否定句與一般疑問句(I don't have any money / Do you have any questions?)。",
            "注意常被誤判的不可數名詞:advice、information、furniture、homework、news、bread 皆不可數,故用 much / (a) little,且不加 -s。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"180\" y1=\"14\" x2=\"180\" y2=\"110\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"90\" y=\"32\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">可數 countable</text><text x=\"270\" y=\"32\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">不可數 uncount.</text><text x=\"90\" y=\"58\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">many books</text><text x=\"90\" y=\"80\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">a few / several</text><text x=\"270\" y=\"58\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">much water</text><text x=\"270\" y=\"80\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">a little money</text><rect x=\"60\" y=\"128\" width=\"110\" height=\"46\" fill=\"#eef4f2\" stroke=\"#5aa874\" stroke-width=\"1.5\"/><text x=\"115\" y=\"148\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">a few = 有一些</text><text x=\"115\" y=\"166\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\" text-anchor=\"middle\">肯定語氣</text><rect x=\"195\" y=\"128\" width=\"110\" height=\"46\" fill=\"#eef4f2\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><text x=\"250\" y=\"148\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">few = 幾乎沒</text><text x=\"250\" y=\"166\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\" text-anchor=\"middle\">否定語氣</text></svg>",
          "caption": "左可數右不可數;有無 a 決定 few/little 的肯定或否定語氣。",
          "trap": "⚠ 別把 advice、information、furniture、news 當可數而用 many 或加 -s;它們是不可數,要用 much / a little。"
        },
        {
          "h": "every/each/all 與動詞一致",
          "points": [
            "every / each + 單數名詞 + 單數動詞:Every student is here. / Each book has a number. 即使語意上指很多人,動詞仍用單數。",
            "all / both + 複數名詞 + 複數動詞:All the students are here. / Both answers are correct;but all + 不可數名詞時動詞用單數(All the water is gone)。",
            "either / neither 當主詞(指兩者之一)接單數動詞:Neither of them is right;both 則接複數。注意 none of 後接複數名詞時動詞單複數皆可,正式文體偏單數。",
            "複合不定代名詞 someone / anything / everybody / nobody 一律視為單數,接單數動詞:Everybody is happy. / Nothing was wrong;但其代名詞回指口語常用 they(Everyone brought their book)。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"26\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">主詞與動詞一致</text><text x=\"14\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">each student</text><text x=\"352\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"end\">is (單)</text><line x1=\"120\" y1=\"55\" x2=\"300\" y2=\"55\" stroke=\"#c9755c\" stroke-width=\"1.5\" marker-end=\"url(#a)\"/><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6\" fill=\"#c9755c\"/></marker></defs><text x=\"14\" y=\"96\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">all students</text><text x=\"352\" y=\"96\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"end\">are (複)</text><line x1=\"120\" y1=\"91\" x2=\"300\" y2=\"91\" stroke=\"#c9755c\" stroke-width=\"1.5\" marker-end=\"url(#a)\"/><circle cx=\"60\" cy=\"140\" r=\"30\" fill=\"#f3e7df\" stroke=\"#f0a52e\" stroke-width=\"2\"/><text x=\"60\" y=\"137\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">everybody</text><text x=\"60\" y=\"153\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\" text-anchor=\"middle\">單數</text><text x=\"110\" y=\"137\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">→ is happy</text><text x=\"110\" y=\"160\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">neither + 單數動詞</text></svg>",
          "caption": "each/every/複合不定代名詞接單數動詞;all/both 接複數動詞。",
          "trap": "⚠ Every / Each 後縱使指眾多人,動詞仍用單數;誤用 are 是會考常見陷阱(Everyone is,非 are)。"
        },
        {
          "h": "too many / too much / enough 的用法",
          "points": [
            "too many 修飾可數複數、too much 修飾不可數,都表示『太多(含負面)』,例如 too many cars、too much sugar。",
            "enough 當形容詞時放名詞前,表示『足夠的』,例如 enough money、enough chairs。",
            "enough 當副詞時放形容詞或副詞後,例如 old enough、fast enough,句型 old enough to + 原形動詞。"
          ],
          "formula": "形容詞/副詞 + enough + to V",
          "trap": "enough 修飾名詞放前面(enough time),修飾形容詞放後面(good enough);順序顛倒是常見錯誤,不可說 enough good。"
        },
        {
          "h": "another / other / the other(s) 的區別",
          "points": [
            "another 後接單數可數名詞,表示『另一個(不特定)』,例如 I want another cup of tea.",
            "the other 表示『兩者中的另一個(特定)』,例如 One is red, the other is blue.;the others 表示『其餘全部』。",
            "other 後接複數名詞或不可數,表示『其他的(不特定)』,例如 some students... other students...;others 單獨用代替 other + 複數名詞。"
          ],
          "formula": "another + 單數;the other(特定一個);others = other + 複數",
          "trap": "another 後只能接單數,不可說 another books;『兩個中的另一個』要用 the other,加 the 表特指,不可用 another。"
        },
        {
          "h": "all / both / none 的否定與部分否定",
          "points": [
            "both 指『兩者都』配複數動詞,例如 Both of them are right.;否定『兩者都不』要用 neither,例如 Neither of them is right.",
            "all 指『三者以上全部』,否定『全部都不』用 none,例如 None of the students passed.",
            "not all 是『部分否定』,表示『並非全部』,例如 Not all birds can fly.(有些會有些不會)。"
          ],
          "trap": "兩者都不要用 neither 不是 both not;not all 是『不是全都』(部分否定),別誤解成『全都不是』,後者要用 none。"
        }
      ],
      "quiz": [
        {
          "stem": "There is ____ traffic on the road today, so we arrived much later than we had expected.",
          "options": [
            "so many",
            "a number of",
            "few",
            "a great deal of"
          ],
          "answer": 3,
          "explanation": "traffic 為不可數名詞,只能搭配表「大量」的不可數量詞 a great deal of。many / a number of / few 都只接可數複數名詞。",
          "trap": "⚠ traffic 看似可指很多車,但它是不可數名詞,不能用 many 或 a number of。"
        },
        {
          "stem": "\"Did you make any friends at the summer camp?\" \"Yes, I made ____. In fact, two of them still write to me every week.\"",
          "options": [
            "a few",
            "few",
            "little",
            "much"
          ],
          "answer": 0,
          "explanation": "後句說「其中兩個還每週寫信」,語氣肯定且 friends 可數,故用 a few(有一些)。few 為否定語氣(幾乎沒有),與下文矛盾;little/much 接不可數名詞。",
          "trap": "⚠ a few 與 few 拼字僅差一個 a,卻分屬肯定與否定;由後文「still write to me」判斷應為肯定的 a few。"
        },
        {
          "stem": "____ of the two proposals is perfect, but we have to choose one before Friday.",
          "options": [
            "Both",
            "None",
            "Neither",
            "Either"
          ],
          "answer": 2,
          "explanation": "指「兩者之中沒有一個」用 Neither + 單數動詞 is,與 the two 相符。None 用於三者以上;Both 接複數動詞 are;Either 表「兩者任一」語意不合(後文有 but 轉折表都不完美)。",
          "trap": "⚠ 兩者皆否定用 Neither,三者以上才用 None;且 Neither 接單數動詞 is。"
        },
        {
          "stem": "The teacher reminded us that every student ____ responsible for keeping the lab clean, even if only one of them uses it.",
          "options": [
            "are",
            "is",
            "have been",
            "were"
          ],
          "answer": 1,
          "explanation": "every + 單數名詞 student 為單數主詞,接單數動詞 is。雖語意指全班學生,文法上仍視為單數。",
          "trap": "⚠ every student 語意上人很多,但 every 一律接單數動詞,誤選 are/were 是典型錯誤。"
        },
        {
          "stem": "I asked the clerk for some information about the tour, but she gave me ____ that I still don't know when it starts.",
          "options": [
            "a few",
            "so few",
            "too many",
            "so little"
          ],
          "answer": 3,
          "explanation": "information 不可數,且後文「我還是不知道何時開始」表示資訊少到幾乎沒有,用否定語氣的 so little。few 與 many 接可數名詞;a few 為肯定語氣不合句意。",
          "trap": "⚠ information 不可數,排除 few/many;again 由「still don't know」確認需否定語氣的 so little。"
        },
        {
          "stem": "Would you like ____ more coffee? There's still ____ left in the pot.",
          "options": [
            "some / a few",
            "any / a little",
            "some / a little",
            "any / a few"
          ],
          "answer": 2,
          "explanation": "第一格為提供(offer),雖是疑問句仍用 some;第二格 coffee 不可數且語氣肯定(還有一些),用 a little。",
          "trap": "⚠ 表提供或邀請的疑問句用 some 而非 any;coffee 不可數須用 a little 而非 a few。"
        },
        {
          "stem": "____ of the students has to hand in his or her own report; group submissions are not allowed.",
          "options": [
            "Each",
            "Both",
            "All",
            "Several"
          ],
          "answer": 0,
          "explanation": "後文 has 為單數動詞且 his or her own 指個別,故主詞用 Each(每一個)+ of the students + 單數動詞。All/Both/Several 都接複數動詞 have。",
          "trap": "⚠ 由單數動詞 has 與 his or her own 反推,主詞須為表「個別」的 Each。"
        },
        {
          "stem": "We bought ____ furniture for the new office, but the rooms still look empty.",
          "options": [
            "several",
            "a few pieces of",
            "a few",
            "many"
          ],
          "answer": 1,
          "explanation": "furniture 不可數,要表「幾件家具」須用單位詞 pieces of:a few pieces of furniture。其餘三者皆直接接複數名詞,不能用於不可數的 furniture。",
          "trap": "⚠ furniture 不可數,計數時必須借助 pieces of,不能說 a few furnitures 或 several furniture。"
        },
        {
          "stem": "Hardly ____ of the volunteers showed up, so the clean-up event had to be canceled.",
          "options": [
            "any",
            "no",
            "none",
            "some"
          ],
          "answer": 0,
          "explanation": "hardly 本身含否定意味,後接 any 構成「幾乎沒有」(hardly any of the volunteers)。some 用於肯定;none/no 與 hardly 連用造成雙重否定,不合語法。",
          "trap": "⚠ hardly 已是否定詞,需搭配 any,不能再用 none/no 造成雙重否定。"
        },
        {
          "stem": "____ has its advantages and disadvantages, so you should compare the two job offers carefully.",
          "options": [
            "Every",
            "All",
            "None",
            "Each"
          ],
          "answer": 3,
          "explanation": "句中 has its 為單數,且 the two job offers 指兩者,用代名詞性質的 Each(每一個,可單獨當主詞)。Every 須接名詞不可獨立當主詞;All/None 接複數動詞 have。",
          "trap": "⚠ Each 可單獨當主詞,Every 後面一定要接名詞;由 has its 與「兩者」判斷選 Each。"
        },
        {
          "stem": "There isn't ____ milk in the fridge, but there are still ____ eggs for breakfast.",
          "options": [
            "many / a few",
            "much / a few",
            "much / a little",
            "many / a little"
          ],
          "answer": 1,
          "explanation": "milk 不可數,否定句用 much;eggs 可數且語氣肯定(還有一些)用 a few。",
          "trap": "⚠ 要同時判斷兩個名詞的可數性:milk 用 much、eggs 用 a few,任一搭錯即錯。"
        },
        {
          "stem": "Of all the books on the shelf, ____ is worth reading; they are all outdated.",
          "options": [
            "any",
            "neither",
            "none",
            "either"
          ],
          "answer": 2,
          "explanation": "all the books 指三者以上,且後文「都過時了」表全部否定,用 none + 單數動詞 is。neither/either 只用於兩者;any 不能單獨當肯定主詞表「沒有一個」。",
          "trap": "⚠ 三者以上的「沒有一個」用 none,不可用只限兩者的 neither。"
        },
        {
          "stem": "\"Is there anything I can do to help?\" \"No, ____. Everything is already under control.\"",
          "options": [
            "something",
            "anything",
            "nothing",
            "none"
          ],
          "answer": 2,
          "explanation": "簡短回答「不,沒有什麼」用否定複合代名詞 nothing(= there is nothing)。回答中已含 No 但仍須以 nothing 表達否定內容;anything 須與否定詞連用,單獨回答不成立。",
          "trap": "⚠ 簡短回答時直接用 nothing 表否定,不能單獨用 anything(anything 須配否定詞)。"
        },
        {
          "stem": "____ of the twins speaks Japanese fluently, though they both studied it for years.",
          "options": [
            "Neither",
            "None",
            "Either",
            "Both"
          ],
          "answer": 0,
          "explanation": "twins 指兩人,搭配單數動詞 speaks 表「兩者都不」,用 Neither。Both 接複數動詞 speak;Either 語意為「任一」與後文 though 轉折不合;None 用於三者以上。",
          "trap": "⚠ 由單數動詞 speaks 與「twins(兩人)」反推為 Neither,而非接複數動詞的 Both。"
        },
        {
          "stem": "The survey shows that ____ people are willing to pay more for eco-friendly products than ten years ago.",
          "options": [
            "much more",
            "many more",
            "a great deal of more",
            "the most"
          ],
          "answer": 1,
          "explanation": "people 可數複數,「更多的人」用 many more(many 的比較表達)。much more 修飾不可數名詞;a great deal of more 語法不通;the most 為最高級不合 than 比較句。",
          "trap": "⚠ more 前的修飾語要看名詞可數性:可數的 people 用 many more,不可數才用 much more。"
        },
        {
          "stem": "Almost ____ in the class has finished the project; only Tom and Mary are still working on theirs.",
          "options": [
            "the others",
            "everybody else",
            "all",
            "everyone"
          ],
          "answer": 3,
          "explanation": "後文用單數動詞 has,且 almost 修飾不定代名詞,主詞用 everyone(視為單數)。all 接複數 have;everybody else 語意排除說話者不合;the others 接複數動詞。",
          "trap": "⚠ 由單數動詞 has 判斷主詞為單數的 everyone,而非接複數動詞的 all。"
        },
        {
          "stem": "I have read ____ of his novels, but I still haven't read the one that made him famous.",
          "options": [
            "most",
            "almost",
            "the most of",
            "almost all"
          ],
          "answer": 0,
          "explanation": "「他大部分的小說」用 most of his novels。almost 為副詞不能直接接名詞片語;the most of 用法錯誤;almost all 須直接接名詞或代名詞(almost all his novels)而非 almost all of 此處未含 of,故 most 最正確。",
          "trap": "⚠ almost 是副詞不能接 of his novels;表「大部分」直接用 most of。"
        },
        {
          "stem": "Neither of the answers ____ correct, so the whole class had to do the exercise again.",
          "options": [
            "are",
            "were",
            "is",
            "have been"
          ],
          "answer": 2,
          "explanation": "Neither of + 複數名詞當主詞時,正式語法接單數動詞 is(neither 指「兩者之中沒有一個」,本質單數)。",
          "trap": "⚠ 受 the answers 干擾易選 are/were;但主詞核心是 Neither,正式文體用單數 is。"
        },
        {
          "stem": "There were so ____ applicants for the position that the manager could hardly choose, even after reading every résumé.",
          "options": [
            "much",
            "a lot",
            "little",
            "many"
          ],
          "answer": 3,
          "explanation": "applicants 為可數複數,搭配 so many 表「如此多」。much/little 接不可數;a lot 不與 so 連用且不能直接接名詞修飾結構 so ... that。",
          "trap": "⚠ so ... that 句型中,可數名詞 applicants 用 so many,不可用 so much 或 so a lot。"
        },
        {
          "stem": "____ student who passes the final exam will receive a certificate, and ____ certificates will be mailed next week.",
          "options": [
            "Every / each",
            "Every / all the",
            "All / each",
            "Each / every"
          ],
          "answer": 1,
          "explanation": "第一格修飾單數名詞 student 用 Every(+單數動詞 passes);第二格修飾複數名詞 certificates 用 all the。Each/Every 後須接單數名詞,不能配複數 certificates。",
          "trap": "⚠ every/each 只接單數名詞;第二格名詞 certificates 為複數,故須用 all the。"
        },
        {
          "stem": "We have plenty of time, so there's no need to rush; ____ of us has to leave before noon anyway.",
          "options": [
            "either",
            "any",
            "neither",
            "none"
          ],
          "answer": 3,
          "explanation": "us 指三人以上(we),表「我們沒有一個人」用 none + 單數動詞 has。neither/either 限兩者;any 不能單獨當主詞表否定。",
          "trap": "⚠ 群體三人以上的「沒有一個」用 none,且接單數動詞 has,而非 neither。"
        },
        {
          "stem": "The report contains ____ useful data, but unfortunately ____ of it is up to date.",
          "options": [
            "a lot of / none",
            "much / little",
            "a few / none",
            "many / few"
          ],
          "answer": 0,
          "explanation": "data 在此作不可數,「許多」用 a lot of;後句「沒有一個是最新的」指其中沒有,用 none of it。much/little 雖也接不可數,但 'much useful data ... little of it' 中 little 表「很少」語意尚可,惟 none 與「unfortunately」全盤否定更貼切,且 a lot of 比 much 更自然;故最佳為 a lot of / none。",
          "trap": "⚠ data 視為不可數排除 many/a few;由 unfortunately 與全盤否定語氣,後格選 none of it 最貼切。"
        },
        {
          "stem": "____ of the three candidates is qualified enough; the committee decided to reopen the application.",
          "options": [
            "Neither",
            "None",
            "Either",
            "Both"
          ],
          "answer": 1,
          "explanation": "three candidates 為三者,表「沒有一個」用 None + 單數動詞 is。Neither/Either/Both 都只用於兩者。",
          "trap": "⚠ 出現 three 即排除只限兩者的 Neither/Either/Both,須用 None。"
        },
        {
          "stem": "She gave me ____ advice on how to write my essay, and ____ of her suggestions turned out to be really helpful.",
          "options": [
            "many / many",
            "a few / a few",
            "some / a few",
            "much / a number"
          ],
          "answer": 2,
          "explanation": "advice 不可數,「一些建議」用 some;suggestions 可數複數,「其中幾個」用 a few。many/a few 接可數,不能修飾 advice;a number 後須接 of 且修飾可數。",
          "trap": "⚠ advice 不可數(用 some)但 suggestions 可數(用 a few);兩個名詞可數性不同,別一律用同一量詞。"
        },
        {
          "stem": "By the end of the day, ____ of the cake was gone, and ____ of the children admitted eating it.",
          "options": [
            "most / none",
            "much / none",
            "many / no one",
            "most / no one"
          ],
          "answer": 3,
          "explanation": "cake 在此不可數(整塊蛋糕)用 most of;children 可數複數指人,「沒有人承認」用 no one(指人,接單數動詞 admitted)。none of 雖也可指人,但 no one 更直接表「無人」;much 修飾不可數但與 'of the cake' 語意不如 most 自然。",
          "trap": "⚠ 兩格分別判斷:不可數 cake 用 most of;指人的「沒有人」用 no one,別誤用接不可數的 much/none 組合。"
        },
        {
          "stem": "There isn't ___ orange juice left in the bottle. Let's buy some at the supermarket.",
          "options": [
            "many",
            "a few",
            "several",
            "much"
          ],
          "answer": 3,
          "explanation": "orange juice(柳橙汁)是不可數名詞,在否定句中表示「多」要用 much;many、a few、several 都只能搭配可數名詞的複數形,與不可數名詞連用並不正確。"
        },
        {
          "stem": "A: Is there anything to eat in the kitchen? B: No, there's ___ at all. I'll order a pizza later.",
          "options": [
            "nothing",
            "something",
            "anything",
            "everything"
          ],
          "answer": 0,
          "explanation": "回答「什麼都沒有」時,用本身就含否定意味的 nothing(等於 there isn't anything)。anything 必須和否定詞 not 連用,但此處動詞是肯定的 there's,不能單獨接 anything;something、everything 語意與「一點都沒有」相反。",
          "trap": "疑問句常用 anything,但回答若動詞為肯定(there's)且要表達「毫無」,須用含否定意味的 nothing,而非 anything。"
        },
        {
          "stem": "The new bakery opened last week, but it has ___ regular customers so far, so the owner is thinking about closing it down.",
          "options": [
            "a few",
            "little",
            "few",
            "a little"
          ],
          "answer": 2,
          "explanation": "customers 是可數名詞複數,先排除只修飾不可數名詞的 little 與 a little。老闆考慮歇業,表示生意不好、客人「幾乎沒有」,語意偏否定,應用 few;a few 是肯定的「有一些」,與後文語境矛盾。",
          "trap": "few 與 a few 只差一個 a:a few 是肯定「有一些」,few 是否定「幾乎沒有」;又 customers 可數,不可誤用 little / a little。"
        },
        {
          "stem": "A: Would you like ___ more soup? B: Yes, please. It tastes really good.",
          "options": [
            "any",
            "some",
            "much",
            "few"
          ],
          "answer": 1,
          "explanation": "雖是疑問句,但這是「主動提供、邀請」對方,習慣用 some;soup 是不可數名詞,故 few 不適用,而 much more soup 的說法不自然;any 多用於一般詢問或否定句,不符合此邀請語氣。",
          "trap": "疑問句一般用 any,但表「提供、邀請」並期待肯定回答時要用 some;同時 soup 不可數,可排除 few。"
        }
      ]
    },
    {
      "id": "causative",
      "name": "使役與感官動詞 (Causative & Perception Verbs)",
      "week": "暑假 第3週",
      "notes": [
        {
          "h": "使役動詞 make/let/have/get",
          "points": [
            "make、let、have 三個使役動詞後面接「受詞 + 原形動詞(不加 to)」:make him go(使他去)、let me know(讓我知道)、have her wait(叫她等)。",
            "get 雖也表「使、叫」,但接法不同,要用「get + 受詞 + to V」:get him to go(說服/設法讓他去),這個 to 不可省略。",
            "help 兩種都對:help + 受詞 + (to) V,help me (to) move 皆通;但日常與會考多半省略 to 寫成 help me move。",
            "受詞與後面動作是「被動」關係時,使役動詞後改用過去分詞(p.p.):have the car repaired(請人把車修好)、get my hair cut(去剪頭髮)。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"12\" y=\"26\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">使役動詞接法對照</text><rect x=\"12\" y=\"40\" width=\"160\" height=\"56\" rx=\"6\" fill=\"#eef4f2\"/><text x=\"20\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">make him go</text><text x=\"20\" y=\"84\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">原形 ✓</text><rect x=\"188\" y=\"40\" width=\"160\" height=\"56\" rx=\"6\" fill=\"#eef4f2\"/><text x=\"196\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">make him to go</text><text x=\"196\" y=\"84\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">加 to ✗</text><rect x=\"12\" y=\"108\" width=\"160\" height=\"56\" rx=\"6\" fill=\"#eef4f2\"/><text x=\"20\" y=\"130\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">get him to go</text><text x=\"20\" y=\"152\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">需加 to ✓</text><rect x=\"188\" y=\"108\" width=\"160\" height=\"56\" rx=\"6\" fill=\"#eef4f2\"/><text x=\"196\" y=\"130\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">have it done</text><text x=\"196\" y=\"152\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">被動用 p.p.</text></svg>",
          "caption": "make/let/have 接原形,get 要加 to,受詞被動則用過去分詞。",
          "trap": "⚠ 最常錯把 get 也接原形(誤:get him go),其實 get 一定要 to;另一陷阱是受詞被動時仍用原形(誤:have the car repair)。"
        },
        {
          "h": "感官動詞 see/hear/watch/feel",
          "points": [
            "感官動詞 see、hear、watch、feel、notice、listen to 後接「受詞 + 原形」表示看到/聽到動作的「全程、完整發生」:I saw him cross the road(看他整個過完馬路)。",
            "同樣感官動詞後接「受詞 + Ving」則強調動作「正在進行、只看到片段」:I saw him crossing the road(看到他正在過馬路那一瞬間)。",
            "受詞與動作是被動關係時,感官動詞後用過去分詞(p.p.):I heard my name called(我聽到我的名字被叫到)。",
            "原形與 Ving 的選擇取決於語意:看到全程選原形、強調進行中選 Ving,兩者文法上多半都對,要靠情境判斷。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"12\" y=\"26\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">原形 vs Ving</text><line x1=\"20\" y1=\"70\" x2=\"340\" y2=\"70\" stroke=\"#3a342e\" stroke-width=\"2\"/><circle cx=\"20\" cy=\"70\" r=\"4\" fill=\"#5aa874\"/><circle cx=\"340\" cy=\"70\" r=\"4\" fill=\"#5aa874\"/><text x=\"20\" y=\"56\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">起</text><text x=\"320\" y=\"56\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">終</text><text x=\"100\" y=\"92\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">saw him cross</text><text x=\"110\" y=\"108\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">全程→原形</text><path d=\"M20 140 q15 -12 30 0 q15 12 30 0 q15 -12 30 0\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"110\" y=\"145\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">saw him crossing</text><text x=\"120\" y=\"161\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">進行中→Ving</text></svg>",
          "caption": "看到整段動作用原形,強調正在進行用 Ving,被動則用 p.p.。",
          "trap": "⚠ 易把感官動詞後的動詞加 to(誤:saw him to cross);感官動詞與使役動詞一樣,主動受詞補語都「不加 to」。"
        },
        {
          "h": "have sth done:請別人做(對比親手做)",
          "points": [
            "have + 物 + p.p. 表『請或找人把某事做好』,動作不是自己做:I had my bike repaired(我把腳踏車送修,不是自己修)。",
            "對比 I repaired my bike(自己修)與 I had my bike repaired(請人修),意思不同。",
            "get + 物 + p.p. 意思相同,語氣較口語:I got my hair cut yesterday(昨天去剪了頭髮)。"
          ],
          "formula": "have / get + 物(受詞) + p.p.(請人做某事)",
          "trap": "別把『請人做』寫成原形:錯 I had my bike repair,因為車是『被修』,要用過去分詞 repaired;這結構表示動作由別人完成,不是自己動手。"
        },
        {
          "h": "help 的特殊用法:to 可省略",
          "points": [
            "help 後接『受詞 + (to) V』,中間的 to 可有可無:She helped me (to) carry the box(幫我搬箱子)。",
            "help 也可不接受詞,直接接(to)原形動詞:This app helps (to) improve your English。",
            "日常與會考多半省略 to,寫成 help me move、help cook dinner 最自然。"
          ],
          "formula": "help (+ 受詞) + (to) + 原形 V",
          "trap": "help 後不接 V-ing:錯 help me carrying the box,要用 help me carry 或 help me to carry;to 可省略,但不能改成 -ing。"
        },
        {
          "h": "make 的被動:to 要還原",
          "points": [
            "主動時 make 後接原形:The teacher made us clean the room(老師叫我們打掃)。",
            "但改成被動後,原本省略的 to 必須補回:We were made to clean the room(我們被要求打掃)。",
            "感官動詞被動也一樣要還原 to:He was seen to enter the building(有人看到他進入大樓)。"
          ],
          "formula": "主動 make + 受詞 + 原形 V → 被動 be made to + 原形 V",
          "trap": "make 主動接原形(make us go),一旦變被動就要加 to:錯 We were made clean,正確 We were made to clean;這是會考易錯的『被動還原 to』考點。"
        }
      ],
      "quiz": [
        {
          "stem": "My parents never let me ____ out late, and they also make me ____ home before nine every night.",
          "options": [
            "to stay / come",
            "stay / to come",
            "staying / to come",
            "stay / come"
          ],
          "answer": 3,
          "explanation": "let 與 make 都是使役動詞,後接受詞 + 原形動詞,故兩格皆用原形:let me stay、make me come。",
          "trap": "⚠ 第二個動作雖然語意上「之後才回家」,但 make 後仍須接原形,不可因時間先後而加 to 或用其他形式。"
        },
        {
          "stem": "The coach couldn't ____ the lazy players ____ harder, so he had to change his training plan.",
          "options": [
            "make / to practice",
            "have / practicing",
            "get / to practice",
            "let / practiced"
          ],
          "answer": 2,
          "explanation": "get + 受詞 + to V 表「設法使某人做」,get the players to practice 正確且語意通順(無法使懶散球員更努力練習)。",
          "trap": "⚠ make/have 後接原形而非 to V,故 (A) 錯;get 是唯一需要 to 的使役動詞,別與 make 混用。"
        },
        {
          "stem": "After the storm, Mr. Lin had the broken windows ____ and got the fallen tree ____ away by a worker.",
          "options": [
            "repair / take",
            "to repair / taken",
            "repairing / taking",
            "repaired / taken"
          ],
          "answer": 3,
          "explanation": "窗戶被修、樹被移走皆為被動,have/get + 受詞 + p.p.,故用 repaired 與 taken。",
          "trap": "⚠ 受詞(windows, tree)是動作的承受者,須用過去分詞;若用原形(repair/take)會誤成主動,語意變成窗戶自己去修。"
        },
        {
          "stem": "Which sentence is grammatically CORRECT?",
          "options": [
            "I had him to fix my computer yesterday.",
            "She made the children to clean the room.",
            "We helped the old man cross the street.",
            "They let me to borrow their car."
          ],
          "answer": 2,
          "explanation": "help + 受詞 + (to) V,help the old man cross 省略 to 完全正確。其餘 had/made/let 後皆不可加 to。",
          "trap": "⚠ (A)(B)(D) 都多加了 to;唯有 help 允許帶或不帶 to,其他使役動詞一律接原形。"
        },
        {
          "stem": "Listen! Can you hear someone ____ the piano upstairs? I think it's the new neighbor practicing now.",
          "options": [
            "to playing",
            "to play",
            "played",
            "play"
          ],
          "answer": 3,
          "explanation": "hear 為感官動詞,後接受詞 + 原形(聽到完整動作)或 Ving(進行中);選項中僅 play 合文法,且 someone 為主動發出聲音,用原形。",
          "trap": "⚠ 雖然句尾 practicing now 暗示進行中,但選項沒有 playing,只有原形 play 正確;to play 與 to playing 皆錯。"
        },
        {
          "stem": "I clearly saw the thief ____ into the shop and then ____ the cashier's drawer; the whole thing took only ten seconds.",
          "options": [
            "breaking / opening",
            "break / open",
            "to break / to open",
            "broke / opened"
          ],
          "answer": 1,
          "explanation": "see + 受詞 + 原形表「看到動作全程」,句尾「整件事只花十秒」強調完整過程,兩格皆用原形 break、open。",
          "trap": "⚠ 「whole thing / only ten seconds」是看到全程的線索,故選原形而非強調進行的 Ving;感官動詞後也不可加 to。"
        },
        {
          "stem": "____, please. I don't want to ____ you ____ all the heavy boxes by yourself.",
          "options": [
            "Help me let / make / carried",
            "Let me help me / let / carrying",
            "Make me help / let / to carry",
            "Let me help / have / carry"
          ],
          "answer": 3,
          "explanation": "Let me help(讓我幫忙)祈使句;have you carry「叫你搬」,have 後接原形 carry,語意「不想叫你自己搬」通順。",
          "trap": "⚠ 須同時判斷三個動詞:let/help 接原形、have 也接原形;若任何一處加 to 或用 Ving/p.p. 皆錯。"
        },
        {
          "stem": "The strict teacher had every student ____ the essay again because she found their names ____ at the top.",
          "options": [
            "rewriting / wrote",
            "to rewrite / writing",
            "rewrite / not written",
            "rewrite / writing"
          ],
          "answer": 2,
          "explanation": "have + 學生(主動)+ 原形 rewrite;found their names(被動,名字「被寫」)+ p.p.,且語意為「沒寫上」,not written 正確。",
          "trap": "⚠ 兩處主被動相反:學生主動重寫用原形,名字被寫用 p.p.;再加否定 not 表示她發現名字「沒」寫在最上面。"
        },
        {
          "stem": "Choose the sentence with the SAME meaning as: 'I watched the firefighters put out the fire completely.'",
          "options": [
            "I watched the firefighters putting out the fire when I left.",
            "I watched the firefighters from the start until the fire was out.",
            "I watched the firefighters to put out the fire.",
            "I watched the fire put out the firefighters."
          ],
          "answer": 1,
          "explanation": "watch + 受詞 + 原形(put out)表「看完滅火全程」,(B) 強調從頭看到火完全熄滅,語意相同。",
          "trap": "⚠ (A) 用 putting out 表只看到進行中片段,與原句「completely 全程」不符;原形 vs Ving 的差別正是全程 vs 片段。"
        },
        {
          "stem": "Mom won't ____ us ____ video games until we ____ her ____ the dishes.",
          "options": [
            "make / to play / let / to wash",
            "let / play / help / wash",
            "have / playing / get / wash",
            "let / to play / help / washing"
          ],
          "answer": 1,
          "explanation": "let us play(讓我們玩,原形);help her wash(幫她洗,help 接原形)。語意:洗完碗前不准玩。",
          "trap": "⚠ let 與 help 後都接原形;切勿因 until 子句而把後段動詞加 to 或改 Ving,使役/協助動詞補語一律原形。"
        },
        {
          "stem": "When the magician ____ a rabbit ____ from the empty hat, all the children ____ with surprise.",
          "options": [
            "made / appear / jumped",
            "made / appearing / jumping",
            "let / to appear / jump",
            "had / appear / were jumped"
          ],
          "answer": 0,
          "explanation": "make + 兔子(主動出現)+ 原形 appear;children jumped(過去式主要動詞)正確。整句:魔術師讓兔子出現,孩子們驚得跳起來。",
          "trap": "⚠ 此題混入主要動詞時態:children 後需要過去式動詞 jumped,而非分詞;同時 make 補語用原形 appear,不可加 to 或用 Ving。"
        },
        {
          "stem": "Which underlined part is WRONG? 'My sister got the tailor (A)make her a dress, but the shop (B)had it (C)delivered to the wrong house, which (D)made her angry.'",
          "options": [
            "(A) make",
            "(B) had",
            "(C) delivered",
            "(D) made"
          ],
          "answer": 0,
          "explanation": "got + 受詞 + to V,故應為 got the tailor TO make,(A) 漏 to 為錯;(B) had it delivered、(D) made her angry 皆正確。",
          "trap": "⚠ get 是唯一需 to 的使役動詞;這裡是 get the tailor to make,別被前後正確的 have/make 干擾而忽略 get 的特殊性。"
        },
        {
          "stem": "I felt the ground ____ and heard windows ____ during the earthquake; it was the scariest moment of my life.",
          "options": [
            "to shake / to break",
            "shook / broke",
            "shaken / broken",
            "shaking / breaking"
          ],
          "answer": 3,
          "explanation": "feel/hear 為感官動詞,強調當下「正在發生、持續進行」用 Ving:felt the ground shaking、heard windows breaking。",
          "trap": "⚠ 地震當下是動態進行的感受,選 Ving 比原形更貼切;原形強調全程,但搖晃/碎裂是進行中的片段感受,故用 Ving。"
        },
        {
          "stem": "The manager ____ the new employee ____ overtime, but he couldn't ____ her ____ to stay late.",
          "options": [
            "let / work / make / agreeing",
            "made / to work / get / agree",
            "had / work / get / to agree",
            "let / working / have / agreed"
          ],
          "answer": 2,
          "explanation": "had her work(叫她加班,have 接原形 work);get + 受詞 + to V,故 get her to agree 正確。整句:經理叫新員工加班,卻無法讓她答應留下。",
          "trap": "⚠ 兩處結構不同:have 接原形 work、get 接 to V(to agree);若把 get 也接原形(get her agree)即錯,get 是唯一需 to 的使役動詞。"
        },
        {
          "stem": "Choose the BEST rewrite of: 'The boss asked the workers to finish the report. He didn't do it himself.' (using a causative verb)",
          "options": [
            "The boss had the workers finish the report.",
            "The boss had the workers to finish the report.",
            "The boss had finished the report by the workers.",
            "The boss let the workers finished the report."
          ],
          "answer": 0,
          "explanation": "have + 受詞 + 原形表「使/叫某人做」,had the workers finish 正確改寫,語意等同老闆叫工人完成報告。",
          "trap": "⚠ (B) have 後加 to 錯;(D) let 後用過去式 finished 錯;使役動詞 have/let 補語都是原形。"
        },
        {
          "stem": "Look at this notice: 'Customers may have their bikes ____ here for free, but must get a staff member ____ the lock first.'",
          "options": [
            "parking / check",
            "parked / to check",
            "park / checking",
            "to park / checked"
          ],
          "answer": 1,
          "explanation": "have their bikes parked(腳踏車被停放,被動 p.p.);get a staff member to check(get 接 to V,店員主動檢查)。",
          "trap": "⚠ 同句兩種結構:bikes 是被動用 p.p.,staff member 是主動用 to V;主被動 + get 需 to 三點都要顧到。"
        },
        {
          "stem": "I noticed someone ____ at my door while I was cooking, but by the time I opened it, no one was there.",
          "options": [
            "knocking",
            "to knock",
            "knocked",
            "to knocking"
          ],
          "answer": 0,
          "explanation": "notice 為感官動詞,「while I was cooking」表動作正在進行的某一刻,用 Ving:noticed someone knocking。",
          "trap": "⚠ 句中 while...cooking 與「開門時人已不在」暗示只察覺到進行中的敲門聲片段,故 Ving;原形 knock 與 to 形式皆不選。"
        },
        {
          "stem": "Which sentence correctly uses a perception verb in the PASSIVE-meaning structure?",
          "options": [
            "She heard the song sing by a child.",
            "She heard her name mentioned during the meeting.",
            "She heard someone to call her.",
            "She heard the bell ringing it loudly."
          ],
          "answer": 1,
          "explanation": "受詞與動作為被動關係時,感官動詞後用 p.p.:heard her name mentioned(名字被提到),(B) 正確。",
          "trap": "⚠ (A) song 被唱應用 sung 而非 sing;(C) 感官動詞不加 to;(D) ringing 後多餘的 it。被動關係一定用 p.p.。"
        },
        {
          "stem": "The teacher ____ us ____ the experiment ourselves so that we could ____ the chemicals ____ color step by step.",
          "options": [
            "got / do / see / changed",
            "made / to do / see / to change",
            "let / doing / watch / changing",
            "had / do / watch / change"
          ],
          "answer": 3,
          "explanation": "had us do(叫我們親自做,原形);watch the chemicals change(看藥品變色全程,感官動詞接原形)。",
          "trap": "⚠ had 與 watch 後都接原形;選項中 changing 強調進行,但「step by step 一步步完整變化」更適合原形,且須與 had do 一致。"
        },
        {
          "stem": "'Don't ____ the baby ____ ; I just got him ____ asleep after an hour!' the tired mother whispered.",
          "options": [
            "make / cry / to fall",
            "let / crying / falling",
            "have / cried / fall",
            "let / cry / fall"
          ],
          "answer": 0,
          "explanation": "make the baby cry(惹寶寶哭,make 接原形);got him to fall asleep(get 接 to V,讓他入睡)。語意:別惹哭他,我才哄睡。",
          "trap": "⚠ 兩動詞結構不同:make + 原形、get + to V;(D) let...fall 漏掉 get 必需的 to。注意辨別 make 與 get 的接法差異。"
        },
        {
          "stem": "Choose the option where BOTH blanks can be filled with the SAME form (the base form / V): 'I saw him ____ the ball' and 'She made him ____ the ball.'",
          "options": [
            "kick / kick",
            "kicking / to kick",
            "to kick / kicking",
            "kicked / kick"
          ],
          "answer": 0,
          "explanation": "see + 受詞 + 原形(看到踢球動作)、make + 受詞 + 原形,兩者補語都可用原形 kick,故 (A) 同形正確。",
          "trap": "⚠ 感官動詞 see 雖也可接 Ving,但題目要求「兩格同形且為原形」;make 只能接原形,故唯一共同形式是原形 kick。"
        },
        {
          "stem": "The security guard wouldn't ____ anyone ____ in without an ID, and he had the receptionist ____ each visitor's name carefully.",
          "options": [
            "have / to come / checking",
            "make / coming / to check",
            "let / come / check",
            "get / come / checked"
          ],
          "answer": 2,
          "explanation": "let anyone come in(讓任何人進入,let 接原形);had the receptionist check(叫櫃台檢查,have 接原形,主動)。",
          "trap": "⚠ let 與 have 後皆接原形;receptionist 是主動檢查者用原形 check,別誤用 checked(那會變成名字被檢查,但受詞是 receptionist 非 name)。"
        },
        {
          "stem": "Read and infer: 'When I came home, I saw smoke ____ from the kitchen and heard the alarm ____ . I rushed in and had a neighbor ____ the fire department.' Which fits all blanks?",
          "options": [
            "rise / gone off / called",
            "rising / going off / call",
            "to rise / to go off / to call",
            "risen / going / calling"
          ],
          "answer": 1,
          "explanation": "saw smoke rising(看到煙正冒出,進行中用 Ving);heard the alarm going off(聽到警報正響,Ving);had a neighbor call(叫鄰居打,原形)。",
          "trap": "⚠ 前兩格是回家當下察覺的進行畫面用 Ving;最後 had a neighbor 是主動,用原形 call。三格須分辨感官進行(Ving)與使役主動(原形)。"
        },
        {
          "stem": "Which sentence is INCORRECT in using causative or perception verbs?",
          "options": [
            "I had my photo taken at the studio.",
            "We watched the sun set behind the hills.",
            "He let his dog to run in the park.",
            "They got their house painted last week."
          ],
          "answer": 2,
          "explanation": "(C) let 後接原形,應為 let his dog run,加 to 為錯;(A) had + p.p. 被動、(B) watch + 原形、(D) got + p.p. 皆正確。",
          "trap": "⚠ let 是使役動詞,補語絕不加 to;其餘三句分別示範被動 p.p.(A、D)與感官原形(B),都正確,只有 (C) 多了 to。"
        },
        {
          "stem": "Read the dialogue: A: 'Why is your bike at the repair shop?' B: 'I fell yesterday, so I'm ____ the brakes ____ . The mechanic also ____ me ____ the tire myself to save money.' Which fits all blanks?",
          "options": [
            "having / fixed / let / pump",
            "having / fix / made / to pump",
            "letting / fixed / got / pump",
            "getting / fixing / had / pumping"
          ],
          "answer": 0,
          "explanation": "having the brakes fixed(煞車被修,have + 受詞 + p.p. 被動);let me pump(讓我自己打氣,let 接原形)。語意完整且省錢。",
          "trap": "⚠ brakes 是被動須用 p.p.(fixed),me 是主動須用原形(pump);同一段話混合被動使役與主動使役,別把兩者形式弄反。"
        },
        {
          "stem": "The strict coach made all the players ____ five extra laps after the match.",
          "options": [
            "to run",
            "running",
            "ran",
            "run"
          ],
          "answer": 3,
          "explanation": "使役動詞 make 的句型為「make + 受詞 + 原形動詞」,所以空格要填原形 run;不加 to,也不用 -ing 或過去式。"
        },
        {
          "stem": "My laptop broke down last week, so I had it ____ at the computer store on Sunday.",
          "options": [
            "fixed",
            "fix",
            "to fix",
            "fixing"
          ],
          "answer": 0,
          "explanation": "「have + 受詞 + 過去分詞」表示『請別人做某事』(使役被動),筆電是『被』修理,受詞與動作是被動關係,故用過去分詞 fixed。",
          "trap": "筆電是被修理,不是自己修,所以用過去分詞而非原形 fix。"
        },
        {
          "stem": "It's already midnight, but Grandma still won't let us ____ up to watch the game.",
          "options": [
            "to stay",
            "stay",
            "staying",
            "stayed"
          ],
          "answer": 1,
          "explanation": "使役動詞 let 的句型為「let + 受詞 + 原形動詞」,表示允許,故用原形 stay,不加 to、-ing 或過去式。",
          "trap": "let 後面接原形動詞,別受一般動詞後常見 to 不定詞影響而選 to stay。"
        },
        {
          "stem": "Walking home in the dark, Amy suddenly felt something ____ her arm and then heard footsteps ____ toward her.",
          "options": [
            "to touch ... run",
            "touched ... to run",
            "touch ... ran",
            "touch ... running"
          ],
          "answer": 3,
          "explanation": "感官動詞 feel、hear 皆接「原形動詞」表完整動作,或接「現在分詞」表正在進行。碰到手臂是一瞬間的完整動作,用原形 touch;腳步聲是持續朝她逼近的進行狀態,用現在分詞 running。",
          "trap": "兩個空格用法不同:第一格是瞬間完整動作用原形,第二格強調進行中用 V-ing,別一律用同一種形式。"
        }
      ]
    },
    {
      "id": "tagquestion",
      "name": "附加問句與倒裝 (Tag Questions & Inversion)",
      "week": "開學 第2週",
      "notes": [
        {
          "h": "附加問句的構成",
          "points": [
            "附加問句採「前肯定後否定、前否定後肯定」原則:主句肯定則問句用否定 (He is tall, isn't he?),主句否定則問句用肯定 (She can't swim, can she?)。",
            "問句的助動詞與時態須跟著主句:主句有 be/助動詞/情態動詞就照用,沒有的一般動詞則依時態補 do/does/did;主詞一律改成對應的代名詞。",
            "特殊形:I am... 的附加問句用 aren't I;祈使句(Close the door)用 will you;Let's... 用 shall we。",
            "句中含 never / hardly / seldom / no / few / little 等否定字,整句視為「否定句」,附加問句須用「肯定」 (He hardly speaks, does he?)。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"40\" width=\"150\" height=\"50\" rx=\"8\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"30\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">He can swim,</text><text x=\"30\" y=\"82\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">主句:肯定</text><rect x=\"194\" y=\"40\" width=\"150\" height=\"50\" rx=\"8\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"210\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">can't he?</text><text x=\"210\" y=\"82\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">問句:否定</text><text x=\"172\" y=\"68\" font-family=\"sans-serif\" font-size=\"16\" fill=\"#f0a52e\">⇄</text><text x=\"18\" y=\"120\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">I am right, aren't I?</text><text x=\"18\" y=\"142\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">Open it, will you?</text><text x=\"18\" y=\"164\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">Let's go, shall we?</text></svg>",
          "caption": "主句與附加問句肯否相反,助動詞與時態跟著主句。",
          "trap": "⚠ 最常見錯誤:只看主句字面而忽略 never/hardly/seldom 等否定副詞,把「He seldom comes, does he?」誤寫成 doesn't he?;這類詞已使句子帶否定,附加問句須用肯定。"
        },
        {
          "h": "否定副詞開頭的倒裝",
          "points": [
            "Never / Hardly / Seldom / Rarely / Not only / No sooner 等否定(或半否定)副詞置於句首時,主句須「部分倒裝」:助動詞/be/情態動詞提前到主詞之前 (Never have I seen...)。",
            "若主句原本沒有助動詞,須補 do/does/did 並把主動詞還原為原形 (Not until then did he realize...)。",
            "So + 助動詞 + 主詞=「也…(肯定呼應)」;Neither / Nor + 助動詞 + 主詞=「也不…(否定呼應)」 (I can swim. — So can she. / I don't smoke. — Neither does he.)。",
            "Only + 時間/地點/方式片語置句首亦觸發倒裝 (Only then did she understand);固定搭配 No sooner...than、Hardly/Scarcely...when 不可混用。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"16\" y=\"40\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">正常語序</text><rect x=\"16\" y=\"50\" width=\"328\" height=\"34\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#5aa874\"/><text x=\"28\" y=\"72\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">I have never seen it.</text><text x=\"16\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">倒裝</text><rect x=\"16\" y=\"122\" width=\"328\" height=\"34\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"28\" y=\"144\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">Never have I seen it.</text><path d=\"M150 118 q30 -14 60 0\" fill=\"none\" stroke=\"#f0a52e\" stroke-width=\"2\"/><text x=\"176\" y=\"104\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\">have 提前</text></svg>",
          "caption": "否定副詞置句首,助動詞提前形成倒裝語序。",
          "trap": "⚠ 倒裝時若主句本無助動詞,務必補 do/does/did 且主動詞回原形 (Not until... did he notice,而非 noticed he);另 No sooner 只配 than、Hardly 只配 when,固定搭配不可張冠李戴。"
        },
        {
          "h": "附加問句的語調與答法 intonation & answering",
          "points": [
            "附加問句有兩種語調:語調「下降」代表說話者其實有把握、只是想找對方附和;語調「上揚」代表真的不確定、在詢問。例如 You locked the door, didn't you? 用降調是「我猜你鎖了吧」。",
            "回答附加問句要看「事實」而非主句的肯否:事實成立就用 Yes,不成立就用 No。問 You aren't tired, are you? 若你真的累,要答 Yes, I am.,不能因為問句帶否定就跟著說 No。",
            "口語回答常配合助動詞讓句子完整,例如 Yes, I do. 或 No, he isn't.,助動詞要與問句一致,聽起來才自然。"
          ],
          "formula": "事實為真→Yes + 助動詞;事實為假→No + 助動詞 + not",
          "trap": "⚠ 中文式答法陷阱:被問 You don't like coffee, do you? 時,若你其實喜歡,英文要答 Yes, I do.(看事實),很多人受中文「對,我不…/不,我…」影響而答反,造成誤會。"
        },
        {
          "h": "易混的助動詞與主詞回指 auxiliary & pronoun",
          "points": [
            "完成式與一般過去式要選對助動詞:現在完成式用 He has finished, hasn't he?;一般過去式用 He finished, didn't he?,兩者助動詞不同不可混用。",
            "主詞是 this 或 that 時,附加問句的主詞要改用 it,例如 This is yours, isn't it?;主詞是 these、those 或複數名詞時改用 they,例如 These are new, aren't they?。",
            "主詞是 everyone、everybody、nobody、someone 等指人的不定代名詞時,附加問句主詞習慣用 they,例如 Everyone is here, aren't they? 或 Nobody called, did they?。"
          ],
          "formula": "this/that → it;these/those/複數名詞 → they;everyone/nobody → they",
          "trap": "⚠ 常見錯誤:把 This is your bag, isn't it? 寫成 isn't this?;附加問句主詞必須改成代名詞 it,不能照抄 this 或 that。另 nobody 已含否定,問句要用肯定的 did they?。"
        }
      ],
      "quiz": [
        {
          "stem": "You'd rather we didn't tell your parents about the broken window, ___?",
          "options": [
            "wouldn't you",
            "had you",
            "didn't we",
            "would you"
          ],
          "answer": 0,
          "explanation": "'d rather 此處為 would rather 的縮寫 (You would rather...),主句助動詞為 would,且為肯定句,故附加問句用否定的 wouldn't you;主詞回指 you。",
          "trap": "⚠ 'd 可能是 had 或 would,須由後接結構判斷:would rather (that) 子句用 would,故問句助動詞為 would→wouldn't you;誤判成 had 而選 had you 即錯。"
        },
        {
          "stem": "There is hardly any milk left in the fridge, ___?",
          "options": [
            "isn't it",
            "isn't there",
            "is there",
            "is it"
          ],
          "answer": 2,
          "explanation": "there be 句型的附加問句主詞用 there;句中 hardly 為半否定字,整句視為否定,故附加問句用肯定 is there。",
          "trap": "⚠ 雙重陷阱:there be 句的問句主詞仍用 there(不可用 it);且 hardly 使句子帶否定,附加問句須用肯定 is there,而非 isn't there。"
        },
        {
          "stem": "Let's not argue about such a trivial matter in front of the guests, ___?",
          "options": [
            "do we",
            "will you",
            "shall not we",
            "shall we"
          ],
          "answer": 3,
          "explanation": "Let's(= Let us)開頭的提議句,不論肯定或否定 (Let's not...),附加問句一律用 shall we。",
          "trap": "⚠ 別把 Let's not... 當成一般否定句而想用肯定助動詞;Let's 開頭固定配 shall we;will you 是用於祈使句 (Close the door, will you?),兩者不可混。"
        },
        {
          "stem": "Everyone had already submitted the assignment by Friday, ___?",
          "options": [
            "hadn't he",
            "hadn't they",
            "didn't they",
            "weren't they"
          ],
          "answer": 1,
          "explanation": "主句助動詞為 had(過去完成),肯定句故問句用否定 hadn't;不定代名詞 everyone 在附加問句中以 they 回指。",
          "trap": "⚠ everyone/somebody/no one 等雖在主句搭單數動詞,附加問句的代名詞慣用 they;此處助動詞須沿用 had(→hadn't),不可改成 didn't。"
        },
        {
          "stem": "I am the one who should apologize first, ___?",
          "options": [
            "amn't I",
            "am not I",
            "aren't I",
            "isn't it"
          ],
          "answer": 2,
          "explanation": "主詞為 I、be 動詞為 am 的肯定句,其附加問句固定用 aren't I(英語無 amn't 的標準縮寫)。",
          "trap": "⚠ I am... 的附加問句是特例,固定用 aren't I;amn't 並非標準英語,am not I 語序不自然;主詞為 I 不可改成 it。"
        },
        {
          "stem": "Nobody bothered to read the safety instructions beforehand, ___?",
          "options": [
            "did they",
            "didn't they",
            "did he",
            "didn't he"
          ],
          "answer": 0,
          "explanation": "主詞 Nobody 含否定,整句為否定句,附加問句用肯定 did;主動詞 bothered 為過去式且無助動詞,故補 did,代名詞用 they 回指 nobody。",
          "trap": "⚠ Nobody 已使句子否定,問句須用肯定 did(非 didn't);且 nobody 在問句中以 they 回指,不可用 he。"
        },
        {
          "stem": "Never before ___ such a terrible earthquake struck this peaceful coastal town.",
          "options": [
            "did",
            "have",
            "was",
            "has"
          ],
          "answer": 3,
          "explanation": "Never before 置句首觸發倒裝;句意強調「前所未有」用現在完成式,主詞 such a terrible earthquake 為單數,故助動詞用 has,後接過去分詞 struck(strike 的過去分詞,與過去式同形)→ has ... struck。B have 主詞單數不合;C did、D was 非完成式,皆誤。",
          "trap": "⚠ Never before 句首須倒裝;strike 的過去式與過去分詞皆為 struck,易誤判;主詞 earthquake 單數用 has,選 have 為主謂不一致,選 did 則與完成式語境不合。"
        },
        {
          "stem": "Not only ___ the meeting, but he also forgot to inform the rest of the team.",
          "options": [
            "he missed",
            "did he miss",
            "he did miss",
            "missed he"
          ],
          "answer": 1,
          "explanation": "Not only 置句首觸發部分倒裝:助動詞 did 提前 + 主詞 + 原形動詞,故 did he miss。",
          "trap": "⚠ Not only 在句首使主句倒裝(did he miss),不可寫正常語序 he missed;主動詞須回原形 miss,而非 missed;全動詞倒裝 missed he 不合英語規則。"
        },
        {
          "stem": "\"I have never been to Japan.\" \"___, but I really hope to visit someday.\"",
          "options": [
            "Neither have I",
            "Nor I have",
            "So have I",
            "Either have I"
          ],
          "answer": 0,
          "explanation": "對方說「從未去過日本」(否定),要表達「我也沒去過」用 Neither + 助動詞 + 主詞:Neither have I。",
          "trap": "⚠ 呼應否定句用 Neither/Nor(非 So);語序為 Neither + 助動詞 + 主詞(Neither have I),Nor I have 語序錯;Either 不可置句首作此呼應。"
        },
        {
          "stem": "So absorbed ___ in the novel that she completely missed her bus stop.",
          "options": [
            "she was",
            "she has been",
            "did she be",
            "was she"
          ],
          "answer": 3,
          "explanation": "『So + 形容詞/分詞 + be + 主詞 + that...』倒裝句:被分詞 absorbed 置句首,be 動詞 was 提前至主詞前,故 was she。",
          "trap": "⚠ So + absorbed 置句首觸發 be 動詞倒裝(was she);未倒裝的 she was 錯,be 動詞不需助動詞 did(did she be 文法錯),時態須與 missed 一致用 was。"
        },
        {
          "stem": "Hardly had the players left the field ___ the storm broke and lightning lit up the sky.",
          "options": [
            "than",
            "then",
            "when",
            "while"
          ],
          "answer": 2,
          "explanation": "Hardly...when 為固定搭配,表「一…就…」:Hardly had S + p.p. ...when + 過去式。句首 Hardly 已觸發倒裝 (had the players left)。",
          "trap": "⚠ 固定搭配:Hardly/Scarcely 配 when,No sooner 才配 than;此處用 Hardly 須配 when,選 than 是把兩種句型混用的典型錯誤。"
        },
        {
          "stem": "Seldom ___ a politician admit a mistake so openly and without making excuses.",
          "options": [
            "we see",
            "do we see",
            "we do see",
            "sees"
          ],
          "answer": 1,
          "explanation": "Seldom 為半否定副詞置句首須倒裝,主句無助動詞故補 do + 主詞 + 原形:do we see。",
          "trap": "⚠ Seldom 句首觸發倒裝須補助動詞 do(do we see);未倒裝 we see 錯,主動詞須回原形 see;主詞為 we 用 do 而非 sees。"
        },
        {
          "stem": "Only after losing the championship ___ how much teamwork really mattered.",
          "options": [
            "did they understand",
            "understood they",
            "they did understand",
            "they understood"
          ],
          "answer": 0,
          "explanation": "『Only + 副詞片語』置句首觸發部分倒裝:did + 主詞 + 原形,故 did they understand。",
          "trap": "⚠ Only after... 在句首使主句倒裝(did they understand),不是 after 子句倒裝;主動詞回原形 understand,寫成正常語序 they understood 或全動詞倒裝皆錯。"
        },
        {
          "stem": "The committee chairperson, along with several senior members, ___ going to review the proposal, ___?",
          "options": [
            "are; aren't they",
            "are; aren't the members",
            "is; isn't she",
            "is; isn't he"
          ],
          "answer": 2,
          "explanation": "主詞為 The committee chairperson,along with... 為插入語不影響主詞單複數,故動詞用 is;附加問句回指真正主詞 chairperson(單數),肯定句用否定 isn't,代名詞 she(主席性別由 chairperson 推定,選項中以 she 呈現)。",
          "trap": "⚠ along with / together with / as well as 引導的片語不改變主詞數,動詞仍隨 chairperson(單數)用 is;附加問句回指主詞而非插入語的 members,故不可用 they。"
        },
        {
          "stem": "No sooner had the teacher turned her back ___ the students started whispering again.",
          "options": [
            "that",
            "when",
            "then",
            "than"
          ],
          "answer": 3,
          "explanation": "No sooner...than 為固定搭配,表「一…就…」:No sooner had S + p.p. ...than + 過去式。句首 No sooner 觸發倒裝 (had the teacher turned)。",
          "trap": "⚠ No sooner 固定配 than(不是 when 或 then);Hardly/Scarcely 才配 when;這是會考最常考的固定搭配對應陷阱。"
        },
        {
          "stem": "You hardly ever help with the housework, and ___ your younger brother.",
          "options": [
            "so does",
            "neither does",
            "so doesn't",
            "nor doesn't"
          ],
          "answer": 1,
          "explanation": "前句 hardly ever 含否定意味(幾乎不…),要呼應「你弟弟也不…」用 neither + 助動詞 + 主詞:neither does your brother。",
          "trap": "⚠ hardly ever 使前句帶否定,呼應用 neither/nor(非 so);neither 本身已含否定,助動詞用肯定 does,寫成 neither doesn't/nor doesn't 是雙重否定錯誤。"
        },
        {
          "stem": "Rarely ___ such dedication in a student so young; her teachers were truly impressed.",
          "options": [
            "one sees",
            "sees one",
            "does one see",
            "one does see"
          ],
          "answer": 2,
          "explanation": "Rarely 為否定副詞置句首須倒裝,補助動詞 does + 主詞 + 原形:does one see。",
          "trap": "⚠ Rarely 句首觸發倒裝(does one see);主詞 one 視為單數第三人稱用 does,主動詞回原形 see;未倒裝 one sees 或全動詞倒裝 sees one 皆錯。"
        },
        {
          "stem": "Take an umbrella with you, ___ you'll get soaked in this heavy rain.",
          "options": [
            "or",
            "and",
            "will you",
            "won't you"
          ],
          "answer": 0,
          "explanation": "祈使句 + or = 「否則…(壞結果)」:Take an umbrella, or you'll get soaked(帶傘,否則會淋濕)。語意為負面結果,故用 or。",
          "trap": "⚠ 祈使句 + and = 「就會…(好結果)」,+ or = 「否則…(壞結果)」;此處淋濕是壞結果,須用 or;will you/won't you 是附加問句,放在此處語法不通。"
        },
        {
          "stem": "Little ___ that his casual remark would later cost him his entire career.",
          "options": [
            "he realized",
            "did he realize",
            "he did realize",
            "realized he"
          ],
          "answer": 1,
          "explanation": "Little 作否定副詞置句首(意為「幾乎不/全然不」)觸發倒裝,補 did + 主詞 + 原形:did he realize。",
          "trap": "⚠ Little 在此非「少量」而是否定副詞,句首須倒裝(did he realize);主動詞回原形 realize;這是會考易忽略的倒裝觸發詞。"
        },
        {
          "stem": "Everything has been arranged exactly as the client requested, ___?",
          "options": [
            "hasn't everything",
            "haven't they",
            "isn't it",
            "hasn't it"
          ],
          "answer": 3,
          "explanation": "主詞 Everything 視為單數,助動詞為 has(現在完成),肯定句故問句用否定 hasn't;everything 在附加問句以 it 回指。",
          "trap": "⚠ everything/something/nothing 在附加問句以 it 回指(不可用 they);助動詞沿用 has→hasn't,選 haven't they 在主詞與助動詞兩處都錯。"
        },
        {
          "stem": "Not until the results were published ___ the extent of the scandal become clear to the public.",
          "options": [
            "did",
            "had",
            "was",
            "has"
          ],
          "answer": 0,
          "explanation": "Not until + 子句置句首,主句須倒裝;主句動詞 become 為一般動詞且時態為過去,補助動詞 did + 主詞 + 原形:did...become。",
          "trap": "⚠ 倒裝的是主句而非 until 子句;主動詞 become 須配助動詞 did(did the extent become);選 had 會要求過去分詞、was 須配形容詞/分詞,皆與原形 become 不符。"
        },
        {
          "stem": "So heavy was the traffic ___ it took us three hours to reach the airport.",
          "options": [
            "than",
            "as",
            "that",
            "which"
          ],
          "answer": 2,
          "explanation": "『So + 形容詞 + be + 主詞 + that...』倒裝句型,表「如此…以致於…」,連接結果子句用 that:So heavy was the traffic that...。",
          "trap": "⚠ So...that 倒裝句的結果子句固定用 that(不可用 as/than/which);本句把 So heavy 提前已倒裝 be 動詞(was the traffic),須記得後面對應 that。"
        },
        {
          "stem": "I suppose the new policy won't affect part-time employees, ___?",
          "options": [
            "do I",
            "won't it",
            "don't I",
            "will it"
          ],
          "answer": 3,
          "explanation": "I suppose/think/believe + 子句的附加問句,慣例就「子句」作附加(轉移原則);子句 the new policy won't affect... 為否定,故附加問句用肯定 will it,回指 policy。",
          "trap": "⚠ I think/suppose/believe 引導時,附加問句針對「後面的子句」而非主句的 I;子句否定 (won't) 故問句用肯定 will it,絕非 don't I。"
        },
        {
          "stem": "Such ___ his determination that no amount of failure could ever discourage him.",
          "options": [
            "was his determination",
            "his determination was",
            "did his determination be",
            "his determination it was"
          ],
          "answer": 0,
          "explanation": "『Such + be + 主詞 + that...』倒裝句:Such was his determination that...(他的決心如此之大,以致於…),be 動詞 was 提前至 Such 之後。",
          "trap": "⚠ Such 置句首觸發 be 倒裝(was his determination);未倒裝 his determination was 錯,be 動詞不需 did,加 it 多餘;對應結果子句用 that。"
        },
        {
          "stem": "Pass me that report on the corner desk, ___, and double-check the figures before the meeting?",
          "options": [
            "don't you",
            "shall we",
            "will you",
            "do you"
          ],
          "answer": 2,
          "explanation": "Pass me... 為祈使句,祈使句的附加問句(表客氣請求)用 will you;Let's 開頭才用 shall we。",
          "trap": "⚠ 祈使句(原形動詞開頭)的附加問句固定用 will you,而非 shall we(那是 Let's 專用);別因句子是肯定請求就誤判成一般肯定句而選 don't you。"
        },
        {
          "stem": "Complete the sentence: \"Your sister has already finished her homework, ___\"",
          "options": [
            "hasn't she?",
            "doesn't she?",
            "isn't she?",
            "didn't she?"
          ],
          "answer": 0,
          "explanation": "主句用現在完成式 has finished，附加問句須用相同助動詞 has，且主句為肯定，附加問句用否定 hasn't；主詞 your sister 用代名詞 she。因此正解為 hasn't she。用 doesn't 或 didn't 是誤判時態，用 isn't 則誤把 has 當 be 動詞。"
        },
        {
          "stem": "Complete the sentence: \"Let's go to the night market together, ___\"",
          "options": [
            "will you?",
            "don't we?",
            "shall we?",
            "won't we?"
          ],
          "answer": 2,
          "explanation": "以 Let's（Let us）開頭表示提議的祈使句，附加問句固定使用 shall we，用來邀請對方一起做某事。will you 用於一般命令句（如 Sit down, will you?），don't we 與 won't we 皆不符合 Let's 句型的固定用法。",
          "trap": "看到句子是命令口氣就直覺選 will you，但只要是 Let's 開頭一律用 shall we。"
        },
        {
          "stem": "Choose the correct inversion. \"I have never seen such a beautiful sunset.\" 可改寫為：\"___\"",
          "options": [
            "Never I have seen such a beautiful sunset.",
            "Never seen have I such a beautiful sunset.",
            "Never have I seen such a beautiful sunset.",
            "Never I saw such a beautiful sunset."
          ],
          "answer": 2,
          "explanation": "否定副詞 Never 置於句首時，其後的主詞與助動詞須倒裝。原句助動詞為 have，故倒裝後語序為「Never + have + I + 過去分詞 seen」。保持原時態現在完成式，只將助動詞提前，動詞主體 seen 不移動，因此正解為 Never have I seen such a beautiful sunset。",
          "trap": "倒裝只把助動詞 have 移到主詞前，動詞 seen 要留在原位；也不可把時態改成過去簡單式 saw。"
        },
        {
          "stem": "Complete the sentence: \"She couldn't solve the problem, and ___\"",
          "options": [
            "neither I could.",
            "so could I.",
            "neither could I.",
            "either could I."
          ],
          "answer": 2,
          "explanation": "前句為否定敘述，要表達「我也不能」須用 neither 開頭並倒裝：neither + 助動詞 could + 主詞 I。so 用於呼應肯定句（如 so could I 表示「我也能」），與否定語意不符；either 不可置於句首引導此倒裝結構；neither I could 語序未倒裝，錯誤。故正解為 neither could I。",
          "trap": "否定呼應要用 neither 不能用 so；且 neither 之後必須倒裝成 could I，不是 I could。"
        }
      ]
    },
    {
      "id": "imperative",
      "name": "祈使句與感嘆句 (Imperatives & Exclamations)",
      "week": "開學 第2週",
      "notes": [
        {
          "h": "祈使句的形式與功能",
          "points": [
            "祈使句用來表達命令、請求、指示或建議,句子以原形動詞開頭,主詞 you 省略不寫,例如 Close the door. 等於 (You) close the door.",
            "否定祈使句一律用 Don't + 原形動詞,即使主詞概念上是第三人稱也用 Don't;be 動詞句型的否定是 Don't be... (例 Don't be late.),不可寫成 Aren't 或 Not be。",
            "Let's + 原形動詞 (= Let us) 用來提出「我們一起做」的建議,否定為 Let's not + 原形;Let me + 原形則是「讓我來」,兩者意義不同不可混用。",
            "祈使句 + and 表示「就會」帶來好結果 (Study hard, and you'll pass.);祈使句 + or 表示「否則」帶來壞結果 (Hurry up, or you'll miss the bus.),and 與 or 的選擇取決於後半句是正面還是負面結果。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"12\" y=\"26\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">(You) Close the door.</text><rect x=\"12\" y=\"34\" width=\"42\" height=\"18\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"16\" y=\"47\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">You</text><text x=\"60\" y=\"47\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">省略主詞</text><line x1=\"120\" y1=\"80\" x2=\"120\" y2=\"110\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><text x=\"40\" y=\"76\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">祈使句,</text><line x1=\"120\" y1=\"95\" x2=\"175\" y2=\"75\" stroke=\"#5aa874\" stroke-width=\"1.5\"/><line x1=\"120\" y1=\"95\" x2=\"175\" y2=\"125\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><text x=\"180\" y=\"70\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">and 好結果</text><text x=\"180\" y=\"100\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">就會…</text><text x=\"180\" y=\"125\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">or 壞結果</text><text x=\"180\" y=\"148\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">否則…</text><text x=\"12\" y=\"175\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">否定:Don't + 原形動詞</text></svg>",
          "caption": "祈使句省略主詞 you,and 接正面結果、or 接負面結果。",
          "trap": "⚠ 否定祈使句要用 Don't(原形),不可用 Aren't / Doesn't;祈使句一律用原形動詞,不可加 s 或用 to。"
        },
        {
          "h": "What 與 How 感嘆句",
          "points": [
            "What 引導的感嘆句結構為 What + (a/an) + 形容詞 + 名詞 (+ 主詞 + 動詞)!,核心是「名詞」,例如 What a nice day (it is)!;可數單數名詞前要加 a/an。",
            "How 引導的感嘆句結構為 How + 形容詞/副詞 (+ 主詞 + 動詞)!,核心是「形容詞或副詞」,後面不接名詞,例如 How beautiful (the flower is)!",
            "判斷關鍵:看驚嘆的核心後面是否接名詞——接名詞用 What,只接形容詞或副詞用 How;同一句意常可用兩種改寫 (What a fast runner he is! = How fast he runs!)。",
            "感嘆句語序為「主詞 + 動詞」正常順序(非疑問句倒裝);複數或不可數名詞用 What 時不加 a/an (What delicious food!、What cute dogs!)。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"130\" y=\"26\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">感嘆核心是什麼?</text><line x1=\"130\" y1=\"34\" x2=\"60\" y2=\"66\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><line x1=\"130\" y1=\"34\" x2=\"230\" y2=\"66\" stroke=\"#3a342e\" stroke-width=\"1.5\"/><rect x=\"18\" y=\"68\" width=\"110\" height=\"22\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"73\" y=\"83\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\" text-anchor=\"middle\">後接名詞 → What</text><rect x=\"175\" y=\"68\" width=\"150\" height=\"22\" fill=\"#f3e7df\" stroke=\"#5aa874\"/><text x=\"250\" y=\"83\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\" text-anchor=\"middle\">只接形容詞副詞→ How</text><text x=\"12\" y=\"118\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">What a nice day!</text><text x=\"12\" y=\"140\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">How beautiful it is!</text><text x=\"12\" y=\"168\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\">單數可數名詞才加 a/an</text></svg>",
          "caption": "後面接名詞用 What,只接形容詞或副詞用 How。",
          "trap": "⚠ What 後面接複數或不可數名詞時不可加 a/an;感嘆句用正常語序「主詞+動詞」,不要寫成疑問句倒裝。"
        },
        {
          "h": "禮貌祈使句與 please 的位置",
          "points": [
            "祈使句加上 please 會更客氣,please 可放句首或句尾,例 Please sit down. 或 Sit down, please.,放句尾時前面常加逗號。",
            "用 Could you / Would you 開頭把命令改成請求會更有禮貌,例 Could you open the window?,語氣比直接的 Open the window. 委婉。",
            "在指路或說明步驟時祈使句很實用,例 Turn left at the corner and go straight.。"
          ],
          "formula": "(Please) + 原形動詞 + 受詞 (, please)",
          "trap": "祈使句本身已是命令或請求,別再多加主詞 you 或助動詞 do:錯誤 You please sit down.;另外 please 後面直接接原形動詞,不接 to,錯誤 Please to sit down.。"
        },
        {
          "h": "So 與 Such 的強調(與感嘆句比較)",
          "points": [
            "so 後面接形容詞或副詞,例 The movie was so boring.;such 後面接名詞片語,例 It was such a boring movie.。",
            "可數單數名詞前 such 要加 a/an,例 such a nice gift;複數或不可數名詞前則不加,例 such cute dogs、such delicious food。",
            "判斷邏輯與 What/How 感嘆句相同——看後面接的是不是名詞,有名詞用 such,只有形容詞或副詞用 so。"
          ],
          "formula": "so + 形容詞/副詞 / such + (a/an) + 形容詞 + 名詞",
          "trap": "so 與 such 後面接的詞類不同,別搞混:正確 so beautiful 或 such a beautiful day,錯誤 so a beautiful day 或 such beautiful(後面缺名詞)。"
        }
      ],
      "quiz": [
        {
          "stem": "Choose the correct way to tell a friend not to be nervous before the exam.",
          "options": [
            "Don't be nervous.",
            "Not be nervous.",
            "Aren't nervous.",
            "No nervous."
          ],
          "answer": 0,
          "explanation": "否定祈使句用 Don't + 原形動詞,be 動詞句型寫成 Don't be nervous.。",
          "trap": "⚠ be 動詞的否定祈使句不可用 Aren't;原形是 be,所以是 Don't be，不是 Don't are/is。"
        },
        {
          "stem": "\"_____ a wonderful surprise you prepared for us!\" Which word fits the blank?",
          "options": [
            "How",
            "What an",
            "How a",
            "What"
          ],
          "answer": 3,
          "explanation": "後接名詞片語 a wonderful surprise,用 What;surprise 為單數可數名詞前已有 a,所以選 What 而非 What an。",
          "trap": "⚠ 空格後是「a + 形容詞 + 名詞」,核心是名詞用 What;若選 What an 會多一個冠詞,因為後面已有 a。"
        },
        {
          "stem": "Which sentence has the SAME meaning as \"What a careful driver Mr. Lin is!\"?",
          "options": [
            "How careful Mr. Lin drives!",
            "How carefully Mr. Lin drives!",
            "What carefully Mr. Lin drives!",
            "How careless Mr. Lin is!"
          ],
          "answer": 1,
          "explanation": "What a careful driver (名詞片語) 改成 How 句要把形容詞 careful 變副詞 carefully 並改用動詞 drives:How carefully Mr. Lin drives!。",
          "trap": "⚠ 修飾動詞 drives 要用副詞 carefully,不可用形容詞 careful;(D) careless 語意相反。"
        },
        {
          "stem": "\"Take the umbrella, _____ you'll get wet in the rain.\" Choose the best word.",
          "options": [
            "or",
            "but",
            "and",
            "so"
          ],
          "answer": 0,
          "explanation": "後半句「淋濕」是負面結果,祈使句 + or 表示「否則」,故選 or。",
          "trap": "⚠ and 接正面結果、or 接負面結果;這裡 get wet 是壞結果,要用 or。"
        },
        {
          "stem": "Your team is tired. You want to suggest taking a break together. Which is most appropriate?",
          "options": [
            "Let me take a break.",
            "Take a break for me.",
            "Let's take a break.",
            "Let us to take a break."
          ],
          "answer": 2,
          "explanation": "提議「我們一起」休息用 Let's (= Let us) + 原形動詞,Let's take a break.。",
          "trap": "⚠ Let me 是「讓我來」只指自己;Let us 後接原形不加 to。建議大家一起做要用 Let's。"
        },
        {
          "stem": "Which underlined part is INCORRECT? \"Don't talks so loudly in the library, please.\"",
          "options": [
            "Don't",
            "so loudly",
            "please",
            "talks"
          ],
          "answer": 3,
          "explanation": "祈使句用原形動詞,Don't 之後應接 talk 而非 talks。",
          "trap": "⚠ 祈使句一律用原形,即使語氣像第三人稱也不可加 s;Don't 後永遠接原形。"
        },
        {
          "stem": "\"_____ delicious the soup smells!\" Choose the correct word.",
          "options": [
            "What a",
            "How",
            "What",
            "How a"
          ],
          "answer": 1,
          "explanation": "空格後是形容詞 delicious(無名詞),用 How;How + 形容詞 + 主詞 + 動詞 (How delicious the soup smells!)。",
          "trap": "⚠ delicious 是形容詞、後面沒有名詞,所以用 How 不用 What;How 後絕不加 a/an。"
        },
        {
          "stem": "Choose the correct sentence.",
          "options": [
            "What a beautiful flowers they are!",
            "What a beautiful flowers!",
            "What beautiful flowers they are!",
            "How beautiful flowers they are!"
          ],
          "answer": 2,
          "explanation": "flowers 為複數名詞,用 What 時不加 a/an:What beautiful flowers they are!。",
          "trap": "⚠ What 後接複數或不可數名詞時不加 a/an;有名詞就不能用 How。"
        },
        {
          "stem": "Rewrite \"How fast that boy runs!\" using What. Which is correct?",
          "options": [
            "What a fast runs that boy!",
            "What a fast boy that boy is!",
            "What fast that boy runs!",
            "What a fast runner that boy is!"
          ],
          "answer": 3,
          "explanation": "How + 副詞 (fast) + 主詞 + 動詞 (runs) 改成 What 句,需把副詞變形容詞並補名詞 runner:What a fast runner that boy is!。",
          "trap": "⚠ How fast he runs 改 What 句要造出名詞 (runner) 並用 is;不能直接套 runs。"
        },
        {
          "stem": "\"Practice every day, _____ your English will improve a lot.\" Choose the best word.",
          "options": [
            "and",
            "though",
            "but",
            "or"
          ],
          "answer": 0,
          "explanation": "「英文進步」是正面結果,祈使句 + and 表示「就會」,故選 and。",
          "trap": "⚠ 後半句是好結果 (improve),用 and;若用 or 語意會變成威脅式的壞結果。"
        },
        {
          "stem": "Which sentence is grammatically CORRECT?",
          "options": [
            "Please don't to touch the paintings.",
            "Please don't touch the paintings.",
            "Please not touch the paintings.",
            "Please doesn't touch the paintings."
          ],
          "answer": 1,
          "explanation": "禮貌否定祈使句:Please + Don't + 原形動詞,Please don't touch...。",
          "trap": "⚠ Don't 後直接接原形,不加 to;祈使句不用 doesn't,please 可放句首或句尾。"
        },
        {
          "stem": "\"_____ honest the little girl is!\" and \"_____ an honest girl she is!\" Which pair fits the blanks?",
          "options": [
            "What / How",
            "How / How",
            "What / What",
            "How / What"
          ],
          "answer": 3,
          "explanation": "第一句後接形容詞 honest 用 How;第二句後接名詞片語 an honest girl 用 What。故為 How / What。",
          "trap": "⚠ 同一形容詞 honest:單獨出現用 How,後面帶名詞 (girl) 則用 What。"
        },
        {
          "stem": "Mom is talking to a child. Choose the sentence that means \"我們不要再吵架了。\"",
          "options": [
            "Let's not quarrel anymore.",
            "Let's don't quarrel anymore.",
            "Not let's quarrel anymore.",
            "Let us not to quarrel anymore."
          ],
          "answer": 0,
          "explanation": "Let's 的否定是 Let's not + 原形動詞:Let's not quarrel anymore.。",
          "trap": "⚠ Let's 的否定放 not 在 Let's 之後 (Let's not),不是 Let's don't;後接原形不加 to。"
        },
        {
          "stem": "Which underlined word makes the sentence WRONG? \"What an useful information you gave me!\"",
          "options": [
            "What",
            "useful",
            "an",
            "information"
          ],
          "answer": 2,
          "explanation": "information 是不可數名詞,What 後不可加 a/an,應為 What useful information...。(useful 雖以母音字母 u 開頭但發音為子音,本就該用 a 而非 an,但根本問題是不可數名詞不加冠詞。)",
          "trap": "⚠ information 不可數,絕不加 a/an;同理 advice、furniture、news 都不可加冠詞。"
        },
        {
          "stem": "\"_____ down your name and phone number here, please.\" Choose the best word.",
          "options": [
            "Writing",
            "Write",
            "To write",
            "Writes"
          ],
          "answer": 1,
          "explanation": "祈使句以原形動詞開頭:Write down your name...,please 表禮貌。",
          "trap": "⚠ 祈使句開頭用原形 Write,不可用 V-ing、to V 或加 s。"
        },
        {
          "stem": "Which sentence correctly turns \"It is a very interesting story.\" into an exclamation?",
          "options": [
            "How an interesting story it is!",
            "What interesting story it is!",
            "What an interesting story it is!",
            "How a interesting story it is!"
          ],
          "answer": 2,
          "explanation": "核心名詞 story (單數可數),用 What + an + 形容詞 + 名詞:What an interesting story it is!。",
          "trap": "⚠ 有名詞用 What;interesting 以母音開頭故用 an;How 後不接名詞。"
        },
        {
          "stem": "\"Turn off the lights before you leave, _____ we'll waste electricity.\" Choose the best word.",
          "options": [
            "or",
            "so",
            "and",
            "because"
          ],
          "answer": 0,
          "explanation": "「浪費電」是負面結果,祈使句 + or 表「否則」,選 or。",
          "trap": "⚠ waste electricity 是壞結果,用 or;and 會誤指這是好結果。"
        },
        {
          "stem": "Choose the sentence with the CORRECT word order.",
          "options": [
            "How tall is the tree!",
            "How the tree tall is!",
            "How is the tree tall!",
            "How tall the tree is!"
          ],
          "answer": 3,
          "explanation": "感嘆句用正常語序:How + 形容詞 + 主詞 + 動詞,How tall the tree is!。",
          "trap": "⚠ 感嘆句不是疑問句,不可倒裝成 is the tree;主詞與動詞照正常順序 the tree is。"
        },
        {
          "stem": "A teacher wants students to be quiet but politely. Which is the most polite and correct?",
          "options": [
            "Quiet!",
            "Be quiet, please.",
            "Please are quiet.",
            "You quiet please."
          ],
          "answer": 1,
          "explanation": "祈使句以原形 Be 開頭,加 please 表禮貌:Be quiet, please.。",
          "trap": "⚠ 形容詞 quiet 前需要原形動詞 Be;不可用 are,主詞 you 要省略。"
        },
        {
          "stem": "\"_____ hard you have worked this year!\" Choose the correct word.",
          "options": [
            "What",
            "What a",
            "How",
            "What an"
          ],
          "answer": 2,
          "explanation": "hard 在此為副詞修飾 worked,後面無名詞,用 How:How hard you have worked!。",
          "trap": "⚠ hard 此處是副詞,不接名詞,要用 How;有 you have worked 的主詞動詞屬正常語序。"
        },
        {
          "stem": "Which sentence is the correct negative imperative for \"不要對長輩無禮\"?",
          "options": [
            "Don't be rude to your elders.",
            "Be not rude to your elders.",
            "Don't are rude to your elders.",
            "Not be rude to your elders."
          ],
          "answer": 0,
          "explanation": "否定祈使句 + be 動詞:Don't be + 形容詞,Don't be rude to your elders.。",
          "trap": "⚠ be 動詞祈使句的否定是 Don't be,不是 Be not 或 Don't are。"
        },
        {
          "stem": "Combine into one exclamation: The cake is so sweet. (Use What) Which is correct?",
          "options": [
            "What sweet cake it is!",
            "What a sweet cake it is!",
            "How a sweet cake it is!",
            "What sweet a cake it is!"
          ],
          "answer": 1,
          "explanation": "cake 為單數可數名詞,What + a + 形容詞 + 名詞:What a sweet cake it is!。",
          "trap": "⚠ 冠詞 a 要放在形容詞之前 (a sweet cake);單數可數名詞不可省 a。"
        },
        {
          "stem": "\"Wear your seatbelt, _____ you may get hurt in an accident.\" Which word best completes it?",
          "options": [
            "and",
            "while",
            "but",
            "or"
          ],
          "answer": 3,
          "explanation": "「受傷」是負面結果,祈使句 + or 表「否則」,選 or。",
          "trap": "⚠ get hurt 是壞結果,用 or;若用 and 會誤導成正面結果。"
        },
        {
          "stem": "Which of the following is an INCORRECT sentence?",
          "options": [
            "What lovely weather we have today!",
            "How lovely the weather is today!",
            "What a lovely weather we have today!",
            "The weather is lovely today."
          ],
          "answer": 2,
          "explanation": "weather 是不可數名詞,What 後不可加 a:應為 What lovely weather...,故 (C) 錯誤。",
          "trap": "⚠ weather 不可數,加 a 即錯;判斷感嘆句正誤先確認名詞可數性。"
        },
        {
          "stem": "Read the sign: \"KEEP OFF THE GRASS. DO NOT PICK THE FLOWERS.\" What does the sign ask people to do?",
          "options": [
            "Plant flowers on the grass.",
            "Walk on the grass and pick flowers.",
            "Stay off the grass and leave the flowers alone.",
            "Water the grass and the flowers."
          ],
          "answer": 2,
          "explanation": "Keep off the grass = 勿踏草坪;Do not pick the flowers = 不要採花,故要求人們遠離草坪並別摘花。",
          "trap": "⚠ Keep off 是「遠離/勿進入」,Do not pick 是否定祈使句「不要採」;兩個都是禁止,不是允許。"
        },
        {
          "stem": "看到桌上的花瓶快掉下來了,你想請朋友「小心!」,下列哪一句最恰當?",
          "options": [
            "Careful you are!",
            "How careful!",
            "You are careful.",
            "Be careful!"
          ],
          "answer": 3,
          "explanation": "祈使句用來表達命令、請求或提醒,句首直接用動詞原形。提醒對方注意時,應用 be 的原形加上形容詞,構成「Be careful!」。其他選項語序錯誤,或只是單純的直述句,無法表達即時的提醒與警告語氣。"
        },
        {
          "stem": "完成句子:「_______ delicious this soup is! I want another bowl.」",
          "options": [
            "What a",
            "How",
            "What",
            "How a"
          ],
          "answer": 1,
          "explanation": "感嘆句中,若強調的核心是形容詞(delicious),而非名詞,應使用「How + 形容詞 + 主詞 + 動詞」的結構。此處 delicious 為形容詞,故用 how,句意為「這湯真好喝!」使用 what 時後面須接名詞片語,不符此句結構;how 之後也不加冠詞。",
          "trap": "what 後接名詞、how 後接形容詞或副詞;此處主詞後直接接形容詞,核心是形容詞而非名詞,且 how 之後不加冠詞。"
        },
        {
          "stem": "下列哪一個祈使句是「否定的請求」,且文法完全正確?",
          "options": [
            "Don't make noise in the library, please.",
            "Not make noise in the library.",
            "Doesn't make noise in the library.",
            "No make noise in the library."
          ],
          "answer": 0,
          "explanation": "否定祈使句的結構是「Don't + 動詞原形」,主詞 you 省略,且不論人稱皆用 don't,不用 doesn't。加上 please 可讓請求更有禮貌。其餘選項或缺助動詞、或用錯助動詞形式、或直接以 no 開頭,皆不符否定祈使句的正確用法。",
          "trap": "祈使句省略主詞,否定一律用 don't,不會因第三人稱而變 doesn't;no 不能直接加動詞。"
        },
        {
          "stem": "重組並判斷:把 'a / what / student / hard-working / he / is' 組成正確的感嘆句,正確的是哪一句?",
          "options": [
            "How a hard-working student he is!",
            "What hard-working student he is!",
            "How hard-working student he is!",
            "What a hard-working student he is!"
          ],
          "answer": 3,
          "explanation": "當感嘆的核心是「單數可數名詞片語」時,結構為「What + a/an + 形容詞 + 單數名詞 + 主詞 + 動詞」。此處 student 為單數可數名詞,前面需有冠詞 a,並用 what 引導,故為「What a hard-working student he is!」。用 how 時後面不接名詞,且不加冠詞,故其餘皆錯。",
          "trap": "核心是單數可數名詞時用 what 且不可漏掉冠詞 a;how 後不接名詞、不加冠詞,兩者結構別混用。"
        }
      ]
    },
    {
      "id": "reportedspeech",
      "name": "直接與間接引述 (Reported Speech)",
      "week": "下學期 期中前",
      "notes": [
        {
          "h": "陳述句的間接引述",
          "points": [
            "當引述動詞 (said, told) 為過去式時,從句時態必須「後移」一格:現在式→過去式 (is→was)、現在進行→過去進行 (am doing→was doing)、現在完成與過去式→過去完成 (have done / did→had done)、will→would、can→could、may→might、must→had to。",
            "代名詞要隨「新說話者的立場」調整:第一人稱 I/we/my/our 通常變成 he/she/they/his/her/their,第二人稱 you 依文意指向實際的人;受詞代名詞 me→him/her 也同步轉換。",
            "時間與地點副詞要轉換以符合「事後轉述」的時空:now→then、today→that day、tonight→that night、tomorrow→the next day / the following day、yesterday→the day before、ago→before、here→there、this→that、these→those。",
            "若引述的是「不變的真理或現在仍成立的事實」,時態可不後移 (The teacher said the earth is round.);這是會考常設的例外陷阱。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"26\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">直述句轉間接引述</text><rect x=\"20\" y=\"42\" width=\"320\" height=\"34\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"30\" y=\"63\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">He said: \"I am tired.\"</text><line x1=\"180\" y1=\"80\" x2=\"180\" y2=\"108\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"180,114 175,104 185,104\" fill=\"#c9755c\"/><rect x=\"20\" y=\"118\" width=\"320\" height=\"34\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"30\" y=\"139\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">He said he was tired.</text><circle cx=\"168\" cy=\"131\" r=\"15\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"180\" y=\"176\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">am→was 時態後移</text></svg>",
          "caption": "引述動詞為過去式時,從句時態後移一格、代名詞與時空副詞隨之調整。",
          "trap": "⚠ 別忘了「同步」轉換三件事:時態、代名詞、時間地點副詞,三者常一起考;另外「永恆真理」時態可不後移,易被誤判為錯。"
        },
        {
          "h": "問句與祈使句的間接引述",
          "points": [
            "是非問句 (Yes/No question) 轉間接:用 if 或 whether 引導,並把「助動詞+主詞」的倒裝語序「還原成直述語序」(主詞+動詞),且時態一樣後移。例:\"Are you OK?\" → She asked if I was OK.",
            "wh- 問句轉間接:保留疑問詞 (what/where/when/why/how) 當連接詞,但其後語序改為「直述語序」,不可再倒裝、不可再加 do/does/did。例:\"Where does she live?\" → He asked where she lived.",
            "祈使句轉間接:用 tell/ask/order + 受詞 + to + 原形動詞 (told me to wait);否定祈使句用 not to V (asked me not to be late);請求語氣常用 ask,命令語氣常用 tell/order。",
            "引述問句時引述動詞改用 ask (不可用 say);間接問句句尾用句點而非問號,這是標點常見陷阱。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">問句轉間接:語序還原</text><rect x=\"20\" y=\"38\" width=\"320\" height=\"32\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"30\" y=\"58\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">\"Are you OK?\" (倒裝)</text><line x1=\"180\" y1=\"72\" x2=\"180\" y2=\"96\" stroke=\"#5aa874\" stroke-width=\"2\"/><polygon points=\"180,102 175,92 185,92\" fill=\"#5aa874\"/><rect x=\"20\" y=\"106\" width=\"320\" height=\"32\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"30\" y=\"126\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">asked if I was OK.</text><text x=\"30\" y=\"160\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\">用 if/whether,還原直述語序</text><text x=\"30\" y=\"178\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">句尾用句點不用問號</text></svg>",
          "caption": "問句要還原成直述語序、是非題用 if/whether、祈使句用 tell/ask sb (not) to V。",
          "trap": "⚠ 間接問句最常錯在「沒還原語序」或「多留了 do/does/did」;且引述問句要用 ask、句尾用句點,別保留問號或倒裝。"
        },
        {
          "h": "say 與 tell 的用法區別 say vs. tell",
          "points": [
            "say 後面「不直接」接聽話的人,要提到人時須加 to,例如 He said to me that...;tell 後面則「一定」直接接受詞,也就是聽話的人,例如 He told me that...。",
            "因此間接引述常見兩種結構:said (that)... 與 told + 人 + (that)...,例如 She said that she was busy. 與 She told us that she was busy.,意思相近但結構不同。",
            "命令或請求的轉述固定用 tell 或 ask + 人 + to V,不用 say,例如 The teacher told us to be quiet.,這裡若改用 said 就是錯的。"
          ],
          "formula": "say (to 人) + that 子句;tell + 人 + that 子句 / tell + 人 + to V",
          "trap": "⚠ 高頻錯誤:He told that he was tired.(tell 後漏接人)與 He said me that...(say 後直接接人)都是錯的;正確要寫成 He said (that)... 或 He told me (that)...。"
        },
        {
          "h": "情態助動詞的後移與不變 modals shift",
          "points": [
            "會後移的情態助動詞有 will→would、can→could、may→might、must(表義務)→had to,例如 \"I will help.\" 轉述成 He said he would help.。",
            "本身已是過去形或語氣助動詞的通常不變,例如 would、could、might、should、ought to、used to 維持原樣,如 \"I could swim.\" 轉述成 She said she could swim.。",
            "表「推測、一定是」的 must 在間接引述中常保留不變,例如 \"He must be rich.\" 轉述成 She said he must be rich.,因為它不是表義務。"
          ],
          "formula": "will→would, can→could, may→might, must(義務)→had to",
          "trap": "⚠ 易錯點:把 must 一律改成 had to;但只有表「義務、必須做」的 must 才變 had to,表「推測、一定是」的 must 不變,而 would、could、might、should 本身也不再後移。"
        },
        {
          "h": "間接引述語序還原 word order",
          "points": [
            "轉述疑問句最容易錯的是語序:直接問句的倒裝(助動詞在主詞前)必須還原成「主詞+動詞」的直述語序,例如 \"Where is she?\" 轉述成 He asked where she was.,不是 where was she。",
            "wh- 間接問句不可再加 do、does、did,例如 \"What do you want?\" 轉述成 She asked what I wanted.,助動詞 do 消失、動詞依時態後移為 wanted。",
            "間接問句整句其實是直述句,句尾要用句點不用問號,例如 He asked me where I lived. 以句點結尾。"
          ],
          "formula": "ask + (人) + 疑問詞/if/whether + 主詞 + 動詞(直述語序)",
          "trap": "⚠ 兩大語序與標點陷阱:間接問句誤保留倒裝(誤寫 He asked where was she.)、句尾誤用問號;正確要還原成 where she was 並以句點結尾。"
        }
      ],
      "quiz": [
        {
          "stem": "Tom said to me yesterday, \"I will finish the report tomorrow.\" → Tom told me yesterday that he ____ the report ____.",
          "options": [
            "would finish / the next day",
            "would finish / tomorrow",
            "will finish / the next day",
            "will finish / that day"
          ],
          "answer": 0,
          "explanation": "引述動詞 told 為過去式,will→would 時態後移;說話時間是 yesterday,所以原句的 tomorrow 要轉為 the next day(隔天)。故「would finish / the next day」正確。",
          "trap": "⚠ 多數人記得 will→would,卻忘了 tomorrow 也要隨時空轉換成 the next day;若 tomorrow 不變則時間基準錯亂。"
        },
        {
          "stem": "Choose the correct reported form: She said, \"I have already eaten lunch here.\"",
          "options": [
            "She said she has already eaten lunch here.",
            "She said she had already ate lunch there.",
            "She said she had already eaten lunch there.",
            "She said she already ate lunch here."
          ],
          "answer": 2,
          "explanation": "have eaten(現在完成)後移為 had eaten(過去完成),分詞 eaten 不變;here→there。故「had already eaten … there」正確。用 had ate 者誤用過去式而非分詞;未後移仍作 has eaten 者錯;既未後移又用 already ate 且保留 here 者亦錯。",
          "trap": "⚠ had 之後仍接過去分詞 eaten,不可寫成 had ate;同時 here 必須轉成 there。"
        },
        {
          "stem": "\"Did you see my keys this morning?\" he asked her. → He asked her ____.",
          "options": [
            "if she saw his keys that morning",
            "if she had seen his keys that morning",
            "did she see his keys that morning",
            "whether she had seen my keys this morning"
          ],
          "answer": 1,
          "explanation": "是非問句用 if 引導並還原語序;did see→had seen(過去完成);my→his、this morning→that morning。故「if she had seen his keys that morning」正確。保留倒裝 did she see 者錯;僅作 saw 而未到位過去完成者錯;未把 my→his、this morning→that morning 者錯。",
          "trap": "⚠ 過去式問句 Did you see 轉間接時動詞要後移成 had seen,且去掉 did、還原成 she had seen 的直述語序。"
        },
        {
          "stem": "\"Where are you going now?\" my mother asked me. → My mother asked me where ____.",
          "options": [
            "I was going then",
            "was I going then",
            "I am going now",
            "I was going now"
          ],
          "answer": 0,
          "explanation": "wh- 問句保留 where,語序還原為「主詞+動詞」I was going(不可倒裝);are→was 後移,now→then。故「I was going then」正確;保留倒裝 was I going、或 now 未轉為 then 者皆錯。",
          "trap": "⚠ 最常見錯誤是保留倒裝 was I going;間接問句一律用直述語序,且 now 要改成 then。"
        },
        {
          "stem": "\"Don't touch the wet paint!\" the worker warned us. → The worker warned us ____.",
          "options": [
            "don't touch the wet paint",
            "to not touch the wet paint",
            "not to touch the wet paint",
            "that we didn't touch the wet paint"
          ],
          "answer": 2,
          "explanation": "否定祈使句轉間接用 not to + 原形動詞:warned us not to touch。故「not to touch the wet paint」正確。to not touch 的語序不自然;保留原本 don't touch 者未轉換;用 that we didn't touch 的結構用法錯誤。",
          "trap": "⚠ 否定祈使句的 not 放在 to 之前(not to V),不是 to not V;且不可保留原本的 Don't。"
        },
        {
          "stem": "Which sentence is grammatically correct?",
          "options": [
            "He said me that he was busy.",
            "He told to me that he was busy.",
            "He said me he is busy.",
            "He told me that he was busy."
          ],
          "answer": 3,
          "explanation": "tell 後直接接受詞(tell me),say 不直接接人(需 say to me)。故「He told me that he was busy.」正確;said me、told to me 皆違反受詞規則;said me he is busy 除受詞錯外還未後移。",
          "trap": "⚠ say 與 tell 的受詞規則相反:tell sb / say to sb。記成 said me 或 told to me 都是典型錯誤。"
        },
        {
          "stem": "\"I bought this car two years ago,\" he said. → He said he ____ that car two years ____.",
          "options": [
            "bought / ago",
            "had bought / before",
            "has bought / before",
            "had bought / ago"
          ],
          "answer": 1,
          "explanation": "過去式 bought→had bought(過去完成);ago 在間接引述中轉為 before;this→that。故「had bought / before」正確;僅作 bought 或 has bought 者時態不對,ago 未改成 before 者亦錯。",
          "trap": "⚠ ago 是以「說話當下」為基準的詞,轉述時必須改成 before;許多人只改時態卻漏改 ago。"
        },
        {
          "stem": "\"Can you help me move these boxes?\" she asked him. → She asked him ____.",
          "options": [
            "if he can help her move those boxes",
            "could he help her move those boxes",
            "if he could help her move those boxes",
            "whether he could help me move these boxes"
          ],
          "answer": 2,
          "explanation": "can→could,還原語序,me→her、these→those;這裡 Can you...? 是請求,用 if + 直述語序。故「if he could help her move those boxes」正確。保留倒裝 could he help 者錯;僅作 can 而未後移者錯;未把 me→her、these→those 者錯。",
          "trap": "⚠ can 要後移為 could,且代名詞 me→her、指示詞 these→those 須一併轉換,語序也要還原。"
        },
        {
          "stem": "The teacher said, \"Water boils at 100°C.\" Which is the BEST reported form?",
          "options": [
            "The teacher said water would boil at 100°C.",
            "The teacher said water boiled at 100°C.",
            "The teacher said water had boiled at 100°C.",
            "The teacher said water boils at 100°C."
          ],
          "answer": 3,
          "explanation": "科學真理/恆常事實在間接引述中時態可不後移,故保留 boils 最佳,即「water boils at 100°C」。其餘把現在式改成 boiled、had boiled、would boil 反而暗示「現在不成立」。",
          "trap": "⚠ 遇到不變的真理(科學定律、恆常習慣)時態可保持不變;機械式後移成 boiled 反而是陷阱選項。"
        },
        {
          "stem": "Identify the sentence with NO error in reported speech.",
          "options": [
            "She asked me what time it was.",
            "She asked me what time is it.",
            "She asked me what time was it.",
            "She asked what time is it then."
          ],
          "answer": 0,
          "explanation": "間接 wh- 問句須用直述語序且時態後移:what time it was。故「She asked me what time it was.」正確;保留倒裝 what time is it / what time was it、或未後移 is it then 者皆錯。",
          "trap": "⚠ 「what time it was」才正確;保留 is it / was it 的倒裝是最常見的錯誤。"
        },
        {
          "stem": "\"You must hand in your homework today,\" the teacher told us. → The teacher told us that we ____ hand in our homework ____.",
          "options": [
            "must / today",
            "had to / that day",
            "must / that day",
            "had to / today"
          ],
          "answer": 1,
          "explanation": "表「義務」的 must 後移為 had to;your→our;today→that day。故「had to / that day」正確;若 must 未變 had to、或 today 未變 that day 者皆錯。",
          "trap": "⚠ must 表義務時轉述要變 had to,且 today→that day;若 must 不變或 today 不變都算錯。"
        },
        {
          "stem": "\"Why didn't you call me last night?\" she asked him. → She asked him why ____ the night before.",
          "options": [
            "didn't he call her",
            "hadn't he called her",
            "he didn't call her",
            "he hadn't called her"
          ],
          "answer": 3,
          "explanation": "wh- 問句保留 why、語序還原;否定的過去式 didn't call→hadn't called(過去完成);me→her;last night→the night before。故「he hadn't called her」正確;保留倒裝 didn't he call / hadn't he called 者錯;僅作 didn't call 而未到位過去完成者錯。",
          "trap": "⚠ 否定問句後移時 didn't call 要變 hadn't called,並去掉助動詞 did、還原成 he hadn't called 的直述語序。"
        },
        {
          "stem": "Which is the correct DIRECT speech for: He asked me whether I had ever been to Japan?",
          "options": [
            "He asked me, \"Have you ever been to Japan?\"",
            "He asked me, \"Had you ever been to Japan?\"",
            "He asked me, \"Did you ever go to Japan?\"",
            "He asked me, \"Have I ever been to Japan?\""
          ],
          "answer": 0,
          "explanation": "反向還原:had been 來自原句的現在完成 have been;whether 對應是非問句故還原倒裝 Have you...?;I→you。故「Have you ever been to Japan?」正確;還原成 Had you 或 Did you go 者時態不對;用 Have I 者代名詞未還原。",
          "trap": "⚠ 間接轉直接時 had been 的「原形」是 have been(現在完成),而非過去完成;且 I 要還原成第二人稱 you。"
        },
        {
          "stem": "\"Let's not waste any more time,\" Ben suggested. → Ben suggested that ____.",
          "options": [
            "let's not waste any more time",
            "not to waste any more time",
            "they should not waste any more time",
            "they shouldn't to waste any more time"
          ],
          "answer": 2,
          "explanation": "Let's(提議)轉間接常用 suggested (that) + 主詞 + (should) + 原形;否定為 should not waste。故「they should not waste any more time」正確;用 not to waste 或 shouldn't to waste 者文法錯誤,保留 let's not waste 者未轉換。",
          "trap": "⚠ Let's 的間接引述不可用 to V,而用 suggested that they (should) + 原形動詞;否定放在 should not 後。"
        },
        {
          "stem": "\"I am meeting my friends here this evening,\" Anna said. → Anna said she ____ her friends ____ that evening.",
          "options": [
            "is meeting / here",
            "was meeting / there",
            "had met / there",
            "was meeting / here"
          ],
          "answer": 1,
          "explanation": "現在進行 am meeting→was meeting;here→there;this evening→that evening。故「was meeting / there」同時正確處理時態與地點副詞;僅作 is meeting/here 未後移、had met/there 時態誤用、或 was meeting/here 漏改地點者皆錯。",
          "trap": "⚠ 現在進行式後移成過去進行式(was meeting),同時 here→there;只改一個常導致錯選。"
        },
        {
          "stem": "Find the INCORRECT reported sentence.",
          "options": [
            "He told me he would come the next day.",
            "She asked if I could swim.",
            "They said that they have finished the project.",
            "He ordered the soldiers to stop."
          ],
          "answer": 2,
          "explanation": "「They said that they have finished the project.」的引述動詞 said 為過去式,從句 have finished 應後移為 had finished,故此句錯誤;其餘 would come the next day、asked if I could swim、ordered the soldiers to stop 皆正確。",
          "trap": "⚠ 主句為過去式 said 時,從句現在完成 have finished 必須後移成 had finished,保留 have 即為錯誤。"
        },
        {
          "stem": "\"How long have you been waiting?\" the clerk asked us. → The clerk asked us how long ____.",
          "options": [
            "we had been waiting",
            "have we been waiting",
            "had we been waiting",
            "we have been waiting"
          ],
          "answer": 0,
          "explanation": "wh- 問句保留 how long、語序還原;現在完成進行 have been waiting→had been waiting。故「we had been waiting」正確;保留倒裝 have we / had we been waiting、或未後移 we have been waiting 者皆錯。",
          "trap": "⚠ 現在完成進行式後移為 had been waiting,且須用直述語序 we had...,不可保留 had we 倒裝。"
        },
        {
          "stem": "\"Please don't tell anyone my secret,\" she begged me. → She begged me ____ anyone her secret.",
          "options": [
            "to not tell",
            "not telling",
            "don't tell",
            "not to tell"
          ],
          "answer": 3,
          "explanation": "否定請求轉間接用 beg/ask sb not to V:not to tell;my→her。故「not to tell」正確;to not tell 語序錯;保留 don't tell 者未轉換;not telling 用法錯誤。",
          "trap": "⚠ 否定的 not 必須緊接在 to 前(not to tell),且 Please 在間接引述中省略、my→her。"
        },
        {
          "stem": "\"We will have left before you arrive,\" they said. → They said they ____ before I ____.",
          "options": [
            "will have left / arrive",
            "would have left / arrived",
            "had left / arrived",
            "would have left / arrive"
          ],
          "answer": 1,
          "explanation": "未來完成 will have left→would have left;時間從句 arrive→arrived 配合過去基準;you→I。故「would have left / arrived」兩動詞都正確後移;保留 will have left/arrive、had left/arrived 時態誤用、或 would have left/arrive 漏改時間從句者皆錯。",
          "trap": "⚠ 未來完成式 will have left 後移為 would have left,連帶時間從句的 arrive 也要變 arrived 才一致。"
        },
        {
          "stem": "Which sentence correctly reports: \"Don't be so noisy, children!\"?",
          "options": [
            "She told the children not to be so noisy.",
            "She told the children don't be so noisy.",
            "She said the children not to be so noisy.",
            "She told to the children not be so noisy."
          ],
          "answer": 0,
          "explanation": "否定祈使句:tell sb not to V → told the children not to be so noisy。故「told the children not to be so noisy」正確;保留 don't be 者未轉換;用 said sb 者受詞用法錯誤;寫 told to the children 又漏 to 者結構錯誤。",
          "trap": "⚠ 祈使句引述用 tell sb (not) to V,動詞用 tell 不用 say;且 not to be,不可寫 not be。"
        },
        {
          "stem": "\"I saw him here yesterday,\" the witness said. → The witness said ____.",
          "options": [
            "she saw him there the day before",
            "she had seen him here yesterday",
            "she had seen him there the day before",
            "she saw him there yesterday"
          ],
          "answer": 2,
          "explanation": "saw→had seen;here→there;yesterday→the day before。故「she had seen him there the day before」三項全部正確;其餘各漏一項(未後移時態、未改 here 或未改 yesterday)。",
          "trap": "⚠ 三項要同時轉:時態 had seen、地點 there、時間 the day before;漏改 yesterday 或 here 都是常見錯。"
        },
        {
          "stem": "\"Has the train already left?\" he wondered. → He wondered ____.",
          "options": [
            "if had the train already left",
            "whether had the train already left",
            "if the train has already left",
            "whether the train had already left"
          ],
          "answer": 3,
          "explanation": "是非問句用 whether/if + 直述語序;Has...left→had...left(後移)。故「whether the train had already left」正確;保留倒裝 if had the train / whether had the train 者錯;未後移 if the train has already left 者亦錯。",
          "trap": "⚠ if/whether 之後一律用直述語序(the train had left),不可再倒裝成 had the train。"
        },
        {
          "stem": "Choose the BEST reported speech: \"You should see a doctor,\" my friend advised me.",
          "options": [
            "My friend advised me that I should see a doctor.",
            "My friend advised me to see a doctor.",
            "My friend advised me seeing a doctor.",
            "Both A and B are acceptable."
          ],
          "answer": 3,
          "explanation": "advise 既可接 that 子句(advised that I should see),也可接 to V(advised me to see),兩者皆通順正確;而 advised me seeing 用法錯誤。因兩種正確結構並存,故「兩種結構皆可接受」為最佳答案。",
          "trap": "⚠ advise 有兩種正確結構:advise sb to V 與 advise that...;只選一個會漏掉同樣正確的另一個,故選「兩者皆可」。"
        },
        {
          "stem": "\"I'll call you when I get home tonight,\" Dad said. → Dad said he ____ me when he ____ home that night.",
          "options": [
            "will call / gets",
            "would call / got",
            "would call / gets",
            "will call / got"
          ],
          "answer": 1,
          "explanation": "will call→would call;時間從句 get→got 配合過去基準;tonight→that night。故「would call / got」主從子句時態一致且 tonight 正確轉換;保留 will call/gets、或 got 與 gets 不一致者皆錯。",
          "trap": "⚠ 主句 would call 後移後,when 引導的時間從句 get 也要一起變 got,且 tonight→that night。"
        },
        {
          "stem": "Which transformation of a wh- question is CORRECT?",
          "options": [
            "\"What do you want?\" → He asked what I wanted.",
            "\"What do you want?\" → He asked what did I want.",
            "\"What do you want?\" → He asked what do I want.",
            "\"What do you want?\" → He asked what wanted I."
          ],
          "answer": 0,
          "explanation": "wh- 間接問句去掉助動詞 do、語序還原為 I wanted、時態後移 want→wanted。故「He asked what I wanted.」正確;保留 did want、保留 do want、或語序錯誤 wanted I 者皆錯。",
          "trap": "⚠ 含 do/does/did 的問句轉間接時要「消掉助動詞」並把時態併入主動詞(wanted),不可保留 did/do。"
        },
        {
          "stem": "My brother said, \"I am tired.\" → My brother said that he ____ tired.",
          "options": [
            "is",
            "was",
            "were",
            "had been"
          ],
          "answer": 1,
          "explanation": "引述動詞 said 為過去式,從句時態必須後移一格:現在式 am 後移為 was。主詞 he 是單數,不能用 were;此處只需單純後移,不必用到過去完成 had been。故「was」正確。"
        },
        {
          "stem": "\"Do you like this song?\" Kevin asked me. → Kevin asked me ____.",
          "options": [
            "if I liked that song",
            "if I like this song",
            "do I like that song",
            "whether I like that song"
          ],
          "answer": 0,
          "explanation": "是非問句轉間接引述用 if 或 whether 引導(兩者等義),並把倒裝還原成「主詞+動詞」的直述語序、去掉助動詞 do;動詞 like 隨引述動詞 asked 後移為 liked,指示詞 this 也轉為 that。正解的關鍵在於同時完成「like→liked」與「語序還原」:凡未後移仍作 like 者,不論用 if 或 whether 皆錯;保留 do 之倒裝者亦錯。故只做到後移且語序正確的「if I liked that song」正確。",
          "trap": "⚠ 容易只做一半:記得刪掉助動詞 do、還原語序,卻忘了把 like 後移為 liked;whether 與 if 等義,不是判斷對錯的關鍵,時態後移才是。"
        },
        {
          "stem": "Last Monday Sara said, \"I met your sister here yesterday.\" → Last Monday Sara said that she ____ my sister ____ ____.",
          "options": [
            "had met / here / the day before",
            "met / there / yesterday",
            "had met / there / yesterday",
            "had met / there / the day before"
          ],
          "answer": 3,
          "explanation": "多步驟轉換:過去式 met 後移為過去完成 had met;地方副詞 here 轉為 there;時間副詞 yesterday 以「說話當下」為基準,轉述時須改為 the day before(前一天)。三者都到位才正確,故「had met / there / the day before」正確。只後移動詞卻保留 here 或 yesterday、或動詞未到過去完成者皆不完整。",
          "trap": "⚠ 三處都要改:here→there、yesterday→the day before(不是 the next day),動詞還要從 met 後移為 had met,漏改任何一項都算錯。"
        },
        {
          "stem": "\"Please close the window,\" Mr. Lin said to the students. → Mr. Lin ____ the students ____ the window.",
          "options": [
            "said / to close",
            "told / to close",
            "told / close",
            "asked / closing"
          ],
          "answer": 1,
          "explanation": "祈使句轉間接用「tell sb to + 原形動詞」,Please 省略。tell 後可直接接受詞(the students),say 不可直接接人。故「told / to close」正確。用 said 直接接受詞違反 say 的用法;缺少 to 的 told / close 結構錯誤;用 closing 的動詞形式也錯。",
          "trap": "⚠ 兩個重點:引述祈使句要用 tell 不用 say(say 不直接接人),且動詞用「to + 原形」,別漏掉 to 或誤用 -ing。"
        }
      ]
    },
    {
      "id": "agreement",
      "name": "主詞動詞一致 (Subject-Verb Agreement)",
      "week": "下學期 期中前",
      "notes": [
        {
          "h": "基本一致與插入修飾語",
          "points": [
            "第三人稱單數主詞搭配單數動詞(動詞加 -s/-es,如 He goes);複數主詞與 I/you 搭配原形動詞(They go)。be 動詞則是 is/was 對單數、are/were 對複數。",
            "主詞與動詞之間插入的介系詞片語或子句只是修飾語,不影響動詞單複數;判斷時要先剝掉這些片語找出真正主詞。例:The box of apples IS heavy.(真主詞是 box,非 apples)。",
            "「one of the + 複數名詞」結構,真主詞是 one,動詞用單數:One of the books is missing.;但「one of those who」中 who 引導的子句動詞要配前面的複數名詞。",
            "there is/there are 由 be 後面的「真主詞」決定:there is + 單數/不可數(There is some water),there are + 複數(There are two pens);與多個並列主詞時,動詞通常配最靠近的第一個。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\">\n\n<text x=\"14\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">One of the students ___ here.</text>\n<rect x=\"20\" y=\"46\" width=\"78\" height=\"26\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\"/>\n<text x=\"59\" y=\"64\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">One</text>\n<text x=\"110\" y=\"64\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">of the students</text>\n<path d=\"M59 74 L59 100\" stroke=\"#c9755c\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#a1)\"/>\n<defs><marker id=\"a1\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"6\" orient=\"auto\"><path d=\"M1 1 L4 6 L7 1\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"1.5\"/></marker></defs>\n<rect x=\"30\" y=\"104\" width=\"60\" height=\"26\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\"/>\n<text x=\"60\" y=\"122\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">is</text>\n<text x=\"110\" y=\"122\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">of the students</text>\n<text x=\"110\" y=\"140\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">是修飾語</text>\n<text x=\"14\" y=\"170\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">真主詞是 One,動詞用單數</text>\n</svg>",
          "caption": "插入的 of the students 是修飾語,真主詞 One 用單數動詞 is。",
          "trap": "⚠ 看到動詞前緊鄰的複數名詞(students、apples)就直接用複數動詞;正確做法是先找出真主詞,介系詞片語裡的名詞不能當主詞。"
        },
        {
          "h": "特殊主詞與就近原則",
          "points": [
            "each / every / either / neither 當主詞或修飾單數名詞時,一律接單數動詞:Each student has a book.;Every boy and girl is here.(every 連接兩名詞仍視為單數)。",
            "both / a few / many / several 接複數動詞;some / all / most / none 等則看 of 後面的名詞:Some of the milk is gone.(不可數->單數)vs Some of the apples are gone.(複數->複數)。",
            "not only A but also B、either A or B、neither A nor B 採「就近原則」:動詞配最靠近的 B。Neither the teacher nor the students ARE late.;Either the boys or the girl IS lying.",
            "集合名詞 family / team / class / audience 視為整體時用單數,強調成員個別動作時可用複數(英式較常見):My family is large. / My family are arguing.;不可數名詞(news、money 作金額時)用單數:The news is good."
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\">\n\n<text x=\"14\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">Either A or B ___ right.</text>\n<rect x=\"24\" y=\"48\" width=\"40\" height=\"26\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#c9755c\"/>\n<text x=\"44\" y=\"66\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">A</text>\n<text x=\"74\" y=\"66\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">or</text>\n<rect x=\"104\" y=\"48\" width=\"40\" height=\"26\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#5aa874\"/>\n<text x=\"124\" y=\"66\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">B</text>\n<path d=\"M44 76 C70 100 110 100 124 80\" stroke=\"#f0a52e\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#a2)\"/>\n<defs><marker id=\"a2\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"6\" orient=\"auto\"><path d=\"M1 1 L4 6 L7 1\" fill=\"none\" stroke=\"#f0a52e\" stroke-width=\"1.5\"/></marker></defs>\n<text x=\"150\" y=\"66\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">就近原則</text>\n<text x=\"14\" y=\"120\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">動詞配最靠近的 B</text>\n<rect x=\"14\" y=\"134\" width=\"120\" height=\"26\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#5aa874\"/>\n<text x=\"74\" y=\"152\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">B 單數 -&gt; is</text>\n<text x=\"150\" y=\"152\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">B 複數 -&gt; are</text>\n</svg>",
          "caption": "either A or B 的動詞看最靠近的 B 決定單複數(就近原則)。",
          "trap": "⚠ 把 either A or B / neither nor 一律當複數,或用「前面那個」決定動詞;會考慣把單數放後面、複數放前面誘導,務必只看緊鄰動詞的 B。"
        },
        {
          "h": "and 連接的並列主詞與一致",
          "points": [
            "兩個名詞用 and 連接當主詞,視為複數,動詞用複數,例如 Tom and Jerry are good friends.",
            "但若 and 連接的是『同一個人事物或視為一體』的概念,動詞用單數,例如 Bread and butter is my breakfast.(視為一道餐點)。",
            "動名詞片語當主詞時,視為單數,例如 Reading books is fun."
          ],
          "trap": "A and B 通常配複數動詞(are/were);但動名詞當主詞(Swimming is...)視為單數,別因為句子看起來長就配錯動詞。"
        },
        {
          "h": "時間、金錢、距離當主詞的一致",
          "points": [
            "表示一段時間、一筆金錢、一段距離的數量,雖然形式是複數,但視為『一個整體』,動詞用單數,例如 Ten years is a long time.",
            "金額作整體時用單數,例如 Five hundred dollars is enough.",
            "距離作整體時用單數,例如 Ten kilometers is too far to walk."
          ],
          "trap": "Two hours 雖有複數 s,當『一段時間整體』時動詞用單數:Two hours is enough,不是 are enough;此為會考高頻陷阱。"
        },
        {
          "h": "a number of / the number of 的一致",
          "points": [
            "a number of 意思是『許多』,後接複數名詞、配複數動詞,例如 A number of students are absent today.",
            "the number of 意思是『…的數目』,真正主詞是 number,配單數動詞,例如 The number of students is increasing.",
            "判斷重點:看真正主詞是『學生們』還是『數目這個概念』。"
          ],
          "formula": "a number of + 複數 + 複數動詞;the number of + 複數 + 單數動詞",
          "trap": "a number of(許多)配複數動詞,the number of(數目)配單數動詞;只差一個冠詞,動詞單複數卻相反,務必看清。"
        }
      ],
      "quiz": [
        {
          "stem": "The basket of fresh strawberries and blueberries ___ on the kitchen table, ready for the welcome party.",
          "options": [
            "are sitting",
            "is sitting",
            "have been sitting",
            "were sitting"
          ],
          "answer": 1,
          "explanation": "真主詞是 The basket(單數),of fresh strawberries and blueberries 只是介系詞片語修飾語,不影響動詞。單數主詞配 is sitting。",
          "trap": "⚠ 看到 strawberries and blueberries 兩個複數名詞就選複數動詞;但它們在 of 片語裡,不是主詞。"
        },
        {
          "stem": "One of the volunteers who ___ at the shelter every weekend ___ won an award for her dedication.",
          "options": [
            "work / has",
            "works / have",
            "work / have",
            "works / has"
          ],
          "answer": 0,
          "explanation": "who 引導的形容詞子句修飾複數先行詞 the volunteers,故子句動詞用 work;主句真主詞是 One,配單數 has。正解 work / has。",
          "trap": "⚠ 兩個動詞都跟 One 配成單數(works/has);但 who 子句的動詞要配 the volunteers(複數),只有主句動詞才跟 One。"
        },
        {
          "stem": "Every desk, chair, and bookshelf in the newly renovated classrooms ___ been carefully cleaned before the inspection.",
          "options": [
            "have",
            "are",
            "were",
            "has"
          ],
          "answer": 3,
          "explanation": "every 連接數個名詞(desk, chair, bookshelf)時整體仍視為單數,動詞用 has been;in the classrooms 為修飾語。",
          "trap": "⚠ 把 desk, chair, and bookshelf 三個並列名詞當複數;但由 every 修飾時一律單數。"
        },
        {
          "stem": "Neither the players nor their coach ___ satisfied with the referee final decision after the match.",
          "options": [
            "are",
            "were",
            "was",
            "have been"
          ],
          "answer": 2,
          "explanation": "neither A nor B 採就近原則,動詞配最靠近的 their coach(單數),用 was。",
          "trap": "⚠ 被前面的 the players(複數)誤導選 are/were;就近原則只看緊鄰動詞的 coach。"
        },
        {
          "stem": "Either the manager or the new interns ___ responsible for locking up the office every night this week.",
          "options": [
            "is",
            "was",
            "has been",
            "are"
          ],
          "answer": 3,
          "explanation": "either A or B 就近原則,動詞配最靠近的 the new interns(複數),用 are。",
          "trap": "⚠ 看到單數 the manager 在前就選 is;但動詞要配後面緊鄰的複數 interns。"
        },
        {
          "stem": "On the agenda for today meeting ___ a budget review, three project updates, and a short Q&A session.",
          "options": [
            "is",
            "are",
            "has",
            "was"
          ],
          "answer": 1,
          "explanation": "此為倒裝句,真主詞是後面並列的 a budget review、three project updates 與 a Q&A session(整體複數),動詞用 are。",
          "trap": "⚠ 被句首單數概念誤導;倒裝句要找動詞後的真主詞,並列三項為複數。"
        },
        {
          "stem": "The committee ___ unable to reach an agreement, so its members ___ still arguing late into the night.",
          "options": [
            "was / are",
            "were / was",
            "was / were",
            "were / are"
          ],
          "answer": 0,
          "explanation": "The committee 作整體視為單數->was;its members 為複數->are(描述成員當下正在爭論)。正解 was / are。",
          "trap": "⚠ 把 committee 與 members 一律當同號;committee 整體單數,但 members 是明確複數。"
        },
        {
          "stem": "Not only the students but also the principal ___ surprised that the science fair ___ been canceled.",
          "options": [
            "was / had",
            "were / have",
            "was / have",
            "were / had"
          ],
          "answer": 0,
          "explanation": "not only A but also B 就近原則,動詞配 the principal(單數)->was;the science fair 為單數->had been。正解 was / had。",
          "trap": "⚠ 被 the students(複數)誤導選 were;就近原則看最靠近的 the principal(單數)。"
        },
        {
          "stem": "Most of the information she gathered ___ useful, but none of the sources ___ been properly cited.",
          "options": [
            "are / has",
            "is / has",
            "is / have",
            "are / have"
          ],
          "answer": 2,
          "explanation": "Most of + 不可數 information -> 單數 is;none of + 複數 the sources 現代用法多配複數 -> have been。正解 is / have。",
          "trap": "⚠ 把 most 與 none 一律當固定單複數;它們由 of 後面的名詞決定。information 不可數用 is,sources 複數用 have。"
        },
        {
          "stem": "A number of passengers ___ complained that the number of available seats ___ far too small for the route.",
          "options": [
            "has / are",
            "has / is",
            "have / are",
            "have / is"
          ],
          "answer": 3,
          "explanation": "「a number of + 複數名詞」意為「許多」,動詞用複數 -> have;「the number of...」指數目本身,主詞是 number(單數)-> is。正解 have / is。",
          "trap": "⚠ 把 a number of 與 the number of 搞反;a number of=許多(複數),the number of=數目(單數)。"
        },
        {
          "stem": "Each of the proposals submitted by the three departments ___ its own strengths, but none ___ entirely free of flaws.",
          "options": [
            "have / are",
            "has / is",
            "has / are",
            "have / is"
          ],
          "answer": 1,
          "explanation": "each of + 複數,動詞用單數 -> has;此處 none 視為 not one,配單數 -> is。正解 has / is。",
          "trap": "⚠ each of the proposals 被複數 proposals 誤導選 have;each 一律配單數。"
        },
        {
          "stem": "Reading novels and writing short stories ___ Maria favorite way to relax after a long, exhausting school day.",
          "options": [
            "were",
            "are",
            "is",
            "have been"
          ],
          "answer": 2,
          "explanation": "由 and 連接的兩個動名詞片語表達單一概念「閱讀與寫作這件休閒事」,且補語 favorite WAY(單數),動詞用單數 is。",
          "trap": "⚠ 看到 Reading...and writing... 就當複數選 are;此處兩活動視為一種放鬆方式(單一概念),補語 way 也是單數。"
        },
        {
          "stem": "Twenty thousand dollars ___ a huge amount for a used car, and five years ___ a long time to pay it off.",
          "options": [
            "is / is",
            "is / are",
            "are / is",
            "are / are"
          ],
          "answer": 0,
          "explanation": "金額(twenty thousand dollars)與時間長度(five years)當作單一整體單位時用單數,故 is / is。",
          "trap": "⚠ 看到 dollars、years 複數形就選 are;表「一筆金額/一段時間」的整體量詞時用單數。"
        },
        {
          "stem": "Every teacher and ___ assistant in the program ___ expected to attend the training workshop without exception.",
          "options": [
            "his or her / are",
            "their / are",
            "their / is",
            "his or her / is"
          ],
          "answer": 3,
          "explanation": "every 連接 teacher 與 assistant 仍視為單數,動詞用 is;單數先行詞代名詞用 his or her。正解 his or her / is。",
          "trap": "⚠ 看到 teacher and assistant 兩者就用 their/are;every 修飾下整體單數,代名詞與動詞都用單數。"
        },
        {
          "stem": "Neither of the two explanations the witness offered ___ convincing enough to change the jury final verdict.",
          "options": [
            "were",
            "was",
            "are",
            "have been"
          ],
          "answer": 1,
          "explanation": "neither of + 複數,正式用法視為單數(not either one),動詞用 was;the witness offered 為修飾子句。",
          "trap": "⚠ neither of the two explanations 被複數誤導選 were;neither of 在正式語法中配單數。"
        },
        {
          "stem": "There ___ a long list of rules and, at the very bottom, ___ several warnings printed in bold red letters.",
          "options": [
            "are / is",
            "was / was",
            "are / are",
            "is / are"
          ],
          "answer": 3,
          "explanation": "第一個真主詞 a long list(單數)-> is;第二個真主詞 several warnings(複數)-> are。正解 is / are。",
          "trap": "⚠ 兩處用同一個 be 動詞;there 句型各自由其後真主詞決定,list 單數、warnings 複數。"
        },
        {
          "stem": "She is one of those employees who ___ always willing to stay late, which ___ why everyone respects her.",
          "options": [
            "are / is",
            "are / are",
            "is / is",
            "is / are"
          ],
          "answer": 0,
          "explanation": "one of those employees who...：who 修飾複數 employees -> are;後句 which 指前述整件事為單數 -> is。正解 are / is。",
          "trap": "⚠ 把 who 子句動詞跟 one 配成單數;「one of those who」中 who 修飾複數 employees,動詞用複數。"
        },
        {
          "stem": "\"The Adventures of Tom Sawyer\" ___ often listed among the classics that every young reader ___ encouraged to explore.",
          "options": [
            "are / is",
            "is / are",
            "is / is",
            "are / are"
          ],
          "answer": 2,
          "explanation": "書名雖含複數字 Adventures,作為單一作品標題用單數 -> is;every young reader 為單數 -> is encouraged。正解 is / is。",
          "trap": "⚠ 書名 Adventures 複數形誤導選 are;書名/作品名視為單一整體用單數。"
        },
        {
          "stem": "About sixty percent of the harvest ___ already been sold, while the rest of the apples ___ stored in the cellar.",
          "options": [
            "have / is",
            "has / are",
            "has / is",
            "have / are"
          ],
          "answer": 1,
          "explanation": "percent / the rest of 由 of 後名詞決定:the harvest 不可數 -> has been;the apples 複數 -> are stored。正解 has / are。",
          "trap": "⚠ 把百分比與 the rest of 一律當複數;harvest 不可數用 has,apples 複數用 are。"
        },
        {
          "stem": "A pair of scissors ___ on the desk, but my new jeans ___ still in the laundry basket waiting to be washed.",
          "options": [
            "are / is",
            "is / is",
            "is / are",
            "are / are"
          ],
          "answer": 2,
          "explanation": "a pair of scissors 真主詞是 pair(單數)-> is;jeans(成對衣物,無 a pair of 時)視為複數 -> are。正解 is / are。",
          "trap": "⚠ scissors、jeans 都有 -s 就一律當複數;a pair of 開頭時主詞是 pair(單數)。"
        },
        {
          "stem": "The famous singer and songwriter ___ donating all of tonight ticket sales, which ___ expected to exceed ten thousand dollars.",
          "options": [
            "is / are",
            "is / is",
            "are / are",
            "are / is"
          ],
          "answer": 0,
          "explanation": "沒有重複冠詞,the singer and songwriter 指同一人,動詞單數 -> is;ticket sales(複數)-> are expected。正解 is / are。",
          "trap": "⚠ singer and songwriter 看似兩人選 are;無第二個 the 表同一人,用單數。"
        },
        {
          "stem": "The news about the flooded villages ___ heartbreaking, and the statistics the reporter cited ___ even more alarming.",
          "options": [
            "are / are",
            "are / is",
            "is / is",
            "is / are"
          ],
          "answer": 3,
          "explanation": "news 雖有 -s 為不可數,單數 -> is;此處 statistics 指「具體統計數據」為複數 -> are。正解 is / are。",
          "trap": "⚠ 把 news 當複數、statistics 一律當單數;news 永遠單數,statistics 指數據時為複數。"
        },
        {
          "stem": "Both the science museum and the art gallery downtown ___ free admission on the first Sunday of every month.",
          "options": [
            "offers",
            "is offering",
            "offer",
            "has offered"
          ],
          "answer": 2,
          "explanation": "both A and B 一律配複數動詞,主詞為兩個地點 -> offer。",
          "trap": "⚠ 被緊鄰的單數 the art gallery 誤導選 offers;both...and... 不適用就近原則,固定複數。"
        },
        {
          "stem": "A lot of patience ___ required for this job, and plenty of opportunities ___ available for those who stay calm.",
          "options": [
            "are / is",
            "is / are",
            "is / is",
            "are / are"
          ],
          "answer": 1,
          "explanation": "a lot of / plenty of 由後面名詞決定:patience 不可數 -> is;opportunities 複數 -> are。正解 is / are。",
          "trap": "⚠ a lot of、plenty of 看似一律複數;它們隨後面名詞變化,patience 不可數用 is。"
        },
        {
          "stem": "Everybody who attended the seminar ___ given a certificate, and each of them ___ asked to fill out a feedback form.",
          "options": [
            "were / were",
            "was / were",
            "were / was",
            "was / was"
          ],
          "answer": 3,
          "explanation": "everybody 為不定代名詞單數 -> was given;each of them 中 each 配單數 -> was asked。正解 was / was。",
          "trap": "⚠ everybody、each of them 含複數概念誤選 were;不定代名詞 everybody 與 each 都配單數動詞。"
        },
        {
          "stem": "My sister ___ to school by bus every morning.",
          "options": [
            "go",
            "are going",
            "goes",
            "going"
          ],
          "answer": 2,
          "explanation": "主詞「My sister」是第三人稱單數，一般現在式的動詞要加 -s，所以用「goes」。原形「go」只用於複數或第一、二人稱主詞；「are going」的 be 動詞與單數主詞不搭配（單數應搭 is）；「going」缺少助動詞，不能單獨當句子的動詞。"
        },
        {
          "stem": "Each of the boys in the club ___ a school uniform on Fridays.",
          "options": [
            "wear",
            "wears",
            "are wearing",
            "wearing"
          ],
          "answer": 1,
          "explanation": "真正的主詞是「Each」，Each 恆為單數，動詞用第三人稱單數形「wears」。中間的「of the boys」只是修飾語，不影響動詞的單複數判斷。原形「wear」用於複數主詞；「are wearing」誤把主詞當複數；「wearing」缺少助動詞不能當動詞。",
          "trap": "看到緊鄰的 boys（複數）就選複數動詞，但真正主詞是恆為單數的 Each。"
        },
        {
          "stem": "Neither the teacher nor the students ___ sure about the new class schedule.",
          "options": [
            "is",
            "are",
            "was",
            "has been"
          ],
          "answer": 1,
          "explanation": "neither...nor 連接兩個主詞時，動詞依「就近原則」與較靠近的主詞一致。較近的是複數的「the students」，且全句為一般現在式陳述事實，故用「are」。「is」是單數不合；「was」「has been」是過去或現在完成，與現在時態的語境不符。",
          "trap": "誤以為要跟前面的 teacher（單數）一致；neither...nor 是跟最靠近的 students（複數）一致，且要維持現在式。"
        },
        {
          "stem": "The box of chocolates on the table ___ for the new students.",
          "options": [
            "are",
            "is",
            "were",
            "have been"
          ],
          "answer": 1,
          "explanation": "句子的主詞是單數的「The box」，介系詞片語「of chocolates」和「on the table」都只是修飾語，不決定動詞單複數；描述現在的事實用單數現在式「is」。複數的「are」「were」「have been」都與單數主詞 box 不一致。",
          "trap": "緊鄰動詞的 chocolates 是複數，容易誤導；真正主詞是介系詞片語前的單數 box。"
        }
      ]
    },
    {
      "id": "vocab2",
      "name": "進階字彙與一字多義 (Advanced Vocabulary)",
      "week": "暑假 第2週",
      "notes": [
        {
          "h": "主題式核心字彙",
          "points": [
            "把單字依主題分組記憶最有效率:環保(environment)主題常見 pollution(汙染,n.)、recycle(回收,v.)、protect(保護,v.)、reduce(減少,v.),這些字常成群出現在同一篇閱讀中。",
            "科技(technology)主題:device(裝置,n.)、online(線上的,adj./adv.)、application(應用程式/申請,n.)、develop(發展/開發,v.),會考克漏字與閱讀常以此為情境。",
            "健康(health)主題:exercise(運動,n./v.)、healthy(健康的,adj.)、disease(疾病,n.)、prevent(預防,v.)、medicine(藥,n.),注意 healthy 是形容詞、health 才是名詞。",
            "分主題建立『字群』而非零散背誦,遇到陌生文章時能由主題線索預測可能出現的字,加快判讀速度。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"70\" cy=\"70\" r=\"52\" fill=\"#eef4f2\" stroke=\"#5aa874\" stroke-width=\"2\"/><circle cx=\"290\" cy=\"70\" r=\"52\" fill=\"#eef4f2\" stroke=\"#c9755c\" stroke-width=\"2\"/><circle cx=\"180\" cy=\"140\" r=\"52\" fill=\"#eef4f2\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"70\" y=\"50\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">環保</text><text x=\"70\" y=\"68\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">pollution</text><text x=\"70\" y=\"84\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">recycle</text><text x=\"70\" y=\"100\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">protect</text><text x=\"290\" y=\"50\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">科技</text><text x=\"290\" y=\"68\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">device</text><text x=\"290\" y=\"84\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">online</text><text x=\"290\" y=\"100\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">develop</text><text x=\"180\" y=\"132\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">健康</text><text x=\"180\" y=\"150\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">exercise</text><text x=\"180\" y=\"166\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">prevent</text></svg>",
          "caption": "把核心字依環保、科技、健康三大主題分群記憶,效率更高。",
          "trap": "⚠ healthy 是形容詞、health 才是名詞;medicine(藥)不可數,不要寫成 a medicine 指一種藥時要 a kind of medicine。"
        },
        {
          "h": "一字多義與語境判斷",
          "points": [
            "同一個字常因詞性不同而意義不同:book 當名詞是『書』,當動詞是『預訂』(book a table 訂位);light 當名詞是『光』,當形容詞是『輕的』,當動詞是『點燃』。",
            "判斷多義字的字義必須看『整句』的詞性與語境,不能只看單字。例如 run 可以是『跑』、『經營』(run a shop)、『運作』(The machine runs well),要靠受詞與上下文決定。",
            "同義詞之間有程度與正式度的差異:表『大』由小到大為 big < large < huge < enormous;正式書面常用 large,口語常用 big。",
            "遇到生字時可用前後文(context clues)推測:看定義、舉例、對比(but/however)或因果(because)等線索反推字義,不必每字都查。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"140\" y=\"78\" width=\"80\" height=\"34\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"180\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">light</text><line x1=\"140\" y1=\"95\" x2=\"70\" y2=\"45\" stroke=\"#5aa874\" stroke-width=\"2\"/><line x1=\"180\" y1=\"78\" x2=\"180\" y2=\"30\" stroke=\"#f0a52e\" stroke-width=\"2\"/><line x1=\"220\" y1=\"95\" x2=\"290\" y2=\"45\" stroke=\"#c9755c\" stroke-width=\"2\"/><rect x=\"18\" y=\"28\" width=\"104\" height=\"30\" rx=\"6\" fill=\"#fff\" stroke=\"#5aa874\"/><text x=\"70\" y=\"48\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\" text-anchor=\"middle\">光 (n.)</text><rect x=\"132\" y=\"12\" width=\"96\" height=\"30\" rx=\"6\" fill=\"#fff\" stroke=\"#f0a52e\"/><text x=\"180\" y=\"32\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\" text-anchor=\"middle\">輕的 (adj.)</text><rect x=\"238\" y=\"28\" width=\"104\" height=\"30\" rx=\"6\" fill=\"#fff\" stroke=\"#c9755c\"/><text x=\"290\" y=\"48\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\" text-anchor=\"middle\">點燃 (v.)</text><text x=\"180\" y=\"150\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">看詞性與語境定字義</text><text x=\"180\" y=\"172\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">big &lt; large &lt; huge &lt; enormous</text></svg>",
          "caption": "同一字 light 依詞性分光、輕、點燃三義,須看整句判斷。",
          "trap": "⚠ 多義字最忌只看單字就選最熟悉的意思;務必確認該字在句中是名詞、動詞還是形容詞,再對應字義。"
        },
        {
          "h": "反義字與字首否定 antonyms",
          "points": [
            "很多反義字靠『否定字首』形成:happy↔unhappy、possible↔impossible、polite↔impolite、honest↔dishonest、agree↔disagree。",
            "也有用完全不同字根的成對反義字,要整組記:increase↔decrease(增加/減少)、accept↔refuse(接受/拒絕)、success↔failure(成功/失敗)。",
            "閱讀遇到 but、however 等轉折詞時,前後常是反義,可用這個線索推測生字語意,例如 He looked calm, but inside he was nervous。"
          ],
          "formula": "un-/in-/im-/dis- + 形容詞或動詞 → 反義",
          "trap": "否定字首不能亂套:impossible 對,但不能說 unpossible;dishonest 對,但不能說 unhonest。哪個字配哪個字首是約定俗成,要逐字記不能自創。"
        },
        {
          "h": "同義字的細微差別 synonyms",
          "points": [
            "意思相近的字,語氣或用法常不同:look(看,普通)、watch(看會動的,看電視或比賽)、see(看見,自然映入眼簾);三者不可隨意互換,要說 watch TV、see a movie。",
            "表『說』的字搭配不同:say 接說話內容、tell 接人、speak 接語言、talk 強調對話這個動作。",
            "正式與口語也有別:big 較口語、large 較正式,huge 則指『非常大』;buy 較口語、purchase 較正式,會考閱讀偏正式用字。"
          ],
          "formula": "同義字 = 核心意思相近,但搭配、語氣或正式度不同",
          "trap": "see、look、watch 不能互換:看電視是 watch TV 不是 see TV;看電影習慣說 see/watch a movie 不說 look a movie;look 是不及物動詞,後面要加 at 才能接受詞(look at the picture)。"
        },
        {
          "h": "用字根線索猜長字的意思",
          "points": [
            "遇到沒看過的長字,先拆字首、字根、字尾來猜:un-(否定)加 believe(相信)加 -able(可…的)等於 unbelievable(難以置信的)。",
            "認得常見字根能舉一反三:port 有『搬運』之意,所以 import(進口)、export(出口)、transport(運輸)都相關。",
            "再配合上下文(context clues)確認:看句中的定義、舉例、對比或因果,反推這個字大概是好是壞、是名詞還是動詞。"
          ],
          "formula": "字首 + 字根 + 字尾 → 拆解推測字義,再用上下文驗證",
          "trap": "拆字只是『推測』不一定百分百準,有些字會誤導,例如 invaluable 不是『沒價值』而是『非常珍貴』;最後一定要用整句語境檢查,別只拆字首就下定論。"
        }
      ],
      "quiz": [
        {
          "stem": "The factory near the river has caused serious water _____, killing many fish and making the water unsafe to drink.",
          "options": [
            "pollution",
            "protection",
            "prevention",
            "production"
          ],
          "answer": 0,
          "explanation": "句意:工廠造成嚴重水『汙染』,殺死魚並使水不安全。pollution(汙染)符合語境。protection 保護、prevention 預防、production 生產皆不合。",
          "trap": "⚠ 四個選項字尾都是 -tion 且字形相近,易誤選 production(生產);要抓 killing fish / unsafe 的負面線索定 pollution。"
        },
        {
          "stem": "Could you _____ a table for four at the restaurant for tonight? I'll pay when we get there.",
          "options": [
            "book",
            "cook",
            "read",
            "look"
          ],
          "answer": 0,
          "explanation": "book 當動詞意為『預訂』,book a table 即訂位。read 讀、cook 煮、look 看皆不合 a table 與 restaurant 語境。",
          "trap": "⚠ 看到 book 直覺想成名詞『書』就會排除它;此處 book 是動詞『預訂』,由 Could you + 原形動詞判斷。"
        },
        {
          "stem": "My uncle used to _____ a small bakery downtown, but he sold it last year because the work was too hard.",
          "options": [
            "running",
            "ran",
            "run",
            "runs"
          ],
          "answer": 2,
          "explanation": "used to + 原形動詞,run 此處意為『經營』。used to run a bakery = 過去經營一家麵包店。其餘為時態/形式錯誤。",
          "trap": "⚠ 易被 run『跑』的字面意誤導,且 used to 後必接原形,故選 run 而非 ran/runs/running。"
        },
        {
          "stem": "These boxes are very _____, so even a child can carry them upstairs without any trouble.",
          "options": [
            "heavy",
            "bright",
            "dark",
            "light"
          ],
          "answer": 3,
          "explanation": "light 當形容詞意為『輕的』。由 even a child can carry them(連小孩都能搬)推知箱子很輕。heavy 重的語意相反。",
          "trap": "⚠ light 多義(光/輕/點燃),此處是形容詞『輕』;若只記得『光』會選不出來。dark/bright 與重量無關。"
        },
        {
          "stem": "The Pacific is an _____ ocean—far too large to cross in a single day even by the fastest plane.",
          "options": [
            "narrow",
            "enormous",
            "tiny",
            "shallow"
          ],
          "answer": 1,
          "explanation": "由 far too large 線索知需填表『極大』的字。enormous(巨大的)程度最強,符合 big < large < huge < enormous。tiny 微小、narrow 窄、shallow 淺皆反義或不合。",
          "trap": "⚠ 同義詞程度題:large 已出現在句中作線索,需選比 large 更強的 enormous,而非再選一個普通的『大』。"
        },
        {
          "stem": "Many people now use a mobile _____ to read news, pay bills, and chat with friends anytime, anywhere.",
          "options": [
            "device",
            "weather",
            "medicine",
            "disease"
          ],
          "answer": 0,
          "explanation": "device 意為『裝置』。mobile device(行動裝置)可讀新聞、付款、聊天。disease 疾病、medicine 藥、weather 天氣皆不合科技語境。",
          "trap": "⚠ device 與 disease 字形極相近,易混淆;由 read news / pay bills / chat 的科技功能線索選 device。"
        },
        {
          "stem": "Regular exercise can help _____ many diseases, so doctors often advise people to stay active.",
          "options": [
            "present",
            "produce",
            "prevent",
            "promote"
          ],
          "answer": 2,
          "explanation": "prevent diseases = 預防疾病,符合運動有助健康的語意。produce 生產、present 呈現、promote 促進皆與『預防疾病』不符。",
          "trap": "⚠ 四個 pr- 開頭動詞字形相近;若選 promote(促進)會變成『促進疾病』,語意完全相反,須由 help...diseases 判斷。"
        },
        {
          "stem": "In the dark cave, our guide stopped to _____ a torch so that we could see the path ahead.",
          "options": [
            "sight",
            "weight",
            "fight",
            "light"
          ],
          "answer": 3,
          "explanation": "light 當動詞意為『點燃』。light a torch = 點燃火把,使我們看得見前方。weight/fight/sight 皆不合 a torch 與 see 語境。",
          "trap": "⚠ 此題考 light 第三義『點燃(v.)』;在黑暗中 stopped to light a torch,由 so that we could see 確認是點火照明。"
        },
        {
          "stem": "Although the hotel room looked _____ on the website, it turned out to be quite shabby and old when we arrived.",
          "options": [
            "humble",
            "luxurious",
            "ordinary",
            "crowded"
          ],
          "answer": 1,
          "explanation": "Although 表轉折,與後句 shabby and old(破舊)相反,故前面網站上看起來『豪華』。luxurious(豪華的)與 shabby 形成對比。其餘與轉折不符。",
          "trap": "⚠ 反義對比題:Although 信號詞要求前後語意相反;humble(樸素)與 shabby 同向,不構成對比,故不選。"
        },
        {
          "stem": "The new policy aims to _____ the amount of plastic waste by encouraging people to bring their own bags.",
          "options": [
            "increase",
            "collect",
            "reduce",
            "recycle"
          ],
          "answer": 2,
          "explanation": "由 encouraging people to bring their own bags(自備購物袋)推知目的在『減少』塑膠垃圾。reduce(減少)正確。increase 增加相反;recycle 是回收而非減量,且自備袋對應減量而非回收。",
          "trap": "⚠ recycle 也與環保有關易誤選;但自備袋的直接效果是『減少』塑膠用量(reduce),非回收(recycle)。"
        },
        {
          "stem": "Read the dialogue and choose the best meaning of the underlined word.\nAmy: Why are you so upset?\nBen: My computer keeps crashing, and I lost all my files!\nThe word \"crashing\" here most likely means _____.",
          "options": [
            "suddenly stopping working",
            "falling down the stairs",
            "hitting another car",
            "making a loud noise"
          ],
          "answer": 0,
          "explanation": "由語境 lost all my files(檔案全丟)與 computer 知 crash 指電腦『當機/突然停止運作』。其餘為 crash 的其他字面義(撞擊聲、撞車、跌落)皆不合電腦情境。",
          "trap": "⚠ crash 多義(撞車/巨響/當機);須用 computer + lost files 的情境判斷,選『突然停止運作』而非字面撞擊。"
        },
        {
          "stem": "Which sentence uses the word \"run\" correctly to mean \"to operate or manage\"?",
          "options": [
            "She runs three miles every morning before work.",
            "Tears ran down her cheeks during the sad movie.",
            "His family has run this hotel for over thirty years.",
            "The bus runs every fifteen minutes on weekdays."
          ],
          "answer": 2,
          "explanation": "run = 經營/管理,run a hotel(經營旅館)符合題目要求。(A) run 是跑步;(B) ran 是流下;(D) runs 是行駛/運行,皆非『經營管理』義。",
          "trap": "⚠ 四句都用 run 但意思各異;題目要『經營管理』義,只有 run a hotel 符合,勿被熟悉的『跑步』義(A)吸引。"
        },
        {
          "stem": "In a formal report, which word is the most appropriate replacement for \"kids\" in the sentence \"The program helps kids learn science\"?",
          "options": [
            "guys",
            "buddies",
            "folks",
            "children"
          ],
          "answer": 3,
          "explanation": "正式書面語應用 children(兒童)取代口語的 kids。guys/folks/buddies 皆屬非正式口語,不適合 formal report。",
          "trap": "⚠ 正式 vs 非正式用字題:四選項都指『人/小孩』,但只有 children 為正式書面用語,其餘均為口語。"
        },
        {
          "stem": "Choose the word that does NOT belong to the same topic as the others.",
          "options": [
            "pollution",
            "application",
            "environment",
            "recycle"
          ],
          "answer": 1,
          "explanation": "recycle、pollution、environment 皆屬『環保』主題;application(應用程式/申請)屬科技或一般用語,不屬環保主題。",
          "trap": "⚠ 主題字群題:前三字環保線索明顯,application 雖也常見但屬科技/申請類,是唯一不同主題者。"
        },
        {
          "stem": "The medicine is supposed to _____ the pain within twenty minutes, but mine still hurts after an hour.",
          "options": [
            "release",
            "relive",
            "review",
            "relieve"
          ],
          "answer": 3,
          "explanation": "relieve the pain = 緩解疼痛,符合藥物功效。release 釋放、relive 重新體驗、review 複習皆不合『減輕疼痛』。",
          "trap": "⚠ relieve(緩解)與 relive(重新經歷)、release(釋放)字形極近;健康情境下緩解疼痛用 relieve。"
        },
        {
          "stem": "Choose the pair of words that are antonyms (opposite in meaning).",
          "options": [
            "protect — harm",
            "huge — enormous",
            "develop — improve",
            "reduce — decrease"
          ],
          "answer": 0,
          "explanation": "protect(保護)與 harm(傷害)為反義詞。其餘三組皆為近義詞:huge≈enormous、develop≈improve、reduce≈decrease。",
          "trap": "⚠ 題目要『反義』,但三組是近義詞干擾;只有 protect↔harm 真正相反,勿被『看起來不同』的近義詞誤導。"
        },
        {
          "stem": "After studying abroad for years, she became _____ in both English and French, able to switch between them with ease.",
          "options": [
            "frequent",
            "familiar",
            "fluent",
            "fortunate"
          ],
          "answer": 2,
          "explanation": "be fluent in a language = 流利,able to switch...with ease(輕鬆切換)正呼應流利。familiar 熟悉(常接 with)、frequent 頻繁、fortunate 幸運皆不合。",
          "trap": "⚠ f- 開頭形容詞群易混;表『語言流利』固定用 fluent in,且 with ease 為線索,非 familiar。"
        },
        {
          "stem": "Read the context and guess the meaning of \"sluggish.\"\nAfter the huge lunch, Tom felt so sluggish that he could hardly keep his eyes open or move from the sofa.\nThe word \"sluggish\" most likely means _____.",
          "options": [
            "energetic and lively",
            "slow and lacking energy",
            "angry and impatient",
            "curious and excited"
          ],
          "answer": 1,
          "explanation": "由 hardly keep his eyes open / could not move(幾乎睜不開眼、動不了)推知 sluggish 意為『遲緩無精神的』。energetic 精力充沛語意相反。",
          "trap": "⚠ 猜字義題要靠上下文:huge lunch 後的疲倦線索指向『慢而無力』,勿選與情境相反的 energetic。"
        },
        {
          "stem": "Which sentence uses \"light\" as a noun meaning \"brightness\"?",
          "options": [
            "This jacket is light enough for spring weather.",
            "Please turn off the light before you leave.",
            "He lit the candles on the birthday cake.",
            "She prefers light music while studying."
          ],
          "answer": 1,
          "explanation": "turn off the light 的 light 為名詞,指『燈/光』。(A) light 形容詞『輕的』;(C) lit 動詞『點燃』的過去式;(D) light music 形容詞『輕柔的』。",
          "trap": "⚠ 四句都含 light/lit,僅 (B) 是名詞『光/燈』;注意 (C) 已變 lit(動詞)、(A)(D) 為形容詞。"
        },
        {
          "stem": "The two countries finally reached an _____ after months of talks, agreeing to stop the conflict and trade freely.",
          "options": [
            "argument",
            "arrangement",
            "agreement",
            "amusement"
          ],
          "answer": 2,
          "explanation": "reach an agreement = 達成協議,呼應 agreeing to stop the conflict。argument 爭論語意相反;amusement 娛樂、arrangement 安排不合 talks/conflict 語境。",
          "trap": "⚠ agreement 與 argument 字形相近且都與『談』有關;但 agreeing 與停止衝突的線索指向 agreement(協議),非 argument(爭吵)。"
        },
        {
          "stem": "Choose the most suitable word: The charity was set up to _____ awareness of climate change and to raise money for green projects.",
          "options": [
            "raise",
            "prevent",
            "reduce",
            "lower"
          ],
          "answer": 0,
          "explanation": "raise awareness = 提高意識,為固定搭配,且與 raise money 並列呼應。prevent 預防、reduce/lower 降低皆與『提高意識』相反或不合搭配。",
          "trap": "⚠ 搭配題:awareness 慣與 raise 連用(raise awareness);選 reduce/lower 會變成『降低意識』語意相反。"
        },
        {
          "stem": "Read the notice and answer the question.\nNOTICE: Due to the storm, all outdoor activities are \"called off\" until further notice.\nWhat does \"called off\" mean here?",
          "options": [
            "delayed for an hour",
            "made longer",
            "moved indoors",
            "cancelled"
          ],
          "answer": 3,
          "explanation": "call off 為片語動詞,意為『取消』。因暴風雨戶外活動被『取消』直到另行通知。delayed 延後、moved indoors 改室內、made longer 延長皆不合。",
          "trap": "⚠ call off(取消)是片語動詞,不能逐字理解;注意它不是『延後一小時』(delay),而是直接取消。"
        },
        {
          "stem": "She felt a deep sense of _____ when she saw the team she had trained win the national championship.",
          "options": [
            "proud",
            "pride",
            "proudly",
            "prouder"
          ],
          "answer": 1,
          "explanation": "a deep sense of 後需接『名詞』,pride(驕傲,n.)正確。proud 形容詞、proudly 副詞、prouder 比較級皆不能接在 a sense of 之後。",
          "trap": "⚠ 抽象名詞題:a sense of 後固定接名詞,易誤選熟悉的形容詞 proud;名詞是 pride 而非 proud。"
        },
        {
          "stem": "The scientist spent ten years trying to _____ a vaccine that could protect children from the deadly disease.",
          "options": [
            "develop",
            "developed",
            "development",
            "developing"
          ],
          "answer": 0,
          "explanation": "trying to + 原形動詞,develop a vaccine = 研發疫苗。其餘為過去式、名詞、現在分詞,皆不合 to 後接原形的結構。",
          "trap": "⚠ to + 原形動詞;develop 在此是動詞『研發/開發』,勿選名詞 development 或誤判時態。"
        },
        {
          "stem": "Which underlined word is used INCORRECTLY?\nThe new app helps users (A)reduce their screen time, (B)protect their privacy, and (C)develop healthy habits, but some say it (D)effects their mood negatively.",
          "options": [
            "(A) reduce",
            "(B) protect",
            "(C) develop",
            "(D) effects"
          ],
          "answer": 3,
          "explanation": "(D) 應用動詞 affects(影響),而非名詞 effects。affect 是動詞、effect 是名詞,此處需動詞,故 effects 用錯。(A)(B)(C) 皆正確的動詞用法。",
          "trap": "⚠ affect(v. 影響)與 effect(n. 影響)極易混淆;句中需動詞,正確為 affects,故 effects 為錯用字。"
        },
        {
          "stem": "Read the sentence and choose the word that best fits the blank:\n\"The company decided to _____ its new smartphone next month, hoping to attract young customers.\"",
          "options": [
            "remove",
            "delay",
            "launch",
            "cancel"
          ],
          "answer": 2,
          "explanation": "句意為公司決定「推出」新手機以吸引年輕顧客。launch 除了「發射」外,常見一字多義用法是「(產品)推出、上市」,符合語境。remove(移除)、delay(延遲)、cancel(取消)皆與「吸引顧客」的正向目的矛盾。"
        },
        {
          "stem": "In the sentence below, the word \"figure\" is closest in meaning to which choice?\n\"I can't figure out why the machine suddenly stopped working this morning.\"",
          "options": [
            "understand",
            "count",
            "draw",
            "guess"
          ],
          "answer": 0,
          "explanation": "片語 figure out 意為「弄清楚、想通」,此處指「想不通機器為何突然停止」,與 understand(理解、明白)最接近。figure 單看有「數字、算」之意,但片語 figure out 並非計算(count);draw(畫圖)與 guess(猜測)皆不符 figure out 的固定意思。",
          "trap": "figure 單獨有「數字/算數」的意思,容易誤選 count;但題目考的是片語 figure out(弄懂),要看整個片語而非單字。"
        },
        {
          "stem": "Choose the option in which \"present\" carries the SAME meaning as in this sentence:\n\"All the students were present at the morning assembly.\"",
          "options": [
            "Every member was present when the vote was taken.",
            "She gave me a lovely present on my birthday.",
            "The host will present the award to the winner.",
            "Let me present our new team leader to you."
          ],
          "answer": 0,
          "explanation": "題幹中 present 為形容詞,意為「出席的、在場的」。正解句「投票時每位成員都在場」的 present 同樣是「出席、在場」之意。其餘選項分別為名詞「禮物」、動詞「頒發」、動詞「介紹」,雖同拼作 present 但意思不同,屬一字多義的干擾。",
          "trap": "四個選項都用了 present 這個字,但詞性與意思各異(在場/禮物/頒發/介紹);必須先判斷題幹 present 是「出席的」形容詞,再找意思相同者,不能只看拼字相同。"
        },
        {
          "stem": "Read the short passage and choose the best word for the blank:\n\"Mr. Lin is a very _____ teacher. Even when students make the same mistake many times, he never gets angry and keeps explaining calmly.\"",
          "options": [
            "selfish",
            "patient",
            "careless",
            "nervous"
          ],
          "answer": 1,
          "explanation": "由「即使學生一再犯錯也不生氣,仍冷靜解說」可推知林老師「有耐心」,故填 patient(有耐心的)。selfish(自私的)、careless(粗心的)、nervous(緊張的)都與冷靜、不生氣的描述不符。",
          "trap": "patient 一字多義:當名詞是「病人」,當形容詞是「有耐心的」。此處需要形容詞「有耐心的」來描述老師,別因熟悉「病人」的意思而排除它。"
        }
      ]
    },
    {
      "id": "transition",
      "name": "轉折詞與篇章銜接 (Transition Words & Cohesion)",
      "week": "下學期 期中後",
      "notes": [
        {
          "h": "邏輯關係與轉折詞",
          "points": [
            "轉折(前後語意相反)用 however、but、although、though,例:He is poor, but he is happy.,前後形成對立。",
            "因果關係:原因用 because、since;結果用 so、therefore、thus,例:It was raining, so we stayed home.。",
            "遞進補充用 moreover、in addition、besides;舉例說明用 for example、such as,讓敘述更完整。",
            "選詞前先判斷前後兩句的邏輯(相反/因果/補充/舉例),再挑對應類別的轉折詞,不可只看單句。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6\" y=\"6\" width=\"348\" height=\"178\" rx=\"10\" fill=\"#eef4f2\"/><rect x=\"20\" y=\"40\" width=\"100\" height=\"44\" rx=\"8\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"70\" y=\"66\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">I was tired</text><rect x=\"240\" y=\"40\" width=\"100\" height=\"44\" rx=\"8\" fill=\"#f3e7df\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"290\" y=\"66\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">I kept going</text><rect x=\"138\" y=\"46\" width=\"84\" height=\"32\" rx=\"6\" fill=\"#ffffff\" stroke=\"#c9755c\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><text x=\"180\" y=\"66\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">轉折詞?</text><line x1=\"120\" y1=\"62\" x2=\"138\" y2=\"62\" stroke=\"#3a342e\" stroke-width=\"1.2\"/><line x1=\"222\" y1=\"62\" x2=\"240\" y2=\"62\" stroke=\"#3a342e\" stroke-width=\"1.2\"/><text x=\"70\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">相反 however</text><text x=\"180\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">因果 so</text><text x=\"290\" y=\"118\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#f0a52e\" text-anchor=\"middle\">遞進 besides</text><text x=\"180\" y=\"150\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">依語意亮起連接詞</text></svg>",
          "caption": "先判前後句邏輯,再亮對應的轉折詞。",
          "trap": "⚠ 常見錯誤:看到「然而」就填 however 卻忽略它是連接副詞需用分號;或把 because(原因)與 so(結果)方向填反。"
        },
        {
          "h": "連接詞與連接副詞的差異",
          "points": [
            "連接副詞(however、therefore、moreover)連接兩個完整句子時,前面要用分號或句點,本身後面再加逗號:..., it rained; however, we left.。",
            "從屬連接詞(because、although、while)引導附屬子句,子句不能單獨成句,須與主句連用。",
            "對等連接詞 and、but、so 連接對等的字、片語或子句,前面通常加逗號即可,不用分號。",
            "判別法:該詞能否單獨「黏住」兩個完整句而只靠逗號?能→連接詞;不能、需分號→連接副詞。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6\" y=\"6\" width=\"348\" height=\"178\" rx=\"10\" fill=\"#eef4f2\"/><text x=\"180\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">兩種接法對照</text><rect x=\"16\" y=\"46\" width=\"328\" height=\"50\" rx=\"8\" fill=\"#f3e7df\"/><text x=\"24\" y=\"68\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">It rained</text><text x=\"120\" y=\"68\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">; however ,</text><text x=\"222\" y=\"68\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">we left.</text><text x=\"24\" y=\"88\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">分號↑</text><text x=\"150\" y=\"88\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">逗號↑</text><rect x=\"16\" y=\"112\" width=\"328\" height=\"50\" rx=\"8\" fill=\"#f3e7df\"/><text x=\"24\" y=\"134\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">We left</text><text x=\"110\" y=\"134\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">because</text><text x=\"196\" y=\"134\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">it rained.</text><text x=\"24\" y=\"154\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">從屬連接詞引導子句</text></svg>",
          "caption": "; however, 用分號;because 直接引導子句。",
          "trap": "⚠ 最易錯:用逗號把 however 接兩句(逗號拼接 comma splice);或誤以為 although 後可加逗號獨立成句。"
        },
        {
          "h": "although 與 but 不能同句並用 although ≠ but",
          "points": [
            "中文「雖然…但是…」會讓人想兩個都寫,但英文 although 與 but 只能擇一,例如 Although he is poor, he is happy. 或 He is poor, but he is happy.,兩者不可同時出現。",
            "同理,because 與 so 也不能同句並用,例如 Because it rained, we stayed home. 或 It rained, so we stayed home.,中文「因為…所以…」在英文只留一個。",
            "although 與 though 引導的是附屬子句,後面那句才是主句;but 與 so 則是對等連接詞,連接兩個對等的句子。"
          ],
          "formula": "Although + 子句, 主句。/ 主句, but + 句。(二選一)",
          "trap": "⚠ 最典型中式英文:Although he is poor, but he is happy.(although 與 but 並用)以及 Because it rained, so we stayed.;英文一句只能保留一個連接詞,另一個必須刪掉。"
        },
        {
          "h": "順序與總結的銜接語 sequence & conclusion",
          "points": [
            "敘述步驟或時間順序常用 first、then、after that、finally,例如 First, mix the flour. Then, add the eggs. Finally, bake it.,讓文章脈絡清楚。",
            "做總結或下結論用 in short、in conclusion、to sum up,例如 In conclusion, reading helps us grow.,通常放在段落最後。",
            "表「事實上、其實」用 in fact 或 actually,用來補充或更正前一句,例如 He looks young; in fact, he is fifty.。"
          ],
          "formula": "順序:First... Then... Finally... / 總結:In conclusion, + 句",
          "trap": "⚠ 易錯:把表「最後一步」的 finally 與表「終於、等了很久」的 at last 混用;敘述步驟收尾用 finally,而 at last 帶有期盼已久終於發生的情緒,例如 At last, the bus came.。"
        }
      ],
      "quiz": [
        {
          "stem": "The medicine works very well; ___, it may cause drowsiness, so don't drive after taking it.",
          "options": [
            "therefore",
            "for example",
            "besides",
            "however"
          ],
          "answer": 3,
          "explanation": "前句「藥很有效」與後句「卻會使人想睡」語意相反,且用分號連接兩完整句,須用連接副詞 however(然而)。",
          "trap": "⚠ therefore(因此)是順承結果、besides(此外)是補充、for example(舉例)皆不符對立關係;別因前後都談藥效就誤填順承詞。"
        },
        {
          "stem": "The flight was delayed for three hours ___ the heavy snow that covered the whole runway.",
          "options": [
            "because",
            "although",
            "because of",
            "so that"
          ],
          "answer": 2,
          "explanation": "空格後是名詞片語 the heavy snow,須用介系詞片語 because of(由於);because 是連接詞需接子句。",
          "trap": "⚠ because + 子句(主詞+動詞),because of + 名詞;這裡後面只有名詞片語,選 because 會缺動詞而錯。"
        },
        {
          "stem": "This laptop is light and fast; ___, its battery can last for over twelve hours on a single charge.",
          "options": [
            "in addition",
            "on the contrary",
            "as a result",
            "in short"
          ],
          "answer": 0,
          "explanation": "前句列優點,後句再加一個優點(電池久),為遞進補充,用 in addition(此外)。",
          "trap": "⚠ on the contrary(相反地)用於否定前句、as a result(因此)表結果、in short(簡言之)為總結;此處是「再添一個優點」故用遞進詞。"
        },
        {
          "stem": "Many endangered animals live in this rainforest; ___, the golden monkey and the clouded leopard can still be found here.",
          "options": [
            "for instance",
            "however",
            "therefore",
            "otherwise"
          ],
          "answer": 0,
          "explanation": "後句以兩種具體動物說明前句的「許多瀕危動物」,屬舉例,用 for instance(例如)。",
          "trap": "⚠ for instance = for example;however(轉折)、therefore(因果)、otherwise(否則)皆非舉例,別把列舉誤判成轉折。"
        },
        {
          "stem": "___ the team had practiced for months, they still lost the final by a narrow margin.",
          "options": [
            "Despite",
            "In spite of",
            "Because of",
            "Although"
          ],
          "answer": 3,
          "explanation": "空格後是完整子句 the team had practiced,須用連接詞 Although(雖然)表讓步。",
          "trap": "⚠ Despite / In spite of 是介系詞,只能接名詞或動名詞,不能接子句;後面有主詞+動詞,只能用連接詞 Although。"
        },
        {
          "stem": "To make instant noodles, first boil the water, ___ add the noodles, and finally pour in the seasoning.",
          "options": [
            "meanwhile",
            "instead",
            "then",
            "nevertheless"
          ],
          "answer": 2,
          "explanation": "句子描述步驟順序:first...、___、finally...,中間步驟用 then(接著)。",
          "trap": "⚠ first / then / finally 是順序連接詞一組;instead(反而)、meanwhile(同時)、nevertheless(然而)皆破壞步驟流程,別被單一連接詞語感誤導。"
        },
        {
          "stem": "Which sentence is correctly punctuated?",
          "options": [
            "She was sick, however, she came to school.",
            "She was sick; however, she came to school.",
            "She was sick, however she came to school.",
            "She was sick however she came to school."
          ],
          "answer": 1,
          "explanation": "however 是連接副詞,連接兩個完整句時前須用分號、後加逗號:She was sick; however, she came to school.",
          "trap": "⚠ 用逗號連接兩完整句加 however 是「逗號拼接(comma splice)」錯誤;漏標點或只用逗號都不對,正解唯有分號版本。"
        },
        {
          "stem": "The bridge was badly damaged in the earthquake; ___, all traffic has been stopped for safety.",
          "options": [
            "therefore",
            "so",
            "and",
            "but"
          ],
          "answer": 0,
          "explanation": "分號後連接完整句,須用連接副詞;表結果用 therefore(因此)。so/and/but 為對等連接詞,不與分號連用接句。",
          "trap": "⚠ so 雖也表結果,但它是對等連接詞,前面該用逗號而非分號;分號後須接連接副詞 therefore,別把 so 與 therefore 的標點規則混用。"
        },
        {
          "stem": "___ he had little money, he never asked his friends for help, for he valued his independence.",
          "options": [
            "Although ... but",
            "Despite that",
            "Even though",
            "However"
          ],
          "answer": 2,
          "explanation": "空格後是子句,且只填一個讓步連接詞,Even though(即使/儘管)正確。中文「雖然…但是」在英文只能擇一連接詞。",
          "trap": "⚠ 英文不可 Although...but 並用(中式錯誤);Despite that 罕用且語意鬆散、However 後須逗號且非引導子句,故選 Even though。"
        },
        {
          "stem": "Living in the city is convenient; ___, life in the countryside is quieter and closer to nature.",
          "options": [
            "that is",
            "in conclusion",
            "for this reason",
            "on the other hand"
          ],
          "answer": 3,
          "explanation": "前句講城市方便,後句講鄉村安靜,兩種生活對照,用 on the other hand(另一方面)。",
          "trap": "⚠ in conclusion(總之)是總結、for this reason(因此)表因果、that is(也就是說)是換句話說;唯 on the other hand 表兩面對比。"
        },
        {
          "stem": "You'd better leave for the airport now; ___, you might miss your morning flight.",
          "options": [
            "therefore",
            "otherwise",
            "moreover",
            "meanwhile"
          ],
          "answer": 1,
          "explanation": "前句建議現在出發,後句說明「否則」會錯過班機,為假設的負面後果,用 otherwise(否則)。",
          "trap": "⚠ otherwise = or else,連接「未照做的不良後果」;therefore(因此)順承、moreover(此外)補充、meanwhile(同時)皆不合假設語氣。"
        },
        {
          "stem": "The streets were completely flooded, ___ many people had to be rescued by boat.",
          "options": [
            "unless",
            "because",
            "so",
            "while"
          ],
          "answer": 2,
          "explanation": "前句是原因(街道淹水),後句是結果(須船救援),前因後果用 so(所以)。",
          "trap": "⚠ 若填 because 會把因果方向倒置(變成淹水是因為被救);so 連接「因→果」,別把原因句誤當結果。"
        },
        {
          "stem": "Green habits ___ turning off the lights and recycling paper can make a real difference to our planet.",
          "options": [
            "for example",
            "in addition to",
            "that is",
            "such as"
          ],
          "answer": 3,
          "explanation": "空格後直接接名詞片語舉例(關燈、回收),嵌在句中用 such as(例如)最自然,不需另起句。",
          "trap": "⚠ for example 多置句首/句中加逗號分隔成獨立成分;此處緊接名詞當修飾,用 such as 才不破壞句構,別與 for example 混用。"
        },
        {
          "stem": "My brother prefers to save every dollar he earns, ___ I would rather spend mine on travel and books.",
          "options": [
            "while",
            "since",
            "as",
            "for"
          ],
          "answer": 0,
          "explanation": "哥哥存錢、我愛花錢,兩種習慣對比,while 除「當…時」外亦表「然而/相對」的對比。",
          "trap": "⚠ since(既然/自從)、as(因為/當)、for(因為)偏原因或時間;此處是兩種做法對照,須用對比的 while,別讀成因果。"
        },
        {
          "stem": "___ feeling exhausted after the long hike, she insisted on cooking dinner for the whole family.",
          "options": [
            "Although",
            "In spite of",
            "Even though",
            "While"
          ],
          "answer": 1,
          "explanation": "空格後是動名詞片語 feeling exhausted(無主詞動詞的完整子句),須用介系詞 In spite of(儘管)接動名詞。",
          "trap": "⚠ Although / Even though / While 是連接詞須接子句(主詞+動詞);feeling 是動名詞,只能用介系詞 In spite of,別把分詞片語當子句。"
        },
        {
          "stem": "A: \"The report is due tomorrow, but my computer just crashed!\" B: \"Don't panic. ___, you saved a copy on the cloud last night, right?\" Choose the best transition.",
          "options": [
            "As a result",
            "Fortunately",
            "On the contrary",
            "In conclusion"
          ],
          "answer": 1,
          "explanation": "B 安慰對方並指出「幸好昨晚雲端有備份」,轉折到正面情況,用 Fortunately(幸好)最貼合語境。",
          "trap": "⚠ As a result(因此)需有前因、On the contrary(相反地)否定前句、In conclusion(總之)是總結;此處是帶來好消息,Fortunately 才合語氣。"
        },
        {
          "stem": "Look at the chart: sales of e-books rose sharply from 2018 to 2023; ___, sales of paper books dropped steadily in the same period. Choose the connector.",
          "options": [
            "likewise",
            "consequently",
            "namely",
            "by contrast"
          ],
          "answer": 3,
          "explanation": "電子書上升、紙本書下降,趨勢相反,用 by contrast(相比之下/相反地)表對比。",
          "trap": "⚠ likewise(同樣地)表類同方向、consequently(因此)表結果、namely(即)為解釋;兩條趨勢相反須用對比詞 by contrast。"
        },
        {
          "stem": "The new policy cut working hours but kept the same pay; ___, both productivity and morale rose.",
          "options": [
            "thus",
            "instead",
            "nonetheless",
            "by the way"
          ],
          "answer": 0,
          "explanation": "前句是好政策,後句是它帶來的結果(生產力與士氣上升),為因果順承,用 thus(因此)。",
          "trap": "⚠ instead(反而)、nonetheless(儘管如此)是轉折、by the way(順帶一提)離題;此處前因後果一致,須用 thus。"
        },
        {
          "stem": "First, we collected the data; next, we analyzed it carefully; ___, we presented our findings to the committee.",
          "options": [
            "meanwhile",
            "finally",
            "otherwise",
            "similarly"
          ],
          "answer": 1,
          "explanation": "First...next...___ 為步驟序列,最後一步用 finally(最後)。",
          "trap": "⚠ meanwhile(同時)、otherwise(否則)、similarly(同樣地)皆不收尾;序列 first/next/finally 須以 finally 結束。"
        },
        {
          "stem": "The plan was rejected, not because it was too expensive, but because it was unsafe; ___, the deadline was simply too tight.",
          "options": [
            "however",
            "in contrast",
            "moreover",
            "instead"
          ],
          "answer": 2,
          "explanation": "前句已給兩個拒絕理由,後句再加第三個理由(期限太緊),為遞進補充,用 moreover(此外)。",
          "trap": "⚠ however/in contrast 是轉折、instead 是「而非」;此處是「再補一個原因」,須用遞進的 moreover,別被句子複雜結構誤導成轉折。"
        },
        {
          "stem": "Which is the best way to combine: \"The experiment failed. We learned a lot from it.\" using a contrast connector?",
          "options": [
            "The experiment failed nevertheless, we learned a lot from it.",
            "The experiment failed, nevertheless we learned a lot from it.",
            "The experiment failed; nevertheless, we learned a lot from it.",
            "The experiment failed, nevertheless, we learned a lot from it."
          ],
          "answer": 2,
          "explanation": "nevertheless 為連接副詞,連接兩完整句時前用分號、後加逗號:...failed; nevertheless, we learned...。",
          "trap": "⚠ 用逗號接兩完整句(選項1、4)是逗號拼接;選項3標點位置錯。唯分號+逗號(選項2)正確,別把連接副詞當對等連接詞。"
        },
        {
          "stem": "___ the bridge has been closed for repairs, drivers are advised to take the longer route along the river.",
          "options": [
            "Since",
            "Unless",
            "Whereas",
            "In case"
          ],
          "answer": 0,
          "explanation": "空格引導原因子句(橋封閉修繕),建議改道,用 Since(既然/由於)表原因。",
          "trap": "⚠ Unless(除非)、In case(以防)是條件、Whereas(然而)是對比;此處是「因為橋封閉所以改道」的因果,須用 Since。"
        },
        {
          "stem": "Regular exercise brings many benefits. ___, it strengthens the heart, improves sleep, and reduces stress.",
          "options": [
            "On the contrary",
            "In particular",
            "Even so",
            "Instead"
          ],
          "answer": 1,
          "explanation": "後句具體展開前句「許多好處」(強心、助眠、減壓),用 In particular(具體來說/尤其)引出細節最合適。",
          "trap": "⚠ On the contrary、Even so、Instead 都帶轉折/否定;此處是把「好處」具體化,屬說明展開,須用 In particular,別誤判成轉折。"
        },
        {
          "stem": "___ the directions seemed clear at first, we ___ got lost twice before reaching the old temple.",
          "options": [
            "Because ... so",
            "Unless ... yet",
            "Since ... thus",
            "Although ... still"
          ],
          "answer": 3,
          "explanation": "前句「指示看似清楚」與後句「卻迷路兩次」為讓步轉折:Although(雖然)引導讓步,主句用 still(仍然)呼應。",
          "trap": "⚠ Because/Since...so/thus 是因果且中文式「因為…所以」並用為錯;Unless(除非)語意不通;唯 Although...still 表「雖然…仍…」。"
        },
        {
          "stem": "Notice on a gate: \"Please close the door gently ___ the patients can rest without being disturbed.\" Choose the best connector.",
          "options": [
            "so",
            "because",
            "such that",
            "so that"
          ],
          "answer": 3,
          "explanation": "告示說明輕關門的「目的」是讓病人安靜休息,目的副詞子句用 so that(以便/為了)。",
          "trap": "⚠ so 單獨表結果、because 表原因(方向相反)、such that 須搭名詞;表「目的」須用 so that + 子句,別把目的誤當原因或結果。"
        },
        {
          "stem": "Kevin studied really hard for the math exam. ______, he still didn't pass it.",
          "options": [
            "Therefore",
            "Besides",
            "However",
            "For example"
          ],
          "answer": 2,
          "explanation": "前句說 Kevin 很努力準備,後句說他還是沒通過,兩句意思相反,需要表示「轉折」的連接詞,意為「然而、但是」。表「因此」是因果關係、表「此外」是補充、表「舉例來說」是舉例,都不合語意。"
        },
        {
          "stem": "The restaurant's food is delicious and cheap. ______, the service is fast and friendly. No wonder it is always full.",
          "options": [
            "Instead",
            "Otherwise",
            "What's more",
            "In contrast"
          ],
          "answer": 2,
          "explanation": "前句稱讚食物好吃又便宜,後句再加上服務又快又親切,是「再加上、而且」的補充累加關係,用來增添同方向的優點。表「取而代之」、表「否則」、表「相反地」都與遞進補充的語氣不符。",
          "trap": "後句同樣是正面優點,屬於「累加補充」而非轉折或對比,別被兩個不同面向(食物 vs. 服務)誤導成相反關係。"
        },
        {
          "stem": "Reading English news every day can build your vocabulary. ______, it helps you understand how sentences are put together. ______, spending just fifteen minutes a day makes a real difference over time.",
          "options": [
            "In addition; In short",
            "On the other hand; However",
            "For instance; Instead",
            "As a result; Otherwise"
          ],
          "answer": 0,
          "explanation": "第一格前後都在列舉讀英文新聞的好處(增加字彙、了解句子結構),需要「此外」表累加;第二格是把前面的重點收束成結論「總之、簡言之」。表「另一方面／然而」是轉折、表「舉例／取而代之」與「結果／否則」都不符兩格的累加＋總結邏輯。",
          "trap": "兩格要同時成立:第一格必須是同方向的補充,第二格是總結收尾;只看單一格容易誤選轉折詞。"
        },
        {
          "stem": "I wanted to go hiking this weekend. ______, the weather forecast says it will rain heavily, so I will stay home instead.",
          "options": [
            "Unfortunately",
            "Fortunately",
            "Similarly",
            "Meanwhile"
          ],
          "answer": 0,
          "explanation": "說話者原本想去健行,卻因為天氣預報說會下大雨而無法成行,這是不如意的轉折,用「不幸地、可惜」最貼切。表「幸運地」語氣相反、表「同樣地」是類比、表「與此同時」表時間,都不符合期待落空的語意。",
          "trap": "空格帶有情緒評價:結果是壞消息(下雨得待在家),要選負面語氣的轉折副詞,別選成語氣相反的正面詞。"
        }
      ]
    },
    {
      "id": "paraphrase",
      "name": "同義改寫與句意理解 (Paraphrase & Sentence Meaning)",
      "week": "下學期 期中後",
      "notes": [
        {
          "h": "常見同義句型轉換",
          "points": [
            "too...to V(太…而不能)= so...that...not:He was too tired to walk = He was so tired that he couldn't walk;改寫時 that 子句必須補回否定 not。",
            "not...until(直到…才)強調『在某時間點之前都沒發生』= only when / It was not until...that...;as soon as(一…就)= the moment / on + V-ing。",
            "表原因時 because + 句子 可換成 because of / due to / thanks to + 名詞(片語):He was late because it rained = He was late because of the rain。",
            "enough to V 與 so...that 也可互換:old enough to drive = so old that he can drive,留意主詞與肯定否定要一致。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"30\" width=\"150\" height=\"54\" rx=\"8\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"24\" y=\"54\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">too tired</text><text x=\"24\" y=\"74\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">to walk</text><text x=\"168\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">=</text><rect x=\"182\" y=\"30\" width=\"164\" height=\"54\" rx=\"8\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"192\" y=\"54\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">so tired that</text><text x=\"192\" y=\"74\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">he can't walk</text><text x=\"180\" y=\"120\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">改寫要補回 not</text><line x1=\"150\" y1=\"100\" x2=\"210\" y2=\"100\" stroke=\"#f0a52e\" stroke-width=\"2\"/><text x=\"180\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">too...to ↔ so...that not</text></svg>",
          "caption": "圖示 too...to 與 so...that...not 雙向等值,改寫時別漏掉否定。",
          "trap": "⚠ too...to 改 so...that 時最常忘了補 not(too...to 本身已含否定義);又 not...until 與 not...because 的否定範圍不同,別把 until 句改成單純的 because 句而改變語意。"
        },
        {
          "h": "語態與結構改寫保留原意",
          "points": [
            "主動↔被動:They built it = It was built by them;改寫時時態(過去對過去)與單複數(was/were)要一致,真正動作者用 by 帶出或省略。",
            "比較級↔最高級:No other student is taller than Tom = Tom is the taller than any other / Tom is the tallest;否定主詞(No other)轉成肯定最高級時要涵蓋同一範圍。",
            "直接↔間接引述:She said,'I am tired.' = She said (that) she was tired;人稱、時態(往前推一級)、時間地點副詞(now→then,here→there)都要對應調整。",
            "判斷選項是否『改變原意』:重點檢查否定詞有無、數量範圍(all/some/no)、時態先後是否與原句完全一致,意思一變即為錯誤選項。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"90\" y=\"12\" width=\"180\" height=\"30\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#3a342e\"/><text x=\"180\" y=\"32\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">原句:意義基準</text><rect x=\"14\" y=\"58\" width=\"150\" height=\"28\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"24\" y=\"77\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">✗ 改了否定</text><rect x=\"196\" y=\"58\" width=\"150\" height=\"28\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"206\" y=\"77\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">✗ 改了範圍</text><rect x=\"14\" y=\"98\" width=\"150\" height=\"28\" rx=\"6\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"24\" y=\"117\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">✗ 改了時態</text><rect x=\"196\" y=\"98\" width=\"150\" height=\"28\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"206\" y=\"117\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">✓ 意義相同</text><text x=\"180\" y=\"160\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">檢查:否定 範圍 時態</text></svg>",
          "caption": "四個改寫選項只有一個保留原意,其餘各動了否定、範圍或時態。",
          "trap": "⚠ 同義改寫題不是找『句型最像』的,而是找『意義完全相同』的;最常見陷阱是選項偷改否定詞、把 some 改成 all/no、或把過去改成現在,句型看似對但語意已變。"
        },
        {
          "h": "關係子句與分詞的合句改寫 combining sentences",
          "points": [
            "兩句共用同一人或物時,可用關係代名詞合併,例如 The boy is my brother. He is singing. 合併成 The boy who is singing is my brother.,用 who 代替重複的 He。",
            "關係子句可進一步簡化為分詞片語:主動用現在分詞 V-ing(the man who is waiting → the man waiting),被動用過去分詞 V-pp(the book which was written → the book written)。",
            "指物用 which,指人用 who,兩者都可改用 that;合併時要刪掉重複的主詞或受詞,避免一句裡出現兩個相同代名詞。"
          ],
          "formula": "先行詞 + who/which/that + 子句 = 先行詞 + V-ing / V-pp(分詞化)",
          "trap": "⚠ 常見錯誤:合併後忘記刪掉重複的代名詞,寫成 The boy who he is singing...(多了 he);關係代名詞 who 已經當主詞,後面不可再放 he。"
        },
        {
          "h": "條件句與 if 的同義改寫 conditional paraphrase",
          "points": [
            "祈使句 + and 或 or 可改寫成 if 條件句,例如 Study hard, and you will pass. 等於 If you study hard, you will pass.;Hurry up, or you'll miss it. 等於 If you don't hurry, you'll miss it.(用 or 改寫要加 not)。",
            "Without + 名詞 可換成 If...not,例如 Without water, we can't live. 等於 If we don't have water, we can't live.,意思都是「沒有…就不能…」。",
            "Unless 等於 If...not,例如 Unless you leave now, you'll be late. 等於 If you don't leave now, you'll be late.,unless 本身已含否定,後面不再加 not。"
          ],
          "formula": "祈使句, and/or... = If (not)...;Without N = If...not;Unless = If...not",
          "trap": "⚠ 兩個易錯點:用 or 改 if 時要把條件改成否定(Hurry, or... 等於 If you don't hurry...);unless 已含否定,若再寫成 unless you don't... 就變雙重否定而錯。"
        }
      ],
      "quiz": [
        {
          "stem": "Which sentence has the same meaning as: \"The box was so heavy that no one could lift it alone\"?",
          "options": [
            "The box was so light that everyone could lift it alone.",
            "The box was heavy enough for someone to lift alone.",
            "The box was not heavy enough to be lifted alone.",
            "The box was too heavy for anyone to lift alone."
          ],
          "answer": 3,
          "explanation": "so heavy that no one could lift = too heavy to lift(太重以致沒人搬得動);too...to 本身已含否定義,for anyone to lift 正確保留『沒人搬得動』。",
          "trap": "⚠ 同義改寫要保留『無法達成』的否定義。改成 light 是反義;heavy enough 變肯定(搬得動);not...enough 變『不夠重』。too...to 句的否定義不可丟。"
        },
        {
          "stem": "Choose the sentence closest in meaning to: \"It was not until midnight that the firefighters put out the fire.\"",
          "options": [
            "The firefighters did not put out the fire until midnight.",
            "The firefighters never put out the fire that night.",
            "The firefighters put out the fire before midnight.",
            "The firefighters had put out the fire by midnight."
          ],
          "answer": 0,
          "explanation": "It was not until midnight that... 強調『直到午夜才…』,等於 did not...until midnight,即午夜時才撲滅。",
          "trap": "⚠ not until 表『到某時間點前都沒發生,到那時才發生』。before 或 by midnight 都暗示午夜前已完成,時間錯;never 是完全沒發生,語意全反。"
        },
        {
          "stem": "Which is the correct passive paraphrase of: \"People say that the old castle has hidden many secrets\"?",
          "options": [
            "The old castle is said to hide many secrets.",
            "The old castle is said to have hidden many secrets.",
            "The old castle was said to hide many secrets.",
            "The old castle has been said to hiding many secrets."
          ],
          "answer": 1,
          "explanation": "People say + 現在完成(has hidden)改被動:主句用現在 is said,從句動作較早故用完成不定詞 to have hidden。",
          "trap": "⚠ 原句從句『has hidden(已藏)』比 say 更早,被動須用 to have hidden;to hide 漏了時間先後;was said 把主句時態改成過去;to hiding 文法錯。"
        },
        {
          "stem": "Select the sentence that keeps the original meaning of: \"No sooner had she entered the room than the lights went out.\"",
          "options": [
            "The lights went out long before she entered the room.",
            "She entered the room as soon as the lights went out.",
            "As soon as she entered the room, the lights went out.",
            "After the lights went out, she finally entered the room."
          ],
          "answer": 2,
          "explanation": "No sooner...than = 一…就…,事件順序為『先進房,燈就熄』,等同 As soon as she entered..., the lights went out。",
          "trap": "⚠ No sooner A than B 表 A 先、B 緊接。把『先進房後燈熄』顛倒成燈先熄即錯;long before 也改變了時間關係。主從事件先後不可調換。"
        },
        {
          "stem": "Which sentence means the same as: \"She said to me, 'I will call you tomorrow.'\"?",
          "options": [
            "She told me that she will call me tomorrow.",
            "She asked me whether she would call me the next day.",
            "She told me that I would call her the following day.",
            "She told me that she would call me the next day."
          ],
          "answer": 3,
          "explanation": "直接引述改間接:will→would、you→me、tomorrow→the next day,且 said to me 改 told me。",
          "trap": "⚠ 間接引述須時態後退(will→would)、人稱對應(you→me)、時間轉換(tomorrow→the next day)。未後退時態、改成疑問句、或把『她打給我』顛倒成『我打給她』皆錯。"
        },
        {
          "stem": "Choose the paraphrase that preserves the meaning of: \"He is the most diligent student in our class.\"",
          "options": [
            "No other student in our class is as diligent as he is.",
            "Some students in our class are more diligent than he is.",
            "He is more diligent than any student in our class.",
            "Few students in our class are less diligent than he is."
          ],
          "answer": 0,
          "explanation": "最高級『最…』可改為否定主詞 + as...as:No other student is as diligent as he is,範圍與意義一致。",
          "trap": "⚠ 最高級轉否定主詞句要排除自身:more diligent than any student 漏了 other 會把自己也算進去;說別人更勤奮語意相反;less diligent 比較方向反了。"
        },
        {
          "stem": "Which sentence is closest in meaning to: \"Because of the heavy snow, the train was delayed for hours.\"",
          "options": [
            "Although it snowed heavily, the train was not delayed.",
            "The train was delayed for hours because it snowed heavily.",
            "The heavy snow was delayed by the train for hours.",
            "The train was delayed for hours, so it snowed heavily."
          ],
          "answer": 1,
          "explanation": "Because of + 名詞片語(the heavy snow)= because + 句子(it snowed heavily),因果關係不變。",
          "trap": "⚠ because of(接名詞)與 because(接句子)只是形式不同,因果方向不可變。把因果倒置(誤成誤點導致下雪)、改成 Although 讓步否定、或主受詞錯置皆錯。"
        },
        {
          "stem": "Select the sentence with the same meaning as: \"I prefer reading novels to watching TV.\"",
          "options": [
            "I would rather watch TV than read novels.",
            "I prefer to watch TV rather than read novels.",
            "I would rather read novels than watch TV.",
            "I like watching TV more than reading novels."
          ],
          "answer": 2,
          "explanation": "prefer A to B = would rather A than B(較喜歡 A);prefer reading to watching = would rather read than watch。",
          "trap": "⚠ prefer A-ing to B-ing 與 would rather A than B 互換,動詞形式不同(動名詞 vs 原形)。把偏好對象顛倒成喜歡看電視即錯;to/than 後接的才是『較不喜歡』的。"
        },
        {
          "stem": "Which is the best paraphrase of: \"It is believed that the ancient bridge was built over a thousand years ago.\"",
          "options": [
            "The ancient bridge believes it was built over a thousand years ago.",
            "People believe the ancient bridge will build a thousand years ago.",
            "The ancient bridge is believed to build over a thousand years ago.",
            "The ancient bridge is believed to have been built over a thousand years ago."
          ],
          "answer": 3,
          "explanation": "It is believed that + 過去被動(was built)改寫:主詞前移,從句較早且為被動,用 to have been built。",
          "trap": "⚠ 橋是被建造且時間更早,須用完成被動 to have been built。to build 漏完成且主動;will build 時態語態皆錯;把無生命的橋當主動相信者也錯。"
        },
        {
          "stem": "Choose the sentence closest in meaning to: \"Hardly had the game started when it began to rain.\"",
          "options": [
            "The game ended because it rained too hard.",
            "It stopped raining as soon as the game started.",
            "The game had barely started when it started to rain.",
            "It rained for a long time before the game started."
          ],
          "answer": 2,
          "explanation": "Hardly had A when B = A 剛開始 B 就發生;比賽才剛開始就下起雨,等同 barely started when it started to rain。",
          "trap": "⚠ Hardly...when 表『一…就…』,順序為比賽先、下雨緊接。把順序顛倒、加入比賽結束的因果、或改成停雨皆使語意全變。"
        },
        {
          "stem": "Which sentence keeps the meaning of: \"You must finish the report, or you will be fired.\"",
          "options": [
            "If you don't finish the report, you will be fired.",
            "Unless you are fired, you must finish the report.",
            "You will be fired even if you finish the report.",
            "If you finish the report, you will be fired."
          ],
          "answer": 0,
          "explanation": "祈使句 + or + 結果 = If you don't + 同義(否則就…);不完成報告就會被開除。",
          "trap": "⚠ 『...or...』等於『若不…就會…』,條件要改成否定 If you don't。漏掉否定、把條件與結果對調、或用 even if 變成不論如何都被開除皆錯。"
        },
        {
          "stem": "Select the paraphrase that preserves: \"This is the first time that I have ever eaten such spicy food.\"",
          "options": [
            "I had never eaten such spicy food until last year.",
            "I have never eaten such spicy food before.",
            "I often eat such spicy food.",
            "I will eat such spicy food for the first time."
          ],
          "answer": 1,
          "explanation": "This is the first time I have ever eaten... = I have never eaten...before(這是第一次=以前從未)。",
          "trap": "⚠ 『第一次做某事(現在完成)』等於『以前從未做過』。often 完全相反;will...for the first time 改成未來;until last year 加入錯誤時間點。"
        },
        {
          "stem": "Which sentence has the same meaning as: \"Not only did he break the window, but he also lied about it.\"?",
          "options": [
            "He broke the window because he had lied about it.",
            "He neither broke the window nor lied about it.",
            "He broke the window and lied about it as well.",
            "Although he broke the window, he did not lie about it."
          ],
          "answer": 2,
          "explanation": "Not only A but also B = 既 A 又 B(兩件都做);他打破窗戶又說謊,等於 broke...and...as well。",
          "trap": "⚠ Not only...but also 是『兩者皆是』的倒裝。neither...nor 變兩者皆非;否定了說謊;或加入錯誤因果皆使語意改變。去掉強調後仍應為兩件都成立。"
        },
        {
          "stem": "Choose the sentence closest to: \"The harder you practice, the better you will perform.\"",
          "options": [
            "If you practice harder, you will perform better.",
            "The more you perform, the harder you must practice.",
            "Even if you practice harder, you will not perform better.",
            "You will perform better, so you should practice harder."
          ],
          "answer": 0,
          "explanation": "The + 比較級..., the + 比較級... 表『越…就越…』,等同 If you practice harder, you will perform better。",
          "trap": "⚠ The...the... 是正向遞增。加 even if...not 變否定;把因果倒置;或主從顛倒(把 perform 當條件)皆錯。兩個比較級的因果方向不可互換。"
        },
        {
          "stem": "Which is the correct active paraphrase of: \"The letter is supposed to have been sent last week.\"",
          "options": [
            "The letter is supposed to send someone last week.",
            "Someone is supposed to send the letter next week.",
            "Someone supposes to have been sent the letter.",
            "Someone is supposed to have sent the letter last week."
          ],
          "answer": 3,
          "explanation": "be supposed to have been sent(被動完成)改主動:加回施動者 someone,動作較早用 to have sent。",
          "trap": "⚠ 被動 have been sent 轉主動為 have sent 並補施動者 someone。to send 漏完成且時間改未來;letter 不能當寄信者;supposes 文法錯且仍被動。"
        },
        {
          "stem": "Select the sentence that means the same as: \"Without your help, I could not have finished the project on time.\"",
          "options": [
            "Even without your help, I finished the project on time.",
            "If you had not helped me, I could not have finished the project on time.",
            "Because you did not help me, I did not finish on time.",
            "If you helped me, I would finish the project on time."
          ],
          "answer": 1,
          "explanation": "Without + 名詞(過去語境)= If...had not...(與過去事實相反假設);沒有你的幫忙我就無法準時完成。",
          "trap": "⚠ Without 在『could not have』語境下等於過去假設 If...had not。用現在假設且漏否定、把假設誤讀為事實(實際上有幫忙)、或 even without 變成不需幫忙也完成皆錯。"
        },
        {
          "stem": "Which sentence keeps the meaning of: \"He asked me, 'Where did you buy this jacket?'\"",
          "options": [
            "He told me where I bought this jacket.",
            "He asked me where I have bought this jacket.",
            "He asked me where I had bought that jacket.",
            "He asked me where did I buy that jacket."
          ],
          "answer": 2,
          "explanation": "直接問句改間接:疑問句變肯定語序、時態後退(did buy→had bought)、this→that、you→I。",
          "trap": "⚠ 間接問句須用直述語序(I had bought)不可保留 did。保留疑問語序 did I buy、用 told 引導問句、或時態未後退且 this 未改 that 皆錯。"
        },
        {
          "stem": "Choose the paraphrase closest to: \"Few people, if any, can solve this puzzle.\"",
          "options": [
            "Everyone is able to solve this puzzle.",
            "No one has ever tried to solve this puzzle.",
            "Many people can easily solve this puzzle.",
            "Almost no one can solve this puzzle."
          ],
          "answer": 3,
          "explanation": "Few...if any 強調『幾乎沒有人』;few 本身是否定意味(很少),if any 更加強,等同 almost no one。",
          "trap": "⚠ few...if any 是強調極少的否定語氣(few≠a few)。改成很多人會、人人會、或改成沒人嘗試(與『會不會解』無關)皆使語意改變。"
        },
        {
          "stem": "Which sentence has the same meaning as: \"It took me three hours to repair the bike.\"?",
          "options": [
            "I spent three hours repairing the bike.",
            "The bike took three hours repairing me.",
            "I spent three hours to repair the bike.",
            "I cost three hours in repairing the bike."
          ],
          "answer": 0,
          "explanation": "It took sb + 時間 + to V = sb spent + 時間 + V-ing;花三小時修車,spend 後接動名詞。",
          "trap": "⚠ spend 接 V-ing(spent three hours repairing),不接 to V。spent...to repair 錯;主受詞顛倒(bike 修我)錯;cost 主詞須為物或事不用人。"
        },
        {
          "stem": "Select the sentence closest in meaning to: \"Such was his anger that he could hardly speak.\"",
          "options": [
            "He was a little angry, so he kept talking.",
            "He was so angry that he could barely speak.",
            "His anger made him speak more clearly.",
            "He spoke calmly despite being angry."
          ],
          "answer": 1,
          "explanation": "Such was his anger that... 為 So...that 的變體倒裝,表『如此生氣以致幾乎說不出話』= so angry that he could barely speak。",
          "trap": "⚠ Such was N that... 等於 so + adj + that...,hardly/barely 表『幾乎不能』。改成有點生氣且能說、或把『說不出話』改成說得更清楚/平靜皆錯。"
        },
        {
          "stem": "Which is the best paraphrase of: \"You had better not tell her the truth, or she will be hurt.\"",
          "options": [
            "If you don't tell her the truth, she will be hurt.",
            "You should tell her the truth so that she won't be hurt.",
            "She will be hurt whether you tell her the truth or not.",
            "If you tell her the truth, she will be hurt."
          ],
          "answer": 3,
          "explanation": "had better not + V, or... = 『最好別…否則…』;此處 \"not tell...or...\" 表『若(真的)告訴她,她會受傷』。",
          "trap": "⚠ 『had better not do, or...』的 or 接『若做了會發生的壞結果』,故條件是肯定 If you tell。多加否定、變成建議要說、或 whether...or not 變成無論如何都受傷皆錯。"
        },
        {
          "stem": "Choose the sentence that preserves the meaning of: \"Rich as he is, he is never satisfied with what he has.\"",
          "options": [
            "He is rich, so he is satisfied with everything he has.",
            "If he were rich, he would be satisfied with what he has.",
            "Although he is rich, he is never satisfied with what he has.",
            "Because he is rich, he is always satisfied with what he has."
          ],
          "answer": 2,
          "explanation": "Adj + as + 主詞 + be 為讓步倒裝,= Although he is rich(雖然他很富有);後句『從不滿足』不變。",
          "trap": "⚠ 『Rich as he is』是讓步(Although)不是原因。改成 Because 因果且把『從不滿足』改成滿足、或改成 If 假設皆錯。adj+as+S+V 倒裝一律解作『雖然』。"
        },
        {
          "stem": "Which sentence means the same as: \"The more I listened to him, the less I believed his story.\"",
          "options": [
            "As I listened to him more, I believed his story less.",
            "I believed his story more as I kept listening to him.",
            "The longer I listened, the more convinced I became.",
            "I stopped listening because I believed his story."
          ],
          "answer": 0,
          "explanation": "The more...the less... 表『越…越不…』;聽得越多越不信,等同 As I listened more, I believed less。",
          "trap": "⚠ the more...the less 是一升一降的反向關係。改成越聽越信(同向)、或加入錯誤因果皆錯。改寫時務必保留兩端的升降方向。"
        },
        {
          "stem": "Select the paraphrase closest to: \"He would rather stay at home than go to the noisy party.\"",
          "options": [
            "He enjoys the noisy party more than staying at home.",
            "He prefers staying at home to going to the noisy party.",
            "He has to go to the noisy party instead of staying home.",
            "He prefers going to the noisy party to staying at home."
          ],
          "answer": 1,
          "explanation": "would rather A than B = prefer A-ing to B-ing(較喜歡 A);留在家更勝於去派對。",
          "trap": "⚠ would rather...than 與 prefer...to 互換,prefer 後接動名詞且偏好的放前。把偏好對象顛倒成喜歡派對、或 has to 變成被迫去皆錯。to 後接的是『較不想要』的。"
        },
        {
          "stem": "Which sentence keeps the original meaning of: \"Only after the storm passed did the villagers return home.\"",
          "options": [
            "The villagers never returned home after the storm.",
            "The villagers returned home before the storm passed.",
            "The villagers returned home only after the storm passed.",
            "As the storm passed, the villagers had already returned home."
          ],
          "answer": 2,
          "explanation": "Only after...did + 主詞 + 原形 為倒裝強調,= The villagers returned home only after the storm passed(暴風雨過後才返家)。",
          "trap": "⚠ Only after 置句首須倒裝,還原後語意不變。before 把時序前移;never returned 否定返家;had already returned 改成風暴過前已回皆錯。倒裝只是強調,時間關係不變。"
        },
        {
          "stem": "Choose the sentence that has almost the same meaning as:\n\"The concert was so loud that we couldn't hear each other.\"",
          "options": [
            "The concert was too loud for us to enjoy the songs.",
            "We talked loudly so that we could enjoy the concert.",
            "The concert was too loud for us to hear each other.",
            "We couldn't go to the concert because it was too loud."
          ],
          "answer": 2,
          "explanation": "「so + 形容詞 + that + 否定子句」表示「太……以致於不能……」,可改寫成「too + 形容詞 + for sb. + to V」。原句『太吵以致於我們無法聽見彼此』,語意等於『太吵,吵到我們無法互相聽見』,聽不見彼此這個結果必須保留。其他改寫把重點換成無法享受歌曲、大聲說話、或根本沒去,都改變了原意。"
        },
        {
          "stem": "Which sentence keeps the same meaning as:\n\"Not until she read the letter did she understand the truth.\"",
          "options": [
            "She read the letter but still didn't understand the truth.",
            "Before she read the letter, she had already known the truth.",
            "She understood the truth, so she decided to read the letter.",
            "She didn't understand the truth until she read the letter."
          ],
          "answer": 3,
          "explanation": "「Not until ...」置於句首會造成主句倒裝(did she understand),意思是『直到她讀了信,她才明白真相』,還原成正常語序即為『在讀信之前她並不明白,讀了之後才明白』。因此保留「直到讀信才明白」語意的改寫才正確。把因果順序顛倒(先懂真相才讀信)、或說她讀了仍不懂、或讀信前早就知道,都與原意不符。",
          "trap": "句首 Not until 造成的倒裝只是文法結構,別誤以為她『從頭到尾都不懂』;她其實在讀信『之後』就懂了。"
        },
        {
          "stem": "Choose the option that best paraphrases the underlined part:\n\"I would rather stay home than go out in this heavy rain.\"",
          "options": [
            "I have to go out even though it is raining heavily.",
            "I enjoy going out in the rain more than staying home.",
            "I prefer staying home to going out in this heavy rain.",
            "I can neither stay home nor go out in this heavy rain."
          ],
          "answer": 2,
          "explanation": "「would rather A than B」表示『寧願A也不要B』,與「prefer A to B(較喜歡A勝於B)」意思相同。原句偏好『待在家』勝過『冒大雨出門』,故保留此偏好的改寫正確。說更喜歡淋雨出門正好相反;說必須出門或兩者都不行,則違背原意。",
          "trap": "would rather 後接原形動詞,but prefer 後常接動名詞(staying, going);別因為動詞形式不同就誤判語意不同。"
        },
        {
          "stem": "Read the short passage and choose the sentence closest in meaning to the underlined sentence.\n\n\"Tom promised to call me last night, but the phone never rang. _I ended up waiting for nothing._\"",
          "options": [
            "In the end, my waiting was worth it.",
            "I decided not to wait for his call at all.",
            "Waiting for his call made me feel happy.",
            "In the end, all my waiting was useless."
          ],
          "answer": 3,
          "explanation": "「end up + V-ing」表示『最後落得……的結果』,而「wait for nothing」意為『白等一場、徒勞無功』。結合前文『電話一直沒響』,可知說話者最後白白等待、毫無收穫,故『所有等待都是徒勞』的改寫最貼近。說等待值得、等待快樂皆與『for nothing』相反;說決定完全不等,則與『ended up waiting』矛盾——他其實等了。",
          "trap": "for nothing 是『徒勞、白費』而非『免費』;且 ended up waiting 代表他確實等了,不能改寫成『決定不等』。"
        }
      ]
    },
    {
      "id": "readinggenre",
      "name": "應用文閱讀:廣告告示與書信 (Practical Reading)",
      "week": "全期",
      "notes": [
        {
          "h": "廣告與告示閱讀策略",
          "points": [
            "先看標題與粗體字鎖定主題與目的:廣告多為促銷(sale / off / discount),海報多為活動宣傳,告示(notice)多為規定或警告。掌握目的後再回頭找細節。",
            "用 5W 掃描關鍵資訊:when(時間/日期)、where(地點)、how much(價格/費用)、who(對象/誰適用)、what(做什麼)。題目問什麼就只掃描對應欄位,不必逐字讀。",
            "特別留意條件與例外字:except(除外)、only(僅限)、free for...(對某對象免費)、valid until / before(有效期限)、members only(限會員)。會考陷阱常藏在這些限制條件裡。",
            "數字與折扣要看清楚:20% off 是打八折(付 80%)、buy one get one free 是買一送一、$5 off 是直接減 5 元,三者算法完全不同。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"8\" y=\"8\" width=\"344\" height=\"174\" rx=\"8\" fill=\"#f3e7df\"/><rect x=\"24\" y=\"22\" width=\"170\" height=\"148\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"109\" y=\"44\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">BOOK FAIR</text><text x=\"36\" y=\"72\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">June 5, 9am</text><text x=\"36\" y=\"98\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">City Library</text><text x=\"36\" y=\"124\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">Ticket: $50</text><text x=\"36\" y=\"150\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">Free for kids</text><text x=\"262\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\" text-anchor=\"middle\">when?</text><text x=\"262\" y=\"86\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\" text-anchor=\"middle\">where?</text><text x=\"262\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\" text-anchor=\"middle\">how much?</text><text x=\"262\" y=\"138\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\" text-anchor=\"middle\">who?</text></svg>",
          "caption": "海報的標題、日期、地點、價格四項資訊,分別對應 when/where/how much/who 四種提問。",
          "trap": "⚠ 看到 free for kids 就以為全部免費,或把 20% off 當成只付 20%。折扣與例外條件最常被誤讀,務必看清「對誰」「打幾折」「有沒有期限」。"
        },
        {
          "h": "書信與 email 閱讀",
          "points": [
            "開頭稱呼與結尾敬語透露正式程度:Dear Mr./Ms. + 姓 與 Sincerely / Best regards 屬正式(對師長、商家、不熟者);Hi / Hey + 名字 與 Cheers / See you 屬非正式(對朋友、家人)。",
            "第一段(主旨句)通常點出寫信目的:I'm writing to... / I would like to... / Just wanted to...。抓到這句就掌握全信重點,中間段落才是細節與理由。",
            "判斷寄件者與收件者的關係與語氣:由稱呼、用字(please / could you 較客氣 vs. 直接命令)、與所談事項(請假、道歉、邀約、抱怨)綜合判斷,別只看單一線索。",
            "email 特有欄位也是考點:Subject(主旨)概括全信、To/From 看收發雙方、附件(attachment)或行動要求(reply by Friday)常是細節題答案。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"8\" y=\"8\" width=\"344\" height=\"174\" rx=\"8\" fill=\"#eef4f2\"/><rect x=\"24\" y=\"20\" width=\"312\" height=\"26\" rx=\"4\" fill=\"#f3e7df\"/><text x=\"34\" y=\"38\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">Subject: Day off</text><text x=\"230\" y=\"38\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">主旨</text><text x=\"34\" y=\"66\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">Dear Mr. Lin,</text><text x=\"230\" y=\"66\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">稱呼:正式</text><text x=\"34\" y=\"94\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">I'm writing to ask...</text><text x=\"230\" y=\"94\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\">目的句</text><text x=\"34\" y=\"122\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">...next Monday.</text><text x=\"230\" y=\"122\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\">細節</text><text x=\"34\" y=\"152\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">Sincerely, Amy</text><text x=\"230\" y=\"152\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">結尾:正式</text></svg>",
          "caption": "email 的主旨、稱呼、目的句、細節、結尾敬語,各自對應不同考點。",
          "trap": "⚠ 把中段細節當成寫信目的。目的幾乎都在第一段的 I'm writing to...;另外 Dear 不代表親密、Sincerely 才判定正式,要靠整體語氣而非單一字。"
        },
        {
          "h": "菜單與點餐單閱讀 menu reading",
          "points": [
            "菜單常分區塊:前菜 appetizers、主餐 main dishes、飲料 drinks、甜點 desserts,題目問哪一類就到對應區塊找,不必整張看。",
            "看清價錢與搭配規則:套餐 set 或 combo 常含飲料,單點要另外加錢;Soup of the day、Today's special 是當日特餐。",
            "算總額要注意服務費或稅:常見 service charge included(已含服務費)或 plus tax(另加稅),別漏算這些附加費用。"
          ],
          "formula": "",
          "trap": "計算餐費時忽略套餐已含飲料而重複加價,或漏看 service charge、tax 的加成,是應用文常見陷阱;另外 free refill(免費續杯)指飲料不另外收費,別誤算成加購。"
        },
        {
          "h": "時刻表與行程表閱讀 schedule reading",
          "points": [
            "時刻表用『行列交叉』定位:先找路線或日期那一欄,再找時間那一列,交叉處就是班次,別被相鄰欄位干擾。",
            "注意 a.m. 與 p.m. 及 24 小時制:14:30 就是下午 2:30;departure 是出發、arrival 是抵達,問抵達就看 arrival 那一欄。",
            "留意附註與例外:daily(每天)、weekdays only(僅平日)、except Sundays(週日除外),班次常有限定日期。"
          ],
          "formula": "",
          "trap": "把出發 departure 與抵達 arrival 看反,或忽略 weekdays only、except Sundays 等限定條件,是時刻表題最常見失分;算時間差遇跨整點要正確進位(9:50 到 10:20 是 30 分鐘)。"
        },
        {
          "h": "邀請卡與通知單閱讀 invitation and notice",
          "points": [
            "邀請卡先抓 5W:活動是什麼 what(生日派對、婚禮)、時間 when、地點 where、邀請對象 who,以及是否需要回覆。",
            "RSVP 是『請回覆』,常附截止日,如 by June 5,題目常考要在何時前回覆或聯絡誰。",
            "通知單(notice)多為規定或提醒:看 must、should、do not、No + Ving(如 No parking 禁止停車)等指令字,快速抓出要求與禁止事項。"
          ],
          "formula": "",
          "trap": "RSVP 容易被誤解,它是『請回覆出席與否』而非活動名稱;通知單的 No smoking、Keep off the grass 等否定指令是考點,別把禁止事項看成允許事項。"
        }
      ],
      "quiz": [
        {
          "stem": "SUMMER SWIM CAMP — July 1–14, 9 a.m.–noon. $120 for two weeks. Sign up before June 20 and get $30 off. Members pay only half price (after the early-bird discount does not apply to members). If a non-member signs up on June 15, how much does he pay?",
          "options": [
            "$120",
            "$45",
            "$60",
            "$90"
          ],
          "answer": 3,
          "explanation": "非會員在 6/20 前報名,享 $30 早鳥折扣:120 − 30 = $90。會員半價且不適用早鳥,與非會員無關。",
          "trap": "⚠ 把會員半價($60)誤套到非會員身上。題目明說早鳥折扣不適用會員,且此人是 non-member,只能用 $30 off。"
        },
        {
          "stem": "NOTICE: The library elevator will be out of service from May 3 to May 5 for repairs. During this time, please use the stairs. Visitors who need wheelchair access should call the front desk in advance. What is the main purpose of this notice?",
          "options": [
            "To ask visitors to stop coming to the library",
            "To advertise a new elevator",
            "To inform readers the elevator cannot be used for a few days",
            "To sell wheelchairs at the front desk"
          ],
          "answer": 2,
          "explanation": "告示目的是通知電梯 5/3–5/5 維修停用,請改走樓梯。屬「通知 + 規定」性質。",
          "trap": "⚠ 看到 wheelchair / front desk 就選賣輪椅,或看到 out of service 就以為叫人別來。告示核心是「停用通知」,其餘是配套說明。"
        },
        {
          "stem": "From: coach_wang@school.edu  To: team members  Subject: Saturday's game\n\nHi all, our game this Saturday has been moved from 2 p.m. to 10 a.m. because of the afternoon rain forecast. Please arrive at the field 30 minutes early to warm up. Reply to let me know if you can make it. — Coach Wang\n\nWhat time should players get to the field?",
          "options": [
            "9:30 a.m.",
            "10:00 a.m.",
            "1:30 p.m.",
            "2:00 p.m."
          ],
          "answer": 0,
          "explanation": "比賽改到 10 a.m.,且要求提前 30 分鐘到場熱身,故 10:00 − 0:30 = 9:30 a.m.。",
          "trap": "⚠ 直接選 10:00(比賽時間)或 1:30(舊時間的提前 30 分)。要結合「新時間」與「提前 30 分鐘」兩個條件計算。"
        },
        {
          "stem": "BUY 2 GET 1 FREE on all T-shirts! Each T-shirt is $200. The free one is the cheapest among the three. Lisa picks three T-shirts priced $200, $200, and $250. How much does she pay?",
          "options": [
            "$650",
            "$450",
            "$400",
            "$250"
          ],
          "answer": 1,
          "explanation": "買二送一,免費的是三件中最便宜者($200)。付 250 + 200 = $450。",
          "trap": "⚠ 誤把最貴($250)當贈品,或全付 $650 忘了折扣。規則明說 free one is the cheapest,要扣掉最便宜的 $200。"
        },
        {
          "stem": "Dear Ms. Chen,\n\nI am writing to apologize for missing the meeting last Friday. My train was delayed for over two hours, and I could not reach the office in time. I have attached the notes I prepared so the team can still review them. Please let me know if a make-up meeting is needed.\n\nSincerely,\nDavid\n\nWhat is the main purpose of this email?",
          "options": [
            "To complain about the train company",
            "To invite Ms. Chen to a party",
            "To apologize for being absent and offer his notes",
            "To ask for a day off next week"
          ],
          "answer": 2,
          "explanation": "第一段 I am writing to apologize for missing the meeting 即點明目的:為缺席致歉,並附上筆記供團隊參考。",
          "trap": "⚠ 火車誤點只是「原因」,不是寫信目的;附上 notes 與提議補會是補充。目的句永遠看第一段的 I am writing to...。"
        },
        {
          "stem": "TRAIN TIMETABLE (to Hualien)\nDeparture 07:50 → Arrival 10:35\nDeparture 09:10 → Arrival 11:30\nDeparture 11:00 → Arrival 14:05\nTom must arrive in Hualien before 11:45 for a meeting. Which is the LAST train he can take?",
          "options": [
            "07:50 train",
            "11:00 train",
            "None of the trains work",
            "09:10 train"
          ],
          "answer": 3,
          "explanation": "需在 11:45 前抵達:07:50→10:35(可)、09:10→11:30(可,且最晚)、11:00→14:05(太晚)。最後一班合格的是 09:10。",
          "trap": "⚠ 題目問「最晚 latest」可搭的車,不是最早。07:50 雖可,但 09:10 也在 11:45 前抵達且更晚,才是答案。"
        },
        {
          "stem": "MENU — Lunch Set (11:00–14:00 only): Main + Soup + Drink for $180. Extra dessert +$40. Drinks: coffee, tea, or juice (juice +$20). Anna orders a lunch set with juice and adds a dessert at 1 p.m. How much is her bill?",
          "options": [
            "$240",
            "$220",
            "$280",
            "$180"
          ],
          "answer": 0,
          "explanation": "午間套餐 $180,果汁加 $20,甜點加 $40:180 + 20 + 40 = $240。13:00 在 11:00–14:00 內,套餐成立。",
          "trap": "⚠ 漏算 juice 的 +$20(以為飲料全免費),只算成 $220。菜單常在括號藏「某選項要加價」。"
        },
        {
          "stem": "WANTED: Part-time helper at Sunny Café. Weekends only, 8 a.m.–2 p.m. Must be over 18. No experience needed; training provided. Call 02-1234-5678. Which person is suitable to apply?",
          "options": [
            "A 16-year-old student free on weekends",
            "A 25-year-old with no café experience, free on Saturdays and Sundays",
            "A 30-year-old who can only work mornings on Mondays",
            "A 20-year-old free only on weekday evenings"
          ],
          "answer": 1,
          "explanation": "條件:週末、8–14 點、滿 18 歲、無經驗可。25 歲、週六日有空、無經驗者完全符合。",
          "trap": "⚠ 16 歲不滿 18(出局)、週間晚上或週一早上都不符「週末」。No experience needed 是「不需要經驗」,別誤以為「需要經驗」而排除無經驗者。"
        },
        {
          "stem": "Hey Mark,\n\nLong time no see! A bunch of us are getting together at my place this Friday night for board games and pizza. Bring your little brother if you want — the more the merrier. Just text me back so I know how much pizza to order. Can't wait!\n\nCheers,\nJenny\n\nWhat can we tell about the relationship between Jenny and Mark?",
          "options": [
            "Jenny is Mark's boss",
            "They are strangers",
            "Jenny is Mark's teacher",
            "They are close friends"
          ],
          "answer": 3,
          "explanation": "由 Hey / Long time no see / Cheers / the more the merrier 等非正式、親切用語,可判斷兩人是好朋友。",
          "trap": "⚠ Bring your brother、text me 等口語暗示親近;師生或上司下屬不會這樣寫。語氣判斷要綜合稱呼與整體用字,而非單看一句。"
        },
        {
          "stem": "GYM MEMBERSHIP\nMonthly: $900/month\nYearly: $9,000/year (one-time payment)\nStudents get 10% off any plan. Ben is a student who plans to work out for a whole year. Which choice is cheaper, and by how much?",
          "options": [
            "Monthly is cheaper by $1,620",
            "Yearly is cheaper by $900",
            "Yearly is cheaper by $1,620",
            "They cost the same"
          ],
          "answer": 2,
          "explanation": "學生一律 9 折。月繳一整年:900×12 = 10,800,×0.9 = $9,720;年繳:9,000×0.9 = $8,100。年繳較便宜,差 9,720 − 8,100 = $1,620。",
          "trap": "⚠ 折扣要對「兩種方案都套用」後再比較,不能拿打折前的價差($1,800)當答案,也別忘了月繳要先乘 12 個月。"
        },
        {
          "stem": "POOL RULES\n1. No running.\n2. Children under 12 must be with an adult.\n3. No food in the pool area, except in the snack zone.\n4. The pool closes at 8 p.m.\nWhich action is ALLOWED by the rules?",
          "options": [
            "Eating a sandwich in the snack zone",
            "Running beside the pool",
            "A 10-year-old swimming alone",
            "Staying in the pool until 9 p.m."
          ],
          "answer": 0,
          "explanation": "規則 3 有例外:食物在 snack zone 是允許的。其餘三項都違規(獨自、跑步、超過 8 點)。",
          "trap": "⚠ 規則 3 的 except in the snack zone 正是答案來源。看到 No food 就以為全面禁食,會錯過例外條件。"
        },
        {
          "stem": "Dear Customer,\n\nThank you for your order (#A203). Unfortunately, the blue jacket you ordered is out of stock. We can either send you the same jacket in black, or give you a full refund. Please reply within 7 days to tell us your choice. After 7 days, we will issue a refund automatically.\n\nBest regards,\nOnline Store Team\n\nIf the customer does NOT reply, what will happen?",
          "options": [
            "They will receive the blue jacket",
            "They will get a refund",
            "Nothing will happen",
            "They will receive a black jacket"
          ],
          "answer": 1,
          "explanation": "信中說 7 天內沒回覆,將「自動退款」(issue a refund automatically)。故不回覆 = 退款。",
          "trap": "⚠ 黑色外套需「主動回覆選擇」才會寄;不回覆的預設結果是退款。要看清「若不行動」對應哪個結果。"
        },
        {
          "stem": "A piece of text reads: 'Fasten your seat belt. Put your seat back up. We will land in about 20 minutes.' Where would you most likely hear or read this?",
          "options": [
            "On an airplane",
            "In a movie theater",
            "On a ship",
            "At a swimming pool"
          ],
          "answer": 0,
          "explanation": "fasten your seat belt、seat back up、land(降落)等用語為飛機廣播,故情境是在飛機上。",
          "trap": "⚠ seat belt 也用於汽車,但 land(降落)與 seat back up 是飛機特有。依文體判斷情境須抓最具決定性的線索詞。"
        },
        {
          "stem": "FLASH SALE — TODAY ONLY!\nAll shoes 25% off. Pay with our store card to get an EXTRA 10% off the discounted price. A pair of shoes is originally $1,000. If you pay with the store card, how much do you pay?",
          "options": [
            "$650",
            "$675",
            "$700",
            "$750"
          ],
          "answer": 1,
          "explanation": "先打 75 折:1,000×0.75 = 750;再以店卡折 10%:750×0.9 = $675。折扣須「先後相乘」而非相加。",
          "trap": "⚠ 把 25% + 10% 加成 35% off 而選 $650。兩段折扣是「在折後價再打折」,要相乘(0.75×0.9),不可直接相加。"
        },
        {
          "stem": "From: lisa@mail.com  To: hotel@stay.com  Subject: Booking question\n\nHello, I booked a room for two nights (June 10–12). I'd like to check in earlier, at around 11 a.m. on June 10, instead of the usual 3 p.m. Is early check-in possible, and is there an extra fee? Thank you. — Lisa\n\nWhat does Lisa want to know?",
          "options": [
            "Whether she can cancel her booking",
            "Whether the hotel has a swimming pool",
            "Whether she can check in early and if it costs extra",
            "Whether breakfast is included"
          ],
          "answer": 2,
          "explanation": "信中明問兩件事:能否提早入住(early check-in)以及是否額外收費(extra fee)。",
          "trap": "⚠ 只抓到 early check-in 卻漏掉 extra fee。書信細節題常一句問兩件事,正解須完整涵蓋,別選只對一半的選項。"
        },
        {
          "stem": "MOVIE SCHEDULE — 'Space Heroes' (Screen 2)\n13:00 / 15:30 / 18:00 / 20:30\nThe movie is 120 minutes long. Kevin wants to finish watching before 18:00 so he can catch a 6:30 p.m. bus. Which is the LATEST showing he can choose?",
          "options": [
            "13:00",
            "20:30",
            "18:00",
            "15:30"
          ],
          "answer": 3,
          "explanation": "片長 120 分鐘。15:30 開演 → 17:30 結束(在 18:00 前,可)。18:00 場 → 20:00 結束(太晚)。故最晚是 15:30。",
          "trap": "⚠ 看到 before 18:00 就選 18:00 場。要把「開演時間 + 120 分鐘」算出散場時間,散場須早於 18:00。"
        },
        {
          "stem": "LOST & FOUND NOTICE: A black umbrella was found in Room 305 on Monday. The owner can pick it up at the office before Friday. After Friday, it will be given to charity. Who is this notice mainly for?",
          "options": [
            "The cleaning staff of Room 305",
            "People who want to donate umbrellas",
            "The person who lost a black umbrella",
            "Visitors looking for Room 305"
          ],
          "answer": 2,
          "explanation": "失物招領告示的對象是「遺失黑傘的人」,提醒其週五前到辦公室領取。",
          "trap": "⚠ charity / office 等字可能誤導成捐贈者或清潔人員。Lost & Found 告示的訴求對象永遠是「失主」。"
        },
        {
          "stem": "Dear Principal Wu,\n\nOn behalf of the parents, I am writing to express our thanks for the new library. The bright reading room and the wide range of books have made our children love reading more. We hope the school will keep up such good work.\n\nRespectfully,\nThe Parents' Association\n\nWhat is the tone of this letter?",
          "options": [
            "Casual and joking",
            "Angry and complaining",
            "Worried and uncertain",
            "Grateful and formal"
          ],
          "answer": 3,
          "explanation": "On behalf of、express our thanks、Respectfully 等用語顯示「感謝且正式」的語氣。",
          "trap": "⚠ keep up such good work 是鼓勵而非抱怨。語氣判斷要看 express our thanks 等情感字眼與正式敬語,別被單一字誤導成不滿。"
        },
        {
          "stem": "PARKING NOTICE: Free parking for the first 30 minutes. After that, $30 per hour (any part of an hour counts as a full hour). Mr. Lin parks for 2 hours and 10 minutes. How much does he pay?",
          "options": [
            "$30",
            "$60",
            "$90",
            "$120"
          ],
          "answer": 1,
          "explanation": "前 30 分免費,計費時間為 2 時 10 分 − 30 分 = 1 時 40 分。不足一小時以一小時計,故算 2 小時:2×30 = $60。",
          "trap": "⚠ 忘了扣前 30 分免費(直接算 2 時 10 分→3 小時 $90),或忽略「不足一小時算一小時」。兩個條件都要套用。"
        },
        {
          "stem": "Which of the following is the MOST appropriate closing for a formal complaint email to a company you have never contacted before?",
          "options": [
            "Yours sincerely, Amy Wang",
            "Cheers, Amy",
            "XOXO, Amy",
            "Love, Amy"
          ],
          "answer": 0,
          "explanation": "對不熟悉的公司寫正式投訴信,結尾用 Yours sincerely + 全名最得體。Love / Cheers / XOXO 都太私人或隨意。",
          "trap": "⚠ Cheers 看似有禮但屬非正式;正式商業書信用 Yours sincerely / Best regards。書信結束語須匹配對象的正式程度。"
        },
        {
          "stem": "CONCERT TICKETS\nRegular: $800\nStudent: $500 (must show student ID at the door)\nGroup (4+ people): $600 each\nA group of 5 students buys tickets together. They want the cheapest total. Which option should they choose and what is the total?",
          "options": [
            "Regular price, $4,000",
            "Group price, $3,000",
            "Mix of student and group, $2,700",
            "Student price, $2,500"
          ],
          "answer": 3,
          "explanation": "5 名學生:學生票 500×5 = $2,500;團體票 600×5 = $3,000。學生票較便宜,選 $2,500。",
          "trap": "⚠ 以為人多就該選 group。團體票 $600 反而比學生票 $500 貴,5 人皆有學生證時學生票最划算。要逐項比價而非看人數。"
        },
        {
          "stem": "Dear Editor,\n\nI read your article about cutting down trees in City Park last week. While I understand the need for a new road, I strongly believe the park's old trees should be protected. They give us clean air and shade. I hope the city will think again before making a final decision.\n\nA Concerned Reader\n\nWhat is the writer's attitude toward cutting down the trees?",
          "options": [
            "Strongly in favor of it",
            "Has no opinion",
            "Against it",
            "Only cares about the new road"
          ],
          "answer": 2,
          "explanation": "writer 說 strongly believe the park's old trees should be protected、希望市府 think again,態度是「反對砍樹」。",
          "trap": "⚠ I understand the need for a new road 只是先讓步,真正立場在 but/strongly believe 之後。看到讓步句別誤判為贊成。"
        },
        {
          "stem": "WORKSHOP REGISTRATION\nFee: $300. Early-bird (before Oct 1): $250. Pay online and get $50 off the price you qualify for. Mia registers online on September 28. How much does she pay?",
          "options": [
            "$200",
            "$250",
            "$300",
            "$150"
          ],
          "answer": 0,
          "explanation": "9/28 在 10/1 前 → 早鳥價 $250;再線上付款折 $50:250 − 50 = $200。",
          "trap": "⚠ 漏掉早鳥(直接 300 − 50 = 250)或漏掉線上折扣。the price you qualify for 指「她符合的早鳥價」,兩段折扣都要套。"
        },
        {
          "stem": "From: school_office  Subject: Field Trip Form\n\nThe field trip to the Science Museum is on May 20. Please return the signed permission form and the $250 fee to your homeroom teacher by May 13. Students without a signed form by the deadline cannot join the trip. What MUST students do to join?",
          "options": [
            "Return the signed form and pay $250 by May 13",
            "Return the signed form only",
            "Pay $250 only",
            "Show up at the museum on May 20"
          ],
          "answer": 0,
          "explanation": "通知要求:在 5/13 前「繳回簽名同意書」並「繳交 $250」給導師,兩者皆須。未交簽名表者不能參加。",
          "trap": "⚠ 只選付錢或只選交表都不完整;deadline 是 5/13(非出遊日 5/20)。細節題須同時滿足「兩個條件 + 期限」。"
        },
        {
          "stem": "A short text reads: 'Add 2 cups of flour. Stir in 1 egg. Bake at 180°C for 25 minutes. Let it cool before serving.' What type of text is this?",
          "options": [
            "A movie review",
            "A weather report",
            "A love letter",
            "A recipe (cooking instructions)"
          ],
          "answer": 3,
          "explanation": "Add、Stir、Bake、cool before serving 等步驟性祈使句,且含材料與溫度時間,是「食譜/烹飪說明」。",
          "trap": "⚠ 依文體判斷要抓格式特徵:一連串祈使動詞 + 份量 + 溫度時間 = 食譜。別被單一字(cup, egg)誤導去想其他情境。"
        },
        {
          "stem": "Read the advertisement and answer the question.\n\nSUPER SAVER SALE!\nAll winter jackets are 30% off this week.\nOriginal price: $50 each.\nSale ends this Friday!\n\nQuestion: How much does a customer pay for one winter jacket during the sale?",
          "options": [
            "$15",
            "$30",
            "$20",
            "$35"
          ],
          "answer": 3,
          "explanation": "原價 $50,「30% off」表示折扣 30%,顧客只需付原價的 70%。$50 × 0.7 = $35,故售價為 $35。常見錯誤是把 30% 當成直接減掉的金額($50−$30=$20),或誤以為只付折扣部分的 $30 或 $15。",
          "trap": "「30% off」是打七折(付 70%),不是直接減 $30,也不是只付 $30;先算折扣再算實付金額。"
        },
        {
          "stem": "Read the letter and answer the question.\n\nDear Amy,\nThank you so much for helping me with my science project last week. To show my thanks, I would like to invite you to my birthday party. It will be held this Saturday at 6 p.m. at Sunshine Restaurant. Please let me know if you can come.\nYour friend,\nKevin\n\nQuestion: What is the main purpose of Kevin's letter?",
          "options": [
            "To thank Amy for a birthday gift",
            "To invite Amy to a birthday party",
            "To ask Amy for help with a project",
            "To introduce a new restaurant to Amy"
          ],
          "answer": 1,
          "explanation": "信中雖然先向 Amy 道謝,但關鍵句「I would like to invite you to my birthday party」清楚說明寫信的主要目的是「邀請 Amy 參加生日派對」,並附上時間與地點。道謝只是開頭鋪陳,不是主要目的;Kevin 並未向 Amy 求助或介紹餐廳。"
        },
        {
          "stem": "Read the notice and answer the question.\n\nRiverside Swimming Pool — Ticket Prices\nAdult: $8\nChild (under 12): $5\nFamily Ticket (2 adults + 2 children): $22\n\nMr. Lin takes his wife and their two sons, aged 8 and 10, to the pool.\n\nQuestion: If they choose the cheapest way to buy tickets, how much will they pay in total?",
          "options": [
            "$26",
            "$30",
            "$16",
            "$22"
          ],
          "answer": 3,
          "explanation": "兩個兒子(8 歲、10 歲)都未滿 12 歲,算兒童票。若分開買:2 位大人 2×$8=$16,加 2 位兒童 2×$5=$10,共 $26。但家庭票(2 大人+2 小孩)只要 $22,比分開買便宜,所以最省的方式是買家庭票,總共 $22。",
          "trap": "兩個兒子都未滿 12 歲要用兒童票;且家庭票($22)比逐張買($26)划算,題目問「最省」要選家庭票的價格。"
        },
        {
          "stem": "Read the notice and choose the best word to complete it.\n\nNotice: Because of the coming typhoon, tomorrow's school sports day has been ______ to next Monday. Please check your email for more information.\n\nQuestion: Which word best fits the blank?",
          "options": [
            "canceled",
            "postponed",
            "finished",
            "reminded"
          ],
          "answer": 1,
          "explanation": "因颱風把運動會「改到下週一」舉行,應用 postponed(延期)。句中「to next Monday」表示改到之後的時間,代表活動仍會舉行,只是延後,因此不是 canceled(取消);finished(結束)與 reminded(提醒)在語意與搭配上都不合。",
          "trap": "空格後有「to next Monday」表示改期、活動照常舉行,別看到颱風就選 canceled(取消)。"
        }
      ]
    },
    {
      "id": "readinginference",
      "name": "閱讀推論與指代 (Inference & Reference)",
      "week": "全期",
      "notes": [
        {
          "h": "指代關係的判斷",
          "points": [
            "代名詞 it / they / this / that / one 通常指「前文最近、且語意與文法都吻合的對應名詞」,閱讀時要回頭往前找:先鎖定離代名詞最近的名詞,再用語意檢驗代進去是否通順。",
            "單複數必須一致:it / its 指單數先行詞,they / them / their 指複數先行詞;若句中同時出現單複數名詞,可用「數」快速刪去不可能的選項。",
            "this / that / which / it 有時不是指單一名詞,而是「指整件事、前一整句的概念或前面提到的整段論述」;遇到 This shows... / That is why... 時,先行詞往往是「前一句所敘述的事實」而非某個單字。",
            "指代判斷的解題流程:① 確認代名詞的數與性 → ② 找最近且語意相容的名詞 → ③ 把該名詞代回原句通讀驗證,語意若矛盾就往前再找。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"20\" width=\"336\" height=\"34\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"20\" y=\"42\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">The students raised</text><text x=\"168\" y=\"42\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">their</text><text x=\"206\" y=\"42\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">hands.</text><path d=\"M170 56 Q 110 92 60 56\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><polygon points=\"60,56 66,62 54,62\" fill=\"#c9755c\"/><rect x=\"12\" y=\"108\" width=\"336\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#f0a52e\"/><text x=\"180\" y=\"128\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">their → the students(複數對複數)</text><rect x=\"12\" y=\"148\" width=\"336\" height=\"28\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"180\" y=\"167\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">單複數須一致,代回驗證</text></svg>",
          "caption": "代名詞往回連到最近且數一致的先行詞,並代回原句驗證。",
          "trap": "⚠ 常見錯誤是直接選「離得最近的名詞」卻忽略單複數或語意:若 they 後面動作只有人能做,就不能指代前面的物;this 也可能指「前一整句的概念」而非單一名詞,別硬找一個單字。"
        },
        {
          "h": "推論題的線索與技巧",
          "points": [
            "推論題(infer / imply / suggest / most likely)考的是「文中沒有明說,但根據文字證據可合理推得」的結論;答案一定要能在文中找到依據,既不能照抄明示句,也不能過度延伸到文章沒支持的範圍。",
            "由用詞與情境細節推測地點、職業或人物關係:看到 menu / order / tip / waiter 推測在餐廳;看到 gate / boarding / flight 推測在機場;看到 prescription / patient 推測為醫生。把這些「線索字」集合起來指向同一情境。",
            "推測生字字義靠上下文線索:同位語(逗號補充說明)、對比轉折詞(but / however 暗示相反義)、舉例(such as)或因果關係,都能框出陌生字的大致意思,不必認得該字也能選對。",
            "作者態度與語氣由評價性形容詞、副詞與標點判斷:positive / fortunately / impressive 透露正面;unfortunately / merely / so-called 透露負面或保留;若全是中性敘述事實則為 neutral / objective。判斷時要綜觀全文基調,別被單一字眼誤導。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"20\" width=\"96\" height=\"28\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"60\" y=\"39\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">menu</text><rect x=\"12\" y=\"58\" width=\"96\" height=\"28\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"60\" y=\"77\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">order</text><rect x=\"12\" y=\"96\" width=\"96\" height=\"28\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"60\" y=\"115\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">tip</text><path d=\"M112 34 L 210 80\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><path d=\"M112 72 L 210 84\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><path d=\"M112 110 L 210 92\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><circle cx=\"262\" cy=\"86\" r=\"40\" fill=\"#eef4f2\" stroke=\"#f0a52e\" stroke-width=\"2\"/><text x=\"262\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#f0a52e\">推論</text><text x=\"262\" y=\"98\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\">在餐廳</text><rect x=\"12\" y=\"150\" width=\"336\" height=\"28\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"180\" y=\"169\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\">線索集合須有文本依據</text></svg>",
          "caption": "把零散的線索字集合起來,匯聚指向同一個可由文本支持的推論。",
          "trap": "⚠ 推論題最常見的錯誤有二:一是選「文中直接寫出」的句子(那是細節題不是推論),二是選「合理但文章沒提到」的延伸選項。正解必須「文中沒明說卻有證據支持」,過與不及都錯。"
        },
        {
          "h": "言外之意與弦外之音 implication",
          "points": [
            "推論題常考『說話者的言外之意』:有人問 Is it cold in here? 並非單純問天氣,可能暗示『請關窗或開暖氣』,要從情境推出真正用意。",
            "對話中的婉轉拒絕要讀懂:Maybe next time、I'll think about it 常是客氣的『不要、拒絕』,不是真的答應。",
            "從人物的反應與語氣推測情緒:皺眉、嘆氣、沉默常暗示不滿或為難,文字雖沒明說 angry,仍可合理推得其心情。"
          ],
          "formula": "",
          "trap": "推論要『有文本依據』但不可『過度延伸』:從 Maybe next time 推出『他答應了』是過度解讀;只能推到文字證據支持的程度,別把個人想像當作答案。"
        },
        {
          "h": "由細節推時間地點與職業 inferring setting",
          "points": [
            "集合多個線索字指向同一情境:出現 boarding pass、gate、flight 推測在機場;出現 blackboard、homework、quiz 推測在學校或教室。",
            "由活動與用品推測職業或身分:看到 take your temperature、medicine 推測對方是醫生或護理師;看到 menu、order、bill 推測是服務生與顧客。",
            "由季節、天氣與穿著推測時間:wear a coat、snow 推測冬天;leaves turn red、cooler days 推測秋天,文章未明說也能推得。"
          ],
          "formula": "",
          "trap": "單一線索字不足以下定論,要『多個線索交叉』才可靠;例如只看到 water 就推在游泳池太武斷,須結合 swimsuit、lifeguard 等才成立,避免以偏概全。"
        },
        {
          "h": "代名詞與指示詞的指代 pronoun reference",
          "points": [
            "this、that、it 有時不指單一名詞,而是『指前面整句或整件事』:看到 This means... 或 That's why...,先行詞往往是前一句敘述的事實,不是某個單字。",
            "one、ones 用來代替前面提過的『同類但不同個』名詞:I lost my pen, so I bought a new one,one 代替 pen,但指的是另一支。",
            "指代要把代名詞代回原句通讀,確認意思通順;單複數也要對應,things 用 they、a book 用 it。"
          ],
          "formula": "",
          "trap": "this、that 指『整件事』時,別硬找一個單字當先行詞,要把整個概念代回去通讀才正確;另外代名詞與先行詞的單複數須一致,單數名詞別用 they 回指。"
        }
      ],
      "quiz": [
        {
          "stem": "The robins built a nest under our roof in spring. By June, four eggs had hatched, and the parents flew back and forth all day feeding them. What does \"them\" most likely refer to?",
          "options": [
            "the parents",
            "the eggs",
            "the robins",
            "the baby birds"
          ],
          "answer": 3,
          "explanation": "蛋已 hatched(孵化)後變成幼鳥,父母「整天來回餵食」的對象是孵出的雛鳥,故 them 指 the baby birds。雖然 eggs 在文法上是複數,但蛋已孵化、無法被「餵食」,語意上不合。",
          "trap": "⚠ 只看「最近的複數名詞」會誤選 eggs,但 hatched 後蛋已成幼鳥,被餵食的是雛鳥;指代要通過語意驗證,不能只靠位置。"
        },
        {
          "stem": "Many people think working from home means less effort. This, however, is a misunderstanding; remote workers often put in longer hours than office staff. What does \"This\" refer to?",
          "options": [
            "working from home",
            "the longer hours of remote workers",
            "office staff's effort",
            "the belief that working from home means less effort"
          ],
          "answer": 3,
          "explanation": "This 指代前一整句所陳述的「想法/觀念」——也就是『在家工作代表比較輕鬆』這個看法,後面 is a misunderstanding 正是在否定這個想法。this 在此指一整句的概念,非單一名詞。",
          "trap": "⚠ 易直接選 working from home 這個單一名詞片語,但 This 指的是「人們的那個想法」整件事,後文 is a misunderstanding 才講得通。"
        },
        {
          "stem": "\"Please fasten your seatbelt and return your tray table to its upright position. We will be landing in about fifteen minutes.\" Where is this announcement most likely heard?",
          "options": [
            "On a train",
            "On a ship",
            "On an airplane",
            "In a movie theater"
          ],
          "answer": 2,
          "explanation": "seatbelt、tray table、upright position、landing 等線索集合指向飛機降落前的廣播。tray table(餐桌板)與 landing(降落)是飛機特有的用語。",
          "trap": "⚠ 火車也有座位但無 tray table 與 landing;「landing(降落)」一詞鎖定為飛機,別因有 seatbelt 就泛選交通工具。"
        },
        {
          "stem": "Although the new policy was praised by the media, Mr. Lin remained skeptical. \"Time,\" he said with a faint smile, \"will tell whether such promises are worth anything.\" What is Mr. Lin's attitude toward the policy?",
          "options": [
            "Enthusiastic and supportive",
            "Completely indifferent",
            "Angry and hostile",
            "Doubtful and reserved"
          ],
          "answer": 3,
          "explanation": "remained skeptical(保持懷疑)、faint smile(淡淡的、勉強的微笑)與 whether such promises are worth anything(這些承諾是否值得)都顯示他持保留、懷疑態度,故為 doubtful and reserved。",
          "trap": "⚠ media praised 是「媒體」的態度,非林先生的;skeptical 不等於 angry/hostile(那太強),也不是 indifferent(他其實有評論)。態度題要鎖定指定對象。"
        },
        {
          "stem": "The hikers were exhausted, but the sight of the cabin lights in the distance made them quicken their pace. From this sentence, we can infer that the hikers ______.",
          "options": [
            "had already arrived at the cabin",
            "were lost and could not find any shelter",
            "decided to set up a tent instead",
            "felt relieved and hopeful upon seeing the lights"
          ],
          "answer": 3,
          "explanation": "看到小屋燈光便「加快腳步」,合理推論是他們因看到落腳處而感到寬慰、有了希望,故選 relieved and hopeful。文中未明說情緒,但加快腳步的行為提供依據。",
          "trap": "⚠ quicken their pace 表示還沒到(排除已抵達);看到 cabin lights 表示有遮蔽處可去(排除迷路無處可去);推論要扣住「行為背後的合理心理」。"
        },
        {
          "stem": "The museum was packed; visitors had to shuffle slowly past each exhibit, barely able to pause before being nudged forward by the crowd behind. The word \"shuffle\" here most likely means ______.",
          "options": [
            "to move slowly with small steps",
            "to walk quickly and freely",
            "to run in panic",
            "to stand completely still"
          ],
          "answer": 0,
          "explanation": "由 packed(擁擠)、slowly、barely able to pause、nudged forward by the crowd 等線索可知人潮中只能「拖著小步緩慢移動」,故 shuffle 解作慢慢地小步移動。",
          "trap": "⚠ 上下文有 slowly 與 barely able to pause,故不可能是 quickly/freely;也非完全靜止(他們仍在 forward 前進)。生字義靠上下文鎖定,不必認得該字。"
        },
        {
          "stem": "\"I'm afraid the figure you submitted doesn't match our records. Could you double-check the quarterly report before our meeting?\" The speaker is most likely a ______.",
          "options": [
            "chef",
            "tour guide",
            "manager or accountant at a company",
            "kindergarten teacher"
          ],
          "answer": 2,
          "explanation": "figure(數字)、records、quarterly report(季報)、meeting 等職場與財務用語集合,指向公司主管或會計,故選 manager or accountant。",
          "trap": "⚠ 各選項都可能「開會」,但 quarterly report 與 figure/records 是財務職場語境,廚師、導遊、幼教不符。職業推論要看專屬線索字。"
        },
        {
          "stem": "Tom told his sister that he would lend her his bike if she promised to return it by Friday. The word \"it\" refers to ______.",
          "options": [
            "the promise",
            "Friday",
            "Tom's bike",
            "his sister"
          ],
          "answer": 2,
          "explanation": "return it(歸還它)的對象是被借出的 bike,且 it 為單數無生命,只有 bike 符合;promise 是抽象動作不會被 return,Friday 是時間,sister 是人(會用 her)。",
          "trap": "⚠ 句中有 promise、bike、Friday 多個名詞,但只有「腳踏車」能被 return 且為單數無生命物;用「數+語意」雙重篩選排除干擾。"
        },
        {
          "stem": "The report stated that sales rose in the first quarter, fell sharply in the second, and then slowly recovered in the third. Which conclusion is best supported by the passage?",
          "options": [
            "Sales kept rising throughout the year.",
            "Sales were highest in the second quarter.",
            "The second quarter was the weakest of the three.",
            "Sales never recovered after the drop."
          ],
          "answer": 2,
          "explanation": "第二季 fell sharply(大幅下跌),第三季才 slowly recovered,故三季中第二季最弱,選 C。其餘選項與文中描述的升→急跌→緩升趨勢矛盾。",
          "trap": "⚠ recovered 表示後來有回升(排除 never recovered);fell sharply 表示第二季是低谷而非最高。圖表/趨勢推論要逐段比對升降。"
        },
        {
          "stem": "\"You actually finished the whole project by yourself? In just one night?\" Lisa's eyes widened as she stared at the report. Lisa's reaction suggests that she ______.",
          "options": [
            "found the achievement hard to believe",
            "was disappointed with the result",
            "had helped finish the project herself",
            "had expected this all along"
          ],
          "answer": 0,
          "explanation": "由反問語氣 You actually... In just one night? 與 eyes widened、stared 的動作,可推論 Lisa 感到驚訝、覺得難以置信,故選 found it hard to believe。",
          "trap": "⚠ actually 與睜大眼睛的反應透露「意外」,故非『早就預期』;她在驚訝對方獨力完成,非自己幫忙。態度推論看語氣詞+肢體線索。"
        },
        {
          "stem": "Sea levels are rising. As a result, several low-lying island nations may disappear within decades. Coastal cities, too, are spending billions on flood defenses. The phrase \"As a result\" signals that the following information is ______.",
          "options": [
            "a contrast to the first sentence",
            "an effect caused by rising sea levels",
            "an example unrelated to the topic",
            "the cause of rising sea levels"
          ],
          "answer": 1,
          "explanation": "As a result 引導「結果/影響」,故島國可能消失是海平面上升所造成的後果(effect/cause-and-effect),選 B。它表因果中的「果」,非對比也非原因。",
          "trap": "⚠ As a result 是「因此」表結果,易與表原因混淆:海平面上升是因,島國消失是果。連接詞功能要分清因與果的方向。"
        },
        {
          "stem": "Read the note: \"Mom, I've taken the dog to the vet. There's soup in the fridge—just heat it up. Be back by six. —Kevin.\" Which statement is NOT directly stated but can be reasonably inferred?",
          "options": [
            "Kevin took the dog to the vet.",
            "There is soup in the fridge.",
            "The dog may be sick or needs a checkup.",
            "Kevin will be back by six."
          ],
          "answer": 2,
          "explanation": "A、B、D 都是字條「明示」的內容;只有 C「狗可能生病或需檢查」是由『帶狗看獸醫』推論出來、未直接寫出,屬合理推論。題目問的正是「未明示但可推論」者。",
          "trap": "⚠ 推論題要選「沒寫出但有依據」的;A/B/D 是原文照抄的細節(細節題),C 才是推論。看清題目問 inferred 還是 stated。"
        },
        {
          "stem": "Despite the heavy rain, the outdoor concert went on as planned, and to everyone's surprise, the crowd grew even larger as the night went on. We can infer that the audience was ______.",
          "options": [
            "easily discouraged by bad weather",
            "forced to attend against their will",
            "mostly there by mistake",
            "highly enthusiastic and devoted"
          ],
          "answer": 3,
          "explanation": "大雨中演唱會照常,且人潮反而越來越多,可推論觀眾非常熱情、投入,故選 enthusiastic and devoted。crowd grew larger 在 despite 大雨下,提供推論依據。",
          "trap": "⚠ Despite the heavy rain 加上人越來越多,正好相反於『被壞天氣勸退』;熱情是由「逆境中仍增加」推得,別被 heavy rain 誤導成負面。"
        },
        {
          "stem": "The ancient bridge, though weathered and cracked, still bears the weight of daily traffic—a testament to the skill of its builders. Here, \"a testament to\" most nearly means ______.",
          "options": [
            "a warning against",
            "an obstacle to",
            "a proof or evidence of",
            "a replacement for"
          ],
          "answer": 2,
          "explanation": "古橋雖風化龜裂仍能承重,作者用以「證明、見證」建造者的技術,故 a testament to = a proof/evidence of。前文的『仍能承重』正是支持此意的證據。",
          "trap": "⚠ 由 still bears the weight(仍承重)的正面語境,testament 應取「明證」義,而非警告或阻礙。生字片語靠整句正負語氣定調。"
        },
        {
          "stem": "Reviewer A wrote: \"The film is visually stunning but emotionally hollow.\" What does this comment imply about the film?",
          "options": [
            "It looks beautiful but fails to move the audience.",
            "It is both beautiful and deeply moving.",
            "It is ugly but emotionally powerful.",
            "It is a complete failure in every aspect."
          ],
          "answer": 0,
          "explanation": "visually stunning(視覺驚艷)but emotionally hollow(情感空洞),由轉折 but 可知:畫面美但無法打動人心,選 A。but 點出兩面評價的對比。",
          "trap": "⚠ but 連接的兩半是「視覺好/情感差」,故非全好也非全壞;hollow 指情感空洞而非醜。轉折詞 but 是判讀褒貶並存的關鍵。"
        },
        {
          "stem": "Sarah handed in her resignation on Monday. By Wednesday, the whole office knew, and by Friday, three colleagues had also begun updating their résumés. What can be inferred?",
          "options": [
            "Sarah was fired by the manager.",
            "Sarah's departure may have prompted others to consider leaving too.",
            "The whole office resigned on Friday.",
            "The colleagues were updating résumés for a school project."
          ],
          "answer": 1,
          "explanation": "Sarah 辭職後,同事接連開始更新履歷,合理推論她的離職可能促使他人也考慮離開,選 B。文中未明說因果,但時間先後與行為提供推論依據。",
          "trap": "⚠ resignation 是『主動辭職』非被開除(排除 A);only three colleagues 更新履歷,非整間辦公室辭職(排除 C 誇大)。推論要恰如其分,別過度延伸。"
        },
        {
          "stem": "\"Could you possibly turn the music down a little? Some of us have an early start tomorrow.\" The speaker is most likely ______.",
          "options": [
            "complaining politely about the noise",
            "asking to join the party",
            "praising the music",
            "offering to play louder music"
          ],
          "answer": 0,
          "explanation": "Could you possibly...? 是委婉請求,加上『有些人明早要早起』暗示音樂太吵影響休息,故為「禮貌地抱怨噪音並請求調低」,選 A。語氣禮貌但目的是止噪。",
          "trap": "⚠ 句子表面客氣(Could you possibly),易誤判為無不滿;但 turn the music down 與 early start 透露其實是委婉抱怨。功能題要看「言外的真正意圖」。"
        },
        {
          "stem": "The passage describes how a small startup, with no advertising budget, relied entirely on word of mouth and within two years became a household name. The phrase \"household name\" suggests the company became ______.",
          "options": [
            "a brand only sold in households",
            "widely known and familiar to the public",
            "a company that makes household cleaners",
            "a business that failed quietly"
          ],
          "answer": 1,
          "explanation": "household name 為慣用語,指「家喻戶曉、廣為人知」;前文 within two years became... 與口碑行銷正支持「廣為大眾熟知」,選 B。",
          "trap": "⚠ household name 不可逐字直譯成『家庭用品的名字』;它是慣用語=家喻戶曉。慣用語要取整體比喻義,結合 became...within two years 的成功語境。"
        },
        {
          "stem": "First, the seeds are soaked overnight. Next, they are planted in moist soil. After about a week, tiny green shoots appear. Finally, the seedlings are moved into larger pots. According to the order described, what happens immediately after the seeds are planted?",
          "options": [
            "The seeds are soaked.",
            "Green shoots appear after about a week.",
            "The seedlings are moved into larger pots.",
            "Nothing further is described."
          ],
          "answer": 1,
          "explanation": "依 First→Next→After about a week→Finally 的順序,種下後「約一週後冒出綠芽」是緊接的步驟,選 B。soaked 在「種下」之前發生,移盆在最後。",
          "trap": "⚠ soaked overnight 發生在『種下之前』,故非之後的步驟;順序題要依 First/Next/After/Finally 等時序詞排出步驟,別憑印象。"
        },
        {
          "stem": "The novel's hero never says he is afraid. Yet his trembling hands, his frequent glances at the door, and his too-quick laughter reveal what his words try to hide. The author conveys the hero's fear mainly through ______.",
          "options": [
            "the hero's direct statements",
            "descriptions of his actions and body language",
            "other characters' speeches",
            "the narrator's own fear"
          ],
          "answer": 1,
          "explanation": "主角嘴上不說怕,但發抖的手、頻看門口、過快的笑聲(動作與肢體語言)洩漏了恐懼,故作者主要透過「動作與肢體語言的描寫」呈現,選 B。",
          "trap": "⚠ 文中明說 never says he is afraid,故非靠直接陳述;恐懼是由 trembling hands 等行為間接透露。功能/手法題要分清「直說」與「以行為暗示」。"
        },
        {
          "stem": "Online ad: \"Spacious 2-bedroom apartment near the subway. Pet-friendly. Available from July 1. Contact us for a viewing today!\" From this ad, we can reasonably infer that ______.",
          "options": [
            "the apartment has already been rented out",
            "people who own pets are welcome to rent it",
            "the apartment is far from public transport",
            "the apartment can only be viewed after August"
          ],
          "answer": 1,
          "explanation": "Pet-friendly 直譯為對寵物友善,可推論「養寵物者可承租」,選 B。near the subway 表近大眾運輸,Available from July 1 表七月起可租、可隨時看屋。",
          "trap": "⚠ Available from July 1 表示尚未出租(排除 A);near the subway 表近捷運(排除 far);viewing today 表現在就能看(排除只能八月後)。廣告判讀要逐項對照細節。"
        },
        {
          "stem": "Critics had dismissed her debut album as forgettable. Ironically, it is now considered one of the most influential records of the decade. The word \"Ironically\" here implies that ______.",
          "options": [
            "the critics' early judgment turned out to be the opposite of the truth",
            "the album was indeed forgettable as predicted",
            "critics still dislike the album today",
            "the album had no influence at all"
          ],
          "answer": 0,
          "explanation": "Ironically 點出「諷刺地」——當初被評為平庸不值一記的專輯,如今卻成十年最具影響力之一,結果與評論家預測相反,選 A。",
          "trap": "⚠ Ironically 標示「事與願違、與預期相反」;forgettable 是當初的判斷,now considered...influential 才是事實。看到 ironically 要找出前後反差。"
        },
        {
          "stem": "\"We regret to inform you that, due to overwhelming demand, the position has been filled. We will keep your application on file.\" The tone of this message can best be described as ______.",
          "options": [
            "warm and congratulatory",
            "polite but disappointing",
            "angry and accusatory",
            "casual and humorous"
          ],
          "answer": 1,
          "explanation": "We regret to inform you(很遺憾通知您)、position has been filled(職缺已補滿)是客氣措辭傳達壞消息(落選),語氣為 polite but disappointing,選 B。",
          "trap": "⚠ regret to inform 是禮貌用語但內容是壞消息;keep on file 只是客套,並非錄取。語氣題要同時抓「禮貌外殼」與「負面實質」。"
        },
        {
          "stem": "Passage: \"Unlike his older brother, who spent every weekend outdoors climbing and cycling, Daniel preferred the quiet company of books and rarely left his room.\" Which inference about Daniel is best supported?",
          "options": [
            "Daniel was more athletic than his brother.",
            "Daniel was more of an indoor, introverted type.",
            "Daniel and his brother shared the same hobbies.",
            "Daniel disliked reading."
          ],
          "answer": 1,
          "explanation": "Unlike his older brother(與哥哥不同)對比下,Daniel 偏好書本、少出房間,可推論他較偏室內、內向型,選 B。對比詞 unlike 框出兄弟相反的性格。",
          "trap": "⚠ Unlike 點出『與哥哥相反』:哥哥愛戶外運動,故 Daniel 不是更愛運動、也非興趣相同;rarely left his room+books 支持內向。對比題抓 unlike 兩端的反差。"
        },
        {
          "stem": "After reading the whole article praising the city's new bike-sharing system—its low cost, its convenience, its environmental benefits—the reader can best conclude that the author's overall purpose is to ______.",
          "options": [
            "warn citizens against using the system",
            "persuade readers of the system's advantages",
            "remain strictly neutral about the system",
            "compare it unfavorably with car ownership"
          ],
          "answer": 1,
          "explanation": "全文列舉低成本、便利、環保等優點且 praising,作者整體目的是「說服讀者該系統的好處」,選 B。綜觀全文基調為正面推薦,而非中立或警告。",
          "trap": "⚠ 主旨/目的題要綜觀全文基調:通篇 praising 且只列優點,故非中立也非警告;別因看到單一細節就判斷,要看整體傾向。"
        },
        {
          "stem": "In the passage, the word \"it\" is underlined: \"Lisa found an old wooden box in the attic. She was surprised that it was still locked after so many years.\" What does the word \"it\" refer to?\n\n閱讀短文,畫底線的 \"it\" 指的是什麼?",
          "options": [
            "The attic (閣樓)",
            "The key (鑰匙)",
            "Lisa (麗莎)",
            "The wooden box (木箱)"
          ],
          "answer": 3,
          "explanation": "代名詞 \"it\" 承接前一句的名詞。句子說 She was surprised that it was still locked(她很驚訝它還是鎖著的),能夠「被鎖住」的是那個木箱,所以 it 指的就是前一句出現的木箱。閣樓不會被上鎖描述為驚訝的重點,鑰匙文中並未出現,麗莎是人不能用 it 指代。"
        },
        {
          "stem": "Read the note and answer the question.\n\n\"Dear Kevin, I can't come to the library at 3 p.m. as we planned. My mom asked me to take care of my little brother this afternoon. Can we meet tomorrow morning instead? — Amy\"\n\nWhy does Amy write this note to Kevin?",
          "options": [
            "To invite Kevin to visit her home this afternoon (邀請 Kevin 下午到她家)",
            "To ask Kevin to help take care of her little brother (請 Kevin 幫忙照顧弟弟)",
            "To change the time of their meeting (更改他們見面的時間)",
            "To thank Kevin for going to the library with her (謝謝 Kevin 陪她去圖書館)"
          ],
          "answer": 2,
          "explanation": "從紙條可推論寫作目的:Amy 說她 3 點無法去圖書館,並問「Can we meet tomorrow morning instead?」(我們改成明天早上見面好嗎?),顯示她要更改見面時間。她沒有邀請 Kevin 到家裡,也沒有請 Kevin 照顧弟弟(照顧弟弟是她自己要做的事),更不是道謝,因為兩人根本還沒去成圖書館。",
          "trap": "容易被 take care of my little brother 誤導成『請 Kevin 幫忙照顧』,但照顧弟弟是 Amy 自己被媽媽要求做的,只是她無法赴約的原因,不是寫紙條的目的。"
        },
        {
          "stem": "Read the paragraph and answer the question.\n\n\"When Mr. Wang walked into the classroom, all the students suddenly stopped talking and looked down at their books. A few of them quickly hid something under their desks. Mr. Wang said nothing, but he slowly walked around the room, checking every corner.\"\n\nWhat can we infer from the paragraph?",
          "options": [
            "The students were happy to see Mr. Wang (學生很開心看到王老師)",
            "Mr. Wang was a new teacher the students had never met (王老師是學生沒見過的新老師)",
            "The students were probably doing something they should not do (學生可能在做不該做的事)",
            "Mr. Wang came to the classroom to give the students a prize (王老師是來發獎品的)"
          ],
          "answer": 2,
          "explanation": "須綜合多個線索推論:學生「突然停止講話」「低頭看書」「迅速把東西藏到桌子底下」,而老師「一句話都沒說,慢慢繞教室檢查每個角落」,這些反應顯示學生心虛,可能在做不該做的事。若學生很開心,不會急著藏東西;文中沒有任何線索說王老師是新老師;老師沉默巡視也與發獎品的情境不符。",
          "trap": "沒有任何一句話直接說學生在做壞事,必須把『停止講話+低頭+藏東西+老師沉默巡查』這些行為線索合起來推論,不能只看單一句子就選字面上提到的內容。"
        },
        {
          "stem": "Read the conversation and answer the question.\n\nJohn: I heard you got the first prize in the science fair! Congratulations!\nMary: Thanks, but honestly, I couldn't have done it without Peter. He stayed up late with me every night for two weeks.\nJohn: Really? Then he should get some of the credit, too.\n\nWhat does Mary mean when she says \"I couldn't have done it without Peter\"?",
          "options": [
            "Peter forced her to join the science fair (Peter 逼她參加科展)",
            "She did all the work by herself (她所有的事都自己完成)",
            "Peter also won a prize in the science fair (Peter 也在科展得獎)",
            "Peter's help was very important to her success (Peter 的幫忙對她的成功很重要)"
          ],
          "answer": 3,
          "explanation": "須理解言外之意:\"I couldn't have done it without Peter\" 字面是『沒有 Peter 我就做不到』,意思是 Peter 的幫忙對她得獎非常重要,加上後面提到 He stayed up late with me every night(他每晚陪我熬夜),更確認這個推論。文中沒有說 Peter 逼她參加;『沒有他就做不到』正好與『所有事都自己完成』相反;文中只說 Peter 幫忙,並未提到 Peter 也得獎。",
          "trap": "couldn't have done it without ~ 是雙重否定表達強烈的肯定(多虧了他),容易被 without 這個字誤看成 Peter 沒幫忙或她獨力完成,方向剛好相反。"
        }
      ]
    },
    {
      "id": "readingchart",
      "name": "圖表與數據閱讀 (Charts & Data Reading)",
      "week": "全期",
      "notes": [
        {
          "h": "圖表類型與判讀重點",
          "points": [
            "長條圖 (bar chart) 用來「比較數量大小」，柱子愈高代表數值愈大；折線圖 (line graph) 用來「看趨勢變化」，線往上是上升 (increase/rise/go up)、往下是下降 (decrease/fall/drop)、持平是 stay the same/remain steady。",
            "圓餅圖 (pie chart) 呈現各部分占整體的比例，最大塊 the largest part / the biggest share、最小塊 the smallest part；全部加起來等於 100%。",
            "讀任何圖前先讀「三件事」：標題 (title) 告訴你主題、座標軸標籤 (axis labels) 告訴你 X/Y 各代表什麼、單位 (unit，如 %、dollars、°C) 告訴你數字的意義，看清楚再回頭找答案。",
            "看趨勢用字常考：increase/decrease、rise/fall、go up/down、double (變兩倍)、the most/the least、twice as many as (是…的兩倍)。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"18\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">三種圖的判讀重點</text><rect x=\"18\" y=\"60\" width=\"16\" height=\"50\" fill=\"#c9755c\"/><rect x=\"40\" y=\"40\" width=\"16\" height=\"70\" fill=\"#c9755c\"/><rect x=\"62\" y=\"75\" width=\"16\" height=\"35\" fill=\"#c9755c\"/><text x=\"48\" y=\"128\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">比大小</text><polyline points=\"140,105 158,85 176,92 194,55\" fill=\"none\" stroke=\"#5aa874\" stroke-width=\"3\"/><path d=\"M194,55 l-7,2 l4,5 z\" fill=\"#5aa874\"/><text x=\"167\" y=\"128\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">看趨勢</text><circle cx=\"300\" cy=\"82\" r=\"30\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><path d=\"M300,82 L300,52 A30,30 0 0,1 326,97 Z\" fill=\"#f0a52e\"/><text x=\"300\" y=\"128\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">看占比</text><text x=\"180\" y=\"160\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">先看標題與單位再作答</text></svg>",
          "caption": "長條圖比大小、折線圖看趨勢、圓餅圖看占比，作答前先確認標題與單位。",
          "trap": "⚠ 看到折線往上不一定代表「數量多」，要先看 Y 軸單位與標籤；若 Y 軸是「下降的排名 (1=最佳)」或刻度不從 0 開始，趨勢方向可能與直覺相反。"
        },
        {
          "h": "表格與時刻表的查找",
          "points": [
            "表格 (table) 題用「行列交叉定位」：先鎖定問題關鍵字落在哪一欄 (column) 與哪一列 (row)，交叉處就是答案，不要被其他欄位的數字干擾。",
            "時刻表 (timetable/schedule) 計算時間差：抵達時間減出發時間，注意跨整點要進位 (9:50 → 10:20 是 30 分鐘不是 -30)；轉乘等待時間 = 下一班出發時間 − 這一班抵達時間。",
            "整合題 (圖表＋文字) 必須把圖表數據與文字敘述「合起來」判斷，常見陷阱是文字補充了圖表沒寫的條件 (如折扣、額外費用、限制人數)，只看圖會選錯。",
            "比對 True/False 敘述時，逐句回到表格找對應格子核對，凡是「文中沒提到」的就不能當作正確 (not mentioned ≠ false 也 ≠ true，常設為干擾選項)。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"18\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">時刻表的時間差計算</text><line x1=\"30\" y1=\"40\" x2=\"330\" y2=\"40\" stroke=\"#3a342e\"/><line x1=\"30\" y1=\"70\" x2=\"330\" y2=\"70\" stroke=\"#3a342e\"/><line x1=\"30\" y1=\"100\" x2=\"330\" y2=\"100\" stroke=\"#3a342e\"/><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"100\" stroke=\"#3a342e\"/><line x1=\"225\" y1=\"40\" x2=\"225\" y2=\"100\" stroke=\"#3a342e\"/><text x=\"75\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">車次</text><text x=\"172\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">出發</text><text x=\"277\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">抵達</text><text x=\"75\" y=\"90\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">A 車</text><text x=\"172\" y=\"90\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\" text-anchor=\"middle\">9:00</text><text x=\"277\" y=\"90\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#c9755c\" text-anchor=\"middle\">9:45</text><path d=\"M172,108 q53,28 105,0\" fill=\"none\" stroke=\"#f0a52e\" stroke-width=\"2\"/><polygon points=\"277,108 270,110 274,116\" fill=\"#f0a52e\"/><text x=\"225\" y=\"150\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">9:45 − 9:00 = 45 分</text></svg>",
          "caption": "表格用行列交叉定位，時刻表用抵達減出發算時間差。",
          "trap": "⚠ 時間差跨整點易算錯：9:50 到 10:20 應一段一段算 (9:50→10:00 是 10 分，再 +20) 共 30 分鐘，別直接 20−50。整合題只看圖不看文字補充條件 (折扣/限制) 也常中陷阱。"
        },
        {
          "h": "比例與比較用語 proportion and comparison",
          "points": [
            "圖表常考比例與倍數語:half(一半)、a quarter(四分之一)、a third(三分之一);twice as many as 是『兩倍』、three times as many as 是『三倍』。",
            "比較級與最高級對應大小:more than 比…多、fewer/less than 比…少;the most 最多、the least 最少,選項常用這些字描述名次。",
            "圓餅圖各部分總和等於整體(100%),若題目問剩下占多少,可用 100% 減去已知各塊。"
          ],
          "formula": "twice as many as = 兩倍;100% − 已知 = 剩餘",
          "trap": "twice as many as A 是 A 的兩倍,別誤算成多兩個;more、fewer 用於可數名詞,less 用於不可數,如 fewer students、less water,別把可數與不可數搞混。"
        },
        {
          "h": "趨勢動詞與名詞轉換 trend verbs",
          "points": [
            "描述上升下降可用動詞或名詞兩種說法:動詞 Sales increased,名詞 There was an increase in sales,意思相同但句構不同。",
            "趨勢程度看修飾語:sharply、rapidly(急遽)表變化大,slightly、gradually(略微、逐漸)表變化小,選項常靠這些副詞區分。",
            "持平與起伏也要會讀:stay the same(維持不變)、reach a peak(達到高峰)、fall to the bottom(跌到谷底)。"
          ],
          "formula": "Sales increased(V);There was an increase in sales(N)",
          "trap": "rise 是不及物動詞(The price rose,後面不接受詞),raise 是及物動詞(raise the price,後面要受詞),兩字最常混用;另外 an increase 後面接 in,如 an increase in sales,別漏掉介系詞。"
        },
        {
          "h": "圖表整合與推論題 chart inference",
          "points": [
            "整合題要把『圖表數據』與『文字敘述』合起來判讀:文字常補充圖表沒寫的條件,如折扣、人數上限、額外運費,只看圖會選錯。",
            "圖表也能推論:折線連續上升可推 will keep rising(將持續成長),圓餅最大塊可推 most people prefer...(多數人偏好),但推論須有數據支撐不可亂猜。",
            "True、False、Not Mentioned 三分法:文中沒提到的不能當 true 也不算 false,常被設為干擾選項,要逐句回圖表核對。"
          ],
          "formula": "",
          "trap": "Not Mentioned(未提及)與 False(錯誤)不同:圖表沒出現的資訊不能推斷為『錯』,也不能當『對』;憑常識補充圖表外的資訊作答,是整合題最常見的失分原因。"
        }
      ],
      "quiz": [
        {
          "stem": "A line graph shows a city's monthly rainfall. The line rises from January (40 mm) to April (120 mm), stays flat through May, then falls to 30 mm in July. Which statement is TRUE?",
          "options": [
            "Rainfall doubled from January to April.",
            "May had less rain than April.",
            "Rainfall tripled from January to April.",
            "July had the most rainfall of the year."
          ],
          "answer": 2,
          "explanation": "1月40mm到4月120mm，120÷40=3，是三倍 (tripled)，不是兩倍。5月持平 (stays flat) 表示與4月相同(120mm)，故非『less than April』。7月30mm是最低不是最高。",
          "trap": "⚠ double(兩倍)與triple(三倍)易混；『stays flat/持平』代表與前一點數值相同，不可解讀為下降。"
        },
        {
          "stem": "A pie chart of how 200 students go to school: Bus 40%, Walk 25%, Bike 20%, Car 15%. How many MORE students take the bus than ride a bike?",
          "options": [
            "20",
            "30",
            "60",
            "40"
          ],
          "answer": 3,
          "explanation": "Bus = 40%×200 = 80人；Bike = 20%×200 = 40人；差 = 80−40 = 40人。",
          "trap": "⚠ 題問『多多少人』要先把百分比換成人數再相減；直接用百分比差 40%−20%=20% 會誤選 20。"
        },
        {
          "stem": "Train schedule — Train A: depart 8:50, arrive 9:35; Train B: depart 9:35, arrive 10:25. Lucy misses Train A and takes Train B. If she arrives at the station at 9:05, how long must she wait before her train departs?",
          "options": [
            "20 minutes",
            "30 minutes",
            "45 minutes",
            "50 minutes"
          ],
          "answer": 1,
          "explanation": "她錯過A車，改搭B車，B車9:35出發。她9:05到站，等待 = 9:35 − 9:05 = 30分鐘。",
          "trap": "⚠ 干擾點是A車的時間與B車的車程(50分)；問的是『等待出發』而非車程，須用B車出發9:35減抵站時間9:05。"
        },
        {
          "stem": "A bar chart shows book sales (in thousands): Mystery 8, Romance 12, Science 5, History 9. The text adds: 'Each book sold raises $2 for charity, but Science books raise $3 each.' Which genre raised the MOST money for charity?",
          "options": [
            "Romance",
            "History",
            "Science",
            "Mystery"
          ],
          "answer": 0,
          "explanation": "Romance:12×2=24千元；History:9×2=18；Science:5×3=15；Mystery:8×2=16。Romance最高(24)。",
          "trap": "⚠ 整合題：文字說Science每本籌$3，易誤以為Science最多；但須各算總額，銷量最高的Romance即使每本$2仍最多。"
        },
        {
          "stem": "A line graph tracks a runner's RANK in a season (Y-axis: 1 = best, 10 = worst). The line goes from 8 in March down to 2 in June. What does this mean?",
          "options": [
            "His performance got worse over the season.",
            "He stayed in the same place all season.",
            "His performance improved over the season.",
            "He was the worst runner in June."
          ],
          "answer": 2,
          "explanation": "Y軸是排名且1=最佳，數字從8降到2代表名次往前(變好)，表現進步。",
          "trap": "⚠ 折線『往下』不一定是變差；本題Y軸是排名(數字越小越好)，必須先讀軸標籤再判斷。"
        },
        {
          "stem": "A table of four phones: Phone P $300/8hr battery; Q $250/6hr; R $400/12hr; S $350/10hr. A buyer wants the LONGEST battery under $380. Which phone fits?",
          "options": [
            "Phone P",
            "Phone Q",
            "Phone R",
            "Phone S"
          ],
          "answer": 3,
          "explanation": "預算<$380排除R($400)。剩P(8hr)、Q(6hr)、S(10hr)中，電池最長是S(10hr,$350)。",
          "trap": "⚠ R電池最久(12hr)但$400超預算，先用價格條件篩選再比電池，否則誤選R。"
        },
        {
          "stem": "A pie chart shows a family's monthly budget: Food 30%, Rent 35%, Savings 15%, Other 20%. If total income is $4,000, the family decides to move Savings up to 25% by cutting 'Other'. How much will 'Other' become?",
          "options": [
            "$1,000",
            "$600",
            "$800",
            "$400"
          ],
          "answer": 3,
          "explanation": "Savings從15%升到25%，多了10%，由Other(20%)支出，Other剩10%。10%×4000=$400。",
          "trap": "⚠ 須先算百分比變化(Other 20%−10%=10%)再乘總額；直接用原20%×4000=800會錯選。"
        },
        {
          "stem": "Bus timetable: buses leave every 25 minutes starting at 7:15 a.m. Tom reaches the stop at 8:00 a.m. How long must he wait for the next bus?",
          "options": [
            "5 minutes",
            "10 minutes",
            "15 minutes",
            "25 minutes"
          ],
          "answer": 0,
          "explanation": "發車:7:15, 7:40, 8:05, 8:30…(每 25 分一班)。Tom 於 8:00 抵達,尚未發車的最近一班是 8:05,故需等 8:05 − 8:00 = 5 分鐘。",
          "trap": "⚠ 等間隔發車要從起始時間(7:15)逐次加 25 分,推到抵達時刻(8:00)之後的第一班(8:05);不可直接把間隔 25 分當答案。"
        },
        {
          "stem": "A bar chart shows daily steps for a week. Mon 6,000; Tue 9,000; Wed 12,000; Thu 7,000; Fri 11,000; Sat 15,000; Sun 4,000. The text says the goal is 10,000 steps. On how many days did the person MEET OR EXCEED the goal?",
          "options": [
            "4",
            "2",
            "3",
            "5"
          ],
          "answer": 2,
          "explanation": "≥10,000的日子:Wed(12k)、Fri(11k)、Sat(15k)，共3天。",
          "trap": "⚠ 『meet or exceed (達到或超過)』含等於；Tue 9,000與Thu 7,000未達標，別把接近10k的算進去。"
        },
        {
          "stem": "Two line graphs compare Store A and Store B sales over 4 months. In month 1 A=20, B=10; by month 4 A=35, B=50. Which conclusion is best supported?",
          "options": [
            "Store A grew faster than Store B.",
            "Store B's sales rose more quickly than Store A's.",
            "Both stores had equal sales in month 4.",
            "Store A always sold more than Store B."
          ],
          "answer": 1,
          "explanation": "A增加35−20=15；B增加50−10=40。B成長較快(rose more quickly)。月4 A=35≠B=50，且月4起B反超，故A非『always more』。",
          "trap": "⚠ 起點A較高易誤判A較好；『成長快慢』看增加量(slope)，不是看誰起點高。"
        },
        {
          "stem": "A movie schedule table: Hall 1 starts 13:00 (110 min), Hall 2 starts 13:40 (95 min), Hall 3 starts 14:10 (120 min). Which movie ENDS first?",
          "options": [
            "Hall 2's movie",
            "Hall 3's movie",
            "Hall 1's movie",
            "They all end at the same time"
          ],
          "answer": 2,
          "explanation": "Hall1:13:00+110分=14:50；Hall2:13:40+95分=15:15；Hall3:14:10+120分=16:10。最早結束是Hall1(14:50)。",
          "trap": "⚠ 開始最早不一定結束最早，須各自加片長算結束時刻；本題剛好開始最早者也結束最早，但仍須計算驗證。"
        },
        {
          "stem": "A pie chart of waste types: Plastic 45%, Paper 25%, Glass 10%, Metal 8%, Other 12%. The text states recyclable items are Paper, Glass and Metal. What percentage of the waste is NOT recyclable?",
          "options": [
            "57%",
            "45%",
            "43%",
            "55%"
          ],
          "answer": 0,
          "explanation": "可回收=Paper25+Glass10+Metal8=43%。不可回收=100−43=57% (即Plastic45+Other12)。",
          "trap": "⚠ 須用文字定義(哪些可回收)再扣除；直接答Plastic 45%會漏掉Other 12%。"
        },
        {
          "stem": "A temperature line graph (°C): 6 a.m. 14°, 9 a.m. 18°, noon 26°, 3 p.m. 24°, 6 p.m. 19°. During which period did the temperature rise the MOST per hour?",
          "options": [
            "6 a.m.–9 a.m.",
            "3 p.m.–6 p.m.",
            "noon–3 p.m.",
            "9 a.m.–noon"
          ],
          "answer": 3,
          "explanation": "各時段每小時變化:6-9點(+4°/3hr≈1.3°)；9-12點(+8°/3hr≈2.7°)；12-15點(−2°)；15-18點(−5°)。9點到中午上升最快。",
          "trap": "⚠ 『rise the most per hour』要算每小時變化率，且下降時段(負值)不算上升；別只看溫差總量。"
        },
        {
          "stem": "A table compares 3 tour plans. Plan X $1,200/3 days; Plan Y $1,800/5 days; Plan Z $2,000/4 days. Which plan has the LOWEST cost per day?",
          "options": [
            "Plan X",
            "Plan Y",
            "Plan Z",
            "Plans X and Y are equal"
          ],
          "answer": 1,
          "explanation": "每日成本:X=1200/3=$400；Y=1800/5=$360；Z=2000/4=$500。Y最低($360)。",
          "trap": "⚠ 『cost per day』要用總價除天數；只看總價最低(X)或天數最多會誤判，須計算單位成本。"
        },
        {
          "stem": "A bar chart shows visitors (in hundreds) to a park: 2019:30, 2020:12, 2021:18, 2022:27, 2023:33. By what percentage did visitors INCREASE from 2020 to 2023?",
          "options": [
            "21%",
            "120%",
            "175%",
            "63%"
          ],
          "answer": 2,
          "explanation": "2020=1200人，2023=3300人。增加=(3300−1200)/1200=2100/1200=1.75=175%。",
          "trap": "⚠ 百分比增加要除以『起始值(2020)』非結束值；(3300−1200)/3300≈63%是常見錯誤分母。"
        },
        {
          "stem": "A flight timetable: Flight 1 departs 22:40, arrives 01:15 (next day). What is the total flight time?",
          "options": [
            "3 hours 35 minutes",
            "2 hours 25 minutes",
            "21 hours 25 minutes",
            "2 hours 35 minutes"
          ],
          "answer": 3,
          "explanation": "22:40到午夜00:00為1小時20分；00:00到01:15為1小時15分；合計2小時35分。",
          "trap": "⚠ 跨午夜要分段算(到00:00再到抵達)；直接01:15−22:40當同日會得負值或21小時的錯誤答案。"
        },
        {
          "stem": "A pie chart shows a class of 40 students' favorite sports. The text says 'Basketball is twice as popular as Tennis, and Soccer equals Basketball.' If Tennis is 10%, how many students chose Soccer?",
          "options": [
            "8",
            "4",
            "10",
            "12"
          ],
          "answer": 0,
          "explanation": "Tennis=10%。Basketball是Tennis兩倍=20%。Soccer=Basketball=20%。20%×40=8人。",
          "trap": "⚠ 須結合文字比例關係(twice/equals)再換算人數；只看10%或忘記乘總人數40會錯。"
        },
        {
          "stem": "A line graph shows website users (thousands) over 5 weeks: W1:5, W2:8, W3:8, W4:6, W5:11. Which description is correct?",
          "options": [
            "Users rose every week.",
            "Users stayed the same in weeks 2 and 3, then dropped before rising again.",
            "Users fell from week 1 to week 5.",
            "Week 4 had the most users."
          ],
          "answer": 1,
          "explanation": "W2與W3都是8(持平)，W4降到6(drop)，W5升到11(rise again)。故B正確。並非每週上升(W4下降)，W5(11)>W1(5)故非整體下降，W5才最高非W4。",
          "trap": "⚠ 須完整描述趨勢(平→降→升)；只看頭尾或忽略中間持平/下降段都會選錯。"
        },
        {
          "stem": "A table shows test scores: Amy Math 85 English 78; Ben Math 72 English 90; Cara Math 88 English 84. The text says the final grade weights Math 60% and English 40%. Who has the HIGHEST weighted score?",
          "options": [
            "Ben",
            "Cara",
            "Amy",
            "Amy and Cara tie"
          ],
          "answer": 1,
          "explanation": "Amy=85×0.6+78×0.4=51+31.2=82.2；Ben=72×0.6+90×0.4=43.2+36=79.2；Cara=88×0.6+84×0.4=52.8+33.6=86.4。Cara最高。",
          "trap": "⚠ 加權平均要乘對應比重再相加；直接比總分(Amy 163, Ben 162, Cara 172)雖也Cara高，但若忽略權重在其他題型會錯，須按文字權重計算。"
        },
        {
          "stem": "A bar chart shows ice-cream sales by flavor: Vanilla 120, Chocolate 200, Strawberry 80, Mango 150. The shop will STOP selling the two LEAST popular flavors. Which will be removed?",
          "options": [
            "Chocolate and Mango",
            "Strawberry and Mango",
            "Vanilla and Chocolate",
            "Vanilla and Strawberry"
          ],
          "answer": 3,
          "explanation": "由低到高:Strawberry 80 < Vanilla 120 < Mango 150 < Chocolate 200。最低兩種=Strawberry與Vanilla。",
          "trap": "⚠ 『two least popular(最不受歡迎的兩種)』取最小兩個值；別把最大的Chocolate或中間的Mango算進去。"
        },
        {
          "stem": "A train timetable lists stops: Station A 10:05, B 10:32, C 11:00, D 11:48. The text adds the train waits 4 minutes at each stop (already included in arrival times). How long is the journey from A to D?",
          "options": [
            "1 hour 43 minutes",
            "1 hour 48 minutes",
            "1 hour 53 minutes",
            "2 hours 48 minutes"
          ],
          "answer": 0,
          "explanation": "A出發10:05，D抵達11:48。差=11:48−10:05=1小時43分。停靠時間已含在表內，不需另加。",
          "trap": "⚠ 文字說停靠時間『already included』，不可再額外加；若誤加停靠時間會多算，須讀懂文字條件。"
        },
        {
          "stem": "A double bar chart compares boys' and girls' library visits per month. In June boys=40, girls=55; the chart's Y-axis is labeled 'visits (×10)'. How many visits did GIRLS actually make in June?",
          "options": [
            "550",
            "150",
            "5,500",
            "55"
          ],
          "answer": 0,
          "explanation": "Y軸單位是『visits (×10)』，圖上讀到55，實際=55×10=550次。",
          "trap": "⚠ 必須看單位標示(×10)換算真實數值；直接讀55或亂乘100都是忽略/誤讀單位的陷阱。"
        },
        {
          "stem": "A pie chart of a $5,000 fundraiser: Donations 50%, Ticket Sales 30%, Sponsors 20%. The text notes that 10% of ALL money raised must be paid as event fees. How much money is left after fees?",
          "options": [
            "$4,000",
            "$3,500",
            "$4,500",
            "$4,750"
          ],
          "answer": 2,
          "explanation": "費用=10%×5000=$500。剩餘=5000−500=$4,500。圓餅圖的50/30/20是來源分布，與費用扣除無關。",
          "trap": "⚠ 圓餅圖各區比例是『收入來源』，費用是對總額抽10%；別把20% Sponsors誤當費用或拿來源百分比計算。"
        },
        {
          "stem": "A line graph shows two products' prices over a year. Product X starts at $50, ends at $50 (a dip to $30 mid-year). Product Y rises steadily from $20 to $60. In which month were their prices most likely EQUAL?",
          "options": [
            "The month X dipped to its lowest",
            "Some month in the second half, where X recovers up and Y is still rising",
            "January",
            "December"
          ],
          "answer": 1,
          "explanation": "X下半年從谷底$30回升到$50，Y持續上升從中段往$60；兩線在下半年X上升、Y上升的區段會交會(相等)。1月X=50/Y=20不等，12月X=50/Y=60不等，谷底時X=30而Y已升至約40以上也不等。",
          "trap": "⚠ 兩線『相等』是交點(intersection)，要找兩線交叉的時段，不是看單一線的最高或最低點。"
        },
        {
          "stem": "A table shows shipping options: Standard $5 / 7 days; Express $12 / 2 days; Overnight $25 / 1 day. The text says orders over $100 get FREE Standard shipping, and a $10 discount on any faster option. A customer's order is $120 and they want it in 2 days as cheaply as possible. What do they pay for shipping?",
          "options": [
            "$2",
            "$12",
            "$5",
            "$0"
          ],
          "answer": 0,
          "explanation": "要2天送達須選Express(2 days)。訂單>$100，較快選項享$10折扣，Express $12−$10=$2。Standard雖免費但要7天不符2天需求。",
          "trap": "⚠ 整合題:免費Standard($0)不符『2天』條件；Express享折扣後是$2而非原價$12，須同時套用文字的折扣與天數限制。"
        },
        {
          "stem": "Which type of chart is BEST for showing how a value changes and trends over time (for example, monthly temperatures)?",
          "options": [
            "A pie chart",
            "A bar chart",
            "A line graph",
            "A word list"
          ],
          "answer": 2,
          "explanation": "折線圖(line graph)以連續的線條呈現數值隨時間的上升或下降,最適合表現『趨勢變化』;圓餅圖用來看各部分占整體的比例,長條圖用來比較數量大小,文字清單只是條列並非圖表。"
        },
        {
          "stem": "A pie chart shows how 400 visitors travelled to a park: MRT 35%, Bus 30%, Car 20%, Bike 15%. How many MORE visitors took the MRT than rode a bike?",
          "options": [
            "20",
            "60",
            "80",
            "140"
          ],
          "answer": 2,
          "explanation": "先把百分比換算成人數:搭捷運=35%×400=140人;騎腳踏車=15%×400=60人。相差=140−60=80人。",
          "trap": "⚠ 直接用百分比相減 35%−15%=20% 會誤選 20;題目問『多多少人』必須先各自換成人數(140、60)再相減。另 60 是騎車人數、140 是捷運人數,都不是差值。"
        },
        {
          "stem": "A bar chart shows a bakery's cupcake sales: Thu 40, Fri 65, Sat 90, Sun 55. The text adds: 'Each cupcake sells for $3, but on Saturday there was a 20% discount.' On which day did the bakery earn the MOST money?",
          "options": [
            "Saturday",
            "Friday",
            "Sunday",
            "Thursday"
          ],
          "answer": 0,
          "explanation": "逐日計算收入:週四40×$3=$120;週五65×$3=$195;週六90×$3×0.8(打八折)=$216;週日55×$3=$165。週六$216 最高。",
          "trap": "⚠ 整合題:週六有八折易被誤判成賺較少;但週六銷量最高(90),打折後仍有$216,高於週五的$195。必須把『數量×單價×折扣』一起算,不能只看有沒有打折。"
        },
        {
          "stem": "A train timetable — Train 1: depart 08:45, arrive 09:40; Train 2: depart 09:20, arrive 09:50; Train 3: depart 09:40, arrive 10:40. Emma must arrive before 10:00 and wants to leave as late as possible. Which train should she take?",
          "options": [
            "Train 1",
            "Train 3",
            "Train 2",
            "Any train is fine"
          ],
          "answer": 2,
          "explanation": "先用『10:00 前抵達』篩選:第一班09:40、第二班09:50 都符合,第三班10:40 超過不符合。再從符合的兩班中挑『出發最晚』:第二班09:20 出發比第一班08:45 晚,故選第二班。",
          "trap": "⚠ 出發最晚的其實是第三班(09:40 出發),但它10:40 才到,超過10:00 的限制;雙條件題要先用『抵達時間』刷掉不合格的車次,再從剩下的挑出發最晚的,不能一看到『越晚越好』就選出發最晚那班。"
        }
      ]
    },
    {
      "id": "writingorder",
      "name": "句子重組與段落排序 (Sentence Reordering)",
      "week": "全期",
      "notes": [
        {
          "h": "單句重組的文法線索",
          "points": [
            "先鎖定主詞 (S) 與動詞 (V),再依五大句型把受詞、補語、修飾語歸位:基本語序為 S + V + O,例如 She bought a book yesterday。",
            "疑問句把助動詞/be 動詞或疑問詞提前 (Did you finish…? / What are you doing?);Yes/No 問句助動詞在主詞前,Wh- 問句疑問詞在最前。",
            "否定 not 緊跟在助動詞或 be 動詞之後 (do not / is not);頻率副詞 (always, often) 放一般動詞前、be 動詞後。",
            "修飾語有固定位置:形容詞放名詞前 (a red car),時間/地點副詞通常放句尾,且地點在前、時間在後 (at school this morning)。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"12\" y=\"24\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">散字重組成句</text><rect x=\"14\" y=\"38\" width=\"70\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"49\" y=\"58\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">bought</text><rect x=\"96\" y=\"38\" width=\"50\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"121\" y=\"58\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">She</text><rect x=\"158\" y=\"38\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"198\" y=\"58\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">a book</text><line x1=\"14\" y1=\"110\" x2=\"346\" y2=\"110\" stroke=\"#5aa874\" stroke-width=\"2\"/><text x=\"40\" y=\"132\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">S</text><text x=\"150\" y=\"132\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">V</text><text x=\"270\" y=\"132\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#f0a52e\">O</text><text x=\"14\" y=\"166\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">She bought a book.</text></svg>",
          "caption": "先抓主詞與動詞,再把受詞與修飾語依 S+V+O 軌道歸位。",
          "trap": "⚠ 常忽略主詞要大寫、句尾要標點;且形容詞、時間副詞放錯位置(把 yesterday 放句首雖可,但 not、頻率副詞位置錯就整句不通)。"
        },
        {
          "h": "段落與對話排序",
          "points": [
            "段落結構:主題句 (topic sentence) 當開頭,中間是支持/說明句,結論句收尾;先找出最概括、不含指代詞的句子當第一句。",
            "善用線索詞:順序詞 First / Then / After that / Finally 顯示先後;轉折詞 However / But 表前後相反;因果詞 So / Because 表理由與結果。",
            "代名詞與指示詞回指:含 it / they / this / that 的句子通常不是首句,因為它指向前面已出現的名詞,可用來判斷緊接在哪一句之後。",
            "對話排序依問答邏輯:問句後接答句、招呼語 (Hi/Hello) 開頭、道別語 (Bye/See you) 結尾;邀約後接接受或婉拒。"
          ],
          "svg": "<svg viewBox=\"0 0 360 190\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"16\" width=\"110\" height=\"34\" rx=\"5\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"20\" y=\"37\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">First …(主題)</text><rect x=\"12\" y=\"62\" width=\"110\" height=\"34\" rx=\"5\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"20\" y=\"83\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">Then …(說明)</text><rect x=\"12\" y=\"108\" width=\"110\" height=\"34\" rx=\"5\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"20\" y=\"129\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">It …(回指)</text><rect x=\"12\" y=\"152\" width=\"110\" height=\"30\" rx=\"5\" fill=\"#f3e7df\" stroke=\"#c9755c\"/><text x=\"20\" y=\"172\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">Finally …(結論)</text><path d=\"M 130 33 L 200 33\" stroke=\"#5aa874\" stroke-width=\"2\" marker-end=\"url(#a)\"/><defs><marker id=\"a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#5aa874\"/></marker></defs><text x=\"210\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\">順序詞</text><text x=\"210\" y=\"100\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\">代名詞</text><text x=\"210\" y=\"140\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\">收尾結論</text></svg>",
          "caption": "用順序詞、轉折詞與回指代名詞把句子串成 1→2→3→4 的邏輯鏈。",
          "trap": "⚠ 易把含 it/they/this 的句子誤當首句;首句應是最概括、不依賴前文的主題句,否則整段指代落空。"
        },
        {
          "h": "連接詞與子句的排序線索 conjunctions",
          "points": [
            "對等連接詞 and / but / or / so 連接地位相等的兩部分,重組時放在兩個句子之間,例如 He was tired, so he went to bed early.。",
            "從屬連接詞 because / when / if / although 帶出副詞子句,可放句首或句中:放句首時兩句之間要加逗號,例如 When it rains, we stay home.。",
            "關係代名詞 who / which / that 緊跟在它所修飾的名詞之後,例如 The boy who is singing is my brother.。"
          ],
          "formula": "從屬子句在前:Conj. + S + V, + 主要子句(When I got home, she left.)",
          "trap": "中文「因為…所以…」不可在英文同一句裡各放一個連接詞:because 與 so 只能擇一,寫 Because it rained, so we stayed home. 是典型錯誤,要刪掉其中一個。"
        },
        {
          "h": "重組句的標點與大小寫線索 punctuation cues",
          "points": [
            "句首字首字母要大寫,重組時開頭詞要選原本大寫的那個字塊;帶句尾標點(. ? !)的字塊放最後。",
            "問號結尾代表疑問句,要把助動詞或疑問詞往前排,例如 Where are you going?。",
            "逗號常標出插入語或子句邊界,可幫忙判斷哪兩段該相鄰,例如 After school, we play basketball.。"
          ],
          "formula": "",
          "trap": "別忽略標點線索:含問號的字塊一定組成問句、語序要把助動詞或疑問詞提前;若排成直述語序(You are going where?)就錯了,標點與語序必須一致。"
        },
        {
          "h": "時間與邏輯順序定首尾 time & logic order",
          "points": [
            "敘述事件依時間先後排:先 First / In the morning,再 Then / Next,最後 Finally / In the end。",
            "含結果或總結的句子放後面,常以 So / As a result / In short 開頭。",
            "舉例的句子 For example… 不會當第一句,因為它必須先有一個概括的主題句在前面。"
          ],
          "formula": "",
          "trap": "含 For example / For instance 的句子不能放開頭:它要承接前一句的概括說法;同理 also / too / either 也表示前面已提過某事,通常不是第一句。"
        }
      ],
      "quiz": [
        {
          "stem": "Reorder the words into a correct sentence: \"to / never / been / has / she / Japan\". Which is correct?",
          "options": [
            "She has never been to Japan.",
            "She never has been to Japan.",
            "She has been never to Japan.",
            "Never she has been to Japan."
          ],
          "answer": 0,
          "explanation": "現在完成式 have/has + p.p.,頻率副詞 never 放在 has 與 been 之間:She has never been to Japan。",
          "trap": "⚠ never 須放助動詞 has 之後、過去分詞 been 之前;放到 been 之後(been never)或句首倒裝(Never she has,缺助動詞倒裝結構)都錯。"
        },
        {
          "stem": "Put the words in order: \"the / what / you / did / weekend / do / last\". The correct question is:",
          "options": [
            "What did you do last the weekend?",
            "What you did do last weekend?",
            "What did you do last weekend?",
            "What did do you last weekend?"
          ],
          "answer": 2,
          "explanation": "Wh- 疑問句語序為 What + did + 主詞 + 原形動詞:What did you do last weekend?「last weekend」前不加 the。",
          "trap": "⚠ 此題多了一個 the 為干擾;last weekend/last week 等時間片語前不加冠詞 the,且助動詞 did 後主詞要在動詞 do 之前。"
        },
        {
          "stem": "Which is the correct order? \"isn't / there / milk / in / any / the / fridge\"",
          "options": [
            "Isn't there milk any in the fridge.",
            "There any milk isn't in the fridge.",
            "There isn't milk any in the fridge.",
            "There isn't any milk in the fridge."
          ],
          "answer": 3,
          "explanation": "There is/isn't 句型 + 數量詞 any + 不可數名詞 milk + 地點片語:There isn't any milk in the fridge。",
          "trap": "⚠ any 為限定詞須緊接在名詞 milk 前,不能放到 milk 之後;否定的 isn't 緊跟 There。"
        },
        {
          "stem": "Reorder: \"so / it / I / was / cold / a / wore / coat\". The best sentence is:",
          "options": [
            "It so was cold a coat I wore.",
            "It was so cold I wore a coat.",
            "So it was cold I a coat wore.",
            "It was cold so I a coat wore."
          ],
          "answer": 1,
          "explanation": "結果關係用 so 連接兩個子句:It was so cold (that) I wore a coat。第二子句維持 S+V+O = I wore a coat。",
          "trap": "⚠ so 修飾形容詞 cold(so cold),且第二個子句仍須 S+V+O 正常語序(I wore a coat),不能寫成 I a coat wore。"
        },
        {
          "stem": "Arrange the dialogue in a logical order:\n(a) I'd love to. What time?\n(b) Hi, Amy. Would you like to see a movie tonight?\n(c) Great, see you then.\n(d) How about seven?",
          "options": [
            "b - a - d - c",
            "b - d - a - c",
            "a - b - d - c",
            "b - a - c - d"
          ],
          "answer": 0,
          "explanation": "招呼+邀約(b)→接受並問時間(a)→提議時間(d)→確認道別(c)。順序為 b-a-d-c。",
          "trap": "⚠ (a) 先說 \"I'd love to\" 接受邀約後才問時間,(d) 才提出具體時間 seven 回應 \"What time?\";若把 d 放在 a 前則答非所問。"
        },
        {
          "stem": "Order the paragraph:\n(1) Then, beat the eggs and add some sugar.\n(2) First, prepare flour, eggs, and milk.\n(3) Finally, bake it for 20 minutes.\n(4) After that, pour the mixture into a pan.",
          "options": [
            "2 - 1 - 3 - 4",
            "2 - 4 - 1 - 3",
            "2 - 1 - 4 - 3",
            "1 - 2 - 4 - 3"
          ],
          "answer": 2,
          "explanation": "依序詞:First(2)→Then(1)→After that(4)→Finally(3),順序為 2-1-4-3。",
          "trap": "⚠ 完全靠順序詞 First/Then/After that/Finally 定位;\"the mixture\"(4)指前面打好的蛋糊,故 4 必在 1 之後。"
        },
        {
          "stem": "Reorder: \"a / what / beautiful / it / sunset / is\". The exclamatory sentence is:",
          "options": [
            "What beautiful a sunset it is!",
            "What a sunset beautiful it is!",
            "How a beautiful sunset it is!",
            "What a beautiful sunset it is!"
          ],
          "answer": 3,
          "explanation": "感嘆句 What + a + 形容詞 + 單數名詞 + 主詞 + 動詞:What a beautiful sunset it is!",
          "trap": "⚠ 修飾單數可數名詞用 What a...(不可用 How a);冠詞 a 放在形容詞 beautiful 之前、形容詞緊接名詞 sunset 前。"
        },
        {
          "stem": "Which order forms a correct sentence? \"only / did / I / realize / then / the truth\"",
          "options": [
            "Did only then I realize the truth.",
            "Only then did I realize the truth.",
            "Only then I realized the truth did.",
            "Only then I did realize the truth."
          ],
          "answer": 1,
          "explanation": "否定/限定副詞片語 Only then 置於句首時引發倒裝:助動詞 did 提到主詞 I 之前 → Only then did I realize the truth。",
          "trap": "⚠ Only + 時間副詞置句首須部分倒裝(did + 主詞 + 原形動詞);若不倒裝寫 Only then I realized 為錯。"
        },
        {
          "stem": "Order the conversation:\n(a) Sorry, I can't. I have to study for a test.\n(b) Hey, do you want to play basketball after school?\n(c) Maybe next time then.\n(d) That's too bad.",
          "options": [
            "b - a - c - d",
            "b - d - a - c",
            "a - b - d - c",
            "b - a - d - c"
          ],
          "answer": 3,
          "explanation": "邀約(b)→婉拒並給理由(a)→表示遺憾(d)→改約下次(c)。順序為 b-a-d-c。",
          "trap": "⚠ \"That's too bad\"(d) 是回應婉拒,須在 (a) 之後;\"Maybe next time\"(c) 收尾,易與 d 順序顛倒。"
        },
        {
          "stem": "Reorder: \"the / to / table / put / on / books / please / the\". The imperative sentence is:",
          "options": [
            "Please the books put on the table.",
            "Please put the books on the table.",
            "Put please the books on the table.",
            "Please put on the books the table."
          ],
          "answer": 1,
          "explanation": "祈使句以原形動詞開頭,Please 放句首:Please put the books on the table。受詞 the books 緊接動詞,地點片語 on the table 在句尾。",
          "trap": "⚠ 動詞 put 後直接接受詞 the books,介系詞片語 on the table 整組放最後;不可把 on 拆到受詞前(put on the books 意思變成穿戴)。"
        },
        {
          "stem": "Insert \"However, the price was too high for me.\" into the best position:\n(1) I saw a nice jacket in the shop. (2) ___ (3) So I decided not to buy it.",
          "options": [
            "Between (1) and (3), at position (2)",
            "Before (1)",
            "After (3)",
            "It cannot fit anywhere"
          ],
          "answer": 0,
          "explanation": "However 表轉折,承接「看到好外套」但「價格太高」,再導出 So I decided not to buy it。故插在 (1) 與 (3) 之間的 (2)。",
          "trap": "⚠ However 須夾在「正面敘述」與「因價高而不買」的因果之間;放 (1) 前無前文可轉折,放 (3) 後則因果倒置。"
        },
        {
          "stem": "Reorder: \"how / you / could / me / tell / get / there / I / to\". The polite question is:",
          "options": [
            "Could you tell me how I get there could?",
            "Could you tell me how could I get there?",
            "Could you tell me how I could get there?",
            "How could you tell me I get there?"
          ],
          "answer": 2,
          "explanation": "間接問句 (embedded question) 的子句須用直述語序:how + 主詞 I + 動詞 could get,不倒裝 → Could you tell me how I could get there?",
          "trap": "⚠ 間接問句中疑問子句不可再倒裝(how I could get,非 how could I get);這是會考高頻陷阱。"
        },
        {
          "stem": "Order the paragraph:\n(1) They are cheap and good for our health.\n(2) Riding a bike has many benefits.\n(3) Also, bikes do not pollute the air.\n(4) For these reasons, more people should ride bikes.",
          "options": [
            "1 - 3 - 2 - 4",
            "1 - 2 - 3 - 4",
            "2 - 3 - 1 - 4",
            "2 - 1 - 3 - 4"
          ],
          "answer": 3,
          "explanation": "主題句(2)總述騎車好處→(1)第一項好處→(3)Also 補第二項→(4)For these reasons 總結。順序 2-1-3-4。",
          "trap": "⚠ (2) 是最概括的主題句須當首句;(1) 的 They 回指 bikes,且 (3) 的 Also 表追加,故 1 在 3 之前,(4) 用結論詞收尾。"
        },
        {
          "stem": "Reorder: \"neither / nor / likes / he / coffee / tea\". The correct sentence is:",
          "options": [
            "Neither he likes coffee nor tea.",
            "He neither likes coffee nor tea.",
            "He likes neither coffee nor tea.",
            "He likes nor coffee neither tea."
          ],
          "answer": 2,
          "explanation": "neither...nor... 連接兩個對等成分(受詞 coffee / tea):He likes neither coffee nor tea。",
          "trap": "⚠ neither...nor 要對稱連接同類成分;此處連接兩受詞,故 neither 放 coffee 前;若放在 likes 前則連接的是動詞,後面結構不對稱。"
        },
        {
          "stem": "Arrange the dialogue:\n(a) It's on Maple Street, next to the bank.\n(b) Excuse me, where is the post office?\n(c) Thank you very much.\n(d) You're welcome.",
          "options": [
            "b - a - c - d",
            "b - c - a - d",
            "a - b - c - d",
            "b - a - d - c"
          ],
          "answer": 0,
          "explanation": "問路(b)→指路(a)→道謝(c)→回應(d)。順序 b-a-c-d。",
          "trap": "⚠ \"Thank you\"(c) 必在得到答案 (a) 之後,\"You're welcome\"(d) 是對道謝的回應須最後;易把 c、d 順序弄反。"
        },
        {
          "stem": "Reorder: \"so / hard / he / studied / that / the / passed / he / exam\". The correct sentence is:",
          "options": [
            "He so studied hard that he passed the exam.",
            "He studied so hard that he passed the exam.",
            "He studied hard so that he passed the exam.",
            "He studied so that hard he passed the exam."
          ],
          "answer": 1,
          "explanation": "so + 副詞 hard + that 子句表結果:He studied so hard that he passed the exam。",
          "trap": "⚠ so 修飾副詞 hard(so hard),that 引導結果子句;\"so that\" 連用意為「以便」(目的),語意與此題的「如此…以致」不同,易混。"
        },
        {
          "stem": "Insert \"They cost a lot of money.\" into the best position:\n(1) Many students want smartphones. (2) ___ (3) Therefore, some of them save money for months.",
          "options": [
            "At position (2)",
            "Before (1)",
            "After (3)",
            "Nowhere fits"
          ],
          "answer": 0,
          "explanation": "They 回指 smartphones,說明手機很貴,(3) 用 Therefore 導出「因此存錢數月」的結果。故插在 (2)。",
          "trap": "⚠ \"They\" 須有前面的 smartphones(1) 才有所指,故不能放 (1) 前;\"Therefore\"(3) 表結果須在「很貴」這個原因之後。"
        },
        {
          "stem": "Reorder: \"been / has / the / cleaned / room / not / yet\". The correct sentence is:",
          "options": [
            "The room not has been cleaned yet.",
            "The room has not been cleaned yet.",
            "The room has been not cleaned yet.",
            "The room has been cleaned not yet."
          ],
          "answer": 1,
          "explanation": "現在完成被動式 has been + p.p.,否定 not 放在 has 之後:The room has not been cleaned yet。yet 用於否定句句尾。",
          "trap": "⚠ not 緊接助動詞 has(has not been),不可放到 been 之後;被動語態 been cleaned 順序固定,yet 放句尾。"
        },
        {
          "stem": "Order the paragraph:\n(1) But it started to rain heavily in the afternoon.\n(2) We planned to have a picnic last Sunday.\n(3) In the end, we stayed home and watched movies.\n(4) The weather was sunny in the morning.",
          "options": [
            "4 - 2 - 1 - 3",
            "2 - 1 - 4 - 3",
            "2 - 4 - 3 - 1",
            "2 - 4 - 1 - 3"
          ],
          "answer": 3,
          "explanation": "(2)計畫野餐→(4)早上晴→(1)But 下午下大雨→(3)In the end 待在家。順序 2-4-1-3。",
          "trap": "⚠ But(1) 表轉折,須接在「早上晴」(4) 之後形成對比;In the end(3) 收尾。靠轉折詞與時間 morning→afternoon 雙線索定序。"
        },
        {
          "stem": "Reorder: \"made / the / him / news / happy / feel\". The correct sentence is:",
          "options": [
            "The news him made feel happy.",
            "The news made happy him feel.",
            "The news made him feel happy.",
            "The news made feel him happy."
          ],
          "answer": 2,
          "explanation": "使役動詞 make + 受詞 him + 原形動詞 feel + 形容詞 happy:The news made him feel happy。",
          "trap": "⚠ 使役 make 後接受詞再接原形動詞(make him feel),不加 to;feel 為感官動詞後接形容詞 happy 當補語。"
        },
        {
          "stem": "Arrange the dialogue:\n(a) Sure. That will be 90 dollars.\n(b) Can I help you?\n(c) Here you are. Thank you.\n(d) Yes, I'd like to buy these two shirts.",
          "options": [
            "b - a - d - c",
            "b - d - a - c",
            "d - b - a - c",
            "b - d - c - a"
          ],
          "answer": 1,
          "explanation": "店員招呼(b)→顧客說要買(d)→店員報價(a)→顧客付款道謝(c)。順序 b-d-a-c。",
          "trap": "⚠ 報價 (a) 須在顧客表明要買 (d) 之後;\"Here you are\"(c)(付款)為最後動作,不能放報價前。"
        },
        {
          "stem": "Reorder: \"if / I / had / I / time / would / more / help / you\". The correct conditional is:",
          "options": [
            "If I had more time, I would help you.",
            "If I would have more time, I help you.",
            "If I had more time, I will help you.",
            "I would help you if I had more time would."
          ],
          "answer": 0,
          "explanation": "與現在事實相反的假設(第二類條件句):If + 主詞 + 過去式 (had), 主詞 + would + 原形 (would help) → If I had more time, I would help you。",
          "trap": "⚠ 條件句 if 子句用過去式 had,主句用 would + 原形;不可在 if 子句用 would(would have),也不可用 will。"
        },
        {
          "stem": "Order the paragraph:\n(1) For example, we can bring our own bags when shopping.\n(2) There are many ways to protect the environment.\n(3) We can also save water by turning off the tap.\n(4) If everyone does a little, the earth will be better.",
          "options": [
            "1 - 2 - 3 - 4",
            "2 - 3 - 1 - 4",
            "2 - 1 - 3 - 4",
            "2 - 1 - 4 - 3"
          ],
          "answer": 2,
          "explanation": "主題句(2)→For example 舉第一例(1)→also 補第二例(3)→If 條件句總結(4)。順序 2-1-3-4。",
          "trap": "⚠ (2) 是概括主題句;(1) 的 For example 須緊跟主題句舉例,(3) 的 also 表追加須在 (1) 之後,(4) 收尾。"
        },
        {
          "stem": "Reorder: \"you / do / know / where / lives / she / ?\". The correct embedded question is:",
          "options": [
            "Where do you know she lives?",
            "Do you know where does she live?",
            "Do you know where lives she?",
            "Do you know where she lives?"
          ],
          "answer": 3,
          "explanation": "間接問句的疑問子句用直述語序:where + 主詞 she + 動詞 lives → Do you know where she lives?",
          "trap": "⚠ 間接問句子句不可倒裝、不加 does(where she lives,非 where does she live);主句 Do you know 維持問句形式。"
        },
        {
          "stem": "Reorder: \"not / only / he / sing / but / can / also / dance / he\". The correct sentence is:",
          "options": [
            "He can not only sing but also dance.",
            "Not only he can sing but also he dance.",
            "He not only can sing but he also can dance.",
            "He can sing not only but also dance."
          ],
          "answer": 0,
          "explanation": "not only...but also... 對等連接兩個動詞(sing / dance),置於助動詞 can 之後:He can not only sing but also dance。",
          "trap": "⚠ not only 與 but also 須對稱連接同類成分(此處兩個原形動詞 sing/dance);本句未置於句首故不倒裝,且 can 共用於兩動詞。"
        },
        {
          "stem": "Reorder the words into a correct sentence: \"always / after / does / homework / his / he / dinner\". Which is correct?",
          "options": [
            "He always does his homework after dinner.",
            "He does always his homework after dinner.",
            "He does his homework always after dinner.",
            "Always he does his homework after dinner."
          ],
          "answer": 0,
          "explanation": "一般動詞的頻率副詞 always 放在主詞與一般動詞之間(主詞 + always + 一般動詞);故主詞後先接 always 再接 does,受詞 his homework 隨後,時間片語 after dinner 收尾。",
          "trap": "頻率副詞 always 修飾一般動詞時要放在該動詞之前、主詞之後;放到 does 之後或整句最前面都不自然。"
        },
        {
          "stem": "Reorder: \"more / than / is / interesting / this / that / book / one\". The correct sentence is:",
          "options": [
            "This book is interesting more than that one.",
            "This book is more interesting than that one.",
            "This more book is interesting than that one.",
            "This book more is interesting than that one."
          ],
          "answer": 1,
          "explanation": "多音節形容詞的比較級用 more + 原級(more interesting),再用 than 帶出比較對象;語序為 主詞 + be 動詞 + more + 形容詞 + than + 比較對象,故 more interesting 相連、than that one 收尾。",
          "trap": "more 要緊接在形容詞 interesting 之前組成比較級,不能放到形容詞之後,也不能插在主詞與名詞之間;than 才是引導被比較對象 that one。"
        },
        {
          "stem": "Order the paragraph:\n(1) First, we visited an old temple in the morning.\n(2) Last summer, my family took a trip to Tainan.\n(3) In the evening, we enjoyed delicious local food.\n(4) Then, we walked along a famous old street.",
          "options": [
            "2 - 1 - 4 - 3",
            "2 - 4 - 1 - 3",
            "1 - 2 - 4 - 3",
            "2 - 1 - 3 - 4"
          ],
          "answer": 0,
          "explanation": "先用最概括、設定時間背景的主題句「去年夏天全家去台南旅行」開頭;其餘三句依時間先後串接:First 早上參觀寺廟→Then 走訪老街→In the evening 晚上享用美食。",
          "trap": "開頭要選設定整體背景、不含順序詞的句子;別被含 First 的句子放在最前面而誤把它當第一句,First/Then/In the evening 是用來排中後段的時間線索。"
        },
        {
          "stem": "Reorder: \"such / a / it / hot / day / was / that / we / inside / stayed\". The correct sentence is:",
          "options": [
            "It was so a hot day that we stayed inside.",
            "It was such a hot day that we stayed inside.",
            "It was such hot a day that we stayed inside.",
            "It was a such hot day that we stayed inside."
          ],
          "answer": 1,
          "explanation": "「如此…以致於…」在修飾『形容詞+單數可數名詞』時用 such + a + 形容詞 + 名詞(such a hot day),再接 that 引導結果子句;冠詞 a 放在 such 之後、形容詞 hot 之前。",
          "trap": "修飾 a hot day 這種名詞片語要用 such,不是 so(so 只直接修飾形容詞,如 so hot);且冠詞位置為 such a hot day,不能寫成 such hot a 或 a such。"
        }
      ]
    }
  ]
};
