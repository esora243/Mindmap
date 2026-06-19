'use client';

import { useEffect } from 'react';

interface IMobileAdProps {
  pid: number;
  mid: number;
  asid: number;
  elementId: string;
}

declare global {
  interface Window {
    adsbyimobile: any[];
  }
}

export default function IMobileAdComponent({ pid, mid, asid, elementId }: IMobileAdProps) {
  useEffect(() => {
    // サーバーサイドレンダリング時はスキップ
    if (typeof window === 'undefined') return;

    // Reactの再描画時に、すでに広告（iframe等）が展開済みなら二重呼び出しを防止
    const container = document.getElementById(elementId);
    if (container && container.hasChildNodes()) {
      return; 
    }

    // i-mobileのベーススクリプトがページに無ければ動的に読み込む
    if (!document.querySelector('script[src*="spot.js"]')) {
      const script = document.createElement('script');
      script.src = "https://imp-adedge.i-mobile.co.jp/script/v1/spot.js?20220104";
      script.async = true;
      document.head.appendChild(script);
    }

    // 広告リクエストを送信
    window.adsbyimobile = window.adsbyimobile || [];
    window.adsbyimobile.push({
      pid: pid,
      mid: mid,
      asid: asid,
      type: "banner",
      display: "inline",
      elementid: elementId
    });

  }, [pid, mid, asid, elementId]);

  return (
    <div className="imobile-slot my-6 flex flex-col items-center justify-center min-h-[100px] w-full">
      <div className="text-[10px] text-slate-400 mb-1 text-center tracking-wider">
        — 広告 —
      </div>
      {/* ここにi-mobileの広告が挿入されます */}
      <div id={elementId}></div>
    </div>
  );
}
