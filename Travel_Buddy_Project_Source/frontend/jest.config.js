// frontend/jest.config.js
module.exports = {
  rootDir: './',
  roots: ['<rootDir>/src'],
  testMatch: ['**/tests/**/*.test.js'],
  setupFilesAfterEnv: ['C:/Users/S567546/Documents/GDP-2/flight-booking-frontend/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Use babel-jest for .js, .jsx, .ts, and .tsx files
  },

  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
        expand: true,
      },
    ],
  ],
};

