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
      PreferShorthandCSSNotationMargin:
        "Avoid using multiple properties in CSS style margin attribute. Use the following shorthand CSS notation for margins instead: `margin: top_value right_value bottom_value left_value` or `margin: top-bottom_value right-left_value `",
      PreferShorthandCSSNotationPadding:
        "Avoid using multiple properties in CSS style padding attribute. Use the following shorthand CSS notation for paddings instead: `padding: top_value right_value bottom_value left_value` or `margin: top-bottom_value right-left_value` ",
      PreferShorthandCSSNotationOutline:
        "Avoid using multiple properties in CSS style outline attribute. Use the following shorthand CSS notation for paddings instead: `outline: width_value style_value color_value`",
      PreferShorthandCSSNotationBorder:
        "Avoid using multiple properties in CSS style border attribute. Use the following shorthand CSS notation for paddings instead: `border: width_value style_value color_value`",
      PreferShorthandCSSNotationFont:
        "Avoid using multiple properties in CSS style font attribute. Use the following shorthand CSS notation for paddings instead: `font: style_value weight_value size_value line-height_value font-family_value`",
      PreferShorthandCSSNotationBackground:
        "Avoid using multiple properties in CSS style background attribute. Use the following shorthand CSS notation for paddings instead: `background: color_value image_value repeat_value position_value`",
      PreferShorthandCSSNotationList:
        "Avoid using multiple properties in CSS style list attribute. Use the following shorthand CSS notation for paddings instead: `listStyle: type_value position_value image_value`",
      PreferShorthandCSSNotationAnimation:
        "Avoid using multiple properties in CSS style animation attribute. Use the following shorthand CSS notation for animations instead: `animation: duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name`",
      PreferShorthandCSSNotationTransition:
        "Avoid using multiple properties in CSS style transition attribute. Use the following shorthand CSS notation for transitions instead: `transition: property name | duration | easing function | delay`",
      PreferShorthandCSSNotationColumn:
        "Avoid using multiple properties in CSS style column attribute. Use the following shorthand CSS notation for columns instead: `column: count | width`",
      PreferShorthandCSSNotationFlex:
        "Avoid using multiple properties in CSS style flex attribute. Use the following shorthand CSS notation for flex instead: `flex: grow | shrink | basis`",
      PreferShorthandCSSNotationGrid:
        "Avoid using multiple properties in CSS style grid attribute. Use shorthand CSS notation for grid instead.",
      PreferShorthandCSSNotationOffset:
        "Avoid using multiple properties in CSS style offset attribute. Use shorthand CSS notation for offset instead: `offset: offset-path| offset-distance| offset-rotate`.",
      PreferShorthandCSSNotationOverflow:
        "Avoid using multiple properties in CSS style overflow attribute. Use shorthand CSS notation for offset instead: `overflow: overflow-x| overflow-y`.",
      PreferShorthandCSSNotationTextDecoration:
        "Avoid using multiple properties in CSS style text-decoration, attribute. Use shorthand CSS notation for text-decoration instead: `text-decoration: text-decoration-line| text-decoration-color|text-decoration-style |text-decoration-thickness`.",
      PreferShorthandCSSNotationColumnRule:
        "Avoid using multiple properties in CSS style column-rule attribute. Use shorthand CSS notation for column-rule instead: `column-rule: column-rule-style|column-rule-width |column-rule-color`.",
      PreferShorthandCSSNotationPlaceContent:
        "Avoid using multiple properties in CSS style place-content attribute. Use shorthand CSS notation for place-content instead: `place-content: align-content|justify-content`.",
      PreferShorthandCSSNotationPlaceItems:
        "Avoid using multiple properties in CSS style place-items attribute. Use shorthand CSS notation for place-items instead: `place-items: align-items|justify-items`.",
      PreferShorthandCSSNotationPlaceSelf:
        "Avoid using multiple properties in CSS style place-self attribute. Use shorthand CSS notation for place-self instead: `place-self: align-self|justify-self`.",
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

          // To prevent <div style={{ marginTop: 10, marginBottom: 8, marginRight:3, marginLeft:5 }}>
          const marginValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "marginTop" ||
              prop.key.name === "marginBottom" ||
              prop.key.name === "marginRight" ||
              prop.key.name === "marginLeft",
          );
          if (marginValue && marginValue.value) {
            context.report({
              node: marginValue,
              messageId: "PreferShorthandCSSNotationMargin",
            });
          }

          // To prevent <div style={{ paddingTop: 10, paddingBottom: 8, paddingRight:3, paddingLeft:5 }}>
          const paddingValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "paddingTop" ||
              prop.key.name === "paddingBottom" ||
              prop.key.name === "paddingRight" ||
              prop.key.name === "paddingLeft",
          );
          if (paddingValue && paddingValue.value) {
            context.report({
              node: paddingValue,
              messageId: "PreferShorthandCSSNotationPadding",
            });
          }

          // To prevent <div style={{outlineWidth:1, outlineStyle: 'solid', outlineColor: '#000000'}}/>
          const outlineValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "outlineStyle" ||
              prop.key.name === "outlineWidth" ||
              prop.key.name === "outlineColor",
          );
          if (outlineValue && outlineValue.value) {
            context.report({
              node: outlineValue,
              messageId: "PreferShorthandCSSNotationOutline",
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
              node: borderValue,
              messageId: "PreferShorthandCSSNotationBorder",
            });
          }

          // To prevent <h1 style={{fontStyle:'italic', fontWeight: 'bold', fontSize:18, lineHeight:'150%', fontFamily: 'Arial,sans-serif'}}/>
          const fontValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "fontStyle" ||
              prop.key.name === "fontSize" ||
              prop.key.name === "fontFamily" ||
              prop.key.name === "fontWeight" ||
              prop.key.name === "lineHeight",
          );
          if (fontValue && fontValue.value) {
            context.report({
              node: fontValue,
              messageId: "PreferShorthandCSSNotationFont",
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
              node: backgroundValue,
              messageId: "PreferShorthandCSSNotationBackground",
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
              node: listValue,
              messageId: "PreferShorthandCSSNotationList",
            });
          }
          // To prevent <div style={{ animationName: 'fade-in', animationDuration: '2s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDirection: 'alternate', animationFillMode: 'both', animationPlayState: 'running' }}>
          const animationValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "animationName" ||
              prop.key.name === "animationDuration" ||
              prop.key.name === "animationTimingFunction" ||
              prop.key.name === "animationIterationCount" ||
              prop.key.name === "animationDirection" ||
              prop.key.name === "animationFillMode" ||
              prop.key.name === "animationPlayState",
          );
          if (animationValue && animationValue.value) {
            context.report({
              node: animationValue,
              messageId: "PreferShorthandCSSNotationAnimation",
            });
          }
          // To prevent <div style={{ transitionProperty: 'opacity', transitionDuration: '0.3s', transitionTimingFunction: 'ease-in-out', animationDelay: '1s' }}>
          const transitionValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "transitionProperty" ||
              prop.key.name === "transitionDuration" ||
              prop.key.name === "transitionTimingFunction" ||
              prop.key.name === "animationDelay",
          );
          if (transitionValue && transitionValue.value) {
            context.report({
              node: transitionValue,
              messageId: "PreferShorthandCSSNotationTransition",
            });
          }
          // To prevent <div style={{ columnWidth: '100px', columnCount: 3 }}>
          const columnValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "columnWidth" ||
              prop.key.name === "columnCount",
          );
          if (columnValue && columnValue.value) {
            context.report({
              node: columnValue,
              messageId: "PreferShorthandCSSNotationColumn",
            });
          }
          // To prevent <div style={{ flexGrow: 1, flexShrink: 0, flexBasis: 'auto' }}>
          const flexValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "flexGrow" ||
              prop.key.name === "flexShrink" ||
              prop.key.name === "flexBasis",
          );
          if (flexValue && flexValue.value) {
            context.report({
              node: flexValue,
              messageId: "PreferShorthandCSSNotationFlex",
            });
          }
          // To prevent <div style={{ gridTemplate: '1fr 2fr / 1fr 2fr', gridAutoFlow: 'row', gridAutoRows: 'minmax(100px, auto)', gridAutoColumns: '200px' }}>
          const gridValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "gridTemplate" ||
              prop.key.name === "gridAutoFlow" ||
              prop.key.name === "gridAutoRows" ||
              prop.key.name === "gridAutoColumns",
          );
          if (gridValue && gridValue.value) {
            context.report({
              node: gridValue,
              messageId: "PreferShorthandCSSNotationGrid",
            });
          }
          // To prevent <div style={{ offsetPath: 'path', offsetPosition: '50px', offsetDistance: '10%', offsetRotate: '45deg', offsetAnchor: 'auto' }}>
          const offsetValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "offsetPath" ||
              prop.key.name === "offsetPosition" ||
              prop.key.name === "offsetDistance" ||
              prop.key.name === "offsetRotate" ||
              prop.key.name === "offsetAnchor",
          );
          if (offsetValue && offsetValue.value) {
            context.report({
              node: offsetValue,
              messageId: "PreferShorthandCSSNotationOffset",
            });
          }
          // To prevent <div style={{ overflowX: 'hidden', overflowY: 'scroll' }}>
          const overflowValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "overflowX" || prop.key.name === "overflowY",
          );
          if (overflowValue && overflowValue.value) {
            context.report({
              node: overflowValue,
              messageId: "PreferShorthandCSSNotationOverflow",
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
              node: textDecorationValue,
              messageId: "PreferShorthandCSSNotationTextDecoration",
            });
          }
          // To prevent <div style={{ columnRuleWidth: '2px', columnRuleStyle: 'solid', columnRuleColor: '#ccc' }}>
          const columnRuleValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "columnRuleWidth" ||
              prop.key.name === "columnRuleStyle" ||
              prop.key.name === "columnRuleColor",
          );
          if (columnRuleValue && columnRuleValue.value) {
            context.report({
              node: columnRuleValue,
              messageId: "PreferShorthandCSSNotationColumnRule",
            });
          }
          // To prevent <div style={{ alignContent: 'center', justifyContent: 'space-around' }}>
          const placeContentValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "alignContent" ||
              prop.key.name === "justifyContent",
          );
          if (placeContentValue && placeContentValue.value) {
            context.report({
              node: placeContentValue,
              messageId: "PreferShorthandCSSNotationPlaceContent",
            });
          }
          // To prevent <div style={{ alignItems: 'flex-start', justifyItems: 'center' }}>
          const placeItemsValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "alignItems" ||
              prop.key.name === "justifyItems",
          );
          if (placeItemsValue && placeItemsValue.value) {
            context.report({
              node: placeItemsValue,
              messageId: "PreferShorthandCSSNotationPlaceItems",
            });
          }
          // To prevent <div style={{ alignSelf: 'flex-end', justifySelf: 'center' }}>

          const placeSelfValue = styleProp.value.expression.properties.find(
            (prop) =>
              prop.key.name === "alignSelf" || prop.key.name === "justifySelf",
          );
          if (placeSelfValue && placeSelfValue.value) {
            context.report({
              node: placeSelfValue,
              messageId: "PreferShorthandCSSNotationPlaceSelf",
            });
          }
        }
      },
    };
  },
};
