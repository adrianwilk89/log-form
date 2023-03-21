const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
    entry: path.resolve(__dirname, './index.jsx'),
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: 'brainhub.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            Redux: path.resolve(__dirname, 'src/redux'),
            Common: path.resolve(__dirname, 'src/common'),
        },
        extensions: [".jsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ]
}