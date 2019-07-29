module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
],
   parserOptions:  {
      ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
      sourceType:  'module',  // Allows for the use of imports
    },
    env: {
      node: true,
      browser: true,
      jest: true,
    },
    rules: {
      // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
      "no-prototype-builtins": "off",
      // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
      "import/prefer-default-export": "off",
      // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
      "react/destructuring-assignment": "off",
      // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
      "react/jsx-filename-extension": "off",
      // Use function hoisting to improve code readability
      "no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true },
      ],
      // Makes no sense to allow type inferrence for expression parameters, but require typing the response
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true, typedefs: true },
      ],
      // Common abbreviations are known and readable
      "unicorn/prevent-abbreviations": "off",
    },
  }