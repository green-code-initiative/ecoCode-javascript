package io.ecocode.javascript;

import org.junit.jupiter.api.Test;
import org.sonar.check.Rule;
import org.sonar.plugins.javascript.api.EslintBasedCheck;
import org.sonar.plugins.javascript.api.JavaScriptCheck;

import static org.assertj.core.api.Assertions.assertThat;

public class CheckListTest {

    @Test
    public void check() throws ReflectiveOperationException {
        for (Class<? extends JavaScriptCheck> checkClass : CheckList.getAllChecks()) {
            assertThat(checkClass).isAssignableTo(EslintBasedCheck.class);
            assertThat(checkClass).hasAnnotation(Rule.class);
            EslintBasedCheck check = (EslintBasedCheck) checkClass.getDeclaredConstructor().newInstance();
            assertThat(check.eslintKey()).startsWith("@ecocode/");
        }
    }

}
