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

const rule = require("../../../lib/rules/prefer-shorthand-css-notations");
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
    <div style={{ margin: "10px 3px 8px 5px" }}> {/* Your content here */} </div>
    `,
  ],

  invalid: [
    {
      code: "<div style={{ marginTop: 10, marginBottom: 8, marginRight: 3, marginLeft: 5 }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotationMargin",
          type: "Property",
        },
      ],
    },
    {
      code: "<div style={{ paddingTop: 10, paddingBottom: 8, paddingRight:3, paddingLeft:5 }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotationPadding",
          type: "Property",
        },
      ],
    },
    {
      code: " <div style={{outlineWidth:1, outlineStyle: 'solid', outlineColor: '#000000'}}/>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotationOutline",
          type: "Property",
        },
      ],
    },
    {
      code: "<div style={{borderWidth:1, borderStyle: 'solid', borderColor: '#000000'}}/>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotationBorder",
          type: "Property",
        },
      ],
    },
    {
      code: "<h1 style={{fontStyle:'italic', fontWeight: 'bold', fontSize:18, lineHeight:'150%', fontFamily: 'Arial,sans-serif'}}/>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotationFont",
          type: "Property",
        },
      ],
    },
    {
      code: "<div style={{backgroundColor:'#000', backgroundImage: url(images/bg.png), backgroundRepeat: 'no-repeat', backgroundPosition:'left top'}}/>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotationBackground",
          type: "Property",
        },
      ],
    },
    {
      code: "<ul style={{listStyleType:'disc', listStylePosition: 'inside', listStyleImage: 'url(disc.png)'}}/>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotationList",
          type: "Property",
        },
      ],
    },
  ],
});
