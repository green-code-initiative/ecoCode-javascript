# Encourage usage of shorthand CSS notations (`@ecocode/prefer-shorthand-css-notations`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Rule Details

This rule aims to encourage the use of shorthand CSS notations to reduce stylesheets size.

## Options

You can disable specific properties from being scanned if it does not match your needs.
To disable properties you need to modify your .eslintrc.js by adding the following rule configuration:

```js
module.exports = {
  ...yourConf,
  rules: {
    "prefer-shorthand-css-notations": [
      "warn",
      // disable analyze of "animation-*" properties
      { disableProperties: ["animation"] },
    ],
  },
};
```

## Examples

Examples of **non-compliant** code for this rule:

```js
<div
  style={{
    marginTop: "1em",
    marginRight: 0,
    marginBottom: "2em",
    marginLeft: "0.5em",
  }}
>
  {/* Your content here */}
</div>
```

```js
<div
  style={{
    transitionProperty: "width",
    transitionDuration: "35s",
    transitionTimingFunction: "ease-in-out",
    transitionDelay: "0s",
  }}
>
  {/* Your content here */}
</div>
```

Examples of **compliant** code for this rule:

```js
<div style={{ margin: "1em 0 2em 0.5em" }}>{/* Your content here */}</div>
```

```js
<div style={{ transition: "width 35s ease-in-out 0s" }}>
  {/* Your content here */}
</div>
```

## Further reading

- [cnumr/best-practices/Use abbreviated CSS notations](https://github.com/cnumr/best-practices/blob/fc5a1f865bafb196e4775cce8835393751d40ed8/chapters/BP_026_en.md)
