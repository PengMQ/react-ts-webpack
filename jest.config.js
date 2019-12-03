module.exports = {
    roots: ['<rootDir>/src'],
    setupFiles: [
        '<rootDir>/test.setup.js',
        '<rootDir>/test.shim.js'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        "\\.(css|scss)": "identity-obj-proxy"
    },
    testRegex: '^.+\\.test\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};