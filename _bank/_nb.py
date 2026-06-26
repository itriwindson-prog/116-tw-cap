# -*- coding: utf-8 -*-
import json

svg1 = '''<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="190" fill="#f3e7df"/>
<line x1="180" y1="14" x2="180" y2="176" stroke="#3a342e" stroke-width="1"/>
<line x1="14" y1="95" x2="346" y2="95" stroke="#3a342e" stroke-width="1"/>
<rect x="22" y="24" width="140" height="58" rx="6" fill="#eef4f2"/>
<text x="92" y="44" font-family="sans-serif" font-size="13" fill="#3a342e" text-anchor="middle">自家在世</text>
<text x="92" y="68" font-family="sans-serif" font-size="13" fill="#c9755c" text-anchor="middle">家(家父家兄)</text>
<rect x="198" y="24" width="140" height="58" rx="6" fill="#eef4f2"/>
<text x="268" y="44" font-family="sans-serif" font-size="13" fill="#3a342e" text-anchor="middle">稱他人親屬</text>
<text x="268" y="68" font-family="sans-serif" font-size="13" fill="#5aa874" text-anchor="middle">令(令尊令堂)</text>
<rect x="22" y="108" width="140" height="58" rx="6" fill="#eef4f2"/>
<text x="92" y="128" font-family="sans-serif" font-size="13" fill="#3a342e" text-anchor="middle">自家卑幼</text>
<text x="92" y="152" font-family="sans-serif" font-size="13" fill="#c9755c" text-anchor="middle">舍(舍弟舍妹)</text>
<rect x="198" y="108" width="140" height="58" rx="6" fill="#eef4f2"/>
<text x="268" y="128" font-family="sans-serif" font-size="13" fill="#3a342e" text-anchor="middle">自家已故</text>
<text x="268" y="152" font-family="sans-serif" font-size="13" fill="#d98072" text-anchor="middle">先(先父先慈)</text>
</svg>'''

svg2 = '''<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="360" height="190" fill="#eef4f2"/>
<text x="92" y="26" font-family="sans-serif" font-size="13" fill="#3a342e" text-anchor="middle">敬辭 抬高他人</text>
<text x="268" y="26" font-family="sans-serif" font-size="13" fill="#3a342e" text-anchor="middle">謙辭 貶抑自己</text>
<line x1="180" y1="34" x2="180" y2="178" stroke="#3a342e" stroke-width="1"/>
<path d="M92 150 L92 46" stroke="#5aa874" stroke-width="2" fill="none"/>
<path d="M84 58 L92 44 L100 58 Z" fill="#5aa874"/>
<rect x="30" y="92" width="124" height="22" rx="4" fill="#f3e7df"/>
<text x="92" y="108" font-family="sans-serif" font-size="13" fill="#5aa874" text-anchor="middle">賜教 拜讀 府上</text>
<rect x="30" y="120" width="124" height="22" rx="4" fill="#f3e7df"/>
<text x="92" y="136" font-family="sans-serif" font-size="13" fill="#5aa874" text-anchor="middle">高見 玉照 光臨</text>
<path d="M268 46 L268 150" stroke="#c9755c" stroke-width="2" fill="none"/>
<path d="M260 138 L268 152 L276 138 Z" fill="#c9755c"/>
<rect x="206" y="56" width="124" height="22" rx="4" fill="#f3e7df"/>
<text x="268" y="72" font-family="sans-serif" font-size="13" fill="#c9755c" text-anchor="middle">拙作 敝姓 愚見</text>
<rect x="206" y="84" width="124" height="22" rx="4" fill="#f3e7df"/>
<text x="268" y="100" font-family="sans-serif" font-size="13" fill="#c9755c" text-anchor="middle">寒舍 犬子 獻醜</text>
</svg>'''

notes = [
  {
    "h": "親屬與社交稱謂",
    "points": [
      "對外人提及自家在世的尊長或平輩,前綴用『家』,如家父、家母、家兄、家姊;這是謙稱,表示在外人面前不誇耀自己的長輩。",
      "自家卑幼用『舍』,如舍弟、舍妹、舍姪;稱呼對方的親屬則一律抬高,用『令』,如令尊、令堂、令郎、令媛、令兄。",
      "提及自家已過世的尊長改用『先』,如先父(先嚴)、先母(先慈)、先祖;『先』含追思之意,不可用於在世者。",
      "社交稱謂另有對應:夫妻謙稱外子(夫)、內人(妻);師生間稱業師、受業;同學互稱同窗、硯友。"
    ],
    "svg": svg1,
    "caption": "家、舍、先稱自家,令稱他人,依在世與卑幼分流。",
    "trap": "⚠『令』只能用來稱對方的親屬,把自己父親說成『令尊』、或在世長輩誤用『先』都是常見錯誤。"
  },
  {
    "h": "敬辭與謙辭",
    "points": [
      "敬辭用來抬高對方:惠顧、賜教、拜讀(讀您的作品)、府上(您家)、高見、玉照、光臨、台端,都是把對方的人、事、物加以尊崇。",
      "謙辭用來貶抑自己:拙作(我的作品)、敝姓、愚見、寒舍(我家)、犬子(我兒)、忝列、獻醜、芻蕘之見,都是自我謙退。",
      "敬謙必須對位,不可錯置:自己的作品稱『拙作』、別人的稱『大作』;自己的家稱『寒舍』、別人的稱『府上』。",
      "動作方向也要分清:請對方來用『光臨/蒞臨』,自己去拜訪對方用『拜訪/趨謁』,不可說『歡迎我光臨貴府』。"
    ],
    "svg": svg2,
    "caption": "敬辭向上抬高他人,謙辭向下貶抑自己,兩者須對位。",
    "trap": "⚠最常見的是敬謙錯位:用『拙荊』稱對方妻子、用『府上』稱自己家、請人來卻說『拜訪』,方向一錯即失禮。"
  }
]

print(len(json.dumps(notes)))
