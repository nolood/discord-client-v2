module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "import", "prettier", "jest"],
  rules: {
    "import/extensions": [
      "error",
      {
        ts: "always",
        tsx: "never"
      }
    ],
    "@typescript-eslint/semi": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/consistent-type-assertions": "off"
  }
};
