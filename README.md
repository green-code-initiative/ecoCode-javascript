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

> ⚠️ These plugins are in a very early stage and need improvements. Any contribution will be appreciated.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://github.com/green-code-initiative/ecoCode-common/blob/main/doc/CODE_OF_CONDUCT.md)
[![Sonar Quality gate](https://img.shields.io/sonar/quality_gate/green-code-initiative_ecoCode-linter?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/project/overview?id=green-code-initiative_ecoCode-linter)

📣 Why linters?
----------------

This repository contains multiple linters that each support a different set of programming languages. They are separated
from each other and are designed primarily to analyze static code that the SonarQube scanner cannot process. They can
however be used, modified and published independently of our ecoCode plugins.

The purpose of these linters is twofold: to allow code smells to be found as soon as it is written using standard
techonologies, and also to trace these reports back into SonarQube. This way we can make up for a SonarQube lack by
improving feedback to developers. It's a good deal! And the use is not more complex.

🌿 Use with our SonarQube plugins
---------------------------------

Linters in this repository are primally designed to work with our SonarQube plugins.\
Check one of the guides below to install a SonarQube plugin and its associated linter:

- [JavaScript plugin guide](https://github.com/green-code-initiative/ecoCode/blob/main/javascript-plugin/README.md)
- More to come..

🔧 Use as standalone linters
----------------------------

If you don't want to integrate rules into SonarQube, you are free to do so.\
Plugins are working nicely on their own! Follow instructions in the dedicated README files.

- [JavaScript/TypeScript linter using ESLint](eslint-plugin/README.md)
- More to come..

🛒 Distribution
---------------

SonarQube plugins can be downloaded from _ecoCode_ repository.\
Linters are available as dedicated NPM packages.

| SonarQube plugin                     | Linter name                                       | Latest version                                                                                                                    |
|:-------------------------------------|:--------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------|
| [JavaScript][ecoCode-latest-release] | [@ecocode/eslint-plugin](eslint-plugin/README.md) | [![eslint-plugin version](https://img.shields.io/npm/v/@ecocode/eslint-plugin)](https://npmjs.com/package/@ecocode/eslint-plugin) |

You can follow changelogs on [GitHub Releases page](https://github.com/green-code-initiative/ecoCode-linter/releases).

🤝 Contribution
---------------

You have an idea or you want to help us improving these linters? \
We are open to your suggestions and contributions! Open an issue or PR 🚀

Check out the [CONTRIBUTING.md](CONTRIBUTING.md) file
and follow the various guides to start contributing.

[ecoCode-latest-release]: https://github.com/green-code-initiative/ecoCode/releases/latest
