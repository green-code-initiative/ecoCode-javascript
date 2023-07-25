# Should limit the number of returns for a SQL query (`@ecocode/limit-db-query-results`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Rule Details

This rule aims at reducing CPU consumption by limiting the number of returns for a single SQL query.

## Examples

Examples of **non compliant** code for this rule:

```js
const query = "SELECT * FROM clients";
```

Examples of **compliant** code for this rule:

```js
const query = "SELECT columns FROM table_name FETCH FIRST number ROWS ONLY";
```
