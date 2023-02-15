![Logo](https://github.com/green-code-initiative/ecoCode/blob/main/docs/resources/logo-large.png?raw=true)
======================================

An ESLint plugin which provides JavaScript rules of the ecoCode project.

👉 See [ecoCode-linter README](https://github.com/green-code-initiative/ecoCode-linter#readme) to have more information.

> ⚠️ This plugin is in a very early stage and need improvements. Any contribution will be appreciated.

📥 Usage
--------

### Installation

You'll need to install [ESLint](https://eslint.org/) (v7 or newer) and this plugin:

```sh
# yarn
yarn add -D eslint @ecocode/eslint-plugin
# npm
npm install -D eslint @ecocode/eslint-plugin
```

### Enable whole plugin

```jsonc
// .eslintrc
{
  "plugins": ["ecocode"]
}
```

### Modify rules manually if needed

```jsonc
// .eslintrc
{
  "plugins": ["ecocode"],
  "rules": {
    "ecocode/no-eval-like-methods": 'off'
  }
}
```

Rules
-----

<!-- begin auto-generated rules list -->

| Name |
|:-----|

<!-- end auto-generated rules list -->


🛒 Distribution
---------------

You can follow changelog on [GitHub Releases page](https://github.com/green-code-initiative/ecoCode-linter/releases).
