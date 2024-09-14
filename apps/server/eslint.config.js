import globals from "globals";

import rootConfig from "../../eslint.config.mjs";

export default [
  { ignores: ["dist"] },
  ...rootConfig,
  { languageOptions: { globals: globals.node } },
];
