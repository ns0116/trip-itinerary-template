# 新しい Design Set を作る

Design Set の仕様全体は [DESIGN_SETS.md](./DESIGN_SETS.md) を参照。本書は
「実際にファイルを1つ足す」手順に絞ったチェックリスト。

## 手順

1. `design-sets/xxx.js` を作成し、以下をすべて埋める。
   ```js
   import { DEFAULT_BADGE_TONES } from "./_tones.js"; // 使い回すなら import、独自色にするなら自作オブジェクト

   export default {
     name: "Xxx",
     fonts: { display: "...", sans: "...", serif: "..." },
     googleFonts: ["Family:wght@..."],           // 使う書体だけ列挙。未使用フォントは注入されない
     colors: {
       base: "#...", surface: "#...", primary: "#...", accent: "#...",
       support: "#...", text: "#...", textMuted: "#...", border: "#...",
     },
     surface: { radius: "0.75rem", shadowSoft: "...", shadowFloat: "..." },
     icons: {},          // 個別の type だけ上書きしたい場合のみキーを足す（例: { food: "waves" }）
     badgeTones: DEFAULT_BADGE_TONES, // または独自の9トーン定義（noir.js が実例）
     decorations: {},    // headerWave: true でヘッダー波形装飾（coastal.js が実例）
   };
   ```
2. `--c-*` 8色・`--font-*` 3書体・`--radius`・`--shadow-*` 2つ、CSS変数コントラクトの
   全キーが `colors` / `fonts` / `surface` に揃っているか確認（[DESIGN_SETS.md#css変数コントラクト](./DESIGN_SETS.md#css変数コントラクト)）。
3. `config.js` で `design: "xxx"` に切り替え、`config.example.js` または
   `examples/*/config.js` の内容が破綻せず描画されるか確認する。
   - タイムラインのアイコン地色・バッジ・見出し・影・角丸が新しい変数に追従しているか
   - `features.weatherModes` / `checklist` / `candidates` を有効にしたデータでも確認する

## 上書きできる箇所

- **アイコン**: `icons` は `type → iconName` の部分上書き。指定しない type は
  `src/icons.js` の `DEFAULT_TYPE_ICONS` にフォールバックする。新しいアイコン自体を
  足したい場合は `src/icons.js` の `ICONS` 辞書に Lucide (ISC) から SVG path を追加する。
- **バッジ色**: `badgeTones` は9トーン（`reserved/required/recommended/hiddenGem/
  optional/warning/world/sunny/rainy`）を毎回すべて定義する必要がある。
  `_tones.js` の既定値をそのまま使ってもよいし、`noir.js` のように独自定義してもよい。
- **装飾**: `decorations.headerWave` は coastal 固有の波形装飾フラグ。同様の
  「このセットだけの一枚絵」を足したい場合はエンジン側 (`src/engine.js` の
  `renderSidebarHeader`) に新しいフラグを追加する形で拡張する。

## やらないこと

- Design Set にレイアウト崩れを起こすような値（極端な `radius` や透明度の高い
  `surface` 色など）を入れない。`src/styles.css` の layout utility 側は
  4セットとも共通のレイアウト前提で書かれている。
- `config.js` 側のデータに色クラスやスタイルを直書きしない。色・書体・角丸・影は
  すべて Design Set 経由にする（[SCHEMA.md](./SCHEMA.md) の `type` / `tone` の意味的分離を壊さない）。
