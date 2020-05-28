# @modyqyw/eslint-config-react

An ESLint shareable config for react. Also support taro and react-native.

## Usage

- Install the config.

```sh
 # for javascript
npm i eslint@~6.8.0 @modyqyw/eslint-config-react@~1.1.0 -D
# for typescript
npm i eslint@~6.8.0 @modyqyw/eslint-config-react@~1.1.0 typescript@~3.9.0 -D
```

For yarn, run scripts below.

```sh
# for javascript
yarn add eslint@~6.8.0 @modyqyw/eslint-config-react@~1.1.0 -D
# for typescript
yarn add eslint@~6.8.0 @modyqyw/eslint-config-react@~1.1.0 typescript@~3.9.0 -D
```

- Add `tsconfig.json` into the project root if you use typescript.

- Set up.

```js
// .eslintrc.js
module.exports = {
  extends: ["@modyqyw/react"],
};
```

## Attention

- You need import React or Taro manually cause eslint won't check this.
- Not support mobx yet.

## VSCode

- Install plugins.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- Set up `Settings.json`. Then `F1 => Format Document` => `F1 => File: Save`.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact",
    "json": "jsonc"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "vue-html"
  ],
  "files.eol": "\n",
  "files.associations": {
    "*.js": "javascriptreact",
    "*.ts": "typescriptreact",
    "*.wxml": "html",
    "*.wxs": "javascript",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascript",
    "*.acss": "css",
    "*.wpy": "html",
    "*.json": "jsonc",
    "*.nvue": "vue"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
```

## More Config

- [@modyqyw/eslint-config](https://github.com/Millcloud/eslint-config)
- [@modyqyw/eslint-config-vue](https://github.com/Millcloud/eslint-config-vue)
- [@modyqyw/eslint-config-vue-ts](https://github.com/Millcloud/eslint-config-vue-ts)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present Millcloud
