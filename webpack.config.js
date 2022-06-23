const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, 'src', 'main.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(mp[3|4])$/i,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'img-optimize-loader',
                options: {
                    compress: {
                        mode: 'high',
                        webp: true,
                        gifsicle: true,
                        disableOnDevelopment: false
                    }
                }
            },
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src', 'index.html')
        }),
    ]
};