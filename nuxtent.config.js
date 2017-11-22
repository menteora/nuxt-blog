var Prism = require('prismjs');
require('prismjs/components/prism-php');
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-bash');

module.exports = {
  parsers: {
    md: {
      highlight: (code, lang) => {
        return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`
      }
    }
  },
  content: [
    [
      'news',
      {
        page: '_post',
        permalink: 'news/:slug',
        generate: [ // for static build
          'get', 'getAll'
        ],
        isPost: false
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
