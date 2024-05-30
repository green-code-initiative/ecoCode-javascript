/*
 * ecoCode JavaScript plugin - Provides rules to reduce the environmental footprint of your JavaScript programs
 * Copyright © 2023 Green Code Initiative (https://www.ecocode.io)
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

"use strict";

/** @type {import("eslint").Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Disallow autoplay and enforce preload='none' for video and audio elements",
      category: "eco-design",
      recommended: "warn",
    },
    messages: {
      NoAutoplay:
        "Avoid using autoplay attribute for <video> and <audio> elements. Reference to Rule RGESN 4.1 : https://www.arcep.fr/mes-demarches-et-services/entreprises/fiches-pratiques/referentiel-general-ecoconception-services-numeriques.html",
      EnforcePreloadNone:
        "Set preload='none' for <video> and <audio> elements. Reference to Rule RGESN 4.1 : https://www.arcep.fr/mes-demarches-et-services/entreprises/fiches-pratiques/referentiel-general-ecoconception-services-numeriques.html",
      NoAutoplay_EnforcePreloadNone:
        "Avoid using autoplay attribute and set preload='none' for <video> and <audio> elements. Reference to Rule RGESN 4.1 : https://www.arcep.fr/mes-demarches-et-services/entreprises/fiches-pratiques/referentiel-general-ecoconception-services-numeriques.html ",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name === "video" || node.name.name === "audio") {
          const autoplayAttr = node.attributes.find(
            (attr) => attr.name.name === "autoplay",
          );
          const preloadAttr = node.attributes.find(
            (attr) => attr.name.name === "preload",
          );
          if (
            autoplayAttr &&
            (!preloadAttr || preloadAttr.value.value !== "none")
          ) {
            context.report({
              node: autoplayAttr || preloadAttr,
              messageId: "NoAutoplay_EnforcePreloadNone",
            });
          } else {
            if (autoplayAttr) {
              context.report({
                node: autoplayAttr,
                messageId: "NoAutoplay",
              });
            }

            if (!preloadAttr || preloadAttr.value.value !== "none") {
              context.report({
                node: preloadAttr || node,
                messageId: "EnforcePreloadNone",
              });
            }
          }
        }
      },
    };
  },
};
