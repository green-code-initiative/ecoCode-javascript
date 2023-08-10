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

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce providing a print stylesheet",
      category: "eco-design",
      recommended: "warn",
    },
    messages: {
      noPrintCSSProvided: "Provide a print CSS",
    },
    schema: [],
  },
  create(context) {
    // Track scanned files
    const scannedFiles = new Set();
    return {
      JSXElement(node) {
        const filePath = context.getFilename();

        // Skip if file has already been scanned
        if (scannedFiles.has(filePath)) {
          return;
        }

        // Mark file as scanned
        scannedFiles.add(filePath);
        if (
          node.openingElement.name.name === "link" &&
          node.openingElement.attributes.some(
            (attr) =>
              attr.name.name === "media" && attr.value.value === "print",
          )
        ) {
          return;
        } else if (
          node.openingElement.name.name === "style" &&
          node.children.some((child) => child.value.includes("@media print"))
        ) {
          return;
        }

        context.report({
          node: node,
          messageId: "noPrintCSSProvided",
        });
      },
    };
  },
};
