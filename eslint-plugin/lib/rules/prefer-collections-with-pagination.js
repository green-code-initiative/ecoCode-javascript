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

const { ESLintUtils } = require("@typescript-eslint/utils");

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://example.com/rule/${name}`
);

const PAGINATION_KEY_WORDS = ["page", "pagination"];

const isPaginationName = (name) => {
  return PAGINATION_KEY_WORDS.some((keyWord) =>
    name.toLowerCase().includes(keyWord)
  );
};

const isPaginated = (objectType) => {
  if (objectType.type === "TSTypeReference") {
    // Pagination object should be an object, for example, it can't be an array

    if (isPaginationName(objectType.typeName.name)) {
      return true;
    }

    if (
      objectType.members != null &&
      objectType.members.some(
        (member) => member.key != null && isPaginationName(member.key)
      )
    ) {
      return true;
    }
  }

  return false;
};

const report = (context, node) => {
  context.report({
    node,
    messageId: "PreferReturnCollectionsWithPagination",
  });
};

// Type: RuleModule<"uppercase", ...>
const rule = createRule({
  name: "prefer-collections-with-pagination",
  meta: {
    docs: {
      description: "TODO",
      category: "eco-design",
      recommended: "warn",
    },
    messages: {
      PreferReturnCollectionsWithPagination:
        "Prefer return collections with pagination in HTTP GET",
    },
    type: "suggestion",
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      Decorator(node) {
        if (
          node.expression.callee.name.toLowerCase() === "get" &&
          node.parent.parent.parent.type === "ClassDeclaration" &&
          node.parent.parent.parent.decorators.find(
            (decorator) =>
              decorator.expression.callee.name.toLowerCase() === "controller"
          )
        ) {
          const getMethod = node.parent;
          const returnType =
            getMethod.value.returnType != null
              ? getMethod.value.returnType.typeAnnotation
              : null;

          if (returnType != null) {
            if (returnType.typeName.name === "Promise") {
              if (
                returnType.typeParameters.params.length === 1 &&
                !isPaginated(returnType.typeParameters.params[0])
              ) {
                report(context, returnType);
              } else if (!isPaginated(returnType)) {
                report(context, returnType);
              }
            }
          }
        }
      },
    };
  },
});

module.exports = rule;
