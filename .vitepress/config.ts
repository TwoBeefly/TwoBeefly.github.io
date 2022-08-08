import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '阿哲',
  lang: 'zh-CN',
  lastUpdated: true,
  outDir: "docs",
  themeConfig: {
    nav: [
      {
        text: '学习笔记',
        link: '/pages/note/',
      },
      {
        text: '经验笔记',
        link: '/engineering/',
      },
      {
        text: '工具软件',
        link: '/engineering/',
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.dev/TwoBeefly/mark_down' },
    ],

    algolia: {
      appId: 'S9J30WHNBE',
      apiKey: '39b330225e68321010adc394aacf069e',
      indexName: 'laihaojie',
      // debug: false,
    },
    lastUpdatedText: '上次更新于',
  },
})
