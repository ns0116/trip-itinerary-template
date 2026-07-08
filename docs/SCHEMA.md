# データスキーマ (config.js)

しおり1つ = `config` オブジェクト1つ。旧 okinawa `TRIP_DATA` と spain `tripData` を包含する統一形。
イベントは **意味的**（`type`）に書き、見た目は Design Set（[DESIGN_SETS.md](./DESIGN_SETS.md)）が決める。

```js
// config.js
export default {
  design: "iberia",                 // 選択する Design Set（iberia|coastal|noir|washi）
  features: {                       // 機能フラグ（未使用機能は描画されない）
    weatherModes: false,            // 天気モード切替（okinawa 相当機能）
    checklist:    true,             // 事前予約チェックリスト（spain 相当機能）
    candidates:   false,            // イベント内の候補複数表示（okinawa 相当機能）
  },
  storage: {                        // features.checklist 有効時のみ参照
    kind: "localStorage",           // "localStorage"（既定） | "restApi"
    key:  "tripChecklist",          // localStorage キー
    endpoint: "/api/checklist",     // kind:"restApi" 時のみ
  },

  meta:  { title: "Spain 2026", period: "Apr 28 — May 03  5泊6日", lang: "ja" },

  hotels:  [ { night: "Apr 28", name: "サンプルホテル", mapQuery: "…" } ],
  flights: [ { label: "Apr 28 往路", route: "NRT 00:00 → MAD 00:00", detail: "XX000 航空会社" } ],
  notes:   [ { icon: "info", text: "任意の注意書き" } ],   // icon は iconName（DESIGN_SETS 参照）

  tabs: [ { id: "day1", date: "Apr 28", dayOfWeek: "Tue", title: "…" } ],

  // days: features.weatherModes によって形が変わる（下記 §days）
  days: { /* or [] */ },

  // features.weatherModes 有効時のみ
  weatherModes: [
    { mode:"sunny", icon:"sun", label:"晴れ", active:true },
    { mode:"rainy", icon:"umbrella", label:"雨" },
  ],

  // features.checklist 有効時のみ
  checklist: [
    { id:"resv1", title:"サンプル予約", desc:"要事前予約", isDone:false, type:"required" },
  ],
}
```

---

## event（タイムラインの1項目）

```js
{
  time:  "13:00",              // 必須: 表示時刻
  title: "サンプル観光地",       // 必須
  type:  "sight",              // 必須: 意味的カテゴリ（下表）。Design Set がアイコン/色に解決
  desc:  "説明文",             // 必須
  tip:   "💡ヒント（任意）",     // 任意: 補足ボックス
  map:   "Place, City",       // 任意: Google Maps 検索クエリ or mapUrls のキー
  drive: "前地点から車15分",     // 任意: 移動タグ
  badges: [ { text:"予約済", tone:"reserved" } ],   // 任意: バッジ（tone は意味的トークン）
  candidates: [                // 任意: features.candidates 有効時のみ表示
    { name:"候補A", genre:"🍜 ジャンル", note:"補足", map:"Place, City" },
  ],
}
```

### type（意味的カテゴリ / 全 Design Set 共通）
`transport` `hotel` `food` `sight` `world` `nature` `beach` `shop` `hike` `art` `night` `music`

> 旧 okinawa と spain の type を統合。各 Design Set がこの一覧すべてに `iconName` と配色を割り当てる。
> 対応表は [DESIGN_SETS.md](./DESIGN_SETS.md#typeicon-対応表) を参照。

### badge tone（意味的バッジトークン）
`reserved` `required` `recommended` `hiddenGem` `optional` `warning` `world` `sunny` `rainy`

> 旧 spain `badgeStyles` と okinawa `B` を統合。色は Design Set が CSS 変数で解決する。
> 旧データの色クラス直書き（`color:"bg-emerald-50 …"`）は `tone` に置換する。

---

## days の2形態（features.weatherModes で分岐）

### (A) 既定: フラット配列（spain 形）
```js
days: [
  { id:"day1", title:"…", events:[ /* event... */ ] },
  { id:"day2", title:"…", events:[ ... ] },
]
```

### (B) 天気モード有効: モードキー付き（okinawa 形）
各日は「モード → {title, events}」を持ち、`weatherModes` の選択で表示が切り替わる。
全モードを網羅しない日は、エンジンが最も近いモードへフォールバックする（旧 okinawa の `modeMap` 相当）。
```js
days: {
  day1: {
    sunny: { title:"晴れプラン", events:[ ... ] },
    rainy: { title:"雨プラン",   events:[ ... ] },
  },
  day2: { /* モード共通なら single キーでも可 */ },
}
```

---

## checklist item（features.checklist 有効時）
```js
{ id:"resv1", title:"表示名", desc:"補足", isDone:false, type:"required" }
// type: "done" | "required" | "recommended" 等（バッジ tone と同系。表示の強調に使用）
```
永続化は `storage`（localStorage 既定 / restApi 任意）。`isDone` トグルで保存。
restApi 時のペイロードは `checklist` 配列そのもの（旧 spain `POST /api/checklist` 互換）。

---

## mapUrls（任意）
`map` の値がキーとして存在すれば固定 URL を使用。無ければ
`https://www.google.com/maps/search/?api=1&query=` + `encodeURIComponent(map)` を生成（旧両版と同じ）。
```js
mapUrls: { "Place, City": "https://www.google.com/maps/search/?api=1&query=…" }
```

---

## 必須/任意まとめ
- 必須: `design` `meta` `tabs` `days`、各 event の `time/title/type/desc`
- 任意: `hotels` `flights` `notes` `mapUrls` `weatherModes`(要 feature) `checklist`(要 feature)、
  event の `tip/map/drive/badges/candidates`
