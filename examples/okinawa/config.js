// Demo config — everything here is invented. Dates, flight numbers, hotel names,
// island names, shop names: all fictional homages, not real places. Do not use
// this as a real travel guide. See docs/DEPLOYMENT.md's scrub checklist.
// Showcases: Coastal design set + weatherModes + candidates.

const LUNCH_SHIOMI = {
  time: "11:15",
  title: "軽食候補（汐見村・龍崖岬エリア）",
  type: "food",
  desc: "龍崖岬観光後、北上前に立ち寄れる候補。汐見村〜龍崖岬エリアに点在（実在しません）。",
  tip: "浜千鳥そばは行列必至の架空の名店。潮乃屋本舗の「潮だんご」は龍崖岬店で11時〜販売開始……という設定。",
  candidates: [
    { name: "潮乃屋本舗 絶景龍崖岬店", genre: "🍩 潮だんご", note: "岬の展望テラスで揚げたて（を名乗る架空の菓子）。営業10:00〜19:00", map: "汐見村 龍崖岬" },
    { name: "浜千鳥そば（汐見村）", genre: "🍜 島そば（架空）", note: "謎の海藻練り込み麺が名物という設定。行列必至なので時間に余裕を。11:00〜20:00", map: "汐見村" },
    { name: "モアナキッチン 汐見村店", genre: "🌮 島風タコライス", note: "龍崖岬から車4分（設定上）。名物オムタコ。11:30〜20:00", map: "汐見村" },
  ],
};

const LUNCH_KUGANI_D1 = {
  time: "12:30",
  title: "ランチ候補（南風原・波照エリア）",
  type: "food",
  desc: "南風原〜波照エリアの定番ランチ候補（すべて架空）。動線上に複数あるので気分で選んでOK。",
  tip: "百年食堂くがにはジューシー100食限定で12時前入店がベスト、という体で。潮乃屋本舗は道の駅でサクッと立ち寄れる設定。",
  candidates: [
    { name: "百年食堂 くがに 波照店", genre: "🍜 島そば（架空）", note: "創業百年を名乗る架空の名店。ジューシー100食限定。11:00〜売切次第終了", map: "波照エリア" },
    { name: "潮乃屋本舗 道の駅 汐彩店", genre: "🍩 潮だんご", note: "架空自動車道・汐彩IC直結の道の駅内。食べ歩きグルメも充実（という設定）", map: "道の駅 汐彩" },
    { name: "潮と麦と（南風原）", genre: "🍜 島そば・カフェ", note: "水族館近く。11:30営業開始", map: "南風原エリア" },
    { name: "seaside-cafe アズールウェイブ（波照）", genre: "🌊 海カフェ", note: "湾一望。島野菜プレート1,200円〜。12:00〜21:00 火曜定休", map: "波照エリア" },
  ],
};

const LUNCH_KUGANI_D2 = {
  time: "11:00",
  title: "ランチ候補（南風原・波照エリア）",
  type: "food",
  desc: "汐見大水族館〜南風原エリアのランチ候補（架空）。動線上に複数あるので気分で選んでOK。",
  tip: "百年食堂くがにはジューシー100食限定なので早め入店がベスト、という設定。",
  candidates: [
    { name: "百年食堂 くがに 波照店", genre: "🍜 島そば（架空）", note: "水族館から車10分。ジューシー100食限定。11:00〜売切次第終了", map: "波照エリア" },
    { name: "潮と麦と（南風原）", genre: "🍜 島そば・カフェ", note: "水族館近く。11:30営業開始", map: "南風原エリア" },
    { name: "水族館内レストラン", genre: "🐟 館内レストラン", note: "移動ゼロで便利。海を見ながら食事可", map: "汐見大水族館" },
    { name: "seaside-cafe アズールウェイブ（波照）", genre: "🌊 海カフェ", note: "湾一望。島野菜プレート1,200円〜。12:00〜21:00 火曜定休", map: "波照エリア" },
  ],
};

const EV = {
  flight_out: {
    time: "06:05", title: "SR051 中之島国際発 → 汐見 08:15着", type: "transport",
    desc: "中之島国際空港（NKJ）06:05発、架空の「ソラリス航空」SR051便。汐見空港着08:15。早着なのでそのまま北上行動に移れる。",
    tip: "レンタカー受取は08:45目安。土曜はカウンター混雑あり——オンライン事前予約でスキップ。ETCカード・ナビの確認も忘れずに（あと寝坊しないこと）。",
    map: "汐見空港",
  },
  highway_stop_north: {
    time: "09:10", title: "立ち寄りスポット（架空自動車道 SA/PA）", type: "shop", drive: "汐見空港 → 碧浪自動車道 北上中",
    desc: "汐見空港からレンタカーで北上する途中、架空の「碧浪自動車道」のSA/PAに立ち寄り。潮見SAは沿線で唯一のSAで、限定「潮だんご」が名物（という設定）。午前中の早い時間帯に売り切れることがあるので北上時に押さえたい。",
    tip: "波止場PAは汐見空港から約20分、潮見SAは約40分。まず波止場PAでトイレ休憩、続いて潮見SAで潮だんご購入というルートが効率的。",
    candidates: [
      { name: "波止場PA（下り＝北行き）", genre: "🚗 パーキングエリア", note: "空港から約20分。北上最初の休憩ポイント。トイレ・売店あり", map: "碧浪自動車道 波止場PA" },
      { name: "潮見SA（下り＝北行き）", genre: "🍩 限定潮だんご！", note: "碧浪自動車道唯一のSA。揚げたて限定潮だんごが名物で午前中に売り切れることも", map: "碧浪自動車道 潮見SA" },
    ],
  },
  highway_stop_south: {
    time: "14:30", title: "立ち寄りスポット（架空自動車道 SA/PA）", type: "shop", drive: "太陽の実パーク → 汐見市街 碧浪自動車道 南下中",
    desc: "太陽の実パークから守璃城跡へ向けて南下中、碧浪自動車道のSA/PAに立ち寄り。潮見SAの限定潮だんごを北上時に買い逃した場合の再チャレンジポイント。",
    tip: "潮見SAは上り線（南行き）にも売店あり。潮だんごが目的なら北上（Day1）時に買うのがベター。",
    candidates: [
      { name: "潮見SA（上り＝南行き）", genre: "🍩 限定潮だんご！", note: "碧浪自動車道唯一のSA。午後は売り切れの可能性あり", map: "碧浪自動車道 潮見SA" },
      { name: "波止場PA（上り＝南行き）", genre: "🚗 パーキングエリア", note: "市街手前。守璃城跡が近づいたタイミングでの小休憩に", map: "碧浪自動車道 波止場PA" },
    ],
  },
  mirai_do: {
    time: "10:30", title: "ミライドウ巨石回廊（架空の聖地）", type: "hike", drive: "汐見空港から車約90分",
    desc: "碧浪諸島最北端エリアにある、伝説の「ミライドウ」巨石回廊。音声ガイドで“2億年前からある”という設定の熱帯カルスト地形を歩く体験型スポット。奇岩・巨石・巨大ガジュマル（に似た架空の樹）など見どころ多数。汐見空港から車約90分。",
    tip: "入場料2,500円（大人・すべて架空の設定価格）。営業9:30〜17:30（最終受付16:00）。所要2時間以上。晴れた日の午前中が最良。",
    map: "ミライドウ巨石回廊",
    badges: [{ text: "Sunny recommended", tone: "sunny" }],
  },
  mirai_do_rainy: {
    time: "10:30", title: "ミライドウ巨石回廊（雨天決行）", type: "hike", drive: "汐見空港から車約90分",
    desc: "碧浪諸島最北端エリアの聖地。雨のジャングルは霧がかかって幻想的な雰囲気になり、晴れとは異なる魅力がある（という設定）。奇岩・巨大ガジュマル風の樹は雨天でも十分楽しめる。汐見空港から車約90分、北上の動線上に位置。",
    tip: "入場料2,500円（架空）。所要2時間以上。雨天時は石灰岩が滑りやすいためトレッキングシューズ必須・レインウェア持参を。荒天・強風時は一部コースが閉鎖になる場合あり。",
    map: "ミライドウ巨石回廊",
    badges: [{ text: "Rain OK", tone: "rainy" }],
  },
  mirai_do_d2: {
    time: "09:30", title: "ミライドウ巨石回廊（天気回復狙い）", type: "hike", drive: "ホテル出発08:30・車約60分",
    desc: "前日雨だった場合、Day2朝の天気を見て判断。このエリアは天気が変わりやすく、朝に回復することも（設定）。行かない場合は余裕のある1日になる。",
    tip: "入場料2,500円（架空）。営業9:30〜。当日朝に天気確認してから出発判断を。",
    map: "ミライドウ巨石回廊",
    badges: [{ text: "Weather-dependent", tone: "rainy" }],
  },
  aquarium_d1: {
    time: "10:30", title: "汐見大水族館（先回り）", type: "sight", drive: "汐見空港から車約75分",
    desc: "雨天Day1の切り札。巨大な「ヒカリザメ」が泳ぐ「群青の海」大水槽は圧巻——もちろん架空の生き物。北上してそのまま入館できる。翌日（Day2）は空いた時間を別の観光に充てられる。",
    tip: "開館8:30〜。Web事前チケットで割引あり（2,180円前後・設定価格）。雨の日は屋内なので快適。駐車場無料。",
    map: "汐見大水族館",
    badges: [{ text: "Rain OK", tone: "rainy" }, { text: "Indoor", tone: "recommended" }],
  },
  aquarium_d2: {
    time: "09:00", title: "汐見大水族館", type: "sight", drive: "ホテルから車約15分",
    desc: "「ヒカリザメ」のいる「群青の海」大水槽は必見（架空種）。世界最大級を自称する水族館で梅雨の雨天も関係なし。ホテルから車15分。開館直後に入館して日曜の混雑を回避。",
    tip: "開館8:30〜（季節により変動という設定）。日曜の混雑ピークは10時以降。Web事前チケットが割引あり。",
    map: "汐見大水族館",
    badges: [{ text: "Rain OK", tone: "rainy" }, { text: "Recommended", tone: "recommended" }],
  },
  shiomi_undersea: {
    time: "09:00", title: "汐見海中公園", type: "sight", drive: "ホテル出発08:30・車約30分",
    desc: "架空の岬の先端に建つ海中展望塔とグラスボートが楽しめる、という設定の施設。展望塔は海中に潜り、水中窓から魚・サンゴを観察できる完全屋内体験。雨でも関係なく楽しめる。ホテルから車30分。",
    tip: "入場料1,500円（架空）。展望塔とグラスボートのセット券がお得。荒天時はグラスボートが欠航することも——展望塔は問題なし。",
    map: "汐見海中公園",
    badges: [{ text: "Rain OK", tone: "rainy" }, { text: "Indoor", tone: "recommended" }],
  },
  aoito: {
    time: "14:00", title: "碧絲島ドライブ", type: "beach", drive: "水族館から車約15分 / ミライドウから車約50分",
    desc: "橋で渡れる小さな離島（架空）。碧絲ビーチは透明度が高く、エメラルドの海が広がる……という設定。ホテルのすぐ隣。チェックインまでの時間調整にもちょうどいい。",
    tip: "島全体は車で一周15分ほど。梅雨の晴れ間があれば最高、雨でも海の色は楽しめる（設定）。",
    map: "碧絲島",
  },
  hotel_night1: {
    time: "15:30", title: "サンライズ碧絲リゾート チェックイン", type: "hotel",
    desc: "碧絲島の全室オーシャンビューという触れ込みのリゾート（架空のホテル）。翌朝の汐見大水族館まで車15分という絶好のポジション。チェックインは通常15時からなので、到着後はプールまたはビーチでゆっくり。",
    tip: "駐車場が有料の施設もあるので予約時に確認を（架空の設定なので実際には確認不要）。早着の場合は荷物を預けて島内ドライブへ。",
    map: "碧絲島",
    badges: [{ text: "1st night", tone: "reserved" }],
  },
  d1_dinner: {
    time: "18:30", title: "夕食候補（南風原・波照エリア）", type: "food",
    desc: "架空の「島豚」しゃぶしゃぶが名物の店が候補。人気店は要予約という設定。",
    tip: "人気店は当日飛び込みが難しい場合あり。早めに予約を（架空です）。",
    candidates: [
      { name: "うふどぅい（南風原）", genre: "🐷 島豚しゃぶしゃぶ", note: "120年の古民家という設定でしゃぶしゃぶ・島魚料理。雰囲気最高。要予約推奨", map: "南風原エリア" },
      { name: "コーラルガーデンBBQ（波照）", genre: "🍖 島豚BBQ", note: "架空の島豚5部位以上が食べられるアウトドアBBQレストラン。要予約", map: "波照エリア" },
      { name: "ホテル内レストラン", genre: "🏨 ホテルダイニング", note: "チェックイン後そのまま。移動ゼロで最もラク", map: "碧絲島" },
    ],
  },
  taiyo_no_mi: {
    time: "13:30", title: "太陽の実パーク", type: "nature", drive: "南風原エリアから車約10〜20分",
    desc: "架空のフルーツテーマパーク。自動走行カート「サンフルーツ号」で2,000種超の“太陽の実”を周遊……という設定。出口のショップでは果実酒の試飲もあり。",
    tip: "入場料1,200円（架空）。最終受付17:30に注意。ソフトクリームは外せない。",
    map: "太陽の実パーク",
  },
  shuri_ruins: {
    time: "15:30", title: "守璃城跡公園", type: "world", drive: "太陽の実パークから車約65分",
    desc: "市街へ入る前に立ち寄り。架空の伝説上の王城跡で、正殿は再建中という設定だが、門・城郭・庭園は通常通り見学可能。30〜40分。",
    tip: "無料エリアだけでも十分見応えあり（という体で）。",
    map: "守璃城跡公園",
    badges: [{ text: "World Heritage (fictional)", tone: "world" }],
  },
  hotel_night2: {
    time: "17:30", title: "コーラルサンズホテル糸浦 チェックイン", type: "hotel", drive: "守璃城跡から車約20分",
    desc: "糸浦市・ビーチ徒歩1分という設定の南部リゾート（架空のホテル）。ガーデンプール完備。翌朝の御嶽の岬まで車15分、汐見空港まで車20分。",
    tip: "夕食はホテルのレストランで島料理ブッフェが楽しめる、という設定。",
    map: "糸浦エリア",
    badges: [{ text: "2nd night", tone: "reserved" }],
  },
  d2_dinner: {
    time: "18:30", title: "夕食候補（糸浦エリア）", type: "food",
    desc: "ホテル周辺。ホテルブッフェか糸浦漁港周辺の食堂で選ぶ、という設定。どちらも車5分圏内。",
    tip: "糸浦漁港周辺の食堂は夜営業しているか事前確認を（架空の食堂です）。",
    candidates: [
      { name: "ホテルレストラン", genre: "🍽 島料理ブッフェ", note: "移動ゼロ、予約不要で最もラク", map: "糸浦エリア" },
      { name: "糸浦漁港周辺 食堂", genre: "🐟 海鮮・魚介", note: "地元民御用達という設定の魚介食堂が点在", map: "糸浦漁港" },
    ],
  },
};

export default {
  design: "coastal",

  features: { weatherModes: true, checklist: false, candidates: true },

  meta: {
    title: "碧浪諸島 2026（デモ・架空の旅程）",
    period: "Nov 07(Sat) — Nov 09(Mon)　2泊3日",
    lang: "ja",
  },

  hotels: [
    { night: "Nov 07", name: "サンライズ碧絲リゾート", mapQuery: "碧絲島" },
    { night: "Nov 08", name: "コーラルサンズホテル糸浦", mapQuery: "糸浦エリア" },
  ],

  flights: [
    { label: "Nov 07 往路", route: "NKJ 06:05 → SHM 08:15", detail: "SR051 ソラリス航空（架空）" },
    { label: "Nov 09 復路", route: "SHM 14:25 → NKJ 16:30", detail: "SR054 ソラリス航空（架空）" },
  ],

  notes: [
    { icon: "umbrella", text: "架空の梅雨シーズンを想定し、屋内スポット優先の設計です。" },
    { icon: "hotel", text: "レンタカーは早着日なので事前予約を（すべてデモデータです）。" },
    { icon: "plane", text: "フライト時刻・空港コードはすべて架空のデモ用データです。" },
    { icon: "landmark", text: "地名・施設名・店名はすべてオマージュの架空名で、実在しません。" },
  ],

  tabs: [
    { id: "day1", date: "Nov 07", dayOfWeek: "Sat" },
    { id: "day2", date: "Nov 08", dayOfWeek: "Sun" },
    { id: "day3", date: "Nov 09", dayOfWeek: "Mon" },
  ],

  weatherModes: [
    { mode: "sunny", icon: "sun", label: "両日晴", active: true },
    { mode: "rainy1", icon: "umbrella", label: "Day1雨→Day2晴" },
    { mode: "rainy2", icon: "umbrella", label: "両日雨" },
    { mode: "rainy_mirai", icon: "mountain", label: "雨でもミライドウ" },
  ],

  mapUrls: {},

  days: {
    day1: {
      sunny: {
        title: "空港着・最北端へ — ミライドウ巨石回廊",
        events: [EV.flight_out, EV.highway_stop_north, EV.mirai_do, LUNCH_SHIOMI, LUNCH_KUGANI_D1, EV.aoito, EV.hotel_night1, EV.d1_dinner],
      },
      rainy1: {
        title: "空港着・水族館を先回り — 雨天フル活用プラン",
        events: [EV.flight_out, EV.highway_stop_north, EV.aquarium_d1, LUNCH_SHIOMI, LUNCH_KUGANI_D1, EV.aoito, EV.hotel_night1, EV.d1_dinner],
      },
      rainy2: {
        title: "空港着・水族館を先回り — 雨天フル活用プラン",
        events: [EV.flight_out, EV.highway_stop_north, EV.aquarium_d1, LUNCH_SHIOMI, LUNCH_KUGANI_D1, EV.aoito, EV.hotel_night1, EV.d1_dinner],
      },
      rainy_mirai: {
        title: "空港着・最北端へ — 雨でもミライドウ決行",
        events: [EV.flight_out, EV.highway_stop_north, EV.mirai_do_rainy, LUNCH_SHIOMI, LUNCH_KUGANI_D1, EV.aoito, EV.hotel_night1, EV.d1_dinner],
      },
    },
    day2: {
      sunny: {
        title: "北部 → 南下 — 水族館・太陽の実パーク・守璃城跡",
        events: [EV.aquarium_d2, LUNCH_KUGANI_D2, EV.taiyo_no_mi, EV.highway_stop_south, EV.shuri_ruins, EV.hotel_night2, EV.d2_dinner],
      },
      rainy1: {
        title: "北部 → 南下 — ミライドウ挑戦・太陽の実パーク・守璃城跡",
        events: [EV.mirai_do_d2, LUNCH_KUGANI_D2, EV.taiyo_no_mi, EV.highway_stop_south, EV.shuri_ruins, EV.hotel_night2, EV.d2_dinner],
      },
      rainy2: {
        title: "北部 → 南下 — 両日雨プラン・海中公園・太陽の実パーク・守璃城跡",
        events: [EV.shiomi_undersea, LUNCH_KUGANI_D2, EV.taiyo_no_mi, EV.highway_stop_south, EV.shuri_ruins, EV.hotel_night2, EV.d2_dinner],
      },
      rainy_mirai: {
        title: "北部 → 南下 — 水族館・太陽の実パーク・守璃城跡",
        events: [EV.aquarium_d2, LUNCH_KUGANI_D2, EV.taiyo_no_mi, EV.highway_stop_south, EV.shuri_ruins, EV.hotel_night2, EV.d2_dinner],
      },
    },
    day3: {
      title: "南部聖地巡礼 — 架空の史跡を辿り帰路へ",
      events: [
        {
          time: "09:00", title: "御嶽の岬（架空の聖地）", type: "world", drive: "ホテルから車約15分",
          desc: "王国最高の聖地……という設定の史跡。ホテルから車15分、チェックアウト後すぐ行ける。巨大な石灰岩の岩壁の隙間を歩く神聖な空間で、奥からは沖合の小島が望める（すべて架空）。朝イチ9時台が最も空いていて静か。",
          tip: "チケットは敷地外の物産館で購入（300円・架空価格）。券売機は9:00〜。露出の多い服装は避けること。所要約1時間。",
          map: "御嶽の岬",
          badges: [{ text: "World Heritage (fictional)", tone: "world" }, { text: "Rain OK", tone: "rainy" }],
        },
        {
          time: "10:30", title: "ランチ候補（市街・友愛通りエリア）", type: "food", drive: "御嶽の岬から車約30分",
          desc: "御嶽の岬から車30分。月曜は週末より空いてる。レンタカー返却まで約2時間、ランチ＋お土産をゆっくり楽しめる（すべて架空の店）。",
          tip: "人気店は駐車場が分かりにくい場合があるので事前に電話確認推奨、という設定。",
          candidates: [
            { name: "たまむすび食堂（友愛通り）", genre: "🍜 島そば（架空）", note: "友愛通り沿いビル2F。三種盛りが人気という設定", map: "友愛通り" },
            { name: "潮月そば 市街店", genre: "🍜 島そば（架空）", note: "老舗移転リニューアルという設定。市場近く", map: "市街エリア" },
            { name: "いなか食堂 南市場店", genre: "🍜 島そば（架空）", note: "市場南側。600円〜。昔ながらの食堂という設定", map: "南市場" },
          ],
        },
        {
          time: "11:15", title: "友愛通り お土産まとめ買い", type: "shop",
          desc: "架空の泡盛風酒・お菓子など定番みやげを（すべて架空の商品）。空港でも揃うので欲しいものだけ優先に。",
          tip: "市場2階の食堂（買った食材を調理してもらえる、という設定）も面白い体験。",
          map: "友愛通り",
        },
        {
          time: "12:30", title: "レンタカー返却 → 汐見空港", type: "transport", drive: "友愛通りから車約15分",
          desc: "友愛通りから空港まで車15分。返却後チェックイン。空港内にもお土産店・食事処が充実（架空）。",
          tip: "返却はフライトの2時間前が目安。ガソリン満タンで返却を。",
          map: "汐見空港",
        },
        {
          time: "14:25", title: "SR054 汐見発 → 中之島国際 16:30着", type: "transport",
          desc: "架空の「ソラリス航空」SR054便、汐見14:25発、中之島国際空港着16:30。",
          tip: "到着後の乗り継ぎ時間には余裕を持って。",
          map: "汐見空港",
        },
      ],
    },
  },
};
