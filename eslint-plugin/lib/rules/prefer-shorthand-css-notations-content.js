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
          // To prevent <div style={{outlineWidth:1, outlineStyle: 'solid', outlineColor: '#000000'}}/>
          const outlineValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "outlineStyle" ||
              prop.key.name === "outlineWidth" ||
              prop.key.name === "outlineColor",
          );
          if (outlineValue && outlineValue.value) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "outline",
                value: `outline: outlineColor outlineStyle outlineWidth`,
              },
            });
          }

          // To prevent <div style={{borderWidth:1, borderStyle: 'solid', borderColor: '#000000'}}/>
          const borderValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "borderStyle" ||
              prop.key.name === "borderWidth" ||
              prop.key.name === "borderColor",
          );
          if (borderValue && borderValue.value) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "border",
                value: `border: lineWidth lineStyle color`,
              },
            });
          }

          // To prevent <div style={{backgroundColor:'#000', backgroundImage: url(images/bg.png), backgroundRepeat: 'no-repeat', backgroundPosition:'left top'}}/>
          const backgroundValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "backgroundColor" ||
              prop.key.name === "backgroundImage" ||
              prop.key.name === "backgroundRepeat" ||
              prop.key.name === "backgroundPosition",
          );
          if (backgroundValue && backgroundValue.value) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "background",
                value: `background: backgroundImage backgroundPosition backgroundColor backgroundRepeat`,
              },
            });
          }

          // To prevent <ul style={{listStyleType:'disc', listStylePosition: 'inside', listStyleImage: 'url(disc.png)'}}/>
          const listValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "listStyleType" ||
              prop.key.name === "listStylePosition" ||
              prop.key.name === "listStyleImage",
          );
          if (listValue && listValue.value) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "listStyle",
                value: `listStyle: listStylePosition listStyleImage listStyleType`,
              },
            });
          }
        }
      },
    };
  },
};
