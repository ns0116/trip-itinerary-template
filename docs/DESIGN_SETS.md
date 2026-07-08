# Design Set 仕様

Design Set = 見た目を束ねる単位。1つのセットが **フォント / 配色 / 角丸・影 / アイコン対応表** を持つ。
イベントデータは意味的（`type`）なまま、`config.design` の切替だけで着せ替わる。

## インターフェース

```js
// design-sets/iberia.js
export default {
  name: "Iberia",
  fonts: {
    display: '"Cormorant Garamond", serif',   // 見出し/英字の主役書体
    sans:    '"Noto Sans JP", sans-serif',
    serif:   '"Noto Serif JP", serif',
  },
  googleFonts: [                                // 動的注入する Google Fonts の指定
    "Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400",
    "Noto+Sans+JP:wght@300;400;500;700",
    "Noto+Serif+JP:wght@400;600;700",
  ],
  colors:  { /* CSS変数へ流し込む。下記コントラクト参照 */ },
  surface: { radius:"0.75rem", shadowSoft:"0 10px 40px -10px rgba(0,0,0,.06)",
             shadowFloat:"0 15px 50px -10px rgba(0,0,0,.08)" },
  icons:   { /* type → iconName（下記 §type↔icon 対応表） */ },
  badgeTones: { /* tone → {bg,fg,border}（CSS変数 or 具体値） */ },
}
```

エンジンは選択セットを読み、`<html data-design="iberia">` を立てて CSS 変数を注入、
`googleFonts` から `<link>` を生成、`icons`/`badgeTones` を描画に用いる。

---

## CSS変数コントラクト

全 Design Set が必ず定義する変数。`styles.css` / インライン SVG はこれらのみを参照する。

| 変数 | 意味 |
|---|---|
| `--c-base` | ページ背景 |
| `--c-surface` | カード背景（通常 white 系） |
| `--c-primary` | 主役色（見出し・強調） |
| `--c-accent` | アクセント（リンク・アイコン強調） |
| `--c-support` | 補助色（自然/成功系） |
| `--c-text` | 本文 |
| `--c-text-muted` | 補足テキスト |
| `--c-border` | 罫線 |
| `--font-display` / `--font-sans` / `--font-serif` | 書体 |
| `--radius` | カード角丸 |
| `--shadow-soft` / `--shadow-float` | 影（通常 / ホバー） |

型別アイコン地色は `--c-*` を `color-mix()` 等で薄めて生成（各 type にハード色を持たせない）。

---

## 同梱4セットのトークン

### iberia（既定・スペイン由来）
実データ由来の確定値。
```
--c-base:#f9f9f9  --c-surface:#ffffff  --c-primary:#8b0000(sangria)
--c-accent:#C85A32(terracotta)  --c-support:#556B2F(olive)
--c-text:#2d2d2d  --c-text-muted:#7a7a7a  --c-border:#ececec
font-display:"Cormorant Garamond"  radius:0.75rem
shadow-soft:0 10px 40px -10px rgba(0,0,0,.06)  shadow-float:0 15px 50px -10px rgba(0,0,0,.08)
```

### coastal（沖縄由来）
実データ由来の確定値。
```
--c-base:#EBF5FA  --c-surface:#ffffff  --c-primary:#003A5C(ocean-deep)
--c-accent:#E8562A(coral)  --c-support:#00897B(teal)
--c-text:#1A2E3A  --c-text-muted:#5A7080  --c-border:#e0f2fe(sky-100)
font-display:"Zen Kaku Gothic New"  radius:1rem
shadow-soft:0 8px 32px -8px rgba(0,60,90,.08)  shadow-float:0 14px 48px -8px rgba(0,60,90,.12)
補足: ヘッダーの波形 SVG 装飾はこのセット固有の演出として保持してよい。
```

### noir（新規・ミニマル/モノクロ）
起点値（実装時に微調整可）。
```
--c-base:#f4f4f5  --c-surface:#ffffff  --c-primary:#18181b
--c-accent:#3f3f46  --c-support:#71717a
--c-text:#18181b  --c-text-muted:#71717a  --c-border:#e4e4e7
font-display:"Inter"（or Noto Sans JP）  radius:0.5rem  影は控えめ（ほぼフラット）
用途: ビジネス/都市。ラインアイコンは細ウェイト。
```

### washi（新規・和モダン）
起点値（実装時に微調整可）。
```
--c-base:#f5f1e8  --c-surface:#fffdf8  --c-primary:#5b4636(墨/土)
--c-accent:#9c6b3f(枯茶)  --c-support:#6a7f4f(苔)
--c-text:#3a352e  --c-text-muted:#8a8072  --c-border:#e6ddca
font-display:"Noto Serif JP"  radius:0.5rem  影は淡く
用途: 国内/温泉/和。淡い土壁・鉱物顔料の配色。
```

---

## type↔icon 対応表

在庫アイコン（`src/icons.js`, Lucide 由来 / ISC）を各 type に割り当てる。
既定は全セット共通でよく、セット固有で上書きしたい場合のみ `icons` を差し替える。

| type | iconName (Lucide) | 旧 okinawa 絵文字 | 旧 spain FA |
|---|---|---|---|
| transport | `plane` | ✈️ | fa-plane |
| hotel | `hotel` | 🏨 | fa-hotel |
| food | `utensils` | 🍽️ | fa-utensils |
| sight | `landmark` | ⛩️ | fa-landmark |
| world | `globe` | 🌏 | — |
| nature | `trees` | 🌿 | fa-tree |
| beach | `umbrella` | 🏖️ | — |
| shop | `shopping-bag` | 🛍️ | fa-bag-shopping |
| hike | `mountain` | 🥾 | — |
| art | `palette` | — | fa-palette |
| night | `moon` | — | fa-moon |
| music | `music` | — | fa-music |

### `src/icons.js` 在庫（最低限そろえる）
`plane` `hotel` `utensils` `landmark` `globe` `trees` `umbrella` `shopping-bag`
`mountain` `palette` `moon` `music` `waves`（波形装飾用）
`sun` `umbrella`（天気モードのタブ用）`info` `clipboard-check`（notes/checklist 見出し用）
`map-pin` `chevron-down`（地図ボタン/アコーディオン）

> 描画は `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
> stroke-linecap="round" stroke-linejoin="round"><path d="…"/></svg>`。
> 色は継承（`currentColor`）なので type 別地色・テーマ色に自動追従する。

---

## badge tone → 表示

意味的トークンを各セットで解決（既定は下記、セットで上書き可）。旧 spain `badgeStyles` / okinawa `B` を統合。

| tone | 既定の意味付け | 参考色（iberia） |
|---|---|---|
| reserved | 予約済/手配済（中立・淡グレー） | stone 系 |
| required | 要予約（強めの警告寄り） | accent 系 |
| recommended | 推奨 | blue 系 |
| hiddenGem | 穴場 | support 系 |
| optional | 任意 | gray 系 |
| warning | 注意 | red 系 |
| world | 世界遺産 | emerald 系 |
| sunny / rainy | 天気ラベル | yellow / sky 系 |

---

## 新しい Design Set の作り方（THEMING.md へ展開予定）
1. `design-sets/xxx.js` を上記インターフェースで作成
2. CSS変数コントラクトの全キーを埋める
3. `googleFonts` に使用書体を列挙（未使用セットのフォントは注入されない）
4. 必要なら `icons` / `badgeTones` を上書き
5. `config.design:"xxx"` で全 examples が破綻せず描画されるか確認
