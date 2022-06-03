module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^.+\\.(css|scss|svg|png)$': '<rootDir>/src/unit-test/jest-stub.js',
        '^containers(.*)$': '<rootDir>/src/containers$1',
        '^design-tokens(.*)$': '<rootDir>/src/design-tokens$1',
        '^components(.*)$': '<rootDir>/src/components$1',
        '^core(.*)$': '<rootDir>/src/core$1',
        '^store(.*)$': '<rootDir>/src/store$1',
        '^hooks(.*)$': '<rootDir>/src/hooks$1',
        '^routes(.*)$': '<rootDir>/src/routes$1',
        '^typings(.*)$': '<rootDir>/src/typings$1',
    },
};