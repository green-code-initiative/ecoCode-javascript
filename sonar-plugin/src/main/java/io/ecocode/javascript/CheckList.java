package io.ecocode.javascript;

import io.ecocode.javascript.checks.*;
import org.sonar.plugins.javascript.api.JavaScriptCheck;
import org.sonar.plugins.javascript.api.JavaScriptRule;
import org.sonar.plugins.javascript.api.TypeScriptRule;

import java.lang.annotation.Annotation;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class CheckList {

    private CheckList() {
    }

    public static List<Class<? extends JavaScriptCheck>> getAllChecks() {
        return Arrays.asList(
                AvoidHighAccuracyGeolocation.class,
                NoImportAllFromLibrary.class,
                NoMultipleAccessDomElement.class,
                NoMultipleStyleChanges.class,
                PreferCollectionsWithPagination.class
        );
    }

    public static List<Class<? extends JavaScriptCheck>> getTypeScriptChecks() {
        return filterChecksByAnnotation(TypeScriptRule.class);
    }

    public static List<Class<? extends JavaScriptCheck>> getJavaScriptChecks() {
        return filterChecksByAnnotation(JavaScriptRule.class);
    }

    private static List<Class<? extends JavaScriptCheck>> filterChecksByAnnotation(Class<? extends Annotation> annotation) {
        return getAllChecks().stream().filter((check) -> check.isAnnotationPresent(annotation)).collect(Collectors.toList());
    }

}
