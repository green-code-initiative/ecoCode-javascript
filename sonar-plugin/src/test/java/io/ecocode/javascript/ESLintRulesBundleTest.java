package io.ecocode.javascript;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class ESLintRulesBundleTest {

    @Test
    public void create() {
        ESLintRulesBundle bundle = new ESLintRulesBundle();
        assertThat(bundle.bundlePath()).isEqualTo("/ecocode-eslint-plugin.tgz");
    }

}
