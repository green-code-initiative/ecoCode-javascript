# Enforce providing a print stylesheet (`@ecocode/provide-print-css`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Rule Details

This rule aims to remind developers to use CSS print to limit the number of pages printed therefore indirectly reducing the impact of the web page.

## Examples

Examples of **non-compliant** code for this rule:

```js
<link rel="stylesheet" type="text/css" href="styles.css">
```

Examples of **compliant** code for this rule:

```js
<style>
    @media print {
      /* Print-specific styles */
    }
</style>
```
