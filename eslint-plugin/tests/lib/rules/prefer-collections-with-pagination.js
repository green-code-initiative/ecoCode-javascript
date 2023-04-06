const { ESLintUtils } = require("@typescript-eslint/utils");
const rule = require("../../../lib/rules/prefer-collections-with-pagination");

const ruleTester = new ESLintUtils.RuleTester({
  parser: "@typescript-eslint/parser",
});

ruleTester.run("prefer-collections-with-pagination", rule, {
  valid: [
    // `
    // @Controller()
    // public class Test {
    //     @Get()
    //     public find(): Page {}
    // }
    // `,
    `
    @Controller()
    public class Test {
        @Get()
        public find(): Promise<Pagination> {}
    }
    `,
    // `
    // @Controller()
    // public class Test {
    //     @Get()
    //     public find(): Promise<{items: string[], currentPage: number, totalPages: number}> {}
    // }
    // `,
  ],
  invalid: [
    // `
    // @Controller()
    // public class Test {
    //     @Get()
    //     public find(): Promise<string[]> {}
    // }
    // `,
    // `
    // @Controller()
    // public class Test {
    //     @Get()
    //     public find(): string[] {}
    // }
    // `,
    // `
    // @Controller()
    // public class Test {
    //     @Get()
    //     public find(): Promise<{items: string[]}> {}
    // }
    // `,
  ],
});
