---
sidebar: 2
---



# 介绍

VuePress 由两部分组成：第一部分是一个[极简静态网站生成器](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/README.md)和[插件 API](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/plugin/README.md)，另一个部分是为书写技术文档而优化的[默认主题](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/default-theme-config.md)，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

## 它是如何工作的？

事实上，一个 VuePress 网站是一个由 [Vue](http://vuejs.org/)、[Vue Router](https://github.com/vuejs/vue-router) 和 [webpack](http://webpack.js.org/) 驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。

在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 [Nuxt](https://nuxtjs.org/) 的 `nuxt generate` 命令，以及其他的一些项目，比如 [Gatsby](https://www.gatsbyjs.org/)。

## Features

**内置的 Markdown 拓展**

- [目录](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/guide/markdown.md#%E7%9B%AE%E5%BD%95)
- [自定义容器](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/guide/markdown.md#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8)
- [代码块中的行高亮](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/guide/markdown.md#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%A1%8C%E9%AB%98%E4%BA%AE)
- [行号](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/guide/markdown.md#%E8%A1%8C%E5%8F%B7)
- [导入代码段](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/guide/markdown.md#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E6%AE%B5)

**在 Markdown 中 使用 Vue**

- [模板语法](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/guide/using-vue.md#%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95)
- [使用组件](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/guide/using-vue.md#%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6)

**Vue驱动的自定义主题系统**

- [网站和页面的元数据](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/writing-a-theme.md#%E7%BD%91%E7%AB%99%E5%92%8C%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%85%83%E6%95%B0%E6%8D%AE)
- [内容摘抄](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/writing-a-theme.md#%E5%86%85%E5%AE%B9%E6%91%98%E6%8A%84)

**默认主题**

- Responsive layout
- [首页](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/default-theme-config.md#%E9%A6%96%E9%A1%B5)
- [内置的搜索](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/default-theme-config.md#%E5%86%85%E7%BD%AE%E6%90%9C%E7%B4%A2)
- [Algolia 搜索](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/default-theme-config.md#algolia-%E6%90%9C%E7%B4%A2)
- 可定制的 [navbar](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/default-theme-config.md#navbar) and [sidebar](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/default-theme-config.md#sidebar)
- [自动生成的 GitHub 链接和页面编辑链接](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/default-theme-config.md#Git-%E4%BB%93%E5%BA%93%E5%92%8C%E7%BC%96%E8%BE%91%E9%93%BE%E6%8E%A5)
- [PWA: 刷新内容的 Popup](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/default-theme-config.md#popup-ui-to-refresh-contents)
- [最后更新时间](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/theme/default-theme-config.md#%E6%9C%80%E5%90%8E%E6%9B%B4%E6%96%B0%E6%97%B6%E9%97%B4)
- [多语言支持](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/guide/i18n.md)

**博客主题**

- [文档](https://vuepress-theme-blog.ulivz.com/)
- [在线案例](https://ulivz.com/)

**Plugin**

- [强大的 Plugin API](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/plugin/README.md)
- [博客插件](https://vuepress-plugin-blog.ulivz.com/)
- [PWA 插件](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/plugin/official/plugin-pwa.md)
- [Google Analytics 插件](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/plugin/official/plugin-google-analytics.md)
- ...

## 为什么不是...?

### Nuxt

VuePress 能做的事情，Nuxt 理论上确实能够胜任，但 Nuxt 是为构建应用程序而生的，而 VuePress 则专注在以内容为中心的静态网站上，同时提供了一些为技术文档定制的开箱即用的特性。

### Docsify / Docute

这两个项目同样都是基于 Vue，然而它们都是完全的运行时驱动，因此对 SEO 不够友好。如果你并不关注 SEO，同时也不想安装大量依赖，它们仍然是非常好的选择！

### Hexo

Hexo 一直驱动着 Vue 的文档 —— 事实上，在把我们的主站从 Hexo 迁移到 VuePress 之前，我们可能还有很长的路要走。Hexo 最大的问题在于他的主题系统太过于静态以及过度地依赖纯字符串，而我们十分希望能够好好地利用 Vue 来处理我们的布局和交互，同时，Hexo 的 Markdown 渲染的配置也不是最灵活的。

### GitBook

我们的子项目文档一直都在使用 GitBook。GitBook 最大的问题在于当文件很多时，每次编辑后的重新加载时间长得令人无法忍受。它的默认主题导航结构也比较有限制性，并且，主题系统也不是 Vue 驱动的。GitBook 背后的团队如今也更专注于将其打造为一个商业产品而不是开源工具。