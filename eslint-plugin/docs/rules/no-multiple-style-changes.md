# Disallow multiple style changes at once (`@ecocode/no-multiple-style-changes`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Rule Details

This rule aims to batch multiple style changes at once.

To limit the number of repaint/reflow, it is advised to batch style modifications by adding a
class containing all style changes that will generate a unique reflow.

## Examples

Examples of **non-compliant** code for this rule:

```html
<script>
  element.style.height = "800px";
  element.style.width = "600px";
  element.style.color = "red";
</script>
```

Examples of **compliant** code for this rule:

```html
<style>
  .in-error {
    color: red;
    height: 800px;
    width: 800px;
  }
</style>

<script>
  element.addClass("in-error");
</script>
```
