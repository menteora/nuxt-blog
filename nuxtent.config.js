module.exports = {
  content: [
    [
      'news',
      {
        page: '_post',
        permalink: 'news/:slug',
        generate: [ // for static build
          'get', 'getAll'
        ],
        isPost: true
      }
    ],
    [
      'pages',
      {
        page: '/_page',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ]
  ]
}
