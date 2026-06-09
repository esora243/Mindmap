import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className="text-white font-bold text-lg">BizMind Pro</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            ビジネスの意思決定を加速させる、戦略思考のためのマインドマップ作成ツール。
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">サービス</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#tool" className="hover:text-white">マインドマップ作成</Link></li>
            <li><Link href="/#guide" className="hover:text-white">使い方ガイド</Link></li>
            <li><Link href="/#articles" className="hover:text-white">ブログ記事</Link></li>
            <li><Link href="/#faq" className="hover:text-white">よくある質問</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">運営情報</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">運営者情報</Link></li>
            <li><Link href="/terms" className="hover:text-white">利用規約・免責事項</Link></li>
            <li><Link href="/privacy" className="hover:text-white">プライバシーポリシー</Link></li>
            <li><Link href="/about#contact" className="hover:text-white">お問い合わせ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">ニュースレター</h4>
          <p className="text-sm text-slate-400 mb-3">戦略立案に役立つコンテンツを月2回配信。</p>
          <div className="flex">
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 px-3 py-2 rounded-l text-sm text-slate-900"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r text-sm font-semibold">
              登録
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-slate-500 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 BizMind Pro. All rights reserved.</span>
          <span>Built with Next.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
