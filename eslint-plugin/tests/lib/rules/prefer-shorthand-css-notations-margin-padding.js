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

const rule = require("../../../lib/rules/prefer-shorthand-css-notations-margin-padding");
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

ruleTester.run("prefer-shorthand-css-notations-margin-padding", rule, {
  valid: [
    `
    <div style={{ margin: "10px 3px 8px 5px" }}> {/* Your content here */} </div>
    `,
    `
    <div style={{ marginTop: 10 }}> {/* Your content here */} </div>
    `,
    `
    <div style={{ paddingTop: 10 }}> {/* Your content here */} </div>
    `,
    `
    <div style={{ padding: "10px 3px 8px 5px" }}> {/* Your content here */} </div>
    `,
    `
    <div style={{ marginTop: 10, marginBottom: 8 }}> {/* Your content here */} </div>
    `,
  ],

  invalid: [
    {
      code: "<div style={{ marginTop:20, marginRight:10, marginLeft:8, marginBottom:7, }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "margin",
            value: `margin: 20 10 7 8`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{ marginTop: 10, marginBottom: 10, marginRight:8, marginLeft:8 }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "margin",
            value: `margin: 10 8`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{ marginTop: 10, marginBottom: 7, marginRight:8, marginLeft:8 }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "margin",
            value: `margin: 10 8 7`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{ paddingTop: 10, paddingBottom: 8, paddingRight:3, paddingLeft:5 }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "padding",
            value: `padding: 10 3 8 5`,
          },
          type: "JSXAttribute",
        },
      ],
    },
  ],
});
