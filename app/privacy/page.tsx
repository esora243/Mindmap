import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'プライバシーポリシー | BizMind Pro',
  description: 'BizMind Proのプライバシーポリシー。Google AdSenseのCookie利用に関する必須表記を含みます。',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">プライバシーポリシー</h1>
        <p className="text-sm text-slate-500 mb-8">最終更新日：2026年6月1日</p>

        <div className="bg-white border rounded-xl p-6 md:p-8 space-y-8 leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. はじめに</h2>
            <p>
              BizMind Pro（以下「当サイト」といいます）は、ユーザーの個人情報を尊重し、その保護に努めます。
              本プライバシーポリシーは、当サイトがどのような情報を収集し、どのように利用・保護するかを定めるものです。
              当サイトをご利用いただく場合、本ポリシーに同意いただいたものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. 収集する情報</h2>
            <p>当サイトでは、サービス提供および改善のため、以下の情報を収集する場合があります。</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>お問い合わせフォーム送信時のお名前・メールアドレス・内容</li>
              <li>アクセスログ（IPアドレス、ブラウザ種類、参照元URL等）</li>
              <li>Cookie および類似技術により取得される行動データ</li>
              <li>ユーザーが作成したマインドマップのデータ（ブラウザ内に保存。サーバーには送信されません）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Google AdSenseの利用について</h2>
            <p>
              当サイトは、第三者配信の広告サービス「Google AdSense」を利用しています。
              Googleなどの第三者配信事業者は、Cookie を使用して、ユーザーが当サイトや他のサイトに過去にアクセスした際の情報に基づいて、
              ユーザーの興味・関心に応じた広告を表示することがあります。
            </p>
            <p className="mt-3">
              Cookieを無効にする方法、およびGoogle広告に関する詳細は、
              <a
                href="https://policies.google.com/technologies/ads?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Google広告のポリシーページ
              </a>
              をご確認ください。
            </p>
            <p className="mt-3">
              第三者配信事業者（Googleを含む）が、訪問者の興味に応じた広告を表示するために
              Cookieを使用することがあります。広告のカスタマイズはユーザーが
              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Google広告設定
              </a>
              で無効にできます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. アクセス解析ツールの利用について</h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を利用する場合があります。
              このGoogle Analyticsはトラフィックデータの収集のためにCookieを使用しています。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. 個人情報の利用目的</h2>
            <p>当サイトは、収集した個人情報を以下の目的に利用します。</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>お問い合わせへの返信</li>
              <li>サービスの改善および新機能の開発</li>
              <li>不正利用の防止およびセキュリティ確保</li>
              <li>法令に基づく対応</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. 第三者提供</h2>
            <p>
              当サイトは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供しません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. プライバシーポリシーの変更</h2>
            <p>
              当サイトは、必要に応じて本ポリシーを変更することがあります。
              重要な変更がある場合は、当サイト上で告知します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは、
              <a href="/about#contact" className="text-blue-600 underline">お問い合わせページ</a>
              よりご連絡ください。
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
