const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss']
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
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}