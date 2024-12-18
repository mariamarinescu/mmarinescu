module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^modules/(.*)$': '<rootDir>/src/modules/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
