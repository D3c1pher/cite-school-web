export default {
  extends: [],
  rules: {
    "header-max-length": [2, "always", 50],
    "header-case": [2, "always", "sentence-case"],
    "header-full-stop": [2, "never", "."],
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
      },
    },
  ],
};
