const expect = require('chai').expect

const common = require('../functions/common')

describe('Common', () => {
    describe('Utilities', () => {
        describe('findKey', () => {
            it('should return key if found', () => {
                const result = common.findKey(1, 2, [1,2])
                expect(result).to.be.false
            });
            it('should return false if key not found', () => {
                const result = common.findKey(1, 2, [{1:1}, {2:1}])
                expect(result).to.be.an('object')
                expect(result).to.not.be.false
            });
        })
    })
    // describe('Page Flow proper', () => {
    //     describe('getPageInfo', () => {
    //         it('should return page info', () => {
    //             const result = common.getPageInfo(1, 2)
    //             // expect(result).to.be
    //         });
    //     })
    // })
});
