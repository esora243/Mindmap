import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
            M
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">
              BizMind <span className="text-blue-600">Pro</span>
            </h1>
            <p className="text-xs text-slate-500 -mt-0.5">ビジネス向けマインドマップ作成ツール</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/#tool" className="hover:text-blue-600">ツール</Link>
          <Link href="/#guide" className="hover:text-blue-600">使い方</Link>
          <Link href="/#articles" className="hover:text-blue-600">記事</Link>
          <Link href="/about" className="hover:text-blue-600">運営者</Link>
        </nav>
      </div>
    </header>
  );
}
