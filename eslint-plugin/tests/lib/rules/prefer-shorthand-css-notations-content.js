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

const rule = require("../../../lib/rules/prefer-shorthand-css-notations-content");
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

ruleTester.run("prefer-shorthand-css-notations", rule, {
  valid: [
    `
    <div style={{ outline: "inset thick" }}> {/* Your content here */} </div>
    `,
    `
    <div style={{ border: "2px dotted" }}> {/* Your content here */} </div>
    `,
    `
    <div style={{ background: "border-box red" }}> {/* Your content here */} </div>
    `,
    `
    <div style={{ listStyle: "georgian inside" }}> {/* Your content here */} </div>
    `,
  ],

  invalid: [
    {
      code: " <div style={{outlineWidth:1, outlineStyle: 'solid', outlineColor: '#000000'}}/>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          type: "JSXAttribute",
          data: {
            attribute: "outline",
            value: `outline: outlineColor outlineStyle outlineWidth`,
          },
        },
      ],
    },
    {
      code: "<div style={{borderWidth:1, borderStyle: 'solid', borderColor: '#000000'}}/>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          type: "JSXAttribute",
          data: {
            attribute: "border",
            value: `border: lineWidth lineStyle color`,
          },
        },
      ],
    },
    {
      code: "<div style={{backgroundColor:'#000', backgroundImage: 'url(images/bg.png)', backgroundRepeat: 'no-repeat', backgroundPosition:'left top'}}/>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          type: "JSXAttribute",
          data: {
            attribute: "background",
            value: `background: backgroundImage backgroundPosition backgroundColor backgroundRepeat`,
          },
        },
      ],
    },
    {
      code: "<ul style={{listStyleType:'disc', listStylePosition: 'inside', listStyleImage: 'url(disc.png)'}}/>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          type: "JSXAttribute",
          data: {
            attribute: "listStyle",
            value: `listStyle: listStylePosition listStyleImage listStyleType`,
          },
        },
      ],
    },
  ],
});
