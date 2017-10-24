module.exports = {
  content: {
    page: '/_post',
    generate: [ // for static build
      'get', 'getAll'
    ],
    isPost: true
  }
}
/*
,
api: function (isStatic) {
  return {
    browserBaseURL: isStatic ? 'http://www.dinamicamente.org' : ''
  }
}
*/
