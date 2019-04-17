const expect = require('chai').expect

const common = require('../functions/common')
const pageFlow = require('./data/pages')
const userFlow = require('./data/user-flow')
const outputs = require('./data/outputs')

describe('Common', () => {
    describe('Utilities', () => {
        describe('findKey', () => {
            it('should return key if found', () => {
                const result = common.findKey(1, 2, [1, 2])
                expect(result).to.be.false
            });
            it('should return false if key not found', () => {
                const result = common.findKey(1, 2, [{1: 1}, {2: 1}])
                expect(result).to.be.an('object')
                expect(result).to.not.be.false
            });
        })
        describe('handleQueryString', () => {
            it('should return empty string if no queryString params', () => {
                const result = common.handleQueryString({})
                expect(result).to.be.string
                expect(result).to.be.empty
            });
            it('should return useful string if queryString has param', () => {
                const result = common.handleQueryString({query: 'hello'}
                )
                expect(result).to.be.string
                expect(result).to.equal('?query=hello')
                expect(result).to.not.be.empty
            });
            it('should return useful string if queryString has multiple params', () => {
                const result = common.handleQueryString({query: 'foo', query2: 'bar'}
                )
                expect(result).to.be.string
                expect(result).to.equal('?query=foo&query2=bar')
                expect(result).to.not.be.empty
            });
        })
    })
    describe('User Flow proper', () => {
        describe('getPageInfoForUserFlow', () => {
            it('should return page info', () => {
                const result = common.getPageInfoForUserFlow(pageFlow, userFlow, 'example2', 'example1', 0, 'example1')
                const output = outputs.getPageInfoForUserFlow
                expect(result).to.not.be.empty
                expect(result).to.eql(output)
            });
        })
    })
});
