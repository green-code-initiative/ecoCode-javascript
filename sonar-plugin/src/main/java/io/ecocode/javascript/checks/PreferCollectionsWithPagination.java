package io.ecocode.javascript.checks;

import org.sonar.check.Rule;
import org.sonar.plugins.javascript.api.EslintBasedCheck;
import org.sonar.plugins.javascript.api.TypeScriptRule;

@TypeScriptRule
@Rule(key = PreferCollectionsWithPagination.RULE_KEY)
public class PreferCollectionsWithPagination implements EslintBasedCheck {

    public static final String RULE_KEY = "EC13";

    @Override
    public String eslintKey() {
        return "@ecocode/prefer-collections-with-pagination";
    }

}
