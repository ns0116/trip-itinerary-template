// Demo config — entirely fictional. City, company names, hotel: all invented
// homages to no particular real place. See docs/DEPLOYMENT.md's scrub checklist.
// Showcases: Noir design set + bare-minimum feature set (all flags off).

export default {
  design: "noir",

  features: { weatherModes: false, checklist: false, candidates: false },

  meta: {
    title: "ノヴァポート出張（デモ・架空の都市）",
    period: "Feb 16(Mon) — Feb 18(Wed)　2泊3日",
    lang: "ja",
  },

  hotels: [
    { night: "Feb 16 - 18", name: "グリッドタワー・ホテル（36F）", mapQuery: "ノヴァポート 中央区" },
  ],

  flights: [
    { label: "Feb 16 往路", route: "NKJ 07:20 → NVP 11:05", detail: "GV220 グリッドヴィア航空（架空）" },
    { label: "Feb 18 復路", route: "NVP 21:40 → NKJ 05:30+1", detail: "GV225 グリッドヴィア航空（架空）" },
  ],

  notes: [
    { icon: "info", text: "都市名・社名・時刻はすべて架空のデモ用データです。実在の都市ではありません。" },
    { icon: "plane", text: "深夜着の復路便のため、最終日は身軽な荷物で動くのがおすすめ設定。" },
  ],

  tabs: [
    { id: "day1", date: "Feb 16", dayOfWeek: "Mon" },
    { id: "day2", date: "Feb 17", dayOfWeek: "Tue" },
    { id: "day3", date: "Feb 18", dayOfWeek: "Wed" },
  ],

  days: [
    {
      id: "day1",
      title: "到着・移動日 — 時差ボケのまま初日ミーティング",
      events: [
        {
          time: "11:05", title: "ノヴァポート国際空港 到着", type: "transport",
          desc: "架空の都市国家ノヴァポートの空港に到着。入国審査は電子ゲートで意外とスムーズ（という設定）。",
          tip: "SIMは到着ロビーの自販機で買えることになっている。空港Wi-Fiは接続がやや不安定という噂（架空）。",
          map: "ノヴァポート国際空港",
        },
        {
          time: "12:30", title: "グリッドタワー・ホテル チェックイン", type: "hotel",
          desc: "36階建ての架空タワーホテル。フロントは無人で、顔認証チェックイン……のはずが今日はシステム不調で結局有人対応だったという小ネタ入り。",
          tip: "荷物が多い場合はスーツケース預けカウンター（B1）を先に。部屋は最短13時から。",
          map: "グリッドタワー・ホテル",
          badges: [{ text: "Reserved", tone: "reserved" }],
        },
        {
          time: "14:00", title: "架空商事 ノヴァポート支社 訪問", type: "sight",
          desc: "初日から商談。移動疲れを表に出さず、笑顔で名刺交換……という架空の1コマ。会議室はタワー22階。",
          tip: "エレベーターが混みがちなので5分前行動推奨。受付でゲストバッジの発行に少し時間がかかる。",
          map: "ノヴァポート 中央区 オフィス街",
        },
        {
          time: "19:00", title: "【夕食】ローカル火鍋風レストラン", type: "food",
          desc: "架空の名物「火焔鍋」を先方チームと。辛さレベルは5段階中「中」を選んだつもりが、なぜか一番辛いものが出てきたという小さな事件つき。",
          tip: "辛さ確認は指差しではなく紙に書いて渡すと確実、というローカルの知恵（架空）。",
          map: "ノヴァポート 屋台横丁",
        },
      ],
    },
    {
      id: "day2",
      title: "終日ミーティング — 合間に摩天楼の夜景バーへ",
      events: [
        {
          time: "08:30", title: "ホテルにて朝食", type: "hotel",
          desc: "最上階のビュッフェで軽めに。窓の外は霧で摩天楼が半分しか見えない、いかにも架空都市らしい朝。",
          map: "グリッドタワー・ホテル",
        },
        {
          time: "10:00", title: "終日ミーティング（架空商事 本社）", type: "sight",
          desc: "午前・午後通しての商談。途中、資料のページ数が合わず慌てて印刷し直すという定番のトラブル（架空）。",
          tip: "会議室は寒いことが多いので上着必須、という体で。",
          map: "ノヴァポート 中央区 オフィス街",
        },
        {
          time: "18:30", title: "夜景バー「スカイグリッド」", type: "night",
          desc: "63階から見渡す夜景は圧巻、という設定のルーフトップバー。商談成立を祝う一杯……のはずが、実は継続協議になったというオチつき。",
          tip: "ドレスコードあり（スマートカジュアル）。予約なしだと1時間待ちのことも。",
          map: "スカイグリッド バー",
          badges: [{ text: "Recommended", tone: "recommended" }],
        },
      ],
    },
    {
      id: "day3",
      title: "帰国日 — 駆け足でお土産、そして深夜便",
      events: [
        {
          time: "10:00", title: "チェックアウト・荷物預け", type: "hotel",
          desc: "夜まで時間があるのでホテルに荷物だけ預けて身軽に市内へ。復路が深夜便なのでのんびりできる貴重な最終日。",
          map: "グリッドタワー・ホテル",
        },
        {
          time: "11:00", title: "セントラルマーケットでお土産探し", type: "shop",
          desc: "架空の名物ドライフルーツやスパイスを物色。値切り交渉に挑戦するも、店主のペースに完全に飲まれて終わるという小噺つき。",
          tip: "現金のみの屋台も多いという設定。小額紙幣を崩しておくと安心。",
          map: "ノヴァポート セントラルマーケット",
        },
        {
          time: "14:00", title: "【昼食】麺屋台の食べ比べ", type: "food",
          desc: "3軒並ぶ麺屋台をひとつずつ味見。結局どれが一番だったか意見がまとまらないまま出発時間が近づく、という締まらない締めくくり。",
          map: "ノヴァポート 屋台横丁",
        },
        {
          time: "18:30", title: "荷物受取 → 空港へ", type: "transport",
          desc: "ホテルで荷物をピックアップし、空港行きシャトルへ。夕方の渋滞情報を見て、結局タクシーに切り替えるかどうかで少し揉めた設定。",
          tip: "空港シャトルは30分間隔（という設定）。渋滞状況によってはタクシー推奨。",
          map: "ノヴァポート国際空港",
        },
        {
          time: "21:40", title: "GV225 ノヴァポート発 → 中之島国際 05:30+1着", type: "transport",
          desc: "架空の「グリッドヴィア航空」GV225便で帰国の途へ。深夜便のため機内ではひたすら眠る計画（守れた試しがない）。",
          map: "ノヴァポート国際空港",
        },
      ],
    },
  ],
};
