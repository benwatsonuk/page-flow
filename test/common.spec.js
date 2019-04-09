const expect = require('chai').expect

const common = require('../functions/common')
const pageFlow = require('./data/pages')
const userFlow = require('./data/user-flow')

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
                const output = {
                    "hasHistory": [
                        {
                            "location": "/v0/example1/example2",
                            "sprint": undefined,
                            "version": 0
                        }
                    ],
                    "journeyId": "example1",
                    "location": "0/example1/example2",
                    "navigation": {
                        "next": {
                            "link": "/0/user-flow/example1/example1/example2",
                            "pageInfo": {
                                "description": "Page 2",
                                "id": "2",
                                "location": "example2",
                                "stageInfo": {
                                    "location": "example1",
                                    "name": "Example 1"
                                },
                                "title": "Page 2",
                                "type": "text-input",
                                "userNeeds": []
                            }
                        },
                        "prev": {
                            "link": "/0/user-flow/example1/example2/example1",
                            "pageInfo": {
                                "description": "Page 1",
                                "id": "1",
                                "location": "example1",
                                "stageInfo": {
                                    "location": "example2",
                                    "name": "Example2"
                                },
                                "title": "Page 1",
                                "type": "text-input",
                                "userNeeds": []
                            }
                        }
                    },
                    "pageFlow": {
                        "stages": [
                            {
                                "description": "",
                                "id": "example1",
                                "location": "example1",
                                "name": "Example 1",
                                "versions": [
                                    {
                                        "design-notes": "",
                                        "location": "example1",
                                        "pages": [
                                            {
                                                "description": "Page 1",
                                                "id": "1",
                                                "location": "example1",
                                                "title": "Page 1",
                                                "type": "checkbox-input",
                                                "userNeeds": []
                                            },
                                            {
                                                "description": "Page 2",
                                                "id": "2",
                                                "location": "example2",
                                                "stageInfo": {
                                                    "location": "example1",
                                                    "name": "Example 1"
                                                },
                                                "title": "Page 2",
                                                "type": "text-input",
                                                "userNeeds": []
                                            },
                                            {
                                                "description": "Page 3",
                                                "id": "3",
                                                "location": "example3",
                                                "title": "Page 3",
                                                "type": "confirmation",
                                                "userNeeds": []
                                            }
                                        ],
                                        "sprintDirectory": "v0",
                                        "users": [
                                            "individual"
                                        ],
                                        "version": 0
                                    }
                                ]
                            },
                            {
                                "description": "Example 2",
                                "id": "example2",
                                "location": "example2",
                                "name": "Example2",
                                "versions": [
                                    {
                                        "design-notes": "",
                                        "location": "example2",
                                        "pages": [
                                            {
                                                "description": "Page 1",
                                                "id": "1",
                                                "location": "example1",
                                                "stageInfo": {
                                                    "location": "example2",
                                                    "name": "Example2"
                                                },
                                                "title": "Page 1",
                                                "type": "text-input",
                                                "userNeeds": []
                                            }
                                        ],
                                        "sprintDirectory": "v0",
                                        "users": [
                                            "individual"
                                        ],
                                        "version": 0
                                    }
                                ]
                            }
                        ]
                    },
                    "thisPage": {
                        "description": "Page 2",
                        "id": "2",
                        "location": "example2",
                        "stageInfo": {
                            "location": "example1",
                            "name": "Example 1"
                        },
                        "title": "Page 2",
                        "type": "text-input",
                        "userNeeds": []
                    },
                    "thisStage": {
                        "description": "",
                        "id": "example1",
                        "location": "example1",
                        "name": "Example 1",
                        "versions": [
                            {
                                "design-notes": "",
                                "location": "example1",
                                "pages": [
                                    {
                                        "description": "Page 1",
                                        "id": "1",
                                        "location": "example1",
                                        "title": "Page 1",
                                        "type": "checkbox-input",
                                        "userNeeds": []
                                    },
                                    {
                                        "description": "Page 2",
                                        "id": "2",
                                        "location": "example2",
                                        "stageInfo": {
                                            "location": "example1",
                                            "name": "Example 1"
                                        },
                                        "title": "Page 2",
                                        "type": "text-input",
                                        "userNeeds": []
                                    },
                                    {
                                        "description": "Page 3",
                                        "id": "3",
                                        "location": "example3",
                                        "title": "Page 3",
                                        "type": "confirmation",
                                        "userNeeds": []
                                    }
                                ],
                                "sprintDirectory": "v0",
                                "users": [
                                    "individual"
                                ],
                                "version": 0
                            }
                        ]
                    },
                    "version": 0
                }
                // console.log(result)
                expect(result).to.not.be.empty
                expect(result).to.eql(output)
            });
        })
    })
});
