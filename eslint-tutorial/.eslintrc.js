module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "error", // console.logをコードに残しておいてはいけない。
    camelcase: ["error", { properties: "never" }], // 変数名はキャメルケースにすること(プロパティ名を除く)。
  },
};
