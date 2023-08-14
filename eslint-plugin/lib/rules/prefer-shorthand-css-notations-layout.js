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

          // To prevent <div style={{ columnWidth: '100px', columnCount: 3 }}>
          const columnValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "columnWidth" ||
              prop.key.name === "columnCount",
          );
          if (columnValue && columnValue.value) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "column",
                value: `column: columnWidth columnCount`,
              },
            });
          }

          // To prevent <div style={{ flexGrow: 1, flexShrink: 0, flexBasis: 'auto' }}>
          const flexValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "flexGrow" ||
              prop.key.name === "flexShrink" ||
              prop.key.name === "flexBasis",
          );
          if (flexValue) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "flex",
                value: `flex: flexGrow flexShrink flexBasis`,
              },
            });
          }

          // To prevent <div style={{ gridTemplate: '1fr 2fr / 1fr 2fr', gridAutoFlow: 'row', gridAutoRows: 'minmax(100px, auto)', gridAutoColumns: '200px' }}>
          const gridTemplate = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "gridTemplateColumns" ||
              prop.key.name === "gridTemplateRows",
          );
          const gridAutoFlowValue = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "gridAutoFlow",
          );
          const gridAutoRowsValue = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "gridAutoRows",
          );
          const gridAutoColumnsValue =
            styleProp.value.expression.properties.find(
              (prop) => prop.key.name === "gridAutoColumns",
            );
          if (
            gridAutoColumnsValue &&
            gridAutoFlowValue &&
            gridAutoRowsValue &&
            gridTemplate
          ) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "grid",
                value: `grid: gridTemplate gridTemplateRows gridAutoColumns gridAutoRows gridTemplateColumns`,
              },
            });
          }

          // To prevent <div style={{ overflowX: 'hidden', overflowY: 'scroll' }}>
          const overflowValueX = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "overFlowX",
          );
          const overflowValueY = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "overFlowY",
          );
          if (overflowValueX && overflowValueY) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "overFlow",
                value: `overFlow: overflowValueX overflowValueY`,
              },
            });
          }

          // To prevent <div style={{ columnRuleWidth: '2px', columnRuleStyle: 'solid', columnRuleColor: '#ccc' }}>
          const columnRuleWidthProp =
            styleProp.value.expression.properties.find(
              (prop) => prop.key.name === "columnRuleWidth",
            );
          const columnRuleStyleProp =
            styleProp.value.expression.properties.find(
              (prop) => prop.key.name === "columnRuleStyle",
            );
          const columnRuleColorProp =
            styleProp.value.expression.properties.find(
              (prop) => prop.key.name === "columnRuleColor",
            );

          if (
            columnRuleColorProp &&
            columnRuleStyleProp &&
            columnRuleWidthProp
          ) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "columnRule",
                value: `columnRule: columnRuleWidth columnRuleStyle columnRuleColor`,
              },
            });
          }

          // To prevent <div style={{ alignContent: 'center', justifyContent: 'space-around' }}>
          const alignContentProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "alignContent",
          );
          if (alignContentProp) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "placeContent",
                value: `placeContent: alignContent justifyContent`,
              },
            });
          }

          // To prevent <div style={{ alignItems: 'flex-start', justifyItems: 'center' }}>
          const alignItemsProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "alignItems",
          );
          if (alignItemsProp) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "placeItems",
                value: `placeItems: alignItems justifyItems`,
              },
            });
          }

          // To prevent <div style={{ alignSelf: 'flex-end', justifySelf: 'center' }}>
          const alignSelfProp = styleProp.value.expression.properties.find(
            (prop) => prop.key.name === "alignSelf",
          );
          if (alignSelfProp) {
            context.report({
              node: styleProp,
              messageId: "PreferShorthandCSSNotation",
              data: {
                attribute: "placeSelf",
                value: `placeSelf: alignSelf justifySelf`,
              },
            });
          }
        }
      },
    };
  },
};
