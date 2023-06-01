package io.ecocode.javascript;

import org.sonar.api.SonarRuntime;
import org.sonar.api.server.rule.RulesDefinition;
import org.sonarsource.analyzer.commons.RuleMetadataLoader;

import java.util.Collections;

public class JavaScriptRulesDefinition implements RulesDefinition {

    public static final String METADATA_LOCATION = "io/ecocode/javascript/rules/javascript";

    private final SonarRuntime sonarRuntime;

    public JavaScriptRulesDefinition(SonarRuntime sonarRuntime) {
        this.sonarRuntime = sonarRuntime;
    }

    @Override
    public void define(Context context) {
        NewRepository repository = context
                .createRepository(JavaScriptRuleRepository.KEY, JavaScriptRuleRepository.LANGUAGE)
                .setName(JavaScriptPlugin.NAME);

        RuleMetadataLoader ruleMetadataLoader = new RuleMetadataLoader(METADATA_LOCATION, sonarRuntime);
        ruleMetadataLoader.addRulesByAnnotatedClass(
                repository,
                Collections.unmodifiableList(CheckList.getJavaScriptChecks())
        );

        repository.done();
    }

}
