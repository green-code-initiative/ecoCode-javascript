![Logo](https://github.com/green-code-initiative/ecoCode/blob/main/docs/resources/logo-large.png?raw=true)
======================================

An ESLint plugin which provides JavaScript and TypeScript rules of the ecoCode project.

👉 See [ecoCode-linter README](https://github.com/green-code-initiative/ecoCode-linter#readme) to have more information.

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

> You are using TypeScript? You will also need to install [typescript-eslint](https://typescript-eslint.io/) to enable our rules.\
> Follow [this official guide](https://typescript-eslint.io/getting-started) to install it in a few steps.

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

🌿 Use with our SonarQube plugin
--------------------------------

If you are already using ESLint results for your SonarQube analysis, there are no additional steps! Otherwise:

- Use **"-f json"** option of ESLint to export results in a JSON format.\
  _example in a script:_ `eslint . -f json -o report.json`
- Add the path of the generated report to SonarQube property **"sonar.eslint.reportPaths"**.\
  _example in sonar-project.properties:_ `sonar.eslint.reportPaths=report.json`

Check [SonarQube documentation](https://docs.sonarqube.org/8.9/analyzing-source-code/importing-external-issues/importing-third-party-issues/)
to have more information about the integration.

🔨 Rules
--------

<!-- begin auto-generated rules list -->

⚠️ Configurations set to warn in.\
✅ Set in the `recommended` configuration.

| Name                                                                                   | Description                                                | ⚠️ |
| :------------------------------------------------------------------------------------- | :--------------------------------------------------------- | :- |
| [avoid-high-accuracy-geolocation](docs/rules/avoid-high-accuracy-geolocation.md)       | Avoid using high accuracy geolocation in web applications. | ✅  |
| [no-import-all-from-library](docs/rules/no-import-all-from-library.md)                 | Should not import all from library                         | ✅  |
| [no-multiple-access-dom-element](docs/rules/no-multiple-access-dom-element.md)         | Disallow multiple access of same DOM element.              | ✅  |
| [prefer-collections-with-pagination](docs/rules/prefer-collections-with-pagination.md) | Prefer API collections with pagination.                    | ✅  |

<!-- end auto-generated rules list -->


🛒 Distribution
---------------

You can follow changelog on [GitHub Releases page](https://github.com/green-code-initiative/ecoCode-linter/releases).
