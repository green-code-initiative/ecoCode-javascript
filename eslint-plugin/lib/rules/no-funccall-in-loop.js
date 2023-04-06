"use strict";

function report(node, context) {
    const body = node.body;
    if (body.type === 'BlockStatement') {
      body.body.forEach(statement => {
        if (statement.type === 'ExpressionStatement') {
          const expr = statement.expression;
          if (expr.type === 'CallExpression') {
              context.report({
                  node: expr,
                  messageId: 'funcallInLoop',
              });
              }
        }
      })}
}

/** @type {import("eslint").Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description: "",
      category: "eco-design",
    },
    messages: {
      funcallInLoop: "Avoid calling the function each time the loop is iterated.",
    },
    schema: [],
  },
  create: (context) => ({
    ForStatement(node) {
        report(node, context);
      },

    WhileStatement(node) {
        report(node, context);
    },
  }),
};
