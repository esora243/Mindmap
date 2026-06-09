import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleData } from '@/lib/data';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import AdSenseComponent from '@/components/AdSenseComponent';

// SSG: ビルド時に全記事のページを静的生成
export async function generateStaticParams() {
  const data = getArticleData();
  return data.articles.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = getArticleData();
  const article = data.articles.find((a) => a.id === params.id);
  if (!article) return {};
  return {
    title: `${article.title} | BizMind Pro`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const data = getArticleData();
  const article = data.articles.find((a) => a.id === params.id);
  if (!article) notFound();

  const related = data.articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      {/* 広告：記事冒頭（タイトル上） */}
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <AdSenseComponent slot="4444444444" format="auto" responsive label="広告" />
      </div>

      {/* パンくず */}
      <div className="max-w-3xl mx-auto px-4 pt-6 text-xs text-slate-500">
        <Link href="/" className="hover:text-blue-600">トップ</Link> ＞{' '}
        <Link href="/#articles" className="hover:text-blue-600">記事一覧</Link> ＞{' '}
        <span className="text-slate-700">{article.category}</span>
      </div>

      {/* 記事本文 */}
      <article className="max-w-3xl mx-auto px-4 py-6">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-semibold">
              {article.category}
            </span>
            <span>{article.date}</span>
            <span>・{article.readTime}</span>
            {article.author && <span>・{article.author}</span>}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-4">
            {article.excerpt}
          </p>
        </header>

        {article.sections ? (
          <div className="space-y-8">
            {article.sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 border-b-2 border-blue-100 pb-2">
                  {s.heading}
                </h2>
                <p className="text-slate-700 leading-loose whitespace-pre-wrap">{s.body}</p>

                {/* 記事中盤に広告を1つだけ挿入（誤クリック防止のため見出し直後ではなく段落直後） */}
                {i === Math.floor((article.sections!.length - 1) / 2) && (
                  <div className="my-8">
                    <AdSenseComponent
                      slot="5555555555"
                      format="fluid"
                      layoutKey="-fb+5w+4e-db+86"
                      label="広告（記事内）"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border rounded-xl p-6 text-slate-600">
            <p>本記事は現在準備中です。近日公開予定の本格的な解説をお待ちください。</p>
          </div>
        )}

        {/* 記事下のCTA */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-6 md:p-8">
          <h3 className="font-bold text-xl mb-2">BizMind Proでこの戦略をマップ化しよう</h3>
          <p className="text-blue-100 text-sm mb-4">
            本記事で紹介したフレームワークは、BizMind Proのテンプレートとしてすぐに利用できます。
          </p>
          <Link href="/" className="inline-block bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg hover:bg-blue-50">
            ツールを使ってみる →
          </Link>
        </div>

        {/* 関連記事 */}
        <section className="mt-12">
          <h3 className="text-lg font-bold text-slate-900 mb-4">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/articles/${r.id}`}
                className="bg-white border rounded-lg p-4 hover:shadow-md transition"
              >
                <div className="text-xs text-blue-700 font-semibold mb-1">{r.category}</div>
                <div className="font-semibold text-slate-900 text-sm leading-snug">{r.title}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* 広告：記事末尾 */}
      <div className="max-w-3xl mx-auto px-4 py-4">
        <AdSenseComponent slot="6666666666" format="auto" responsive label="広告" />
      </div>

      <SiteFooter />
    </div>
  );
}
