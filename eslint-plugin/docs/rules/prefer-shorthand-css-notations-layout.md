# Encourage usage of shorthand CSS notations (`@ecocode/prefer-shorthand-css-notations-layout`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

⚠️This rule warns in the ✅ recommended config.

## Rule Details

This rule aims to encourage the use of shorthand CSS notations, especially for the following attributes: column, flex, grid, columnRule, placeContent, placeItems, placeSelf

## Examples

Examples of **non-compliant** code for this rule:

```js
<div style={{ alignSelf: "end", justifySelf: "stretch" }}>
  {/* Your content here */}
</div>
```

Examples of **compliant** code for this rule:

```js
<div style={{ placeSelf: "end stretch" }}> {/* Your content here */} </div>
```

## Further reading

- [cnumr/best-practices/Use abbreviated CSS notations](https://github.com/cnumr/best-practices/blob/fc5a1f865bafb196e4775cce8835393751d40ed8/chapters/BP_026_en.md)
