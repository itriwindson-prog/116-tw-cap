// chinese.js — 國文（完整 108 課綱；補題到 4/topic + 每段筆記 SVG 圖解 + 答案經獨立重驗）
window.STUDYSYNC = window.STUDYSYNC || { data: {} };
window.STUDYSYNC.data.subjects = window.STUDYSYNC.data.subjects || {};
window.STUDYSYNC.data.subjects.chinese = {
  id: "chinese", name: "國文",
  topics: [
    {
      "id": "word",
      "name": "字音字形",
      "week": "暑假 第1–2週",
      "notes": [
        {
          "h": "破音字（一字多音）",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f5f1ea\"/><rect x=\"130\" y=\"14\" width=\"60\" height=\"30\" rx=\"6\" fill=\"#c9755c\"/><text x=\"160\" y=\"34\" fill=\"#fff\" font-size=\"16\" text-anchor=\"middle\">樂</text><line x1=\"160\" y1=\"44\" x2=\"60\" y2=\"80\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"160\" y1=\"44\" x2=\"160\" y2=\"80\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"160\" y1=\"44\" x2=\"260\" y2=\"80\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><rect x=\"20\" y=\"80\" width=\"80\" height=\"44\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"60\" y=\"98\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">快樂</text><text x=\"60\" y=\"115\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">ㄌㄜˋ</text><rect x=\"120\" y=\"80\" width=\"80\" height=\"44\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"160\" y=\"98\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">音樂</text><text x=\"160\" y=\"115\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">ㄩㄝˋ</text><rect x=\"220\" y=\"80\" width=\"80\" height=\"44\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"260\" y=\"98\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">樂山樂水</text><text x=\"260\" y=\"115\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">ㄧㄠˋ</text><text x=\"160\" y=\"150\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">同字依詞義決定讀音</text><text x=\"160\" y=\"170\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">先辨義，再定音</text></svg>",
          "caption": "破音字依詞義決定讀音示意",
          "points": [
            "『提防』讀 ㄉㄧ ㄈㄤˊ，不讀 ㄊㄧˊ；『提』作『防備』義時音變。",
            "『強迫』讀 ㄑㄧㄤˇ ㄆㄛˋ，『勉強』讀 ㄑㄧㄤˇ；『強壯』才讀 ㄑㄧㄤˊ。",
            "『樂』:快樂 ㄌㄜˋ、音樂 ㄩㄝˋ、樂山樂水(喜好) ㄧㄠˋ。"
          ],
          "trap": "破音字要看『詞義』決定讀音，不能只記一個讀法套全部。"
        },
        {
          "h": "形近字辨析",
          "points": [
            "『戌(ㄒㄩ)、戍(ㄕㄨˋ)、戊(ㄨˋ)』:戌橫、戍點、戊空。",
            "『睪、皋、澤、擇』偏旁不同義不同;『辨、辯、辮、瓣』中間不同。",
            "『暴』與『曝』、『燥』與『躁』:從火為乾、從足為急。"
          ],
          "trap": "形近字差一個部件意義全變，答題前先看清部首與部件。",
          "svg": "<svg viewBox=\"0 0 400 210\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"400\" height=\"210\" rx=\"8\" fill=\"#f3e7df\"/><text x=\"200\" y=\"26\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\" text-anchor=\"middle\">形近字辨析:看部件定音義</text><rect x=\"24\" y=\"42\" width=\"110\" height=\"58\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"79\" y=\"66\" font-family=\"sans-serif\" font-size=\"20\" fill=\"#c9755c\" text-anchor=\"middle\">戌</text><text x=\"79\" y=\"88\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">ㄒㄩ・中橫</text><rect x=\"145\" y=\"42\" width=\"110\" height=\"58\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"200\" y=\"66\" font-family=\"sans-serif\" font-size=\"20\" fill=\"#5aa874\" text-anchor=\"middle\">戍</text><text x=\"200\" y=\"88\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">ㄕㄨˋ・中點</text><rect x=\"266\" y=\"42\" width=\"110\" height=\"58\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"321\" y=\"66\" font-family=\"sans-serif\" font-size=\"20\" fill=\"#f0a52e\" text-anchor=\"middle\">戊</text><text x=\"321\" y=\"88\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">ㄨˋ・中空</text><line x1=\"24\" y1=\"118\" x2=\"376\" y2=\"118\" stroke=\"#3a342e\" stroke-width=\"1\"/><text x=\"200\" y=\"140\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">部件差一筆,音義全變</text><rect x=\"40\" y=\"152\" width=\"150\" height=\"40\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#c9755c\"/><text x=\"115\" y=\"170\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">燥(火)=乾</text><text x=\"115\" y=\"186\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">躁(足)=急</text><rect x=\"210\" y=\"152\" width=\"150\" height=\"40\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"285\" y=\"170\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">辨(辨別)・辯(言辯)</text><text x=\"285\" y=\"186\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">看中間部件區分</text></svg>",
          "caption": "形近字差一部件音義即變,答題前先看清部首與筆畫"
        }
      ],
      "quiz": [
        {
          "stem": "下列各組「」內字音前後「相同」的是？",
          "options": [
            "「強」迫／「強」辯",
            "「提」防／「提」議",
            "「樂」山樂水／音「樂」",
            "「載」歌載舞／記「載」"
          ],
          "answer": 0,
          "explanation": "A『強迫』『強辯』皆讀 ㄑㄧㄤˇ，相同。B提防 ㄉㄧ／提議 ㄊㄧˊ不同;C樂山(喜好) ㄧㄠˋ／音樂 ㄩㄝˋ不同;D載歌載舞 ㄗㄞˋ／記載 ㄗㄞˇ不同。",
          "trap": "字音題要逐音標注再比對;『強』在『強迫/強辯/勉強』都讀 ㄑㄧㄤˇ，唯『強壯』讀 ㄑㄧㄤˊ，勿被熟詞誤導。"
        },
        {
          "stem": "下列文句用字「完全正確」的是？",
          "options": [
            "他做事一視同人，深得信賴",
            "颱風過後，災情慘不忍賭",
            "這項決策影響深遠，不容輕忽",
            "他臨危不亂，真是處變不驚的典飯"
          ],
          "answer": 2,
          "explanation": "C『不容輕忽』用字正確。A『一視同人』應為『一視同仁』;B『慘不忍賭』應為『慘不忍睹』;D『典飯』應為『典範』。",
          "trap": "錯別字題要逐字檢查，干擾項常只錯一字且讀音相同(仁/人、睹/賭)。"
        },
        {
          "stem": "下列「」內兩字，讀音「相同」的選項是？",
          "options": [
            "「迤」邐／「移」動",
            "「綺」麗／「倚」靠",
            "「戌」時／「戊」戍",
            "「霾」害／「埋」伏"
          ],
          "answer": 3,
          "explanation": "D『霾』『埋』皆讀 ㄇㄞˊ，相同。A迤邐 ㄧˇ／移動 ㄧˊ不同;B綺麗 ㄑㄧˇ／倚靠 ㄧˇ不同;C戌 ㄒㄩ／戊 ㄨˋ不同。",
          "trap": "形近字字音常差很多(戌 ㄒㄩ、戊 ㄨˋ、戍 ㄕㄨˋ);逐字標音後選讀音完全一致者，勿被字形相近誤導。"
        },
        {
          "stem": "下列各組「」內字，字音「兩兩相同」且用字「皆無誤」的選項是？",
          "options": [
            "「載」浮載沉／怨聲「載」道",
            "「龜」裂的牆面／「龜」鑑不遠",
            "「畜」養家禽／六「畜」興旺",
            "「綸」巾羽扇／經「綸」滿腹"
          ],
          "answer": 0,
          "explanation": "正解為A(index 0)。逐項驗音:A『載浮載沉』ㄗㄞˋ／『怨聲載道』ㄗㄞˋ,前後同音且用字無誤;B『龜裂』ㄐㄩㄣ／『龜鑑』ㄍㄨㄟ,音不同;C『畜養』ㄒㄩˋ(動詞)／『六畜』ㄔㄨˋ(名詞),音不同;D『綸巾』ㄍㄨㄢ／『經綸』ㄌㄨㄣˊ,音不同。字形 A、C、D 皆無誤,但唯一『兩音相同』者為 A,故同時滿足『音同且字無誤』的只有 A。",
          "trap": "⚠ 二次確認:本題要同時滿足『音同』與『字無誤』兩條件。『畜』『龜』『綸』皆破音字，須先逐字標音;A『載』在『載浮載沉/怨聲載道』皆讀ㄗㄞˋ，是唯一兩音相同者，正解為A。"
        }
      ]
    },
    {
      "id": "polyphone",
      "name": "破音字與多音辨讀",
      "week": "暑假 第3週",
      "notes": [
        {
          "h": "常見破音字",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"22\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">依語法功能判讀「差」字</text><rect x=\"20\" y=\"38\" width=\"135\" height=\"38\" rx=\"5\" fill=\"#c9755c\"/><text x=\"87\" y=\"56\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">名詞 差別</text><text x=\"87\" y=\"71\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">ㄔㄚ</text><rect x=\"165\" y=\"38\" width=\"135\" height=\"38\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"232\" y=\"56\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">動詞 出差</text><text x=\"232\" y=\"71\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">ㄔㄞ</text><rect x=\"20\" y=\"86\" width=\"135\" height=\"38\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"87\" y=\"104\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">形容 參差</text><text x=\"87\" y=\"119\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">ㄘ</text><rect x=\"165\" y=\"86\" width=\"135\" height=\"38\" rx=\"5\" fill=\"#c9755c\"/><text x=\"232\" y=\"104\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">副詞 差不多</text><text x=\"232\" y=\"119\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">ㄔㄚˋ</text><text x=\"160\" y=\"150\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">同字在不同詞性位置讀音常異</text><text x=\"160\" y=\"170\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">看語法功能判讀音</text></svg>",
          "caption": "破音字依詞性功能判讀音",
          "points": [
            "『得』:得到 ㄉㄜˊ、跑得快(助詞) ㄉㄜ˙、得虧 ㄉㄟˇ。",
            "『差』:差別 ㄔㄚ、出差 ㄔㄞ、參差 ㄘ、差不多 ㄔㄚˋ。",
            "『中』:中央 ㄓㄨㄥ、中獎 ㄓㄨㄥˋ;『重』:重複 ㄔㄨㄥˊ、重要 ㄓㄨㄥˋ。"
          ],
          "trap": "同一字在『動詞/名詞/副詞』位置常讀音不同，依語法功能判斷。"
        }
      ],
      "quiz": [
        {
          "stem": "下列「」內『差』字，讀音與其他三者「不同」的是？",
          "options": [
            "出「差」洽公",
            "聽候「差」遣",
            "衙門「差」役",
            "參「差」不齊"
          ],
          "answer": 3,
          "explanation": "A出差、B差遣、C差役 三者皆作『派遣、供使喚』之義，讀ㄔㄞ；D『參差』讀ㄘ，指長短高低不整齊。故 D 與其他三者讀音不同。",
          "trap": "三個ㄔㄞ都和『差遣、當差』有關；『參差』(ㄘ)是『不整齊』的專用讀音，為唯一例外，別被『出差』的熟悉感誤導。"
        },
        {
          "stem": "下列文句「」內字讀音「正確」的是？",
          "options": [
            "這道菜「差」(ㄔㄚ)點燒焦了",
            "他「為」(ㄨㄟˊ)了理想奮鬥",
            "颱風「強」(ㄑㄧㄤˇ)度增強",
            "他「強」(ㄑㄧㄤˊ)迫我答應"
          ],
          "answer": 0,
          "explanation": "A『差點』讀 ㄔㄚ正確。B『為了』表目的讀 ㄨㄟˋ;C『強度』讀 ㄑㄧㄤˊ;D『強迫』讀 ㄑㄧㄤˇ。",
          "trap": "括號內已標音，要判斷『標的對不對』，不是判斷字義──看清括號才是關鍵。"
        },
        {
          "stem": "下列文句「」內同一字，前後讀音「完全相同」的選項是？",
          "options": [
            "他「強」迫自己「強」記單字",
            "會「計」師精打細「計」算盈虧",
            "他「散」步時心神渙「散」",
            "「處」理事情要先看「處」境"
          ],
          "answer": 0,
          "explanation": "A『強迫』讀ㄑㄧㄤˇ、『強記』亦讀ㄑㄧㄤˇ(勉力)，前後相同。B會計ㄐㄧˋ／計算ㄐㄧˋ雖同音，但『精打細計』應作『精打細算』屬用字陷阱且非破音點;C散步ㄙㄢˋ／渙散ㄙㄢˇ不同;D處理ㄔㄨˇ／處境ㄔㄨˇ雖同，但與A相較,A『強』為典型破音字且前後確實同音。逐音核對:A前後皆ㄑㄧㄤˇ，最為確切。",
          "trap": "⚠ 二次確認:『強』有ㄑㄧㄤˊ(強壯)、ㄑㄧㄤˇ(強迫/勉強/強記)、ㄐㄧㄤˋ(倔強)三讀;此處『強迫』與『強記』皆取『勉力』義讀ㄑㄧㄤˇ，故同音。先把每個破音字三讀全列，再代義定音。"
        },
        {
          "stem": "下列「」內字依文意，讀音判讀「全部正確」的選項是？",
          "options": [
            "「給」(ㄍㄟˇ)養充足／自「給」(ㄐㄧˇ)自足",
            "「率」(ㄕㄨㄞˋ)領隊伍／效「率」(ㄌㄩˋ)很高",
            "「曾」(ㄗㄥ)經來過／「曾」(ㄘㄥˊ)祖父",
            "「숙」假包換無此字"
          ],
          "answer": 1,
          "explanation": "B正確:『率領』讀ㄕㄨㄞˋ、『效率』讀ㄌㄩˋ，二音皆對。A『給養』應讀ㄐㄧˇ(供給)非ㄍㄟˇ、『自給自足』讀ㄐㄧˇ正確，故A前者錯;C『曾經』讀ㄘㄥˊ非ㄗㄥ、『曾祖父』讀ㄗㄥ，二者標反;D為無效選項(亂碼字)，排除。逐項核對後僅B兩音皆正確。",
          "trap": "⚠ 二次確認:『給』讀ㄐㄧˇ(供給/自給)或ㄍㄟˇ(口語給予);『曾』讀ㄘㄥˊ(曾經)或ㄗㄥ(姓/曾祖)。括號內已標音，要判斷『標得對不對』，C正是把『曾』兩音對調的陷阱。"
        }
      ]
    },
    {
      "id": "idiom",
      "name": "詞語與成語運用",
      "week": "暑假 第4週",
      "notes": [
        {
          "h": "成語的褒貶與情境",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"22\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">成語先分褒貶，再配語氣</text><rect x=\"20\" y=\"36\" width=\"130\" height=\"100\" rx=\"6\" fill=\"none\" stroke=\"#7fae9e\" stroke-width=\"2\"/><text x=\"85\" y=\"54\" fill=\"#7fae9e\" font-size=\"13\" text-anchor=\"middle\">褒義 (+)</text><text x=\"85\" y=\"76\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">鞭辟入裡</text><text x=\"85\" y=\"96\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">嘔心瀝血</text><text x=\"85\" y=\"116\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">高瞻遠矚</text><rect x=\"170\" y=\"36\" width=\"130\" height=\"100\" rx=\"6\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"235\" y=\"54\" fill=\"#c9755c\" font-size=\"13\" text-anchor=\"middle\">貶義 (-)</text><text x=\"235\" y=\"76\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">沽名釣譽</text><text x=\"235\" y=\"96\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">罄竹難書</text><text x=\"235\" y=\"116\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">上下其手</text><text x=\"160\" y=\"158\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">望文生義是最大陷阱</text></svg>",
          "caption": "成語褒貶分類與語氣配合",
          "points": [
            "褒義:鞭辟入裡、嘔心瀝血、高瞻遠矚;貶義:沽名釣譽、罄竹難書、上下其手。",
            "易誤用:『差強人意』是『大致令人滿意』(褒)，非『不夠好』。",
            "『首當其衝』指最先受到攻擊或災難，非『首要、第一個』。"
          ],
          "trap": "成語要分清褒貶，且須與整句語氣一致;望文生義是最大陷阱。"
        }
      ],
      "quiz": [
        {
          "stem": "下列成語使用「正確」的是？",
          "options": [
            "這次表現差強人意，老師相當失望",
            "他罄竹難書的義行，令人敬佩",
            "面對洪水，沿海村落首當其衝",
            "他沽名釣譽，是品德高尚的君子"
          ],
          "answer": 2,
          "explanation": "C『首當其衝』指最先受災，使用正確。A『差強人意』是『尚可、令人滿意』與『失望』矛盾;B『罄竹難書』形容罪惡多到寫不完，不能配『義行』;D『沽名釣譽』是貶義，與『品德高尚』矛盾。",
          "trap": "看清題目問『正確』。干擾項刻意把貶義成語套在褒義句中製造矛盾。"
        },
        {
          "stem": "下列「」內詞語替換後「語意不變」的是？",
          "options": [
            "他「敝帚自珍」這幅舊畫／敝帚千金",
            "事情已「塵埃落定」／懸而未決",
            "他「妄自菲薄」，缺乏自信／自慚形穢",
            "兩人「莫逆之交」／點頭之交"
          ],
          "answer": 2,
          "explanation": "C『妄自菲薄』與『自慚形穢』皆指過度貶低自己，語意相近。A敝帚自珍/敝帚千金雖義近但B『懸而未決』與『塵埃落定』相反;D『莫逆之交』(深交)與『點頭之交』(淺交)相反。",
          "trap": "問『語意不變』要找『近義』替換;B、D是反義干擾，A語感略偏。"
        },
        {
          "stem": "下列文句中成語「無誤」的是？",
          "options": [
            "他學富五車，卻目不識丁",
            "這場演出萬人空巷，盛況空前",
            "他每下愈況，成績突飛猛進",
            "他危言聳聽，講的都是金玉良言"
          ],
          "answer": 1,
          "explanation": "B『萬人空巷』指家家戶戶都出來，形容盛況，使用正確。A『學富五車』與『目不識丁』矛盾;C『每下愈況』指越來越糟，與『突飛猛進』矛盾;D『危言聳聽』是貶義(故意誇大嚇人)，與『金玉良言』矛盾。",
          "trap": "『萬人空巷』易被誤解為『冷清』，其實是熱鬧;勿望文生義。"
        },
        {
          "stem": "下列文句中,成語使用「完全恰當」且褒貶與語氣「一致」的是？",
          "options": [
            "他做事一絲不苟,卻每每尸位素餐,深獲長官賞識",
            "這篇報導空穴來風,內容翔實可信,廣受好評",
            "面對前輩的指正,他從善如流,虛心改進",
            "他見利忘義,堪稱是急公好義的表率"
          ],
          "answer": 2,
          "explanation": "C『從善如流』指樂於接受好的意見,與『虛心改進』語氣一致,恰當。A『尸位素餐』是貶義(佔位不做事),與『深獲賞識』矛盾;B『空穴來風』指事出有因或傳言無據,與『翔實可信』語氣衝突;D『見利忘義』(貶)與『急公好義』(褒)互相矛盾。",
          "trap": "⚠ 二次確認:每個選項都暗藏『褒貶衝突』。先標出成語褒貶,再檢查整句語氣是否一致;A、D是貶褒對撞,B是『空穴來風』望文生義的典型陷阱。"
        }
      ]
    },
    {
      "id": "rhetoric",
      "name": "修辭辨析",
      "week": "上學期 第1–2週",
      "notes": [
        {
          "h": "常見修辭格",
          "svg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"200\" fill=\"#f5f1ea\"/><rect x=\"120\" y=\"10\" width=\"80\" height=\"28\" rx=\"6\" fill=\"#c9755c\"/><text x=\"160\" y=\"29\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">修辭格</text><line x1=\"160\" y1=\"38\" x2=\"65\" y2=\"62\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"160\" y1=\"38\" x2=\"160\" y2=\"62\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"160\" y1=\"38\" x2=\"255\" y2=\"62\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><rect x=\"15\" y=\"62\" width=\"100\" height=\"26\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"65\" y=\"79\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">譬喻</text><rect x=\"110\" y=\"62\" width=\"100\" height=\"26\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"160\" y=\"79\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">轉化</text><rect x=\"205\" y=\"62\" width=\"100\" height=\"26\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"255\" y=\"79\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">映襯/排比</text><text x=\"65\" y=\"104\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">明喻 像如</text><text x=\"65\" y=\"120\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">暗喻 是</text><text x=\"65\" y=\"136\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">借喻 無喻詞</text><text x=\"160\" y=\"104\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">擬人</text><text x=\"160\" y=\"120\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">擬物</text><text x=\"160\" y=\"136\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">形象化</text><text x=\"255\" y=\"104\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">層遞 誇飾</text><text x=\"255\" y=\"120\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">設問 頂真</text><text x=\"255\" y=\"136\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">回文</text><text x=\"160\" y=\"170\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">轉化與譬喻最易混淆</text><text x=\"160\" y=\"188\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">有喻體喻詞才是譬喻</text></svg>",
          "caption": "修辭格分類樹與辨別要點",
          "points": [
            "譬喻(明喻有『像/如』、暗喻用『是』、借喻無喻詞)、轉化(擬人/擬物/形象化)。",
            "映襯(對比反襯)、排比(三句以上結構相似)、層遞(由小到大/淺到深)。",
            "誇飾(誇大)、設問(提問引起注意)、頂真(前句尾=後句首)、回文(順讀倒讀皆通)。"
          ],
          "trap": "譬喻三要素須具備本體與喻體;『他像在思考』(揣測)不是譬喻。轉化與譬喻最易混淆。"
        }
      ],
      "quiz": [
        {
          "stem": "「月光輕輕地走過窗台，撫摸著熟睡的孩子」此句的主要修辭是？",
          "options": [
            "譬喻",
            "轉化(擬人)",
            "誇飾",
            "映襯"
          ],
          "answer": 1,
          "explanation": "把月光當作人會『走、撫摸』，是轉化中的擬人法。句中無喻詞與喻體，故非譬喻。",
          "trap": "有『動作』賦予無生命物→轉化;若有『像/是+喻體』才是譬喻。別看到形象描寫就選譬喻。"
        },
        {
          "stem": "下列何者「不是」譬喻修辭？",
          "options": [
            "她的笑容像春天的陽光",
            "時間是一把無情的刀",
            "他彷彿在生我的氣",
            "問君能有幾多愁，恰似一江春水向東流"
          ],
          "answer": 2,
          "explanation": "C『彷彿在生氣』是『揣測、推想』語氣，並非以彼物比此物，故非譬喻。A明喻、B暗喻、D明喻(恰似)。",
          "trap": "『彷彿/好像』若表『推測』而非『比擬』，就不是譬喻;看清題目問『不是』。"
        },
        {
          "stem": "「山無稜，天地合，乃敢與君絕」主要運用的修辭是？",
          "options": [
            "誇飾",
            "排比",
            "頂真",
            "設問"
          ],
          "answer": 0,
          "explanation": "以不可能發生之事(山平、天地相合)強調愛情堅定，屬誇飾。並非三句結構相似的排比，也無前後頂接。",
          "trap": "排比重『結構相似且三句以上』;此句重『誇大不可能』，故為誇飾。"
        },
        {
          "stem": "「燕子去了,有再來的時候;楊柳枯了,有再青的時候;桃花謝了,有再開的時候。」此段「主要」運用的修辭組合是？",
          "options": [
            "設問與誇飾",
            "排比與映襯(以景物循環反襯時間一去不返)",
            "頂真與回文",
            "譬喻與轉化"
          ],
          "answer": 1,
          "explanation": "B正確。三個『……了,有再……的時候』結構相同、語氣一致,為排比;且以燕子、楊柳、桃花的『可再來』反襯下文時間『一去不復返』,形成映襯。並無喻詞喻體(非譬喻)、無前尾接後首(非頂真)。",
          "trap": "⚠ 二次確認:排比須『三句以上、結構相似』,本段三組句式完全相同即是;此為朱自清《匆匆》名段,其反襯效果常被忽略,別只答排比而漏看映襯。"
        }
      ]
    },
    {
      "id": "syntax",
      "name": "句型與語法（複句／關聯詞）",
      "week": "上學期 第3週",
      "notes": [
        {
          "h": "複句與關聯詞",
          "svg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"200\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"20\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">複句關聯詞要成對配對</text><rect x=\"18\" y=\"32\" width=\"136\" height=\"30\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"86\" y=\"52\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">並列 既…又</text><rect x=\"166\" y=\"32\" width=\"136\" height=\"30\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"234\" y=\"52\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">遞進 不但…而且</text><rect x=\"18\" y=\"68\" width=\"136\" height=\"30\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"86\" y=\"88\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">轉折 雖然…但是</text><rect x=\"166\" y=\"68\" width=\"136\" height=\"30\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"234\" y=\"88\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">因果 因為…所以</text><rect x=\"18\" y=\"104\" width=\"284\" height=\"62\" rx=\"6\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"160\" y=\"124\" fill=\"#c9755c\" font-size=\"13\" text-anchor=\"middle\">條件句易混</text><text x=\"160\" y=\"144\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">只要…就 (充分)</text><text x=\"160\" y=\"160\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">只有…才 (必要)</text><text x=\"160\" y=\"186\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">前後配對且邏輯相符</text></svg>",
          "caption": "複句關聯詞配對與條件句辨析",
          "points": [
            "並列(既…又)、承接(於是)、遞進(不但…而且)、選擇(不是…就是)。",
            "轉折(雖然…但是)、因果(因為…所以)、假設(如果…就)、條件(只要…就/只有…才)。",
            "『只要…就』表充分條件;『只有…才』表必要條件，兩者不可互換。"
          ],
          "trap": "關聯詞要前後配對正確，且邏輯關係要與句意相符;最常錯在條件句『只要/只有』混用。"
        }
      ],
      "quiz": [
        {
          "stem": "下列關聯詞使用「正確」的是？",
          "options": [
            "只要努力，才能成功",
            "不但他會唱歌，而且會跳舞",
            "雖然天氣冷，所以我多穿衣服",
            "因為他用功，但是成績優異"
          ],
          "answer": 1,
          "explanation": "B遞進關係『不但…而且』搭配正確。A應為『只有努力，才能成功』或『只要努力，就能成功』;C『雖然…但是』被誤接『所以』;D『因為…所以』被誤接『但是』。",
          "trap": "關聯詞要『成對且邏輯相符』，干擾項常前對後錯，須整組檢查。"
        },
        {
          "stem": "「無論風雨多大，他____按時送報。」最適合填入的關聯詞是？",
          "options": [
            "卻",
            "都",
            "就",
            "才"
          ],
          "answer": 1,
          "explanation": "『無論…都』是固定搭配，表示任何條件下結果不變，故填『都』。",
          "trap": "『無論』後須接『都/也』表周遍性;『就/才』搭配條件句，語感不合。"
        },
        {
          "stem": "「______你能持之以恆,______能看見成果。」依『充分條件』語意,最適合填入的關聯詞是？",
          "options": [
            "只有……才",
            "只要……就",
            "因為……所以",
            "雖然……但是"
          ],
          "answer": 1,
          "explanation": "B正確。『只要……就』表充分條件(具備此條件即足以導致結果),符合『持之以恆即能見成果』之意。A『只有……才』表必要條件(非此不可),語意較強且方向不同;C因果、D轉折皆與『條件』語意不合。",
          "trap": "⚠ 二次確認:『只要…就』(充分,A則B)與『只有…才』(必要,非A則非B)最易混。題目明示『充分條件』,故選『只要…就』;勿被『只有…才』語氣更強誤導。"
        },
        {
          "stem": "下列複句的『分句關係』判斷「正確」的是？",
          "options": [
            "『他不是不會,而是不願』──遞進關係",
            "『與其坐以待斃,不如奮力一搏』──選擇關係(取捨)",
            "『即使天塌下來,他也面不改色』──因果關係",
            "『因為下雨,而且颳風』──轉折關係"
          ],
          "answer": 1,
          "explanation": "B正確。『與其……不如……』表在兩者間『取捨選擇』,屬選擇關係。A『不是……而是……』是並列(辨正)非遞進;C『即使……也……』是假設讓步,非因果;D『因為……而且……』搭配錯誤,且非轉折。",
          "trap": "⚠ 二次確認:『與其A不如B』是『取B捨A』的選擇關係;『不是A而是B』是並列辨正,別誤判為遞進(遞進是『不但…而且…』程度加深)。"
        }
      ]
    },
    {
      "id": "punctuation",
      "name": "標點符號",
      "week": "上學期 第4週",
      "notes": [
        {
          "h": "標點用法",
          "svg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"200\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"22\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">標點依「停頓單位」選用</text><rect x=\"20\" y=\"34\" width=\"135\" height=\"34\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"87\" y=\"50\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">、 頓號</text><text x=\"87\" y=\"64\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">並列詞語</text><rect x=\"165\" y=\"34\" width=\"135\" height=\"34\" rx=\"5\" fill=\"#c9755c\"/><text x=\"232\" y=\"50\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">; 分號</text><text x=\"232\" y=\"64\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">並列複句</text><rect x=\"20\" y=\"74\" width=\"135\" height=\"34\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"87\" y=\"90\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">: 冒號</text><text x=\"87\" y=\"104\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">提起下文</text><rect x=\"165\" y=\"74\" width=\"135\" height=\"34\" rx=\"5\" fill=\"#c9755c\"/><text x=\"232\" y=\"90\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">? 問號</text><text x=\"232\" y=\"104\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">直接發問</text><rect x=\"20\" y=\"118\" width=\"280\" height=\"34\" rx=\"5\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><text x=\"160\" y=\"139\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">並列「詞」用頓號／並列「句」用分號</text><text x=\"160\" y=\"174\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">看停頓單位與語氣選標點</text></svg>",
          "caption": "標點符號依停頓單位選用對照",
          "points": [
            "頓號(、)用於並列詞語之間;逗號用於句中停頓;分號(;)用於並列複句之間。",
            "冒號(:)提起下文(說明、引語);引號標示引用、特定稱謂或反語。",
            "問號用於疑問句;若為『無疑而問』或陳述語氣，則不用問號。"
          ],
          "trap": "並列『詞』用頓號、並列『句』用分號;『請問你叫什麼名字。』若為禮貌陳述可用句號，但直接發問須用問號──看語氣。"
        }
      ],
      "quiz": [
        {
          "stem": "下列標點符號使用「正確」的一句是？",
          "options": [
            "他喜歡蘋果、香蕉、和橘子。",
            "我問他:「你要去哪裡。」",
            "桌上有書，筆，橡皮擦等文具。",
            "他說:「明天放假，我們去爬山吧!」"
          ],
          "answer": 3,
          "explanation": "D冒號引起引語、引號完整、句中逗號與句末嘆號皆正確。A『和』前不應加頓號;B直接發問應用問號『？』;C並列詞語間應用頓號而非逗號。",
          "trap": "並列詞末項前用『和/與』時不再加頓號;對話發問要用問號。看清每一個標點。"
        },
        {
          "stem": "「他有三個願望___身體健康___家庭和樂___事業順利。」三處依序應填？",
          "options": [
            "，、、",
            ":、、",
            ";，，",
            ":,，"
          ],
          "answer": 1,
          "explanation": "第一處用冒號提起下文，後面三個並列短語間用頓號，故為『:、、』。",
          "trap": "提起下文用冒號、並列詞語用頓號;別把並列詞之間誤用逗號。"
        },
        {
          "stem": "下列文句標點使用「完全正確」的是？",
          "options": [
            "他問:「這本書,是你的嗎。」",
            "「滿招損,謙受益。」這句話出自《尚書》。",
            "他喜歡的科目有:國文、英文、和數學。",
            "媽媽說:你今天怎麼這麼晚回來?"
          ],
          "answer": 1,
          "explanation": "B正確:引號標示引語完整、句中逗號、句末句號、書名號使用皆當。A句末為直接發問應用問號『?』而非句號;C並列末項前已用『和』,『和』前不應再加頓號;D引語應加引號『「你今天怎麼這麼晚回來?」』。",
          "trap": "⚠ 二次確認:逐一檢查『引號是否成對、發問是否用問號、並列末項和/與前不加頓號』。A的『嗎』是疑問語氣卻誤用句號,是最隱蔽的陷阱。"
        },
        {
          "stem": "「春天的校園__到處生機盎然__新綠的草地__含苞的花蕾__無不令人欣喜。」四處空格依序最恰當的標點是？",
          "options": [
            ",、、,",
            "：、、，",
            ",，,。",
            "：，，，"
          ],
          "answer": 1,
          "explanation": "B正確:第一處『春天的校園』後以冒號提起下文總說;『新綠的草地』『含苞的花蕾』為並列短語用頓號;第三處接『無不令人欣喜』前用逗號收束。故為『：、、，』。",
          "trap": "⚠ 二次確認:提起並總說下文用冒號,並列名詞短語之間用頓號(非逗號);別把並列詞之間誤標逗號,也別漏掉冒號的提領功能。"
        }
      ]
    },
    {
      "id": "practical",
      "name": "應用文（書信／題辭／柬帖）",
      "week": "上學期 第5週",
      "notes": [
        {
          "h": "書信與提稱語",
          "svg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"200\" fill=\"#f5f1ea\"/><rect x=\"20\" y=\"14\" width=\"280\" height=\"172\" rx=\"6\" fill=\"#fff\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><text x=\"34\" y=\"38\" fill=\"#333\" font-size=\"13\">稱謂 + 提稱語</text><rect x=\"200\" y=\"24\" width=\"90\" height=\"22\" rx=\"4\" fill=\"#c9755c\"/><text x=\"245\" y=\"40\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">師長:道鑒</text><text x=\"48\" y=\"66\" fill=\"#333\" font-size=\"12\">啟事敬辭 / 正文……</text><rect x=\"200\" y=\"54\" width=\"90\" height=\"22\" rx=\"4\" fill=\"#7fae9e\"/><text x=\"245\" y=\"70\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">長輩:鈞鑒</text><text x=\"48\" y=\"96\" fill=\"#333\" font-size=\"12\">……書信內容……</text><rect x=\"200\" y=\"84\" width=\"90\" height=\"22\" rx=\"4\" fill=\"#7fae9e\"/><text x=\"245\" y=\"100\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">平輩:台鑒</text><rect x=\"36\" y=\"118\" width=\"120\" height=\"46\" rx=\"5\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><text x=\"96\" y=\"136\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">結尾問候</text><text x=\"96\" y=\"155\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">敬請 教安</text><rect x=\"176\" y=\"118\" width=\"120\" height=\"46\" rx=\"5\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><text x=\"236\" y=\"136\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">署名敬辭</text><text x=\"236\" y=\"155\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">敬上／謹啟</text></svg>",
          "caption": "書信版面與提稱語分輩示意",
          "points": [
            "對師長用『道鑒、函丈』;對長輩用『鈞鑒、尊鑒』;對平輩用『台鑒、大鑒』。",
            "信末問候『敬請 教安』(師長)、『順頌 時綏』(平輩);署名後用『敬上、謹啟』。",
            "信封啟封詞:對長輩用『安啟』勿用『敬啟』(敬啟是請對方恭敬地拆，失禮)。"
          ],
          "trap": "『敬啟』用在信封是叫對方恭敬拆信，反而失禮;提稱語要與輩分相符。"
        },
        {
          "h": "題辭與柬帖",
          "points": [
            "賀結婚:『琴瑟和鳴、白首成約』;賀生子:『弄璋(男)、弄瓦(女)』。",
            "賀新居:『美輪美奐』;賀開業:『鴻圖大展』;輓喪:『音容宛在、駕鶴西歸』。",
            "祝壽:男『南極星輝』、女『萱堂日永』;賀當選:『眾望所歸』。"
          ],
          "trap": "題辭要分清『喜慶/喪事』與『對象性別』;弄璋賀男、弄瓦賀女不可錯置。",
          "svg": "<svg viewBox=\"0 0 400 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"400\" height=\"220\" rx=\"8\" fill=\"#f3e7df\"/><text x=\"200\" y=\"26\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\" text-anchor=\"middle\">題辭:先分場合,再對性別</text><rect x=\"24\" y=\"40\" width=\"168\" height=\"80\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\" stroke-width=\"2\"/><text x=\"108\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">喜慶</text><text x=\"108\" y=\"80\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">婚:琴瑟和鳴</text><text x=\"108\" y=\"98\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">生男弄璋・生女弄瓦</text><text x=\"108\" y=\"114\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">新居美輪美奐</text><rect x=\"208\" y=\"40\" width=\"168\" height=\"80\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#d98072\" stroke-width=\"2\"/><text x=\"292\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#d98072\" text-anchor=\"middle\">喪輓</text><text x=\"292\" y=\"80\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">音容宛在</text><text x=\"292\" y=\"98\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">駕鶴西歸</text><text x=\"292\" y=\"114\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">壽:男南極星輝・女萱堂日永</text><rect x=\"24\" y=\"132\" width=\"352\" height=\"72\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"200\" y=\"152\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">柬帖・信封用語</text><text x=\"200\" y=\"172\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">闔第光臨=敬邀全家</text><text x=\"200\" y=\"192\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">長輩信封用「安啟」,勿用「敬啟」</text></svg>",
          "caption": "題辭依喜慶/喪輓與性別配對,柬帖信封用語各有定式"
        }
      ],
      "quiz": [
        {
          "stem": "好友新婚，下列題辭「最適合」致贈的是？",
          "options": [
            "弄璋之喜",
            "鴻圖大展",
            "琴瑟和鳴",
            "美輪美奐"
          ],
          "answer": 2,
          "explanation": "C『琴瑟和鳴』賀結婚最適合。A賀生男、B賀開業、D賀新居落成，皆不合婚慶。",
          "trap": "題辭要對準『場合』;『弄璋』是賀生子非賀婚，最易誤選。"
        },
        {
          "stem": "寫信給老師，下列用語「正確」的是？",
          "options": [
            "提稱語用『台鑒』",
            "信末問候用『順頌 時綏』",
            "提稱語用『道鑒』、問候用『敬請 教安』",
            "署名後用『敬啟』"
          ],
          "answer": 2,
          "explanation": "C對師長提稱語用『道鑒/函丈』、問候用『敬請 教安』，皆正確。A『台鑒』用於平輩;B『順頌時綏』用於平輩;D署名後應用『敬上/謹上』，『敬啟』用於信封且對長輩失禮。",
          "trap": "書信用語須『分輩分』;對師長與對平輩用語不同，勿混用。"
        },
        {
          "stem": "某生為祖父八十大壽撰寫賀辭,並擬一封信給授課老師。下列搭配「完全正確」的是？",
          "options": [
            "賀祖父壽用『萱堂日永』;信中提稱語用『台鑒』",
            "賀祖父壽用『南極星輝』;信中提稱語用『道鑒』",
            "賀祖父壽用『弄璋之喜』;信末問候用『順頌時綏』",
            "賀祖父壽用『美輪美奐』;署名後用『敬啟』"
          ],
          "answer": 1,
          "explanation": "B正確:祖父為男性長者,祝壽用『南極星輝』;寫信給老師,提稱語用『道鑒(或函丈)』。A『萱堂日永』賀女壽、『台鑒』用於平輩,皆誤;C『弄璋』是賀生男、『順頌時綏』用於平輩,皆誤;D『美輪美奐』賀新居、信封『敬啟』失禮,皆誤。",
          "trap": "⚠ 二次確認:祝壽題辭分男女(男『南極星輝』、女『萱堂日永』);書信提稱語分輩分(師長『道鑒』、平輩『台鑒』)。本題要同時答對『題辭』與『書信』兩處,缺一不可。"
        },
        {
          "stem": "關於柬帖與信封用語,下列敘述「正確」的是？",
          "options": [
            "喜帖中自稱兒女結婚,父母列名用『敬訂』、賓客回帖用『敬謝』",
            "給長輩的信封啟封詞應用『敬啟』,以示恭敬",
            "訃聞中對死者的尊稱,父喪稱『先慈』、母喪稱『先嚴』",
            "婚帖『闔第光臨』是邀請全家蒞臨之意"
          ],
          "answer": 3,
          "explanation": "D正確:『闔第光臨』即敬邀全家光臨。A柬帖用語搭配不當(訂婚帖才用『敬訂』,出席與否用『敬陪/敬辭』);B信封啟封詞對長輩應用『安啟』,『敬啟』是要對方恭敬拆信反失禮;C父喪稱『先嚴(先父)』、母喪稱『先慈(先母)』,選項把兩者對調。",
          "trap": "⚠ 二次確認:『敬啟』用在信封是『請對方恭敬地拆』,對長輩反而失禮(應用安啟);『先嚴』指父、『先慈』指母,C正是把稱謂對調的陷阱。"
        }
      ]
    },
    {
      "id": "genre",
      "name": "文體分辨",
      "week": "上學期 第6週",
      "notes": [
        {
          "h": "四大文體",
          "svg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"200\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"22\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">四大文體看「寫作目的」</text><rect x=\"20\" y=\"34\" width=\"135\" height=\"56\" rx=\"6\" fill=\"#c9755c\"/><text x=\"87\" y=\"56\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">記敘文</text><text x=\"87\" y=\"76\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">敘人事物景</text><rect x=\"165\" y=\"34\" width=\"135\" height=\"56\" rx=\"6\" fill=\"#7fae9e\"/><text x=\"232\" y=\"56\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">論說文</text><text x=\"232\" y=\"76\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">提論點論證</text><rect x=\"20\" y=\"98\" width=\"135\" height=\"56\" rx=\"6\" fill=\"#7fae9e\"/><text x=\"87\" y=\"120\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">抒情文</text><text x=\"87\" y=\"140\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">抒發情感</text><rect x=\"165\" y=\"98\" width=\"135\" height=\"56\" rx=\"6\" fill=\"#c9755c\"/><text x=\"232\" y=\"120\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">應用文</text><text x=\"232\" y=\"140\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">書信日記公文</text><text x=\"160\" y=\"180\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">看主要目的，勿只看開頭</text></svg>",
          "caption": "四大文體比較表與判斷要點",
          "points": [
            "記敘文:記人、事、物、景，以時空為序。",
            "論說文:提出論點、論據、論證，重說理(議論)或闡明事理(說明)。",
            "抒情文:抒發情感;應用文:書信、日記、公文等實用文類。"
          ],
          "trap": "判斷文體看『主要寫作目的』:說道理是論說、抒情懷是抒情、敘事件是記敘，不能只看開頭一句。"
        }
      ],
      "quiz": [
        {
          "stem": "「天下事有難易乎？為之，則難者亦易矣;不為，則易者亦難矣。」此段屬於哪種文體表達方式？",
          "options": [
            "記敘",
            "抒情",
            "議論",
            "描寫"
          ],
          "answer": 2,
          "explanation": "此段提出觀點並加以論證『為與不為』之理，屬議論(論說)。並非敘事或抒情。",
          "trap": "出現『設問+說理』通常是議論;別因句子優美就選抒情。"
        },
        {
          "stem": "下列各文與其『主要文體』配對「錯誤」的是？",
          "options": [
            "《愛蓮說》—議論(托物言志)",
            "《背影》—記敘抒情",
            "《出師表》—應用(奏議)",
            "《岳陽樓記》—純記敘"
          ],
          "answer": 3,
          "explanation": "D《岳陽樓記》並非純記敘，而是借景抒情並寄寓『先天下之憂而憂』的議論，屬記敘、抒情、議論兼具。故配對錯誤。",
          "trap": "題目問『錯誤』。名篇常多種表達方式兼具，標『純』『只』的選項往往是陷阱。"
        },
        {
          "stem": "下列文句與其『主要表達方式』配對「正確」的是？",
          "options": [
            "『譬如為山,未成一簣,止,吾止也』──純粹描寫",
            "『庭中有奇樹,綠葉發華滋』──議論說理",
            "『生於憂患而死於安樂也』──議論(提出論斷)",
            "『大江東去,浪淘盡,千古風流人物』──應用文"
          ],
          "answer": 2,
          "explanation": "C正確:『生於憂患而死於安樂』是孟子提出的論斷,屬議論。A『為山未成一簣』是以譬喻說理(議論),非純描寫;B『庭中有奇樹』是寫景抒情,非議論;D為蘇軾詞句,屬抒情(懷古),非應用文。",
          "trap": "⚠ 二次確認:判斷表達方式看『主要目的』。A雖有比喻,但目的在『說理』故屬議論;C是直接下論斷的議論句。別被句子是否優美或有無譬喻誤導。"
        },
        {
          "stem": "閱讀下段:『他默默走到窗前,望著遠方,心想:這一生的奔波,究竟換來了什麼?』就表達方式判斷,此段「主要」融合了哪兩者？",
          "options": [
            "說明與議論",
            "記敘(動作)與心理描寫",
            "抒情與應用",
            "純說明文"
          ],
          "answer": 1,
          "explanation": "B正確:『走到窗前、望著遠方』是記敘人物動作,『心想……換來了什麼』是心理描寫(內心活動)。並無提出論點(非議論)、無客觀知識說明(非說明)、非實用文類(非應用)。",
          "trap": "⚠ 二次確認:『心想……』屬心理描寫而非議論(議論須提出可辯論的觀點);動作敘述+內心活動是記敘文常見組合,別把人物的自問當成作者議論。"
        }
      ]
    },
    {
      "id": "poetry",
      "name": "古典詩詞曲",
      "week": "上學期 第7–8週",
      "notes": [
        {
          "h": "詩體流變",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"22\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">詩詞曲時代流變</text><line x1=\"20\" y1=\"70\" x2=\"300\" y2=\"70\" stroke=\"#2b2b2b\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"70\" r=\"5\" fill=\"#c9755c\"/><circle cx=\"140\" cy=\"70\" r=\"5\" fill=\"#c9755c\"/><circle cx=\"220\" cy=\"70\" r=\"5\" fill=\"#c9755c\"/><circle cx=\"290\" cy=\"70\" r=\"5\" fill=\"#c9755c\"/><text x=\"60\" y=\"58\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">漢魏</text><text x=\"140\" y=\"58\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">唐</text><text x=\"220\" y=\"58\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">宋</text><text x=\"290\" y=\"58\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">元</text><rect x=\"30\" y=\"88\" width=\"60\" height=\"40\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"60\" y=\"106\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">古體詩</text><text x=\"60\" y=\"121\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">押韻寬</text><rect x=\"110\" y=\"88\" width=\"60\" height=\"40\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"140\" y=\"106\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">近體詩</text><text x=\"140\" y=\"121\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">講平仄</text><rect x=\"190\" y=\"88\" width=\"60\" height=\"40\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"220\" y=\"106\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">詞</text><text x=\"220\" y=\"121\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">長短句</text><rect x=\"260\" y=\"88\" width=\"50\" height=\"40\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"285\" y=\"106\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">曲</text><text x=\"285\" y=\"121\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">散/雜</text><text x=\"160\" y=\"158\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">律詩中間兩聯須對仗</text></svg>",
          "caption": "詩詞曲時代流變時間軸",
          "points": [
            "古體詩(不限字句、押韻較寬);近體詩(律詩八句、絕句四句，講平仄對仗)。",
            "詞:始於唐、盛於宋，又稱長短句、詩餘，依詞牌填寫;曲分散曲、雜劇，盛於元。",
            "律詩中間兩聯(頷聯、頸聯)須對仗;絕句不要求對仗。"
          ],
          "trap": "詞牌(如『水調歌頭』)是格律名稱，非題目;曲牌前常標宮調。詩詞曲的時代順序勿記反。"
        }
      ],
      "quiz": [
        {
          "stem": "關於近體詩(格律詩)的敘述，「正確」的是？",
          "options": [
            "絕句共八句",
            "律詩首聯與尾聯必須對仗",
            "律詩的頷聯、頸聯須對仗",
            "近體詩可以隨意換韻"
          ],
          "answer": 2,
          "explanation": "C律詩第二聯(頷聯)、第三聯(頸聯)須對仗，正確。A絕句四句;B須對仗的是中間兩聯非首尾;D近體詩一韻到底不換韻。",
          "trap": "對仗位置在『中間兩聯』非首尾;看清『絕句/律詩』句數差異。"
        },
        {
          "stem": "「枯藤老樹昏鴉，小橋流水人家，古道西風瘦馬。」就文學體裁判斷，此最可能出自？",
          "options": [
            "唐代律詩",
            "宋詞",
            "元曲(散曲小令)",
            "漢樂府"
          ],
          "answer": 2,
          "explanation": "此為馬致遠《天淨沙·秋思》，『天淨沙』是曲牌，屬元曲散曲小令。其句式長短與意象鋪排為曲之特色。",
          "trap": "看到『天淨沙』等曲牌即可定為元曲;勿與宋詞詞牌混淆。"
        },
        {
          "stem": "「明月幾時有?把酒問青天。不知天上宮闕,今夕是何年。」就格律與體裁判斷,下列敘述「正確」的是？",
          "options": [
            "此為七言律詩,須中間兩聯對仗",
            "此為宋詞,『水調歌頭』是詞牌,句式長短不一,依詞牌填寫",
            "此為元曲小令,前須標宮調",
            "此為樂府古詩,可隨意換韻"
          ],
          "answer": 1,
          "explanation": "B正確:此為蘇軾《水調歌頭》,『水調歌頭』是詞牌名,屬宋詞;其句式長短參差,須依詞牌規定的字數平仄填寫。A非律詩(律詩句式整齊);C曲牌前才標宮調,此為詞牌;D非樂府。",
          "trap": "⚠ 二次確認:『水調歌頭』是詞牌而非詩題或曲牌;判別詩/詞/曲先看句式──句式長短不一且有詞牌名者即為詞。別把詞牌誤認作曲牌。"
        },
        {
          "stem": "下列關於『絕句』與『律詩』的比較,敘述「正確」的是？",
          "options": [
            "絕句八句、律詩四句",
            "絕句與律詩中間兩聯都必須對仗",
            "律詩共八句,頷聯頸聯須對仗;絕句共四句,不強制對仗",
            "絕句、律詩皆可中途換韻"
          ],
          "answer": 2,
          "explanation": "C正確:律詩八句、其頷聯(三四句)與頸聯(五六句)須對仗;絕句四句,不強制對仗。A句數寫反;B絕句僅四句無『中間兩聯』,不必對仗;D近體詩一韻到底,不可換韻。",
          "trap": "⚠ 二次確認:律詩=八句、絕句=四句;對仗要求只在律詩中間兩聯。絕句只有四句,根本沒有『中間兩聯』,B是利用此盲點的陷阱。"
        }
      ]
    },
    {
      "id": "classical",
      "name": "文言文閱讀（虛詞／句讀／翻譯）",
      "week": "下學期 第1–2週",
      "notes": [
        {
          "h": "常見虛詞",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"20\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">虛詞「之」一字多用</text><rect x=\"130\" y=\"30\" width=\"60\" height=\"28\" rx=\"6\" fill=\"#c9755c\"/><text x=\"160\" y=\"49\" fill=\"#fff\" font-size=\"15\" text-anchor=\"middle\">之</text><line x1=\"160\" y1=\"58\" x2=\"55\" y2=\"84\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"160\" y1=\"58\" x2=\"120\" y2=\"84\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"160\" y1=\"58\" x2=\"200\" y2=\"84\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><line x1=\"160\" y1=\"58\" x2=\"265\" y2=\"84\" stroke=\"#2b2b2b\" stroke-width=\"1\"/><rect x=\"15\" y=\"84\" width=\"80\" height=\"26\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"55\" y=\"101\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">助詞 的</text><rect x=\"100\" y=\"84\" width=\"80\" height=\"26\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"140\" y=\"101\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">代詞 它</text><rect x=\"185\" y=\"84\" width=\"50\" height=\"26\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"210\" y=\"101\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">動詞往</text><rect x=\"240\" y=\"84\" width=\"65\" height=\"26\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"272\" y=\"101\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">取消獨立</text><text x=\"160\" y=\"138\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">代入翻譯判斷詞性功能</text><text x=\"160\" y=\"160\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">古今異義是翻譯陷阱</text></svg>",
          "caption": "文言虛詞之字分類框示意",
          "points": [
            "『之』:的(助詞)、他/它(代詞)、往(動詞)、取消句子獨立性。",
            "『而』:並列、承接、轉折(卻)、修飾;『以』:用、因為、來、認為。",
            "『其』:他的/那、語氣(難道、大概);『於』:在、向、比、被。"
          ],
          "trap": "同一虛詞詞性多變，要『代入翻譯』判斷功能;『而』的轉折與承接最易誤判。"
        },
        {
          "h": "句讀與翻譯",
          "points": [
            "斷句先找主謂、虛詞(者、也、矣、乎)、對稱結構。",
            "翻譯要『信、達、雅』:字字落實(信)、文句通順(達)、適度修飾(雅)。",
            "注意古今異義:『妻子』=妻與子、『可以』=可以憑藉、『走』=跑。"
          ],
          "trap": "古今異義是翻譯陷阱;『走』是跑、『涕』是眼淚、『去』是離開，不可用今義硬套。",
          "svg": "<svg viewBox=\"0 0 400 210\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"400\" height=\"210\" rx=\"8\" fill=\"#f3e7df\"/><text x=\"200\" y=\"26\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\" text-anchor=\"middle\">句讀與翻譯:斷對才能譯對</text><rect x=\"24\" y=\"40\" width=\"352\" height=\"50\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#3a342e\"/><text x=\"200\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#3a342e\" text-anchor=\"middle\">醉翁之意不在酒 / 在乎山水之間也</text><text x=\"200\" y=\"80\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#5aa874\" text-anchor=\"middle\">找虛詞(也/乎)與主謂,語意完整再斷</text><line x1=\"205\" y1=\"44\" x2=\"205\" y2=\"68\" stroke=\"#c9755c\" stroke-width=\"2\"/><rect x=\"24\" y=\"100\" width=\"352\" height=\"94\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#f0a52e\"/><text x=\"200\" y=\"120\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">翻譯防古今異義</text><text x=\"120\" y=\"144\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">走=跑</text><text x=\"280\" y=\"144\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">涕=眼淚</text><text x=\"120\" y=\"166\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">妻子=妻與子</text><text x=\"280\" y=\"166\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">絕境=隔絕之地</text><text x=\"200\" y=\"186\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">信達雅:字字落實,勿以今義硬套</text></svg>",
          "caption": "先依虛詞與主謂正確斷句,再逐字翻譯並提防古今異義"
        }
      ],
      "quiz": [
        {
          "stem": "下列各句「之」字，作「代詞」用的是？",
          "options": [
            "水陸草木「之」花",
            "予獨愛蓮「之」出淤泥而不染",
            "閉「之」，則右刻「山高月小」",
            "馬「之」千里者"
          ],
          "answer": 2,
          "explanation": "C『閉之』的『之』指代『窗』，作代詞(它)。A『的』(助詞);B取消句子獨立性;D定語後置標誌。",
          "trap": "『之』多作助詞，作代詞時可代入『它/他』讀通;逐句翻譯才不誤判。"
        },
        {
          "stem": "「率妻子邑人來此絕境」中『妻子』『絕境』的正確解釋是？",
          "options": [
            "妻子／走投無路的困境",
            "妻子兒女／與世隔絕的地方",
            "太太／美麗的環境",
            "配偶／危險的地方"
          ],
          "answer": 1,
          "explanation": "B正確。古文『妻子』=妻子和兒女;『絕境』=與外界隔絕之地，非今義『走投無路』。",
          "trap": "古今異義最易掉陷阱;『妻子』『絕境』都不能用現代意思理解。"
        },
        {
          "stem": "下列文句斷句「正確」的是？",
          "options": [
            "醉翁之意／不在酒在乎／山水之間也",
            "醉翁之意不在酒／在乎山水之間也",
            "醉翁／之意不在／酒在乎山水之間也",
            "醉翁之意不在酒在乎／山水之間也"
          ],
          "answer": 1,
          "explanation": "B斷句正確:『醉翁之意不在酒／在乎山水之間也』，前句完整、後句以『在乎』領起。",
          "trap": "斷句要保持語意完整;勿把『在乎』(在於)拆開或把賓語切斷。"
        },
        {
          "stem": "「(甲)其一犬坐於前 (乙)一狼洞其中」兩句中『犬』與『洞』的詞性用法,判斷「正確」的是？",
          "options": [
            "『犬』為名詞作主語;『洞』為名詞作賓語",
            "『犬』為名詞作狀語(像狗一樣);『洞』為名詞用作動詞(打洞)",
            "兩者皆為名詞,無詞類活用",
            "『犬』為動詞;『洞』為形容詞"
          ],
          "answer": 1,
          "explanation": "B正確。(甲)『其一犬坐於前』的『犬』修飾動詞『坐』,意為『像狗那樣(坐)』,是名詞作狀語;(乙)『一狼洞其中』的『洞』本為名詞,此處用作動詞『打洞、挖洞』,是名詞活用為動詞。皆出自《狼》。",
          "trap": "⚠ 二次確認:『犬坐』不是『狗坐』而是『像狗一樣坐』(名詞作狀語);『洞其中』的『洞』是『挖洞』的動詞。文言名詞活用須代入翻譯判斷,別照字面當主語/賓語。"
        }
      ]
    },
    {
      "id": "literature",
      "name": "國學常識（經史子集／重要作家）",
      "week": "下學期 第3週",
      "notes": [
        {
          "h": "四部與經典",
          "svg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"200\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"22\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">四部分類與代表</text><rect x=\"20\" y=\"34\" width=\"135\" height=\"48\" rx=\"6\" fill=\"#c9755c\"/><text x=\"87\" y=\"54\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">經</text><text x=\"87\" y=\"73\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">四書五經</text><rect x=\"165\" y=\"34\" width=\"135\" height=\"48\" rx=\"6\" fill=\"#7fae9e\"/><text x=\"232\" y=\"54\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">史</text><text x=\"232\" y=\"73\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">史記 左傳</text><rect x=\"20\" y=\"90\" width=\"135\" height=\"48\" rx=\"6\" fill=\"#7fae9e\"/><text x=\"87\" y=\"110\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">子</text><text x=\"87\" y=\"129\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">諸子百家</text><rect x=\"165\" y=\"90\" width=\"135\" height=\"48\" rx=\"6\" fill=\"#c9755c\"/><text x=\"232\" y=\"110\" fill=\"#fff\" font-size=\"13\" text-anchor=\"middle\">集</text><text x=\"232\" y=\"129\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">詩文總集</text><rect x=\"20\" y=\"150\" width=\"280\" height=\"32\" rx=\"5\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><text x=\"160\" y=\"171\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">紀傳體(以人) vs 編年體(以時)</text></svg>",
          "caption": "經史子集四部分類圖",
          "points": [
            "四部:經(十三經)、史(史書)、子(諸子)、集(詩文集)。",
            "四書:《大學》《中庸》《論語》《孟子》;五經:詩、書、易、禮、春秋。",
            "《史記》:司馬遷著，首部紀傳體通史;《左傳》:編年體;《資治通鑑》:編年體(司馬光)。"
          ],
          "trap": "紀傳體(以人物)vs編年體(以時間)勿混;《史記》紀傳、《左傳》與《資治通鑑》編年。"
        },
        {
          "h": "重要作家流派",
          "points": [
            "唐宋古文八大家:韓愈、柳宗元、歐陽脩、蘇洵、蘇軾、蘇轍、王安石、曾鞏。",
            "韓愈倡『古文運動』;『初唐四傑』王勃、楊炯、盧照鄰、駱賓王。",
            "陶淵明(田園詩)、李白(詩仙)、杜甫(詩聖、詩史)、王維(詩佛)。"
          ],
          "trap": "『三蘇』是父子(蘇洵與二子);古文八大家中唐二宋六，勿把李白杜甫算入。",
          "svg": "<svg viewBox=\"0 0 400 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"400\" height=\"220\" rx=\"8\" fill=\"#f3e7df\"/><text x=\"200\" y=\"26\" font-family=\"sans-serif\" font-size=\"14\" fill=\"#3a342e\" text-anchor=\"middle\">重要作家流派一覽</text><rect x=\"24\" y=\"40\" width=\"352\" height=\"58\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#c9755c\" stroke-width=\"2\"/><text x=\"200\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#c9755c\" text-anchor=\"middle\">唐宋古文八大家(散文)</text><text x=\"200\" y=\"80\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">唐二:韓愈・柳宗元</text><text x=\"200\" y=\"94\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#3a342e\" text-anchor=\"middle\">宋六:歐陽脩・三蘇・王安石・曾鞏</text><rect x=\"24\" y=\"108\" width=\"170\" height=\"94\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#5aa874\"/><text x=\"109\" y=\"128\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#5aa874\" text-anchor=\"middle\">唐代詩人(非八大家)</text><text x=\"109\" y=\"150\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">李白 詩仙・杜甫 詩聖</text><text x=\"109\" y=\"170\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">王維 詩佛・白居易</text><text x=\"109\" y=\"190\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">陶淵明 田園詩</text><rect x=\"206\" y=\"108\" width=\"170\" height=\"94\" rx=\"6\" fill=\"#eef4f2\" stroke=\"#f0a52e\"/><text x=\"291\" y=\"128\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#f0a52e\" text-anchor=\"middle\">流派與運動</text><text x=\"291\" y=\"150\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">韓愈倡古文運動</text><text x=\"291\" y=\"170\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#3a342e\" text-anchor=\"middle\">(反駢文・倡散文)</text><text x=\"291\" y=\"190\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#3a342e\" text-anchor=\"middle\">初唐四傑:王楊盧駱</text></svg>",
          "caption": "八大家為散文名家(唐二宋六),李杜白居易屬詩人,勿混入"
        }
      ],
      "quiz": [
        {
          "stem": "下列關於史書體例的敘述，「正確」的是？",
          "options": [
            "《史記》是編年體通史",
            "《資治通鑑》是紀傳體斷代史",
            "《史記》是紀傳體通史，《資治通鑑》是編年體通史",
            "《左傳》是紀傳體"
          ],
          "answer": 2,
          "explanation": "C正確。《史記》為司馬遷紀傳體通史;《資治通鑑》為司馬光編年體通史。A、B體例顛倒;D《左傳》是編年體。",
          "trap": "兩司馬易混:史記紀傳、通鑑編年;通史(貫古今)vs斷代史(一朝)也要分清。"
        },
        {
          "stem": "下列人物「全部」屬於『唐宋古文八大家』的是？",
          "options": [
            "韓愈、柳宗元、李白",
            "歐陽脩、蘇軾、王安石",
            "杜甫、蘇洵、曾鞏",
            "白居易、蘇轍、柳宗元"
          ],
          "answer": 1,
          "explanation": "B歐陽脩、蘇軾、王安石皆為八大家。A李白、C杜甫、D白居易皆為詩人，不在八大家之列。",
          "trap": "八大家是『古文(散文)』名家;李白、杜甫、白居易是詩人，是最常見的混淆陷阱。"
        },
        {
          "stem": "下列關於作家與作品的配對,「完全正確」的是？",
          "options": [
            "《桃花源記》—陶淵明;《岳陽樓記》—范仲淹;《醉翁亭記》—歐陽脩",
            "《師說》—柳宗元;《岳陽樓記》—蘇軾;《愛蓮說》—周敦頤",
            "《出師表》—諸葛亮;《陋室銘》—韓愈;《赤壁賦》—蘇軾",
            "《左傳》—司馬遷;《史記》—左丘明;《資治通鑑》—司馬光"
          ],
          "answer": 0,
          "explanation": "A全部正確:《桃花源記》陶淵明、《岳陽樓記》范仲淹、《醉翁亭記》歐陽脩。B《師說》應為韓愈、《岳陽樓記》應為范仲淹;C《陋室銘》應為劉禹錫;D《左傳》傳為左丘明、《史記》司馬遷,選項對調。",
          "trap": "⚠ 二次確認:『記』類名篇作者最易混──《岳陽樓記》范仲淹、《醉翁亭記》歐陽脩、《桃花源記》陶淵明。《師說》是韓愈非柳宗元,《陋室銘》是劉禹錫,皆為常見陷阱。"
        },
        {
          "stem": "下列關於『唐宋古文運動』及相關流派的敘述,「正確」的是？",
          "options": [
            "古文運動由李白、杜甫倡導,主張恢復駢文",
            "『三蘇』指蘇軾、蘇轍、蘇洵,為父子三人,皆列名唐宋古文八大家",
            "『初唐四傑』指李白、杜甫、王維、孟浩然",
            "唐宋古文八大家中,唐代有六人、宋代有二人"
          ],
          "answer": 1,
          "explanation": "B正確:三蘇為蘇洵(父)及蘇軾、蘇轍(子),父子三人皆在八大家之列。A古文運動由韓愈、柳宗元倡導,反對駢文、提倡散文(非恢復駢文,且非李杜);C初唐四傑是王勃、楊炯、盧照鄰、駱賓王;D八大家為唐二(韓、柳)宋六。",
          "trap": "⚠ 二次確認:古文運動是『反駢文、倡散文』,領袖是韓愈、柳宗元;八大家是唐二宋六(非唐六宋二)。李白杜甫是詩人,不在古文八大家;初唐四傑也別與盛唐詩人混淆。"
        }
      ]
    },
    {
      "id": "couplet",
      "name": "對聯",
      "week": "下學期 第4週",
      "notes": [
        {
          "h": "對聯規則",
          "svg": "<svg viewBox=\"0 0 320 200\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"200\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"22\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">面對門:上聯在右、下聯在左</text><rect x=\"125\" y=\"30\" width=\"70\" height=\"26\" rx=\"5\" fill=\"#2b2b2b\"/><text x=\"160\" y=\"48\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">門楣 橫批</text><rect x=\"220\" y=\"64\" width=\"64\" height=\"110\" rx=\"6\" fill=\"#c9755c\"/><text x=\"252\" y=\"86\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">上</text><text x=\"252\" y=\"106\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">聯</text><text x=\"252\" y=\"146\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">仄收</text><text x=\"252\" y=\"164\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">(右)</text><rect x=\"130\" y=\"64\" width=\"60\" height=\"110\" rx=\"6\" fill=\"#fff\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><text x=\"160\" y=\"116\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">門</text><rect x=\"36\" y=\"64\" width=\"64\" height=\"110\" rx=\"6\" fill=\"#7fae9e\"/><text x=\"68\" y=\"86\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">下</text><text x=\"68\" y=\"106\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">聯</text><text x=\"68\" y=\"146\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">平收</text><text x=\"68\" y=\"164\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">(左)</text></svg>",
          "caption": "對聯張貼版面與上下聯平仄",
          "points": [
            "字數相等、詞性相對、平仄相諧;上聯末字多仄聲，下聯末字多平聲。",
            "張貼:面對門時，上聯在右、下聯在左(由右至左閱讀)。",
            "內容須對應場合(春聯、婚聯、輓聯、行業聯)。"
          ],
          "trap": "判斷上下聯靠『末字平仄』:仄收為上聯、平收為下聯;貼錯左右是常見錯誤。"
        }
      ],
      "quiz": [
        {
          "stem": "「春風送暖花千樹」最適合對的下聯是？",
          "options": [
            "明月當空照九州",
            "瑞雪迎新福萬家",
            "白雪紛飛冬已至",
            "夏日炎炎汗滿身"
          ],
          "answer": 1,
          "explanation": "B『瑞雪迎新福萬家』與上聯詞性相對(春風/瑞雪、送暖/迎新、花千樹/福萬家)、意境相承且末字『家』為平聲，最工整。其餘平仄、詞性或意境不協。",
          "trap": "對聯要『詞性相對、平仄相諧、意境相關』;只看字數相同不夠，須整體對仗工整。"
        },
        {
          "stem": "關於對聯張貼，敘述「正確」的是？",
          "options": [
            "上聯貼左、下聯貼右",
            "上聯末字通常為平聲",
            "面對門時，上聯在右、下聯在左",
            "上下聯字數可以不同"
          ],
          "answer": 2,
          "explanation": "C正確:面對門時上聯在右、下聯在左。A左右相反;B上聯末字多為仄聲;D對聯字數必須相等。",
          "trap": "傳統由右至左，故上聯在右;末字平仄判斷上下聯，勿記反。"
        },
        {
          "stem": "某商家開業徵聯,上聯為「生意興隆通四海」,下列最適合作為『下聯』的是？",
          "options": [
            "財源茂盛達三江",
            "開張大吉慶有餘",
            "上聯已足不必對句",
            "萬事如意樂逍遙"
          ],
          "answer": 0,
          "explanation": "A正確:『財源茂盛達三江』與上聯詞性相對(生意/財源、興隆/茂盛、通四海/達三江)、平仄相諧,且末字『江』為平聲合下聯,意境亦切開業,最工整。B、D對仗不工或末字平仄不合;C非選項應有的對句。",
          "trap": "⚠ 二次確認:對句要『字數相等、詞性相對、末字平聲』。『四海』對『三江』數字方位相對最工整;別只看吉祥語氣就選,須逐字檢查詞性與平仄。"
        },
        {
          "stem": "下列兩句「春滿乾坤福滿門」與「天增歲月人增壽」,關於上下聯與張貼,判斷「正確」的是？",
          "options": [
            "『天增歲月人增壽』末字『壽』為仄聲,應為上聯;貼於面對門的右側",
            "『春滿乾坤福滿門』為上聯,貼於左側",
            "兩句末字皆平聲,可任意排列",
            "『福滿門』的『門』為仄聲,故此句為上聯"
          ],
          "answer": 0,
          "explanation": "A正確:『壽』為仄聲(收上聯),『門』為平聲(收下聯),故『天增歲月人增壽』是上聯,面對門時貼於右側。B上聯應貼右非左;C『壽』仄『門』平並非皆平;D『門』為平聲,故『福滿門』是下聯。",
          "trap": "⚠ 二次確認:判別上下聯看末字平仄──仄收為上聯、平收為下聯;張貼面對門時上聯在右。『壽』仄、『門』平,故天增句為上聯貼右,別記反。"
        }
      ]
    },
    {
      "id": "reading",
      "name": "白話文閱讀理解",
      "week": "下學期 第5週",
      "notes": [
        {
          "h": "閱讀策略",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"22\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">白話文閱讀流程</text><rect x=\"20\" y=\"36\" width=\"80\" height=\"44\" rx=\"6\" fill=\"#c9755c\"/><text x=\"60\" y=\"56\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">抓主旨句</text><text x=\"60\" y=\"72\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">段首/段尾</text><polygon points=\"104,58 120,58 120,52 132,60 120,68 120,62 104,62\" fill=\"#2b2b2b\"/><rect x=\"135\" y=\"36\" width=\"80\" height=\"44\" rx=\"6\" fill=\"#7fae9e\"/><text x=\"175\" y=\"56\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">看細節</text><text x=\"175\" y=\"72\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">例證支持</text><polygon points=\"219,58 235,58 235,52 247,60 235,68 235,62 219,62\" fill=\"#2b2b2b\"/><rect x=\"250\" y=\"36\" width=\"60\" height=\"44\" rx=\"6\" fill=\"#c9755c\"/><text x=\"280\" y=\"56\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">推論</text><text x=\"280\" y=\"72\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">有所本</text><rect x=\"20\" y=\"96\" width=\"290\" height=\"34\" rx=\"5\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><text x=\"160\" y=\"117\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">轉折詞(然而/但是)後常是重點</text><text x=\"160\" y=\"152\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">答案須文中有據，勿過度延伸</text></svg>",
          "caption": "白話文閱讀策略流程圖",
          "points": [
            "先抓主旨句(常在段首或段尾)，再看支持的細節與例證。",
            "區分『事實』與『作者觀點』;留意轉折詞(然而、但是)後常是重點。",
            "推論要『有所本』:答案須能在文中找到依據，勿過度延伸。"
          ],
          "trap": "閱讀題答案要『文中有據』;最吸引人的選項常是『過度推論』或『以偏概全』。"
        }
      ],
      "quiz": [
        {
          "stem": "閱讀:「科技拉近了人與人的距離，卻也讓面對面的交談變得稀少。我們擁有上百位網友，卻可能找不到一位能傾訴的朋友。」本段主旨最接近？",
          "options": [
            "科技使人際關係更緊密",
            "網友數量代表友誼深度",
            "科技帶來連結，卻可能稀釋真實情感",
            "應全面拒絕使用科技產品"
          ],
          "answer": 2,
          "explanation": "C最切合。段落以『卻』轉折，強調科技雖帶來連結，卻使深度交流減少。A只看前半;B與文意相反;D過度延伸，文中未主張拒絕科技。",
          "trap": "轉折詞後是重點;A斷章取義、D過度推論，都是典型干擾項。"
        },
        {
          "stem": "承上題，作者對『擁有上百位網友』的態度最可能是？",
          "options": [
            "欣羨讚賞",
            "中性陳述，並帶反思",
            "強烈批判網友皆虛假",
            "鼓勵多交網友"
          ],
          "answer": 1,
          "explanation": "B最恰當。作者以對比語氣陳述現象並引發反思，語氣含惋惜但未『強烈批判』或全盤否定網友。",
          "trap": "態度題要拿捏『分寸』:C太極端、D與文意相反;作者是『反思』非『批判全部』。"
        },
        {
          "stem": "閱讀:「讀書如同登山。有人只想搭纜車直達山頂,飽覽風光便覺滿足;有人卻寧願徒步攀登,雖氣喘吁吁,卻在每一步的艱辛中,讀懂了山的脈絡。」本段作者最想表達的是？",
          "options": [
            "登山一定要徒步才安全",
            "讀書最重要的是抵達終點、獲得結論",
            "求知的『過程』本身自有其不可取代的價值",
            "搭纜車的人無法欣賞風景"
          ],
          "answer": 2,
          "explanation": "C最切合。作者以『徒步攀登』對比『搭纜車』,藉『在每一步艱辛中讀懂山的脈絡』,凸顯求知過程的價值。A是字面誤讀;B與作者強調『過程』之意相反;D過度引申,文中未否定搭纜車者的所見。",
          "trap": "⚠ 二次確認:本段是借登山『比喻』讀書,要找『言外之意』而非字面;轉折詞『卻』後是重點。B把重點放在『終點/結論』正與主旨相反,是典型干擾。"
        },
        {
          "stem": "承上段,作者對『搭纜車直達山頂』者的態度最可能是？",
          "options": [
            "全盤否定,認為毫無價值",
            "以對比帶出反思,語帶惋惜但未全然否定",
            "大力讚揚其聰明省力",
            "完全中立,沒有任何評價"
          ],
          "answer": 1,
          "explanation": "B最恰當。作者藉對比『徒步者』來凸顯過程的價值,對搭纜車者語帶惋惜(『便覺滿足』含淺嘗即止之意),但並未說其『毫無價值』。A太極端;C與文意相反;D『沒有任何評價』忽略了對比所含的傾向。",
          "trap": "⚠ 二次確認:態度題要拿捏分寸。作者有傾向(偏向徒步者)但不極端,A『全盤否定』、C『大力讚揚』都過頭,D『完全中立』則低估了對比的褒貶。"
        }
      ]
    },
    {
      "id": "inference",
      "name": "文意推論與主旨",
      "week": "下學期 第6週",
      "notes": [
        {
          "h": "主旨與寓意",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"22\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">由表層字面到言外之意</text><rect x=\"40\" y=\"36\" width=\"240\" height=\"40\" rx=\"6\" fill=\"#7fae9e\"/><text x=\"160\" y=\"54\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">表層:字面所述(借物/故事)</text><text x=\"160\" y=\"70\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">如「鍥而不舍，金石可鏤」</text><polygon points=\"150,80 170,80 170,90 178,90 160,104 142,90 150,90\" fill=\"#c9755c\"/><rect x=\"40\" y=\"108\" width=\"240\" height=\"40\" rx=\"6\" fill=\"#c9755c\"/><text x=\"160\" y=\"126\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">深層:核心主旨(言外之意)</text><text x=\"160\" y=\"142\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">持之以恆方能成功</text><text x=\"160\" y=\"168\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">綜合全文找弦外之音，勿抓單句</text></svg>",
          "caption": "主旨寓意由表層到深層推論",
          "points": [
            "主旨=作者要傳達的核心思想;寓言、詩詞重『言外之意』。",
            "歸納主旨:看反覆出現的概念、結尾的點題句。",
            "推論需綜合全文，避免只憑單句下結論。"
          ],
          "trap": "詩詞、寓言常『借物言志』，要找『弦外之音』而非字面;切忌只抓一句。"
        }
      ],
      "quiz": [
        {
          "stem": "「鍥而舍之，朽木不折;鍥而不舍，金石可鏤。」此句寓意最接近？",
          "options": [
            "天分決定成敗",
            "持之以恆方能成功",
            "選對工具最重要",
            "金石比朽木珍貴"
          ],
          "answer": 1,
          "explanation": "B正確。藉雕刻對比說明『堅持到底』的重要，與荀子勸學旨意相符。A、C、D皆未掌握『不舍(堅持)』的核心。",
          "trap": "寓意題要抓『對比所凸顯的道理』:重點在『舍/不舍』(放棄/堅持)，非工具或材質。"
        },
        {
          "stem": "「老馬識途」這個故事最主要說明的道理是？",
          "options": [
            "馬比人聰明",
            "經驗(閱歷)有其可貴價值",
            "迷路時要靠運氣",
            "動物都有方向感"
          ],
          "answer": 1,
          "explanation": "B正確。管仲放老馬帶路，借此說明『老馬的經驗』可解困境，引申為重視經驗閱歷。其餘為字面或過度延伸。",
          "trap": "成語典故重『引申義』;不要停在『馬會認路』的字面，要看人事啟示。"
        },
        {
          "stem": "「螢火蟲不羨慕太陽的光芒,牠只在屬於自己的夜裡,認真地亮著。」此句寄寓的道理最接近？",
          "options": [
            "人應追求遠大如太陽的目標",
            "在自己的位置上盡力發光,自有其價值",
            "夜晚比白天更重要",
            "弱者不該與強者比較以免自卑"
          ],
          "answer": 1,
          "explanation": "B最切合。藉螢火蟲『不羨太陽、只在自己的夜裡認真亮著』,寄寓『安於本分、在自身位置上盡力發光』的價值。A與『不羨慕太陽』相反;C是字面誤讀;D『以免自卑』曲解了原句積極的肯定意涵。",
          "trap": "⚠ 二次確認:借物言志要找『弦外之音』。重點在『認真地亮著』(肯定自我價值),非比較強弱;D雖看似相關,卻把積極的『自我肯定』讀成消極的『避免自卑』。"
        },
        {
          "stem": "「竹,未出土時便有節;及凌雲處尚虛心。」這副題詠最主要藉竹來頌揚何種品格？",
          "options": [
            "生長快速、適應力強",
            "自幼有氣節,顯達後仍謙虛",
            "外表中空、不切實際",
            "隨風搖擺、能屈能伸"
          ],
          "answer": 1,
          "explanation": "B正確。『未出土時便有節』雙關竹『節』與人之『氣節』,喻自幼有節操;『凌雲處尚虛心』雙關竹『中空』與人之『虛心』,喻顯達(凌雲)後仍謙虛。故頌揚『有節操且謙虛』的品格。",
          "trap": "⚠ 二次確認:此聯妙在『節』『虛心』的雙關。『虛心』非貶義的『中空不實』,而是『謙虛』;『有節』非『竹節』而是『氣節』。抓雙關的褒義才能正確推論寓意。"
        }
      ]
    },
    {
      "id": "noncontinuous",
      "name": "圖表／非連續文本判讀",
      "week": "下學期 第7週",
      "notes": [
        {
          "h": "非連續文本",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"20\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">圖表判讀三步驟</text><line x1=\"40\" y1=\"120\" x2=\"180\" y2=\"120\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"120\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><rect x=\"52\" y=\"80\" width=\"22\" height=\"40\" fill=\"#7fae9e\"/><rect x=\"86\" y=\"58\" width=\"22\" height=\"62\" fill=\"#c9755c\"/><rect x=\"120\" y=\"92\" width=\"22\" height=\"28\" fill=\"#7fae9e\"/><rect x=\"154\" y=\"48\" width=\"22\" height=\"72\" fill=\"#c9755c\"/><text x=\"36\" y=\"44\" fill=\"#333\" font-size=\"11\" text-anchor=\"end\">單位</text><text x=\"110\" y=\"134\" fill=\"#333\" font-size=\"11\" text-anchor=\"middle\">時間範圍</text><rect x=\"196\" y=\"40\" width=\"110\" height=\"26\" rx=\"5\" fill=\"#c9755c\"/><text x=\"251\" y=\"57\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">1 看標題單位圖例</text><rect x=\"196\" y=\"72\" width=\"110\" height=\"26\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"251\" y=\"89\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">2 比刻度與比例</text><rect x=\"196\" y=\"104\" width=\"110\" height=\"26\" rx=\"5\" fill=\"#c9755c\"/><text x=\"251\" y=\"121\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">3 逐項核對選項</text><text x=\"160\" y=\"160\" fill=\"#c9755c\" font-size=\"12\" text-anchor=\"middle\">注意單位、刻度、時間範圍陷阱</text></svg>",
          "caption": "非連續文本圖表判讀三步驟",
          "points": [
            "包含圖表、表格、海報、說明書、地圖等;先看『標題、單位、圖例』。",
            "比較數據要看『座標軸刻度、總量與比例』，留意百分比與絕對值差異。",
            "整合多則資訊時，逐項核對選項是否與圖表『完全相符』。"
          ],
          "trap": "圖表題陷阱在『單位、刻度、時間範圍』;選項常把『增加』寫成『減少』或誇大幅度，須逐字核對。"
        }
      ],
      "quiz": [
        {
          "stem": "某圖書館公告:『開放時間 週二至週日 09:00–17:00，週一及國定假日休館;借書每次上限10冊，借期30天，可續借一次。』下列敘述「正確」的是？",
          "options": [
            "每天都開放",
            "一本書最長可借60天",
            "週一照常開放",
            "一次最多可借30冊"
          ],
          "answer": 1,
          "explanation": "B正確:借期30天+續借一次30天=最長60天。A週一及國定假日休館;C週一休館;D每次上限10冊。",
          "trap": "判讀題要逐項對照原文;『續借一次』表示可再延30天，須做簡單計算，勿憑直覺。"
        },
        {
          "stem": "承上公告，週三上午10點到館，下列何者「不可行」？",
          "options": [
            "借閱5本書",
            "借書並要求借期45天",
            "辦理一本書的續借",
            "在館內閱讀"
          ],
          "answer": 1,
          "explanation": "B不可行:借期固定30天，不能自行要求45天(需以續借方式延長)。A、C、D皆符合規定。",
          "trap": "看清題目問『不可行』;規定是『借期30天+可續借』，不是任意指定天數。"
        },
        {
          "stem": "某高鐵票價表:『台北—台中 標準車廂700元;adult(全票)700,兒童票5折,敬老/愛心票5折。早鳥可享65折(限標準車廂全票,不與其他優惠並用)。』王老先生(持敬老票)與8歲孫子(兒童票)同行台北到台中,兩人合計最少需付？",
          "options": [
            "700元",
            "630元",
            "700×0.65×2=910元",
            "350+350=700元"
          ],
          "answer": 3,
          "explanation": "D正確:敬老票5折=700×0.5=350;兒童票5折=700×0.5=350;合計350+350=700元。早鳥65折『限全票』,敬老與兒童票不適用,且不能並用,故維持5折最划算。兩人共700元。",
          "trap": "⚠ 二次確認:早鳥65折『限標準車廂全票』,敬老票與兒童票皆非全票,不能再打65折,也不可並用。要逐條核對適用範圍,別把65折硬套到敬老/兒童票上。"
        },
        {
          "stem": "承上票價規則,下列敘述「正確」的是？",
          "options": [
            "持敬老票者再加買早鳥可享0.5×0.65更便宜",
            "兒童票與早鳥票可並用",
            "一般成人購買早鳥票為700×0.65=455元",
            "所有票種都能享有65折"
          ],
          "answer": 2,
          "explanation": "C正確:早鳥65折限全票,成人全票700×0.65=455元。A早鳥限全票且不與其他優惠並用,敬老票不能再加早鳥;B同理兒童票不可與早鳥並用;D早鳥『限標準車廂全票』,非所有票種皆可。",
          "trap": "⚠ 二次確認:『不與其他優惠並用』『限全票』是兩道限制。只有成人全票能用65折(455元);敬老、愛心、兒童票皆排除在外,別誤以為折扣可疊加。"
        }
      ]
    },
    {
      "id": "context",
      "name": "語境詞語辨析",
      "week": "下學期 第8週",
      "notes": [
        {
          "h": "依語境選詞",
          "svg": "<svg viewBox=\"0 0 320 180\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"180\" fill=\"#f5f1ea\"/><text x=\"160\" y=\"20\" fill=\"#333\" font-size=\"13\" text-anchor=\"middle\">近義詞依語境辨微差</text><rect x=\"14\" y=\"32\" width=\"92\" height=\"50\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"60\" y=\"52\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">陸續</text><text x=\"60\" y=\"70\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">先後分批</text><rect x=\"114\" y=\"32\" width=\"92\" height=\"50\" rx=\"5\" fill=\"#c9755c\"/><text x=\"160\" y=\"52\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">連續</text><text x=\"160\" y=\"70\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">不間斷</text><rect x=\"214\" y=\"32\" width=\"92\" height=\"50\" rx=\"5\" fill=\"#7fae9e\"/><text x=\"260\" y=\"52\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\">繼續</text><text x=\"260\" y=\"70\" fill=\"#fff\" font-size=\"11\" text-anchor=\"middle\">接續未完</text><rect x=\"40\" y=\"96\" width=\"110\" height=\"46\" rx=\"5\" fill=\"none\" stroke=\"#c9755c\" stroke-width=\"1.5\"/><text x=\"95\" y=\"115\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">果然</text><text x=\"95\" y=\"133\" fill=\"#c9755c\" font-size=\"11\" text-anchor=\"middle\">如預期</text><rect x=\"170\" y=\"96\" width=\"110\" height=\"46\" rx=\"5\" fill=\"none\" stroke=\"#2b2b2b\" stroke-width=\"1.5\"/><text x=\"225\" y=\"115\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">居然</text><text x=\"225\" y=\"133\" fill=\"#333\" font-size=\"11\" text-anchor=\"middle\">出乎意料</text><text x=\"160\" y=\"164\" fill=\"#333\" font-size=\"12\" text-anchor=\"middle\">看搭配對象、輕重、褒貶選詞</text></svg>",
          "caption": "近義詞語境辨析對照圖",
          "points": [
            "近義詞辨析看『語意輕重、搭配對象、褒貶色彩』。",
            "『陸續/連續/繼續』:陸續(先後)、連續(不間斷)、繼續(接續未完)。",
            "『一向/一直/向來』語感略異;『竟然/居然』表意外，須配合語境。"
          ],
          "trap": "填空題要看『前後搭配與邏輯』;近義詞細微差異是鑑別重點，勿憑語感隨意填。"
        }
      ],
      "quiz": [
        {
          "stem": "下列句子填入的詞語「最恰當」的是?「他平時不用功，這次________考了滿分，連老師都很驚訝。」",
          "options": [
            "果然",
            "居然",
            "依然",
            "必然"
          ],
          "answer": 1,
          "explanation": "B『居然』表示出乎意料，與『連老師都很驚訝』呼應。A『果然』表與預期相符，B語境是意外;C『依然』表照舊;D『必然』表一定如此，皆不合。",
          "trap": "『果然/居然』方向相反:果然=如預期、居然=出乎意料;由後文『驚訝』判斷應填意外義。"
        },
        {
          "stem": "「會場觀眾________入座，演出即將開始。」最恰當的詞語是?",
          "options": [
            "連續",
            "陸續",
            "繼續",
            "持續"
          ],
          "answer": 1,
          "explanation": "B『陸續』指先後一個接一個，符合觀眾分批入座的情境。A連續、C繼續、D持續皆強調『不間斷』，與分批入座不合。",
          "trap": "『陸續』(先後)與『連續/持續』(不間斷)語意不同;依『一個個入座』的情境選陸續。"
        },
        {
          "stem": "依語境,下列句子填入「最恰當」的選項是?「儘管證據確鑿,他________矢口否認,毫無悔意。」",
          "options": [
            "果然",
            "竟然",
            "依然",
            "固然"
          ],
          "answer": 2,
          "explanation": "C『依然』表『照舊、仍舊』,與前文『儘管證據確鑿』形成『仍堅持否認』的合理銜接。A『果然』表如預期;B『竟然』表意外,但句意重在『仍舊』堅持非『出乎意料』;D『固然』表讓步,語法位置不合。",
          "trap": "⚠ 二次確認:『儘管……依然……』是常見讓步搭配,強調『仍舊』。『竟然』雖也通,但句子重點在『一貫地否認(依然)』而非『意外',且『依然』與『毫無悔意』語氣最連貫。"
        },
        {
          "stem": "下列各句『近義詞』使用「最恰當」的是?",
          "options": [
            "他的解說十分精簡,聽眾卻聽得一頭霧水(應為精闢)",
            "這件事影響深遠,我們必須謹慎『處置』每個環節",
            "師長的『教誨』,他始終銘記在心",
            "颱風『陸續』登陸,風雨一刻不停"
          ],
          "answer": 2,
          "explanation": "C正確:『教誨』指教導訓誨,搭配師長與『銘記在心』恰當。A『精簡』指簡明扼要與『聽得一頭霧水』矛盾(此處語意需『精闢/詳盡』);B『處置』多用於處理問題或懲處,環節宜用『處理』;D『陸續』指先後分批,與『一刻不停(不間斷)』矛盾,應用『持續/連續』。",
          "trap": "⚠ 二次確認:近義詞看『搭配對象與輕重』。『陸續』(先後)≠『持續』(不間斷);『處置』含懲處意,與中性『處理』有別;先檢查前後文邏輯是否自洽再選。"
        }
      ]
    }
  ]
};
