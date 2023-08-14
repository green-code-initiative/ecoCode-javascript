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

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/prefer-shorthand-css-notations-layout");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run("prefer-shorthand-css-notations-layout", rule, {
  valid: [
    `
    <div style={{ placeSelf: 'end stretch' }}> {/* Your content here */} </div>
    `,
    `
    <div style={{ placeItems: 'end stretch' }}> {/* Your content here */} </div>
    `,
    `
    <div style={{ justifyItems: 'stretch' }}> {/* Your content here */} </div>
    `,
    `
    <div style={{ placeContent: 'end stretch' }}> {/* Your content here */} </div>
    `,

    `
    <div style={{ columnRule: '4px double #ff00ff'}}> {/* Your content here */} </div>
    `,
    `
    <div style={{ overflow: 'hidden'}}> {/* Your content here */} </div>
    `,
    `
    <div style={{ column: '3 100px'}}> {/* Your content here */} </div>
    `,
  ],

  invalid: [
    {
      code: "<div style={{ alignSelf: 'end', justifySelf: 'stretch' }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "placeSelf",
            value: `placeSelf: alignSelf justifySelf`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{ alignItems: 'end', justifyItems: 'stretch' }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "placeItems",
            value: `placeItems: alignItems justifyItems`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{ alignContent: 'end', justifyContent: 'stretch' }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "placeContent",
            value: `placeContent: alignContent justifyContent`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{ columnRuleWidth: '4px', columnRuleStyle: 'double', columnRuleColor:'#ff00ff'}}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "columnRule",
            value: `columnRule: columnRuleWidth columnRuleStyle columnRuleColor`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{ overFlowX: 'hidden', overFlowY: 'hidden'}}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "overFlow",
            value: `overFlow: overflowValueX overflowValueY`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{ columnWidth: '100px', columnCount: 3 }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "column",
            value: `column: columnWidth columnCount`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{ flexGrow: 1, flexShrink: 0, flexBasis: 'auto' }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "flex",
            value: `flex: flexGrow flexShrink flexBasis`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{ gridTemplateColumns: '1fr 2fr', gridAutoFlow: 'row', gridAutoRows:'minmax(100px, auto)', gridAutoColumns: '200px' }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "grid",
            value: `grid: gridTemplate gridTemplateRows gridAutoColumns gridAutoRows gridTemplateColumns`,
          },
          type: "JSXAttribute",
        },
      ],
    },
  ],
});
