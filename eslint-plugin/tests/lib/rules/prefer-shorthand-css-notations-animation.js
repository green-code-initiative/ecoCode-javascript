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

const rule = require("../../../lib/rules/prefer-shorthand-css-notations-animation");
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

ruleTester.run("prefer-shorthand-css-notations-animation", rule, {
  valid: [
    `
    <div style={{ transition: 'width 35s ease-in-out 0s' }}> {/* Your content here */} </div>
    `,
    `
    <div style={{  animation: 'example 5s linear 2s infinite alternate'   }} > {/* Your content here */} </div>
    `,
    `
    <div style={{ offset: 'path(M 50 80 C 150 -20 250 180 350 80) 150px'  }} > {/* Your content here */} </div>
    `,
    `
    <div style={{ offset: 'path(M 50 80 C 150 -20 250 180 350 80) 150px 45deg'  }} > {/* Your content here */} </div>
    `,
  ],

  invalid: [
    {
      code: "<div style={{ transitionProperty: 'width' ,transitionDuration:'35s', transitionTimingFunction:'ease-in-out', transitionDelay: '0s' }}> {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "transition",
            value: `transition: transitionProperty transitionDuration transitionTimingFunction transitionDelay`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<div style={{  animationName: 'example', animationDuration: '5s', animationTimingFunction: 'linear', animationDelay: '2s', animationDirection: 'alternate',animationIterationCount:'infinite'}} > {/* Your content here */} </div>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          data: {
            attribute: "animation",
            value: `animation: animationNameProp animationDuration animationTimingFunction animationDelay animationIterationCount animationDirection animationFillMode animationPlayState`,
          },
          type: "JSXAttribute",
        },
      ],
    },
    {
      code: "<h1 style={{ offsetPath: 'path(M 50 80 C 150 -20 250 180 350 80)', offsetDistance: '150px', offsetPosition: '50%' }}/>",
      errors: [
        {
          messageId: "PreferShorthandCSSNotation",
          type: "JSXAttribute",
          data: {
            attribute: "offset",
            value: `offset: offsetPosition offsetPath offsetDistance offsetRotate offsetAnchor`,
          },
        },
      ],
    },
  ],
});
