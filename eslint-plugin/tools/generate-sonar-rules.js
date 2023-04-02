/**
 * Copyright (C) 2023 Green Code Initiative
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * @fileoverview Generates the rules file to be imported into Sonar
 * @author Green Code Initiative
 */
"use strict";

const { readFileSync, writeFileSync } = require("fs");
const { sep } = require("path");
const { marked } = require("marked");
const { rules, configs } = require("../lib/index");

const DEFAULT_CONSTANT_DEBT_MINUTES = 5;
const DEFAULT_SEVERITY = "MINOR";
const DEFAULT_TYPE = "CODE_SMELL";

const DOCUMENTATION_PATH = "docs/rules/";
const DOCUMENTATION_SEPARATOR = "<!-- end auto-generated rule header -->";
const OUTPUT_FILE = `${__dirname}${sep}generated-rules.json`;
const PLUGIN_NAME = configs.recommended.plugins[0];
const REPO_BLOB_URL =
  "https://github.com/green-code-initiative/ecoCode-linter/blob/main/eslint-plugin/";

/**
 * Retrieves documentation of a rule from its Markdown file.
 * Also converts Markdown to HTML to display it in SonarQube interface.
 *
 * @param ruleName name of rule to retrieve documentation
 * @return HTML documentation of the rule
 */
const retrieveDocumentation = (ruleName) => {
  const markdownDoc = readFileSync(
    `${__dirname}/../${DOCUMENTATION_PATH}${ruleName}.md`,
    "utf8"
  );
  const htmlDoc = marked.parse(markdownDoc);
  const htmlParts = htmlDoc.split(DOCUMENTATION_SEPARATOR);
  const content = htmlParts.length > 1 ? htmlParts[1] : htmlParts[0];
  const livingDocUrl = REPO_BLOB_URL + DOCUMENTATION_PATH + ruleName + ".md";
  return `${content}<br/><a href="${livingDocUrl}">Click here to access the rule details.</a>`;
};

// Browse all exported rules to create their Sonar equivalent.
const sonarRules = Object.entries(rules).map(([ruleName, rule]) => ({
  key: `${PLUGIN_NAME}/${ruleName}`,
  type: DEFAULT_TYPE,
  name: rule.meta.docs.description.replace(/.$/, ""),
  description: retrieveDocumentation(ruleName),
  constantDebtMinutes:
    rule.meta.docs.constantDebtMinutes != null
      ? rule.meta.docs.constantDebtMinutes
      : DEFAULT_CONSTANT_DEBT_MINUTES,
  severity:
    rule.meta.docs.severity != null
      ? rule.meta.docs.severity
      : DEFAULT_SEVERITY,
  tags: [rule.meta.docs.category, "ecocode"],
}));

writeFileSync(OUTPUT_FILE, JSON.stringify(sonarRules, null, 2), {
  encoding: "utf8",
});

console.log(`Generated ${sonarRules.length} rules in ${OUTPUT_FILE}.`);
