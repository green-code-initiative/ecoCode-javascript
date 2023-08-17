# Avoid usage of CSS animations (`@ecocode/avoid-css-animations`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Rule Details

This rule aims to limit the usage of all types of CSS animations which can be very costly in terms of CPU and memory. 
They must only be used when they are indispensable and should be limited to the CSS properties `opacity` and `transform` with it's associated functions : `translate`, `rotate` and `scale`.
You can also inform the navigator of upcoming changes with the `will-change` instruction for more optimization.

## Examples
Examples of **non compliant** code for this rule:

```js
<div style={{borderWidth:1, borderStyle: 'solid', borderColor: '#000000', transform:'translate(20px)'}}/>
```

Examples of **compliant** code for this rule:

```js
<div style={{borderWidth:1, borderStyle: 'solid', borderColor: '#000000'}}/>
```
