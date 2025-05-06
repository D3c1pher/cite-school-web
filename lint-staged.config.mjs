console.log("🔧 Running lint-staged config...");
console.log("📦 Linting and formatting staged files...");

export default {
  "src/**/*.{js,ts,jsx,tsx}": [
    "pnpm run type-check",
    "pnpm run lint",
    "pnpm run format",
  ],
};
