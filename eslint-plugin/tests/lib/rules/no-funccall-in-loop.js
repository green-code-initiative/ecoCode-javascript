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

const rule = require("../../../lib/rules/no-funccall-in-loop");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
const expectedError = {
  messageId: "funcallInLoop",
};

ruleTester.run("no-funccall-in-loop", rule, {
  valid: [
    "function x(){} for (var i = 0; i < 10; ++i) {if (i == 5) {x();}}",
    "function x(){} var i = 0; while (i < 10){ if (i == 5) {x();} ++i; }",
  ],

  invalid: [
    {
      code: "function x(){} for (var i = 0; i < 10; ++i) { x(); }",
      errors: [expectedError],
    },
    {
        code: "function x(){} var i = 0; while (i < 10){ x(); ++i;}",
        errors: [expectedError],
    },
  ],
});
