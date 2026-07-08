// Demo config — entirely fictional. Town, ryokan, shop names: all invented
// homages to no particular real onsen town. See docs/DEPLOYMENT.md's scrub checklist.
// Showcases: Washi design set + checklist (localStorage) + candidates, together.

export default {
  design: "washi",

  features: { weatherModes: false, checklist: true, candidates: true },

  storage: { kind: "localStorage", key: "tripChecklist" },

  meta: {
    title: "湯守宿場町 一泊二日（デモ・架空の温泉町）",
    period: "Jan 24(Sat) — Jan 25(Sun)　1泊2日",
    lang: "ja",
  },

  hotels: [
    { night: "Jan 24", name: "旅籠 山霧（やまぎり）", mapQuery: "湯守宿場町" },
  ],

  flights: [
    { label: "Jan 24 往路", route: "架空中央駅 09:12 → 湯守温泉駅 11:40", detail: "特急「山彦」3号（架空）" },
    { label: "Jan 25 復路", route: "湯守温泉駅 16:05 → 架空中央駅 18:33", detail: "特急「山彦」8号（架空）" },
  ],

  notes: [
    { icon: "info", text: "町名・宿名・列車名はすべて架空のデモ用データです。実在の温泉地ではありません。" },
    { icon: "clipboard-check", text: "貸切風呂の予約はチェックリストで管理（localStorage保存）。" },
  ],

  tabs: [
    { id: "day1", date: "Jan 24", dayOfWeek: "Sat" },
    { id: "day2", date: "Jan 25", dayOfWeek: "Sun" },
  ],

  days: [
    {
      id: "day1",
      title: "宿場町さんぽ — 雪見と温泉まんじゅう",
      events: [
        {
          time: "11:40", title: "湯守温泉駅 到着", type: "transport",
          desc: "架空の山あいの終着駅。ホームに出た瞬間から硫黄の香りが漂う……という設定。改札を出るとすぐ「足湯待合所」があり、荷物を抱えたまま早くも入ってしまう人が続出（架空のあるある）。",
          tip: "駅の観光案内所で「湯めぐり手形」を購入すると町内の外湯が割引に、という架空の制度あり。",
          map: "湯守温泉駅",
        },
        {
          time: "12:15", title: "ランチ候補（宿場町 表通り）", type: "food",
          desc: "表通りに並ぶそば処の食べ比べ候補。どこも似たような佇まいで、結局直感で決めることになりがち。",
          tip: "土日は行列必至という設定。並びたくない場合は少し脇道に入った「柚子庵」が狙い目。",
          candidates: [
            { name: "手打ちそば 山霧庵", genre: "🍜 十割そば（架空）", note: "宿と同じ屋号だが無関係という設定のご当地ジョーク。行列必至", map: "湯守宿場町 表通り" },
            { name: "柚子庵", genre: "🍜 柚子切りそば", note: "香りが良いと評判の架空そば。表通りから一本入った静かな店", map: "湯守宿場町 裏路地" },
            { name: "温泉まんじゅう本舗 雫", genre: "🥟 温泉まんじゅう", note: "軽くつまむならここ。蒸したてが14時に出るという設定", map: "湯守宿場町 表通り" },
          ],
        },
        {
          time: "14:00", title: "雪見の吊り橋", type: "nature",
          desc: "谷にかかる架空の吊り橋。冬は雪化粧した渓谷が一望できる、という触れ込み。強風の日は結構揺れて肝が冷える（設定）。",
          tip: "手袋必須。橋の中央での記念撮影待ちで渋滞することがあるらしい。",
          map: "湯守宿場町 雪見橋",
        },
        {
          time: "15:30", title: "旅籠 山霧 チェックイン", type: "hotel",
          desc: "創業を名乗る架空の老舗旅籠。囲炉裏のあるロビーでウェルカム甘酒がふるまわれる、という設定。部屋は川沿いの角部屋を確保済み。",
          tip: "貸切風呂は事前予約制（下のチェックリスト参照）。夕食の時間は到着時にフロントで再確認を。",
          map: "旅籠 山霧",
          badges: [{ text: "Reserved", tone: "reserved" }],
        },
        {
          time: "18:30", title: "夕食（部屋食・懐石風）", type: "food",
          desc: "架空の郷土食材を使った懐石風会席。品数が多すぎて後半は写真を撮る余裕もなくなる、というよくある展開つき。",
          tip: "苦手な食材は事前連絡で変更可、という設定の宿ルール。",
          map: "旅籠 山霧",
          badges: [{ text: "Reserved", tone: "reserved" }],
        },
        {
          time: "20:30", title: "夜の宿場町そぞろ歩き", type: "night",
          desc: "浴衣に丹前を羽織って外湯めぐり。提灯の灯りが石畳に反射する、という絵に描いたような夜景（架空）。",
          tip: "外湯は21時までのところが多いという設定。閉まる直前に慌てて走る羽目になりがち。",
          map: "湯守宿場町 外湯通り",
        },
      ],
    },
    {
      id: "day2",
      title: "朝湯とお土産、名残惜しい帰路",
      events: [
        {
          time: "07:00", title: "朝風呂（大浴場）", type: "hotel",
          desc: "朝もやの中の露天風呂。昨夜の飲みすぎを反省しながら湯に浸かる、という定番の朝（架空）。",
          map: "旅籠 山霧",
        },
        {
          time: "08:00", title: "朝食（宿の食堂）", type: "food",
          desc: "架空の川魚の一夜干しが名物という朝食。ご飯のおかわりで結局出発が押す、というお約束つき。",
          map: "旅籠 山霧",
        },
        {
          time: "09:30", title: "チェックアウト・荷物預け", type: "hotel",
          desc: "電車まで時間があるので荷物だけ宿に預けて身軽に町歩きへ。",
          map: "旅籠 山霧",
        },
        {
          time: "10:00", title: "お土産候補（表通り・裏路地）", type: "shop",
          desc: "定番の温泉まんじゅうから木工細工まで、候補を回りながら決める型。結局最初の店に戻って買うパターンが多いという設定。",
          tip: "重い荷物は駅の宅配便カウンターから発送できる（架空の設定）。",
          candidates: [
            { name: "温泉まんじゅう本舗 雫", genre: "🥟 温泉まんじゅう", note: "朝どれ、というキャッチコピーの架空商品", map: "湯守宿場町 表通り" },
            { name: "木工房 木霊（こだま）", genre: "🪵 木工雑貨", note: "一点物のカップや箸置きが人気という設定", map: "湯守宿場町 裏路地" },
            { name: "地酒屋 山泉", genre: "🍶 地酒（架空銘柄）", note: "試飲もできるという触れ込みの酒屋", map: "湯守宿場町 表通り" },
          ],
        },
        {
          time: "13:00", title: "ランチ（駅前）", type: "food",
          desc: "電車の時間まで駅前でさっと済ませる軽食。名残惜しくてつい長居してしまい、結局小走りでホームへ向かう羽目に（架空のオチ）。",
          map: "湯守温泉駅 駅前",
        },
        {
          time: "16:05", title: "湯守温泉駅 発", type: "transport",
          desc: "架空の特急「山彦」8号で帰路へ。車窓に温泉町が遠ざかっていくのを眺めながら、次はいつ来られるかを話す定番の帰り道。",
          map: "湯守温泉駅",
        },
      ],
    },
  ],

  checklist: [
    { id: "ryokan", title: "旅籠 山霧（川沿い角部屋）", desc: "確保済み", isDone: true, type: "done" },
    { id: "kaiseki", title: "夕食：懐石風会席（部屋食）", desc: "確保済み・アレルギー連絡済み", isDone: true, type: "done" },
    { id: "private_bath", title: "貸切風呂（1泊1回）", desc: "要事前予約・時間枠は宿に要確認", isDone: false, type: "required" },
    { id: "train", title: "特急「山彦」往復指定席", desc: "確保済み", isDone: true, type: "done" },
    { id: "yukatabelt", title: "浴衣サイズの事前申告", desc: "宿によっては要事前連絡（推奨）", isDone: false, type: "recommended" },
    { id: "takkyubin", title: "手荷物の宅配便手配", desc: "駅の宅配カウンターで当日でも可（任意）", isDone: false, type: "optional" },
  ],
};
