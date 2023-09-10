# Enforce providing a print stylesheet (`@ecocode/provide-print-css`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Rule Details

This rule aims to remind developers to use CSS print to limit the number of pages printed therefore indirectly reducing
the impact of the web page.

## Examples

Examples of **non-compliant** code for this rule:

```html
<head>
  <title>Web Page</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
```

Examples of **compliant** code for this rule:

```html
<head>
  <title>Web Page</title>
  <link rel="stylesheet" media="print" type="text/css" href="print.css" />
</head>
```

```html
<head>
  <title>Web Page</title>
  <style>
    @media print {
      /* Print-specific styles */
    }
  </style>
</head>
```

## Further details

This recommendation is made by the
CNUMR: [Provide a print CSS](https://github.com/cnumr/best-practices/blob/main/chapters/BP_027_en.md)
