package io.ecocode.javascript;

import org.junit.jupiter.api.Test;
import org.sonar.api.SonarRuntime;
import org.sonar.api.server.rule.RulesDefinition;
import org.sonar.api.utils.Version;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class JavaScriptRulesDefinitionTest {

    @Test
    void createRepository() {
        SonarRuntime sonarRuntime = mock(SonarRuntime.class);
        when(sonarRuntime.getApiVersion()).thenReturn(Version.create(0, 0));

        RulesDefinition.Context context = new RulesDefinition.Context();
        new JavaScriptRulesDefinition(sonarRuntime).define(context);
        assertThat(context.repositories()).hasSize(1);

        RulesDefinition.Repository repository = context.repositories().get(0);
        assertThat(repository.isExternal()).isFalse();
        assertThat(repository.language()).isEqualTo("js");
        assertThat(repository.key()).isEqualTo("ecocode-javascript");
    }

}
