import jseslint from "@eslint/js";
import { globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import reactPlugin from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  jseslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  ...tailwind.configs["flat/recommended"],
  eslintConfigPrettier,
  globalIgnores(["node_modules", "build"]),
];
