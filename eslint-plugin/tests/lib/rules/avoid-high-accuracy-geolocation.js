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

const rule = require("../../../lib/rules/avoid-high-accuracy-geolocation");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
const expectedError = {
  messageId: "AvoidUsingAccurateGeolocation",
  type: "Property",
};

ruleTester.run("avoid-high-accuracy-geolocation", rule, {
  valid: [
    `
    var opts = {enableHighAccuracy: false, timeout: 5000, maximumAge: 0};

    function success(pos) {
      console.log(pos.coords);
    }

    function error(err) {
      console.warn(err);
    }

    navigator.geolocation.getCurrentPosition(success, error, opts);
    `,
    `
    function success(pos) {
      console.log(pos.coords);
    }

    navigator.geolocation.getCurrentPosition(success);
    `,
    `
    navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: false});
    `,
  ],

  invalid: [
    {
      code: `
        var options = {enableHighAccuracy: true, timeout: 5000, maximumAge: 0};

        function success(pos) {
          console.log(pos.coords);
        }

        function error(err) {
          console.warn(err);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
     `,
      errors: [expectedError],
    },
    {
      code: `
      navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true});
     `,
      errors: [expectedError],
    },
  ],
});
