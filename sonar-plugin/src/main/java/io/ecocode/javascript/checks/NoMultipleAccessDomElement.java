package io.ecocode.javascript.checks;

import org.sonar.check.Rule;
import org.sonar.plugins.javascript.api.EslintBasedCheck;
import org.sonar.plugins.javascript.api.JavaScriptRule;
import org.sonar.plugins.javascript.api.TypeScriptRule;

@JavaScriptRule
@TypeScriptRule
@Rule(key = NoMultipleAccessDomElement.RULE_KEY)
public class NoMultipleAccessDomElement implements EslintBasedCheck {

    public static final String RULE_KEY = "EC11";

    @Override
    public String eslintKey() {
        return "@ecocode/no-multiple-access-dom-element";
    }

}
