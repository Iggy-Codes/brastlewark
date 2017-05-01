/* eslint no-undef: "off" */
describe('Api factory', function () {
  let ApiFactory

  beforeEach(angular.mock.module('brastlewark'))

  beforeEach(inject(function (_ApiFactory_) {
    ApiFactory = _ApiFactory_
  }))
  it('ApiFactory shouldExist', function () {
    expect(ApiFactory).toBeDefined()
  })

  it('ApiFactory should be an object ', function () {
    expect(ApiFactory instanceof Object).toBeTruthy()
  })
  describe('Method getPeople', function () {
    it('ApiFactory.getPeople should exist ', function () {
      expect(ApiFactory.getPeople).toBeDefined()
    })
  })
  describe('Method dataPage', function () {
    beforeEach(function () {
      spyOn(ApiFactory, 'dataPage')
    })
    it('ApiFactory.dataPage should exist ', function () {
      expect(ApiFactory.dataPage).toBeDefined()
    })
  })
})
