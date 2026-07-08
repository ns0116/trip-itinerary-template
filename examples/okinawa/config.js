// Demo config — fictional dates/flights/hotel names (see docs/DEPLOYMENT.md's scrub checklist).
// Real place names (attractions, restaurants) are public tourism info and kept as-is.
// Showcases: Coastal design set + weatherModes + candidates.

const LUNCH_ONNASON = {
  time: "11:15",
  title: "軽食候補（恩納村・万座毛エリア）",
  type: "food",
  desc: "万座毛観光後、北上前に立ち寄れる候補。恩納村〜万座毛エリアに点在。",
  tip: "なかむらそばは行列必至の名店。三矢ボールは万座毛店で11時〜販売開始。",
  candidates: [
    { name: "三矢本舗 絶景万座毛店", genre: "🍩 サーターアンダギー", note: "万座毛施設内テラスで揚げたて。三矢ボール11時〜。営業10:00〜19:00", map: "三矢本舗 万座毛 恩納村" },
    { name: "なかむらそば（恩納村）", genre: "🍜 沖縄そば", note: "アーサー練り込み麺が名物。行列必至なので時間に余裕を。11:00〜20:00 年中無休", map: "なかむらそば 恩納村 沖縄" },
    { name: "タコライスcafe きじむなぁ 恩納村店", genre: "🌮 タコライス", note: "万座毛から車4分。名物オムタコ。11:30〜20:00 定休なし", map: "タコライスcafe きじむなぁ 恩納村" },
  ],
};

const LUNCH_NAGO_D1 = {
  time: "12:30",
  title: "ランチ候補（名護・本部エリア）",
  type: "food",
  desc: "名護〜本部エリアの定番ランチ候補。動線上に複数あるので気分で選んでOK。",
  tip: "きしもと食堂はジューシー100食限定で12時前入店がベスト。三矢本舗許田店は道の駅でサクッと立ち寄れる。",
  candidates: [
    { name: "きしもと食堂 八重岳店", genre: "🍜 沖縄そば", note: "明治38年創業の名店。木灰製法自家製麺。ジューシー100食限定。11:00〜売切次第終了", map: "きしもと食堂 八重岳店 本部町" },
    { name: "三矢本舗 許田店（道の駅許田）", genre: "🍩 サーターアンダギー", note: "沖縄自動車道・許田IC直結の道の駅内。立ち寄り買い食いに最適。食べ歩きグルメも充実", map: "道の駅 許田 やんばる物産センター 名護" },
    { name: "海と麦と（本部）", genre: "🍜 沖縄そば・カフェ", note: "水族館近く。11:30営業開始", map: "海と麦と 本部町 沖縄" },
    { name: "seaside-cafe BlueTrip（名護）", genre: "🌊 海カフェ", note: "名護湾一望。島野菜ランチプレート1,200円〜。12:00〜21:00 火曜定休", map: "seaside cafe BlueTrip 名護" },
  ],
};

const LUNCH_NAGO_D2 = {
  time: "11:00",
  title: "ランチ候補（名護・本部エリア）",
  type: "food",
  desc: "美ら海〜名護エリアのランチ候補。動線上に複数あるので気分で選んでOK。",
  tip: "きしもと食堂はジューシー100食限定なので早め入店がベスト。",
  candidates: [
    { name: "きしもと食堂 八重岳店", genre: "🍜 沖縄そば", note: "美ら海から車10分。木灰製法自家製麺。ジューシー100食限定。11:00〜売切次第終了", map: "きしもと食堂 八重岳店 本部町" },
    { name: "海と麦と（本部）", genre: "🍜 沖縄そば・カフェ", note: "水族館近く。11:30営業開始", map: "海と麦と 本部町 沖縄" },
    { name: "水族館内レストラン", genre: "🐟 館内レストラン", note: "移動ゼロで便利。海を見ながら食事可。11時台の早め入店がコツ", map: "沖縄美ら海水族館" },
    { name: "seaside-cafe BlueTrip（名護）", genre: "🌊 海カフェ", note: "名護湾一望。島野菜ランチプレート1,200円〜。12:00〜21:00 火曜定休", map: "seaside cafe BlueTrip 名護" },
  ],
};

const EV = {
  flight_out: {
    time: "06:05", title: "XJ051 中部国際発 → 那覇 08:15着", type: "transport",
    desc: "中部国際空港（NGO）06:05発、サンプル航空XJ051便。那覇空港着08:15。早着なのでそのまま北上行動に移れる。",
    tip: "レンタカー受取は08:45目安。土曜はカウンター混雑あり——オンライン事前予約でスキップ。ETCカード・ナビの確認も忘れずに。",
    map: "那覇空港",
  },
  highway_stop_north: {
    time: "09:10", title: "立ち寄りスポット（高速SA/PA）", type: "shop", drive: "OKA → 沖縄自動車道 北上中",
    desc: "那覇空港からレンタカーで北上する途中、沖縄自動車道のSA/PAに立ち寄り。伊芸SAは沖縄自動車道で唯一のSAで、限定サータアンダギーが名物。午前中の早い時間帯に売り切れることがあるので北上時に押さえたい。",
    tip: "中城PAは那覇ICから約20分、伊芸SAは約40分。まず中城PAでトイレ休憩、続いて伊芸SAでサータアンダギー購入というルートが効率的。",
    candidates: [
      { name: "中城PA（下り＝北行き）", genre: "🚗 パーキングエリア", note: "那覇ICから約20分。北上最初の休憩ポイント。トイレ・売店あり", map: "中城パーキングエリア 沖縄自動車道" },
      { name: "伊芸SA（下り＝北行き）", genre: "🍩 限定サータアンダギー！", note: "沖縄自動車道唯一のSA。揚げたて限定サータアンダギーが名物で午前中に売り切れることも", map: "伊芸サービスエリア 沖縄" },
    ],
  },
  highway_stop_south: {
    time: "14:30", title: "立ち寄りスポット（高速SA/PA）", type: "shop", drive: "名護 → 那覇 沖縄自動車道 南下中",
    desc: "パイナップルパークから首里城へ向けて南下中、沖縄自動車道のSA/PAに立ち寄り。伊芸SAの限定サータアンダギーを北上時に買い逃した場合の再チャレンジポイント。",
    tip: "伊芸SAは上り線（南行き）にも売店あり。サータアンダギーが目的なら北上（Day1）時に買うのがベター。",
    candidates: [
      { name: "伊芸SA（上り＝南行き）", genre: "🍩 限定サータアンダギー！", note: "沖縄自動車道唯一のSA。午後は売り切れの可能性あり", map: "伊芸サービスエリア 沖縄" },
      { name: "中城PA（上り＝南行き）", genre: "🚗 パーキングエリア", note: "那覇IC手前。首里城が近づいたタイミングでの小休憩に", map: "中城パーキングエリア 沖縄自動車道" },
    ],
  },
  asmui: {
    time: "10:30", title: "アスムイハイクス（旧・大石林山）", type: "hike", drive: "OKAから車約90分",
    desc: "沖縄本島最北端エリア・国頭村にある琉球神話の聖地。音声ガイドで2億年の熱帯カルスト地形を歩く体験型自然スポット。奇岩・巨石・巨大ガジュマル・ソテツ群生地など見どころ多数。OKAから車約90分。",
    tip: "入場料2,500円（大人）。営業9:30〜17:30（最終受付16:00）。所要2時間以上。晴れた日の午前中が最良。",
    map: "アスムイハイクス",
    badges: [{ text: "Sunny recommended", tone: "sunny" }],
  },
  asmui_rainy: {
    time: "10:30", title: "アスムイハイクス（雨天決行）", type: "hike", drive: "OKAから車約90分",
    desc: "沖縄本島最北端エリア・国頭村にある琉球神話の聖地。雨のジャングルは霧がかかって幻想的な雰囲気になり、晴れとは異なる魅力がある。奇岩・巨大ガジュマル・ソテツ群生地は雨天でも十分楽しめる。OKAから車約90分、北上の動線上に位置。",
    tip: "入場料2,500円（大人）。所要2時間以上。雨天時は石灰岩が滑りやすいためトレッキングシューズ必須・レインウェア持参を。荒天・強風時は一部コースが閉鎖になる場合あり。",
    map: "アスムイハイクス",
    badges: [{ text: "Rain OK", tone: "rainy" }],
  },
  asmui_d2: {
    time: "09:30", title: "アスムイハイクス（天気回復狙い）", type: "hike", drive: "ホテル出発08:30・車約60分",
    desc: "前日雨だった場合、Day2朝の天気を見て判断。国頭村は天気が変わりやすく、朝に回復することも。行かない場合は余裕のある1日になる。",
    tip: "入場料2,500円（大人）。営業9:30〜。当日朝に天気確認してから出発判断を。",
    map: "アスムイハイクス",
    badges: [{ text: "Weather-dependent", tone: "rainy" }],
  },
  aquarium_d1: {
    time: "10:30", title: "沖縄美ら海水族館（先回り）", type: "sight", drive: "OKAから車約75分",
    desc: "雨天Day1の切り札。ジンベエザメの「黒潮の海」大水槽は圧巻。OKAから北上してそのまま入館できる。翌日（Day2）は空いた時間を別の観光に充てられる。",
    tip: "開館8:30〜。Web事前チケットで割引あり（2,180円前後）。雨の日は屋内なので快適。駐車場無料。",
    map: "沖縄美ら海水族館",
    badges: [{ text: "Rain OK", tone: "rainy" }, { text: "Indoor", tone: "recommended" }],
  },
  aquarium_d2: {
    time: "09:00", title: "沖縄美ら海水族館", type: "sight", drive: "ホテルから車約15分",
    desc: "ジンベエザメのいる「黒潮の海」大水槽は必見。世界最大級の水族館で梅雨の雨天も関係なし。ホテルから車15分。開館直後に入館して日曜の混雑を回避。",
    tip: "開館8:30〜（季節により変動）。日曜の混雑ピークは10時以降。Web事前チケットが割引あり。",
    map: "沖縄美ら海水族館",
    badges: [{ text: "Rain OK", tone: "rainy" }, { text: "Recommended", tone: "recommended" }],
  },
  busena: {
    time: "09:00", title: "ブセナ海中公園（名護）", type: "sight", drive: "ホテル出発08:30・車約30分",
    desc: "名護市・部瀬名岬の先端に建つ海中展望塔とグラスボートが楽しめる。展望塔は海中に潜り、水中窓から魚・サンゴを観察できる完全屋内体験。雨でも関係なく楽しめる。ホテルから車30分。",
    tip: "入場料1,500円（大人）。展望塔とグラスボートのセット券がお得。荒天時はグラスボートが欠航することも——展望塔は問題なし。",
    map: "ブセナ海中公園 名護 沖縄",
    badges: [{ text: "Rain OK", tone: "rainy" }, { text: "Indoor", tone: "recommended" }],
  },
  sesoko: {
    time: "14:00", title: "瀬底島ドライブ", type: "beach", drive: "美ら海から車約15分 / アスムイから車約50分",
    desc: "橋で渡れる小さな離島。瀬底ビーチは透明度が高く、沖縄らしいエメラルドの海が広がる。ホテルのすぐ隣。チェックインまでの時間調整にもちょうどいい。",
    tip: "島全体は車で一周15分ほど。梅雨の晴れ間があれば最高、雨でも海の色は楽しめる。",
    map: "瀬底ビーチ 本部町 沖縄",
  },
  hotel_night1: {
    time: "15:30", title: "サンライズ瀬底リゾート チェックイン", type: "hotel",
    desc: "瀬底島の全室オーシャンビューリゾート（デモ用の仮名）。翌朝の美ら海水族館まで車15分という絶好のポジション。チェックインは通常15時からなので、到着後はプールまたはビーチでゆっくり。",
    tip: "駐車場が有料の施設もあるので予約時に確認を。早着の場合は荷物を預けて島内ドライブへ。",
    map: "瀬底島 沖縄",
    badges: [{ text: "1st night", tone: "reserved" }],
  },
  d1_dinner: {
    time: "18:30", title: "夕食候補（名護・本部エリア）", type: "food",
    desc: "アグー豚しゃぶしゃぶが名物の店が候補。人気店は要予約。",
    tip: "人気店は当日飛び込みが難しい場合あり。早めに予約を。",
    candidates: [
      { name: "うふやー（名護）", genre: "🐷 アグー豚しゃぶしゃぶ", note: "120年の琉球古民家でアグー豚しゃぶしゃぶ・島魚料理。雰囲気最高。要予約推奨", map: "うふやー 名護 沖縄" },
      { name: "コーラルビーチプラス（本部）", genre: "🍖 アグー豚BBQ", note: "アグー豚5部位以上が食べられるアウトドアBBQレストラン。要予約", map: "コーラルビーチプラス 本部町 沖縄" },
      { name: "ホテル内レストラン", genre: "🏨 ホテルダイニング", note: "チェックイン後そのまま。移動ゼロで最もラク", map: "瀬底島 沖縄" },
    ],
  },
  pineapple: {
    time: "13:30", title: "ナゴパイナップルパーク", type: "nature", drive: "名護エリアから車約10〜20分",
    desc: "名護市のパイナップルテーマパーク。自動走行カート「パイナップル号」で2,000種超のパイナップルを周遊。出口のショップではパイナップルワインの試飲もあり。",
    tip: "入場料1,200円（大人）。最終受付17:30に注意。パイナップルソフトクリームは外せない。",
    map: "ナゴパイナップルパーク 名護市",
  },
  shuri: {
    time: "15:30", title: "首里城公園", type: "world", drive: "パイナップルパークから車約65分",
    desc: "那覇に入る前に立ち寄り。2019年の火災で正殿は再建中だが、守礼門・奉神門・城郭・庭園は通常通り見学可能。世界遺産。30〜40分。",
    tip: "無料エリアだけでも十分見応えあり。",
    map: "首里城公園 那覇",
    badges: [{ text: "World Heritage", tone: "world" }],
  },
  hotel_night2: {
    time: "17:30", title: "コーラルサンズホテル糸満 チェックイン", type: "hotel", drive: "首里城から車約20分",
    desc: "糸満市・ビーチ徒歩1分の南部リゾート（デモ用の仮名）。ガーデンプール完備。翌朝の斎場御嶽まで車15分、那覇空港まで車20分。",
    tip: "夕食はホテルのレストランで沖縄料理ブッフェが楽しめる。",
    map: "糸満市 沖縄",
    badges: [{ text: "2nd night", tone: "reserved" }],
  },
  d2_dinner: {
    time: "18:30", title: "夕食候補（糸満エリア）", type: "food",
    desc: "ホテル周辺。ホテルブッフェか糸満漁港周辺の食堂で選ぶ。どちらも車5分圏内。",
    tip: "糸満漁港周辺の食堂は夜営業しているか事前確認を。",
    candidates: [
      { name: "ホテルレストラン", genre: "🍽 沖縄料理ブッフェ", note: "移動ゼロ、予約不要で最もラク", map: "糸満市 沖縄" },
      { name: "糸満漁港周辺 食堂", genre: "🐟 海鮮・魚介", note: "地元民御用達の魚介食堂が点在", map: "糸満漁港 沖縄" },
    ],
  },
};

export default {
  design: "coastal",

  features: { weatherModes: true, checklist: false, candidates: true },

  meta: {
    title: "沖縄 2026（デモ）",
    period: "Nov 07(Sat) — Nov 09(Mon)　2泊3日",
    lang: "ja",
  },

  hotels: [
    { night: "Nov 07", name: "サンライズ瀬底リゾート", mapQuery: "瀬底島 沖縄" },
    { night: "Nov 08", name: "コーラルサンズホテル糸満", mapQuery: "糸満市 沖縄" },
  ],

  flights: [
    { label: "Nov 07 往路", route: "NGO 06:05 → OKA 08:15", detail: "XJ051 サンプル航空" },
    { label: "Nov 09 復路", route: "OKA 14:25 → NGO 16:30", detail: "XJ054 サンプル航空" },
  ],

  notes: [
    { icon: "umbrella", text: "梅雨シーズンを想定し、屋内スポット優先の設計です。" },
    { icon: "hotel", text: "レンタカーは早着日なので事前予約を。" },
    { icon: "plane", text: "フライト時刻はデモ用の仮の時刻表です。" },
    { icon: "landmark", text: "世界遺産2カ所＋琉球聖地アスムイハイクスのルート。" },
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
    { mode: "rainy_asmui", icon: "mountain", label: "雨でもアスムイ" },
  ],

  mapUrls: {},

  days: {
    day1: {
      sunny: {
        title: "那覇着・最北端へ — アスムイハイクス",
        events: [EV.flight_out, EV.highway_stop_north, EV.asmui, LUNCH_ONNASON, LUNCH_NAGO_D1, EV.sesoko, EV.hotel_night1, EV.d1_dinner],
      },
      rainy1: {
        title: "那覇着・美ら海を先回り — 雨天フル活用プラン",
        events: [EV.flight_out, EV.highway_stop_north, EV.aquarium_d1, LUNCH_ONNASON, LUNCH_NAGO_D1, EV.sesoko, EV.hotel_night1, EV.d1_dinner],
      },
      rainy2: {
        title: "那覇着・美ら海を先回り — 雨天フル活用プラン",
        events: [EV.flight_out, EV.highway_stop_north, EV.aquarium_d1, LUNCH_ONNASON, LUNCH_NAGO_D1, EV.sesoko, EV.hotel_night1, EV.d1_dinner],
      },
      rainy_asmui: {
        title: "那覇着・最北端へ — 雨でもアスムイハイクス決行",
        events: [EV.flight_out, EV.highway_stop_north, EV.asmui_rainy, LUNCH_ONNASON, LUNCH_NAGO_D1, EV.sesoko, EV.hotel_night1, EV.d1_dinner],
      },
    },
    day2: {
      sunny: {
        title: "北部 → 南下 — 水族館・パイナップル・首里城",
        events: [EV.aquarium_d2, LUNCH_NAGO_D2, EV.pineapple, EV.highway_stop_south, EV.shuri, EV.hotel_night2, EV.d2_dinner],
      },
      rainy1: {
        title: "北部 → 南下 — アスムイ挑戦・パイナップル・首里城",
        events: [EV.asmui_d2, LUNCH_NAGO_D2, EV.pineapple, EV.highway_stop_south, EV.shuri, EV.hotel_night2, EV.d2_dinner],
      },
      rainy2: {
        title: "北部 → 南下 — 両日雨プラン・海中展望塔・パイナップル・首里城",
        events: [EV.busena, LUNCH_NAGO_D2, EV.pineapple, EV.highway_stop_south, EV.shuri, EV.hotel_night2, EV.d2_dinner],
      },
      rainy_asmui: {
        title: "北部 → 南下 — 水族館・パイナップル・首里城",
        events: [EV.aquarium_d2, LUNCH_NAGO_D2, EV.pineapple, EV.highway_stop_south, EV.shuri, EV.hotel_night2, EV.d2_dinner],
      },
    },
    day3: {
      title: "南部聖地巡礼 — 歴史を辿り那覇・帰路へ",
      events: [
        {
          time: "09:00", title: "斎場御嶽（せーふぁうたき）", type: "world", drive: "ホテルから車約15分",
          desc: "琉球王国最高の聖地。世界遺産。ホテルから車15分、チェックアウト後すぐ行ける。巨大な石灰岩の岩壁の隙間を歩く神聖な空間で、奥の三庫理（さんぐーい）からは久高島が望める。朝イチ9時台が最も空いていて静か。",
          tip: "チケットは敷地外の「南城市地域物産館」で購入（300円）。券売機は9:00〜。露出の多い服装は避けること。所要約1時間。",
          map: "斎場御嶽 南城市 沖縄",
          badges: [{ text: "World Heritage", tone: "world" }, { text: "Rain OK", tone: "rainy" }],
        },
        {
          time: "10:30", title: "ランチ候補（那覇・国際通りエリア）", type: "food", drive: "斎場御嶽から車約30分",
          desc: "斎場御嶽から車30分。月曜は週末より空いてる。レンタカー返却まで約2時間、ランチ＋お土産をゆっくり楽しめる。",
          tip: "人気店は駐車場が分かりにくい場合があるので事前に電話確認推奨。",
          candidates: [
            { name: "どらえもん（国際通り）", genre: "🍜 宮古そば", note: "国際通り沿いビル2F。ソーキ・テビチ・三枚肉の3種盛りが人気", map: "どらえもん 宮古そば 那覇 国際通り" },
            { name: "金月そば（きんちちそば）那覇店", genre: "🍜 沖縄そば", note: "老舗移転リニューアル。牧志公設市場近く。豚骨と鰹の出汁スープが評判", map: "金月そば 那覇店 沖縄" },
            { name: "田舎 公設市場南店", genre: "🍜 ソーキそば", note: "市場南側。ソーキそば600円〜。昔ながらの食堂", map: "田舎 公設市場南店 那覇" },
          ],
        },
        {
          time: "11:15", title: "国際通り お土産まとめ買い", type: "shop",
          desc: "泡盛・ちんすこう・紅芋タルト・コーレーグースなど定番みやげを。空港でも揃うので欲しいものだけ優先に。",
          tip: "牧志公設市場2階の食堂（買った食材を調理してもらえる）も面白い体験。",
          map: "国際通り 那覇 沖縄",
        },
        {
          time: "12:30", title: "レンタカー返却 → 那覇空港", type: "transport", drive: "国際通りから車約15分",
          desc: "国際通りから空港まで車15分。返却後チェックイン。空港内にもお土産店・食事処が充実。",
          tip: "返却はフライトの2時間前が目安。ガソリン満タンで返却を。",
          map: "那覇空港",
        },
        {
          time: "14:25", title: "XJ054 那覇発 → 中部国際 16:30着", type: "transport",
          desc: "サンプル航空XJ054便、那覇14:25発、中部国際空港着16:30。",
          tip: "中部国際着後の乗り継ぎ時間には余裕を持って。",
          map: "那覇空港",
        },
      ],
    },
  },
};
