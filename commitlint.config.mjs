export default {
  extends: [],
  rules: {
    "header-max-length": [2, "always", 50],
    "header-case-start-capital": [2, "always"],
    "header-end-period": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "header-max-length": ({ header }) => {
          return [
            header.length <= 50,
            `Commit message must be less than or equal to 50 characters`,
          ];
        },
        "header-case-start-capital": ({ header }) => {
          return [
            /^[A-Z]/.test(header),
            "Commit message must start with a capital letter",
          ];
        },
        "header-end-period": ({ header }) => {
          return [/\.$/.test(header), "Commit message must end with a period"];
        },
      },
    },
  ],
};
