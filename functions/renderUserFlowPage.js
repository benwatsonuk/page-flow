const common = require('./common')
const nunjucks = require('nunjucks')
const path = require('path')

module.exports = function(userFlow, pageFlow, page, stage, version, journeyId) {
    const theUserFlow = common.getPageInfoForUserFlow(userFlow, pageFlow, page, stage, version, journeyId)
    const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.join(__dirname, '../templates/')))
    const output = env.render('userFlowIndividualPage.njk', { userFlow: theUserFlow })
    return output
}
