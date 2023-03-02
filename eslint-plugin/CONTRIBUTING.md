## Hello! We are pleased to see you here 👋

Please read
global [CONTRIBUTING file](https://github.com/green-code-initiative/ecoCode-linter/blob/main/CONTRIBUTING.md) of this
project first.\
Also check the [starter pack](https://github.com/green-code-initiative/ecoCode-common/blob/main/doc/starter-pack.md) to
have the basic information before starting.

## Requirements

- You must have Node.js 14.17.x, 16.x or 18.x installed on your machine
- You must know how an ESLint plugin works
- You must know how to create a custom rule in an ESLint
- You can have Yarn 2.x installed beside npm ([installation guide](https://yarnpkg.com/getting-started/install))

The ESLint documentation is very detailed and provides a useful starting point.\
Check more here: https://eslint.org/docs/latest/extend/custom-rules

It is possible to write and test the rules directly in this project which provides unit tests.\
But it can be useful to prepare a test project to check the correct execution of the rules.

## Installation

1. Clone the Git repository
2. Run `yarn install` or `npm install` inside **eslint-plugin** directory\
   (depending on the Node.js package manager you use)
3. You are good to go! 🚀

## Create a rule

The file structure inside **eslint-plugin** package provides an ESLint-compliant project.\
So, the rule creation follows the recommended standards.

> It may be useful to take a look at rules already written to use the same structure and conventions.\
> Also please provide license header inside files with source code (there is an example inside file `lib/index.js`).

Example set of files to add a rule called **"my-awesome-rule"**:

- `lib/rules/my-awesome-rule.js`: main file with the rule metadata and algorithm
- `docs/rules/my-awesome-rule.md`: documentation file written in [Markdown](https://www.markdownguide.org/cheat-sheet/)
  to explain the rule
- `tests/lib/rules/my-awesome-rule.js`: testing file written
  using [ESLint RuleTester](https://eslint.org/docs/latest/integrate/nodejs-api#ruletester)

The project itself uses ESLint to helps linting rule algorithms.

### Test the rule

Rule tests also follow the ESLint standards and
use [ESLint RuleTester](https://eslint.org/docs/latest/integrate/nodejs-api#ruletester).\
They are executed with the [mocha](https://mochajs.org/) test framework.

Please add as many valid and invalid uses cases as necessary for a each rule.\
This will allow a large code coverage and avoid false positives.

Run the following script to start all test suites: `yarn run test`.

### Register the rule

After being created, the rule must be registered into `lib/index.js` file.\
To do so, the rule name has to be added in the array called **"rules"** (possibility in an alphabetically order).

### Generate rule documentation

A tool called [eslint-doc-generator](https://github.com/bmish/eslint-doc-generator) is used in the project to update
documentation of rules.\
It allows to update rule doc file and main README based on metadata of rules.

Two npm scripts are available:

- `yarn run lint:eslint-docs` to verify auto-updated data of rules in Markdown files
- `yarn run update:eslint-docs` to update Markdown files with data of rules

All the generated code is between commented lines with "auto-generated" in the text.
