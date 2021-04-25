module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    collectCoverage: false,
    testEnvironment: 'node',
    coverageReporters: ['json', 'lcov', 'text', 'clover']
};
