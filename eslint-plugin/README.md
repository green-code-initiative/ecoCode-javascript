![Logo](https://github.com/green-code-initiative/ecoCode/blob/main/docs/resources/logo-large.png?raw=true)
======================================

An ESLint plugin which provides JavaScript and TypeScript rules of the ecoCode project.

👉 See [ecoCode-javascript README](../README.md) to have more information.

> ⚠️ This plugin is in a very early stage and need improvements. Any contribution will be appreciated.

🚀 Getting started
------------------

### Installation

You'll need to install [ESLint](https://eslint.org/) (v7 or newer) and this plugin:

```sh
# yarn
yarn add -D eslint @ecocode/eslint-plugin
# npm
npm install -D eslint @ecocode/eslint-plugin
```

> You are using TypeScript? You will also need to install [typescript-eslint](https://typescript-eslint.io/) to enable
> our rules.\
> Follow [this official guide](https://typescript-eslint.io/getting-started) to install it in a few steps.

#### Are you working with a GitHub Packages registry?

The plugin is also available from GitHub npm registry under "green-code-initiative" scope:

```sh
# yarn
yarn add -D eslint @green-code-initiative/ecocode-eslint-plugin
# npm
npm install -D eslint @green-code-initiative/ecocode-eslint-plugin
```

### Enable whole plugin

Add `@ecocode` recommended configuration to `extends` section of your `.eslintrc`:

```jsonc
{
  "extends": ["plugin:@ecocode/recommended"]
}
```

### Enable only some rules

Add `@ecocode` to the `plugins` section of your `.eslintrc`, followed by rules configuration:

```jsonc
{
  "plugins": ["@ecocode"],
  "rules": {
    "@ecocode/no-multiple-access-dom-element": "error"
  }
}
```

🔨 Rules
--------

<!-- begin auto-generated rules list -->

⚠️ Configurations set to warn in.\
✅ Set in the `recommended` configuration.

| Name                                                                                   | Description                                                               | ⚠️ |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ | :- |
| [avoid-autoplay](docs/rules/avoid-autoplay.md)                                         | Disallow autoplay and enforce preload='none' for video and audio elements | ✅  |
| [avoid-css-animations](docs/rules/avoid-css-animations.md)                             | Avoid usage of CSS animations                                             | ✅  |
| [avoid-high-accuracy-geolocation](docs/rules/avoid-high-accuracy-geolocation.md)       | Avoid using high accuracy geolocation in web applications.                | ✅  |
| [limit-db-query-results](docs/rules/limit-db-query-results.md)                         | Should limit the number of returns for a SQL query                        | ✅  |
| [no-empty-image-src-attribute](docs/rules/no-empty-image-src-attribute.md)             | Disallow usage of image with empty source attribute                       | ✅  |
| [no-import-all-from-library](docs/rules/no-import-all-from-library.md)                 | Should not import all from library                                        | ✅  |
| [no-multiple-access-dom-element](docs/rules/no-multiple-access-dom-element.md)         | Disallow multiple access of same DOM element.                             | ✅  |
| [no-multiple-style-changes](docs/rules/no-multiple-style-changes.md)                   | Disallow multiple style changes at once.                                  | ✅  |
| [prefer-collections-with-pagination](docs/rules/prefer-collections-with-pagination.md) | Prefer API collections with pagination.                                   | ✅  |
| [prefer-shorthand-css-notations](docs/rules/prefer-shorthand-css-notations.md)         | Encourage usage of shorthand CSS notations                                | ✅  |
| [provide-print-css](docs/rules/provide-print-css.md)                                   | Enforce providing a print stylesheet                                      | ✅  |

<!-- end auto-generated rules list -->


🛒 Distribution
---------------

You can follow changelog on [GitHub Releases page](https://github.com/green-code-initiative/ecoCode-linter/releases).
