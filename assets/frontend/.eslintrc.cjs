module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/comma-dangle": ["off", "always-multiline"],
    "@typescript-eslint/triple-slash-reference": ["off"],
    "@typescript-eslint/semi": ["off"],
    "@typescript-eslint/member-delimiter-style": ["off"],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/no-confusing-void-expression": ["off"],
    "@typescript-eslint/consistent-type-definitions": ["off"],
    "@typescript-eslint/strict-boolean-expressions": ["off"],
    "@typescript-eslint/indent": ["off"],
    "@typescript-eslint/no-misused-promises": ["off"],
    "@typescript-eslint/promise-function-async": ["off"],
  },
};
