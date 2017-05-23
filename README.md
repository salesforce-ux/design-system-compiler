# Design System Compiler

## Installation

`npm install @salesforce-ux/design-system-compiler`

## Usage

```js
const fs = require('fs')
const path = require('path')
const {compile} = require('@salesforce-ux/design-system-compiler')
const pathToSassFolder = path.resolve(__dirname, 'node_modules/@salesforce-ux/design-system/scss')

// produce a css file scoped to your class name
compile(pathToSassFolder, {scope: 'myScope'}, css => {
  fs.writeFileSync('scoped-design-system.css', css)
})
```

```js
// no scoping class:
compile(pathToSassFolder, {}, css => {
  fs.writeFileSync('scoped-design-system.css', css)
})
```

## Licenses

Source code is licensed under [BSD 3-Clause](https://git.io/sfdc-license)

