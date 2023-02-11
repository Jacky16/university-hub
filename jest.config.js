const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/components/(.*)$": "<rootDir>/components/$1",

    "^@/pages/(.*)$": "<rootDir>/pages/$1",

    "^@factories/(.*)$": "<rootDir>/factories/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testMatch: ["**/*.test.{tsx,ts}"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/_app.tsx",
    "!**/_document.tsx",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.{js, cjs}",
    "!<rootDir>/coverage/**",
    "!<rootDir>/snapshots/**",
  ],
};

module.exports = createJestConfig(customJestConfig);
