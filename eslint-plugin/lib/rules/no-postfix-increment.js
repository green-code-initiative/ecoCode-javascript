"use strict";

/** @type {import("eslint").Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description: "Disallow the use of the postfix increment.",
      category: "eco-design",
    },
    messages: {
      postfixIncrement: "Postfix increment is not allowed",
    },
    schema: [],
  },
  create: (context) => ({
    ForStatement(node) {
      const updateExpr = node.update;
      if (updateExpr.type == "SequenceExpression") {
        updateExpr.expressions.forEach((expr) => {
          if (
            expr.type == "UpdateExpression" &&
            (expr.operator == "++" || expr.operator == "--") &&
            !expr.prefix
          ) {
            context.report({
              node,
              messageId: "postfixIncrement",
            });
          }
        });
      }
    
      if (updateExpr.type == "UpdateExpression" && (node.update.operator == "++" || node.update.operator == "--") && !node.update.prefix) {
        context.report({
          node,
          messageId: "postfixIncrement",
        });
      }
    },

    WhileStatement(node) {
      const body = node.body;
      if (body.type === 'BlockStatement') {
        body.body.forEach(statement => {
          if (statement.type === 'ExpressionStatement') {
            const expression = statement.expression;
            if (expression.type === 'UpdateExpression' && (expression.operator === '++' || expression.operator === '--') && !expression.prefix) {
              context.report({
                node: expression,
                messageId: 'postfixIncrement',
              });
            }
          }
        })};
    },
  }),
};
