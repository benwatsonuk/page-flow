const renderPageIndex = require('./functions/renderPageIndex')
const renderUserFlow = require('./functions/renderUserFlow')
const renderUserFlowPage = require('./functions/renderUserFlowPage')
const getUserFlow = require('./functions/user-flow')
const common = require('./functions/common')

module.exports.renderPageIndex = renderPageIndex
module.exports.getUserFlow = getUserFlow
module.exports.getUserFlowPage = common.getPageInfoForUserFlow
module.exports.renderUserFlow = renderUserFlow
module.exports.renderUserFlowPage = renderUserFlowPage
