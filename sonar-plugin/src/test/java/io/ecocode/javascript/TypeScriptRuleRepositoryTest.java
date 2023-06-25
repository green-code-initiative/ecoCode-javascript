package io.ecocode.javascript;

import org.junit.jupiter.api.Test;
import org.sonar.plugins.javascript.api.CustomRuleRepository;

import static org.assertj.core.api.Assertions.assertThat;

public class TypeScriptRuleRepositoryTest {

    @Test
    public void create() {
        TypeScriptRuleRepository repository = new TypeScriptRuleRepository();
        assertThat(repository.languages()).containsExactlyInAnyOrder(CustomRuleRepository.Language.TYPESCRIPT);
        assertThat(repository.repositoryKey()).isEqualTo("ecocode-typescript");
        assertThat(repository.checkClasses()).isNotEmpty();
    }

}
