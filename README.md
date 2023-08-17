![Logo](https://github.com/green-code-initiative/ecoCode/blob/main/docs/resources/logo-large.png?raw=true)
======================================

Websites are becoming increasingly heavy and complex over the years. They represent an important part
of the digital environmental footprint. The objective of this project is to detect smells in a website source code
that can have a negative ecological impact: overconsumption of energy, "fatware", shortening of the life span of
devices, etc. This project is part of [ecoCode](https://github.com/green-code-initiative/ecoCode).

Rules in this repository are mainly based from book
[115 Web Ecodesign Best Practices](https://github.com/cnumr/best-practices).
This reference is maintained by [CNumR](https://collectif.greenit.fr/), a french collective that works
for a responsible design of digital services. You can find all applicable rules in
the [main ecoCode repository](https://github.com/green-code-initiative/ecoCode/tree/main/docs/rules).

> ⚠️ This project is still in testing stage and need improvements. Any contribution will be appreciated.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![Build](https://github.com/green-code-initiative/ecoCode-javascript/actions/workflows/build.yml/badge.svg)
[![Sonar Quality gate](https://img.shields.io/sonar/quality_gate/green-code-initiative_ecoCode-linter?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/project/overview?id=green-code-initiative_ecoCode-linter)

🌿 SonarQube plugin
---------------------------------

_ecoCode_ JavaScript is an "eco-responsibility" static code analyzer for projects based on the JavaScript ecosystem. It
can handle JavaScript, TypeScript and all frameworks that use them. Its main purpose is to work with website source
code, but it can also analyze back-end code.

This project proposes rules for the following technologies:

- JavaScript
- TypeScript
- NestJS
- React (JSX)

🔧 ESLint plugin
----------------

This project uses an internal ESLint plugin to analyze your source code.

If you are not using SonarQube, we have a solution for you: the linter is working nicely on its own! \
Follow instructions in the [dedicated README file](eslint-plugin/README.md) to use it as a standalone plugin.

🛒 Distribution
---------------

[![sonar-plugin version](https://img.shields.io/github/v/release/green-code-initiative/ecoCode-javascript?label=SonarQube%20plugin)](https://github.com/green-code-initiative/ecoCode-javascript/releases/latest)
[![eslint-plugin version](https://img.shields.io/npm/v/@ecocode/eslint-plugin?label=ESLint%20plugin)](https://npmjs.com/package/@ecocode/eslint-plugin)

Ready to use binaries for SonarQube are
available [from GitHub](https://github.com/green-code-initiative/ecoCode-javascript/releases). \
Make sure to place the binary inside `extensions/plugins/` folder of your SonarQube instance.

The standalone version of the ESLint plugin is available from [npmjs](https://npmjs.com/package/@ecocode/eslint-plugin).

🧩 Compatibility
----------------

| Plugins Version | SonarQube version | ESLint version |
|-----------------|-------------------|----------------|
| 1.4.+           | 9.4.+ LTS to 10.1 | 7+             |

🤝 Contribution
---------------

You have an idea or you want to help us improving this project? \
We are open to your suggestions and contributions! Open an issue or PR 🚀

Check out the [CONTRIBUTING.md](CONTRIBUTING.md) file
and follow the various guides to start contributing.

Thank you to all the people who already contributed to ecoCode-javascript!

- Elise Dubillot
- Laetitia Bézie
