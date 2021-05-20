module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  globalSetup: '<rootDir>/lib/jest/setupEnv.ts',
  setupFilesAfterEnv: ['<rootDir>/lib/jest/setupTests.tsx'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.css$': '<rootDir>/mocks/file/cssTransform.js',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    /**
     * Path aliases
     */
    '^@hoc/(.*)': '<rootDir>/hoc/$1',
    '^@lib/(.*)': '<rootDir>/lib/$1',
    '^@utils/(.*)': '<rootDir>/utils/$1',
    '^@hooks/(.*)': '<rootDir>/hooks/$1',
    '^@pages/(.*)': '<rootDir>/pages/$1',
    '^@styles/(.*)': '<rootDir>/styles/$1',
    '^@context/(.*)': '<rootDir>/context/$1',
    '^@components/(.*)': '<rootDir>/components/$1',
    '^@mocks/(.*)': '<rootDir>/mocks/$1',
    '^@types-app/(.*)': '<rootDir>/types/$1',
    /**
     * Mocks
     */
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/mocks/file/fileMock.js',
  },
};
