# Prefer API collections with pagination (`@ecocode/prefer-collections-with-pagination`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Rule details

This rule aims to reduce the size and thus the network weight of API returns that may contain many elements. This rule
is built for the NestJS framework but can work with a controller @Controller() and a decorated method @Get().

## Examples

Examples of **incorrect** code for this rule:

```ts
@Controller()
class Test {
    @Get()
    public find(): Promise<string[]> {
    }
}
```

Examples of **correct** code for this rule:

```ts
interface Pagination {
    items: string[];
    currentPage: number;
    totalPages: number;
}

@Controller()
class Test {
    @Get()
    public find(): Promise<Pagination> {
    }
}
```
