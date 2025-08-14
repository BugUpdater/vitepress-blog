import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My VitePress Blog',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
          ],
        },
        {
          text: '欢迎学习',
          items: [{ text: '学前必读', link: '/' }],
          collapsed: false,
        },
        {
          text: '基础学习',
          items: [
            { text: '条件类型', link: '/handbook/ConditionalTypes' },
            { text: '泛型', link: '/handbook/Generics' },
          ],
          collapsed: false,
        },
      ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
