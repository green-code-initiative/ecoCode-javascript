const assert = require("assert");

describe("index.js", () => {
  it("should export list of rule modules", () => {
    const { rules } = require("../../lib");
    assert.notEqual(Object.keys(rules).length, 0);
    const firstRuleName = Object.keys(rules)[0];
    assert.notEqual(rules[firstRuleName].meta, null);
  });

  it("should export all rules in recommended configuration", () => {
    const { configs, rules } = require("../../lib");
    const recommended = configs.recommended;
    assert.notEqual(recommended, null);
    assert.equal(recommended.plugins.length, 1);
    assert.equal(recommended.plugins[0], "@ecocode");
    assert.equal(recommended.rules.length, rules.length);
  });
});
