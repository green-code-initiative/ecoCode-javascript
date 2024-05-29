/*
 * ecoCode JavaScript plugin - Provides rules to reduce the environmental footprint of your JavaScript programs
 * Copyright © 2023 Green Code Initiative (https://www.ecocode.io)
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/avoid-autoplay");
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
const expectedError1 = {
  messageId: "NoAutoplay",
  type: "JSXAttribute",
};
const expectedError2 = {
  messageId: "EnforcePreloadNone",
  type: "JSXAttribute",
};
const expectedError3 = {
  messageId: "NoAutoplay_EnforcePreloadNone",
  type: "JSXAttribute",
};

ruleTester.run("autoplay-audio-video-attribute-not-present", rule, {
  valid: [
    `
      <audio preload="none"></audio>
    `,
    '<video preload="none"></video>',
  ],

  invalid: [
    {
      code: `
        <audio autoplay></audio>
      `,
      errors: [expectedError3],
    },
    {
      code: `
        <video autoplay preload="auto"></video>
           `,
      errors: [expectedError3],
    },
    {
      code: '<video autoplay preload="none"></video>',
      errors: [expectedError1],
    },
    {
      code: '<audio  preload="auto"></audio>',
      errors: [expectedError2],
    },
  ],
});
