# JavaScript-specific Rules

### Common

| #   | ESLint key                          | Rule Name                  | Observation |
|-----|-------------------------------------|----------------------------|-------------|
| EC9 | @ecocode/no-import-all-from-library | No import all from library | x           |

### Front-end

| #    | ESLint key                               | Rule Name                                         | Observation |
|------|------------------------------------------|---------------------------------------------------|-------------|
| EC8  | @ecocode/avoid-high-accuracy-geolocation | Avoid using high accuracy geolocation             | x           |
| EC11 | @ecocode/no-multiple-access-dom-element  | Call a DOM element multiple times without caching |             |
| EC12 | @ecocode/no-multiple-style-changes       | Modify several CSS properties all at once         | x           |
| EC25 | @ecocode/no-empty-image-src-attribute    | Do not use an image with empty source attribute   |             |
| EC26 | @ecocode/prefer-shorthand-css-notations  | Prefer shorthand CSS notations                    | x           |
| EC29 | @ecocode/avoid-css-animations            | Avoid usage of CSS animations                     | x           |
| EC30 | @ecocode/provide-print-css               | Provide a print stylesheet                        | x           |

### Back-end

| #    | ESLint key                                  | Rule Name                                   | Observation             |
|------|---------------------------------------------|---------------------------------------------|-------------------------|
| EC13 | @ecocode/prefer-collections-with-pagination | Prefer API collections with pagination      | for NestJS (TypeScript) |x
| EC24 | @ecocode/limit-db-query-results             | Limit the number of returns for a SQL query |                         |
