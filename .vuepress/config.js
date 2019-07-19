module.exports = {
  base: '/navagraha-docs/',
  title: 'Navagraha',
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '基于Kerbernetes和Docker实现的一种函数即服务框架。'
    }
  },
  serviceWorker: {},
  themeConfig: {
    repo: 'Gscienty/navagraha',
    lastUpdated: '上次更新',
    // 默认是 false, 设置为 true 来启用
    // editLinks: true, // 暂时关闭
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',
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
