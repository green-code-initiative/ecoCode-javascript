package io.ecocode.javascript;

import org.sonar.api.Plugin;

public class JavaScriptPlugin implements Plugin {

    public static final String NAME = "ecoCode";

    @Override
    public void define(Context context) {
        context.addExtensions(
                ESLintRulesBundle.class,
                JavaScriptRulesDefinition.class,
                JavaScriptRuleRepository.class,
                TypeScriptRulesDefinition.class,
                TypeScriptRuleRepository.class
        );
    }

}
