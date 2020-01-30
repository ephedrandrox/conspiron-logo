var path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');


module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        contentBase: 'webroot',
        historyApiFallback: true

    },
    output: {
        filename: 'conspiron-logo-chunk.js',
        path: path.resolve(__dirname, 'webroot/'),
        chunkFilename: "chunk-[name].[contenthash].js",
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: '/node_modules',
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'ttf-loader',
                        options: {
                            name: './fonts/[hash].[ext]',
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            cache: true,
            title: 'Conspiron Logo Build',
            favicon: null,
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
};
