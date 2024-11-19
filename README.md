![Logo](https://github.com/green-code-initiative/ecoCode/blob/main/docs/resources/logo-large.png?raw=true)

Websites are becoming increasingly heavy and complex over the years. They represent an important part
of the digital environmental footprint. The objective of this project is to detect smells in a website source code
that can have a negative ecological impact: overconsumption of energy, "fatware", shortening of the life span of
devices, etc. This project is part of [Creedengo](https://github.com/green-code-initiative/ecoCode) (previously ecoCode).

Rules in this repository are mainly based from book
[115 Web Ecodesign Best Practices](https://github.com/cnumr/best-practices).
This reference is maintained by [CNumR](https://collectif.greenit.fr/), a french collective that works
for a responsible design of digital services. You can find all applicable rules in the [RULES.md file](RULES.md).

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![CI](https://github.com/green-code-initiative/creedengo-javascript/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/green-code-initiative/creedengo-javascript/actions/workflows/ci.yml)
[![Sonar Quality gate](https://img.shields.io/sonar/quality_gate/green-code-initiative_ecoCode-linter?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/project/overview?id=green-code-initiative_ecoCode-linter)

## 🌿 SonarQube plugin

_Creedengo_ JavaScript is an "eco-responsibility" static code analyzer for projects based on the JavaScript ecosystem. It
can handle JavaScript, TypeScript and all frameworks that use them. Its main purpose is to work with website source
code, but it can also analyze back-end code.

This project proposes rules for the following technologies:

- JavaScript
- TypeScript
- NestJS
- React (JSX)
- React Native / Expo

## 🔧 ESLint plugin

This project uses an internal ESLint plugin to analyze your source code.

If you are not using SonarQube, we have a solution for you: the linter is working nicely on its own! \
Follow instructions in the [dedicated README file](eslint-plugin/README.md) to use it as a standalone plugin.

## 🛒 Distribution

[![sonar-plugin version](https://img.shields.io/github/v/release/green-code-initiative/creedengo-javascript?label=SonarQube%20plugin)](https://github.com/green-code-initiative/creedengo-javascript/releases/latest)
[![eslint-plugin version](https://img.shields.io/npm/v/@creedengo/eslint-plugin?label=ESLint%20plugin)](https://npmjs.com/package/@creedengo/eslint-plugin)

**The plugin is available from the official SonarQube marketplace! Check the
[version matrix here](https://docs.sonarsource.com/sonarqube/latest/instance-administration/plugin-version-matrix/).**

Ready to use binaries for SonarQube are also
available [from GitHub](https://github.com/green-code-initiative/creedengo-javascript/releases). \
Make sure to place the binary inside `extensions/plugins/` folder of your SonarQube instance.

The standalone version of the ESLint plugin is available from [npmjs](https://npmjs.com/package/@creedengo/eslint-plugin).

## 🧩 Compatibility

| Plugins Version | SonarQube version | ESLint version |
| --------------- | ----------------- | -------------- |
| 1.4.+, 1.5.+    | 9.9.+ LTA to 10.7 | 7+             |

## 🤝 Contribution

You have an idea or you want to help us improving this project? \
We are open to your suggestions and contributions! Open an issue or PR 🚀

Check out the [CONTRIBUTING.md](CONTRIBUTING.md) file
and follow the various guides to start contributing.

Thank you to all the people who already contributed to creedengo-javascript!

- Elise Dubillot
- Laetitia Bézie
