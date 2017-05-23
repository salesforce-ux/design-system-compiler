# Design System Compiler

## Installation

`npm install @salesforce-ux/design-system-compiler`

## Usage

```js
const fs = require('fs')
const path = require('path')
const {compile} = require('@salesforce-ux/design-system-compiler')
const pathToSassFolder = path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/scss')

compile(pathToSassFolder, {wrapper: 'testTime'}, css => {
  fs.writeFileSync('scoped-design-system.css', css)
})
```

or without a wrapper

```js
compile(pathToSassFolder, {}, css => {
  fs.writeFileSync('scoped-design-system.css', css)
})
```

## Licenses

Source code is licensed under [BSD 3-Clause](https://git.io/sfdc-license)

