
// components/IMobileAdComponent.tsx
'use client';

import { useEffect, useRef } from 'react';

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
  const pushedRef = useRef(false);

  useEffect(() => {
    // サーバーサイドレンダリング時はスキップ
    if (typeof window === 'undefined') return;
    
    // すでにpush済みの場合は二重実行を防ぐ
    if (pushedRef.current) return;

    window.adsbyimobile = window.adsbyimobile || [];
    window.adsbyimobile.push({
      pid: pid,
      mid: mid,
      asid: asid,
      type: "banner",
      display: "inline",
      elementid: elementId
    });
    
    pushedRef.current = true;
  }, [pid, mid, asid, elementId]);

  return (
    <div className="imobile-slot my-6 flex flex-col items-center justify-center">
      <div className="text-[10px] text-slate-400 mb-1 text-center tracking-wider">
        — 広告 —
      </div>
      {/* 広告がレンダリングされるターゲット要素 */}
      <div id={elementId}></div>
    </div>
  );
}
