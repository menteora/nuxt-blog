module.exports = {
  content: [
    [
      'posts',
      {
        page: '/_post',
        generate: [ // for static build
          'get', 'getAll'
        ],
        isPost: true
      }
    ]
    /*,
    [
      'pages',
      {
        page: '/projects/_slug',
        permalink: '/projects/:slug',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ]
    */
  ]
}
