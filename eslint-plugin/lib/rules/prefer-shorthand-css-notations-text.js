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

          // To prevent <h1 style={{fontStyle:'italic', fontWeight: 'bold', fontSize:18, lineHeight:'150%', fontFamily: 'Arial,sans-serif'}}/>
          const fontSizeProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "fontSize",
          );

          const fontStyleProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "fontStyle",
          );

          if (fontSizeProp && fontStyleProp) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "font",
                value: `font: fontStyle fontWeight fontSize lineHeight fontFamily`,
              },
            });
          }

          // To prevent <div style={{ textDecorationStyle: 'solid', textDecorationColor: '#f00', textDecorationLine: 'underline' }}>
          const textDecorationValue =
            styleProp.value.expression.properties.find(
              (prop) =>
                prop.key.name === "textDecorationStyle" ||
                prop.key.name === "textDecorationColor" ||
                prop.key.name === "textDecorationLine",
            );
          if (textDecorationValue && textDecorationValue.value) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "textDecoration",
                value: `textDecoration: textDecorationLine textDecorationStyle textDecorationColor`,
              },
            });
          }
        }
      },
    };
  },
};
