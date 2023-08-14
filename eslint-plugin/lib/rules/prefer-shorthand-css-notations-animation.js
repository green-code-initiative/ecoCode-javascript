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

          // To prevent <div style={{ animationName: 'fade-in', animationDuration: '2s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDirection: 'alternate', animationFillMode: 'both', animationPlayState: 'running' }}>
          const animationNameProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "animationName",
          );
          const animationDurationProp =
            styleProp.value.expression.properties.find(
              (prop) => prop.key.name === "animationDuration",
            );

          if (animationDurationProp && animationNameProp) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "animation",
                value: `animation: animationNameProp animationDuration animationTimingFunction animationDelay animationIterationCount animationDirection animationFillMode animationPlayState`,
              },
            });
          }
          // To prevent <div style={{ transitionProperty: 'opacity', transitionDuration: '0.3s', transitionTimingFunction: 'ease-in-out', animationDelay: '1s' }}>
          const transitionPropertyProp =
            styleProp.value.expression.properties.find(
              (prop) => prop.key.name === "transitionProperty",
            );
          const transitionDurationProp =
            styleProp.value.expression.properties.find(
              (prop) => prop.key.name === "transitionDuration",
            );
          if (transitionDurationProp && transitionPropertyProp) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "transition",
                value: `transition: transitionProperty transitionDuration transitionTimingFunction transitionDelay`,
              },
            });
          }
          // To prevent <div style={{ offsetPath: 'path', offsetPosition: '50px', offsetDistance: '10%', offsetRotate: '45deg', offsetAnchor: 'auto' }}>
          const offsetPathProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "offsetPath",
          );
          const offsetPositionProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "offsetPosition",
          );

          if (offsetPathProp && offsetPositionProp) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "offset",
                value: `offset: offsetPosition offsetPath offsetDistance offsetRotate offsetAnchor`,
              },
            });
          }
        }
      },
    };
  },
};
