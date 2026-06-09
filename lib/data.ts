// SSGビルド時にarticle.jsonを読み込みHTMLに埋め込む
// → AdSenseクローラーがコンテンツを認識できる
import fs from 'fs';
import path from 'path';
import type { ArticleData } from './types';

export function getArticleData(): ArticleData {
  const filePath = path.join(process.cwd(), 'public', 'article.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as ArticleData;
}
