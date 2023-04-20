/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: false,
  collectCoverageFrom: [
    './src/**/*.tsx',
    '!./src/**/index.tsx',
    '!./src/__tests__/**'
  ],
};