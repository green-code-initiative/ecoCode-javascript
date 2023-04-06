# Should not import all from library (`@ecocode/no-import-all-from-library`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Rule details

This rule aims to reduce weight of programs by using only needed modules. Many libraries export only one module by
default, but some of them are exporting ES modules or submodules. We should use them to select more precisly needed
modules and avoid unnecessarily overloading files weight.

#### When importing full lodash library

![Import all lodash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzAgMjUwIiBoZWlnaHQ9IjE4MCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNLjMyMi4yMzNoMzY0Ljg5M3YyNDhILjMyMnYtMjQ4eiIgb3BhY2l0eT0idW5kZWZpbmVkIiBmaWxsPSIjMjdhZTYwIi8+PHRleHQgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZvbnQtZmFtaWx5PSJSb2JvdG8iIGZvbnQtc2l6ZT0iMjQiIHN0cm9rZS13aWR0aD0iMCIgeT0iMjguMjMzIiB4PSI5LjMyMiIgc3Ryb2tlPSIjMDAwIj5pbmRleC5qcyAtIDUzMS40NiBLQjwvdGV4dD48cGF0aCBmaWxsPSIjMmVjYzcxIiBkPSJNNS4zMjIgMzUuMjMzaDM1Ni43NzVWMjEyLjg4SDUuMzIyeiIvPjx0ZXh0IHN0cm9rZT0iIzAwMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZvbnQtZmFtaWx5PSJSb2JvdG8iIGZvbnQtc2l6ZT0iMTgiIHN0cm9rZS13aWR0aD0iMCIgeT0iNTguMDM0IiB4PSIxMS45NzEiPm5vZGVfbW9kdWxlcy9sb2Rhc2ggLSA1MzEuMzUgS0I8L3RleHQ+PHBhdGggZD0iTTkuODAxIDY2Ljc1NWgzNDkuMDA3djE0My4wN0g5LjhWNjYuNzU0eiIgb3BhY2l0eT0idW5kZWZpbmVkIiBmaWxsPSIjMTZhMDg1Ii8+PHRleHQgc3Ryb2tlPSIjMDAwIiBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZm9udC1mYW1pbHk9IlJvYm90byIgZm9udC1zaXplPSIxOCIgc3Ryb2tlLXdpZHRoPSIwIiB5PSI4Ni41MTEiIHg9IjE1Ljk0NCI+bG9kYXNoLmpzIC0gNTMxLjM1IEtCPC90ZXh0PjxwYXRoIGZpbGw9IiMyZWNjNzEiIGQ9Ik01LjkxIDIxNS44MjFoMzU2Ljc3NXYyOS40MTJINS45MXoiLz48dGV4dCBzdHJva2U9IiMwMDAiIGZvbnQtd2VpZ2h0PSJib2xkIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmb250LWZhbWlseT0iUm9ib3RvIiBmb250LXNpemU9IjE4IiBzdHJva2Utd2lkdGg9IjAiIHk9IjIzNy40NTUiIHg9IjExLjk3MSI+aW5kZXguanMgLSAxMTIgQjwvdGV4dD48L3N2Zz4=)

#### When importing lodash method isEmpty only

![Import all lodash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzAgMjUwIiBoZWlnaHQ9IjE4MCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNLjMyMi4yMzNoMzY0Ljg5M3YyNDhILjMyMnYtMjQ4eiIgb3BhY2l0eT0idW5kZWZpbmVkIiBmaWxsPSIjMjdhZTYwIi8+PHRleHQgc3R5bGU9ImN1cnNvcjptb3ZlIiBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZm9udC1mYW1pbHk9IlJvYm90byIgZm9udC1zaXplPSIyNCIgc3Ryb2tlLXdpZHRoPSIwIiB5PSIyOC4yMzMiIHg9IjkuMzIyIiBzdHJva2U9IiMwMDAiPmluZGV4LmpzIC0gMjQuNDIgS0I8L3RleHQ+PHBhdGggZmlsbD0iIzJlY2M3MSIgZD0iTTUuMzIyIDM1LjIzM2gzNTYuNzc1VjIxMi44OEg1LjMyMnoiLz48dGV4dCBzdHJva2U9IiMwMDAiIGZvbnQtd2VpZ2h0PSJib2xkIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmb250LWZhbWlseT0iUm9ib3RvIiBmb250LXNpemU9IjE4IiBzdHJva2Utd2lkdGg9IjAiIHk9IjU4LjAzNCIgeD0iMTEuOTcxIj5ub2RlX21vZHVsZXMvbG9kYXNoIC0gMjQuMzEgS0I8L3RleHQ+PHBhdGggZD0iTTkuODAxIDY2Ljc1NWgzNDkuMDA3djI4Ljk1Mkg5LjhWNjYuNzU1eiIgb3BhY2l0eT0idW5kZWZpbmVkIiBmaWxsPSIjMTZhMDg1Ii8+PHRleHQgc3Ryb2tlPSIjMDAwIiBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZm9udC1mYW1pbHk9IlJvYm90byIgZm9udC1zaXplPSIxOCIgc3Ryb2tlLXdpZHRoPSIwIiB5PSI4Ni41MTEiIHg9IjE1Ljk0NCI+aXNFbXB0eSAtIDEuOTUgS0I8L3RleHQ+PHBhdGggZmlsbD0iIzJlY2M3MSIgZD0iTTUuOTEgMjE1LjgyMWgzNTYuNzc1djI5LjQxMkg1LjkxeiIvPjx0ZXh0IHN0eWxlPSJjdXJzb3I6bW92ZSIgc3Ryb2tlPSIjMDAwIiBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZm9udC1mYW1pbHk9IlJvYm90byIgZm9udC1zaXplPSIxOCIgc3Ryb2tlLXdpZHRoPSIwIiB5PSIyMzcuNDU1IiB4PSIxMS45NzEiPmluZGV4LmpzIC0gMTEwIEI8L3RleHQ+PHBhdGggZD0iTTkuODAxIDk5LjEyOWgzNDkuMDA3djI4Ljk1Mkg5LjhWOTkuMTN6IiBvcGFjaXR5PSJ1bmRlZmluZWQiIGZpbGw9IiMxNmEwODUiLz48dGV4dCBzdHJva2U9IiMwMDAiIGZvbnQtd2VpZ2h0PSJib2xkIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmb250LWZhbWlseT0iUm9ib3RvIiBmb250LXNpemU9IjE4IiBzdHJva2Utd2lkdGg9IjAiIHk9IjEyMC4wODIiIHg9IjE1Ljk0NCI+X25vZGVVdGlsLmpzIC0gOTk1IEI8L3RleHQ+PHBhdGggZD0iTTkuODAxIDEzMi4wN2gzNDkuMDA3djI4Ljk1Mkg5LjhWMTMyLjA3ek05LjgwMSAxNjQuNDIzaDM0OS4wMDd2MjguOTUySDkuOHYtMjguOTUyeiIgb3BhY2l0eT0idW5kZWZpbmVkIiBmaWxsPSIjMTZhMDg1Ii8+PHRleHQgc3R5bGU9ImN1cnNvcjptb3ZlIiBzdHJva2U9IiMwMDAiIGZvbnQtd2VpZ2h0PSJib2xkIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmb250LWZhbWlseT0iUm9ib3RvIiBmb250LXNpemU9IjE4IiBzdHJva2Utd2lkdGg9IjAiIHk9IjE4NS45NzUiIHg9IjE1Ljk0NCI+Li4uPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iIzAwMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZvbnQtZmFtaWx5PSJSb2JvdG8iIGZvbnQtc2l6ZT0iMTgiIHN0cm9rZS13aWR0aD0iMCIgeT0iMTUzLjYxNiIgeD0iMTUuOTQ0Ij5pc0FycmF5TGlrZS5qcyAtIDgzMCBCPC90ZXh0Pjwvc3ZnPg==)

## Options

You can externally add your own libraries to be checked.
To add your own libraries you need to modify your .eslintrc.js by adding the following rule configuration:

```js
module.exports = {
    ...yourConf,
    rules: {
        "no-import-all-from-library": [
            "warn",
            {
                notAllowedLibraries: ["some-lib"], // will check for -> import someLib from "some-lib"
                importByNamespaceNotAllowedLibraries: ["some-other-lib"], // will check for -> import * as someOtherLib from "some-other-lib"
            },
        ],
    },
};
```

## Examples

Examples of **incorrect** code for this rule:

```js
// Example with lodash
import lodash from "lodash";
import {isEmpty} from "lodash";
import * as lodash from "lodash";

// Example with underscore
import _ from "underscore";
```

Examples of **correct** code for this rule:

```js
// Example with lodash (uses submodules)
import isEmpty from "lodash/isEmpty";
import intersect from "lodash/intersect";

// Example with underscore (uses esm modules)
import map from "underscore/modules/map.js";
```
