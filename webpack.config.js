const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env, argv) => {
    const isDevMode = argv.mode === 'development';
    return {
        devtool: "source-map",
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.scss']
        },
        entry: {
            main: './src/index.tsx'
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: isDevMode ? "[name].[hash].js" : "[name].[contenthash].js"
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
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader',
                        'sass-loader']
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                // limit: 10000,
                                limit: false
                            }
                        }
                    ],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: isDevMode ? '[name].css' : '[name].[contenthash].css',
                chunkFilename: isDevMode ? '[id].css' : '[id].[contenthash].css'
            })
        ],
        optimization: {
            splitChunks: {
                chunks: "all"
            }
        }
    }
}