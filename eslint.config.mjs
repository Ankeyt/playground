import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.Config[]} */
export default [
  // JavaScript Configuration
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: globals.browser, // Adjust based on your environment
    },
    rules: {
      ...js.configs.recommended.rules, // Standard JS rules
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  // TypeScript Configuration
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tseslint, // ✅ Fix: Use `tseslint`
    },
    rules: {
      ...tseslint.configs.recommended.rules, // Standard TypeScript rules
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
