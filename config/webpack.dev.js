
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackBaseConfig = require("./webpack.base.js");
const { merge } = require("webpack-merge");
const HotBuild=require('../utils/hot-build')
module.exports = merge(webpackBaseConfig,
{
    mode: 'development',
    entry: {
        index: path.resolve(__dirname,'../src/main.js')   ,
    },
    devServer: {
        contentBase: '../dist',
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template:path.resolve(__dirname, '../public/index.html'),
        }),
        new HotBuild()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
})
