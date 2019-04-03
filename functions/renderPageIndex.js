const nunjucks = require('nunjucks')

module.exports = function(pages) {
    const res = nunjucks.render('../templates/pageFlow.njk', {pages: pages})
    return 'the rendered pages'
}
