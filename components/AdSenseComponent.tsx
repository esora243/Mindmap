'use client';

import { useEffect, useRef } from 'react';

/**
 * AdSense広告ユニットを安全に呼び出すコンポーネント
 *
 * 設計指針:
 *  1. useEffect内で adsbygoogle.push() を呼び出し、SPA遷移でも重複pushを防ぐ
 *  2. 既にpush済みの<ins>要素を再push しないようrefでガード（AdSense規約準拠）
 *  3. レイアウトシフト防止のため min-height を確保
 *  4. ボタンや操作UIから min 150px 離して配置されることを前提（誤クリック防止）
 *
 * 使い方:
 *   <AdSenseComponent
 *     slot="1234567890"
 *     format="auto"
 *     responsive={true}
 *     label="広告"
 *   />
 *
 * 環境変数:
 *   NEXT_PUBLIC_ADSENSE_CLIENT="ca-pub-XXXXXXXXXXXXXXXX"
 */

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseProps {
  /** AdSense管理画面で発行されるスロットID */
  slot: string;
  /** auto | rectangle | horizontal | vertical | fluid */
  format?: string;
  /** レスポンシブ対応 */
  responsive?: boolean;
  /** インフィード/インフィード広告用レイアウトキー */
  layoutKey?: string;
  /** style override（最低限のpadding/marginは親で確保） */
  style?: React.CSSProperties;
  /** 「広告」ラベル表示（誤クリック防止のため推奨） */
  label?: string;
  /** 追加クラス名 */
  className?: string;
}

export default function AdSenseComponent({
  slot,
  format = 'auto',
  responsive = true,
  layoutKey,
  style,
  label = '広告',
  className = '',
}: AdSenseProps) {
  const insRef = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);

  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-XXXXXXXXXXXXXXXX';

  useEffect(() => {
    // SSR時はwindow未定義のため早期return
    if (typeof window === 'undefined') return;
    // 既にこのインスタンスでpush済みならスキップ
    if (pushedRef.current) return;
    // ins要素未マウントならスキップ
    if (!insRef.current) return;
    // 既にAdSenseがレンダリング済みのins要素は再pushしない
    if (insRef.current.getAttribute('data-adsbygoogle-status')) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushedRef.current = true;
    } catch (err) {
      // 開発環境やAdSenseスクリプト未ロード時のエラーは無視
      // 本番環境ではSentry等でロギング推奨
      // eslint-disable-next-line no-console
      console.warn('AdSense push error:', err);
    }
  }, [slot]);

  return (
    <div className={`adsense-slot ${className}`} aria-label={label} role="complementary">
      <div className="text-[10px] text-slate-400 mb-1 text-center tracking-wider">
        — {label} —
      </div>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block', minHeight: 100, ...style }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
        {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
      />
    </div>
  );
}

/**
 * アンカー広告（ページ下部に固定表示される広告）専用コンポーネント
 * - モバイルで高い収益性
 * - AdSense自動広告の「アンカー広告」を手動で配置する場合はこちらを利用
 * - <script>側でAUTO適用されている場合はこのコンポーネントは不要
 */
export function AdSenseAnchor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({
        params: { google_ad_channel: 'anchor' },
        enable_page_level_ads: true,
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('AdSense anchor error:', err);
    }
  }, []);
  return null;
}
