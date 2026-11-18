export type ProjectId = 'elma' | 'threebody' | 'minialloc' | 'cardpdf';

export interface ProjectCard {
  id: ProjectId;
  name: string;
  subtitle: string;
  description: string;
  detail: string;
  tech: readonly string[];
  article: string;
  repo: string;
  live?: string;
}

const blogShowcase: ProjectCard = {
  id: 'elma',
  name: 'Digital Space',
  subtitle: '个人博客与数字花园',
  description: '基于 Astro 搭建的个人博客网站，集成了文章目录、系列连载、全局 ⌘K 搜索、明暗环境光切换与悬浮音乐播放器。',
  detail: '通过 GitHub Pages 自动构建与发布，专注长文阅读体验与日常折腾记录。',
  tech: ['Astro', 'TypeScript', 'CSS', 'GitHub Pages'],
  article: '/blog/welcome-to-my-blog/',
  repo: 'https://github.com/Nameless-Tarnished/Nameless-Tarnished.github.io',
} as const;

const typographyLab = {
  id: 'threebody',
  name: 'Code & Typography',
  subtitle: '长文排版与代码高亮',
  description: '围绕长文阅读体验打磨的文章页结构：顶部阅读进度条、右侧粘性目录、带一键复制的代码块，以及 GitHub 仓库卡片。',
  detail: '兼顾中文长文阅读舒适度与工程技术文章的展示需求。',
  tech: ['Markdown', 'Shiki', 'Rehype', 'Remark'],
  article: '/blog/code-and-typography/',
  repo: 'https://github.com/Nameless-Tarnished/Nameless-Tarnished.github.io',
} as const;

const writingSystem = {
  id: 'minialloc',
  name: 'Content Workflow',
  subtitle: '内容组织与自动化构建',
  description: '使用 Astro Content Collections 管理文章、系列、短记录与作品数据，构建期自动完成中文字体子集化与 RSS / Sitemap 生成。',
  detail: '写完 Markdown 推送到 main 分支即可全自动部署上线。',
  tech: ['Content Collections', 'Subset Font', 'RSS', 'GitHub Actions'],
  article: '/blog/writing-and-customization/',
  repo: 'https://github.com/Nameless-Tarnished/Nameless-Tarnished.github.io',
} as const;

const starterTools = {
  id: 'cardpdf',
  name: 'Site Search & Index',
  subtitle: '静态全文搜索与归档索引',
  description: '构建期生成轻量站内搜索索引，支持按文章标题、正文关键词、标签与页面快速跳转，纯静态部署即可拥有即时搜索体验。',
  detail: '按 Ctrl/⌘ + K 随时唤起全局搜索面板。',
  tech: ['Static JSON', 'Keyboard Shortcut', 'Tags', 'Archive'],
  article: '/blog/writing-and-customization/',
  repo: 'https://github.com/Nameless-Tarnished/Nameless-Tarnished.github.io',
} as const;

/** Showcase entries on the home page and /about/ (three projects). */
export const selectedProjects: readonly ProjectCard[] = [blogShowcase, typographyLab, writingSystem];

/** Showcase entries on /projects/. */
export const projectPageProjects: readonly ProjectCard[] = [...selectedProjects, starterTools];
