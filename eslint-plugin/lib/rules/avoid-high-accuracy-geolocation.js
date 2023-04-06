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

/** @type {import("eslint").Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Avoid using high accuracy geolocation in web applications.",
      category: "eco-design",
      recommended: "warn",
    },
    messages: {
      AvoidUsingAccurateGeolocation:
        "'{{notAllowedValue}}' is not a valid value, should be false.",
    },
    schema: [],
  },
  create: function (context) {
    return {
      Property(node) {
        if (
          node &&
          node.key.name === "enableHighAccuracy" &&
          node.value.value === true
        ) {
          context.report({
            node,
            messageId: "AvoidUsingAccurateGeolocation",
            data: { notAllowedValue: true },
          });
        }
      },
    };
  },
};
