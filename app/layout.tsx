import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-9475852513146230';

export const metadata: Metadata = {
  title: 'BizMind Pro | ビジネス向けマインドマップ作成ツール',
  description:
    '新規事業立ち上げ・クリニック経営戦略・プロジェクトWBSなど、ビジネスの意思決定を加速させるマインドマップ作成ツール。テンプレート搭載、PNG/PDFエクスポート対応、完全無料。',
  keywords: ['マインドマップ', 'ビジネス', '新規事業', '経営戦略', 'WBS', 'SWOT', '無料ツール'],
  authors: [{ name: 'BizMind Pro編集部' }],
  openGraph: {
    title: 'BizMind Pro | ビジネス向けマインドマップ作成ツール',
    description: '戦略思考のためのマインドマップ作成ツール',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {/* AdSenseスクリプト：next/scriptで安全に読み込み（重複防止・遅延読み込み） */}
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />

        {/* i-mobile共通スクリプトを追加 */}
        <Script
          id="imobile-script"
          async
          strategy="afterInteractive"
          src="https://imp-adedge.i-mobile.co.jp/script/v1/spot.js?20220104"
        />

        {children}
      </body>
    </html>
  );
}
