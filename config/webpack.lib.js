const path = require("path");
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
const { getEntry } = require("../utils/build");
process.env.NODE_ENV = "production";
module.exports = merge(webpackBaseConfig, {
  mode: "production",
  entry: () =>
    new Promise(async (resolve, reject) => {
      let {fileObj} = await getEntry();
        console.log(fileObj)
      resolve(fileObj);
    }),
  output: {
    path: path.resolve(__dirname, "../lib"),
    libraryTarget: "umd",
  },
    watch: true,
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    }
});
