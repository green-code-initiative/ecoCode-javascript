const assert = require("assert");

describe("rule-list.js", () => {
  it("should export list of valid rule modules", () => {
    const rules = require("../../lib/rule-list");
    assert.notEqual(rules.length, 0);
    const firstRule = rules[0];
    assert.notEqual(firstRule.ruleName, null);
    assert.notEqual(firstRule.ruleModule, null);
  });
});
