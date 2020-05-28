module.exports = {
  extends: ["eslint:recommended", "airbnb", "airbnb/hooks"],
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  env: {
    browser: true,
    es2020: true,
    jest: true,
    mocha: true,
    node: true,
  },
  rules: {
    "class-methods-use-this": "off",
    "no-console":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    "no-debugger":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    "no-unused-vars":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? [
            "warn",
            {
              vars: "all",
              varsIgnorePattern: "(React|Taro|ComponentType)",
              args: "after-used",
              ignoreRestSiblings: true,
            },
          ]
        : "off",
    "react/react-in-jsx-scope": "off",
    "react/sort-comp": [
      "error",
      {
        order: [
          "static-variables",
          "static-methods",
          "instance-variables",
          "lifecycle",
          "/^on.+$/",
          "getters",
          "setters",
          "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
          "instance-methods",
          "everything-else",
          "rendering",
        ],
        groups: {
          lifecycle: [
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "constructor",
            "getDefaultProps",
            "state",
            "getInitialState",
            "getChildContext",
            "getDerivedStateFromProps",
            "onLaunch",
            "onReady",
            "onLoad",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentDidShow",
            "componentDidHide",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentDidCatchError",
            "componentDidNotFound",
            "componentWillUnmount",
          ],
          rendering: ["/^render.+$/", "render"],
        },
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "airbnb-typescript",
        "airbnb/hooks",
      ],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-console":
          process.env.NODE_ENV === "production" ||
          process.env.NODE_ENV === "pre-production" ||
          process.env.NODE_ENV === "staging"
            ? "warn"
            : "off",
        "@typescript-eslint/no-debugger":
          process.env.NODE_ENV === "production" ||
          process.env.NODE_ENV === "pre-production" ||
          process.env.NODE_ENV === "staging"
            ? "warn"
            : "off",
        "@typescript-eslint/no-unused-vars":
          process.env.NODE_ENV === "production" ||
          process.env.NODE_ENV === "pre-production" ||
          process.env.NODE_ENV === "staging"
            ? [
                "warn",
                {
                  vars: "all",
                  varsIgnorePattern: "(React|Taro|ComponentType)",
                  args: "after-used",
                  ignoreRestSiblings: true,
                },
              ]
            : "off",
        "class-methods-use-this": "off",
        "react/react-in-jsx-scope": "off",
        "react/sort-comp": [
          "error",
          {
            order: [
              "static-variables",
              "static-methods",
              "instance-variables",
              "lifecycle",
              "/^on.+$/",
              "getters",
              "setters",
              "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
              "instance-methods",
              "everything-else",
              "rendering",
            ],
            groups: {
              lifecycle: [
                "displayName",
                "propTypes",
                "contextTypes",
                "childContextTypes",
                "mixins",
                "statics",
                "defaultProps",
                "constructor",
                "getDefaultProps",
                "state",
                "getInitialState",
                "getChildContext",
                "getDerivedStateFromProps",
                "onLaunch",
                "onReady",
                "onLoad",
                "componentWillMount",
                "UNSAFE_componentWillMount",
                "componentDidMount",
                "componentDidShow",
                "componentDidHide",
                "componentWillReceiveProps",
                "UNSAFE_componentWillReceiveProps",
                "shouldComponentUpdate",
                "componentWillUpdate",
                "UNSAFE_componentWillUpdate",
                "getSnapshotBeforeUpdate",
                "componentDidUpdate",
                "componentDidCatch",
                "componentDidCatchError",
                "componentDidNotFound",
                "componentWillUnmount",
              ],
              rendering: ["/^render.+$/", "render"],
            },
          },
        ],
      },
    },
  ],
};
