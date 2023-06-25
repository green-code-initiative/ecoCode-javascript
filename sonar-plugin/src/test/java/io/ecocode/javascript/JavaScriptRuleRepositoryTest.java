package io.ecocode.javascript;

import org.junit.jupiter.api.Test;
import org.sonar.plugins.javascript.api.CustomRuleRepository;

import static org.assertj.core.api.Assertions.assertThat;

public class JavaScriptRuleRepositoryTest {

    @Test
    public void create() {
        JavaScriptRuleRepository repository = new JavaScriptRuleRepository();
        assertThat(repository.languages()).containsExactlyInAnyOrder(CustomRuleRepository.Language.JAVASCRIPT, CustomRuleRepository.Language.TYPESCRIPT);
        assertThat(repository.repositoryKey()).isEqualTo("ecocode-javascript");
        assertThat(repository.checkClasses()).isNotEmpty();
    }

}
