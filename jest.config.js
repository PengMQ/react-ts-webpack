// module.exports = {
//     roots: ['<rootDir>/src'],
//     setupFiles: [
//         '<rootDir>/test.setup.js',
//         '<rootDir>/test.shim.js'
//     ],
//     transform: {
//         '^.+\\.tsx?$': 'ts-jest',
//     },
//     moduleNameMapper: {
//         "\\.(css|scss)": "identity-obj-proxy",
//         "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/testMocks/assetsMocks.js"
//     },
//     testRegex: '^.+\\.test\\.(ts|tsx)$',
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// };

module.exports = {
    //...other config
    moduleNameMapper: {
        //...other config
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/testMocks/assetsMocks.js"
    }
};