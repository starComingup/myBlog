module.exports = {
  title: 'starcoming',
  description: 'Star 互联网根据地',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: 'logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/myBlog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    repo: "https://github.com/starComingup/myBlog.git",
    repoLabel: 'GitHub',
    docsDir:'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',
    nav:[ // 导航栏配置
      { text: '后端开发', link: '/springboot/' },
      { text: '算法探析', link: '/algorithm/'},
      { text: 'Linux运维', link: '/sustain/'},
      { text: '学到更多',
        ariaLabel: 'other Menu',
        items: [
        { text: '操作系统', link: '/operatingsystem/' },
        { text: '计算机网络',link: '/network/' },
        { text: '网络安全',link: '/security/'}    
        ]
      }
    ],
    smoothScroll: true,
    //displayAllHeaders: true,//显示所有页面的标题链接
    sidebar: {
    '/springboot/': getSpringBoot('指南','深入'), // 侧边栏配置
    '/algotithm/': getAlgorithm(),
    '/sustain/':  [{
        title: '运维笔记',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '',
          'ssh',
          'system-service',
          'nginx-security',
          'docker-security'
        ] 
      }
    ],
    '/operatingsystem/': getOs(),
    '/network/': getNetwork(),
    '/security/': getNetworkSecurity()
    }    
  },
  plugins: [
      ['@vuepress/back-to-top',true],
      ['one-click-copy', {
          copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
          copyMessage: '复制成功！', // default is 'Copy successfully and then paste it for use.'
          duration: 500, // prompt message display time.
          showInMobile: false // whether to display on the mobile side, default: false.
      }],
      ['vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Rw2VADDbLKVBHLW2UTngsuDi-9Nh9j0Va',
          appKey: 'lsvve0HWh9vKwNQFwPGwCMnA'
        }
      }]
    //   [
    //   '@vuepress/last-updated',
    //   {
    //     transformer: (timestamp, lang) => {
    //       // 不要忘了安装 moment
    //       const moment = require('moment')
    //       moment.locale(lang)
    //       return moment(timestamp).fromNow()
    //     }
    //   }
    // ]
  ]
    
  
}

function getSpringBoot(groupA,groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
  },
  {
    title: groupB,
    collapsable: false,
    children: [
      'dockerAPI'
    ]
  }]
}
function getAlgorithm(){
  return [
  {
    title: '排序',
    collapsable: false,
    sidebarDepth: 2,
    children: [
    ]
  },
  {
    title: '栈与队列',
    collapsable: false,
    children: [
    ]
  },
  {
    title: '树',
    collapsable: false,
    children:[
    ]
  },
  {
    title: '图',
    collapsable: false,
    children:[
    ]
  },
  {
    title: '哈希',
    collapsable: false,
    children: [
    ]
  },
  {
    title: '其他',
    collapsable: false,
    children: [
    ]
  }
  ]
}

// function getSustain(){
//   return 
//   [
//     {
//     title: '运维笔记',
//     collapsable: false,
//     sidebarDepth: 2,
//     children: [
//       '',
//       'ssh',
//       'system-service'
//       ] 
//     }
//   ]
// }
function getOs(){
  return [
  ''
  ]
}
function getNetwork(){
  return [
  '']
}
function getNetworkSecurity(){
  return []
}