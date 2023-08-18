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

const rule = require("../../../lib/rules/provide-print-css");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});
const expectedError = {
  messageId: "noPrintCSSProvided",
  type: "JSXElement",
};

ruleTester.run("provide-print-css", rule, {
  valid: [
    `
    <link rel="stylesheet" href="styles.css" media="print" />

    `,
    `
    <style>
    @media print {
      /* Print-specific styles */
    }
    </style>
    `,
    `
    {<link rel="stylesheet" href="styles.css" media="print" />,
    <style>
      @media print {
        /* Print-specific styles */
      }
    </style>}    
    `,
  ],
  invalid: [
    {
      code: `<link rel="stylesheet" href="styles.css" />`,
      errors: [expectedError],
    },
  ],
});