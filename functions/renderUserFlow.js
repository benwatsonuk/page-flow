const common = require('./common')
const nunjucks = require('nunjucks')
const path = require('path')

module.exports = function(userFlow, pageFlow) {
    const theUserFlow = common.pageFlowFromUserFlow(userFlow, pageFlow)
    const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.join(__dirname, '../templates/')))
    const output = env.render('userFlow.njk', { userFlow: theUserFlow })
    return output
}
