# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- [#22](https://github.com/green-code-initiative/ecoCode-javascript/pull/22) Add rule `@ecocode/provide-print-css`
- [#19](https://github.com/green-code-initiative/ecoCode-javascript/pull/19) add rule `@ecocode/no-empty-image-src-attribute`
- [#18](https://github.com/green-code-initiative/ecoCode-javascript/pull/18) add rule `@ecocode/limit-db-query-results`
- [#14](https://github.com/green-code-initiative/ecoCode-javascript/pull/14) Create SonarQube plugin
- [#12](https://github.com/green-code-initiative/ecoCode-javascript/issues/12) Pack ESLint plugin into SonarQube plugin
- [#16](https://github.com/green-code-initiative/ecoCode-javascript/pull/16) Use centralized rules specifications
- Backport all existing rules into SonarQube plugin
- [#207](https://github.com/green-code-initiative/ecoCode/issues/207) Add release tag analyzis on SonarCloud

### Changed

- Update release process through GitHub Actions

## [0.2.0] - 2023-05-29

### Added

-   Add support for TypeScript rules with **typescript-eslint**
-   Add rule `@ecocode/avoid-high-accuracy-geolocation`
-   Add rule `@ecocode/no-import-all-from-library`
-   Add rule `@ecocode/no-multiple-style-changes`
-   Add rule `@ecocode/prefer-collections-with-pagination`

## [0.1.0] - 2023-03-24

### Added

-   First alpha version of the ESLint plugin 🚀
-   Add rule `@ecocode/no-multiple-access-dom-element`
-   Create tooling script to generate SonarQube rules
-   Setup mocha and nyc for tests and coverage
-   Setup basic coding style tools
-   Write complete contributing guide

[Unreleased]: https://github.com/green-code-initiative/ecoCode-linter/compare/eslint-plugin/0.2.0...HEAD

[0.2.0]: https://github.com/green-code-initiative/ecoCode-linter/compare/eslint-plugin/0.1.0...eslint-plugin/0.2.0

[0.1.0]: https://github.com/green-code-initiative/ecoCode-linter/compare/6d305511db82bf8faa4833528641535e605dbacf...eslint-plugin/0.1.0
