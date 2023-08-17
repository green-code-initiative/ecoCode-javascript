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
"use strict";

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Avoid usage of CSS animations",
      category: "eco-design",
      recommended: "warn",
    },
    messages: {
      AvoidCSSAnimations: "Avoid using {{attribute}} in CSS.",
    },
    schema: [],
  },

  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.attributes.find((attr) => attr.name.name === "style")) {
          const styleProp = node.attributes.find(
            (attr) => attr.name.name === "style",
          );

          // To prevent (for example) <div style={{ transform: rotate(30deg) }}>
          const transformValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name.includes("transition") ||
              prop.key.name.includes("animation"),
          );
          if (transformValue && transformValue.value) {
            context.report({
              node: transformValue,
              messageId: "AvoidCSSAnimations",
              data: {
                attribute: transformValue.key.name,
              },
            });
          }
        }
      },
    };
  },
};
