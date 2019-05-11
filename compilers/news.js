const { parseMarkdownDirectory } = require('nuxt-gustave/lib/markdown')
const { saveToJsonDirectory } = require('nuxt-gustave/lib/gustave')

exports.compile = () => {
    const resources = parseMarkdownDirectory('content/news', {
      jekyllMode: true
    })
    saveToJsonDirectory('news.json', resources)
    return resources.map(resource => `/news/${resource.$post}`)
  }