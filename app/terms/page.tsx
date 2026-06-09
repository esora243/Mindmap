import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: '利用規約・免責事項 | BizMind Pro',
  description: 'BizMind Proの利用規約および免責事項。データ消失等の責任に関する規定を含みます。',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">利用規約・免責事項</h1>
        <p className="text-sm text-slate-500 mb-8">最終更新日：2026年6月1日</p>

        <div className="bg-white border rounded-xl p-6 md:p-8 space-y-8 leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">第1条（適用）</h2>
            <p>
              本規約は、BizMind Pro（以下「当サービス」といいます）の利用に関する条件を、
              当サービスを利用するすべてのユーザー（以下「利用者」といいます）と当サービス運営者との間で定めるものです。
              利用者は当サービスを利用することにより、本規約のすべての条項に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">第2条（利用環境）</h2>
            <p>
              当サービスの利用に必要な機器、通信手段、通信費用、その他の利用環境は、利用者の費用と責任において準備するものとします。
              当サービスは特定のブラウザ（Google Chrome、Microsoft Edge、Safari、Firefox の最新版）の利用を推奨しますが、
              これら以外の環境での動作を保証するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">第3条（禁止事項）</h2>
            <p>利用者は、当サービスの利用にあたり、以下の行為を行ってはなりません。</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>法令または公序良俗に反する行為</li>
              <li>当サービスの運営を妨害する行為</li>
              <li>第三者の知的財産権・プライバシー・名誉等の権利を侵害する行為</li>
              <li>当サービスのリバースエンジニアリング、改変、二次配布</li>
              <li>不正アクセス、過剰負荷を与える行為（DoS等）</li>
              <li>その他、運営者が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">第4条（ユーザーが作成したデータについて）</h2>
            <p>
              利用者が当サービス上で作成したマインドマップ等のデータは、利用者のブラウザ内に保存されます。
              当サービスはこれらのデータをサーバーに保存することは原則として行いません。
              利用者は、自らの責任において、作成したデータを適宜エクスポート・バックアップする必要があります。
            </p>
            <p className="mt-3 font-semibold text-red-700">
              【重要】 ブラウザのキャッシュクリア、端末の故障、当サービスの仕様変更等により、
              利用者が作成したデータが消失する可能性があります。
              当サービスは、いかなる理由によるデータの消失・損傷・改変についても一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">第5条（知的財産権）</h2>
            <p>
              当サービスに関連するすべての著作権・商標権その他の知的財産権は、運営者または正当な権利者に帰属します。
              ただし、利用者が当サービス上で作成したコンテンツの著作権は、当該利用者に帰属します。
              利用者は、自ら作成したコンテンツを商用利用することができます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">第6条（免責事項）</h2>
            <p>
              当サービスは、提供する情報の正確性・完全性・有用性について、いかなる保証も行いません。
              利用者が当サービスを利用したことにより発生した、いかなる損害（直接・間接・特別・派生的損害を含む）についても、
              当サービスは一切の責任を負いません。これには以下が含まれますが、これらに限定されません。
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>利用者が作成したデータの消失・破損</li>
              <li>当サービスの利用または利用不能に起因する逸失利益</li>
              <li>当サービスの一時的停止・終了による損害</li>
              <li>当サービス上の情報を信頼して行った意思決定の結果生じた損害</li>
              <li>当サービスに掲載される広告・第三者リンク先で発生した損害</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">第7条（サービスの変更・停止・終了）</h2>
            <p>
              運営者は、利用者への事前通知なく、当サービスの全部または一部を変更・停止・終了することができます。
              これにより利用者または第三者に生じた損害について、運営者は一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">第8条（規約の変更）</h2>
            <p>
              運営者は、必要に応じて本規約を変更することがあります。
              変更後の規約は、当サイト上に掲載した時点から効力を生じるものとします。
              利用者が変更後も当サービスの利用を継続する場合、変更後の規約に同意したものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">第9条（準拠法・管轄）</h2>
            <p>
              本規約は日本法に準拠して解釈されます。
              当サービスに関連して紛争が生じた場合、運営者所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
