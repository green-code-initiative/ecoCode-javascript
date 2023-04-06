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

const rule = require("../../../lib/rules/no-postfix-increment");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
const expectedError = {
  messageId: "postfixIncrement",
};

ruleTester.run("no-postfix-increment", rule, {
  valid: [
    "for (var i = 0; i < 10; ++i) {}",
    `
    var x = 0;
    while (x < 3){
        ++x;
    }
    `,
    `
    var x = 3;
    while (x > 3){
        --x;
    }
    `,
    `
    for (var l = 0, r = arr.length - 1, i=0; l < r; ++l, --r, ++i) {
    }
    `
  ],

  invalid: [
    {
      code: "for (var i = 0; i < 10; i++) {}",
      errors: [expectedError],
    },
    {
        code: "var x = 0; while (x < 3){ x++; }",
        errors: [expectedError],
    },
    {
      code: "var x = 3; while (x > 3){ x--; }",
      errors: [expectedError],
    },
    {
      code: "for (var l = 0, r = arr.length - 1, i=0; l < r; l++, r++, i++) { }",
      errors: [expectedError, expectedError, expectedError],
    }
  ],
});
