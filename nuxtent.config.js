module.exports = {
  content: {
    page: '/_post',
    generate: [ // for static build
      'get', 'getAll'
    ],
    isPost: false
  }
}
