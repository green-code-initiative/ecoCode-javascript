/*
 * creedengo JavaScript plugin - Provides rules to reduce the environmental footprint of your JavaScript programs
 * Copyright © 2023 Green Code Initiative (https://green-code-initiative.org)
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

const fs = require("fs");
const path = require("path");

const rules = [];
const rulesDirectory = path.resolve(__dirname, "rules");

fs.readdirSync(rulesDirectory).forEach((file) => {
  const ruleName = path.parse(file).name;
  const ruleModule = require(path.join(rulesDirectory, ruleName));

  if (ruleModule != null) {
    rules.push({ ruleName, ruleModule });
  }
});

module.exports = rules;
