/*
 * Creedengo JavaScript plugin - Provides rules to reduce the environmental footprint of your JavaScript programs
 * Copyright © 2023 Green Code Initiative (https://green-code-initiative.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
package org.greencodeinitiative.creedengo.javascript;

import org.sonar.api.SonarRuntime;
import org.sonar.api.server.rule.RulesDefinition;
import org.sonarsource.analyzer.commons.RuleMetadataLoader;

import java.util.Collections;

public class JavaScriptRulesDefinition implements RulesDefinition {

    private static final String METADATA_LOCATION = "io/ecocode/rules/javascript";

    private static final String PROFILE_PATH = "org/greencodeinitiative/creedengo/profiles/javascript_profile.json";

    private final SonarRuntime sonarRuntime;

    public JavaScriptRulesDefinition(SonarRuntime sonarRuntime) {
        this.sonarRuntime = sonarRuntime;
    }

    @Override
    public void define(Context context) {
        NewRepository repository = context
                .createRepository(JavaScriptRuleRepository.KEY, JavaScriptRuleRepository.LANGUAGE)
                .setName(JavaScriptPlugin.NAME);

        RuleMetadataLoader ruleMetadataLoader = new RuleMetadataLoader(
                METADATA_LOCATION,
                PROFILE_PATH,
                sonarRuntime
        );

        ruleMetadataLoader.addRulesByAnnotatedClass(
                repository,
                Collections.unmodifiableList(CheckList.getJavaScriptChecks())
        );

        repository.done();
    }

}
