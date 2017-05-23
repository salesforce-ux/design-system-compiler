// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const {compile} = require('../index')
const path = require('path')
const pathToSass = path.resolve(__dirname, '../', 'node_modules/@salesforce-ux/design-system/scss')

describe('compile', () => {
  it('returns scoped css', done => {
    compile(pathToSass, {scope: 'testTime'}, css => {
      expect(String(css)).toMatch(/\.testTime {/g)
      done()
    })
  })
  it('returns non-scoped css', done => {
    compile(pathToSass, {}, css => {
      expect(String(css)).not.toMatch(/\.slds {/g)
      done()
    })
  })
})
