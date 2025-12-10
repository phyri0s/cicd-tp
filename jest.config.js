module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './allure-results',
      outputName: 'junit.xml',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}',
      ancestorSeparator: ' › ',
      usePathAsClassName: true
    }]
  ]
};
