# Encourage usage of shorthand CSS notations (`@ecocode/prefer-shorthand-css-notations`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Rule Details

This rule aims to encourage use of shorthand CSS notations, especially for the following attributes: background, font, border, margin, outline, padding and list to reduce the size of the stylesheet. This rule is build for the [react library](https://react.dev/) and JSX.

Examples of **non compliant** code for this rule:

```js
<div style={{marginTop:10, marginBottom:10, marginLeft:5, marginRight:5}}/>
<div style={{backgroundColor:'#000', backgroundImage: url(images/bg.png), backgroundRepeat: 'no-repeat', backgroundPosition:'left top'}}/>
```

Examples of **compliant** code for this rule:

```js
<div style={{background:'#000 url(images/bg.png) no-repeat left top'}}/>
<div style={{margin: '10px 5px 10px 5px'}}/>
```
