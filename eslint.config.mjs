import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [".next/**", "node_modules/**", "coverage/**", "dist/**"],
  },

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ["**/*.{jsx,js,mjs,cjs}"],
    ...pluginReact.configs.flat.recommended,
  },

  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
  },

  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
  },

  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
  },
]);
