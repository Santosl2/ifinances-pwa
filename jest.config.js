/* eslint-disable @typescript-eslint/no-var-requires */
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
    "^@/components$": "<rootDir>/src/components/index.ts",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/testsUtils/(.*)$": "<rootDir>/src/testsUtils/$1",
    "^@/store/(.*)/(.*)$": "<rootDir>/src/store/$1/$2",
    "^@/store/(.*)$": "<rootDir>/src/store/$1",
    "^@/store$": "<rootDir>/src/store/index.ts",
    "^@/store/reducers$": "<rootDir>/src/store/reducers.ts",
    "^@/services/users$": "<rootDir>/src/services/users",
    "^@/services/(.*)$": "<rootDir>/src/services/api.ts",
    "^@/constants$": "<rootDir>/src/constants/index.ts",
    "^@/SEO$": "<rootDir>/src/SEO.tsx",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
