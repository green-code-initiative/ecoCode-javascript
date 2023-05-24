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
 * @fileoverview JavaScript linter of ecoCode project
 * @author Green Code Initiative
 */
"use strict";

const fs = require("fs");
const path = require("path");

const ruleModules = {};
const configs = { recommended: { plugins: ["@ecocode"], rules: {} } };

const rulesDirectory = path.resolve(__dirname, "rules");
fs.readdirSync(rulesDirectory).forEach((file) => {
  const ruleName = path.parse(file).name;
  const resolvedRule = require(path.join(rulesDirectory, ruleName));

  if (resolvedRule != null) {
    ruleModules[ruleName] = resolvedRule;
    const {
      meta: {
        docs: { recommended },
      },
    } = ruleModules[ruleName];
    configs.recommended.rules[`@ecocode/${ruleName}`] =
      recommended === false ? "off" : recommended;
  }
});

module.exports = { rules: ruleModules, configs };
