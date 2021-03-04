const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require("path");
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
process.env.NODE_ENV = "production";
module.exports = merge(webpackBaseConfig, {
  mode: "production",
  entry: path.resolve(__dirname,'../src/index.js'),
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "index.js",
    libraryTarget: "umd",
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
});
