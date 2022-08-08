import { defineConfig } from 'vitepress'
import { getMds } from '../scripts'

export default defineConfig({
  title: '阿哲',
  lang: 'zh-CN',
  lastUpdated: true,
  outDir: "docs",
  themeConfig: {
    sidebar: [
      {
        items: getMds()
      },
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
