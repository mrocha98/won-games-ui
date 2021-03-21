module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/mock.ts(x)',
    '!src/**/*.stories.ts(x)',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts(x)'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/.jest/setup.ts'
  ],
  modulePaths: [
    '<rootDir>/src/',
    '<rootDir>/.jest'
  ],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
