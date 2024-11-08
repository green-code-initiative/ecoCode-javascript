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

### Enable plugin with recommended configuration

#### ESLint Flat Configuration (`eslint.config.js`)

Add `@ecocode` **"flat/recommended"** configuration to  your `eslint.config.js`:

```js
import ecocode from '@ecocode/eslint-plugin'

export default [
  /* other eslint configurations */
  ecocode.configs['flat/recommended'],
]
```

#### ESLint deprecated legacy configuration (`.eslintrc`)

For legacy ESLint versions using the deprecated `.eslintrc` file, add the `@ecocode` **"recommended"** configuration to the `extends` array :

```json
{
  "extends": ["plugin:@ecocode/recommended"]
}
```

### Enable specific rules

#### ESLint Flat configuration (`eslint.config.js`)

Add the `ecocode` plugin configuration to your `eslint.config.js` and select the rules to activate:

```js
import ecocode from '@ecocode/eslint-plugin'

export default [
  /* other eslint configurations */
  {
    plugins: { "@ecocode": ecocode },
    rules: {
      "@ecocode/no-multiple-access-dom-element": "error"
    }
  }
]
```

#### ESLint deprecated legacy configuration (`.eslintrc`)

If your project uses a legacy ESLint version, it may use as well the now deprecated `.eslintrc` file. In such case, Add `@ecocode` to the `plugins` array, potentially followed by rules specific configurations:

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

| Name                                                                                   | Description                                               | ⚠️ |
| :------------------------------------------------------------------------------------- | :-------------------------------------------------------- | :- |
| [avoid-brightness-override](docs/rules/avoid-brightness-override.md)                   | Should avoid to override brightness                       | ✅  |
| [avoid-css-animations](docs/rules/avoid-css-animations.md)                             | Avoid usage of CSS animations                             | ✅  |
| [avoid-high-accuracy-geolocation](docs/rules/avoid-high-accuracy-geolocation.md)       | Avoid using high accuracy geolocation in web applications | ✅  |
| [limit-db-query-results](docs/rules/limit-db-query-results.md)                         | Should limit the number of returns for a SQL query        | ✅  |
| [no-empty-image-src-attribute](docs/rules/no-empty-image-src-attribute.md)             | Disallow usage of image with empty source attribute       | ✅  |
| [no-import-all-from-library](docs/rules/no-import-all-from-library.md)                 | Should not import all from library                        | ✅  |
| [no-multiple-access-dom-element](docs/rules/no-multiple-access-dom-element.md)         | Disallow multiple access of same DOM element              | ✅  |
| [no-multiple-style-changes](docs/rules/no-multiple-style-changes.md)                   | Disallow multiple style changes at once                   | ✅  |
| [no-torch](docs/rules/no-torch.md)                                                     | Should not programmatically enable torch mode             | ✅  |
| [prefer-collections-with-pagination](docs/rules/prefer-collections-with-pagination.md) | Prefer API collections with pagination                    | ✅  |
| [prefer-shorthand-css-notations](docs/rules/prefer-shorthand-css-notations.md)         | Encourage usage of shorthand CSS notations                | ✅  |
| [provide-print-css](docs/rules/provide-print-css.md)                                   | Enforce providing a print stylesheet                      | ✅  |

<!-- end auto-generated rules list -->


🛒 Distribution
---------------

You can follow changelog on [GitHub Releases page](https://github.com/green-code-initiative/ecoCode-linter/releases).
