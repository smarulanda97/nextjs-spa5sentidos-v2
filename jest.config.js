module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  globalSetup: '<rootDir>/lib/jest/setupEnv.ts',
  setupFilesAfterEnv: ['<rootDir>/lib/jest/setupTests.tsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    /**
     * Path aliases
     */
    '^@hoc/(.*)': '<rootDir>/src/hoc/$1',
    '^@lib/(.*)': '<rootDir>/src/lib/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '^@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@pages/(.*)': '<rootDir>/src/pages/$1',
    '^@styles/(.*)': '<rootDir>/src/styles/$1',
    '^@context/(.*)': '<rootDir>/src/context/$1',
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@queries/(.*)': '<rootDir>/src/queries/$1',
    '^@mocks/(.*)': '<rootDir>/src/mocks/$1',
    '^@test/(.*)': '<rootDir>/src/test/$1',
    '^@types-app/(.*)': '<rootDir>/src/types/$1',
    /**
     * Mocks
     */
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/mocks/fileMock.ts',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
};
