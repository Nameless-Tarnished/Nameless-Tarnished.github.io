import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://nameless-tarnished.github.io/",
    title: "我的个人博客",
    description: "记录思考、技术与生活的极简个人博客。",
    author: "Nameless-Tarnished",
    profile: "https://github.com/Nameless-Tarnished",
    ogImage: "default-og.jpg",
    lang: "zh-cn",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 5,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/Nameless-Tarnished" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=分享文章&body=" },
  ],
});