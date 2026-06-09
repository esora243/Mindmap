import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: '運営者情報・お問い合わせ | BizMind Pro',
  description: 'BizMind Proの運営者情報およびお問い合わせ窓口のご案内。',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">運営者情報・お問い合わせ</h1>
        <p className="text-sm text-slate-500 mb-8">BizMind Pro について</p>

        {/* ===== 運営者情報 ===== */}
        <section className="bg-white border rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">運営者情報</h2>
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-3 text-sm leading-relaxed">
            <dt className="font-semibold text-slate-600">サイト名</dt>
            <dd className="md:col-span-2 text-slate-800">BizMind Pro</dd>

            <dt className="font-semibold text-slate-600">サイトURL</dt>
            <dd className="md:col-span-2 text-slate-800">https://bizmind-pro.example.com</dd>

            <dt className="font-semibold text-slate-600">運営者名</dt>
            <dd className="md:col-span-2 text-slate-800">BizMind Pro 編集部</dd>

            <dt className="font-semibold text-slate-600">事業内容</dt>
            <dd className="md:col-span-2 text-slate-800">
              ビジネス向けWebツールの開発・運営、戦略立案・経営に関する情報メディアの運営
            </dd>

            <dt className="font-semibold text-slate-600">運営開始</dt>
            <dd className="md:col-span-2 text-slate-800">2026年</dd>

            <dt className="font-semibold text-slate-600">利用技術</dt>
            <dd className="md:col-span-2 text-slate-800">Next.js / React / Tailwind CSS</dd>
          </dl>
        </section>

        {/* ===== サイトの理念 ===== */}
        <section className="bg-white border rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">サイトの理念</h2>
          <p className="leading-relaxed text-slate-700">
            BizMind Pro は「複雑な戦略思考を、誰もが扱える道具に」をミッションに掲げています。
            新規事業の立ち上げ、クリニック・店舗の経営戦略、プロジェクトマネジメントなど、
            ビジネスのあらゆる場面で求められる構造化思考を、軽量・高速・無料のマインドマップツールと、
            実務に直結する解説記事の両輪で支援します。
          </p>
          <p className="leading-relaxed text-slate-700 mt-3">
            私たちは、専門家のみが扱えてきたフレームワーク（リーンキャンバス、SWOT、SCAMPER等）を、
            誰でも数クリックで使えるテンプレートとして提供することで、
            日本のビジネスシーンにおける意思決定スピードを底上げすることを目指しています。
          </p>
        </section>

        {/* ===== お問い合わせ ===== */}
        <section id="contact" className="bg-white border rounded-xl p-6 md:p-8 mb-8 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">お問い合わせ</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            ご質問・ご要望・取材のご依頼など、お気軽にお問い合わせください。
            通常2〜3営業日以内にご返信いたします。
          </p>

          <div className="bg-slate-50 border rounded-lg p-5 mb-6">
            <div className="text-sm text-slate-500 mb-1">メールでのお問い合わせ</div>
            <div className="font-mono text-lg text-slate-900">contact@bizmind-pro.example.com</div>
            <p className="text-xs text-slate-500 mt-2">
              ※ スパム対策のため、画像化したメールアドレスや問い合わせフォームの利用を推奨します。
            </p>
          </div>

          <h3 className="font-semibold text-slate-900 mb-3">お問い合わせフォーム</h3>
          <form className="space-y-4" action="#" method="POST">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">お問い合わせ種別</label>
              <select
                name="type"
                className="w-full border rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>ツールに関するご質問</option>
                <option>不具合のご報告</option>
                <option>機能追加のご要望</option>
                <option>取材・寄稿のご依頼</option>
                <option>その他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ご質問・ご要望をご記入ください"
              />
            </div>
            <div className="text-xs text-slate-500">
              送信ボタンを押すことで、
              <a href="/privacy" className="text-blue-600 underline">プライバシーポリシー</a>
              および
              <a href="/terms" className="text-blue-600 underline">利用規約</a>
              に同意したものとみなします。
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
            >
              送信する
            </button>
          </form>
        </section>

        {/* ===== 関連ページ ===== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/privacy" className="bg-white border rounded-xl p-5 hover:shadow-md transition">
            <div className="font-bold text-slate-900 mb-1">プライバシーポリシー</div>
            <div className="text-sm text-slate-600">個人情報・Cookieの取扱いについて</div>
          </a>
          <a href="/terms" className="bg-white border rounded-xl p-5 hover:shadow-md transition">
            <div className="font-bold text-slate-900 mb-1">利用規約・免責事項</div>
            <div className="text-sm text-slate-600">サービスご利用にあたっての規約</div>
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
