module.exports = {
    base:'/',
    title: 'AUI',
    description: 'AUI',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'npm私服', link: 'http://192.168.31.125:4873' },
      ],
      sidebar: [
          {
              title: '介绍',
              collapsable: true,
              children: [
                'views/guide/install/',
                'views/guide/develop/'
              ]
            },
            {
              title: '组件',
              collapsable: true,
              children: [
                'views/components/basic/',
              ]
            }
        ]
      }
  }