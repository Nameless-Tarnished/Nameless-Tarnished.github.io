---
pubDatetime: 2026-11-17T20:00:00+08:00
title: 博客写作与自定义指南
featured: false
draft: false
tags:
  - 指南
  - Markdown
description: 介绍如何新增 Markdown 文章、修改站点个人信息以及部署到 GitHub Pages 或 Vercel。
---

这篇文章整理了日常写博客和修改站点配置最常用的操作，方便随时查阅。

## 1. 修改站点基本信息

打开项目根目录的 `astro-paper.config.ts`，即可一站式修改：

- `site.title`：博客名称（显示在顶部导航与浏览器标签页）
- `site.description`：博客副标题与 SEO 描述
- `site.author`：默认作者署名
- `site.url`：你的正式域名（部署前建议替换）
- `socials`：底部与首页展示的 GitHub、邮箱等社交链接

## 2. 新建一篇文章

在 `src/content/posts/` 目录下新建一个 `.md` 或 `.mdx` 文件（例如 `my-first-note.md`），顶部添加 Frontmatter 元信息即可：

```yaml
---
title: 文章标题
pubDatetime: 2026-11-18T10:00:00+08:00
featured: false
draft: false
tags:
  - 技术
  - 笔记
description: 一句话概括文章内容，会显示在文章列表卡片中。
---
```

> [!TIP]
> 如果文章还没写完，可以将 `draft: true` 设为草稿；正式发布时改回 `false` 即可。

## 3. 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 启动本地开发预览服务 |
| `npm run build` | 类型检查、构建静态页面并生成搜索索引 |
| `npm run preview` | 预览构建后的生产版本 |

## 4. 免费部署上线

这是一个纯静态站点（构建输出在 `dist/` 目录），你可以直接推送到 GitHub 后连接以下任一平台自动部署：

1. **Cloudflare Pages** / **Vercel** / **Netlify**：导入仓库，构建命令填 `npm run build`，输出目录填 `dist`
2. **GitHub Pages**：使用仓库自带的 GitHub Actions 或官方 Astro Pages Action 自动发布
