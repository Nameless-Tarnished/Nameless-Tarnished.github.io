---
title: '长文排版、代码块与目录体验示例'
description: '演示文章页的二级目录自动提取、代码高亮与一键复制、引用块、表格及多语言混排效果。'
published: 2026-11-17
category: '工程'
tags:
  - 工程
  - Markdown
  - 排版
featured: true
readingTime: '5 min'
---

一篇好的技术博客，除了内容本身扎实，阅读时的节奏感同样重要。这篇文章集中展示了站内 Markdown 渲染管线的排版细节。

## 为什么重视排版与代码可读性

写技术复盘时，正文往往会穿插代码片段、终端命令、对比表格与设计取舍。如果行距过挤、代码块没有区分度，读到一半就很容易失去耐心。

> 好的排版不会抢走内容的风头，它只是让长文从头读到尾变得更加轻松。

本站在构建期通过 `rehype-slug` 与 `rehype-autolink-headings` 为每个标题自动生成可分享锚点，并自动提取所有二级标题渲染到右侧粘性目录中。

## 代码高亮与一键复制

文章中的所有 fenced code block 都会在构建期经过 Shiki 语法高亮，并由自定义 rehype 插件包裹标题栏与一键复制按钮：

```ts
interface PostMeta {
  title: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export function formatPostSummary(post: PostMeta): string {
  const tagText = post.tags.map((tag) => `#${tag}`).join(' ');
  return `[${post.category}] ${post.title} ${tagText}`.trim();
}
```

命令行与配置文件也同样清晰：

```bash
# 检查构建结果与静态资源
npm run build && npm run preview
```

## 常用元素对照表

| 元素 | 用途 | 对应配置 / 插件 |
| --- | --- | --- |
| 二级标题 `##` | 自动生成右侧文章目录 | `rehype-slug` |
| 代码块 | 语法高亮与复制按钮 | `rehype-code-block.mjs` |
| 仓库卡片 `::repo` | 展示 GitHub 项目卡片 | `remark-repo-card.mjs` |
| 站内搜索 `⌘K` | 全局模糊检索文章与标签 | `search-index.json.ts` |

## 小结

当你写下一篇新的技术笔记时，不需要操心任何样式细节，只需要专注于把思路写清楚，剩下的交给构建流程完成即可。
