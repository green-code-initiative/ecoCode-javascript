const assert = require("assert");

describe("sonar.js", () => {
  it("should export all rules with a specific rule id pattern", () => {
    const { rules } = require("../../lib/sonar");
    assert.notEqual(rules.length, 0);
    assert.match(rules[0].ruleId, /@ecocode\/.*/);
    assert.equal(rules[0].ruleConfig.length, 0);
  });
});
