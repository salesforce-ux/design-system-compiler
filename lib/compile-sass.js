// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const gulp = require('gulp')

const render = (includePaths, done) =>
  sass.sync({
    precision: 10,
    includePaths: includePaths,
  })
  .on('error', e => {
    sass.logError(e)
    done(e)
  })

// compileSass :: (Vinyl|String) -> Stream Stylesheet
const compileSass = (file, includePaths, done) =>
  file
  .pipe(plumber())
  .pipe(render(includePaths, done))
  .pipe(autoprefixer({ remove: false }))
  .on('data', data => done(data.contents))

module.exports = {compileSass}
