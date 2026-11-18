---
title: '博客写作与个性化自定义指南'
description: '整理日常新增文章、连载系列、短记录、作品展示以及自定义个人信息的常用位置。'
published: 2026-11-16
category: '指南'
tags:
  - 博客
  - 指南
  - GitHub Pages
featured: true
readingTime: '4 min'
series: '博客搭建手记'
seriesOrder: 2
---

把站点推上 GitHub Pages 之后，日常维护只需要关注几个核心目录与配置文件。

## 1. 修改个人基本信息

打开 `src/config/site.ts`，可以一站式修改作者名、站点标题、简介、GitHub 链接与页脚标语：

```ts
export const SITE = {
  author: 'Nameless-Tarnished',
  siteTitle: 'Nameless-Tarnished · 代码、文字与生活',
  shortTitle: 'Nameless-Tarnished',
  url: 'https://nameless-tarnished.github.io',
  githubUrl: 'https://github.com/Nameless-Tarnished',
};
```

如需更新「关于我」页面的个人经历，直接编辑 `src/pages/about.astro` 即可。

## 2. 发布一篇新文章

在 `src/content/blog/` 下新建 `.md` 文件（例如 `my-note.md`），填入以下 Frontmatter：

```yaml
---
title: '文章标题'
description: '一句话摘要，会显示在文章列表与社交分享卡片中。'
published: 2026-11-18
category: '工程'
tags:
  - TypeScript
  - 笔记
featured: true
readingTime: '5 min'
series: '可选系列名称'
seriesOrder: 1
---
```

如果想暂存草稿，加上 `draft: true` 即可，构建时会自动跳过。

## 3. 更新短记录与作品展示

- **短记录（Notes）**：在 `src/content/notes/` 下新建 `.md` 文件，适合发几句话或随手摘录。
- **作品展示（Projects）**：首页与 `/projects/` 的精选卡片配置在 `src/data/selected-projects.ts`，其他小工具可在 `src/content/projects/` 添加。
- **动画与音乐**：`scripts/sync-bangumi.mjs` 支持通过环境变量 `BANGUMI_USER_ID` 同步你的 Bangumi 在看清单；音乐专辑与歌词配置位于 `src/data/music.ts`。

## 4. 自动构建与发布

仓库已配置 `.github/workflows/deploy.yml`：每次你向 `main` 分支推送提交，GitHub Actions 会自动执行中文字体裁剪、站点构建并发布到 `https://nameless-tarnished.github.io/`。
