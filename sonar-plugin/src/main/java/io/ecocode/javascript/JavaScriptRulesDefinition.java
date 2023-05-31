package io.ecocode.javascript;

import io.ecocode.javascript.checks.AvoidHighAccuracyGeolocation;
import org.sonar.api.server.rule.RulesDefinition;

public class JavaScriptRulesDefinition implements RulesDefinition {

    private static final String NAME = "ecoCode";
    private static final String LANGUAGE = "js";

    @Override
    public void define(Context context) {
        NewRepository repository = context.createRepository(JavaScriptRuleRepository.KEY, LANGUAGE).setName(NAME);

        // TODO Import rules dynamically here
        repository
                .createRule(AvoidHighAccuracyGeolocation.RULE_KEY)
                .setName("Avoid using high accuracy geolocation in web applications.")
                .setHtmlDescription("HTML Description");

        repository.done();
    }

}
