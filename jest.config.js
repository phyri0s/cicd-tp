module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/'],
  reporters: [
    'default',
    [
      'jest-allure2',
      {
        resultsDir: 'allure-results',
        testCase: {
          labels: {
            epic: 'My Project',
            story: 'Tests'
          }
        }
      }
    ]
  ]
};
