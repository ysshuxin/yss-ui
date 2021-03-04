const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require("path");
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
process.env.NODE_ENV = "production";
module.exports = merge(webpackBaseConfig, {
  mode: "production",
  entry: path.resolve(__dirname,'../src/index.js'),
  output: {
    filename: '[name].js',
  },
  plugins: [
    new VueLoaderPlugin()
  ]
});
