package io.ecocode.javascript;

import org.sonar.plugins.javascript.api.CustomRuleRepository;
import org.sonar.plugins.javascript.api.JavaScriptCheck;

import java.util.EnumSet;
import java.util.List;
import java.util.Set;

@SuppressWarnings("deprecation")
public class TypeScriptRuleRepository implements CustomRuleRepository {

    public static final String KEY = "ecocode-typescript";

    public static final String LANGUAGE = "ts";

    @Override
    public Set<Language> languages() {
        return EnumSet.of(Language.TYPESCRIPT);
    }

    @Override
    public String repositoryKey() {
        return KEY;
    }

    @Override
    public List<Class<? extends JavaScriptCheck>> checkClasses() {
        return CheckList.getTypeScriptChecks();
    }

}
