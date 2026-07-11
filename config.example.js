// Copy this file to config.js and edit freely — index.html imports ./config.js.
// Full field reference: docs/SCHEMA.md. Design Set reference: docs/DESIGN_SETS.md.
export default {
  design: "iberia", // "iberia" | "coastal" | "noir" | "washi"

  features: {
    weatherModes: false, // per-day weather-plan switcher (see examples/okinawa)
    checklist: true, // pre-booking checklist sidebar widget
    candidates: false, // multiple candidate spots per event (see examples/okinawa)
  },

  storage: {
    kind: "localStorage", // "localStorage" (default) | "restApi"
    // key defaults to "tripChecklist:<meta.title>" — override here if needed to
    // avoid collisions when multiple trips share the same browser origin.
    // key: "my-trip-2026",
    // endpoint: "/api/checklist", // only read when kind is "restApi" — see server/
  },

  meta: {
    title: "Sample Trip 2026",
    period: "Apr 10 — Apr 12  2泊3日",
    lang: "ja",
  },

  hotels: [
    { night: "Apr 10", name: "サンプルホテル駅前", mapQuery: "Tokyo Station Hotel" },
    { night: "Apr 11", name: "サンプルリゾート海辺", mapQuery: "Sample Beach Resort" },
  ],

  flights: [
    { label: "Apr 10 往路", route: "NRT 09:00 → XXX 11:30", detail: "XX000 Sample Airlines" },
    { label: "Apr 12 復路", route: "XXX 18:00 → NRT 20:30", detail: "XX001 Sample Airlines" },
  ],

  notes: [
    { icon: "info", text: "config.example.js をコピーして config.js を作成してください。" },
    { icon: "clipboard-check", text: "features でチェックリストや天気モードを個別に切り替えられます。" },
  ],

  tabs: [
    { id: "day1", date: "Apr 10", dayOfWeek: "Fri" },
    { id: "day2", date: "Apr 11", dayOfWeek: "Sat" },
    { id: "day3", date: "Apr 12", dayOfWeek: "Sun" },
  ],

  days: [
    {
      id: "day1",
      title: "到着日 — 到着してホテルへ",
      events: [
        {
          time: "09:00",
          title: "サンプル空港 到着",
          type: "transport",
          desc: "サンプル空港に到着。到着ロビーで身支度を整えます。",
          map: "Sample Airport",
        },
        {
          time: "11:30",
          title: "サンプルホテル駅前 チェックイン",
          type: "hotel",
          desc: "駅前のホテルにチェックイン。周辺を散策できます。",
          map: "Tokyo Station Hotel",
          badges: [{ text: "予約済", tone: "reserved" }],
        },
        {
          time: "13:00",
          title: "ランチ（サンプル食堂）",
          type: "food",
          desc: "地元で評判のサンプル食堂でランチ。",
          tip: "混雑するので12時台は避けるのがおすすめ。",
          map: "Sample Restaurant",
        },
      ],
    },
    {
      id: "day2",
      title: "観光日 — 定番スポットを巡る",
      events: [
        {
          time: "09:30",
          title: "サンプル史跡",
          type: "sight",
          desc: "地域を代表する史跡を見学します。",
          map: "Sample Historic Site",
          badges: [{ text: "世界遺産", tone: "world" }],
        },
        {
          time: "12:30",
          title: "サンプルビーチでのんびり",
          type: "beach",
          desc: "透明度の高い海が広がるビーチ。",
          map: "Sample Beach",
        },
        {
          time: "15:30",
          title: "サンプルリゾート海辺 チェックイン",
          type: "hotel",
          desc: "海沿いのリゾートホテルにチェックイン。",
          map: "Sample Beach Resort",
          badges: [{ text: "予約済", tone: "reserved" }],
        },
      ],
    },
    {
      id: "day3",
      title: "帰路 — お土産を買って帰宅",
      events: [
        {
          time: "10:00",
          title: "お土産探し",
          type: "shop",
          desc: "地元の名産品を扱うショップでお土産を購入。",
          map: "Sample Shopping Street",
        },
        {
          time: "13:00",
          title: "サンプル空港へ",
          type: "transport",
          desc: "レンタカーを返却し、空港へ向かいます。",
          map: "Sample Airport",
        },
      ],
    },
  ],

  checklist: [
    { id: "hotel1", title: "サンプルホテル駅前", desc: "予約済", isDone: true, type: "done" },
    { id: "hotel2", title: "サンプルリゾート海辺", desc: "予約済", isDone: true, type: "done" },
    { id: "restaurant1", title: "サンプル食堂", desc: "要事前予約", isDone: false, type: "required" },
  ],
};
