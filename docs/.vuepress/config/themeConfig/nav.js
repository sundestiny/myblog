// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'Http',
        link: '/pages/1d1b92/'       
      },
      {
        text: 'Ajax',
        link: '/pages/43a79d/'       
      },
      {
        text: 'Node',
        link: '/pages/079821/'       
      },
      {
        text: 'MongoDB',
        link: '/pages/934d6e/'       
      },
      {
        text: 'Axios',
        link: '/pages/2135b2/'       
      },
      {
        text: 'Git',
        link: '/pages/06c08b/',  
      },
      {
        text: 'Webpack',
        link: '/pages/df6335/'       
      },
      {
        text: 'React',
        link: '/pages/50bb3f/'       
      },
      {
        text: 'Vue',
        link: '/pages/92b496/'       
      },
      {
        text: 'Uni-app',
        link: '/pages/bdbd49/'       
      },
      {
        text: '性能优化',
        link: '/pages/01a636/'       
      },
      {
        text: '移动端',
        link: '/pages/3b5bc6/'       
      },
    ],
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
      { text: 'stylus', link: '/pages/9f15c1a281d8bedb/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '常用', link: '/pages/23a16b/' },
      { text: '实战', link: '/pages/197744/' },
    ],
  },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      { text: '实用网站', link: '/pages/beb6c0bd8a66cea6/' },
      { text: '资源库', link: '/pages/eee83a9211a70f9d/' },
      { text: 'Vue专区', link: '/pages/12df8ace52d493f6/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: 'UI库',
    link: '/pages/f2a556/',
    items: [
      { text: 'css效果', link: '/pages/f2a556/' },
      { text: 'js效果', link: '/pages/de46e0/' },
      
      
    ],
  },
  {
    text: '随笔',
    link: '/pages/f2e63f/',
    items: [
      { text: '拥抱生活', link: '/pages/cd8bde/' },
      { text: '生活知道', link: '/pages/f2e63f/' },
    ],
  },
]
