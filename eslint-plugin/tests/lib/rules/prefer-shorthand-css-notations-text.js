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

const rule = require("../../../lib/rules/prefer-shorthand-css-notations-text");
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

ruleTester.run("prefer-shorthand-css-notations-text", rule, {
  valid: [
    `
    <h1 style={{ font: 'italic bold 18px/150% Arial, sans-serif' }} />
    `,
    `
    <div style={{ textDecoration: 'underline solid #f00' }} />
    `,
  ],

  invalid: [
    {
      code: "<h1 style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 18, lineHeight: '150%', fontFamily: 'Arial,sans-serif' }} />",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "font",
            value: `font: fontStyle fontWeight fontSize lineHeight fontFamily`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{ textDecorationStyle: 'solid', textDecorationColor: '#f00', textDecorationLine: 'underline' }} />",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "textDecoration",
            value: `textDecoration: textDecorationLine textDecorationStyle textDecorationColor`,
          },
          type: "JSXAttribute",
        },
      ],
    },
  ],
});
