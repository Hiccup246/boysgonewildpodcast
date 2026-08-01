import jseslint from "@eslint/js";
import { globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  globalIgnores(["node_modules", "build", "dist", ".react-router"]),

  jseslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      "simple-import-sort": simpleImportSort,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      // imports
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // TS hygiene
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],

      // React safety (minimal but important)
      "react/react-in-jsx-scope": "off",
    },
  },

  eslintConfigPrettier,
];
