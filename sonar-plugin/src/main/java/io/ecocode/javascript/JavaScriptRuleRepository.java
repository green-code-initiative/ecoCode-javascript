package io.ecocode.javascript;

import io.ecocode.javascript.checks.AvoidHighAccuracyGeolocation;
import org.sonar.plugins.javascript.api.CustomRuleRepository;
import org.sonar.plugins.javascript.api.JavaScriptCheck;

import java.util.Collections;
import java.util.EnumSet;
import java.util.List;
import java.util.Set;

public class JavaScriptRuleRepository implements CustomRuleRepository {

    public static final String KEY = "ecocode-javascript";

    @Override
    public Set<Language> languages() {
        return EnumSet.of(Language.JAVASCRIPT, Language.TYPESCRIPT);
    }

    @Override
    public String repositoryKey() {
        return KEY;
    }

    @Override
    public List<Class<? extends JavaScriptCheck>> checkClasses() {
        return Collections.singletonList(AvoidHighAccuracyGeolocation.class);
    }

}
