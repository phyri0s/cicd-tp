module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/'],
  reporters: [
    'default',
    [
      'jest-json-reporter',
      {
        outputFile: 'test-results.json'
      }
    ]
  ]
};
