export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 72], // Max header length
    "header-full-stop": [2, "never", "."], // No period at the end of the header
    "subject-case": [0], // Flexible subject case
  },

  "type-enum": [
    2,
    "always",
    [
      "feat", // New feature
      "fix", // Bug fix
      "docs", // Documentation
      "style", // Code style changes (e.g., formatting)
      "refactor", // Code refactor (neither fix nor feat)
      "perf", // Performance improvements
      "test", // Adding tests
      "chore", // Miscellaneous changes (e.g., build scripts, config)
      "ci", // Continuous integration related changes
      "security", // Security related changes
      "release", // Release version
      "migration", // Database migration
      "hotfix", // Urgent fixes to production
      "revert", // Reverting a previous commit
      "experiment", // Experimental changes
      "template", // Template-related changes
      "data", // Changes related to data models or database
    ],
  ],

  "scope-enum": [
    2,
    "always",
    [
      "ui", // UI-related changes
      "api", // API-related changes
      "auth", // Authentication and authorization
      "db", // Database-related changes
      "tests", // Tests-related changes
      "docs", // Documentation-related changes
      "build", // Build-related changes
      "deps", // Dependencies-related changes
      "ci", // CI/CD-related changes
      "config", // Configuration-related changes
      "security", // Security-related changes
      "styles", // CSS, SCSS, etc.
      "migration", // Migrations
      "components", // Frontend components
      "server", // Server-related changes
      "client", // Client-side related changes
    ],
  ],

  plugins: [
    {
      rules: {
        "header-max-length": ({ header }) => {
          return [
            header.length <= 72,
            `Commit message must be less than or equal to 72 characters (current length: ${header.length})`,
          ];
        },

        "header-full-stop": ({ header }) => {
          return [
            !header.endsWith("."),
            "Commit message must not end with a period",
          ];
        },

        "format-valid": ({ raw }) => {
          const regex = /^(\w+)\(([^)]+)\): (.+)$/;
          const match = regex.exec(raw);

          const isValid = match && match[1] && match[2] && match[3];
          return [
            isValid,
            `Commit message must be in the format: type(scope): subject — example: feat(api): add login endpoint`,
          ];
        },

        "type-enum": ({ type }) => {
          const validTypes = [
            "feat",
            "fix",
            "docs",
            "style",
            "refactor",
            "perf",
            "test",
            "chore",
            "ci",
            "security",
            "release",
            "migration",
            "hotfix",
            "revert",
            "experiment",
            "template",
            "data",
          ];
          return [
            validTypes.includes(type),
            `Invalid commit type. Allowed types are: ${validTypes.join(", ")}`,
          ];
        },

        "scope-enum": ({ scope }) => {
          const validScopes = [
            "ui",
            "api",
            "auth",
            "db",
            "tests",
            "docs",
            "build",
            "deps",
            "ci",
            "config",
            "security",
            "styles",
            "migration",
            "components",
            "server",
            "client",
          ];
          return [
            validScopes.includes(scope),
            `Invalid commit scope. Allowed scopes are: ${validScopes.join(", ")}`,
          ];
        },
      },
    },
  ],
};
