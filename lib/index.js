// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const fs = require('fs')
const file = require('gulp-file')
const path = require('path')
const {compileSass} = require('./compile-sass')

const nonScopedFile = 'index.scss'
const scopedFile = 'index-scoped.scss'

// ensureDot :: String -> String
const ensureDot = str =>
  str.match(/^\./) ? str : `.${str}`

// wrapContents :: (Sass, ClassName) -> Sass
const wrapContents = (contents, wrapper) =>
  `
    $reset-wrapping-class: '${ensureDot(wrapper)}';
    ${contents}
  `
const chooseScopedOrNot = scoped =>
  scoped ? scopedFile : nonScopedFile

// compile :: {wrapper: String} -> Stream Stylesheet
const compile = (sassPath, options={ scope: '' }, done) =>
  [chooseScopedOrNot(options.scope)]
  .map(fileName => path.join(sassPath, fileName))
  .map(filePath => fs.readFileSync(filePath, 'utf-8'))
  .map(contents => options.scope ? wrapContents(contents, options.scope) : contents)
  .map(contents => compileSass(file('ignore.css', contents, {src: true}), [sassPath], done))
  [0]

module.exports = {compile}
