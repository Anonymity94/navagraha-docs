module.exports = {
  title: 'Navagraha',
  // locales: {
  //   '/': {
  //     lang: 'zh-CN',
  //     description: '基于Kerbernetes和Docker实现的一种函数即服务框架。'
  //   },
  //   '/en': {
  //     lang: 'en-US',
  //     description: '基于Kerbernetes和Docker实现的一种函数即服务框架.'
  //   }
  // },
  serviceWorker: {},
  themeConfig: {
    repo: 'Gscienty/navagraha',
    lastUpdated: 'Last Updated',
    editLinks: false,
    docsDir: 'docs',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    },
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '编译', link: '/build/' },
          {
            text: '发布日志',
            link: 'https://github.com/Gscienty/navagraha/releases'
          }
        ],
        sidebar: {
          '/guide/': [''],
          '/build/': ['']
        }
      }
    }
  }
}
