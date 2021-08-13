module.exports = {
  moduleDirectories: ['node_modules', 'js'],
  moduleFileExtensions: ['js'],
  resetMocks: true,
  restoreMocks: true,
  testMatch: ['<rootDir>/**/*.test.js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
