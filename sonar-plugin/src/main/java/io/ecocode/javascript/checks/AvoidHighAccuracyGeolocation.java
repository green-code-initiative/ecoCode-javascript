package io.ecocode.javascript.checks;

import org.sonar.check.Rule;
import org.sonar.plugins.javascript.api.EslintBasedCheck;
import org.sonar.plugins.javascript.api.JavaScriptRule;
import org.sonar.plugins.javascript.api.TypeScriptRule;

@JavaScriptRule
@TypeScriptRule
@Rule(key = AvoidHighAccuracyGeolocation.RULE_KEY)
public class AvoidHighAccuracyGeolocation implements EslintBasedCheck {

    public static final String RULE_KEY = "EC8";

    @Override
    public String eslintKey() {
        return "avoid-high-accuracy-geolocation";
    }

}
