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

"use strict";

/** @type {import("eslint").Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Avoid screen keep awake",
      category: "eco-design",
      recommended: "warn",
    },
    messages: {
      AvoidKeepAwake: "Avoid screen keep awake",
    },
    schema: [],
  },
  create: function (context) {
    return {
        Identifier(node){
        if (
          node?.name === "useKeepAwake" 
          && node?.parent.type === "CallExpression"
        ) {
          context.report({ node, messageId: "AvoidKeepAwake" });
        }
        else if (
          node?.name === "activateKeepAwake" 
          && node?.parent.type === "CallExpression"
        ) {
          context.report({ node, messageId: "AvoidKeepAwake" });
        }
      },
    };
  },
};
