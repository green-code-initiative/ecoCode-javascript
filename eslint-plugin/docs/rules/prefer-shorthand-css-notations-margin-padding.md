# Encourage usage of shorthand CSS notations (`@ecocode/prefer-shorthand-css-notations-margin-padding`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

⚠️This rule warns in the ✅ recommended config.

## Rule Details

This rule aims to encourage the use of shorthand CSS notations, especially for the following attributes: margin, padding

## Examples

Examples of **non-compliant** code for this rule:

```js
<div style={{ marginTop: 20, marginRight: 10, marginLeft: 8, marginBottom: 7 }}>
  {/* Your content here */}
</div>
```

Examples of **compliant** code for this rule:

```js
<div style={{ margin: "10px 3px 8px 5px" }}> {/* Your content here */} </div>
```

## Further reading

- [cnumr/best-practices/Use abbreviated CSS notations](https://github.com/cnumr/best-practices/blob/fc5a1f865bafb196e4775cce8835393751d40ed8/chapters/BP_026_en.md)
