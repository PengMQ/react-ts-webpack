const path = require('path');
module.exports = {
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    entry: {
        main: './src/index.tsx'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.min.js"
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_moduls/,
                use: [
                    {
                        loader: "awesome-typescript-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    }
}