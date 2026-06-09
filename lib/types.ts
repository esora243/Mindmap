export interface MindNode {
  id: string;
  text: string;
  color: string;
  children: MindNode[];
}

export interface Template {
  id: string;
  name: string;
  description: string;
  root: MindNode;
}

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author?: string;
  sections?: ArticleSection[];
}

export interface ArticleData {
  templates: Template[];
  articles: Article[];
}
