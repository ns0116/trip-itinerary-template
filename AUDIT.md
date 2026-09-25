# AUDIT.md — trip-itinerary-template

作成日: 2026-09-24
更新日: 2026-09-25（完了状況整理）

## 完了状況（最終確認: 2026-09-25）

> 状態はこの表が正。下の監査本文は 2026-09-24 監査時点の記録（原文のまま）。

**総合: ✅ 完了**

| 優先度 | 完了 | 残り |
|---|---|---|
| 高 | 0/0 | 0 |
| 中 | 2/2 | 0 |
| 低 | 1/1 | 0 |

| # | 優先度 | 項目 | 状態 | 備考 |
|---|---|---|---|---|
| 1 | 中 | READMEの`open http://localhost:8080/`をクロスプラットフォーム化 | ✅ 2026-09-24 | `42e7b6f`。README.md/README.en.md両方。クラウドでは目視確認できない旨も追記 |
| 2 | 中 | 最小限のCLAUDE.mdを追加 | ✅ 2026-09-24 | `42e7b6f`。ドキュメント役割分担・`config.example.js`編集禁止ルールを記載 |
| 3 | 低 | `server/`アドオン（任意機能）への追加対応 | ➖ 対応不要 | 監査本文で「追加対応は不要」と判断済み（任意機能と明記済み・localStorageフォールバック実装済み） |

## プロンプト監査結果

`CLAUDE.md`（プロジェクトルート）、`.claude/agents`、`.claude/skills`、`.claude/commands`、`.claude/rules` のいずれも**存在しない**。対象ファイルなし。

参考: `docs/DEPLOYMENT.md` や `server/README.md` など通常のドキュメントは整備されており、Claude Code向けの専用設定が無いだけで、プロジェクト自体のドキュメント品質は高い（公開/非公開の判断フロー、個人情報スクラブ手順などが明文化されている）。今後Claude Code専用のガイドを追加するなら、このプロジェクトはテンプレート／派生（okinawa, spain等）の運用ルールが複雑なので、CLAUDE.md化する価値はある（下記改善提案参照）。

## ローカル依存リスト

このプロジェクトは「ビルドレス静的サイト＋任意のNode.jsアドオン（チェックリスト同期用）」という構成で、設計段階からオフライン/クラウド双方を意識しており、深刻なローカル依存は見つからなかった。

- `server/server.js:1-3` — コメントで `storage: { kind: "restApi", endpoint: "http://localhost:3000/api/checklist" }` を例示。ただし `src/storage.js:30-41`（`load`関数）でAPI到達不可時は自動的に `localStorage` にフォールバックする実装があり、クラウドサンドボックスで `server/` を起動しなくてもテンプレート自体は問題なく動く。
- `server/server.js:48` — `console.log` に `http://localhost:${PORT}` を出力するのみ（実害なし）。
- `server/docker-compose.yml:1-12` — チェックリスト同期用アドオンをローカルDockerで起動する任意構成。必須ではない。
- `server/README.md:14,32` — 上記と同様、ローカル起動時のログ・設定例としての `localhost:3000` 表記。`server/README.md:36-37` に「APIが到達不能なら自動的にlocalStorageにフォールバックする」旨が明記されている。
- `README.md:29`, `README.en.md:30` — クイックスタートの `open http://localhost:8080/` は **macOS専用コマンド**（`open`）。Windows/Linuxでは動かない。クラウドサンドボックス（ヘッドレス環境）ではそもそもブラウザを開けないため、この手順自体が実行不能。
- `examples/` 配下は全て架空データ（人物・宿名等は "サンプル" 表記）で、個人情報や絶対パスの混入は無し。

## 改善提案（優先度付き）

**中**
- README.md:29 / README.en.md:30 の `open http://localhost:8080/` をクロスプラットフォーム対応の案内に変更（例: 「ブラウザで http://localhost:8080/ を開く（macOS: `open`, Windows: `start`, Linux: `xdg-open`）」）。クラウドサンドボックスでは目視確認ができない旨も一言添えると親切。
- Claude Codeがこのリポジトリで作業する際の専用CLAUDE.mdが無い。`design-sets/` の追加方法、`docs/SCHEMA.md`・`docs/DESIGN_SETS.md`・`docs/THEMING.md` の役割分担、`config.example.js` は編集禁止で `config.js`（gitignore対象）を使う運用ルールなど、初見のエージェントが誤って `config.example.js` を実データで汚染するリスクがある。最小限のCLAUDE.mdを追加する価値がある。

**低**
- `server/` アドオンはオプション機能であることが `server/README.md:1-6` に明記済みで、フォールバックも実装されているため、現状のままでも実運用上の問題は無い。追加対応は不要。
