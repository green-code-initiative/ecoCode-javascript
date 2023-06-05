package io.ecocode.javascript.checks;

import org.sonar.check.Rule;
import org.sonar.plugins.javascript.api.EslintBasedCheck;
import org.sonar.plugins.javascript.api.JavaScriptRule;
import org.sonar.plugins.javascript.api.TypeScriptRule;

@JavaScriptRule
@TypeScriptRule
@Rule(key = NoImportAllFromLibrary.RULE_KEY)
public class NoImportAllFromLibrary implements EslintBasedCheck {

    public static final String RULE_KEY = "EC9";

    @Override
    public String eslintKey() {
        return "@ecocode/no-import-all-from-library";
    }

}
