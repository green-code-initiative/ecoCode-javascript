/*
 * ecoCode JavaScript plugin - Provides rules to reduce the environmental footprint of your JavaScript programs
 * Copyright © 2023 Green Code Initiative (https://www.ecocode.io)
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

/**
 * @fileoverview JavaScript linter of ecoCode project (standalone mode)
 * @author Green Code Initiative
 */
"use strict";

const rulesList = require("./rule-list");

const allRules = {};
const recommendedRules = {};

for (let { ruleName, ruleModule } of rulesList) {
  allRules[ruleName] = ruleModule;
  const { recommended } = ruleModule.meta.docs;
  const ruleConfiguration = recommended === false ? "off" : recommended;
  recommendedRules[`@ecocode/${ruleName}`] = ruleConfiguration;
}

const plugin = {
  meta: {
    name: "@ecocode/eslint-plugin",
    version: "1.6.0",
  },
  rules: allRules,
};

plugin.configs = {
  recommended: {
    plugins: ["@ecocode"],
    rules: recommendedRules,
  },
  ["flat/recommended"]: {
    plugins: { "@ecocode": plugin },
    rules: recommendedRules,
  },
};

module.exports = plugin;
