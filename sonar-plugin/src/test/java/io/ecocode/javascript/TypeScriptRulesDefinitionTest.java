package io.ecocode.javascript;

import org.junit.jupiter.api.Test;
import org.sonar.api.SonarRuntime;
import org.sonar.api.server.rule.RulesDefinition;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;

class TypeScriptRulesDefinitionTest {

    @Test
    void createRepository() {
        SonarRuntime sonarRuntime = mock(SonarRuntime.class);
        RulesDefinition.Context context = new RulesDefinition.Context();
        new TypeScriptRulesDefinition(sonarRuntime).define(context);
        assertThat(context.repositories()).hasSize(1);

        RulesDefinition.Repository repository = context.repositories().get(0);
        assertThat(repository.isExternal()).isFalse();
        assertThat(repository.language()).isEqualTo("ts");
        assertThat(repository.key()).isEqualTo("ecocode-typescript");
    }

}
