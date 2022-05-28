module.exports = {
  setupFilesAfterEnv: ['jest-plugin-context/setup', './jest.setup'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/procedure-of-assignments/',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
