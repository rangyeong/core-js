import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // isString:true, // isString메서드를 글로벌로 인식시켜서 써도 빨간 줄 안나오게 하는 방법
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];

