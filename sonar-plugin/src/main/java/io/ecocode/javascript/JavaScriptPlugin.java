package io.ecocode.javascript;

import org.sonar.api.Plugin;

public class JavaScriptPlugin implements Plugin {

    @Override
    public void define(Context context) {
        context.addExtensions(
                ESLintRulesBundle.class,
                JavaScriptRulesDefinition.class,
                JavaScriptRuleRepository.class
        );
    }

}
