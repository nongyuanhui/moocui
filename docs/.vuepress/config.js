// .vuepress/config.js
module.exports = {
  title: '/Mooc-UI',
  base: '/moocUI',
  themeConfig: {
    nav: [{
      text: 'Home', link: '/'
    }, {
      text: 'Github', link: 'https://github.com/nongyuanhui/moocui'
    }, {
      text: 'Npm', link: 'https://www.npmjs.com/package/nongyuanhui-ui'
    }],
    sidebar: [
      // '/', 
      '/componentDocs/hello',
      '/componentDocs/card',
    ]
  }
}