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
      description: "Encourage usage of shorthand CSS notations",
      category: "eco-design",
      recommended: "warn",
    },
    messages: {
      PreferShorthandCSSNotation: `Avoid using multiple properties in CSS style {{attribute}} attribute. Use the following shorthand CSS notation for {{attribute}} instead: {{value}}`,
    },
    schema: [],
    severity: 1,
  },

  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.attributes.find((attr) => attr.name.name === "style")) {
          const styleProp = node.attributes.find(
            (attr) => attr.name.name === "style",
          );

          // To prevent <div style={{ marginTop: 10, marginBottom: 8, marginRight:3, marginLeft:5 }}>
          const marginTopProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "marginTop",
          );

          const marginBottomProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "marginBottom",
          );

          const marginRightProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "marginRight",
          );

          const marginLeftProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "marginLeft",
          );

          if (
            marginTopProp &&
            marginBottomProp &&
            marginRightProp &&
            marginLeftProp
          ) {
            if (marginLeftProp.value.value === marginRightProp.value.value) {
              if (marginTopProp.value.value === marginBottomProp.value.value) {
                context.report({
                  node: styleProp,
                  messageId: "PreferShorthandCSSNotation",
                  data: {
                    attribute: "margin",
                    value: `margin: ${marginTopProp.value.value} ${marginRightProp.value.value}`,
                  },
                });
                return;
              } else {
                context.report({
                  node: styleProp,
                  messageId: "PreferShorthandCSSNotation",
                  data: {
                    attribute: "margin",
                    value: `margin: ${marginTopProp.value.value} ${marginRightProp.value.value} ${marginBottomProp.value.value}`,
                  },
                });
                return;
              }
            } else {
              context.report({
                node: styleProp,
                messageId: "PreferShorthandCSSNotation",
                data: {
                  attribute: "margin",
                  value: `margin: ${marginTopProp.value.value} ${marginRightProp.value.value} ${marginBottomProp.value.value} ${marginLeftProp.value.value}`,
                },
              });
            }
          }

          // To prevent <div style={{ paddingTop: 10, paddingBottom: 8, paddingRight:3, paddingLeft:5 }}>
          const paddingTopProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "paddingTop",
          );

          const paddingBottomProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "paddingBottom",
          );

          const paddingRightProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "paddingRight",
          );

          const paddingLeftProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "paddingLeft",
          );

          if (
            paddingTopProp &&
            paddingBottomProp &&
            paddingRightProp &&
            paddingLeftProp
          ) {
            if (paddingLeftProp.value.value === paddingRightProp.value.value) {
              if (
                paddingTopProp.value.value === paddingBottomProp.value.value
              ) {
                context.report({
                  node: styleProp,
                  messageId: "PreferShorthandCSSNotation",
                  data: {
                    attribute: "padding",
                    value: `padding: ${paddingTopProp.value.value} ${paddingRightProp.value.value}`,
                  },
                });
                return;
              } else {
                context.report({
                  node: styleProp,
                  messageId: "PreferShorthandCSSNotation",
                  data: {
                    attribute: "padding",
                    value: `padding: ${paddingTopProp.value.value} ${paddingRightProp.value.value} ${paddingBottomProp.value.value}`,
                  },
                });
                return;
              }
            } else {
              context.report({
                node: styleProp,
                messageId: "PreferShorthandCSSNotation",
                data: {
                  attribute: "padding",
                  value: `padding: ${paddingTopProp.value.value} ${paddingRightProp.value.value} ${paddingBottomProp.value.value} ${paddingLeftProp.value.value}`,
                },
              });
            }
          }
        }
      },
    };
  },
};
