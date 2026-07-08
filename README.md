# trip-itinerary

🇯🇵 日本語 | [🇬🇧 English](README.en.md)

このリポジトリをクローンして `config.js` を1つ書くだけで、共有できる旅のしおりページが
できあがります——タイムライン、日付タブ、宿泊/フライト情報のサイドバー、任意の天気プラン
切り替え、事前予約チェックリスト付き。ビルド工程は不要：`index.html` + ES モジュールだけ
なので、静的ファイルサーバー（や多くのブラウザでは `file://` でも）でそのまま動き、
GitHub Pages にもそのままデプロイできます。

## ライブデモ

すべて**架空のデータ**です。地名・宿名・店名は実在の場所を指しておらず、実在の場所を
オマージュした創作の名前です（実在の店・施設とは無関係です）。

- [Coastal — weatherModes + candidates（架空の島旅）](https://ns0116.github.io/trip-itinerary-template/examples/okinawa/)
- [Iberia — checklist（架空の2都市周遊）](https://ns0116.github.io/trip-itinerary-template/examples/spain/)
- [Noir — 最小構成（架空の出張）](https://ns0116.github.io/trip-itinerary-template/examples/novaport/)
- [Washi — checklist + candidates（架空の温泉旅）](https://ns0116.github.io/trip-itinerary-template/examples/yumori/)

## クイックスタート

```bash
git clone <this-repo> my-trip
cd my-trip
cp config.example.js config.js
# config.js を自分の旅程に編集
python3 -m http.server 8080   # 好きな静的ファイルサーバーでOK
open http://localhost:8080/
```

これだけです——`index.html` が `./config.js` を読み込んで描画します。npm install も
バンドラーも不要。

## できること

- **4つの Design Set** — `config.design` の1行で見た目を丸ごと差し替え：
  `iberia`（エレガントなセリフ体・深紅——既定）、`coastal`（爽やかな海の青）、
  `noir`（ミニマルなモノクローム）、`washi`（温かみのある和モダン）。
  4つとも `examples/` に完全なデモしおりがあります。トークン一覧は
  `docs/DESIGN_SETS.md` を参照。
- **機能フラグ** — `weatherModes`（日毎の晴れ/雨プラン切り替え）、`checklist`
  （事前予約チェックリスト）、`candidates`（1イベントに複数の候補地を表示）を
  それぞれ独立にON/OFFできます。
- **オフラインファーストなアイコン** — インラインSVG（Lucide, ISC）で、
  アイコンフォントCDNは使いません。ネットワーク越しに読むのはGoogle Fontsのみ。
- **チェックリストの永続化** — 既定は `localStorage`。複数端末で同期したい場合は
  任意の `server/` REST API アドオンに向けられます。

## リポジトリ構成

```
index.html            エントリポイント — ./config.js + src/engine.js を読み込む
config.example.js      これをコピーして config.js を作る
src/                   エンジン・アイコン・ストレージアダプタ・スタイルシート
design-sets/           iberia / coastal / noir / washi
examples/               4つの完全なデモしおり（すべて架空データ）
server/                 任意のチェックリスト同期用REST API（Express）
docs/                   SCHEMA / DESIGN_SETS / THEMING / DEPLOYMENT
```

## 自分の旅程を書く

`config.js` の全体構造は [docs/SCHEMA.md](docs/SCHEMA.md) に詳しく書かれています。
要点だけ書くとこんな形です：

```js
export default {
  design: "iberia",
  features: { weatherModes: false, checklist: true, candidates: false },
  meta: { title: "My Trip 2026", period: "Apr 10 — Apr 12", lang: "ja" },
  hotels: [...], flights: [...], notes: [...],
  tabs: [{ id: "day1", date: "Apr 10", dayOfWeek: "Fri" }, ...],
  days: [{ id: "day1", title: "...", events: [
    { time: "09:00", title: "...", type: "sight", desc: "..." },
  ] }],
};
```

イベントは**意味的**に書きます（`type: "sight" | "food" | "hotel" | ...`）——
アイコンや配色を決めるのはデータではなく Design Set の役目です。フォーム別の実例は：

- `examples/okinawa/config.js` — weatherModes + candidates の形
- `examples/spain/config.js` — checklist の形
- `examples/novaport/config.js` — 機能フラグをすべてOFFにした最小構成
- `examples/yumori/config.js` — checklist + candidates を併用した形

## Design Set を追加する

[docs/THEMING.md](docs/THEMING.md) を参照してください。

## デプロイする

しおりに実際の予約情報や私的なメモが含まれるか、単なるデモかによって2つのモードを
使い分けます。詳細は [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)：

- **公開してよいデモデータ** → GitHub Pages（認証なし）。
- **自分の実際の旅程** → GitHub **Private** リポジトリ + Cloudflare Pages +
  Cloudflare Access（メールOTP認証）。クライアント側だけのパスワードチェックに
  頼らないこと——ページのソースは常に誰でも読めます。

## ライセンス

- このテンプレート本体: MIT（`LICENSE` 参照）。
- アイコン: [Lucide](https://lucide.dev) から抽出（ISC）。
- フォント: Google Fonts（OFL）、`<link>` 経由で読み込み——完全オフライン構成に
  したい場合はセルフホストまたはインライン化してください。
