# BizMind Pro

ビジネス向けマインドマップ作成ツール（Next.js 14 + Tailwind CSS / SSG / AdSense対応）

## 🚀 セットアップ

```bash
npm install
cp .env.example .env.local
# .env.local に AdSenseのPublisher IDを記入
npm run dev
```

`http://localhost:3000` でアクセス可能。

## 📦 ビルド（静的サイト生成 = SSG）

```bash
npm run build
```

→ `out/` ディレクトリに完全静的なHTML/CSS/JSが出力されます。
Vercel / Netlify / Cloudflare Pages / S3 + CloudFront のいずれにもデプロイ可能。

## 🎯 AdSense審査対策の実装ポイント

### A. SSGによるコンテンツ事前埋め込み
`next.config.js` で `output: 'export'` を指定。`article.json` のテキストが**ビルド時にHTML内に展開される**ため、AdSenseクローラーがJavaScript実行なしにコンテンツを認識できます。

### B. 誤クリック防止の広告配置
- マインドマップキャンバスと広告は **`min 32px` の余白で物理的に分離**（`globals.css` の `.mindmap-canvas-wrapper::after`）
- 各広告は `「— 広告 —」` ラベル付きで誤認識を防止
- 操作ボタン群（保存・追加・削除）の直近には広告を配置しない

### C. 配置箇所
| 位置 | スロット例 | フォーマット | 理由 |
|---|---|---|---|
| ヘッダー直下 | `1111111111` | ディスプレイ(auto) | ファーストビュー上の高収益位置 |
| ツール直下 | `2222222222` | インフィード(fluid) | キャンバスから視覚的に分離 |
| 記事冒頭 | `4444444444` | ディスプレイ(auto) | 読書開始前の自然な配置 |
| 記事中盤 | `5555555555` | インフィード(fluid) | エンゲージ済み読者向け |
| 記事末尾 | `6666666666` | ディスプレイ(auto) | 読了直後の高クリック位置 |
| フッター上部 | `3333333333` | ディスプレイ(auto) | 滞在末尾の自然位置 |

### D. 法的3ページ完備
- `/privacy` — プライバシーポリシー（AdSense Cookie必須表記入り）
- `/terms` — 利用規約・免責事項（データ消失免責入り）
- `/about` — 運営者情報・お問い合わせ

## 📁 ディレクトリ構造

```
bizmind-pro/
├── app/
│   ├── layout.tsx          # ルートレイアウト（AdSense<script>読込）
│   ├── page.tsx            # トップ（SSGで記事一覧埋め込み）
│   ├── articles/[id]/page.tsx  # 記事詳細（generateStaticParams）
│   ├── privacy/page.tsx    # プライバシーポリシー
│   ├── terms/page.tsx      # 利用規約・免責事項
│   ├── about/page.tsx      # 運営者情報・お問い合わせ
│   └── globals.css
├── components/
│   ├── AdSenseComponent.tsx  # ★ AdSense安全呼び出しコンポーネント
│   ├── MindMapTool.tsx       # マインドマップ描画（クライアント）
│   ├── SiteHeader.tsx
│   └── SiteFooter.tsx
├── lib/
│   ├── data.ts             # article.json 読込（SSG）
│   └── types.ts
├── public/
│   └── article.json        # ★ テンプレート＆長文記事データ
└── next.config.js
```

## 🔧 AdSense導入手順

1. `.env.local` に `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX` を設定
2. AdSense管理画面で広告ユニットを作成し、各 `slot` IDを取得
3. `app/page.tsx` および `app/articles/[id]/page.tsx` 内の `slot="1111111111"` 等を実際のIDに置換
4. `npm run build && npm start` で本番動作確認

## ✅ 審査前チェックリスト

- [ ] `.env.local` に実Publisher IDが設定されている
- [ ] 全ての広告 `slot` が実IDに置換されている
- [ ] `/privacy` `/terms` `/about` の3ページが公開状態
- [ ] 記事が**5本以上**公開されており、各記事**1500文字以上**ある
  → 本リポジトリでは `clinic-strategy-map` (約2842字)、`startup-idea-frameworks` (約3478字) を完備
- [ ] 独自ドメインで公開（Vercel/Netlify無料サブドメインでも可）
- [ ] サイトマップ送信、Search Consoleでインデックス確認

## 📜 ライセンス

MIT
