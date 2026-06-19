import Link from 'next/link';
import { getArticleData } from '@/lib/data';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MindMapTool from '@/components/MindMapTool';
import AdSenseComponent from '@/components/AdSenseComponent';
import IMobileAdComponent from '@/components/IMobileAdComponent';

// SSG: ビルド時に article.json を読み込み、HTMLに記事本文を埋め込む
// → AdSenseクローラーがコンテンツを認識できる
export default function HomePage() {
  const data = getArticleData();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      {/* ============================================================
          【広告配置戦略 1】 ヘッダー直下のディスプレイ広告
          - インタラクティブUIから物理的に離れた位置
          - レスポンシブで誤タップを防止
      ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <AdSenseComponent slot="1111111111" format="auto" responsive label="広告" />
        
        {/* 1つ目のi-mobile広告 */}
        <IMobileAdComponent 
          pid={85055} 
          mid={593695} 
          asid={1934473} 
          elementId="im-1994ba6a1bbf4e9d815ff6f7ba94d4f8" 
        />
      </div>

      {/* ===== ヒーロー ===== */}
      <section className="max-w-7xl mx-auto px-4 pt-8 pb-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white shadow-lg">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
            戦略思考を、いますぐカタチに。
          </h2>
          <p className="text-blue-100 max-w-2xl mb-6 leading-relaxed">
            BizMind Proは、新規事業立ち上げ・経営戦略・プロジェクトWBSなど、
            ビジネスの意思決定を加速させるマインドマップ作成ツールです。
            豊富なテンプレートとワンクリックエクスポートで、思考の整理から共有までシームレスに。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#tool" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition">
              今すぐ作成する
            </Link>
            <Link href="#guide" className="border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">
              使い方を見る
            </Link>
          </div>
        </div>
      </section>

      {/* ===== メインツール ===== */}
      <section id="tool" className="max-w-7xl mx-auto px-4 py-8">
        <MindMapTool templates={data.templates} />
      </section>

      {/* ============================================================
          【広告配置戦略 2】 ツール下の区切り広告（インフィード推奨）
          - キャンバスから 32px 以上の余白を強制（globals.css）
          - 操作UIと視覚的に明確に区別
      ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <AdSenseComponent slot="2222222222" format="fluid" layoutKey="-fb+5w+4e-db+86" label="広告" />
        
        {/* 2つ目のi-mobile広告 */}
        <IMobileAdComponent 
          pid={85055} 
          mid={593695} 
          asid={1934474} 
          elementId="im-12ef6a1f2a5d4e068874f90c75070007" 
        />
      </div>

      {/* ===== 解説テキスト（SEO） ===== */}
      <section id="guide" className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border shadow-sm p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            ビジネスにおけるマインドマップの活用法と本ツールの効果的な使い方
          </h2>
          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
            1. なぜビジネスにマインドマップが必要なのか
          </h3>
          <p className="leading-relaxed text-slate-700 mb-4">
            現代のビジネスシーンでは、新規事業の立ち上げ、経営戦略の策定、プロジェクトマネジメント、
            人材育成、マーケティング企画など、複数の要素を同時に検討する場面が増え続けています。
            こうした複雑な情報を直線的な箇条書きで整理しようとすると、要素間の関係性が見えにくくなり、
            重要な観点を見落とすリスクが高まります。マインドマップは、中心テーマから放射状に枝を伸ばすことで、
            情報の全体像と詳細を同時に把握できる思考整理手法です。脳の自然な情報処理パターンに沿っているため、
            アイデアの発想スピードが上がり、関係者との認識合わせも格段に容易になります。
          </p>
          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
            2. 本ツール「BizMind Pro」の効果的な使い方
          </h3>
          <p className="leading-relaxed text-slate-700 mb-4">
            BizMind Proでは、まず左サイドバーから目的に応じたテンプレートを選択することをおすすめします。
            「新規事業立ち上げ」テンプレートは市場分析・ビジネスモデル・MVP開発・GTM戦略の4軸で構成されており、
            起業初期の検討漏れを防ぎます。「クリニック・店舗経営戦略」は集客・サービス向上・リピート施策・収益管理を網羅し、
            開業医や店舗オーナーの戦略設計に最適です。「プロジェクトWBS」は要件定義から運用引継ぎまでを構造化し、
            PM・PMOがすぐに使えるレベルまで作り込まれています。
          </p>
          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
            3. 起業・戦略立案におけるマインドマップ活用のコツ
          </h3>
          <p className="leading-relaxed text-slate-700 mb-4">
            起業フェーズでは「アイデアを広げるブレインストーミング用マップ」と
            「アイデアを収束させる意思決定マップ」を分けて作るのがコツです。
            前者では質より量を重視し、思いついた要素をどんどん枝として書き出します。
            後者ではROI・実現可能性・市場性などの評価軸を設定し、不要な枝を削ぎ落としていきます。
            戦略立案の場面では3C分析・SWOT分析・4P/4Cといったフレームワークをマインドマップ上に展開することで、
            通常はバラバラに作られる分析資料を一枚のマップに統合できます。
          </p>
          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
            4. 失敗しないマインドマップ作成の3原則
          </h3>
          <p className="leading-relaxed text-slate-700 mb-4">
            第一に「中心テーマを具体的な動詞・名詞で書く」こと。「売上向上」ではなく「2026年度Q3までに既存顧客LTVを20%向上」のように、
            測定可能なテーマを置くと枝の発想が鋭くなります。第二に「階層は3〜4階層まで」に抑えること。深すぎる階層は閲覧者の理解負荷を高めます。
            第三に「色とアイコンで意味付け」を行うこと。緑＝強み、赤＝課題、青＝機会、黄＝ToDoのように一貫したルールを設けると、
            一目で構造が伝わるマップが完成します。
          </p>
        </div>
      </section>

      {/* ===== 最新記事一覧（SSGでHTMLに埋め込み） ===== */}
      <section id="articles" className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              ビジネスに役立つ最新記事
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              戦略立案・思考整理・経営に効く実践ノウハウを定期更新
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.articles.map((a) => (
            <Link
              key={a.id}
              href={`/articles/${a.id}`}
              className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              <div className="h-32 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
                {a.category.slice(0, 2)}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-semibold">
                    {a.category}
                  </span>
                  <span>{a.date}</span>
                  <span>・{a.readTime}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{a.excerpt}</p>
                <span className="mt-3 text-blue-600 font-semibold text-sm">続きを読む →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ★ 3つ目のi-mobile広告（記事一覧とFAQの間） ★ */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <IMobileAdComponent 
          pid={85055} 
          mid={593695} 
          asid={1934474} 
          elementId="im-797bc68d0b51400d91e969222dee9452" 
        />
      </div>

      {/* ===== FAQ ===== */}
      <section id="faq" className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white border rounded-xl shadow-sm p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {[
              { q: 'BizMind Proは無料で利用できますか？', a: 'はい、基本機能はすべて無料でご利用いただけます。テンプレートの利用、ノード編集、PNG/PDFエクスポート機能に料金はかかりません。' },
              { q: '作成したマップはどこに保存されますか？', a: '現在のバージョンでは、エクスポートしたファイル（PNG/PDF/JSON）がユーザー様の端末に保存されます。クラウド保存機能は今後リリース予定です。' },
              { q: '商用利用は可能ですか？', a: 'はい、作成したマインドマップは社内資料・クライアント提案・出版物など、商用目的でご自由にご利用いただけます。' },
              { q: 'スマートフォンでも使えますか？', a: 'はい、レスポンシブ対応しています。ただし、複雑なマップを編集する場合はPC/タブレットの利用を推奨します。' },
              { q: 'テンプレートの追加リクエストはできますか？', a: 'もちろん可能です。「お問い合わせ」フォームよりご要望をお寄せください。' },
            ].map((item, i) => (
              <details key={i} className="border rounded-lg p-4 group">
                <summary className="font-semibold text-slate-900 cursor-pointer flex items-center justify-between">
                  <span>Q. {item.q}</span>
                  <span className="text-blue-600 group-open:rotate-45 transition-transform text-xl">＋</span>
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">A. {item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          【広告配置戦略 3】 フッター上部のレスポンシブ広告
          - 記事閲読完了後の自然な配置
          - フッターナビゲーションから min 80px の余白
      ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <AdSenseComponent slot="3333333333" format="auto" responsive label="広告" />
      </div>

      <SiteFooter />
    </div>
  );
}
