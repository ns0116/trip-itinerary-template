# trip-itinerary-template — Claude Context

ビルドレスの静的な旅のしおりページのテンプレート。`config.js` を1つ書くだけで
タイムライン・宿泊/フライト情報・天気プラン切り替え・チェックリスト付きページが
できる（`index.html` + ES モジュールのみ、バンドラー不要）。

## 実行

```bash
cp config.example.js config.js   # 初回のみ。config.example.js は編集しない
python3 -m http.server 8080
```

クラウドサンドボックスではブラウザを開いて目視確認できない。

## ドキュメントの役割分担

- `docs/SCHEMA.md` — `config.js` のデータ構造
- `docs/DESIGN_SETS.md` — `design-sets/` の追加方法
- `docs/THEMING.md` — 配色・テーマ
- `docs/DEPLOYMENT.md` — 公開/非公開の判断フロー、個人情報スクラブ手順
- `server/README.md` — チェックリスト同期用の任意Node.jsアドオン

## 注意点

- `config.example.js` は編集禁止。実データは gitignore 対象の `config.js` に書く
- `okinawa` / `spain` などの派生プロジェクトはこのテンプレートを元にしており、
  改修時はテンプレート側にも反映すべきか検討する
