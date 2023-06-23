# JavaScript-specific Rules

### Common

| #   | ESLint key                          | Rule Name                  | Observation |
|-----|-------------------------------------|----------------------------|-------------|
| EC9 | @ecocode/no-import-all-from-library | No import all from library |             |

### Front-end

| #    | ESLint key                               | Rule Name                                         | Observation |
|------|------------------------------------------|---------------------------------------------------|-------------|
| EC8  | @ecocode/avoid-high-accuracy-geolocation | Avoid using high accuracy geolocation             |             |
| EC11 | @ecocode/no-multiple-access-dom-element  | Call a DOM element multiple times without caching |             |
| EC12 | @ecocode/no-multiple-style-changes       | Modify several CSS properties all at once         |             |

### Back-end

| #    | ESLint key                                  | Rule Name                              | Observation             |
|------|---------------------------------------------|----------------------------------------|-------------------------|
| EC13 | @ecocode/prefer-collections-with-pagination | Prefer API collections with pagination | for NestJS (TypeScript) |
